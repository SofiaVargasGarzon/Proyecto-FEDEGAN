document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu-button');
    const content = document.getElementById('content');

    function cargarVista(ruta, btnSeleccionado = null) {
        // Quitar clase activa de todos los botones
        buttons.forEach(b => b.classList.remove('active'));

        // Activar el botón correspondiente (si se pasó)
        if (btnSeleccionado) {
            btnSeleccionado.classList.add('active');
        }

        // Obtener el nombre base del archivo sin extensión
        const nombreArchivo = ruta.split('/').pop().replace('.html', '');
        const nombreCarpeta = nombreArchivo.charAt(0).toUpperCase() + nombreArchivo.slice(1);

        const rutaCompleta = `../${nombreCarpeta}/${ruta}`;
        console.log('Cargando vista:', rutaCompleta);

        fetch(rutaCompleta)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`No se pudo cargar ${ruta}`);
                }
                return response.text();
            })
            .then(html => {
                // Crear un contenedor temporal para extraer scripts
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                // Extraer y ejecutar los scripts antes de insertar el HTML
                const scripts = tempDiv.querySelectorAll('script');

                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    if (script.src) {
                        newScript.src = script.src;
                        newScript.async = false;
                    } else {
                        newScript.textContent = script.textContent;
                    }
                    document.head.appendChild(newScript);
                    script.remove(); // quitar el script del HTML para no duplicarlo
                });

                // Insertar el contenido HTML sin los scripts
                content.innerHTML = tempDiv.innerHTML;
            })
            .catch(error => {
                console.error('Error cargando archivo:', error);
                content.innerHTML = `<p>Error al cargar la vista: ${error.message}</p>`;
            });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const ruta = btn.getAttribute('data-file');
            cargarVista(ruta, btn);
        });
    });

    // Cargar Campanias por defecto
    const defaultRuta = 'campanias.html';
    const defaultBtn = [...buttons].find(btn => btn.getAttribute('data-file') === defaultRuta);
    cargarVista(defaultRuta, defaultBtn);
});

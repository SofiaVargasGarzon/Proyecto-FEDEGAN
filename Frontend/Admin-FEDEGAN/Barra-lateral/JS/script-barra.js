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
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                const scripts = tempDiv.querySelectorAll('script');
                content.innerHTML = tempDiv.innerHTML;

                scripts.forEach(script => {
                    if (!script.src) return;

                    const newScript = document.createElement('script');
                    newScript.src = script.src;
                    newScript.async = false;
                    document.head.appendChild(newScript);
                });

                // Esperar a que el contenido esté en el DOM
                setTimeout(() => {
                    if (ruta.includes('trazabilidad')) {
                        if (typeof inicializarTrazabilidad === 'function') {
                            inicializarTrazabilidad();
                        } else {
                            console.warn('No se encontró la función inicializarTrazabilidad');
                        }
                    }
                }, 1000);
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

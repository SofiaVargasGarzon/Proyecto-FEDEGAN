function inicializarTrazabilidad() {
    // Inicializar el mapa
    const map = L.map('map').setView([4.570868, -74.297333], 5);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Datos de ejemplo actualizados a rutas internacionales
    const movimientosData = [
  {
    id: 1,
    origen: {
      lat: 4.8087, lng: -75.7333,
      finca: "Puerto de Bogotá",
      municipio: "Bogotá, COL",
      region: "Exportación"
    },
    destino: {
      lat: 25.7617, lng: -80.1918,
      finca: "Miami Port Terminal",
      municipio: "Miami, USA",
      region: "Importación"
    },
    fechaSalida: "2023-06-15",
    fechaLlegada: "2023-06-16",
    tipo: "bovino",
    cantidad: 120,
    estadoSanitario: "Saludable",
    vacunacion: "Completa",
    responsable: "AgroExport S.A.S.",
    guiaSanitaria: "INT-EXP-2023-001"
  },
  {
    id: 2,
    origen: {
      lat: 19.4326, lng: -99.1332,
      finca: "Central de Ganado CDMX",
      municipio: "Ciudad de México, MEX",
      region: "Importación"
    },
    destino: {
      lat: 6.2442, lng: -75.5812,
      finca: "Puerto de Medellín",
      municipio: "Medellín, COL",
      region: "Distribución"
    },
    fechaSalida: "2023-07-01",
    fechaLlegada: "2023-07-04",
    tipo: "porcino",
    cantidad: 85,
    estadoSanitario: "Saludable",
    vacunacion: "Parcial",
    responsable: "AgroImport S.L.",
    guiaSanitaria: "INT-IMP-2023-007"
  },
  {
    id: 3,
    origen: {
      lat: -12.0464, lng: -77.0428,
      finca: "Puerto del Callao",
      municipio: "Lima, PER",
      region: "Exportación"
    },
    destino: {
      lat: 10.9685, lng: -74.7813,
      finca: "Puerto de Barranquilla",
      municipio: "Barranquilla, COL",
      region: "Recepción"
    },
    fechaSalida: "2023-08-10",
    fechaLlegada: "2023-08-12",
    tipo: "ovino",
    cantidad: 60,
    estadoSanitario: "Observación",
    vacunacion: "Completa",
    responsable: "TransAndina Ltda.",
    guiaSanitaria: "INT-IMP-2023-015"
  },
  {
    id: 4,
    origen: {
      lat: -34.6037, lng: -58.3816,
      finca: "Terminal Ganadero Buenos Aires",
      municipio: "Buenos Aires, ARG",
      region: "Exportación"
    },
    destino: {
      lat: 4.7109, lng: -74.0721,
      finca: "Centro de Distribución Cundinamarca",
      municipio: "Bogotá, COL",
      region: "Recepción"
    },
    fechaSalida: "2023-09-03",
    fechaLlegada: "2023-09-08",
    tipo: "bovino",
    cantidad: 150,
    estadoSanitario: "Saludable",
    vacunacion: "Completa",
    responsable: "GlobalMeat S.A.",
    guiaSanitaria: "INT-EXP-2023-024"
  },
  {
    id: 5,
    origen: {
      lat: 11.0041, lng: -74.8069,
      finca: "Finca El Rosario",
      municipio: "Santa Marta, COL",
      region: "Producción"
    },
    destino: {
      lat: 10.3910, lng: -75.4794,
      finca: "Centro Agroindustrial Cartagena",
      municipio: "Cartagena, COL",
      region: "Procesamiento"
    },
    fechaSalida: "2023-10-01",
    fechaLlegada: "2023-10-02",
    tipo: "caprino",
    cantidad: 40,
    estadoSanitario: "Enfermo",
    vacunacion: "Ninguna",
    responsable: "CampoFresco S.A.",
    guiaSanitaria: "LOC-MOV-2023-088"
  },
  {
    id: 6,
    origen: {
      lat: 3.4516, lng: -76.5320,
      finca: "Finca La Esperanza",
      municipio: "Cali, COL",
      region: "Producción"
    },
    destino: {
      lat: 4.7109, lng: -74.0721,
      finca: "Centro de Evaluación Bogotá",
      municipio: "Bogotá, COL",
      region: "Control Sanitario"
    },
    fechaSalida: "2023-11-05",
    fechaLlegada: "2023-11-06",
    tipo: "bovino",
    cantidad: 70,
    estadoSanitario: "En evaluación",
    vacunacion: "Completa",
    responsable: "Vacas y Más Ltda.",
    guiaSanitaria: "LOC-MOV-2023-103"
  },
  {
    id: 7,
    origen: {
      lat: 13.6929, lng: -89.2182,
      finca: "Zona Franca Agropecuaria",
      municipio: "San Salvador, SLV",
      region: "Exportación"
    },
    destino: {
      lat: 6.2518, lng: -75.5636,
      finca: "Planta de Refrigerados Antioquia",
      municipio: "Medellín, COL",
      region: "Procesamiento"
    },
    fechaSalida: "2023-12-10",
    fechaLlegada: "2023-12-15",
    tipo: "porcino",
    cantidad: 95,
    estadoSanitario: "Saludable",
    vacunacion: "Completa",
    responsable: "AgroSal S.A. de C.V.",
    guiaSanitaria: "INT-EXP-2023-042"
  },
  {
    id: 8,
    origen: {
      lat: 5.0703, lng: -75.5138,
      finca: "Finca La Colina",
      municipio: "Manizales, COL",
      region: "Producción"
    },
    destino: {
      lat: 4.4389, lng: -75.2322,
      finca: "Planta Lácteos Tolima",
      municipio: "Ibagué, COL",
      region: "Procesamiento"
    },
    fechaSalida: "2024-01-20",
    fechaLlegada: "2024-01-21",
    tipo: "bovino",
    cantidad: 110,
    estadoSanitario: "Saludable",
    vacunacion: "Completa",
    responsable: "Lácteos El Campo",
    guiaSanitaria: "LOC-MOV-2024-011"
  },
  {
    id: 9,
    origen: {
      lat: -16.5000, lng: -68.1500,
      finca: "Complejo Ganadero La Paz",
      municipio: "La Paz, BOL",
      region: "Exportación"
    },
    destino: {
      lat: 10.3910, lng: -75.4794,
      finca: "Puerto de Cartagena",
      municipio: "Cartagena, COL",
      region: "Recepción"
    },
    fechaSalida: "2024-02-15",
    fechaLlegada: "2024-02-20",
    tipo: "ovino",
    cantidad: 55,
    estadoSanitario: "Observación",
    vacunacion: "Parcial",
    responsable: "BolivAgro Ltda.",
    guiaSanitaria: "INT-EXP-2024-009"
  },
  {
    id: 10,
    origen: {
      lat: 6.2518, lng: -75.5636,
      finca: "Centro Ganadero Antioquia",
      municipio: "Medellín, COL",
      region: "Producción"
    },
    destino: {
      lat: 7.1193, lng: -73.1227,
      finca: "Finca Los Pinos",
      municipio: "Bucaramanga, COL",
      region: "Distribución"
    },
    fechaSalida: "2024-03-10",
    fechaLlegada: "2024-03-11",
    tipo: "caprino",
    cantidad: 30,
    estadoSanitario: "Saludable",
    vacunacion: "Completa",
    responsable: "Distribuciones del Norte",
    guiaSanitaria: "LOC-MOV-2024-035"
  }
];

    
    // Función para mostrar los movimientos en el mapa
    function mostrarMovimientos(movimientos) {
      // Limpia el mapa de marcadores y líneas previas
      map.eachLayer(function(layer) {
        if (layer instanceof L.Marker || layer instanceof L.Polyline) {
          map.removeLayer(layer);
        }
      });
      
      // Añade los nuevos marcadores y líneas
      movimientos.forEach(mov => {
        // Marcador de origen (azul)
        const markerOrigen = L.marker([mov.origen.lat, mov.origen.lng], {
          icon: L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: #3b82f6; width: 15px; height: 15px; border-radius: 50%;"></div>`,
            iconSize: [15, 15],
            iconAnchor: [7, 7]
          })
        }).addTo(map);
        
        // Marcador de destino (rojo)
        const markerDestino = L.marker([mov.destino.lat, mov.destino.lng], {
          icon: L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: #ef4444; width: 15px; height: 15px; border-radius: 50%;"></div>`,
            iconSize: [15, 15],
            iconAnchor: [7, 7]
          })
        }).addTo(map);
        
        // Línea que conecta origen y destino
        const polyline = L.polyline([
          [mov.origen.lat, mov.origen.lng],
          [mov.destino.lat, mov.destino.lng]
        ], {
          color: '#79b51b',
          weight: 3,
          opacity: 0.7,
          dashArray: mov.estadoSanitario === 'Alerta' ? '5, 5' : null
        }).addTo(map);
        
        // Añadir eventos de clic a los elementos
        markerOrigen.on('click', () => mostrarDetalleMovimiento(mov));
        markerDestino.on('click', () => mostrarDetalleMovimiento(mov));
        polyline.on('click', () => mostrarDetalleMovimiento(mov));
        
        // Tooltips para los marcadores
        markerOrigen.bindTooltip(`Origen: ${mov.origen.finca}, ${mov.origen.municipio}`);
        markerDestino.bindTooltip(`Destino: ${mov.destino.finca}, ${mov.destino.municipio}`);
      });
    }
    
    // Función para mostrar el detalle de un movimiento
    function mostrarDetalleMovimiento(movimiento) {
      // Mostrar el panel
      document.getElementById('detalleMovimiento').classList.remove('hidden');
      
      // Llenar los datos
      document.getElementById('fincaOrigen').textContent = movimiento.origen.finca;
      document.getElementById('municipioOrigen').textContent = movimiento.origen.municipio;
      document.getElementById('regionOrigen').textContent = movimiento.origen.region;
      document.getElementById('fechaSalida').textContent = formatearFecha(movimiento.fechaSalida);
      
      document.getElementById('fincaDestino').textContent = movimiento.destino.finca;
      document.getElementById('municipioDestino').textContent = movimiento.destino.municipio;
      document.getElementById('regionDestino').textContent = movimiento.destino.region;
      document.getElementById('fechaLlegada').textContent = formatearFecha(movimiento.fechaLlegada);
      
      document.getElementById('tipoAnimal').textContent = capitalizar(movimiento.tipo);
      document.getElementById('cantidadAnimales').textContent = movimiento.cantidad;
      document.getElementById('estadoSanitario').textContent = movimiento.estadoSanitario;
      document.getElementById('estadoVacunacion').textContent = movimiento.vacunacion;
      document.getElementById('responsableMovimiento').textContent = movimiento.responsable;
      document.getElementById('guiaSanitaria').textContent = movimiento.guiaSanitaria;
      
      // Si el estado sanitario es de alerta, resaltarlo
      if (movimiento.estadoSanitario === 'Alerta') {
        document.getElementById('estadoSanitario').classList.add('text-red-600', 'font-semibold');
      } else {
        document.getElementById('estadoSanitario').classList.remove('text-red-600', 'font-semibold');
      }
    }
    
    // Evento para cerrar el detalle
    document.getElementById('cerrarDetalle').addEventListener('click', function() {
      document.getElementById('detalleMovimiento').classList.add('hidden');
    });
    
    // Simular carga de datos
    setTimeout(function() {
      // Ocultar el indicador de carga
      document.getElementById('mapLoading').style.display = 'none';
      
      // Mostrar movimientos en el mapa
      mostrarMovimientos(movimientosData);
      
      // Actualizar estadísticas
      document.getElementById('totalMovimientos').textContent = movimientosData.length;
      document.getElementById('periodoMovimientos').textContent = 'Periodo: 15/06/2023 - 27/06/2023';
      
      document.getElementById('totalAlertas').textContent = '1';
      document.getElementById('ultimaAlerta').textContent = 'Última alerta: 25/06/2023';
      
      document.getElementById('porcentajeVacunacion').textContent = '78%';
      document.getElementById('totalVacunados').textContent = 'Animales vacunados: 140 de 180';
    }, 1500);
    
    // Evento para aplicar filtros
    document.getElementById('applyFilters').addEventListener('click', function() {
      // Mostrar el indicador de carga
      document.getElementById('mapLoading').style.display = 'flex';
      
      // Simulamos procesamiento de filtros
      setTimeout(function() {
        const tipoAnimal = document.getElementById('animalType').value;
        const region = document.getElementById('region').value;
        
        // Filtrar datos según las selecciones
        let datosFiltrados = [...movimientosData];
        
        if (tipoAnimal !== 'todos') {
          datosFiltrados = datosFiltrados.filter(m => m.tipo === tipoAnimal);
        }
        
        if (region !== 'todas') {
          datosFiltrados = datosFiltrados.filter(m => 
            m.origen.region.toLowerCase() === region || 
            m.destino.region.toLowerCase() === region
          );
        }
        
        // Ocultar el indicador de carga
        document.getElementById('mapLoading').style.display = 'none';
        
        // Actualizar el mapa y las estadísticas
        mostrarMovimientos(datosFiltrados);
        
        // Actualizar estadísticas según el filtro
        document.getElementById('totalMovimientos').textContent = datosFiltrados.length;
        
        // Alerta para indicar que se aplicaron filtros
        const totalOriginal = movimientosData.length;
        if (datosFiltrados.length < totalOriginal) {
          alert(`Se muestran ${datosFiltrados.length} de ${totalOriginal} movimientos según los filtros aplicados.`);
        }
      }, 1000);
    });
    
    // Evento para restablecer filtros
    document.getElementById('resetFilters').addEventListener('click', function() {
      document.getElementById('animalType').value = 'todos';
      document.getElementById('region').value = 'todas';
      document.getElementById('dateFrom').value = '';
      document.getElementById('dateTo').value = '';
      
      // Mostrar el indicador de carga
      document.getElementById('mapLoading').style.display = 'flex';
      
      // Simular procesamiento
      setTimeout(function() {
        // Ocultar el indicador de carga
        document.getElementById('mapLoading').style.display = 'none';
        
        // Restaurar mapa original
        mostrarMovimientos(movimientosData);
        
        // Restaurar estadísticas originales
        document.getElementById('totalMovimientos').textContent = movimientosData.length;
        document.getElementById('periodoMovimientos').textContent = 'Periodo: 15/06/2023 - 27/06/2023';
      }, 800);
    });
    
    // Funciones auxiliares
    function formatearFecha(fechaStr) {
      const fecha = new Date(fechaStr);
      return fecha.toLocaleDateString('es-CO');
    }
    
    function capitalizar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    // ------------------------
    // Datos simulados para tabla y gráficas
    // ------------------------
    const datosDetalle = movimientosData.map(mov => ({
      fecha: mov.fechaSalida,
      tipo: mov.tipo,
      origen: mov.origen.finca,
      municipioOrigen: mov.origen.municipio,
      destino: mov.destino.finca,
      municipioDestino: mov.destino.municipio,
      cantidad: mov.cantidad,
      estadoSanitario: mov.estadoSanitario
    }));
    
    // Poblamos la tabla
    const tbody = document.getElementById('tablaMovimientos');
    datosDetalle.forEach(d => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="px-4 py-2 text-sm">${new Date(d.fecha).toLocaleDateString('es-CO')}</td>
        <td class="px-4 py-2 text-sm">${d.tipo.charAt(0).toUpperCase()+d.tipo.slice(1)}</td>
        <td class="px-4 py-2 text-sm">${d.origen}</td>
        <td class="px-4 py-2 text-sm">${d.municipioOrigen}</td>
        <td class="px-4 py-2 text-sm">${d.destino}</td>
        <td class="px-4 py-2 text-sm">${d.municipioDestino}</td>
        <td class="px-4 py-2 text-sm">${d.cantidad}</td>
        <td class="px-4 py-2 text-sm">${d.estadoSanitario}</td>
      `;
      tbody.appendChild(tr);
    });
    
    // Preparar datos para gráficas
    const labels = datosDetalle.map(d => new Date(d.fecha).toLocaleDateString('es-CO'));
    const cantidades = datosDetalle.map(d => d.cantidad);
    const alertasCount = datosDetalle.filter(d => d.estadoSanitario === 'Alerta').length;
    const saludableCount = datosDetalle.filter(d => d.estadoSanitario === 'Saludable').length;
    const parcialCount = datosDetalle.filter(d => d.estadoSanitario === 'Parcial').length;
    
    // Gráfico de Barras
    new Chart(document.getElementById('chartBar'), {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Cantidad movida',
          backgroundColor: '#79b51b',
          data: cantidades
        }]
      },
      options: { responsive: true }
    });

    // ------------------------
    // Inicializar gráfica de pastel (bovinos vs porcinos)
    // ------------------------
    // Contar tipos
    const bovinoCount = datosDetalle.filter(d => d.tipo === 'bovino').length;
    const porcinoCount = datosDetalle.filter(d => d.tipo === 'porcino').length;
    // Crear pie chart
    new Chart(document.getElementById('chartPie'), {
      type: 'pie',
      data: {
        labels: ['Bovinos', 'Porcinos'],
        datasets: [{
          data: [bovinoCount, porcinoCount],
          backgroundColor: ['#1a5336', '#f0ad4e']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              padding: 16
            }
          },
          tooltip: {
            callbacks: {
              label: context => {
                const total = bovinoCount + porcinoCount;
                const value = context.parsed;
                const pct = ((value / total) * 100).toFixed(1);
                return `${context.label}: ${pct}% (${value})`;
              }
            }
          }
        }
      }
    });
    
    // ③ new function to export the table as CSV
    function downloadTableAsExcel() {
      let csv = ''
      const rows = document.querySelectorAll('#movimientosTable tr')
      rows.forEach(row => {
        const cols = row.querySelectorAll('th, td')
        const rowData = []
        cols.forEach(col => rowData.push(col.innerText.trim()))
        csv += rowData.join(',') + '\n'
      })
      
      const a = document.createElement('a')
      a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv)
      a.download = 'movimientos.csv'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
}

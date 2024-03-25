
//const token = '124d01fe-c92c-4921-9f66-3ec4c1739e1d'; // Utiliza token pruebas

// mi-script.js

// Función para obtener y mostrar los datos
async function obtenerDatosCURP() {
    try {
        const curpInput = document.getElementById('curp-input').value;
        const apiUrl = `https://api.valida-curp.com.mx/curp/obtener_datos/?token=124d01fe-c92c-4921-9f66-3ec4c1739e1d&curp=${curpInput}`;

        const response = await fetch(apiUrl, { method: 'GET' }); // Realizamos una solicitud GET
        if (!response.ok) {
            throw new Error('Error al obtener datos de la API');
        }
        const data = await response.json();

        // Extrae los datos relevantes
        const solicitante = data.response.Solicitante;
        const docProbatorio = data.response.DocProbatorio;
        
        



        // Crea una lista en el HTML
        const ul = document.getElementById('datos-list');
        ul.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

        for (const key in solicitante) {
            const li = document.createElement('li');
            li.textContent = `${key}: ${solicitante[key]}`;
            ul.appendChild(li);
        }

        for (const key in docProbatorio) {
            const li = document.createElement('li');
            li.textContent = `${key}: ${docProbatorio[key]}`;
            ul.appendChild(li);
        }

        



    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
    }
}

const url = 'https://jsonplaceholder.typicode.com/photos';

async function obtenerDatos(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

function enviarInformacion() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000);
    });
}

async function mostrarMensaje() {
    const mensaje = await enviarInformacion();
    console.log(mensaje);
}

async function main() {
    const datos = await obtenerDatos(url);
    datos.slice(0, 20).forEach((item) => {
        console.log(item.title);
    });
    mostrarMensaje();
}

main();

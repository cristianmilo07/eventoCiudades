// Instanciar ambas clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

// listener al buscador

document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();

    // Leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    // Leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    // Revisar que haya algo escrito en el buscador
    if(textoBuscador !== '') {
        console.log('Buscando...')
    }else{
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4')
    }
    debugger
})
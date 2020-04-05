class Interfaz {
    constructor(){
        // Inicializa la app al instanciar
        this.init();
        // Leer el resultado
        this.listado = document.getElementById('resultado-eventos')
    }
    // Médoto cuando inicialice la app
    init(){
        this.imprimirCategorias();
    }
    // Método categorias
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                // mirar como trae la linea 17 descomentar console.log(categorias);
                const cats = categorias.categorias.categories;
                
                // seleccionar el select de categories
                const selectCategoria = document.getElementById('listado-categorias');
                // recorremos el arreglo e imprimimos los <options>
                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategoria.appendChild(option)
                })

            })
    }
}
class EventBrite {
    constructor (){
        this.token_auth = 'PIPZLEWU6IMM4BQDZC53';
        this.ordenar = 'date';
    }

    // obtiene las catergorias en init()
    async obtenerCategorias(){
        // consultar las categorias a las REST API de event brite,
        const respuestaCategorias = await fetch (`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        //Esperar la repuesta de las categorias y devolver un JSON
        const categorias = await respuestaCategorias.json();
        // devolvemos el resultado
        return {
            categorias
        }
    }

}
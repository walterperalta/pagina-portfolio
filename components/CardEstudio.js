let CardEstudio = {
    template: `
        <div class="card-outline">
            <ul>
                <li ><p class="titulo-blanco" v-text="titulo"></p></li>
            </ul>
            <p class="titulo-blanco" v-text="institucion"></p>
            <p  v-text="fecha"></p>
            <p  v-text="descripcion"></p>
        </div>
    `,
    props:{
        titulo: {
            type: String,
            required: true,
        },
        institucion: {
            type: String,
            required: true,
        },
        fecha: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
    }
}
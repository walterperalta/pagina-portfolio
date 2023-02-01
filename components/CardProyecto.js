let CardProyecto = {
    template: `
            <article  class="card-item" >
                <div class="card-content">
                    <figure class="card-picture">
                        <img class="screen" :src="imagen" alt="homeBanking" >
                    </figure>

                    <div class="card-texts">
                        <h2 class="titulo-blanco" v-text="titulo"></h2>
                        <p class="card-paragraph texto-blanco-extralight" v-text="descripcion"></p>
                        <div class="card-tecnologias">
                            <p v-for="tecnologia in tecnologias" v-text="tecnologia"></p>
                        </div>
                    </div>

                    <div class="card-botones">
                        <a :href="repo" target="_blank" class="boton-orange">Repositorio</a>
                        <a :href="pagina" target="_blank" class="boton-orange">Pagina Web</a>
                    </div>            
                </div>
            </article>
    `,
    data () {
        return {
            
        }
    },
    props: {
        imagen: {
            type: String,
            required: true,
        },
        titulo: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        repo: {
            type: String,
            required: true,
        },
        pagina: {
            type: String,
            required: true,
        },
        tecnologias: {
            type: String,
            required: true,
        },
    },
}
Vue.component('principal', {
    template: `
        <div>
            <BarraNavegacion/>
            <section class="inicio" id="inicio">
                <div class="logo-grande">
                    <img src="./archivos/Principal.png" alt="logo">
                </div>
                <h1 class="texto-azul-extralight">Desarrollo Web & Diseño Gráfico</h1>
            </section>
            <section class="presentacion">
            <h1 class="titulo-blanco" >Hola, mi nombre es Walter!</h1>
                <p>Tengo desarrollado proyectos de manera
                    individual y grupal. Cuento con experiencia
                    en coordinación de equipos en el
                    voluntariado Rotaract, donde se desarrollan
                    varias capacitaciones entre ellas de
                    liderazgo.
                    Además, de manera freelance he trabajado
                    en el diseño, producción y edición de
                    contenido multimedia.</p>
            </section>
            <div class="centrar">
                <Skills/>
            </div>
            <ProyectosWeb/>
            <Estudios/>
            <div class="centrar">
                <Contacto/>
            </div>
            <footer>
                <p>Walter Peralta © 2022</p>
            </footer>

        </div>
    `,
    data () {
        return {
            
        }
    },
    components: {
        BarraNavegacion,
        Skills,
        ProyectosWeb,
        Estudios,
        Contacto,
    },
    methods: {
       
    }
})
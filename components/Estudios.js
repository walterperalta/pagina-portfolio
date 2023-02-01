let Estudios = {
    template: `
        <section class="estudios" id="estudios">
            <h1 class="titulo-blanco">Estudios</h1>
            <div class="tarjeta">
            <CardEstudio v-for="estudio in estudios"
                :titulo="estudio.titulo"
                :institucion="estudio.institucion"
                :fecha="estudio.fecha"
                :descripcion="estudio.descripcion"
            />
            </div>
        </section>
    `,
    data() {
        return {
            estudios : [
                {
                  titulo : "Desarrollador Java Full Stack",
                  institucion : "MindHub",
                  fecha : "marzo - junio 2022",
                  descripcion : "JavaScript, PostgreSQL, Hibernate, Spring Security, Spring Data, Git, API Rest, Scrum, Postman, IntelliJ."
                },
                {
                  titulo : "Analista de Conocimiento Dimensión Programador",
                  institucion : "Programa 111mil",
                  fecha : "marzo - noviembre 2017",
                  descripcion : "Del programa 111 mil y con docentes de la UTN. Capacitado en Base de Datos, Programación – JAVA y Desarrollo de Software."
                },
                {
                  titulo : "Ingeniería en Sistemas de Información",
                  institucion : "Universidad Tecnológica Nacional",
                  fecha : "marzo 2017 - presente",
                  descripcion : "Cursando actualmente materias de segundo y tercer año."
                },
              ],
      
        }
    },
    props:{

    },
    components: {
        CardEstudio,
    }
}
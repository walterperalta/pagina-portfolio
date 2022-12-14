Vue.createApp({
    data() {
      return {
        paginas : [
          {
            imagen : "./archivos/homeBanking.png",
            titulo : "Royal OAK",
            descripcion : "Proyecto grupal final de un e-comerce de delivery de comidas y bebidas",
            repo : "https://github.com/walterperalta/RoyalOak",
            pagina : "http://royaloak25.herokuapp.com/web/index.html"
          },
          {
            imagen : "./archivos/homeBanking.png",
            titulo : "Homebanking",
            descripcion : "Proyecto individual en el que se construyó un homebanking con registro, login, manejo de cuentas y tarjetas, transferencias y préstamos.",
            repo : "https://github.com/walterperalta/HomeBanking-Aplication",
            pagina : "https://homebanking-aplication-production.up.railway.app/web/index.html"
          },
          {
            imagen : "./archivos/homeBanking.png",
            titulo : "Franco PetShop",
            descripcion : "petshop tradicional donde se consume una API para el listado de productos.",
            repo : "https://github.com/walterperalta/Franco-Petshop",
            pagina : "https://github.com/walterperalta/Franco-Petshop"
          },
          {
            imagen : "./archivos/homeBanking.png",
            titulo : "Api-Congressman",
            descripcion : "proyecto individual en el que se consume una api pública sobre los congresistas de USA, y se dispone la información usando cálculos y filtros.",
            repo : "https://github.com/walterperalta/Data-Insight-Group",
            pagina : "https://walterperalta.github.io/Data-Insight-Group/"
          },
        ],
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
        ]
      }
    },
  
    created() {
    },
  
    methods: {
      hola(){
        console.log('hola desde @click')
      }
    },
  
    computed: {
  
  
    },
  
  }).mount('#app')
  
  
  
  
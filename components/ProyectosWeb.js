let ProyectosWeb = {
    template: `
        <section class="proyectos" id="proyectos">
            <h1 class="titulo-azul">Proyectos de Desarrollo Web</h1>
            <div class="tarjeta">
                <CardProyecto v-for ="pagina in paginas" 
                    :imagen="pagina.imagen"
                    :titulo="pagina.titulo"
                    :descripcion="pagina.descripcion"
                    :repo="pagina.repo"
                    :pagina="pagina.pagina"
                    :tecnologias="pagina.tecnologias"
                />
            </div>

        </section>
    `,
    data () {
        return {
            paginas : [
                {
                  imagen : "https://i.postimg.cc/jdVrZMdr/dashboard-royal-oak.png",
                  titulo : "Royal OAK",
                  descripcion : "E-comerce de delivery de comidas y bebidas. Pedidos y pago online, perfil de usuario, entre otras funciones.",
                  repo : "https://github.com/walterperalta/RoyalOak",
                  pagina : "http://royaloak25.herokuapp.com/web/index.html",
                  tecnologias : ["#JAVA","#SPRINGBOOT","#JAVASCRIPT","#VUE","#BOOSTRAP"]     
                },
                {
                  imagen : "./archivos/homeBanking.png",
                  titulo : "Homebanking",
                  descripcion : "Proyecto con funciones de registro, login, manejo de cuentas y tarjetas, transferencias y préstamos.",
                  repo : "https://github.com/walterperalta/HomeBanking-Aplication",
                  pagina : "https://homebanking-aplication-production.up.railway.app/web/index.html",
                  tecnologias : ["#JAVA","#SPRINGBOOT","#JAVASCRIPT","#VUE","#BOOSTRAP"]     
                },
                {
                  imagen : "https://i.postimg.cc/0jFQzV5k/dashboard-franco-petshop1.png",
                  titulo : "Franco PetShop",
                  descripcion : "Petshop que ofrece articulos para comprar y pagar de manera online.",
                  repo : "https://github.com/walterperalta/Franco-Petshop",
                  pagina : "https://github.com/walterperalta/Franco-Petshop",
                  tecnologias : ["#CSS","#JAVASCRIPT","#VUE","#BOOSTRAP"]     
                },
                {
                  imagen : "https://i.postimg.cc/tJc0dgcy/dashboard-data-insight-group.png",
                  titulo : "Api-Congressman",
                  descripcion : "Consumiendo una api pública sobre los congresistas de USA, se disponen los datos por medio de filtros interactivos.",
                  repo : "https://github.com/walterperalta/Data-Insight-Group",
                  pagina : "https://walterperalta.github.io/Data-Insight-Group/",
                  tecnologias : ["#CSS","#JAVASCRIPT","#VUE","#BOOSTRAP"]     
                },
            ],
            
        }
    },
    components: {
        CardProyecto,
    }
}
let Contacto = {
    template: `
        <section class="contacto" id="contacto">
            <h1 class="titulo-azul">Contacto</h1>
            <div class="img-contacto">
                <img src="./archivos/simplificado1.png" alt="logo_horizontal">
            </div>
            <div class="iconos">
                <a href="https://wa.me/5493794097220" target="_blank" class="icono-contacto" @click=""><img src="./archivos/whatsapp (1).png" alt="icono"></a>
                <a href="mailto:walterperalta896@gmail.com" target="_blank" class="icono-contacto" @click=""><img src="./archivos/email.png" alt="icono"></a>
                <a href="https://www.linkedin.com/in/walteroperalta/" target="_blank" class="icono-contacto" @click=""><img src="./archivos/linkedin.png" alt="icono"></a>
                <a href="https://github.com/walterperalta" target="_blank" class="icono-contacto" @click=""><img src="./archivos/github.png" alt="icono"></a>
            </div>
            <a href="./archivos/Walter Orlando Peralta1.pdf" target="_blank" class="boton-orange">Descargar CV</a>
        </section>
    `,
    data () {
        return {
            
        }
    },
}
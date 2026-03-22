export function renderSobre(container) {
    container.innerHTML = `
        <section class="sobre">
            <div class="sobre__hero">
                <h1 class="sobre__title">Sobre a ConverDec Machine</h1>
                <p class="sobre__description">
                    A ConverDec Machine é uma SPA desenvolvida por um aluno da SPTech para facilitar a conversão entre diferentes sistemas numéricos, como decimal, binário, octal e hexadecimal. Nosso objetivo é fornecer uma ferramenta intuitiva e eficiente para estudantes, profissionais de TI e entusiastas de tecnologia.
                </p>
            </div>
            <ul class="sobre__features">
            <h2 class="sobre__subtitle">Recursos Principais</h2>
                <li class="sobre__features-item">Conversão rápida e precisa entre sistemas numéricos</li>
                <li class="sobre__features-item">Interface amigável</li>
                <li class="sobre__features-item">Suporte para múltiplos modos de conversão: Input, Slider e Random</li>
                <li class="sobre__features-item">Código aberto e disponível no GitHub</li>
            </ul>
            <ul class="sobre__technologies">
            <h2 class="sobre__subtitle">Tecnologias Utilizadas</h2>
                <li class="sobre__technologies-item">HTML5, CSS3 e JavaScript ES6+</li>
                <li class="sobre__technologies-item">Construção feita em JavaScript Puro, simulando React e Vue.js</li>
            </ul>
            <div class="sobre__footer">
                <p class="sobre__footer-text">
                    A ConverDec Machine é um projeto em constante evolução, e estamos sempre abertos a sugestões e contribuições da comunidade. Se você tiver alguma ideia ou quiser colaborar, sinta-se à vontade para entrar em contato conosco!
                </p>
                <p class="sobre__footer-contact">
                    Contato: <a href="mailto:gustavo.vsantana@sptech.school" class="sobre__footer-contact--link">gustavo.vsantana@sptech.school</a>
                </p>
            </div>

        </section>
    `;
}
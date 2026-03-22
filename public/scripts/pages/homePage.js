import { navigate } from "../core/router.js";

export function renderHome(container) {    
    container.innerHTML = `
        <section class="home">
            <div class="home__hero">
                <h1 class="home__hero-title">Bem-vindo à ConverDec Machine</h1>
                <p class="home__hero-subtitle">Converta números com facilidade e explore ferramentas incríveis.</p>
                <button class="home__cta-btn" data-page="conversor">Começar Conversão</button>
            </div>
        </section>

        <section class="features">        
            <div class="features__content"> 
            <h2 class="features__title">Conversões</h2>
                <div class="features__content--conversoes">
                    <div class="features__content--conversoes-item">
                            <h3 class="features__title--item">Decimal:</h3>
                            <ul class="features__list">
                                <li class="features__list-item">Para binário</li>
                                <li class="features__list-item">Para octal</li>
                                <li class="features__list-item">Para hexadecimal</li>
                            </ul>
                    </div>
                    <div class="features__content--conversoes-item">
                            <h3 class="features__title--item">Binário:</h3>
                            <ul class="features__list">
                                <li class="features__list-item">Para decimal</li>
                                <li class="features__list-item">Para octal</li>
                                <li class="features__list-item">Para hexadecimal</li>
                            </ul>
                    </div>
                    <div class="features__content--conversoes-item">
                            <h3 class="features__title--item">Octal:</h3>
                            <ul class="features__list">
                                <li class="features__list-item">Para decimal</li>
                                <li class="features__list-item">Para binário</li>
                                <li class="features__list-item">Para hexadecimal</li>
                            </ul>
                    </div>
                    <div class="features__content--conversoes-item">
                            <h3 class="features__title--item">Hexadecimal:</h3>
                            <ul class="features__list">
                                <li class="features__list-item">Para decimal</li>
                                <li class="features__list-item">Para octal</li>
                                <li class="features__list-item">Para binário</li>
                            </ul>
                    </div>
                </div>
            </div>
                <div class="features__content-modos">
                    <h2 class="features__title">Modos de Conversão</h2>
                    <div class="features__content--modos">
                        <ul class="features__list">
                            <li class="features__list-item">Modo Input: Digite um número e converta para outros sistemas numéricos</li>
                            <li class="features__list-item">Modo Slider: Use o slider para selecionar um valor e ver a conversão em tempo real</li>
                            <li class="features__list-item">Modo Random: Gere números aleatórios e veja suas conversões</li>
                        </ul>
                    </div>
                </div>
        </section>
    `;

    const ctaBtn = container.querySelector('.home__cta-btn');

    ctaBtn.addEventListener('click', () => {
        const page = ctaBtn.dataset.page;
        navigate(page, container);
    });
}
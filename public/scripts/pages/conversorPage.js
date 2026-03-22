import {
    decimalParaBinario, decimalParaOctal, decimalParaHexa,
    binarioParaDecimal, binarioParaOctal, binarioParaHexa,
    octalParaBinario, octalParaDecimal, octalParaHexa,
    hexaParaBinario, hexaParaDecimal, hexaParaOctal
} from "../services/converter.js";


// Isso aqui é um "mapa"
const conversoes = {
    decimal: {
        binario: decimalParaBinario,
        octal: decimalParaOctal,
        hexadecimal: decimalParaHexa
    },
    binario: {
        decimal: binarioParaDecimal,
        octal: binarioParaOctal,
        hexadecimal: binarioParaHexa
    },
    octal: {
        decimal: octalParaDecimal,
        binario: octalParaBinario,
        hexadecimal: octalParaHexa
    },
    hexadecimal: {
        decimal: hexaParaDecimal,
        binario: hexaParaBinario,
        octal: hexaParaOctal
    }
};


// essa bagaça toda é pra renderizar a pagina de conversão
export function renderConversor(container) {
    const state = {
        tipoOrigem: 'decimal',
        modo: 'input'
    };

    container.innerHTML = `
        <section class="conversorPage">
            <!-- Navbar: seleção de tipo de origem -->
            <section class="navbar">
                <h2 class="navbar__title">Conversor de Número</h2>
                <div class="navbar__buttons">
                    <button class="navbar__button-btn navbar__button-btn--active" data-tipo="decimal">Decimal</button>
                    <button class="navbar__button-btn" data-tipo="binario">Binário</button>
                    <button class="navbar__button-btn" data-tipo="octal">Octal</button>
                    <button class="navbar__button-btn" data-tipo="hexadecimal">Hexadecimal</button>
                </div>
            </section>

            <!-- Conversor: modo e resultados -->
            <section class="converter">
                <h2 class="converter__title">Converter de <span id="tipoAtual">Decimal</span></h2>
                
                <div class="converter__selector-wrapper">
                    <label for="converter-mode-select" class="converter__label">Escolha o modo: </label>
                    <select name="Modos" id="converter-mode-select" class="converter__select">
                        <option value="input">Modo Input</option>
                        <option value="slider">Modo Slider</option>
                        <option value="random">Modo Random</option>
                    </select>
                </div>
                
                <div id="converter-mode-container" class="converter__content converter__content--input"></div>
            </section>
        </section>
    `;

    // Aqui estamos pegando os elementos da página e armazenando em variáveis
    const navButtons = container.querySelectorAll('[data-tipo]');
    const tipoAtualSpan = container.querySelector('#tipoAtual');
    const modoSelect = container.querySelector('#converter-mode-select');
    const modoContainer = container.querySelector('#converter-mode-container');

    // Esta parte vai decidir qual modo renderizar
    function renderizar() {
        switch (state.modo) {
            case 'input':
                renderModoInput(modoContainer, state.tipoOrigem);
                break;
            case 'slider':
                renderModoSlider(modoContainer, state.tipoOrigem);
                break;
            case 'random':
                renderModoRandom(modoContainer, state.tipoOrigem);
                break;
        }
    }

    // Essa bomba aqui vai adicionar um evento para cada botão da navbar
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            state.tipoOrigem = btn.dataset.tipo;

            navButtons.forEach(b => b.classList.remove('navbar__button-btn--active'));
            btn.classList.add('navbar__button-btn--active');

            tipoAtualSpan.textContent = btn.textContent;

            renderizar();
        });
    });

    // Aqui ele ta mudando o modo de acordo com o valor do select
    modoSelect.addEventListener('change', () => {
        state.modo = modoSelect.value;
        renderizar();
    });

    renderizar();
}


// Essa parte renderiza o Modo Input
function renderModoInput(caixa, tipoOrigem) {

    // Aqui ele tá pegando, no mapa, os valores referente à sua chave e armazenando em "conversoesToipo" 
    const conversoresToipo = conversoes[tipoOrigem];

    // Object.keys() retorna as chaves do objeto, ou seja, os tipos de destino possíveis para o tipo de origem selecionado
    caixa.innerHTML = `
        <div class="converter__mode converter__mode--input">
            <h3 class="converter__mode-title">Modo Input</h3>
            
            <div class="converter__form-group">
                <input type="text" id="input-number" class="converter__input" placeholder="Digite um ${tipoOrigem}..." aria-label="Número para converter">
                <button id="btn-converter" class="converter__btn converter__btn--primary">Converter</button>
            </div>

            <div class="converter__results">
                ${Object.keys(conversoresToipo).map(destino => `
                    <div class="converter__result-item">
                        <h4 class="converter__result-label">Resultado ${destino}:</h4>
                        <p class="converter__result-value" data-destino="${destino}">-</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const input = caixa.querySelector('#input-number');
    const btn = caixa.querySelector('#btn-converter');

    btn.addEventListener('click', () => {
        const valor = input.value;
        if (!valor) return;

        // Aqui ele tá pegando cada função de conversão do tipo de origem selecionado, executando ela com o valor do input e atualizando o resultado na tela
        Object.entries(conversoresToipo).forEach(([destino, funcao]) => {
            const resultado = funcao(valor);
            caixa.querySelector(`[data-destino="${destino}"]`).textContent = resultado || '-';
        });
    });

}

function renderModoSlider(caixa, tipoOrigem) {
    if (tipoOrigem !== 'decimal') {
        caixa.innerHTML = '<p class="converter__message">Modo Slider disponível apenas para Decimal</p>';
        return;
    }

    const conversoresToipo = conversoes[tipoOrigem];

    caixa.innerHTML = `
        <div class="converter__mode converter__mode--slider">
            <h3 class="converter__mode-title">Modo Slider</h3>
            
            <div class="converter__slider-wrapper">
                <input type="range" id="slider-number" class="converter__slider" min="0" max="255" value="0" aria-label="Slider">
                <p class="converter__value-display">Valor: <span id="valorAtual">0</span></p>
            </div>

            <div class="converter__results">
                ${Object.keys(conversoresToipo).map(destino => `
                    <div class="converter__result-item">
                        <h4 class="converter__result-label">Resultado ${destino}:</h4>
                        <p class="converter__result-value" data-destino="${destino}">-</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const slider = caixa.querySelector('#slider-number');
    const valorAtual = caixa.querySelector('#valorAtual');

    function atualizar() {
        const valor = Number(slider.value);
        valorAtual.textContent = valor;

        Object.entries(conversoresToipo).forEach(([destino, funcao]) => {
            const resultado = funcao(valor);
            caixa.querySelector(`[data-destino="${destino}"]`).textContent = resultado || '-';
        });
    }

    slider.addEventListener('input', atualizar);
    atualizar();
}

function renderModoRandom(caixa, tipoOrigem) {
    const conversoresToipo = conversoes[tipoOrigem];

    caixa.innerHTML = `
        <div class="converter__mode converter__mode--random">
            <h3 class="converter__mode-title">Modo Random</h3>
            
            <div class="converter__form-group">
                <button id="btn-random" class="converter__btn converter__btn--primary">Gerar Número</button>
            </div>

            <p class="converter__value-display">Valor: <span id="valorAtual">-</span></p>

            <div class="converter__results">
                ${Object.keys(conversoresToipo).map(destino => `
                    <div class="converter__result-item">
                        <h4 class="converter__result-label">Resultado ${destino}:</h4>
                        <p class="converter__result-value" data-destino="${destino}">-</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const btn = caixa.querySelector('#btn-random');
    const valorAtual = caixa.querySelector('#valorAtual');

    btn.addEventListener('click', () => {
        const valor = Math.floor(Math.random() * 1023);
        valorAtual.textContent = valor;

        Object.entries(conversoresToipo).forEach(([destino, funcao]) => {
            const resultado = funcao(valor);
            caixa.querySelector(`[data-destino="${destino}"]`).textContent = resultado || '-';
        });
    });
}
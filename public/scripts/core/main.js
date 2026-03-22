console.log('Main.js Carregado!')

import { navigate } from "./router.js";

const app = document.getElementById('app')

navigate('home', app);

document.querySelectorAll('.header__nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        // envia os valores da variavel "page" e do elemento "app"
        navigate(page, app)
    })
})

const headerTitle = document.querySelector('.header__title');


headerTitle.addEventListener('click', () => {
    const page = headerTitle.dataset.page;
    navigate(page, app);
})
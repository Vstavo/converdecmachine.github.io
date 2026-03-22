import { renderConversor } from "../pages/conversorPage.js";
import { renderHome } from "../pages/homePage.js";
import { renderSobre } from "../pages/sobrePage.js";

const routes = {
    conversor: renderConversor,
    home: renderHome,
    sobre: renderSobre
};

export function navigate(page, container) {
    container.innerHTML = "";

    // recebe qual página deve ser renderizada de acordo com o valor do "page"
    const render = routes[page];

    if (render) {
        // diz para a conversorPage onde renderizar a página, no caso, no elemento "app"
        render(container);
    }
}
export function decimalParaBinario(valor) {
    if (isNaN(valor)) return "";

    const decimal = parseInt(valor, 10)

    return decimal.toString(2);
}

export function decimalParaOctal(valor) {
    if (isNaN(valor)) return "";

    const decimal = parseInt(valor, 10)

    return decimal.toString(8);
}

export function decimalParaHexa(valor) {
    if (isNaN(valor)) return "";

    const decimal = parseInt(valor, 10)

    return decimal.toString(16);
}

export function binarioParaDecimal(valor) {
    if (!valor || isNaN(parseInt(valor, 2))) return "";

    return parseInt(valor, 2);
}

export function binarioParaOctal(valor) {
    if (!valor || isNaN(parseInt(valor, 2))) return "";

    const decimal = parseInt(valor, 2);
    return decimal.toString(8);
}

export function binarioParaHexa(valor) {
    if (!valor || isNaN(parseInt(valor, 2))) return "";

    const decimal = parseInt(valor, 2);
    return decimal.toString(16);
}

export function octalParaBinario(valor) {
    if (!valor || isNaN(parseInt(valor, 8))) return "";

    const decimal = parseInt(valor, 8);
    return decimal.toString(2);
}

export function octalParaDecimal(valor) {
    if (!valor || isNaN(parseInt(valor, 8))) return "";

    return parseInt(valor, 8);
}

export function octalParaHexa(valor) {
    if (!valor || isNaN(parseInt(valor, 8))) return "";

    const decimal = parseInt(valor, 8);
    return decimal.toString(16);
}

export function hexaParaBinario(valor) {
    if (!valor || isNaN(parseInt(valor, 16))) return "";

    const decimal = parseInt(valor, 16);
    return decimal.toString(2);
}

export function hexaParaDecimal(valor) {
    if (!valor || isNaN(parseInt(valor, 16))) return "";

    return parseInt(valor, 16);
}


export function hexaParaOctal(valor) {
    if (!valor || isNaN(parseInt(valor, 16))) return "";

    const decimal = parseInt(valor, 16);
    return decimal.toString(8);
}
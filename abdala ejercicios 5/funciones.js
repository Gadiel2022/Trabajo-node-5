function getSeniales() {
    const seniales = [];
    while (true) {
        const entrada = prompt("Ingrese una señal (ingrese un número negativo para terminar): ");
        const valor = parseFloat(entrada);
        if (valor < 0 || isNaN(valor)) {
            break;
        }
        seniales.push(valor);
    }
    return seniales;
}

function normalizarCuadrante(angulo) {
    const angulo_normalizado = angulo % 360;
    if (angulo_normalizado < 0) {
        return angulo_normalizado + 360;
    } else {
        return angulo_normalizado;
    }
}

function obtenerCuadrante(angulo) {
    const angulo_normalizado = normalizarCuadrante(angulo);
    if (angulo_normalizado < 90) {
        return 'N';
    } else if (angulo_normalizado < 180) {
        return 'E';
    } else if (angulo_normalizado < 270) {
        return 'S';
    } else {
        return 'O';
    }
}

function obtenerSecuencia(seniales) {
    let secuencia = "";
    for (let i = 0; i < seniales.length; i++) {
        secuencia += obtenerCuadrante(seniales[i]) + " ";
    }
    return secuencia.trim();
}

function contarCiclos(secuencia) {
    const ciclos = ["NESO", "ESON", "SONE", "ONES", "ENOS", "NOSE"];
    let count = 0;
    for (let i = 0; i < secuencia.length - 3; i++) {
        const subSecuencia = secuencia.substring(i, i + 4);
        if (ciclos.includes(subSecuencia)) {
            count++;
        }
    }
    return count;
}

function calcularPorcentaje(secuencia) {
    const total = secuencia.length;
    const porcentaje_N = (secuencia.split('N').length - 1) / total * 100;
    const porcentaje_E = (secuencia.split('E').length - 1) / total * 100;
    const porcentaje_S = (secuencia.split('S').length - 1) / total * 100;
    const porcentaje_O = (secuencia.split('O').length - 1) / total * 100;
    return [porcentaje_N, porcentaje_E, porcentaje_S, porcentaje_O];
}

function main() {
    const seniales = getSeniales();
    const secuenciaCuadrantes = obtenerSecuencia(seniales);
    console.log("Secuencia de cuadrantes:", secuenciaCuadrantes);

    const ciclosCompletos = contarCiclos(secuenciaCuadrantes);
    console.log("Cantidad de ciclos completos:", ciclosCompletos);

    const porcentajes = calcularPorcentaje(secuenciaCuadrantes);
    console.log("Porcentaje de ocurrencias de cada cuadrante:");
    console.log("N:", porcentajes[0]);
    console.log("E:", porcentajes[1]);
    console.log("S:", porcentajes[2]);
    console.log("O:", porcentajes[3]);
}

main();

document.getElementById("calcular").addEventListener("click", calcularStickers);

function calcularStickers() {
    const sticker1Cantidad = parseInt(document.getElementById("sticker1input").value) || 0;
    const sticker2Cantidad = parseInt(document.getElementById("sticker2input").value) || 0;
    const sticker3Cantidad = parseInt(document.getElementById("sticker3input").value) || 0;

    const totalStickers = sticker1Cantidad + sticker2Cantidad + sticker3Cantidad;

    const resultadoParrafo = document.getElementById("resultado");

    if (totalStickers <= 10) {
        resultadoParrafo.textContent = "Llevas " + totalStickers + " stickers";
    } else {
        resultadoParrafo.textContent = "Llevas demasiados stickers";
    }
}

// ova funkcija stavlja dijelove slike u div sa id-om ryan_tiles
function createRyanTiles() {
    // slika se sastoji od 100 dijelova, 10 redova i 10 stupaca
    // dijelovi su imena image1x1.png, image1x2.png, image1x3.png, ...
    let ryanTiles = document.getElementById("ryan_tiles");
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let tile = document.createElement("img");
            tile.src = "slike/image" + j + "x" + i + ".png";
            tile.alt = "image" + i + "x" + j;
            tile.classList.add("tile");
            ryanTiles.appendChild(tile);
        }
    }
}

// pozovi funkciju kad se stranica učita
document.addEventListener("DOMContentLoaded", createRyanTiles); // pokrece main funkciju kada se ucita DOM
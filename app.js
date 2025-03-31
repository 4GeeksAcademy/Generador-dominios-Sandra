const pronombres = ["The", "Our", "My"];
const adjetivos = ["Lonely", "Spicy", "Happy"];
const sustantivos = ["Racoon", "House", "Car"];
const dominios = [".com", ".es", ".net"];

const dominiosGenerados = [];

for (let pronombre of pronombres) {
    for (let adjetivo of adjetivos) {
        for (let sustantivo of sustantivos) {
            for (let dominio of dominios) {
                dominiosGenerados.push(pronombre + adjetivo + sustantivo + dominio);
            }
        }
    }
}

console.log(dominiosGenerados);
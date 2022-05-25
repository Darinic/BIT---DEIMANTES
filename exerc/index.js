// Parašyti funkciją displayName() kuri priima objektą kaip argumentą ir atspausdina žmogaus vardą ir pavardę. Naudoti object destructuring funkcijos argumentą. Ir panaudoti template strings, kad atspausdinti vardą ir pavardę.
// Parašyti funkciją pavadinimu paskaiciuotiPardavimus() kuri kaip argumentą priims pardavimai masyvą ir grąžins masyvą su naujais raktažodžiais (kainaSuNuolaida ir viso). Raktažodis 'kainaSuNuolaida' yra apskaičiuojamas originaliKaina - (originaliKaina * nuolaida). Raktažodis 'viso' yra paskaičiuojamas kainaSuNuolaida * vnt. Turite panaudoti object destructuring ir objekto default reikšmė nuolaidos raktažodžiui. Default reikšmė turi būti 0.0.

const user = {
    vardas: 'Sam',
    pavarde: 'Alsauskas'
}

function displayName(obj) {
    console.log(`Vardas: ${obj.vardas}, Pavardė: ${obj.pavarde}`)
}
displayName(user)


const pardavimai = [
    { preke: 'PS4 Pro', vnt: 3, originaliKaina: 399.99 },
    { preke: 'Xbox One X', vnt: 1, originaliKaina: 499.99, nuolaida: 0.2 },
    { preke: 'Nintendo Switch', vnt: 4, originaliKaina: 299.99 },
    { preke: 'PS2 Console', vnt: 1, originaliKaina: 299.99, nuolaida: 0.8 },
    { preke: 'Nintendo 64', vnt: 2, originaliKaina: 199.99, nuolaida: 0.65 }
  ];
  
let rezultatas = []
function paskaiciuotiPardavimus(pardavimai) {
    pardavimai.forEach(element => {
        if(element.nuolaida == undefined) {
            element.nuolaida = 0
        }
        let info = {
            prekė: element.preke,
            originaliKaina: element.originaliKaina,
            kainaSuNuolaida: element.originaliKaina * (1 - element.nuolaida),
            vnt: element.vnt,
            viso: element.vnt * (element.originaliKaina * (1 - element.nuolaida))
        }
        rezultatas.push(info)
    });
}
paskaiciuotiPardavimus(pardavimai)
console.log(rezultatas)
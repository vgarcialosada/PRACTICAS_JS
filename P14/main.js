/*1. A partir de la pizza sustituías
todos los elemento del array por 🍺
cervezas:🍔🌯🍣🍕🍜🍱🍙🍘🥩
*/
console.log("***E1***");

arrayFood = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩"];
let counter = 0;
let totalLenght = arrayFood.length;
arrayFood.forEach((food) => {
  counter++;
  if (food === "🍕") {
    arrayFood.splice(counter);
    while (arrayFood.length < totalLenght) {
      arrayFood.push("🍺");
    }
  }
});
console.log(arrayFood);

/*
2. Encontrar si existe un elemento en el array que sea una piña.
🍕🍕🍍🍕🍕*/
console.log("***E2***");

arrayHawaiPizza = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log("***E1***");
arrayHawaiPizza.forEach((food) => {
  if (food === "🍍") {
    console.log("Pineapple detected.");
  }
});

/*
3. Quita la piña del siguiente array.
🍕🍕🍍🍕🍕*/
console.log("***E3***");
counter = 0;
arrayHawaiPizza.forEach((food) => {
  counter++;
  if (food === "🍍") {
    console.log("Pineapple detected.");
    arrayHawaiPizza.splice(counter - 1, 1);
    console.log("Pineapple removed.");
  }
});
console.log(arrayHawaiPizza);

console.log("***E4***");
/*
4. A partir del siguiente array 🍓🍋🍓🍋🍓
convierte todas las fresas en 🍄*/
fruitArray = ["🍓", "🍋", "🍓", "🍋", "🍓"];
counter = 0;
fruitArray.forEach((food) => {
  if (food === "🍓") {
    fruitArray.splice(counter, 1, "🍄");
  }
  counter++;
});
console.log(fruitArray);

console.log("***E5***");
/*
5. Añade el siguiente icono 🥵 inmediatamente después del cada
🌶️ en el siguiente array:
🌶️🥛🌶️🥛🌶️🥛*/
spicyArray = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];
counter = 0;
spicyArray.forEach((food) => {
  counter++;
  if (food === "🌶️") {
    spicyArray.splice(counter, 0, "🥵");
  }
});
console.log(spicyArray);
/*
6. Añade una 🃏 cartas comodín entre medio de dos cartas . Por
ejemplo:🎴🃏🎴 En el siguiente array:
🎴🎴🎴🃏🎴🎴🎴*/
console.log("***E5***");

cardsArray = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
counter = 0;
cardsArray.forEach((card) => {
  counter++;
  if (
    (card === "🎴") &
    (cardsArray[counter] !== "🃏" || counter === cardsArray.length)
  ) {
    cardsArray.splice(counter, 0, "🃏");
  }
});
if (
  cardsArray[cardsArray.length - 1] === "🎴" &&
  cardsArray[cardsArray.length - 2] === "🎴"
) {
  cardsArray.splice(cardsArray.length - 1, 0, "🃏");
}
console.log(cardsArray);

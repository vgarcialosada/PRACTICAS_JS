/*1. A partir de la pizza sustituΓ­as
todos los elemento del array por πΊ
cervezas:ππ―π£πππ±πππ₯©
*/
console.log("***E1***");

arrayFood = ["π", "π―", "π£", "π", "π", "π±", "π", "π", "π₯©"];
let counter = 0;
let totalLenght = arrayFood.length;
arrayFood.forEach((food) => {
  counter++;
  if (food === "π") {
    arrayFood.splice(counter);
    while (arrayFood.length < totalLenght) {
      arrayFood.push("πΊ");
    }
  }
});
console.log(arrayFood);

/*
2. Encontrar si existe un elemento en el array que sea una piΓ±a.
πππππ*/
console.log("***E2***");

arrayHawaiPizza = ["π", "π", "π", "π", "π"];
console.log("***E1***");
arrayHawaiPizza.forEach((food) => {
  if (food === "π") {
    console.log("Pineapple detected.");
  }
});

/*
3. Quita la piΓ±a del siguiente array.
πππππ*/
console.log("***E3***");
counter = 0;
arrayHawaiPizza.forEach((food) => {
  counter++;
  if (food === "π") {
    console.log("Pineapple detected.");
    arrayHawaiPizza.splice(counter - 1, 1);
    console.log("Pineapple removed.");
  }
});
console.log(arrayHawaiPizza);

console.log("***E4***");
/*
4. A partir del siguiente array πππππ
convierte todas las fresas en π*/
fruitArray = ["π", "π", "π", "π", "π"];
counter = 0;
fruitArray.forEach((food) => {
  if (food === "π") {
    fruitArray.splice(counter, 1, "π");
  }
  counter++;
});
console.log(fruitArray);

console.log("***E5***");
/*
5. AΓ±ade el siguiente icono π₯΅ inmediatamente despuΓ©s del cada
πΆοΈ en el siguiente array:
πΆοΈπ₯πΆοΈπ₯πΆοΈπ₯*/
spicyArray = ["πΆοΈ", "π₯", "πΆοΈ", "π₯", "πΆοΈ", "π₯"];
counter = 0;
arraylength = spicyArray.length;
function addFace(spicyArray) {
  spicyArray.forEach((food) => {
    counter++;
    if (food === "πΆοΈ") spicyArray.splice(counter, 0, "π₯΅");
  });

spicyArray.splice(spicyArray.lastIndexOf("πΆοΈ")+1,'π₯΅');
return spicyArray;
}
addFace(spicyArray);

console.log(spicyArray);
/*
6. AΓ±ade una π cartas comodΓ­n entre medio de dos cartas . Por
ejemplo:π΄ππ΄ En el siguiente array:
π΄π΄π΄ππ΄π΄π΄*/
console.log("***E5***");

cardsArray = ["π΄", "π΄", "π΄", "π", "π΄", "π΄", "π΄"];
counter = 0;
cardsArray.forEach((card) => {
  counter++;
  if (
    (card === "π΄") &
    (cardsArray[counter] !== "π")
  ) {
    cardsArray.splice(counter, 0, "π");
  }
});
if (
  cardsArray[cardsArray.length - 1] === "π΄" &&
  cardsArray[cardsArray.length - 2] === "π΄"
) {
  cardsArray.splice(cardsArray.length - 1, 0, "π");
}
console.log(cardsArray);

/*E1*/

function quickMaths(int1, int2, int3) {
  return int1 + int2 + int3;
}
console.log(
  quickMaths(
    Math.floor(Math.random() * 11),
    Math.floor(Math.random() * 11),
    Math.floor(Math.random() * 11)
  )
);

/*E2*/
function whatsYourName(name, surname1, surname2) {
  console.log(name + " " + surname1 + " " + surname2);
}
whatsYourName("Victor", "Garcia", "Losada");

/*E3*/
function compareNumbers(int1, int2) {
  if (int1 > int2) {
    return int1 +" mayor que "+int2;
  } else if (int2 > int1) {
    return int2 + " mayor que "+ int1;
  } else {
    return "Son iguales";
  }
}

let n1=Math.floor(Math.random() * 11);
let n2=Math.floor(Math.random() * 11);

console.log(compareNumbers(n1,n2));
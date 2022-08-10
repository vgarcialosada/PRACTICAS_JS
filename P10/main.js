/*E1*/
console.log("*****E1******");
stringTest = "aaaaeeeeeiiiioooouuu";
stringTest2 = "Barcelona";

function replaceAforO(str) {
  return str.replaceAll("a", "o");
}
console.log(replaceAforO(stringTest));
console.log(replaceAforO(stringTest2));

/*E2*/
console.log("*****E2******");

stringTest = "academia";
stringTest2 = "escuela";
function startsWithAca(str) {
  stringBegins = str[0] + str[1] + str[2];
  if (stringBegins === "aca") {
    return true;
  } else {
    return false;
  }
}
console.log(startsWithAca(stringTest));
console.log(startsWithAca(stringTest2));

/*E3*/
console.log("*****E3😀******");
stringTest="Hola";
stringTest2="Adios";
function greeting(str){
    if(str==="Hola"){return str.repeat(3);}
    else{return "Type Hola for greeting";}
}
console.log(greeting(stringTest));
console.log(greeting(stringTest2));
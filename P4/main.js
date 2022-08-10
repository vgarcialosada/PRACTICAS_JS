/*E1*/
const sayMyName = () => {
  let myName = "Victor";
  var surname = "Garcia";
  return myName + " " + surname;
};
let myName = sayMyName();
console.log(myName);

/*E2*/
function booleanCheck(boolean) {
console.log(boolean);
}
check=false;
booleanCheck(check);

/*E3*/
function countTo(array){
    array.forEach(element => {
        console.log(element);
    });
}
 five=[1,2,3,4,5];
 countTo(five);


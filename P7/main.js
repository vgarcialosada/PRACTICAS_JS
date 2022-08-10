/*E1*/
function whatsTheMonth(int) {
  switch (int) {
    case 1:
      return "January";

    case 2:
      return "February";

    case 3:
      return "March";
    case 4:
      return "April";

    case 5:
      return "May";

    case 6:
      return "June";

    case 7:
      return "July";

    case 8:
      return "August";

    case 9:
      return "September";

    case 10:
      return "October";

    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Not a month number";
  }
}

num = Math.floor(Math.random() * 13);
console.log("Month " + num + ": " + whatsTheMonth(num));

/*E2*/
numbers = ["1", "2", "3", "4", "5"];
function returnNumber(number) {
  switch (number) {
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    default:
      return 0;
  }
}
number = Math.floor(Math.random() * 6);
console.log(returnNumber(numbers[number]));

var userInput = prompt("Enter option \'a\' or \'b\': \na. Convert °F to °C\nb. Convert °C to °F");

if (userInput === "a") {
  var temp = prompt("Enter the temperature in degrees Fahrenheit.");

  if (isNaN(temp)) {
    console.log("Please enter a valid number of degrees.")
  }

  var celcius = (temp-32)*(5/9);
  celcius = celcius.toFixed(2);
  console.log(temp + "° Fahrenheit is equal to " + celcius + "° Celcius.");
} else if (userInput === "b") {
  var temp = prompt("Enter the temperature in degrees Celcius.");

  if (isNaN(temp)) {
    console.log("Please enter a valid number of degrees.")
  }

  var fahren = (temp*(9/5)+32);
  fahren = fahren.toFixed(2);
  console.log(temp + "° Celcius is equal to " + fahren + "° Fahrenheit.");
} else {
  console.log("Please enter \'a\' or \'b\'.")
}

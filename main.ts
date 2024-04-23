//          100 days of coding challenge ( DAY 35 )

// Question 01
function getRandomBoolean(): boolean{
  return Math.random() > 0.5;// Returns true if the random number is greater than 0.5
}
console.log(getRandomBoolean());
// --By comparing a random number to 0.5, we effectively get a true or false value randomly.
// Question 02
// --This function generates a random hexadecimal color code
function getRandomHexColor(): string {
  const color = '#' + Math.floor(Math.random()* 0xFFFFFF).toString(16).padStart(6, '0');
  return color;
}
console.log(getRandomBoolean());// --Outputs a random hex color code like #ff3e12
// Question 03 
function rollDice(): number{
  return Math.floor(Math.random() * 6)  + 1;
}
console.log(rollDice());// --Outputs a random number between 1 and 6


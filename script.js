//Använd prompt för att fråga användaren efter deras namn. Spara detta i en variabel och använd console.log för att visa ett hälsningsmeddelande som inkluderar deras namn.
const name = prompt("What is your name?");

console.log(`Your name is ${name}.`);

// Använd prompt för att fråga användaren efter deras födelseår. Spara detta i en variabel.
const yearOfBirth = prompt("What is your year of birth?");
const monthOfBirth = prompt("What is your year of birth?");


//Beräkna användarens ålder genom att subtrahera födelseåret från det aktuella året. Du kan få det aktuella året med new Date().getFullYear() eller bara hårdkoda in det. Spara resultatet i en variabel och använd console.log för att visa ett meddelande som inkluderar deras ålder.
const thisYear = new Date().getFullYear();
const thisMonth = new Date().getMonth() + 1;

let ageYear = thisYear - yearOfBirth;
let ageMonth = thisMonth - monthOfBirth;

console.log(`Your age is ${ageYear} year and ${ageMonth} months.`);

//Använd prompt för att fråga användaren efter två nummer. Spara dem i variabler.
const firstNumber = Number(prompt("Enter a number"));
const secondNumber = Number(prompt("Enter a second number"));

//Använd operatorerna +, -, *, och / för att utföra addition, subtraktion, multiplikation och division på dessa nummer. Använd console.log för att visa resultaten av dessa operationer.
let sum = firstNumber + secondNumber;
console.log(
  `The sum, the result of the addition of ${firstNumber} and ${secondNumber} is ${sum}.`
);
let difference = firstNumber - secondNumber;
console.log(`The difference, the result of the subtraction is ${difference}.`);
let product = firstNumber * secondNumber;
console.log(`The product, the result of the multiplication is ${product}.`);
if (secondNumber == 0) {
    console.log(`Division by 0 is not allowed.`);
} else {
  let quotient = firstNumber / secondNumber;
  console.log(`The quotient, the result of the division is ${quotient}.`);
}
//Använd alert för att meddela användaren att beräkningarna är klara och att de kan kontrollera konsolen för resultaten.
alert("Calcultions are finished! Look in the console.");

//.1
let prompt = require('prompt-sync')();
let run = true;

function temprature() {
    while (run) {
        let input = prompt('Enter your input: ')
        if (input === "kill") {
            run = false;
        } else {
            let numEntered = input.split(" ")

            if (Number(numEntered[0]) < 5) {
                console.log("kallt , ta en jacka")
            } else if (Number(numEntered[0]) >= 5 && Number(numEntered[0]) < 15) {
                console.log("Medel varmt")
            } else if (Number(numEntered[0] > 15)) {
                console.log("varmt som en bastu")
            } else {
                console.log("Please entrer a numbre")
            }
        }
    }
}

//.2

function checkWordInArray() {
    const arr = ["katt", "hund", "mus", "groda"];

    while (run) {
        let input = prompt("Enter word to check if in array ")
        if (input === "kill") {
            run = false;
        } else {
            let check = arr.find(word => word === input.toLowerCase())
            if (!check) {
                console.log("not found un array! ")
            } else {
                console.log("Finns i array!")
                console.log(arr.findIndex(word => word === check))
            }
        }
    }
}

//3.
function palindrom() {
    while (run) {
        let input = prompt("Enter word to check if palindrome <..> ")
        if (input === "kill") {
            run = false;
        } else {
            var re = "/[\W_]/g";
            var lowRegStr = input.toLowerCase().replace(re, '');
            var reverseStr = lowRegStr.split('').reverse().join('');
            if (reverseStr === lowRegStr) {
                console.log("Its a palindrome")
            } else {
                console.log("fake news")
            }
        }
    }
}
//4.
function wordCounter() {
    while (run) {
        let input = prompt("Count words ")
        if (input === "kill") {
            run = false;
        } else {
            console.log(input.split(" ").length)
        }
    }
}


//5.

function calculator() {
    while (run) {
        let input = prompt("Do you want to add or sub?")
        input === "kill" ? run = false : run = true;

        let numberOne;
        let numberTwo;

        switch (input) {
            case "add":
                numberOne = parseInt(prompt("Enter first number: "));
                numberTwo = parseInt(prompt("Enter sencond number: "));

                isNaN(numberOne.valueOf()) || isNaN(numberTwo.valueOf()) ?
                    console.log("please use numbers!") :
                    console.log("Result of ", numberOne, " + ", numberTwo, " = ", numberOne + numberTwo);

                break;
            case "sub":
                numberOne = parseInt(prompt("Enter first number: "));
                numberTwo = parseInt(prompt("Enter sencond number: "));
                isNaN(numberOne.valueOf()) || isNaN(numberTwo.valueOf()) ?
                    console.log("please use numbers!") :
                    console.log("Result of ", numberOne, " - ", numberTwo, " = ", numberOne - numberTwo);

                break;
            default:
                console.log("Not a valid command, try again!")
                break;
        }
    }
}


// 6.

function primeNum() {
    while (run) {

        let input = prompt("Enter number to check if its prime: ")
        input === "kill" ? run = false : run = true;
        let num = parseInt(input);
        let isPrime = true;


        for (let i = 3; i < num; i += 2) {
            if (num % i === 0) {
                isPrime = false
                break;
            }
        }
        isPrime ? console.log("The number is a prime number") : console.log("The number isnt a prime number!")
    }
}

//7.

function intrestCalc() {
    while (run) {
        let input = prompt("Enter start capital, number of years and intrest rate ")
        input === "kill" ? run = false : run = true;

        let inputNumbers = input.split(" ");
        let capital = inputNumbers[0];
        let years = inputNumbers[1];
        let intrestRate = 1 + inputNumbers[2] / 100;
        for (let i = 0; i < years; i++) {
            capital = capital * intrestRate
        }
        let totalAmount = Number(capital).toFixed(2)
        console.log("You will have: ", totalAmount, " after ", years, " with ", inputNumbers[2], "% intrest per year")

    }
}

//8.

function circleCalc() {
    while (run) {
        let input = prompt("Enter start capital, number of years and intrest rate ")
        input === "kill" ? run = false : run = true;


    }
}




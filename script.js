/*
Create a function called convertToWord(number) it will receive a number and it will return a string  with the number in words in English.
input: 1
output: one
First make it work with numbers from 0 to 10
*/


function convertToWord(number) {
    let numbersArray = [];
    let words = ["zero", "one","two", "three", "four", "five", "six", "seven", "eight", "nine", "ten","eleven", "twelve","thirteen", "fourteen", "fifthteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one","twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty" ];

    for(let j = 0; j <= 30; j++) {
        numbersArray.push(j);
    }

    for(let i = 0; i < numbersArray.length && words.length; i++) {
        if (number == numbersArray[i] ) {
            return words[i];
        }
    }
    console.log(numbersArray);
}
console.log( convertToWord(30));

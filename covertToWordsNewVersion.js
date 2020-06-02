/*
Create a function called convertToWords(number) it will receive a number and it will return a string  with the number written in letters.
input: 1
output: one
First make it work with numbers from 0 to 10
*/

function convertToWords(number) {
    let TwoDigitsNumbersEnding = "teen";
    let twentyAndPlus = "twenty";
    let thirtyAndPlus = "thirty";
    let fortyAndPlus = "forty";
    let fiftyAndPlus = "fifty";
    let sixtyAndPlus = "sixty";
    let seventyAndPlus = "seventy";
    let eightyAndPlus = "eighty";
    let ninetyAndPlus = "ninety";
    let oneHundredAndPlus = "one hundred"
    let lastDigit = number - parseInt((number / 10)) * 10;

    if (number < 10) {
        return convertSingleDigitNumberToWords(number);
    } else if (number >= 10 && number < 20) {
        if (number == 10) {
            return "ten";
        } else {
            switch (lastDigit) {
                case 1:
                    return "eleven";
                case 2:
                    return "twelve";
                case 3:
                    return "thir" + TwoDigitsNumbersEnding;
                case 5:
                    return "fifth" + TwoDigitsNumbersEnding;
                default:
                    if (lastDigit >= 0 && lastDigit <= 9) {
                        return convertSingleDigitNumberToWords(lastDigit) + TwoDigitsNumbersEnding;
                    }
            }
        }
    }
    switch (true) {
        case (number == 20):
            return twentyAndPlus;
        case (number > 20 && number < 30):
            return twentyAndPlus + "-" + convertSingleDigitNumberToWords(lastDigit);
        case (number == 30):
            return thirtyAndPlus;
        case (number > 30 && number < 40):
            return thirtyAndPlus + "-" + convertSingleDigitNumberToWords(lastDigit);
        case (number == 40):
            return fortyAndPlus;
        case (number > 40 && number < 50):
            return fortyAndPlus + "-" + convertSingleDigitNumberToWords(lastDigit);
        case (number == 50):
            return fiftyAndPlus;
        case (number > 50 && number < 60):
            return fiftyAndPlus + "-" + convertSingleDigitNumberToWords(lastDigit);
        case (number == 60):
            return sixtyAndPlus;
        case (number > 60 && number < 70):
            return sixtyAndPlus + "-" + convertSingleDigitNumberToWords(lastDigit);
        case (number == 70):
            return seventyAndPlus;
        case (number > 70 && number < 80):
            return seventyAndPlus + "-" + convertSingleDigitNumberToWords(lastDigit);
        case (number == 80):
            return eightyAndPlus;
        case (number > 80 && number < 90):
            return eightyAndPlus + "-" + convertSingleDigitNumberToWords(lastDigit);
        case (number == 90):
            return ninetyAndPlus;
        case (number > 90 && number <= 99):
            return ninetyAndPlus + "-" + convertSingleDigitNumberToWords(lastDigit);
        case (number == 100):
            return oneHundredAndPlus;
        case (number > 100 && number < 110):
            let n = retrieveTheLastNumberOfAThreeDigitsNumber(number)
            return oneHundredAndPlus + " " + "and " + convertSingleDigitNumberToWords(n);
    }
}

function retrieveTheLastNumberOfAThreeDigitsNumber(number) {
    let numberToString = number.toString();
    let lastDigitOfAThreeDigitNumber = numberToString.slice(2, 3);

    return parseInt(lastDigitOfAThreeDigitNumber);
}
function convertSingleDigitNumberToWords(number) {
    let singleDigitsNumbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let singleDigitsNumbersNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for (let j = 0; j < singleDigitsNumbersArray.length; j++) {
        if (number == singleDigitsNumbersArray[j]) {
            return singleDigitsNumbersNames[j];
        }
    }
}
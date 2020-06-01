/*
Create a function called convertToWords(number) it will receive a number and it will return a string  with the number written in letters.
input: 1
output: one
First make it work with numbers from 0 to 10
*/

function convertToWords(number) {
    let singleDigitsNumbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let singleDigitsNumbersNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

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
        for (let j = 0; j < singleDigitsNumbersArray.length; j++) {
            if (number == singleDigitsNumbersArray[j]) {
                return singleDigitsNumbersNames[j];
            }
        }
    } else if (number >= 10 && number < 20) {
        if (number == 10) {
            return "ten";
        } else {
            for (let i = 0; i < singleDigitsNumbersArray.length; i++) {
                if (lastDigit != 0) {
                    if (lastDigit == 1) {
                        return "eleven";
                    } else {
                        if (lastDigit == 2) {
                            return "twelve";
                        } else if (lastDigit == 3) {
                            return "thir" + TwoDigitsNumbersEnding;
                        } else if (lastDigit == 5) {
                            return "fifth" + TwoDigitsNumbersEnding;
                        } else {
                            if (lastDigit == singleDigitsNumbersArray[i]) {
                                return singleDigitsNumbersNames[i] + TwoDigitsNumbersEnding;
                            }
                        }
                    }
                }
            }
        }
    }
    if (number >= 20 && number < 30) {
        if (number == 20) {
            return twentyAndPlus;
        } else {
            // let twentiesLastDigit = number - parseInt((number / 10)) * 10;
            for (let k = 0; k < singleDigitsNumbersArray.length; k++) {
                if (lastDigit != 0) {
                    if (lastDigit == singleDigitsNumbersArray[k]) {
                        return twentyAndPlus + "-" + singleDigitsNumbersNames[k];
                    }
                }
            }

        }
    }
    if (number >= 30 && number < 40) {
        if (number == 30) {
            return thirtyAndPlus;
        } else {
            for (let k = 0; k < singleDigitsNumbersArray.length; k++) {
                if (lastDigit != 0) {
                    if (lastDigit == singleDigitsNumbersArray[k]) {
                        return thirtyAndPlus + "-" + singleDigitsNumbersNames[k];
                    }
                }
            }

        }
    }
    if (number >= 40 && number < 50) {
        if (number == 40) {
            return fortyAndPlus;
        } else {
            for (let k = 0; k < singleDigitsNumbersArray.length; k++) {
                if (lastDigit != 0) {
                    if (lastDigit == singleDigitsNumbersArray[k]) {
                        return fortyAndPlus + "-" + singleDigitsNumbersNames[k];
                    }
                }
            }

        }
    }
    if (number >= 50 && number < 60) {
        if (number == 50) {
            return fiftyAndPlus;
        } else {
            for (let k = 0; k < singleDigitsNumbersArray.length; k++) {
                if (lastDigit != 0) {
                    if (lastDigit == singleDigitsNumbersArray[k]) {
                        return fiftyAndPlus + "-" + singleDigitsNumbersNames[k];
                    }
                }
            }

        }
    }
    if (number >= 60 && number < 70) {
        if (number == 60) {
            return sixtyAndPlus;
        } else {
            for (let k = 0; k < singleDigitsNumbersArray.length; k++) {
                if (lastDigit != 0) {
                    if (lastDigit == singleDigitsNumbersArray[k]) {
                        return sixtyAndPlus + "-" + singleDigitsNumbersNames[k];
                    }
                }
            }

        }
    }
    if (number >= 70 && number < 80) {
        if (number == 70) {
            return seventyAndPlus;
        } else {
            for (let k = 0; k < singleDigitsNumbersArray.length; k++) {
                if (lastDigit != 0) {
                    if (lastDigit == singleDigitsNumbersArray[k]) {
                        return seventyAndPlus + "-" + singleDigitsNumbersNames[k];
                    }
                }
            }

        }
    }

    if (number >= 80 && number < 90) {
        if (number == 80) {
            return eightyAndPlus;
        } else {
            for (let k = 0; k < singleDigitsNumbersArray.length; k++) {
                if (lastDigit != 0) {
                    if (lastDigit == singleDigitsNumbersArray[k]) {
                        return eightyAndPlus + "-" + singleDigitsNumbersNames[k];
                    }
                }
            }

        }
    }

    if (number >= 90 && number <= 99) {
        if (number == 90) {
            return ninetyAndPlus;
        } else {
            for (let k = 0; k < singleDigitsNumbersArray.length; k++) {
                if (lastDigit != 0) {
                    if (lastDigit == singleDigitsNumbersArray[k]) {
                        return ninetyAndPlus + "-" + singleDigitsNumbersNames[k];
                    }
                }
            }

        }
    }
    if (number >= 100 && number < 110) {
        if (number == 100) {
            return oneHundredAndPlus;

        } else {
            for (let p = 0; p < singleDigitsNumbersArray.length; p++) {
                if (retrieveTheLastNumberOfAThreeDigitsNumber(number) != 0) {
                    if (retrieveTheLastNumberOfAThreeDigitsNumber(number) == singleDigitsNumbersArray[p]) {
                        return oneHundredAndPlus + " " + "and " + singleDigitsNumbersNames[p];
                    }
                }
            }
        }
    }
}

function retrieveTheLastNumberOfAThreeDigitsNumber(number) {
    let numberToString = number.toString();
    let lastDigitOfAThreeDigitNumber = numberToString.slice(2, 3);

    return parseInt(lastDigitOfAThreeDigitNumber);
}
console.log(convertToWords(5));
console.log(convertToWords(13));
console.log(convertToWords(105));
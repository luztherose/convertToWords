// The console.assert() method writes a message to the console, but only if an expression evaluates to false.

function testReturnNameInLettersOfASingleDigitNumber() {
    let number = convertToWords(0);
    console.assert("zero" == number, "testReturnNameInLettersOfASingleDigitNumber() failed");
}

function testReturnNameInLettersOfTwoDigitsNumber() {
    let number = convertToWords(10);
    console.assert("ten" == number, "testReturnNameInLettersOfTwoDigitsNumber() failed");
}
function testReturnNameInLettersOfThreeDigitsNumber() {
    let number = convertToWords(102);
    console.assert("one hundred and two" == number, "testReturnNameInLettersOfThreeDigitsNumber() failed");
}

function runAllTests() {
    testReturnNameInLettersOfASingleDigitNumber(),
    testReturnNameInLettersOfTwoDigitsNumber(),
    testReturnNameInLettersOfThreeDigitsNumber()
}

runAllTests();
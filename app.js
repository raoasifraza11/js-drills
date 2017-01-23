/* Drill one */
function isDivisible(divisee, divisor) {
    // your code here
    return (divisee % divisor === 0);

}


/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */



// tests

function testIsDivisible() {
    if (isDivisible(10, 2) && !isDivisible(11, 2)) {
        console.log('SUCCESS: `isDivisible` is working');
    }
    else {
        console.log('FAILURE: `isDivisible` is not working');
    }
}

testIsDivisible();


/* Drill Two */
function celsToFahr(celsTemp) {
    return celsTemp * 1.8 + 32;
}

function fahrToCels(fahrTemp) {
    return (fahrTemp - 32) / 1.8;
}


/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */



// tests

function testConversion(fn, input, expected) {
    if (fn(input) === expected) {
        console.log('SUCCESS: `' + fn.name + '` is working');
        return true;
    }
    else {
        console.log('FAILURE: `' + fn.name + '` is not working');
        return false;
    }
}

function testConverters() {
    var cel2FahrInput = 100;
    var cel2FahrExpect = 212;
    var fahr2CelInput = 32;
    var fahr2CelExpect = 0;

    if (testConversion(celsToFahr, cel2FahrInput, cel2FahrExpect) &&
        testConversion(fahrToCels, fahr2CelInput, fahr2CelExpect)) {
        console.log('SUCCESS: All tests passing');
    }
    else {
        console.log('FAILURE: Some tests are failing');
    }
}

testConverters();

/* Drill three */
function computeArea(width, height) {
    // your code here
    return width*height;
}


/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */



// tests

function testComputeArea() {
    var width = 3;
    var height = 4;
    var expected = 12;
    if (computeArea(width, height) === expected) {
        console.log('SUCCESS: `computeArea` is working');
    }
    else {
        console.log('FAILURE: `computeArea` is not working');
    }
}

testComputeArea();

/* Equality test
 */
console.log((typeof 7 === "number"));
var n = 2;
console.log(n);

/* Drill four */
function textNormalizer(text) {
    // your code here
    return text.trim().toLowerCase();
}


/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */



// tests

function testTextNormalizer() {
    var text = "   let's GO SURFING NOW everyone is learning how   ";
    var expected = "let's go surfing now everyone is learning how";
    if (textNormalizer(text) === expected) {
        console.log('SUCCESS: `textNormalizer` is working');
    }
    else {
        console.log('FAILURE: `textNormalizer` is not working');
    }
}

testTextNormalizer();

/* Shoter */
function shouter(whatToShout) {
    return whatToShout.toUpperCase() + '!!!';

}


/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */


// tests

function testShouter() {
    var whatToShout = 'fee figh foe fum';
    var expected = 'FEE FIGH FOE FUM!!!';
    if (shouter(whatToShout) === expected) {
        console.log('SUCCESS: `shouter` is working');
    }
    else {
        console.log('FAILURE: `shouter` is not working');
    }
}

testShouter();


/* wisePerson test */
function wisePerson(wiseType, whatToSay) {
    return 'A wise ' + wiseType + ' once said: "' +
        whatToSay + '".';
}


/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */


// tests

function testWisePerson() {
    var wiseType = 'goat';
    var whatToSay = 'hello world';
    var expected = 'A wise ' + wiseType + ' once said: "' +
        whatToSay + '".';
    var actual = wisePerson(wiseType, whatToSay);
    if (expected === actual) {
        console.log('SUCCESS: `wisePerson` is working');
    }
    else {
        console.log('FAILURE: `wisePerson` is not working');
    }
}

testWisePerson();

/* Basic step */
function hello(name){
    return "Hello " + name + "!";
}

function noReturn(){
    // no return
}


var greeting = hello("Asif");
var nodefined = noReturn();


function avg2number(num1, num2){
    return (num1+num2)/2;
}


var avg = avg2number(2,5);

// fun decleration 2 way one simple 2nd exprassion
// fun reading pro This process is known as hoisting.

myFunction();


function myFunction() {
    console.log("Hello mf World");
}

myFunction2();   // wrong due to hoisting



var myFunction2 = function() {
    console.log("Hello f2 World");
}

// myFunction2(); ture

// string

var foo = 'foo';
var foo1 = 'foo';
var bar = 'bar';

var a = foo === foo1; // => true
var b = foo === bar; // => false

var foo = 'foo bar foo bar';
var l =foo.length; // => 15
foo.charAt(0); // => "f"
foo.slice(4); // => "bar foo bar"
foo.slice(4, 7); // => "bar"
foo.split(" "); // => ["foo", "bar", "foo", "bar"]
foo.toUpperCase(); // => "FOO BAR FOO BAR"
foo.replace('foo', 'bar'); // => 'bar bar foo bar'


console.log(greeting);
console.log("No Return is -> " + nodefined + ".");
console.log(avg);

/* Trafic light task */
function doTrafficLights() {
    var activeLight = getActiveLight();
    // your code will replace this call
    // to `console.log()`
    console.log(activeLight);

}


/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */


function turnOffLights() {
    $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
    turnOffLights();
    $('.green-light').addClass('green-on');
}

function turnYellow() {
    turnOffLights();
    $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
    turnOffLights();
    $('.red-light').addClass('red-on');
}

function getActiveLight() {
    return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function handleClicks() {
    $('.js-control-lights').click(function() {
        doTrafficLights();
    });
}

$(handleClicks);

/* Solved */
function doTrafficLights() {
    var activeLight = getActiveLight();
    // your code will replace this call
    // to `console.log()`
    if(activeLight == "red")
        turnRed();
    else if(activeLight == "yellow")
        turnYellow();
    else
        turnGreen();

}


/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */


function turnOffLights() {
    $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
    turnOffLights();
    $('.green-light').addClass('green-on');
}

function turnYellow() {
    turnOffLights();
    $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
    turnOffLights();
    $('.red-light').addClass('red-on');
}

function getActiveLight() {
    return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function handleClicks() {
    $('.js-control-lights').click(function() {
        doTrafficLights();
    });
}

$(handleClicks);

/*
* Error Handling */
function main() {
    try{
        doAllTheThings();
    }catch(e){
        console.error(e);
        reportError(e);
    }
}

function doAllTheThings() {
    throw {
        message: "Everything's ruined",
        name: "FatalException",
        toString: function(){return this.name + ": " + this.message;}
    }
}

function reportError(e) {
    $('.js-error-report').text("Uh oh, something went wrong! Here's what we know: " + e.message);
}



/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */


$(main);


/* Arrays cloud be anything in js */
var emptyArray = [];
var allTheThings = ['cats', 'dogs', 42, ['foo', 'bar'], true, function() { console.log('hello')}];

var emptyArray = [];
var nonEmptyArray = [1, 'two'];


var allTheThings = ['cats', 'dogs', 42, ['foo', 'bar'], true, function() { console.log('hello')}];
console.log("The first thing is " + allTheThings[0]);

var myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); // => [1, 2, 3, 4]


var myArray = [1, 2, 3, 4];
console.log(myArray.length); // => 4

var myArray = ['one', 'two', 'three', 'four', 'five'];
console.log(myArray[myArray.length - 2]); // 'four'

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods *//

var myArray = [1, 2, 'three'];
console.log(myArray.length); // => 3
var lastItem = myArray.pop();
console.log(lastItem); // => three
console.log(myArray.length); // => 2

var myArray = [1, 2, 'three'];
console.log(myArray.length); // => 3
var firstItem = myArray.shift();
console.log(firstItem); // => 1
console.log(myArray.length); // => 2


var myArray = [1, 2, 3, 4];

myArray.slice(); // =>  [1, 2, 3, 4]

copyArray = myArray.slice(0, 2)
console.log(copyArray); // => [1, 2]

myArray.slice(-2); // => [3, 4];


var myArray = ['zebra', 'yodel', 'xylophone'];
myArray.sort();
console.log(myArray); // => ['xylophone', 'yodel', 'zebra']


/* The following example demonstrates how you can sort a list of numbers
 * by their ordinal value:
 *
 */

var myArray = [1, 2, 10, 20, 100, 200];
myArray.sort();
console.log(myArray); // => {1, 10, 100, 2, 20, 200}

function sortNumbers(a, b) {
    return a - b;
}
myArray.sort(sortNumbers);


/* Map */

function double(num) {
    return 2 * num;
}

var myNumbers = [1, 2, 3, 4];
var doubledNumbers = myNumbers.map(double);
console.log(doubledNumbers); // => [2, 4, 6, 8];


var steps = [ 'wash', 'rinse', 'repeat'];

var stepsElements = steps.map(function(step) {
    return '<li>' + step + '</li>';
});

console.log('<ul>\n\t' + stepsElements.join('\n\t') + '\n</ul>'); // <ul>
//   <li>wash</li>
//   <li>rinse</li>
//   <li>repeat</li>
// </ul>


var directionsLibrary = [
    ['wash', 'rinse', 'repeat'],
    ['be born', 'live', 'die'],
    ['wake', 'work', 'sleep']
];

function saveDirectionInDatabase(direction) {
    // save the direction in the database
    console.log('`saveDirectionInDatabase` called');
}

directionsLibrary.forEach(saveDirectionInDatabase);

function isEven(num) {
    return num % 2 === 0;
}

var myNumbers = [1, 2, 3, 4, 5, 6];

var evens = myNumbers.filter(isEven);
console.log(evens); // => [2, 4, 6]



function makeList(item1, item2, item3) {
    // your code here
    return [ item1, item2, item3];
}



/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */


// tests

function testMakeList() {

    var items = ["prime rib", "fried goat cheese salad", "fish tacos"];
    var result = makeList(items[0], items[1], items[2]);

    if (
        result && result.length && items.length === result.length &&
        items.every(function(item) {
            return result.indexOf(item) > -1;
        })) {
        console.log('SUCCESS: `makeList` works!');
    } else {
        console.error('FAILURE: `makeList` is not working');
    }
}

testMakeList();



/* Array slice Drill */

function firstFourItems(array) {
    return array.slice(0,4);
}


function lastThreeItems(array) {
    return array.slice(-3);
}




/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */


// tests

function testFunctionWorks(fn, input, expected) {

    var result = fn(input);
    if (
        result && result.length === expected.length &&
        result.every(function(item) {
            return expected.indexOf(item) > -1;
        })) {
        console.log('SUCCESS: `' + fn.name + '` works!')
        return true;
    }
    else {
        console.error('FAILURE: `' + fn.name + '` is not working')
        return false;
    }
}

function runTests() {

    var list = ["red bull", "monster", "amp", "rockstar", "full throttle"];
    var result1 = ["red bull", "monster", "amp", "rockstar"];
    var result2 = ["amp", "rockstar", "full throttle"];

    var testResults = [
        testFunctionWorks(firstFourItems, list, result1),
        testFunctionWorks(lastThreeItems, list, result2),
    ];


    var numPassing = testResults.filter(function(result){ return result; }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();



/* Drill copying arrays */

function minusLastItem(array) {
    return array.slice(0, (array.length-1));
}


function copyFirstHalf(array) {
    return array.slice(0, (array.length/2));
}



/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */


// tests

function testFunctionWorks(fn, input, expected) {
    var result = fn(input);
    if (
        result && result.length === expected.length &&
        result.every(function(item) {
            return expected.indexOf(item) > -1;
        })) {
        console.log('SUCCESS: `' + fn.name + '` works!');
        return true;
    } else {
        console.error('FAILURE: `' + fn.name + '` is not working');
        return false;
    }
}

function runTests() {

    var list = ["red bull", "monster", "amp", "rockstar", "full throttle", "kickstart"];
    var result1 = ["red bull", "monster", "amp", "rockstar", "full throttle"];
    var result2 = ["red bull", "monster", "amp"];

    var testResults = [
        testFunctionWorks(minusLastItem, list, result1),
        testFunctionWorks(copyFirstHalf, list, result2),
    ];


    var numPassing = testResults.filter(function(result){ return result; }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

/* Loops */
function max(numbers) {
    var currentMax = numbers[0];
    for (var i=0; i <= numbers.length; i++) {
        if (numbers[i] > currentMax) {
            currentMax = numbers[i];
        }
    }
    return currentMax;
}


function min(numbers) {
    var currentMax = numbers[0];
    for (var i=0; i <= numbers.length; i++) {
        if (numbers[i] < currentMax) {
            currentMax = numbers[i];
        }
    }
    return currentMax;
}



/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */


// tests

function testFunctionWorks(fn, input, expected) {
    if (fn(input) === expected) {
        console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
        return true;
    }
    else {
        console.log(
            'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
            ' but was ' + fn(input)
        );
        return false;
    }
}


(function runTests() {
    // we'll use the variables in our test cases
    var numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
    var realMin1 = numList1[3];
    var realMax1 = numList1[6];
    var numList2 = [0, 1, 2, 3, 4];
    var realMin2 = numList2[0];
    var realMax2 = numList2[4];

    var testResults = [
        testFunctionWorks(max, numList1, realMax1),
        testFunctionWorks(max, numList2, realMax2),
        testFunctionWorks(min, numList1, realMin1),
        testFunctionWorks(min, numList2, realMin2),
    ];

    var numPassing = testResults.filter(function(result){ return result; }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();


/* compute avg */

function average(numbers) {
    var total = numbers[0];
    for (var i=1; i < numbers.length; i++) {
        total+= numbers[i];
    }
    return total/numbers.length;
}




/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */


// tests

function testFunctionWorks(fn, input, expected) {
    if (fn(input) === expected) {
        console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
        return true;
    }
    else {
        console.log(
            'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
            ' but was ' + fn(input)
        );
        return false;
    }
}

(function runTests() {
    var numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var correctAns1 = 5.5;
    var numList2 = [0, -1, 1];
    var correctAns2 = 0;

    var testResults = [
        testFunctionWorks(average, numList1, correctAns1),
        testFunctionWorks(average, numList2, correctAns2)
    ];
    var numPassing = testResults.filter(function(result){ return result; }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.')
})();

/* fizzbuzz*/

function fizzBuzz(countTo) {
    var result = [];
    for (var i=1; i <= countTo; i++) {
        if (i % 15 === 0) {
            result.push('fizzbuzz');
        }
        else if (i % 5 === 0) {
            result.push('buzz');
        }
        else if (i % 3 === 0) {
            result.push('fizz');
        }
        else {
            result.push(i);
        }
    }
    return result;
}




/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */



// tests
(function testFizzBuzz() {
    // we'll use the variables in our test cases
    var countTo = 16;
    var expected = [
        1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
        'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
    ];

    var actual = fizzBuzz(countTo) || [];

    if (
        expected.length === actual.length &&
        expected.every(function(item, index) {
            return actual[index] === item;}) ) {

        console.log('SUCCESS: fizzBuzz is working');
    }
    else {
        console.log('FAILURE: fizzBuzz is not working');
    }
})();




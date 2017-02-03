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
console.log(myArray[myArray.length - 2]);
// 'four'

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods */

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

/* Objects */
function createMyObject() {
    // your code here
    var myObj = {
        foo: 'bar',
        answerToUniverse: 42,
        "olly olly": 'oxen free',
        sayHello: function(){
            return "hello";
        }
    }

    return myObj;
}



/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */

(function testCreateMyObject() {
    var obj = createMyObject();
    if (typeof obj !== 'object') {
        console.error('ERROR: `createMyObject` must return an object');
        return false
    }
    var expectedKeys = ['foo', 'answerToUniverse', 'olly olly', 'sayHello'];
    expectedKeys.forEach(function(key) {
        if (!(key in obj)) {
            console.error('ERROR: Missing a key for ' + key);
            return false;
        }
    });
    if (obj.foo !== 'bar') {
        console.error('ERROR: Value for `foo` should be \'bar\' but was ' + obj.foo);
        return false;
    }
    if (obj.answerToUniverse !== 42) {
        console.error(
            'ERROR: Value for `answerToUniverse` should be 42 but was ' + obj.answerToUniverse);
        return false;
    }
    if (obj['olly olly'] !== 'oxen free') {
        console.error(
            'ERROR: Value for `\'olly olly\'` should be \'oxen free\' but was ' + obj['olly olly']);
        return false;
    }
    if (!(typeof obj.sayHello === "function" && obj.sayHello() === 'hello')) {
        console.error('ERROR: Value for `sayHello` must be a function that returns the string \'hello\'');
        return false;
    }
    console.log('SUCCESS: Your function works!');
})();


function updateObject(obj) {
    // your code here
}



/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */

(function testUpdateObject() {
    var oldObj = {
        cats: 'cats',
        dogs: 'dogs',
    };
    var newObj = updateObject(oldObj);
    if (typeof newObj !== 'object') {
        console.error('ERROR: `createMyObject` must return an object');
        return false
    }
    ['foo', 'bar', 'bizz', 'bang'].forEach(function(key) {
        if (!(key in newObj)) {
            console.error('ERROR: `' + key + '` not in object returned by `updateObject`');
            return false;
        }
    });
    ['foo', 'bar', 'bizz', 'bang'].forEach(function(key) {
        if (newObj[key] !== key) {
            console.error('ERROR: `' + key + '` should be "' + key + '" but was ' + newObj[key]);
            return false;
        }
    });
    if (!(newObj.cats === 'cats' && newObj.dogs === 'dogs')) {
        console.error('ERROR: your function doesn\'t preserve existing key/value pairs');
        return false;
    }
    console.log('SUCCESS: `updateObject` works correctly!');

})();

//https://gist.github.com/anonymous/bb250b141a76611aef295839011f6ad2

function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;

    return obj;
}


var sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang'
};


/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */

(function testKeyDeleter() {
    var obj = keyDeleter({
        foo: 'foo',
        bar: 'bar',
        bizz: 'bizz',
        bang: 'bang'
    });

    if (typeof obj !== 'object') {
        console.error('ERROR: `keyDeleter` must be return an object');
        return false
    }
    ['foo', 'bar'].forEach(function(key) {
        if (key in obj) {
            console.error('`keyDeleter` did not delete the key for ' + key);
            return false;
        }
    });
    ['bizz', 'bang'].forEach(function(key) {
        if (!(key in obj && obj[key] === key)) {
            console.error('`keyDeleter` is deleting keys other than `foo` and `bar`');
            return false;
        }
    });
    console.log('SUCCESS: `updateObject` works correctly!');

})();


function myFunc2(obj) {
    obj.foo = 'bizz';
    console.log(obj.foo);
}

var myVar = {foo: 'bar'};
console.log(myVar.foo); // => 'bar'
myFunc2(myVar); // => logs 'bizz'  — that's what we thought would happen!
console.log(myVar.foo); // => 'bizz'  — ruh roh! change inside function affected outside world!


var pageViewCounts = {
    homePage: 399,
    aboutPage: 400,
    termsOfService: 22
};

console.log(Object.keys(pageViewCounts));

Object.keys(pageViewCounts).forEach(function(key){
    console.log(
        'the `' + key + '` page has ' + pageViewCounts[key] +
        ' views.'
    );
})

// Test analyser
function mostFrequentWord(words) {
    var wordFrequencies = {};
    for (var i = 0; i <= words.length; i++) {
        if (words[i] in wordFrequencies) {
            wordFrequencies[words[i]]++;
        }
        else {
            wordFrequencies[words[i]]=1;
        }
    }
    var currentMaxKey = Object.keys(wordFrequencies)[0];
    var currentMaxCount = wordFrequencies[currentMaxKey];

    for (var word in wordFrequencies) {
        if (wordFrequencies[word] > currentMaxCount) {
            currentMaxKey = word;
            currentMaxCount = wordFrequencies[word];
        }
    }
    return currentMaxKey;
}




/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */



function getTokens(rawString) {
    // returns an alphabetically sorted list of words, removing punctuation
    // characters
    return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}


(function testMostFrequentWord() {
    var spaceOddityText = 'Ground Control to Major Tom\n \
Ground Control to Major Tom\n \
Take your protein pills and put your helmet on\n \
Ground Control to Major Tom (ten, nine, eight, seven, six)\n \
Commencing countdown, engines on (five, four, three)\n \
Check ignition and may God\'s love be with you (two, one, liftoff)\n \
\n \
This is Ground Control to Major Tom\n \
You\'ve really made the grade\n \
And the papers want to know whose shirts you wear\n \
Now it\'s time to leave the capsule if you dare\n \
"This is Major Tom to Ground Control\n \
I\'m stepping through the door\n \
And I\'m floating in a most peculiar way\n \
And the stars look very different today\n \
For here\n \
Am I sitting in a tin can\n \
Far above the world\n \
Planet Earth is blue\n \
And there\'s nothing I can do\n \
\n \
Though I\'m past one hundred thousand miles\n \
I\'m feeling very still\n \
And I think my spaceship knows which way to go\n \
Tell my wife I love her very much she knows\n \
Ground Control to Major Tom\n \
Your circuit\'s dead, there\'s something wrong\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you \"Here am I floating \'round my tin can\n \
Far above the moon\n \
Planet Earth is blue\n \
And there\'s nothing I can do\"';

    var expected = 'major';
    var actual = mostFrequentWord(getTokens(spaceOddityText));
    if (expected === actual) {
        console.log('SUCCESS: `mostFrequentWord` is working');
    }
    else {
        console.log('FAILURE: `mostFrequentWord` is not working');
    }
})();

// MergeData stream
function mergeDataStreams(stream1, stream2) {
    var results = {};
    for (var i=0; i < stream1.length; i++) {
        results[stream1[i].id] = stream1[i];
    }

    for (var key in results) {
        var otherData = stream2.find(
            function(item) { return item.id === key; });
        for (var _key in otherData) {
            results[key][_key] = otherData[_key];
        }
    }
    return Object.keys(results).map(function(item) {return results[item]; });
}

// data
var dataSource1 = [
    {
        id: '0',
        firstName: 'Juan',
        lastName: 'Doe',
        age: 32
    },
    {
        id: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        age: 31
    },
    {
        id: '2',
        firstName: 'Janice',
        lastName: 'Doe',
        age: 30
    },
    {
        id: '3',
        firstName: 'Jake',
        lastName: 'Doe',
        age: 29
    },
];

var dataSource2 = [
    {
        id: '0',
        occupation: 'architect',
        address: {
            street: '123 Main St',
            city: 'CityTown',
            country: 'USA'
        }
    },
    {
        id: '1',
        occupation: 'architect',
        address: {
            street: '234 Main St',
            city: 'CityTown',
            country: 'USA'
        }
    },
    {
        id: '2',
        occupation: 'architect',
        address: {
            street: '345 Main St',
            city: 'CityTown',
            country: 'USA'
        }
    },
    {
        id: '3',
        occupation: 'architect',
        address: {
            street: '456 Main St',
            city: 'CityTown',
            country: 'USA'
        }
    },
];




/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */


// tests

function testMergeDataStreams(stream1, stream2) {
    var expected = stream1.map(function(item) {
        return _.assign(
            _.clone(item), stream2.find(function(item2) {return item.id === item2.id;}));
    });

    var actual = mergeDataStreams(stream1, stream2);

    var passing = actual && expected.map(function(item) {
            return _.isEqual(
                item,
                actual.find(function(_item) {return _item.id === item.id; })
            );
        }).every(function(result) {return result;} );

    if (passing) {
        console.log('SUCCESS! mergeDataStreams works');
    }

    else {
        console.log('FAILURE! mergeDataStreams not working');
    }
}

testMergeDataStreams(dataSource1, dataSource2);

/*  Jquery Drills */
function doHelloWorld() {
    $('.js-hide-it').addClass('hidden');
    $('.js-hello-world').text('hello world from JS');
}

doHelloWorld();
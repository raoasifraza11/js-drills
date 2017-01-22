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


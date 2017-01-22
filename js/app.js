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

function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();
function studentDetails(name, age, cgpa) {
    console.log("Name:", name, "Age:", age, "CGPA:", cgpa);
}
studentDetails("Kowsalya", 25, 8.5);
studentDetails("Priya", 22, 9.0);


function calculateFee(fee) {
    return fee;
}
let studentFee = calculateFee(200000);
console.log("Student Fee:", studentFee);


function discount(percent) {
    let fee = 200000;
    let discountAmount = fee * percent / 100;
    console.log("Final Fee:", fee - discountAmount);
}
discount(10);


function studentForm(name, age, disability = "no") {
    console.log("Name:", name, "Age:", age, "Disability:", disability);
}
studentForm("Kowsalya", 24, "no");
studentForm("Priya", 22, "yes");
studentForm("surendar", 23);



function showMessage(message) {
    console.log(message);
}
showMessage("Hello JavaScript");


const printName = function(name) {
    console.log("Name:", name);
};
printName("Kowsalya");


const printNumber = (number) => {
    console.log("Number:", number);
};
printNumber(100);


function checkScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside block - var:", a);
        console.log("Inside block - let:", b);
        console.log("Inside block - const:", c);
    }

    console.log("Outside block - var:", a);
    
}
checkScope();


console.log("Hoisting value:", value);
var value = 10;



function second() {
    console.log("Second function executed");
}
function first(callback) {
    console.log("First function executed");
    callback();
}
first(second);

// 12. Add and callback
function add(callback, a, b) {
    console.log("Addition:", a + b);
    callback(a, b);
}
function addCallback(a, b) {
    console.log("Callback received:", a, b);
}
add(addCallback, 10, 5);
const sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};
add(sub, 20, 5);


function multiply(callback, a, b) {
    console.log("Multiplication:", a * b);
    callback();
}
multiply(() => console.log("Multiply callback executed"), 5, 4);


function divide(num1, num2) {
    console.log("Division:", num1 / num2);
}
function calculate(callback) {
    callback(20, 4);
}
calculate(divide);


function higherOrder(callback) {
    callback("Kowsalya");
}
higherOrder(function(name) {
    console.log("Student Name:", name);
});





function* cashbackGenerator() {
    yield "10% cashback";
    yield "5% cashback";
    yield "Better luck next time";
}
const cashback = cashbackGenerator();


console.log("Cashback 1:", cashback.next());
console.log("Cashback 2:", cashback.next());
console.log("Cashback 3:", cashback.next());


function* discountMessages() {
    yield "10% discount";
    yield "20% discount";
    yield "30% discount";
    yield "40% discount";
    yield "50% discount";
}
for (const message of discountMessages()) {
    console.log(message);
}


function* studentNames() {
    yield "Kowsalya";
    yield "Priya";
    yield "Divya";
}
for (const name of studentNames()) {
    console.log("Student:", name);
}


function* fourValues() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}
const values = fourValues();

console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log("Done:", values.next().done);


function addThree(a, b, c) {
    console.log("Normal Addition:", a + b + c);
}
addThree(5, 10, 15);


function curriedAdd(a) {
    return function(b) {
        return function(c) {
            console.log("Curried Addition:", a + b + c);
        };
    };
}


curriedAdd(5)(10)(15);


function productPrice(price) {
    return function(discountPercent) {
        return function(quantity) {
            let total = price * quantity;
            let discountAmount = total * discountPercent / 100;
            return total - discountAmount;
        };
    };
}
console.log("Discounted Product Total:", productPrice(1000)(10)(3));


function normalTotal(a, b, c) {
    return a + b + c;
}
console.log("Normal Result:", normalTotal(5, 10, 15));
console.log("Curried Result:", curriedAdd(5)(10)(15));

(function(product, discountPercent) {
    console.log(`${product} has a ${discountPercent}% discount`);
})("Laptop", 10);


function getNumber() {
    return 100;
}
let returnedNumber = getNumber();
console.log("Returned Number:", returnedNumber);


function getMarks(marks) {
    return marks;
}
let studentMarks = getMarks(95);
console.log("Student Marks:", studentMarks);


function studentFeeCalculator(fee, discountPercent = 10, callback) {
    let discountAmount = callback(fee, discountPercent);
    let finalFee = fee - discountAmount;
    return finalFee;
}

function calculateDiscount(fee, percent) {
    return fee * percent / 100;
}

let finalFee = studentFeeCalculator(
    200000,
    10,
    calculateDiscount
);

console.log("Final Student Fee:", finalFee);
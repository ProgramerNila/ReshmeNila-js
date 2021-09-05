/* 1. একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো */

var stringType = 'Frist name is Reshme';
var boolenType = true;
var boolenType2 = false;
var number = 12122;

/* 2.  Let And const variable declear  */
let firstName = 'Humasha';
const lastName = 'jannat';
// lastName="klk"
firstName="meherima"
console.log(firstName);
console.log(lastName);

/* 3. নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।  */
let num1 = 25;
let num2 = 5;
let add = num1 + num2;
console.log(add);
let minas = num1 - num2;
console.log(minas);
let gun = num1 *num2;
console.log(gun);
let vag = num1 /num2;
console.log(vag);
let vagses = num1 %num2;
console.log(vagses);

/* 4. <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।  */
let number1 = 40;
let number2 = 30;
if (number1>number2) {
    console.log('ata boro');
} else {
    console.log('no');
}
//
if (number1<number2) {
    console.log('ata boro');
} else {
    console.log('no');
}
// 
if (number1>number2) {
    console.log('ata boro');
} else {
    console.log('no');
}

// 
if (number1>=number2) {
    console.log('ata boro');
} else {
    console.log('no');
}
//
if (number1<=number2) {
    console.log('ata boro');
} else {
    console.log('no');
}
//
if (number1==number2) {
    console.log('ata boro');
} else {
    console.log('no');
}
//
if (number1!=number2) {
    console.log('ata boro');
} else {
    console.log('no');
}
/* 5. And 6.  তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।   if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো */

let savedMoney = 20;
let flat = false;
let car = true;
let age = 28;
if ((savedMoney==20&&flat==false)&& (car==true || age==28)) {
    console.log('you can merry ');
} else {
    console.log('agy taka ano');
}

/* 
7. একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি 
কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।  */
let i = 7;
while (i<=19) {
    console.log(i);
    i++
}
// odd number
let p =7;
while (p<=19) {
    console.log(p);
    p=p+2
}
/* // 8 . তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। */
const myArray = [12, 14, 55, 52, 8, 9];





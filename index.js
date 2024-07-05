//1
// var number = prompt("Enter a number:");
// console.log(number);

// 2
// var number = prompt("Enter a number:");
// if(number%3==0 && number%4==0){
//     console.log("Yes");
// }else{
//     console.log("No");
// }

// 3
// var number1 = prompt("Enter ur first number:");
// var number2 = prompt("Enter ur second number:");
// if(number1>number2){
//     console.log(number1);
// }else if(number1<number2){
//     console.log(number2);
// }else{
//     console.log("Both are equal");
// }


// 4
// var number = prompt("Enter a number:");
// if(number<0){
//     console.log("Negative");
// }else{
//     console.log("Positive");
// }

// 5
// let numbers = new Array(3);
// for (var i = 0; i < 3; i++) {
//     var num = prompt("Enter an integer: ");
//     numbers[i]=num;
// }

// var max=0;
// for (var i = 0; i < 3; i++) {
//    if(numbers[i]>max){
//     max=numbers[i];
//    }
// }
// console.log("Max is: "+ max);

// var min=100;
// for (var i = 0; i < 3; i++) {
//    if(numbers[i]<min){
//     min=numbers[i];
//    }
// }
// console.log("Min is: "+ min);

// 6
// var number = prompt("Enter a number:");
// if(number%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// 7
// var letter = prompt("Enter a letter:");
// if(letter=="a" ||letter=="e" ||letter=="i" ||letter=="o" ||letter=="u"){
//     console.log("vowel");
// }else{
//     console.log("constant");
// }

// 8
// var number = prompt("Enter a numbers sadad:");
// for (var i = 0; i < number; i++) {
//     console.log(i + " ")
// }

// //9
// var number = prompt("Enter a number:");
// for(i=1;i<=12;i++){
//     console.log(number+" x " + i +" = "+ number*i);
// }

// 10
// var number = prompt("Enter a number:");
// for(var i=1;i<=number;i++){
//     if(i%2==0){
//         console.log(i + " ");
//     }
// }

// //11
// var number = prompt("Enter a number:");
// var power = prompt("Enter the power:");
// for(var i=1;i<power;i++){
//     number=number*number;
// }
// console.log(number);

// //12
// var total=0;
// for(var i=0;i<5;i++){
//     var grade = prompt("Enter a grade:");
//     total=parseInt(total)+parseInt(grade);
// }
// console.log("Total is: "+total);
// console.log("Avarage is: " + (total/5));
// console.log("Percentage is: "+ ((total/500)*100) +"%");

// //13
// var month = prompt("Enter a month:");
// if(month==2){
//     console.log(28);
// }else if(month%2==0){
//     console.log(30);
// }else{
//     console.log(31);
// }

// //14
// var Physics = prompt("Enter marks for Physics:");
// var Chemistry = prompt("Enter marks for Chemistry:");
// var Biology = prompt("Enter marks for Biology:");
// var Mathematics = prompt("Enter marks for Mathematics:");
// var Computer = prompt("Enter marks for Computer:");
// var total= Physics+Chemistry+Biology+Mathematics+Computer;
// var Percentage=(total/500)*100
// console.log(Percentage+"%");

// //15
// var choice = prompt("Enter a choice")
// switch(choice){
//     case 1:
//         var month = prompt("Enter a month:");
//         if(month==2){
//            console.log(28);
//         }else if(month%2==0){
//            console.log(30);
//         }else{
//            console.log(31);
//         }
//         break;
//     case 2:
//         var letter = prompt("Enter a letter:");
// if(letter=="a" ||letter=="e" ||letter=="i" ||letter=="o" ||letter=="u"){
//     console.log("vowel");
// }else{
//     console.log("constant");
// }
// break;
//     case 3:
//         var number1 = prompt("Enter ur first number:");
// var number2 = prompt("Enter ur second number:");
// if(number1>number2){
//     console.log(number1);
// }else if(number1<number2){
//     console.log(number2);
// }else{
//     console.log("Both are equal");
// }
// break;
//     case 4:
//         var number = prompt("Enter a number:");
// if(number<0){
//     console.log("Negative");
// }else if(number>0){
//     console.log("Positive");
// }else{
//     console.log("Zero");
// }
// break;
//     case 5:
//         let num1 = prompt("Enter the first number: ");
//         let num2 = prompt("Enter the second number: ");
//         let operator = prompt("Enter an operator (+, -, *, /): ");
        
//         let result;

//         if (operator === "+") {
//             result = num1 + num2;
//         } else if (operator === "-") {
//             result = num1 - num2;
//         } else if (operator === "*") {
//             result = num1 * num2;
//         } else if (operator === "/") {
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 alert("Division by zero is not allowed.");
//             }
//         } else {
//             alert("Invalid operator. Please use +, -, *, or /.");
//         }

//         if (result !== undefined) {
//             console.log("Result of " + num1 + "" + operator + " " + num2 + " = " + result);
//         }
    
// }


// //16
// for(var i=1;i<=10;i++){
//     console.log(i+" ")
// }

// //17
// var sum=0;
// for(var i=1;i<=10;i++){
//    sum=i+sum;
// }
// console.log(sum);


//18
// for(var i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i+ " ");
//     }
// }

// //19
// var number=promppt("Enter a number:");
// factorial=1;
// for(var i=1;i<=number;i++){
//     factorial=i*factorial;
// }

// //20

// var str=prompt("enter a string:");
// var reversedStr = "";
// for (var i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }


// //21
// var array = [1,2,3,4,5,6,7,8,9];
//     for (var i = 0; i < 9; i++) {
//       console.log(array[i]);
//     }

// //22
// var arr=[1,2,3,4,5,6,67,7745];
// let maxNumber = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//          maxNumber = arr[i];
//     }
// }

// //22
// var number = prompt("Enter a number:");
// for(i=1;i<=10;i++){
//     console.log(number+" x " + i +" = "+ number*i);
// }


// //24
// var str=prompt("enter a string:");
// var count=0;
// for(var i=0;i<str.length;i++){
//     count++;
// }

// console.log(count);

// //25
// var number = prompt("Enter a prime number:");

// for(var i=2;i<number;i++){
//     if(number%i==0){
//         console.log("Not a prime")
//     }else{
//         console.log("Is a prime")
//     }
// }


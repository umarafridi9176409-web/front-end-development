/* Functions */

// function greet (){
//     console.log("Hello Umar!");
// }
// greet();

// function studentInfo(){
//     console.log("Umar Afd");
//     console.log("CECOS University");
// }
// studentInfo();

// function counterNumber(){
//     for(let i = 1; i <= 5; i++){
//         console.log(i);
//     }
// }
// counterNumber();

// function evenNumber(){
//     for(let i = 1; i <= 20; i++){
//         if(i % 2 === 0){
//             console.log(i)
//         }
//     }

// }
// evenNumber();

// function table (){

//     for(let i = 1; i <= 10; i++){
//         console.log(i * 5);
//     }

// }
// table();

// function sumNumber(){
//     let sum = 0; 
//     for(let i = 1; i <= 10; i++){
        
//         sum = sum + i;
//         console.log(sum);

//     }
// }
// sumNumber();

// function checkNumber(){
//     let i = 1000001;
//     if(i % 2 === 0){
//         console.log("Even Number");
//     }else{
//         console.log("Odd Number");
//     }

// }
// checkNumber();

// function grade(){
  
//     let marks = 74;
//     if(marks >= 80){
//         console.log("Grade = A");
//     }
//     else if(marks >= 75){
//         console.log("Grade A-");
//     }
//     else if(marks >= 70){
//         console.log("Grade B+");
//     }
//     else if(marks >= 65){
//         console.log("Grade B");
//     }
//     else if(marks >= 60){
//         console.log("Grade B-");
//     }
//     else if(marks >= 55){
//         console.log("Grade C")
//     }else{
//         console.log("Fail");
//     }
 

// }
// grade();


// function largestNumber(){

//     let num1 = 10;
//     let num2 = 15;
//     let num3 = 25;

//     if(num2 >= 25){
//         console.log("Num2 is Greater Number");
//     }
//     else if (num3 >= 25){
//         console.log("NUm3 is Greater Number");
//     }
//     else{
//         console.log("Num1 is Greater Number");
//     }
// }
// largestNumber();

/* Parameters And Arguements */

// function greet(name){
    
//     console.log("Hello",name);

// }
// greet("Umar");

// function showAge(age){

//     console.log(age);
// }
// showAge("I am 22")

// function student(name, university){
// console.log(name,university)
// }
// student("Umar");
// student("CECOS Uiversity");

// function add(a, b){
//     console.log(a + b);

// }
// add(10, 20);

// function mult(c, d){
//     console.log(c * d);

// }
// mult(5, 4);

// function checkNo(a){
//     if(a % 2 !== 0){
//         console.log("Odd")
//     }else{
//         console.log("Even")
//     }

// }
// checkNo(8);

// function studentResult(name, marks){

//     console.log(name, marks, ("marks"));

// }
// studentResult("Umar Afd got", 80);

// function area(length, width){

//     console.log(length * width);
// }
// area(10, 5);

// function largestNumber(a, b, c,){

//     if(a <= b && b <= c){
//         console.log("C is greater");
//     }else{
//         console.log("C is smaller");
//     }

// }
// largestNumber();

function add(num1, num2, operator){

    console.log(num1 + num2, operator);
}
add(10, 5);

function sub(num1, num2, operator){

    console.log(num1 - num2, operator);
}
sub(10, 5);

function mult(num1, num2, operator){
    
    console.log(num1 * num2, operator)

}
mult(10, 5);

function div(nmu1, num2, operator){

    console.log(nmu1 / num2, operator);
}
div(10, 5);

function rem(num1, num2, operator){

    console.log(num1 % num2, operator);
}
rem(10, 5);

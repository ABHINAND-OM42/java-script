// FUNCTIONS
console.log("functions");

function myfun(){
    console.log("hey abhinand, welcome back");
}
myfun();

console.log("-----------------------------");

//passing values to functions

console.log("passing values to functions");

function myfun1(a,b){
    console.log(a+b);

}
myfun1(5,6);

function myfun2(b,a){
    console.log(a-b);
}

myfun2(89,100);

console.log("-----------------------------");

//global scop and functions
console.log("global scop and functions");

///
var my_global = 30;
///

function my_global1(){

    console.log(my_global);
}
my_global1();

function my_global3(){
    opps = 89;
    
}



function my_global2(){
    var output1 = "";

    if (typeof my_global != "undefind")
    {
        output1 = my_global + " undefind";
    }
    if (typeof my_global != opps)
    {
        output1 = my_global + opps;
    }
    console.log(output1);

}
my_global3();
my_global2();
console.log("-------------------------");

//local scop and functions

console.log("local scope and functions");

function local1(){
    var ab = 8;
    console.log(ab);
}
local1();
// console.log(ab); it shows ab is not defind because ab is a local variable
console.log("-------------------------------");

//global vs local scope in functions
console.log("global vs local scope in functions");

var a1 = 67;

function a11()
{   
    var a1 = 100;
    console.log(a1);
}

console.log(a11());   //local variable will be precedence over global variable
console.log(a1);      //global variable

console.log("----------------------------------");


//return a value from a function with return
console.log("return a value from a function with return ");

function sum(num){

    return num * 5;
}
console.log(sum(7));
console.log("--------------------------------------");

// understanding undefind value returned from a function

console.log("understanding undefind value returned from a function");

var a2 = 89;
function a22(){
    return a2+=7;  // insted of using a2+=7 the outpout will be undefind
}
console.log(a22()); 
console.log("----------------------------------------");

//assignment with a returned value

console.log("assignment with a returned value");

var assin = 0;

function assin_retu(num){
    return num+9;

}
assin = assin_retu(9);
console.log(assin);
console.log("-----------------");
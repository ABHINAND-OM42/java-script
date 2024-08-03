//  use conditional logic with if statement

console.log("use conditional logic with if statement");

function TrueOrFalse(anyone){
    if (anyone){
        return "yes that was true";
    }
    return "that was false";

}

console.log(TrueOrFalse(false));

console.log("---------------------------------------");


//comparison with equality operator

console.log("comparison withequality operator");

function comparison(check_equality)
{
    if (check_equality == 10)
    {
        return "the value is equal";
    }
    return "not equal";
}

console.log(comparison(10));

console.log("--------------------------")

//comparison with strict equality opeartor

console.log("comparison with strict equality operator");
console.log("not do the type conversion");

function strict_equality(value1){
    if (value1 === 10)
    {
        return "it was equal";

    }
    return "not equal"
}

console.log(strict_equality(10));  //same type 
console.log(strict_equality('10')); // different type

console.log("------------------------");

//compare eqaulity

console.log("compare equality");

function comapre_eqa(a,b){

    if (a == b){
        return "yes equal";
    }
    return "not equal"
    
       
}

console.log(comapre_eqa(23,78));
console.log(comapre_eqa(23,23));
console.log("-----------------------------");
//comparison with inequality operator

console.log("comparison with inequality operator");

function inequality_op(value){
    if (value != 10){
        return "no equal";
    }
    return "equal";
}

console.log(inequality_op(78));
console.log(inequality_op(10));

console.log("-------------------------");

//comaprison with strict inequality operator

console.log("compaerison with strict inequaliy");

function strict_ineq(value3)
{
    if (value3 !== 10)
    {
        return "not equal";
    }
    return "equal";
}

console.log(strict_ineq(10));
console.log(strict_ineq('10'));

console.log("-------------------------------");

//comaprison with logical and operator

console.log("comaprison with logical and opeartor");

function and_operator(num)
{
    if (num >= 50 && num <= 100)
    {
        return "yes";
    }
    return "no";
}

console.log(and_operator(45));
console.log(and_operator(75));


console.log("--------------------------");

//comaprison with logical or opeartor

console.log("comaprison with logical or operator");

function or_opeartor(num){
    if (num <90 || num > 40)
    {
        return "inside";
    }
    return "outside";
}

console.log(or_opeartor(44));
console.log(or_opeartor(100));

console.log("--------------------------");


//else statement

console.log("else statement");

function else_state(num){
    if (num >= 100){
        return "true";
    }
    else{
        return "no";
    }
}

console.log(else_state(100));
console.log(else_state(78));
console.log("---------------------------------");


//else-if statement
console.log("else-if statement");

function else_if_stat(num)
{
    if (num >100 && num <150){
        return "yes it bigger";

    }
    else if (num >200)
    {
        return "yes it bigger than 100";
    }

    else{
        return "smaller number";
    }
}

console.log(else_if_stat(134));
console.log(else_if_stat(210));
console.log(else_if_stat(50));

console.log("-------------------------------");


//array index width if-else

console.log("array index and if -else");

arr = ["one","two","three"];

function index_if(num,arr)
{
    if (num == 2)
    {
        return arr[1];
    }
    else if(num ==1){
        return arr[0];

    }
    else if (num == 3){
        return arr[2];
    }
}

console.log(index_if(1,arr));
console.log(index_if(2,arr));
console.log(index_if(3,arr));

console.log("-------------------------");


//switch statemet

console.log("switch statement");

function switch_state(val)
{
      var answer = "";
      switch(val)
      {
        case 1:
            answer = "one";
            break;

        case 2:
            answer = "two";
            break;

        case 3:
            answer = "three";
            break;

        default:
            answer = "no answer"; 


        
      }
      return answer;
}


console.log(switch_state(2));
console.log(switch_state(9));
console.log("---------------------------");


//multipleidentical options in switch statement

console.log("multiple identical option in switch statement");

function switch_multi(val)
{
    var answer = "";

    switch(val)
    {
        case 1:
        case 2:
        case 3:
        case 4:
            answer = "low";
            break;
        case 5:
        case 6:
            answer = "high";
            break;
    }

    return answer;
}

console.log(switch_multi(5));
console.log(switch_multi(2));

console.log("----------------------");


//replacing if - else chain with switch

console.log("replaceing if - else chain with switch ");

function replace_if_else_with_switch(val)
{
    switch(val)
    {
        case "bob":
            answer = "alis";
            break;
        case 6:
            answer = "6+6=12";
            break;
        case 0:
            answer = "0";
        

    }
    return answer;
}

console.log(replace_if_else_with_switch("bob"));
console.log(replace_if_else_with_switch(0));
console.log(replace_if_else_with_switch(6));


console.log("-------------------------------------");

//returning boolean values from function

console.log("returning boolean values from function");

function retu_boolean(a,b)
{
    return a > b;
}

console.log(retu_boolean(40,50));
console.log(retu_boolean(50,23));

console.log("------------------------------");

//retruning early patterns from functions
console.log("returning early patterns from function");

function retu_early_pat(a,b){
    if (a < 0 || b < 0)
    {
        return undefined;
    }
}

console.log(retu_early_pat(-9,-4));


// object
console.log("object");

var obj = {"abhi":8,"dd":"kk"};
console.log(obj);

console.log("------------------------");
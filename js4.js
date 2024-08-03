// array
console.log("ARRAY");
var my_array = ["abhinand",1];
console.log(my_array);
console.log("-----------------");


//nested array
console.log(" NESTED ARRAY")

var my_array = [["abhianand",1],["abhi",2]];
console.log(my_array);
console.log("-----------------------");

//access array element using index
console.log("access array element using index");
var my_array = [90,67,89];
var index = my_array[1];
console.log(index);
console.log("-------------------------");


//modify array using index
console.log("modify array using index");

var my_array =[50,38,78];
my_array[0] = 100;
console.log(my_array);
console.log("---------------------------");

//access multi-diamentional array with index

console.log("access multi-diamentional array with index")

var my_array = [[1,2,3],[4,5,6],[4,8,9],[[7,8,9],1,2,3]];
var position = my_array[3][2];
var position2 = my_array[1][0];
console.log(position);
console.log(position2);
console.log("---------------------------------");

//manipulate array with push()
console.log("manipulate array with push");

var my_array = [2,3,4];
my_array.push([5,8]);
console.log(my_array);

var my_array = [[1,2,3],[4,5,6]];
my_array.push([7,8,9]);
console.log(my_array);
console.log("---------------------------------");

// manipulate array with pop()

console.log("manipulate array with pop");
var my_array = [3,4,5,6];
var removed = my_array.pop();
console.log(removed);
console.log("---------------------------------");

//manipulate array with shift
console.log("manipulate array with shift");

var my_array = [4,5,6];
console.log(my_array);
var removed = my_array.shift();
console.log(removed);
console.log(my_array);
console.log("---------------------------------");

//manipulare array with unshift

console.log("manipulate array with unshift");
var my_array = [3,4,5,6];
my_array.unshift([6]);
console.log(my_array);

//shopping list
console.log("shoping list");
var sho_list = [['apple',2],["bannana",4],["juice",3],["egg",12]];
console.log(sho_list);

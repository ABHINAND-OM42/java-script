//length of a string
console.log("length os a string")
var name ="abhinand"
var len;
len = name.length;
console.log(len)

name +=name
console.log(name)
var namelen = name.length;
console.log("the sum of length of the name is : " +namelen);
console.log("-----------------------------------");

//index of a string
console.log("index of a string");

var first_name = "abhinand";
var index = name[0];
console.log(index);
console .log("last letter");
var name = "abhinand";
var index = name[name.length-1];
console.log(index);
console.log("-----------------------------------");

// string immutability
console.log("string immutability");

var name = "abhinand";
name[0] = 'x';
console.log(name);
console.log("-----------------------------------");

//nth letter of a string
console.log("nth letter of a string");
var name ="abhinand";
name_nth = name[6];
console.log(name_nth);
console.log("-----------------------------------");

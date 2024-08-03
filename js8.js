// object
console.log("object");

var obj = {"abhi":8,"dd":"kk"};
console.log(obj);

console.log("------------------------");

//accessing object properties with dot notation
console.log("accessing object properties with dot notation");

var myobj = {"abhi":"om",
    5:"five"};

var myvar = myobj.abhi;

console.log(myvar);

var myvar1 = myobj[5];
console.log(myvar1);

console.log("----------------------------");

//accessimg object properties with braket notation

console.log("accesing object properties with braket notation");

var myobj = {"abhi":"om",
    "how can":"xxxxx",
    9:"kk"
};

var myvar = myobj["abhi"];
var myvar1 = myobj[9];
var myvar2 = myobj["how can"];

console.log(myvar);
console.log(myvar1);

console.log(myvar2);


//accessing object properties with variable

console.log("accessing object properties with variable");

var myobj = {1:"hello",
    2:"world"
};

var value = 2;
var myvar = myobj[value];
console.log(myvar);


console.log("---------------------------");

//updating object prperties
console.log("updating object properties");

var myobj = {"name":"abhi",
    "address":"kerala",
    2:"two"
};
console.log(myobj);
myobj.name = "abhinand";
myobj[2] = "three";
console.log(myobj);


console.log("--------------------------------");

//add new properties to an object

console.log("add new properties to an object");

var myobj = {
      "name":"abhinand",
      "address":"kerala"
};

myobj.age = 100;
myobj.age = 101;

myobj["pin"] = 788978;

console.log(myobj);

console.log("----------------------------");


//delete object

console.log("delete object");

var mydog = {"name":"july","age":12};

delete mydog.name;   //deleted 

delete mydog["age"];  //deleted

console.log(mydog);

console.log("--------------------------");

//has own property

console.log("has own property");

var myobj = {"name":"abhi",
    age:"34"
};

function findmypro(prop)
{
    if (myobj.hasOwnProperty(prop)){
        return myobj[prop];



    }

    else{
        return "notfound";
}

}

console.log(findmypro("name"));
console.log(findmypro("address"));

console.log("---------------------------");

//accessing nested object

console.log("accessing nested object");

var myobj1 = {"name":{
    "address":{
        "pin code":898,
        "contry":"us"
    }
}}


console.log(myobj1.name.address["pin code"]);


console.log("------------------------------------")
// stadin line
console.log("stand in line");

function staninline(arr,item)
{

    arr.push(item);
    return arr.shift();
}

var arr = [1,2,3,4];
var item = 7;

console.log("before:" + JSON.stringify(arr));

console.log(staninline(arr,item));

console.log("after:" + JSON.stringify(arr));


console.log("------------------------------");
//stand inline other try

function   standline2(arr1,item1){

    arr1.push(item1);
    var kk = arr1.shift();
    return kk;

}

var arr1 = [6,7,8];
var  item1 = 100;
 console.log("before task:" + arr1);
 console.log("before task:" + JSON.stringify(arr1));
 console.log(standline2(arr1,item1));
 console.log("after task:" + JSON.stringify(arr1));

 console.log("-------------------------------------")


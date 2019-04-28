var m1=require("./arrayfunction.js");
var arr=new Array(12,10,19,10);
var arr1=[99,56,77,10];
console.log(arr.length);
console.log(arr1.length);
var sum=m1.add(arr);
console.log("sum:"+sum);
var add=m1.search(arr
);
for(var i=0;i<add.length;i++)
{
	console.log(" "+add[i]);
}


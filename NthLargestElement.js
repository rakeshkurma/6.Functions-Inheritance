/*
Write a javascript function find_largest to return the nth largest number

in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]

find_largest(3) will return third largest number from the above array -
which is 8.
*/

const prompt=require("prompt-sync")();
let arr=[];
let num=prompt(" Enter NUmber of Elements ");

for(let i=0;i<num;i++)
    arr[i]=prompt("");

    let n=prompt(" Enter nth Largest number  ");
    arr.sort();
    
    if(n<num)
    console.log(arr[num-n]);

/* 3) Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.  */

const prompt=require("prompt-sync")();
let num=prompt("Enter number");
var temp=""+num;
var tee=temp[0];
let i=1;
while(i<temp.length)
{
    if(temp[i]%2==0 && temp[i-1]%2==0)
    tee+=("-"+temp[i]);
    else
    tee+=temp[i];
    i++;

}

console.log(tee);
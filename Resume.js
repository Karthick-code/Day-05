/* 1.create your own resume data in JSON format.
2. for the above JSON, iterate over all for loops(for,for in,for of,forEach).
*/
var resume={
    "Name":"R.karthick",
    "Objective":"To obtain a challenging position with a reputed organization to grow my knowledge and experience, which in turn helps in company’s growth and to pursue my career.",
    "Education":"B.E. CSE",
    "CGPA": 8.53,
    "Skills":"C, Java, Python",
    "Area of Interest":"Full stack development"
}
//for loop
console.log("//for Loop");
var a=Object.keys(resume);
var b=Object.values(resume);
for (var i=0 ; i< a.length ; i++ )
{
 console.log (`${a[i]}: ${b[i]}`);
}

//for...in loop
console.log("//for...in Loop");
for (let i in resume){
    console.log(`${i}: ${resume[i]}`);
}

//for...of loop
console.log("//for...of Loop");
for (let i of a){
    console.log(`${i}: ${resume[i]}`);
}

console.log("//for...each Loop");
a.forEach((x)=>console.log(`${x}:${resume[x]}`));
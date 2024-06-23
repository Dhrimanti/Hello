let fs=require("fs");
let a=0;
console.log(a);
fs.readFile("a.txt",(err,data)=>{
    console.log("Bhai porchi dara");
    console.log(data.toString());

})


for(let i=0;i<=1000;i++){
    a++;
}
console.log(a)
console.log("Khobordar")

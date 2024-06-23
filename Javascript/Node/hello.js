function hemlo(){
    let p=new Promise(function(resolve){
        resolve("hi there")
    });return p;
}

async function main(){
    let value=await hemlo()
    console.log("Meow")
    
    console.log(value);
    console.log("bhenky mota hai ")
}


main()

console.log("Bhenky motu")
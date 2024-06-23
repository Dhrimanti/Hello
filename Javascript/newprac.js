function log1(){
    console.log("Hello bhailog")
}

function log2(){
    console.log("Hellow world")
}

function logwhatsthere(fn){
    fn();
}

logwhatsthere(log2);



class Animal{
    constructor(name,legs,speaks){
        this.name=name;
        this.legs=legs;
        this.speaks=speaks;
    }
    speak(){
        console.log(`${this.name} makes a noise og ${this.speaks}` )
    }
}

let dog=new Animal("dog",4,"Bhow BHow");

dog.speak();



////JSON Shit

const users='{"name":"bhappa","age":24,"gender":"male"}'
const user=JSON.parse(users)
console.log(user.name)


const bhai={
    name:"ami",
    gender:"male"
}
const fin=JSON.stringify(bhai)
console.log(fin)


////Callbacks
function  square(a){
    return a*a;

}

function cube(a){
    return a*a*a;
}

function sumofsomething(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);
    return val1+val2;


}

const sum=sumofsomething(4,79,square)
console.log(sum);


hello=()=>{
    console.log("Bhai kaisa hai?")
}
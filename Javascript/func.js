function findIndexof(   obj, key ) {
    console.log(obj)
    console.log(obj.indexOf(key))}

findIndexof("Hello world","world")

////////////////////////////////////////////////////////////////

const str="hello world"
console.log(str.replace("world","javascript"));
console.log(str)


////////////////////////////////////////////////////////////////
const value="hello i am a panda"
const words=value.split(" ")
console.log(words)

////////////////////////////////////////////////////////////////
const val="Dhrimanti"
console.log(val.toLowerCase())
console.log(val.toUpperCase()) 
 

//////////////////////////  


const arr=[1,2,3,4,5,6,7,8,9]
const arr2=[11,12,13,14,15,16,17]
console.log(arr2.concat(arr))


//////////  
////Nice functions to use 
function logthing(str){
    str=str+1
    console.log(str)
}
arr.forEach(logthing)
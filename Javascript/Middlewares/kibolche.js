const zod=require('zod');
val=(arr)=>{
    const schema=zod.array(zod.number());
    const response=schema.safeParse(arr);
    console.log(response)


}

val([1,3])
function f(x){
    x="x-"+x;
    return function(y){
        y="y-"+x;
        return function(z){
            z="z-"+y;
            return z;
        }
    }
}

let g=f("a")("b")("c");
console.log(g);
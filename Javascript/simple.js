var startTime = performance.now()
function findSum(n){
    let ans=0;
    for (let index = 0; index < n; index++) {
        ans+=index;
        
    }
    return ans;
}

function findSum100(){
    return findSum(100);

}

const a=findSum100()

var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
// Your code here


Array.prototype.myEach = function(callback) {
    
    let result = []
    for(let i=0; i<this.length; i++){
       
        console.log(callback(this[i]));
    }
    
    // return result;
}


// const callback = function(el) {
//     return el + 1;
// }



Array.prototype.myMap = function(callback) {
    
    
    for(let i=0; i<this.length; i++){
       this[i] = callback(this[i])
        // console.log(callback(this[i]));
    }
    
    return this;
}


Array.prototype.myReduce = function(callback, ini = null) {
    
    if (ini === null){
        ini = this[0];
        i=0; 
    } else{
        i=1;
    }

    while(i<this.length){
       ini = callback(this[i], ini);
       i++;
        // console.log(callback(this[i]));
    }
    
    return ini;
}


function callback(el, result){
    return result * el;
}

// [1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }, 25); // => 31
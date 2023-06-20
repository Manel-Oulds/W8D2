// Your code here
Array.prototype.bubblesort = function(){
    let b = 0;
    while (b==0){
        b=1;
        for(let i=0; i<this.length-1; i++){
            if(this[i] > this[i+1]){
                let x = this[i+1];
                this[i+1] = this[i];
                this[i] = x;
                b=0;
            }
    }
}
    return this
}

String.prototype.substring = function(){
    let res = [];
    for(let i=0; i<this.length; i++){
        for(let j=i; j<this.length; j++){
            res.push(this.slice(i,j+1));
        }
    }
    return res
}
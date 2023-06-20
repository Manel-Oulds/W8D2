// Your code here

Array.prototype.uniq = function(){
    let result = [];
    for (let i=0; i<this.length; i++){
        if (!(result.includes(this[i]))){
            result.push(this[i]) ;
        }
    }
    return result;

}

Array.prototype.twoSum = function(){
    let result=[];
    for (let i=0; i<this.length; i++){
        for(let j=0; j<this.length; j++){
            if (this[i]+this[j]===0 && i < j){
                result.push([i,j]);
            }
        }
    }
    return result;

}

Array.prototype.transpose = function(){
    let result=[];
    for (let j=0; j<this.length; j++){
        let row = []
        for(let i=0; i<this.length; i++){
            row.push(this[i][j]);
        }
       result.push(row) 
    }
    return result
}




// const array= [1,2,2,3,3,3];

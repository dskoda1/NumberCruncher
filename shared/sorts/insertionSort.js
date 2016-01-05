function insertionSort (arr) {
    
    if(!(arr instanceof Array)){
        return null;
    }   
    //Iterate through each position in the array
    for(var i in arr){
        for(var j = 0; j < i; j++){
            if(arr[i] < arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }            
    }
    return arr;
}

module.exports = insertionSort;
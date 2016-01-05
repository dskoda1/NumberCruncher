function quickSort (arr) {
    
    if(!(arr instanceof Array)){
        return null;
    }   
    qSort(arr, 0, arr.length - 1);
    return arr;
}

function qSort(arr, lo, hi){
    
    if( lo < hi ){
        var q = partition(arr, lo, hi);
        qSort(arr, lo, q - 1);
        qSort(arr, q + 1, hi);
    }
    
}

function partition(arr, lo, hi){
    
    var pivot = arr[hi];
    var i = lo - 1;
    
    for(var j = lo; j < hi; j++){
        if(arr[j] <= pivot){
            i = i + 1;
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            
        }
    }
    var temp = arr[i + 1];
    arr[i + 1] = arr[hi];
    arr[hi] = temp
    return i + 1;
}

function swap(arr, a, b){
    
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    
}

module.exports = quickSort;
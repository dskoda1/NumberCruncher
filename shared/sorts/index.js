module.exports = () => {
    
    var insertionSort = require('./insertionSort');
    var qsort = require('./quickSort');
    var mergesort = require('./mergeSort');
    return {
        quickSort: qsort,
        mergeSort: mergesort,
        insertionSort: insertionSort
    }
}
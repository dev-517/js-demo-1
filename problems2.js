function min(arr) {
    var minSoFar = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minSoFar) minSoFar = arr[i];
    }

    return minSoFar;
}

function swap(x, y) {
    var temp = x;
    x = y;
    y = temp;
}

// refactoring
// readability 
function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var minIndex = i;

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }

        swap2(arr, minIndex, i);
    }
}

function swap2(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

var arr = [10, 8, -5, -1, 20];
sort(arr);

console.log(arr.join(','));
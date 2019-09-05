// function partition(a, left, right, pivotIndex) {
//   var pivot = a[pivotIndex]
//   for(var i = left; i < pivotIndex; i++) {

//   }
//   for(var j = right; j > pivotIndex; j-- ) {

//   }

// }

// function quickSort(a) {

// }

function partition(a, p, r) {
  var x = a[r]
  var i = p - 1
  for (let j = p; j < r; j++) {
    if (a[j] <= x) {
      i++
      [a[i], a[j]] = [a[j], a[i]]
    }
  }
  [a[i + 1], a[r]] = [a[r], a[i + 1]]
  return i + 1
}
function quickSort(a, p, r) {
  if (p < r) {
    var q = partition(a, p, r)
    quickSort(a, p, q - 1)
    quickSort(a, q + 1, r)
  }
}

var a = [2, 7, 1, 5, 4, 3, 6, 99, 22, 55];
quickSort(a, 0, a.length - 1);
console.log(a)
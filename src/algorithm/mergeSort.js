const MAX = 10000
function mergerSort(a) {
  function sort(a, p, r) {
    if (p < r) {
      var q = Math.floor((p + r) / 2)
      sort(a, p, q)
      sort(a, q + 1, r)
      merge(a, p, q, r)
    }
  }

  function merge(a, p, q, r) {
    var L = [], R = []
    for (var i = 0; i < q - p + 1; i++) {
      L[i] = a[p + i]
    }
    // L[i] = MAX
    for (var i = 0; i < r - q; i++) {
      R[i] = a[q + 1 + i]
    }
    // R[i] = MAX
    var i = 0, j = 0;
    for (var k = p; k <= r; k++) {
      if (R[j] === undefined || L[i] <= R[j]) {
        a[k] = L[i]
        i++
      } else {
        a[k] = R[j]
        j++
      }
    }
  }

  sort(a, 0, a.length - 1)
}


var a = [2, 7, 1, 5, 4, 3, 6, 99, 22, 55];
// var a = [2, 4, 5, 7, 1, 2, 3, 6]
mergerSort(a);
// merge(a, 0, 3, 7)
console.log(a)
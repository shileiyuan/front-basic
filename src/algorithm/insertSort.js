function insertSort(a) {
  for (var i = 1; i < a.length; i++) {
    var current = a[i]
    //如果已排好序的元素大于key，则将排好序的元素依次向后挪一个位置
    for (var j = i - 1; j >= 0 && a[j] > current; j--) {
        a[j + 1] = a[j]
    }
    a[j + 1] = current
  }
}


var a = [2, 7, 1, 5, 4, 3, 6];
insertSort(a);
console.log(a)
function selectSort(a) {
  for(var i = 0; i < a.length - 1; i++) {
    var min = i;
    for(var j = i + 1; j < a.length; j++) {
      if(a[j] < a[min]) {
        min = j
      }
    }
    if(min !== i) {
      var t = a[min]
      a[min] = a[i]
      a[i] = t
    }
  }
}

var a = [2,7,1,5,4,3,6];
selectSort(a);
console.log(a)
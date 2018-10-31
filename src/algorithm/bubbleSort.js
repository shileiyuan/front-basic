function bubbleSort1(a) {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
}

function bubbleSort2(a) {
  for(var i = 0; i < a.length - 1; i++) {
    for(var j = i + 1; j < a.length; j++) {
      if(a[j] < a[i]) {
        var t = a[j]
        a[j] = a[i]
        a[i] = t
      }
    }
  }
}

var a = [2,7,1,5,4,3,6];
// bubbleSort1(a);
bubbleSort2(a);
console.log(a)
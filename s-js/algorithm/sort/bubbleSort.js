export function bubbleSort1(a) {
  a = a.slice()
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  return a
}

export function bubbleSort2(a) {
  a = a.slice()
  for (var i = 0; i < a.length - 1; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[j] < a[i]) {
        var t = a[j]
        a[j] = a[i]
        a[i] = t
      }
    }
  }
  return a
}
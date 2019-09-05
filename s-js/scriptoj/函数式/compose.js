const compose1 = (...fns) => {
  return (...args) => {
    return fns.reduceRight((acc, fn, index) => {
      return index === fns.length - 1 ? fn(...acc) : fn(acc)
    }, args)
  }
}

const compose2 = (...fns) => fns.reduceRight((acc, fn) => (...args) => fn(acc(...args)))

const compose3 = (...fns) => fns.reduce((acc, fn) => (...args) => acc(fn(...args)))

export default compose3

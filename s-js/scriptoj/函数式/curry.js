
const curry = (fn, arr = []) => (...args) => {
  const finalArgs = [...arr, ...args]
  return fn.length === finalArgs.length ? fn(...finalArgs) : curry(fn, finalArgs)
}

//  curry2 这种方法通不过测试第二个测试
const curry2 = fn => {
  const finalArgs = []
  const innerCurry = fn => (...args) => {
    // finalArgs.push(...args)
    const tempArgs = [...finalArgs, ...args]
    return fn.length === tempArgs.length ? fn(...tempArgs) : innerCurry(fn)
  }
  return innerCurry(fn)
}


export default curry2

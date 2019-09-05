const pipe = (...fns) => fns.reduce((acc, fn) => (...args) => fn(acc(...args)))


export default pipe

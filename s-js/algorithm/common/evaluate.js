// 双栈算数表达式求值算法
function evaluate(expression) {
  // expression = expression.replace(/\s+/g, '')
  console.log(expression)
  const OPTS = ['+', '-', '*', '/', 'sqrt']
  const chars = []
  const values = []
  const strs = expression.split(' ')
  strs.forEach(e => {
    if (e === '(') {
      // 忽略左括号
    } else if (OPTS.includes(e)) {
      // 将运算符压入运算符栈
      chars.push(e)
    } else if (e === ')') {
      // 遇到右括号，就弹出一个运算符和所需数量的操作数，并将运算符和操作数的运算结果压入操作符栈
      const opt = chars.pop()
      const value = values.pop()
      let result
      switch (opt) {
        case '+':
          result = values.pop() + value
          break
        case '-':
          result = values.pop() - value
          break
        case '*':
          result = values.pop() * value
          break
        case '/':
          // 注意这两个操作数的顺序
          result = values.pop() / value
          break
        case 'sqrt':
          result = Math.sqrt(value)
          break
      }
      values.push(result)
    } else {
      // 将操作数压入操作数栈
      values.push(Number(e))
    }
  })
  const result = values.pop()
  console.log(result)
}

const expression1 = '( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )'

const expression2 = '( ( 1 + sqrt ( 5 ) ) / 2 )'

// evaluate(expression1)
evaluate(expression2)
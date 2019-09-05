/**
 * // 找出最小需要的钱币数量
 * @param {Number} n // 需要凑出的金额
 * @param {Numbers[]} moneys // 钱币的面值
 * @returns {Object} // 每个面值的钱币各有几张
 */
function getCost(n, moneys = [1, 2, 5, 10, 20, 50, 100]) {
  const f = [0]
  let m = 0
  for (let i = 1; i <= n; i++) {
    // 默认需要无数次，也就是可能凑不出来
    let count = Number.POSITIVE_INFINITY
    for (let j = 0; j < moneys.length; j++) {
      const money = moneys[j]
      if (i >= money) {
        console.log(++m)
        count = Math.min(count, f[i - money] + 1)
      }
    }
    f[i] = count
  }
  const result = f.map((v, i) => `f[${i}]=${v}`).join('\n')
  console.log(result)
}

getCost(100)
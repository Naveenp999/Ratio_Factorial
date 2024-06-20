const r = require('../ratio/index.js')
const f = require('../factorial/index.js')
let ratioAndFactorial = (a, b, c) => {
  let obj = {
    ratio: r(a, b),
    factorial: f(c),
  }
  return obj
}
module.exports = ratioAndFactorial

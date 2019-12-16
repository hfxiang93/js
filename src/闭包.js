/**
 * Created by xianghiafeng on 2019/12/16.
 */
/**
 * sum  求和
 * @param arr
 * @return {*}
 */
function sum (arr) {
  return arr.reduce((x,y)=>{
    return x+y
  }
)
}
let sums = sum([1,2,3,4,5])
console.log(sums) // 15

/**
 * lazySum 返回求和方法
 * @param arr
 * @return {function(): *}
 */
function lazySum (arr) {
  let sum = function () {
    return arr.reduce((x,y)=>{
      return x+y
    })
  }
  return sum
}
console.log(lazySum([1,2,3])) // function sum(){}

/**
 *  i*i
 * @return {Array}
 */
function count () {
  let arr = []
  for (let i=1;i<=10; i++){
    arr.push((function (n) {
      return n*n
    })(i))
  }
  return arr
}
var results = count()
console.log(results)
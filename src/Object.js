/**
 * Created by xianghiafeng on 2019/12/16.
 */
var arr =[1,23,4]
// 原型链是 arr->Array.prototype->Object.prototype->null
function foo () {
  return 0
}
// 原型链是foo->Function.prototype->Object.prototype->null
// 构造函数
function Student (name) {
  this.name = name
  this.hello = function () {
    console.log('hello'+this.name)
  }
}
let student = new Student('jack')
student.hello()
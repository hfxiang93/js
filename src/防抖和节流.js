/**
 * Created by xianghiafeng on 2019/12/5.
 */

/**
 * 什么是防抖？什么是节流？
 * 防抖就是触发高频率事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，那么就重新计算时间
 * 思路就是每次触发事件的时候都取消之前的延时调用方法
 * 节流就是高频率事件触发，但是在n秒内只会执行一次，所以节流会稀释函数的执行频率
 * 思路就是每次触发时间的时候都判断当前是否有等待执行的延时函数
 */

/**
 * debounce   防抖
 * @param func    防抖的高频事件
 * @param time    定义多久时间内高频函数只执行一次
 * @returns {Function}  返回防抖函数
 */
function debounce (func, time) {
  let timer = null // 声明一个timer 用来存放定时器的返回值
  return ()=>{
    clearTimeout(timer) //每次触发高频事件的时候都先清除timer，重新计时
    // 设定一个定时器去触发高频事件 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 func 函数
    timer = setTimeout(()=>{
      func.apply(this, arguments) //用apply绑定this，传递参数
    }, time)
  }
}

/**
 * throtte  节流
 * @param func    节流的高频事件
 * @param time    定义多久时间内高频函数只执行一次
 * @returns {Function}  返回节流函数
 */

function throtte (func, time) {
  let activeTime = 0 // 声明一个activeTime 用来存放标记
  return ()=>{
    const current = Date.now() // 获取当前时间
    if(current - activeTime > time){ //当前时间减去标记时间大于规定的time时，执行func，否则不执行
      func.apply(this, arguments)
      activeTime = Date.now() // 当func执行完之后重新设置一下activeTime的值，用于下一次判断
    }
  }
}
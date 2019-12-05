// 事件循环机制
console.log('start')
setTimeout(function(){
	console.log('setTimeOut1')
	new Promise(function(resolve){
		console.log('promise1')
		resolve()
	}).then(function(){
		console.log('promise resolved1')
	})
},0)
new Promise(function(resolve){
	console.log('promise2')
	resolve()
}).then(function(){
	console.log('promise resolved2')
	setTimeout(function(){
	console.log('timeout2')})
})
console.log('end')
// 打印结果 start->promise2 ->end-> promiseresolved2 ->setTimeout1-> promise1-> promiseresolved1 ->timeout2


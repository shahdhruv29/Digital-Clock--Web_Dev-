const clock = document.getElementById('clock')
const showTime = () => {
    const date = new Date()
    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
    const time = `${hour}:${min}:${sec}`
    clock.innerHTML = time

}
let a = setInterval(showTime, 1000)
// console.log('')
const btn = document.getElementById('stop')
btn.addEventListener('click', () => {
   if(btn.innerHTML=='Stop'){
       clearInterval(a)
       btn.innerHTML='Start'
   }
   else if(btn.innerHTML=='Start'){
       a = setInterval(showTime,1000)
       btn.innerHTML='Stop'
   }

})          

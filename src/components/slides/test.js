let date = new Date()
let todayInMS = (date.getDate()*24*60*60)+(date.getHours()*60*60)+((date.getMinutes()*60))+(date.getSeconds());
const wddingDay = (22*24*60*60)+(19*60*60)+(30*60)
var timeMs = wddingDay - todayInMS;
console.log(timeMs);
// console.log(date.getSeconds()*100);
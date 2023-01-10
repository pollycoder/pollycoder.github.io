var currentTime = new Date();
function createTime() {
  let creatDay= new Date("10/14/2021 00:00:00");//此处修改你的建站时间或者网站上线时间
  currentTime.setTime(currentTime.getTime()+250);
  let days = Math.floor((currentTime - creatDay ) / 1000 / 60 / 60 / 24);
  let hours = Math.floor((currentTime - creatDay ) / 1000 / 60 / 60 - (24 * days));
  if(String(hours).length ==1 ){
    hours = '0' + hours;
  }
  let minutes = Math.floor((currentTime - creatDay ) / 1000 /60 - (24 * 60 * days) - (60 * hours));
  if(String(minutes).length ==1 ){
    minutes = '0' + minutes;
  }
  let seconds = Math.round((currentTime - creatDay ) / 1000 - (24 * 60 * 60 * days) - (60 * 60 * hours) - (60 * minutes));
  if(String(seconds).length ==1 ){
    seconds = '0' + seconds;
  }
  document.getElementById("timeDate").innerHTML = '应用在线 '+days+' 天 ';
  document.getElementById("times").innerHTML = hours + ' 小时 ' + minutes + ' 分 ' + seconds + ' 秒';
}
setInterval(createTime(),250);

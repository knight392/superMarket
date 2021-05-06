// 防抖函数
export function debounce(func, delay = 300) {
  let timer = null;
  return function (...args) {
    if(timer){clearTimeout(timer)}
    timer = setTimeout(() => {
      // apply的参数用是数组形式
      func.apply(this, args)
    }, delay)
  }
}

export function formatDate(time,fmt,type = 1) { //type : 类型 0:时间为秒  1:时间为毫秒
  var date = new Date((type==0?(time * 1000):time));
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;

  }
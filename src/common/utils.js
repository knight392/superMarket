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
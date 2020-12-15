const baseSize = 16
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 1920
 
  // 设置页面根节点字体大小
  const box = document.getElementById('box')
  
  if(box){
    box.style.transform = `scale(${scale})`
  }
}
// 初始化
setTimeout(() => setRem(), 0)
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
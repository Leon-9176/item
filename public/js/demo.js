//动漫函数封装
//obj,使用本函数的元素名。target,移动距离。callback，回调函数
function animate(obj, target, callback) {
  //防止多次点击产生bug，每次启动定时器之前先关闭原来的定时器
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      callback && callback();
    }
    obj.style.left = obj.offsetLeft + step + "px";
  }, 15);
}

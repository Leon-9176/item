window.addEventListener("load", function () {
  var imgs = document.querySelector(".name");
  var arrL = document.querySelector(".arrL");
  var arrR = document.querySelector(".arrR");
  var ul = document.querySelector(".imgs_up");
  var food = document.querySelector(".food");
  var left = document.querySelector(".left");
  var right = document.querySelector(".right");
  var uls = document.querySelector(".food_box");
  var imgsWidth = imgs.offsetWidth;
  var foodWidth = food.offsetWidth;
  //自动播放轮播图
  //设置定时器
  var timer = setInterval(function () {
    //调用点击事件
    arrR.click();
  }, 4000);
  //鼠标经过盒子，显示两边小箭头
  imgs.addEventListener("mouseenter", function () {
    arrL.style.display = "block";
    arrR.style.display = "block";
    clearInterval(timer);
    timer = null;
  });
  //鼠标经过盒子，隐藏两边小箭头
  imgs.addEventListener("mouseleave", function () {
    arrL.style.display = "none";
    arrR.style.display = "none";
    timer = setInterval(function () {
      arrR.click();
    }, 4000);
  });
  //克隆节点
  var first = ul.children[0].cloneNode(true);
  //插入节点
  ul.appendChild(first);
  var num = 0;
  var flag = true;
  //右边按钮点击事件
  arrR.addEventListener("click", function () {
    if (flag) {
      flag = false;
      //无缝重置
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * imgsWidth, function () {
        flag = true;
      });
    }
  });
  //左边按钮点击事件
  arrL.addEventListener("click", function () {
    if (flag) {
      flag = false;
      //无缝重置
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * imgsWidth + "px";
      }
      num--;
      animate(ul, -num * imgsWidth, function () {
        flag = true;
      });
    }
  });
  imgs.addEventListener("mouseenter", function () {
    arrL.style.display = "block";
    arrR.style.display = "block";
    clearInterval(timer);
    timer = null;
  });
  //美食框按钮显示
  food.addEventListener("mouseenter", function () {
    left.style.display = "block";
    right.style.display = "block";
  });
  //美食框按钮隐藏
  food.addEventListener("mouseleave", function () {
    left.style.display = "none";
    right.style.display = "none";
  });
  //克隆节点
  var first1 = uls.children[0].cloneNode(true);
  //插入节点
  uls.appendChild(first1);
  var ber = 0;
  var flags = true;
  //美食右按钮点击事件
  right.addEventListener("click", function () {
    if (flags) {
      flags = false;
      //无缝重置
      if (ber == uls.children.length - 1) {
        uls.style.left = 0;
        ber = 0;
      }
      ber++;
      animate(uls, -ber * foodWidth, function () {
        flags = true;
      });
    }
  });
  //美食左按钮点击事件
  left.addEventListener("click", function () {
    if (flags) {
      flags = false;
      //无缝重置
      if (ber == 0) {
        ber = uls.children.length - 1;
        uls.style.left = -ber * foodWidth + "px";
      }
      ber--;
      animate(uls, -ber * foodWidth, function () {
        flags = true;
      });
    }
  });
});

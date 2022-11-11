//等页面加载完成再执行JS代码
window.addEventListener("load", function () {
  //获取元素
  // var title1 = document.querySelector(".title");
  var nav = document.querySelector(".nav");
  var arr_l = document.querySelector(".arr-l");
  var arr_r = document.querySelector(".arr-r");
  var slideshow = document.querySelector(".slideshow");
  //获取轮播图最大盒子的尺寸
  var slideshowWidth = slideshow.offsetWidth;

  //自动播放轮播图
  //设置定时器
  var timer = setInterval(function () {
    //调用点击事件
    arr_r.click();
  }, 4000);
  //   鼠标监听事件（鼠标经过盒子，两边的箭头显示）
  slideshow.addEventListener("mouseenter", function () {
    arr_l.style.display = "block";
    arr_r.style.display = "block";
    clearInterval(timer);
    timer = null;
  });
  //   鼠标监听事件（鼠标离开盒子，两边的箭头隐藏）
  slideshow.addEventListener("mouseleave", function () {
    arr_l.style.display = "none";
    arr_r.style.display = "none";
    timer = setInterval(function () {
      arr_r.click();
    }, 4000);
  });
  var ul = document.querySelector("ul");
  var ol = document.querySelector(".circle");
  for (var i = 0; i < ul.children.length; i++) {
    //创建li标签放于ol标签中
    var li = document.createElement("li");
    //设置小圆圈索引号
    li.setAttribute("index", i);
    //在ol中插入li标签
    ol.appendChild(li);
    //排他思想
    li.addEventListener("click", function () {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      this.className = "current";
      //获取点击的小圆点索引号
      var index = this.getAttribute("index");
      //设定图片和小圆点相对应
      num = index;
      circle = index;
      animate(ul, -index * slideshowWidth);
    });
  }
  ol.children[0].className = "current";
  //克隆第一张图片用于无缝重置
  var first = ul.children[0].cloneNode(true);
  //在ul最后插入克隆好的元素
  ul.appendChild(first);
  var num = 0;
  //这是一个变量控制小圆圈的播放
  var circle = 0;
  var flag = true;
  //右侧按钮
  arr_r.addEventListener("click", function () {
    if (flag) {
      flag = false;
      //无缝重置
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * slideshowWidth, function () {
        flag = true;
      });
      circle++;
      if (circle == ol.children.length) {
        circle = 0;
      }
      //li再次做排他思想
      circleChange();
    }
  });
  //左侧按钮
  arr_l.addEventListener("click", function () {
    if (flag) {
      flag = false;
      //无缝重置
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * slideshowWidth + "px";
      }
      num--;
      animate(ul, -num * slideshowWidth, function () {
        flag = true;
      });
      circle--;
      if (circle < 0) {
        circle = ol.children.length - 1;
      }
      //li再次做排他思想
      circleChange();
    }
  });
  //排他思想函数
  function circleChange() {
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    ol.children[circle].className = "current";
  }
  // var that;
  // class Tab {
  //   constructor(id) {
  //     that = this;
  //     this.main = document.querySelector(id);
  //     this.nav = this.main.querySelector(".nav");
  //     this.as = this.nav.querySelectorAll("a");
  //     this.sections = this.main.querySelectorAll("section");
  //     this.init();
  //   }
  //   //初始化操作，让相关元素绑定事件
  //   init() {
  //     for (var i = 0; i < this.as.length; i++) {
  //       this.as[i].index = i;
  //       this.as[i].onclick = this.toggleTab;
  //     }
  //   }
  //   //切换导航栏内容函数
  //   toggleTab() {
  //     that.clearClass();
  //     that.sections[this.index].className = "reveal";
  //   }
  //   //清楚内容用于显示的类名
  //   clearClass() {
  //     for (var i = 0; i < this.as.length; i++) {
  //       this.sections[i].className = "";
  //     }
  //   }
  // }
  // new Tab("#tab");
});

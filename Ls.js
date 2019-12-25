
var box = document.getElementById('box');
var nav = document.getElementById('nav');
var navlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;//图片下标 0-6，对应的图片是5123451
var timer;
var isMoving = false;
// 轮播下一
var i = 0
function next(){
	if(!isMoving){
		isMoving=true;
		index++;
		navmove();
		animate(slider,{left:-1200*index},function(){
			if(index ===6){
				slider.style.left ='-1200px';
				index = 1;
			}
			isMoving = false;
		});
	}
	
}
function prev(){
	if(!isMoving){
		isMoving=true;
		index--;
		navmove();
		animate(slider,{left:-1200*index},function(){
			if(index ===0){
				slider.style.left ='-6000px';
				index = 5;
			}
			isMoving = false;
		});
	}
}
var timer = setInterval(next,3000);
// 鼠标划入清定时器
box.onmouseover = function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(timer);
}
// 鼠标划出开定时器
box.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
//小按钮点击事件
for(var i = 0;i<navlist.length;i++){
	navlist[i].idx = i;
	navlist[i].onclick = function(){
		index = this.idx+1;
		navmove();
		animate(slider,{left:-1200*index});
	}
}
//背景色

function navmove(){
	for(var i = 0;i<navlist.length;i++){
		navlist[i].className = "";

	}
	if(index===6){
		navlist[0].className = "active";
	}else if(index===0){
		navlist[4].className = "active";
	}else{
		navlist[index-1].className="active";
	}
}
//放大镜一号
var img11=document.getElementById('img11');
var img12=document.getElementById('img12');
var slid=document.getElementById('slid');
var img1=document.getElementById('img1');
var Bimg=document.getElementById('Bimg');
var xjq=document.getElementById("xjq");
img11.onmouseover=function(){
	slid.style.display='block';
	img12.style.display='block';
}
img11.onmouseout=function(){
	slid.style.display='none';
	img12.style.display='none';
}
img11.onmousemove=function(ev){
	var ol=ev.clientX-img1.offsetLeft-250/2;
	var ot=ev.clientY-img1.offsetTop+600-250/2;
	ol=ol>250?250:ol<0?0:ol;
	ot=ot>250?250:ot<0?0:ot;
	slid.style.left=ol+'px';
	slid.style.top=ot+'px';
	var Bl=-(ol/400)*400;
	var Bt=-(ot/400)*400;
	Bimg.style.left=Bl+'px';
	Bimg.style.top=Bt+'px';
}

function goScrollTop() {
    window.scrollBy(0, -100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('goScrollTop()', 100);
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if (sTop == 0) clearTimeout(scrolldelay);
}
var x = 300; //获取该dom元素的距离页面顶端的距离
xjq.onclick = function scrollSlowly(speed, msec) {
    //每次调用该函数，先清一遍定时器，一面出现定时器叠加情况
    clearInterval(timer);
    //产生点击事件是首先判断一下是向上还是向下滚动
    var distance = window.pageYOffset;
    //如果滚动条的位置在制定dom元素的下方，也就是需要向上滚动时：speed取负值，向上滚动，反之取正值，向上滚动
    speed = distance <= x ? speed : -speed
    
    var timer = setInterval(function () {
        window.scrollBy(0, 100); //每msec滚动speed的距离，可根据需求微调
    }, msec);

    //判断何时停止
    window.onscroll = function () {
        var distance1 = window.pageYOffset;
        var y = distance1-x;
        console.log(y)
        if (y >=-1500 && y<=1500) {//设置停止定时器的区间
            clearInterval(timer);
    	}
	}
}
bs.onclick = function scrollSlowly(speed, msec) {
    //每次调用该函数，先清一遍定时器，一面出现定时器叠加情况
    clearInterval(timer);
    //产生点击事件是首先判断一下是向上还是向下滚动
    var distance = window.pageYOffset;
    //如果滚动条的位置在制定dom元素的下方，也就是需要向上滚动时：speed取负值，向上滚动，反之取正值，向上滚动
    speed = distance <= x ? speed : -speed
    
    var timer = setInterval(function () {
        window.scrollBy(0, 300); //每msec滚动speed的距离，可根据需求微调
    }, msec);

    //判断何时停止
    window.onscroll = function () {
        var distance1 = window.pageYOffset;
        var y = distance1-x;
        console.log(y)
        if (y >=-1500 && y<=1500) {//设置停止定时器的区间
            clearInterval(timer);
    	}
	}
}
var span1=document.getElementById("span1");
var span2=document.getElementById("span2");
var span3=document.getElementById("span3");
var span4=document.getElementById("span4");

var kh=document.getElementById("kh");
var xs=document.getElementById("xs");
var gywm=document.getElementById("gywm");
var wdzh=document.getElementById("wdzh");
var upp=document.getElementById("upp");

span1.onclick=function(){
	upp.style.display="none";
	wdzh.style.display="none";
	gywm.style.display="none";
	xs.style.display="none";
	kh.style.display="inline";
}
span2.onclick=function(){
	upp.style.display="none";
	wdzh.style.display="none";
	gywm.style.display="none";
	kh.style.display="none";
	xs.style.display="inline";
}
span3.onclick=function(){
	upp.style.display="none";
	xs.style.display="none";
	gywm.style.display="none";
	kh.style.display="none";
	wdzh.style.display="inline";
}
span4.onclick=function(){
	upp.style.display="none";
	wdzh.style.display="none";
	xs.style.display="none";
	kh.style.display="none";
	gywm.style.display="inline";
}



//轮播图
    var slider2=document.getElementById('slider2');
    var list=document.getElementById('nav').children;
    var index=1;
    var isMoving=false;

    //图片的滑动:轮播到下一张
    function next(){
      if(isMoving){
        return;
      }
      isMoving=true;
      index++;
      navChange();
      animate(slider2,{left:-900*index},function(){
        if(index===6){
          slider2.style.left="-900px";
          index=1;
        }
        isMoving=false;
      });
    }

    //图片的滑动:轮播到上一张
    function prev(){
      if(isMoving){
        return;
      }
      isMoving=true;
      index--;
      navChange();
      animate(slider2,{left:-900*index},function(){
        if(index===0){
          slider2.style.left="-4500px";
          index=5;
        }
        isMoving=false;
      });
    }
    var timer=setInterval(next,2000);

    //小按钮背景颜色变换
    function navChange(){
      for(var i=0;i<list.length;i++){
        list[i].className='';
      }
      if(index===6){
        list[0].className='active';
      }else if(index===0){
        list[4].className='active';
      }else{
        list[index-1].className='active';
      }
    }

     //老师给的轮播
    function getStyle(obj, attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  } else {
    return getComputedStyle(obj, null)[attr];
  }
}
function animate(obj,json,callback){
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
    var isStop = true;
    for(var attr in json){
      var now = 0;
      if(attr == 'opacity'){
        now = parseInt(getStyle(obj,attr)*100);
      }else{
        now = parseInt(getStyle(obj,attr));
      }
      var speed = (json[attr] - now) / 8;
      speed = speed>0?Math.ceil(speed):Math.floor(speed);
      var cur = now + speed;
      if(attr == 'opacity'){
        obj.style[attr] = cur / 100;
      }else{
        obj.style[attr] = cur + 'px';
      }
      if(json[attr] !== cur){
        isStop = false;
      }
    }
    if(isStop){
      clearInterval(obj.timer);
      callback&&callback();
    }
  }, 30)
}

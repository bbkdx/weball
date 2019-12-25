var div=document.getElementsByTagName('lip405G')[0];
    function getStyle(obj,style) {
        if(obj.currentStyle){
            return obj.currentStyle[style];
        }
        else{
           return getComputedStyle(obj)[style];
        }
      } 
    lip405G.onclick=function(){
     var timer=setInterval(function(){
          var now=parseInt(getStyle(lip405G,'left'));
          console.log(now);
          var speed=(0-now)/2;
          speed>0?Math.ceil(speed):Math.floor(speed);
          if(now==0){
            clearInterval(timer);
          }
          lip405G.style.left=now+speed+'px';
     },500);

     lip405G.style.left='500px';
    }
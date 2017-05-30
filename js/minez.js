/*var client = function () {
  e=e || window.event;  
        var engine = {
            //呈现引擎
            ie: 0,
            gecko: 0,
            webkit: 0,
            khtml: 0,
            opera: 0,
            //具体版本号
            ver: null
        };
        return {
            engine: engine
        };
    }();
//检测了事件对象是否包含wheelDelta属性，不存在→判断是ff→*-40
var EventUtil = {
    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    }
};
//将相同的事件处理程序指定给mousewheel和DOMMouseScroll事件
(function(){
    function handleMouseWheel(event) {
        event = EventUtil.getEvent(event);
        var delta = EventUtil.getWheelDelta(event);
        alert(delta);
    }
    EventUtil.addHandler(document, "mousewheel", handleMouseWheel);
    EventUtil.addHandler(document, "DOMMouseScroll", handleMouseWheel);
})();*/


$(document).ready(function(){
 var num=1;
  var up,down,upBack,downBack;


$(window).resize(function(){
$("body").css("height",$(window).height());
  $(".content").css("top",0.5*$(window).height());
  if(num===4){$(".line").css("height",$(".line-div").height()+200);}

  $("#resume"+num+"-img").css("top",500-$("#resume"+num+"-img").height());
 
  if ($(window).width()<500) {
    $("#resume-star").hide();
    /*$(".nav-text").hide();*/
  }
  /*else{$("#resume-star").show();}*/
});


if ($(window).width()<500) {$("#resume-star").hide();};

  $('body').animate( {scrollTop: 0}, 50);
  $("body").css("height",$(window).height());
  $(".content").css("top",0.5*$(window).height());

  $(".nav-div").mouseover(function(){
    $(this).children(".nav-text").fadeIn("50");
    })
   $(".nav-div").mouseout(function(){
    $(this).children(".nav-text").fadeOut("50");
    })
  
 
  $("#title-text").mouseover(function(){
    $("#title-text").text("VIEW MY LIFE");
    $("#title-text").css("font-size","280%");
    $("#star2").css("animation-duration","1s")
  });

  $("#title-text").mouseout(function(){
    $("#title-text").text("???????");
    $("#title-text").css("font-size","250%");
    $("#star2").css("animation-duration","3s")
  });

$(".work-web-div").mouseover(function(){
  $(this).children(".work-web-mask").fadeTo("100",0.3);
  $(this).css("box-shadow","5px 5px 13px rgba(0,0,0,0.4)");
})
$(".work-web-div").mouseout(function(){
  $(this).children(".work-web-mask").fadeOut("100",0);
  $(this).css("box-shadow","5px 5px 13px rgba(0,0,0,0)");
})


/*$(".work-arch").mouseover(function(){
  $(this).children(".work-text").show();
  $(this).css("box-shadow","5px 5px 13px rgba(0,0,0,1)");
  $(this).children(".work-arch-mask").fadeTo("1000",0.5);
});*/

  function upDown(offset){
   /* up=$("#resume"+num+"-img");
   down=$("#resume"+num+"-text-div");*/
    for(var i=1;i<6;i++){
      var up=$("#resume"+i+"-img");
      var down=$("#resume"+i+"-text-div");
      if(i!==num){
        up.animate({top:500+"px"},500);
         down.hide();
      }
      else if (i===num) { 
        up.animate({top:(500-up.height()+offset)+"px"},800);
    down.slideDown(800);
        /*$("#resume"+i).show();*/
      };
 
    }
    /*up.show();*/
    /*var upNum=500-up.height();*/
   
    
    console.log(num,"k");
  }

  function getObj(num){
   
  }

function circleColor(){
for(var i=1;i<6;i++){
  if(i!==num){$("#nav-div"+i).css("background-color","white");}
  else if (i===num) {$("#nav-div"+i).css("background-color","#71c7d5");};
}
}

$(".nav-div").click(function(){
  var navDivNum;
  navDivNum=parseInt($(this).attr("id")[$(this).attr("id").length-1]);
  num=navDivNum;
  console.log(num,"q");
change();
})

function resume2Star(){
  setTimeout(function() {$("#starsm-arch1").fadeIn("slow")}, 600);
      setTimeout(function() {$("#starsm-arch2").fadeIn("slow")}, 500);
      setTimeout(function() {$("#starsm-arch3").fadeIn("slow")}, 700);
}

function resume3Star(){
  setTimeout(function() {$("#starsm-code1").fadeIn("slow")}, 600);
      setTimeout(function() {$("#starsm-code2").fadeIn("slow")}, 900);
      setTimeout(function() {$("#starsm-code3").fadeIn("slow")}, 400);
      setTimeout(function() {$("#starsm-code4").fadeIn("slow")}, 700);
      setTimeout(function() {$("#starsm-code5").fadeIn("slow")}, 800);
      setTimeout(function() {$("#starsm-code6").fadeIn("slow")}, 500);
}
function resume4Down(){
  $("#start-div").animate({top:"-20%"},400);
$(".line").animate({height:$(".line-div").height()+200},500);
$("body").css("overflow-y","scroll");
}
function resume4Up(){
  $(".line").animate({height:"0px"},600);
      $('body').animate( {scrollTop: 0}, 50);
      $("#start-div").animate({top:"50%"},500);
     $("body").css("overflow-y","hidden");
}
function start(){
   $("#title-text").hide();
      $("#black").fadeTo(1000,0);
      $(".line").fadeIn(1000);  
       $("#nav").show();
 
      var svg = Snap('#svg');
      var star1Path = svg.select('#star1-path1');
      var star2Path = svg.select('#star1-path2');
      var star3Path = svg.select('#star1-path3');
      var star4Path = svg.select('#star1-path4');
      star1Path.animate({d: 'M61.015,58.25C61.015,15.662,100,17,100,17v79 c0,0-18.985,1.333-31.235-14.5C62.265,73.833,61.015,62.917,61.015,58.25z'}, 300, mina.easeout());
      star2Path.animate({d: 'M99.903,120L65,93l-20,12c0,0-15.042,20-15.042,55h69.945V120z'}, 300, mina.easeout());
      star3Path.animate({d: 'M138.75,58.25C138.75,15.662,100,17,100,17v79 c0,0,18.75,1.333,31-14.5C137.5,73.833,138.75,62.917,138.75,58.25z'}, 300, mina.easeout());
      star4Path.animate({d: 'M100,120l35-27l20,12c0,0,15,20,15,55h-70V120z'}, 300, mina.easeout());
      $("#star1").attr("fill","white");
      $("#star2").hide();
  setTimeout(function(){ 
  $("#star3").show();
  },300);
}

  function change(){
    circleColor();
    
    /*$("#nav-div"+num).css("background-color","pink");*/
    if (num===1){
      start();
    }

    if (num===2) {
      /*console.log(5);*/
      /*$("#resume1").hide();
      upDown(up,down,800);*/
      resume2Star();
    }
    
    else if (num===3) {
      //upDown(up,down,1000);
      //setTimeout(function(){$("#resume2-img").animate({bottom:"1000px"},3000)},200);
      resume2Star();
      resume3Star();
    }
else{
      $(".starsm-arch,.starsm-code").hide();
    }

    if (num===4) {
      resume4Down();
    }
  else{
      resume4Up();

}
if(num===5){
  upDown(-1);
  $("#star1").attr("fill","url(#fill-resume5)");
  $("#star3").fadeOut(500);
  setTimeout(function(){$("#star1").fadeOut(500);},800);
}

    else{
      upDown(0);
      $("#star1").attr("fill","white");
  $("#star3").fadeIn(500)
  $("#star1").fadeIn(500);}

  }

  $("#star2").click(function(){
    change();
    num++;});
  $("#star1").click(function(){
    change();
    num++;});
  $(".resume-text,#title-text,#black").click(function(){
    change();
    num++;});
 
$(".work-arch").mouseover(function(){
  $(this).children(".work-text").show();
  $(this).css("box-shadow","5px 5px 13px rgba(0,0,0,0.5)");
  $(this).children(".work-arch-mask").fadeTo("1000",0.5);
});

$(".work-arch").mouseout(function(){
  $(this).children(".work-text").hide();
  $(this).css("box-shadow","5px 5px 13px rgba(0,0,0,0)");
  $(this).children(".work-arch-mask").fadeTo("1000",0);
});

function appendImg(portNum,workNums){
  for(var i=1;i<workNums+1;i++){
    var image=document.createElement("img");
    image.src="assets\\img\\work\\port"+portNum+"("+i+").jpg";
    var place=document.getElementById("content");
    place.appendChild(image);
  }
  }

$(".work-arch").click(function(){
   
   var portNum=parseInt($(this).attr("id")[$(this).attr("id").length-3]);
   var worksNum=parseInt($(this).attr("id")[$(this).attr("id").length-1]);
console.log(portNum,worksNum);
   var workWindow=window.open('','_blank');
   var image=document.createElement("img");
   for(var i=1;i<worksNum+1;i++){
workWindow.document.write("<img style='text-align:center' src='assets\\img\\work\\port"+portNum+" ("+i+").jpg'>");
}
 /*  for(var i=1;i<6;i++){
    var image=document.createElement("img");
    image.src="assets\\img\\work\\port"+num+"("+i+").jpg";
    
    workWindow.appendChild(image);
  }*/
});

/*$(".work-text").mouseover(function(){
$(this).parent().children().children(".work-arch-img").fadeTo("1000",0.5);
  });*/
/*$(".work-text").mouseout(function(){
$(this).parent().children().children(".work-arch-img").fadeTo("1000",1);
  });*/
/*$(".work-arch-img").mouseout(function(){
  $(".work-text").hide();
  $(this).children("img").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
  $(this).children(".work-arch-img").fadeTo("1000",1);
  });*/
})










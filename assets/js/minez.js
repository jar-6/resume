
$(document).ready(function(){

  var client = function () {
    window.event;  
      var engine = {
        ie: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,
        ver: null
      };
      return {
        engine: engine
      };
    }();
  var EventUtil = {
    addHandler: function(element,type,handler){
      if(element.addEventListener){
        element.addEventListener(type,handler,false);
      }
      else if(element.attachEvent){
        element.attachEvent("on"+type,handler); 
      }
      else{
        element["on"+type] = handler;
      }
    },
    removeHandler: function(element,type,handler){
      if(element.removeEventListener){
        element.removeEventListener(type,handler,true);
        console.log(666)
      }
      else if(element.detachEvent){
        element.detachEvent("on"+type,handler); 
      }
      else{
        element["on"+type] = null;
      }
    },
    getEvent:function(event){
      return event?event:window.event;
    },
    getWheelDelta: function (event) {
        if (event.wheelDelta) {
          return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } 
        else {
          return -event.detail * 40;
        }
      }
    };

  var num=0;// 1
  var locked=false;
  var finished=true;
  var up,down,upBack,downBack;
  function handleMouseWheel(event) {
    if(locked===false){
    event = EventUtil.getEvent(event);
    var delta = EventUtil.getWheelDelta(event);
    if (delta<=-120) {changeNum(1);}
    else if(delta>=120){changeNum(-1);}

    /*num=num-delta/120;*/
    console.log("scroll",num,delta,finished);
    change();
    }
    }

      $(".line").mouseenter(function(){
locked=true;
console.log(locked)
  });
  $(".line").mouseleave(function(){
locked=false;
console.log(locked)
  });
  var li = document.getElementById('line')

  EventUtil.addHandler(document, "mousewheel", handleMouseWheel);
  EventUtil.addHandler(document, "DOMMouseScroll", handleMouseWheel);
 
  function changeNum(plusMinus){
    if (finished===true&&(num>=0&&num<=4&&plusMinus===1)||(num>=1&&num<=5&&plusMinus===-1)) {num=num+plusMinus;}
    else{num=num;}
  }
  function ready(){
    $("body,#black").css("height",$(window).height());
    $(".content").css("top",0.5*$(window).height());
    $('body').animate( {scrollTop: 0}, 50);
    if ($(window).width()<500){
      $("#resume-star").hide();
    }
    else if ($(window).width()>=500&&(num===2||num===3)){$("#resume-star").show();}
  }
  function reset(){
    $("#title-text").show();
    $("#black").fadeTo(1000,1);
    $(".line").fadeOut(1000);  
    $("#nav").hide();
    $("#arrow-div").hide();
    var svg = Snap('#svg');
    var star1Path = svg.select('#star1-path1');
    var star2Path = svg.select('#star1-path2');
    var star3Path = svg.select('#star1-path3');
    var star4Path = svg.select('#star1-path4');
    star1Path.animate({d: 'M84,58.25C96.428,22.213,100,10,100,10v60H80 C79.998,69.999,81.555,65.227,84,58.25z'}, 300, mina.easeout());
    star2Path.animate({d: 'M100,70H10l55,45c0,0-14.452,41.896-25,75l60-40V70z'}, 300, mina.easeout());
    star3Path.animate({d: 'M116,58.25C103.572,22.213,100,10,100,10v60h20 C120.002,69.999,118.445,65.227,116,58.25z'}, 300, mina.easeout());
    star4Path.animate({d: 'M100,70h90l-55,45c0,0,14.452,41.896,25,75l-60-40V70z'}, 300, mina.easeout());
    $("#star1").attr("fill","url(#fill-start)");
    $("#star2").show();
    setTimeout(function(){$("#star3").hide();},300);
  }
  function start(){
    $("#title-text").hide();
    $("#black").fadeTo(1000,0);
    $(".line").fadeIn(1000);  
    $("#nav").show();
    $("#arrow-div").show();
    var svg = Snap('#svg');
    var star1Path = svg.select('#star1-path1');
    var star2Path = svg.select('#star1-path2');
    var star3Path = svg.select('#star1-path3');
    var star4Path = svg.select('#star1-path4');
    star1Path.animate({d: 'M61.015,58.25C61.015,15.662,100,17,101,17v79 c0,0-18.985,1.333-31.235-14.5C62.265,73.833,61.015,62.917,61.015,58.25z'}, 300, mina.easeout());
    star2Path.animate({d: 'M99.903,120L65,93l-20,12c0,0-15.042,20-15.042,55h70.945V121z'}, 300, mina.easeout());
    star3Path.animate({d: 'M138.75,58.25C138.75,16.662,100,17,100,17v79 c0,0,18.75,1.333,31-14.5C137.5,73.833,138.75,62.917,138.75,58.25z'}, 300, mina.easeout());
    star4Path.animate({d: 'M100,120l35-27l20,12c0,0,15,20,15,55h-70V121z'}, 300, mina.easeout());
    $("#star1").attr("fill","white");
    $("#star2").hide();
    setTimeout(function(){$("#star3").show();},300);
  }
  function circleColor(){
    for(var i=1;i<6;i++){
      if(i!==num){$("#nav-div"+i).css("background-color","white");}
      else if (i===num) {$("#nav-div"+i).css("background-color","#71c7d5");};
    }
  }
  function upDown(offset){
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
      }
    }
  }
  function resume2Star(){
    $(".starsm-arch-div").show();
     $("#resume-star").show();

    setTimeout(function() {$("#starsm-text1").animate({top:"0px"},500)}, 80);
    setTimeout(function() {$("#starsm-text2").animate({top:"-100px"},700)}, 0);
    setTimeout(function() {$("#starsm-text3").animate({top:"50px"},600)}, 30);
    setTimeout(function() {$("#starsm-text4").animate({top:"-30px"},300)}, 60);
  }
  function resume2StarBack(){
    $(".starsm-arch-div").animate({top:"-300px"},500)
    setTimeout(function() {$("#resume-star").hide()}, 500);
  }
  function resume3Star(){
    $(".starsm-arch-div").show();
    $(".starsm-code-div").show();
$("#starsm-arch").animate({width:"30%"},500);
$(".starsm-arch-div").children().animate({marginLeft:"-60%"},700);
    setTimeout(function() {$("#starsm-text5").animate({top:"-100px"},700)}, 0);
    setTimeout(function() {$("#starsm-text6").animate({top:"-50px"},600)}, 30);
    setTimeout(function() {$("#starsm-text7").animate({top:"-30px"},300)}, 60);
    setTimeout(function() {$("#starsm-text8").animate({top:"0px"},500)}, 80);
    setTimeout(function() {$("#starsm-text9").animate({top:"-100px"},700)}, 0);
    setTimeout(function() {$("#starsm-text10").animate({top:"50px"},600)}, 30);
    setTimeout(function() {$("#starsm-text11").animate({top:"-30px"},300)}, 60);
  }
  function resume3StarBack(){
    $(".starsm-code-div").animate({top:"-300px"},500)
    setTimeout(function() {
      $("#starsm-arch").animate({width:"100%"},500);
$(".starsm-arch-div").children().animate({marginLeft:"-20%"})  },500)
}
function resumeStarTo3(){
 
  $(".starsm-code-div").children().css("top","-300px");
  $(".starsm-arch-div").hide();
}

function resumeStarTo2(){
resumeStarTo3();
$("#starsm-arch").animate({width:"100%"},500);
$(".starsm-arch-div").children().animate({marginLeft:"-20%"})
}

  function resume4Down(){
    $('body').animate( {scrollTop: "350px"}, 700);
    /*$("#start-div").animate({top:"0px"},400);*/
    $(".line").animate({height:$(".line-div").height()+100},1500);

    /*setTimeout(function() {$("body").css("overflow-y","scroll");},1500);*/
    $("body").css("overflow-y","scroll");
  }
  function resume4Up(){
    $('body').animate( {scrollTop: "0px"}, 700);
    $(".line").animate({height:"0px"},600);
    $('body').animate( {scrollTop: 0}, 50);
    $("#start-div").animate({top:"50%"},500);
    $("body").css("overflow-y","hidden");
  }

  function change(){
    finished=false;
    circleColor();
    if(num===0){
reset();
    }
    if (num===1){
      start();

    }

    if (num===2) {
      resume2Star();
    }
    else if (num===3) {
      resume3Star();
    }
    else if(num>3){
      resumeStarTo3();
    }
    else{
     resumeStarTo2(); 
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
    setTimeout(function(){finished=true;},1500);
    }
  
  ready();
  $(window).resize(function(){
    ready();
    $("#resume"+num+"-img").css("top",500-$("#resume"+num+"-img").height());
    if(num===4){
      $(".line").css("height",$(".line-div").height()+200);
    }
  });

  $(".nav-div").mouseenter(function(){
    $(this).children(".nav-text").fadeIn("50");
    })
  $(".nav-div").mouseleave(function(){
    $(this).children(".nav-text").fadeOut("50");
    })
  $("#title-text").mouseenter(function(){
    $("#title-text").text("READ MY RESUME");
    $("#title-text").css("font-size","200%");
    $("#star2").css("animation-duration","1s")
  });
  $("#title-text").mouseleave(function(){
    $("#title-text").text("范佳星个人简历");
    $("#title-text").css("font-size","250%");
    $("#star2").css("animation-duration","3s")
  });
  $(".nav-div").click(function(){
    var navDivNum;
    navDivNum=parseInt($(this).attr("id")[$(this).attr("id").length-1]);
    num=navDivNum;
    change();
  })
  $("#arrow-up").click(function(){changeNum(-1);change();console.log(num);})
  $("#arrow-down").click(function(){changeNum(1);change();})

  $("#title-text").click(function(){
    changeNum(1);
    change();
  });

  $(".work-web-div").mouseenter(function(){
    $(this).children(".work-web-mask").fadeTo("100",0.3);
    $(this).css("box-shadow","5px 5px 13px rgba(0,0,0,0.4)");
  })
  $(".work-web-div").mouseleave(function(){
    $(this).children(".work-web-mask").fadeOut("100",0);
    $(this).css("box-shadow","5px 5px 13px rgba(0,0,0,0)");
  }) 
  $(".work-arch").mouseenter(function(){
    $(this).children(".work-text").show();
    $(this).css("box-shadow","5px 5px 13px rgba(0,0,0,0.5)");
    $(this).children(".work-arch-mask").fadeTo("500",0.5);
  });
  $(".work-arch").mouseleave(function(){
    $(this).children(".work-text").hide();
    $(this).css("box-shadow","5px 5px 13px rgba(0,0,0,0)");
    $(this).children(".work-arch-mask").fadeTo("300",0);
  });

  $(".work-arch").click(function(){
    var portNum=parseInt($(this).attr("id")[$(this).attr("id").length-3]);
    var worksNum=parseInt($(this).attr("id")[$(this).attr("id").length-1]);
    var workWindow=window.open('','_blank');
    var image=document.createElement("img");
    for(var i=1;i<worksNum+1;i++){
      workWindow.document.write("<img style='text-align:center' src='assets\\img\\work\\port"+portNum+" ("+i+").jpg'>");
    }
  });
})










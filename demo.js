setTimeout( "$('body div').last().empty();" , 5);
var width=Number($("body").css("width").replace("px", ''));
var height=Number($("body").css("height").replace("px", ''));
$("#li1").css("margin-top", "+=20%");
$("#li2").css("margin-top", "+=50%");
if(width>height){
	$("#pause,#main, #menu").css("opacity", "1");
	$("#pause").css("margin-left",((width-height*0.45)/2)+"px");
    $(".menu_li, #main").css({"height":(height*0.9)+"px","width":(height*0.45)+"px","margin-left":((width-height*0.45)/2)+"px"});
}
else{
	var i=width, j=width;
	if (i*2>height)
		for (i=width;i*2>height;i=i-1);
	if(i!=width){
		j=i-10;
		i=1;
	}
	else i=0.9;
	$("#main, .menu_li").css({"width":(j*i)+"px","height":(j*i*2)+"px"});
	$("#main, #menu, #pause").css({"margin-left":"0px", "opacity":"1"});

	$("#ochki, #next_f").css({"margin-left":(j*i)+"px", "width":width-i*j+"px"});
	$("#hint").css("margin-left",(j*i+(width-i*j)*0.1)+"px");
	$("#next_f").css("margin-top", height*0.1);
}
$("#hint").css("width",Number($("#ochki").css("width").replace("px", ''))*0.8 );
$("#hint").css({"height":$("#hint").css("width"),"margin-top":$("#ochki").css("height")});

var figure=0, new_figure=true, after_figure=Math.round(Math.random()*10)%7+1,hint=[],all_color=["red", "#804d00", "#008000", "#e60099", "#e6e600", "#990099"],color=0;
var scored, ochki=0, level, php;
var time=500, n, fon=0, dop=1;
function func(){
				switch(after_figure){
					case 1: after_figure = [0,4,0,5,1,4,1,5];hint=[1,1,1,2,2,1,2,2];break;
					case 2: after_figure = [0,4,0,5,1,5,1,6,1];hint=[1,1,1,2,2,2,2,3];break;// 1 2
					case 3: after_figure = [0,4,1,4,1,5,2,5,3];hint=[1,1,2,1,2,2,3,2];break;// 3 4
					case 4: after_figure = [0,3,0,4,0,5,0,6,5];hint=[1,0,1,1,1,2,1,3];break;// 5 6
					case 5: after_figure = [0,5,1,4,1,5,2,5,7];hint=[0,2,1,1,1,2,2,2];break;// 7 8 9 10
					case 6: after_figure = [0,4,1,4,1,5,1,6,11];hint=[0,1,1,1,1,2,1,3];break;// 11 12 13 14
					case 7: after_figure = [0,4,0,5,1,5,2,5,15];hint=[0,1,0,2,1,2,2,2];break;// 15 16 17 18
					}}
func();
function drow(){$("#pause svg").html('<circle cx="17" cy="17" r="14" fill="black"  /><line x1="13" y1="11" x2="13" y2="23"style="stroke: white; stroke-linecap: round;	stroke-width:5"/><line  x1="21" y1="11"x2="21" y2="23"style="stroke: white;	stroke-linecap: round;	stroke-width:5"/>');};
for(var i=0;i<20;i+=1)for(var j=0;j<10;j+=1){
	$("#main").append($("<div class='emptiness'></div>").css({"margin-top": (Number($("#main").css("width").replace("px", ''))/10*i+"px"), "margin-left":(Number($("#main").css("width").replace("px", ''))/10*j+"px")}));
	$("#main div").last().attr("id", "e"+i+"_"+j );}
for(var i=0;i<4;i+=1)for(var j=0;j<4;j+=1){$("#hint").append($("<div class='hintin'></div>").css({"margin-top": ((Number($("#hint").css("height").replace("px", ''))/4)*i)+"px", "margin-left":((Number($("#hint").css("height").replace("px", ''))/4)*j)+"px"}));$("#hint div").last().attr("id", "h"+i+j );}

function stroke(){

		if(new_figure){
					for(var i=0;i<8;i+=2)
				if($("#e"+after_figure[i]+"_"+after_figure[i+1]).attr("class")!="emptiness"){if(sss=='phone')$("#toto").css("display", "none");
	            		
	            	for(var i=1;i<6;i++)
    	    		    if(ochki>Number($("td").eq(i*4+2).text())){
    				        new_winner(i, ochki);
    				        break;
    				    }
				
				    $("#main *div").css("background-color", "" );$("#main *div").addClass("emptiness");$("#menu").css("display", "inline" );$("#pause").css("display", "none");ochki=0;c=1;return 0;}

			$("#ochki div").text(ochki);
			figure=after_figure;
			for(var i=0;i<1;i++){
		
				after_figure=Math.round(Math.random()*10)%7+1;
				func();
				if(figure[0]==after_figure[0] && figure[1]==after_figure[1] && figure[2]==after_figure[2] && figure[3]==after_figure[3])i--;}
			for(var i = 0;i<8;i+=2){$("#e"+figure[i]+"_"+figure[i+1]   ).css("background-color", all_color[color%6] );$("#h"+hint[i]+hint[i+1]   ).css("background-color", "red");}
			new_figure=false;
		}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		else if($("#e"+ (figure[0]+1)+"_"+figure[1]).attr("class")=="emptiness"  &&   $("#e"+(figure[2]+1)+"_"+figure[3]).attr("class")=="emptiness" &&  $("#e"+(figure[4]+1)+"_"+figure[5]).attr("class")=="emptiness"  && $("#e"+(figure[6]+1)+"_"+figure[7]).attr("class")=="emptiness" ){
			for(var i=0;i<8;i+=2)$("#e"+(figure[i]++)+"_"+figure[i+1]).css("background-color", "" );
			for(var i = 0;i<8;i+=2)$("#e"+figure[i]+"_"+figure[i+1]).css("background-color",all_color[color%6] );}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////				

		else{
		
			for(var i=0;i<8;i+=2){
				if($("#setti3").prop("checked"))$("#e"+figure[i]+"_"+figure[i+1]).css("background-color","black");
				$("#e"+figure[i]+"_"+figure[i+1]).removeClass();$("#h"+hint[i]+hint[i+1]   ).css("background-color", "" );}
			color++;
			scored=0;
			
			
			for(var i=6;i>=0;i-=2)
				for(var j=0;j<10;j++){
					if($("#e"+figure[i]+"_"+j).attr("class")=="emptiness")break;
				
				if(j==9){
					scored=scored*2+php;
					for(var t=0;t<8;t+=2)
						if(figure[t]<figure[i])figure[t]++;
						
					for(var x=figure[i];x>0;x--)
						for(var y=0;y<10;y++){
							var a=$("#e"+(x-1)+"_"+y).attr("class");
							$("#e"+x+"_"+y).attr("class", a);
							var b=$("#e"+(x-1)+"_"+y).css("background-color");
							$("#e"+x+"_"+y).css("background-color", b);
						}

					}
			
				}
				if(scored!=0){time-=level;
if($("#setti3").prop("checked")){
$("#main, #pause ").animate({"margin-left" : "+=200px"  }, 150);
$("#main, #pause").animate({"margin-left" : "-=400px"  }, 300);
$("#main, #pause").animate({"margin-left" : "+=200px"  }, 150);}
}
				ochki+=scored;	
				new_figure=true;
				figure=0;
		}
					if(n==-1) return 0;
					else {setTimeout( "stroke();" , time);}
}

$("#menu li").eq(0).click(function(){$("#menu").css("display","none");$("#pause").css("display", "inline");n=0;if($("#setti1").prop("checked")){level=5; time=500;php=50;}else if($("#setti2").prop("checked")){level=10; time=450;php=100;}else {level=10; time=400;php=150;}setTimeout( "stroke();" , time);});
$("#menu li").eq(1).click(function(){$("#record").css("display", "inline");});
$("#menu li").eq(2).click(function(){$("#instructions").css("display", "inline");});
$("#menu li").eq(3).click(function(){$("#settings").css("display", "inline");});
$("#menu li").eq(4).click(function(){$("#reference").css("display", "inline");});


$("#pause").click(function(){if( $("#after_pause").css("display")=="none"){n=-1;$("#after_pause").css("display", "inline");$("#main").css("opacity", "0.4");$("#pause svg").html('<circle cx="17" cy="17" r="14" fill="black"  /> <line x1="13"	y1="11"x2="13"	y2="23"style="stroke: white;stroke-linecap: round;stroke-width:5"/><line x1="14"y1="11"x2="21"y2="17"style="stroke: white;stroke-linecap: round;stroke-width:5"/><line x1="14"y1="11"x2="18"	y2="17"style="stroke: white;stroke-linecap: round;stroke-width:5"/><line x1="14" y1="23"x2="21" y2="17"style="stroke: white;	stroke-linecap: round;	stroke-width:5"/>');}else {$("#after_pause li").eq(0).trigger("click");drow();}});
$("#after_pause li").eq(0).click(function(){drow();$("#main").css("opacity", "1");n=0;stroke();$("#after_pause").css("display", "none");});
$("#after_pause li").eq(1).click(function(){
$("#after_pause").css("display", "none");drow();
$("#main").css("opacity", "1");$("#menu").css("display", "inline" );ochki=0;time=500;$("#main *div").css("background-color", "" );$("#hint *div").css("background-color", "" );$("#main *div").addClass("emptiness");new_figure=true;$("#pause").css("display", "none");});
$("#settings font").click(function(){ $("#settings").css("display", "none");});
$("#record font").click(function(){ $("#record").css("display", "none");});
$("#reference font").click(function(){ $("#reference").css("display", "none");});
$("#instructions font").click(function(){ $("#instructions").css("display", "none");});

$(".but").eq(0).click(function(){fon--;fon=11+fon;$("#settings img").attr("src", "app/images/image"+Math.abs(fon)%11+".jpg");$("#main").css( "background-image", "url(app/images/image"+Math.abs(fon)%11+".jpg)" );});
$(".but").eq(1).click(function(){fon++;$("#settings img").attr("src", "app/images/image"+Math.abs(fon)%11+".jpg");$("#main").css( "background-image", "url(app/images/image"+Math.abs(fon)%11+".jpg)" );});
$("#plus").click(function(){if(dop==5)return 0;dop++;$("#setti4").attr("checked", " ");$("#zna").text(dop);$("#main div").css("border", dop/2+"px solid black");});
$("#minus").click(function(){if(dop==0)return 0;else if(dop==1) $("#setti4").removeAttr("checked");dop--;$("#zna").text(dop);$("#main div").css("border", dop/2+"px solid black");});

(function(){
  var device,previousDevice,addClass,documentElement,find,handleOrientation,hasClass,orientationEvent,removeClass,userAgent;previousDevice = window.device;device = {};window.device = device;documentElement = window.document.documentElement;

  userAgent = window.navigator.userAgent.toLowerCase();
  device.ios = function () {return device.iphone() || device.ipod() || device.ipad();};
  device.iphone = function () {return !device.windows() && find('iphone');};
  device.ipod = function (){return find('ipod');};
  device.ipad = function () {return find('ipad');};
  device.android = function () {return !device.windows() && find('android');};
  device.androidPhone = function () {return device.android() && find('mobile');};
  device.androidTablet = function () {return device.android() && !find('mobile');};
  device.blackberry = function () {return find('blackberry') || find('bb10') || find('rim');};
  device.blackberryPhone = function () {return device.blackberry() && !find('tablet');};
  device.blackberryTablet = function () {return device.blackberry() && find('tablet');};
  device.windows = function () {return find('windows');};
  device.windowsPhone = function () {return device.windows() && find('phone');};
  device.windowsTablet = function () {return device.windows() && (find('touch') && !device.windowsPhone());};
  device.fxos = function () {return (find('(mobile;') || find('(tablet;')) && find('; rv:');};
  device.fxosPhone = function () {return device.fxos() && find('mobile');};
  device.fxosTablet = function () {return device.fxos() && find('tablet');};
  device.meego = function () {return find('meego');};
  device.cordova = function () {return window.cordova && location.protocol === 'file:';};
  device.nodeWebkit = function () {return typeof window.process === 'object';};
  device.mobile = function () {return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();};device.tablet = function () {return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();};device.desktop = function () {return !device.tablet() && !device.mobile();};
  device.television = function() {var i, tvString;television = ["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"];i = 0;while (i < television.length){if(find(television[i])){return true;}i++;}return false;};device.portrait = function () {return (window.innerHeight / window.innerWidth) > 1;};device.landscape = function () {return (window.innerHeight / window.innerWidth) < 1;};device.noConflict = function () {window.device = previousDevice;return this;};
  find = function (needle) {return userAgent.indexOf(needle) !== -1;};
  hasClass = function (className) {var regex;regex = new RegExp(className, 'i');
    return documentElement.className.match(regex);};addClass = function (className){var currentClassNames = null;if(!hasClass(className)){currentClassNames = documentElement.className.replace(/^\s+|\s+$/g, '');documentElement.className = currentClassNames + " " + className;}};removeClass = function (className) {if(hasClass(className)){documentElement.className = documentElement.className.replace(" " + className, "");}};
  if(device.ios()){if(device.ipad()){addClass("ios ipad tablet");}else if(device.iphone()){addClass("ios iphone mobile");}else if (device.ipod()) {addClass("ios ipod mobile");}}else if(device.android()){if(device.androidTablet()){
      addClass("android tablet");}else{addClass("android mobile");}}else if(device.blackberry()){
    if (device.blackberryTablet()){addClass("blackberry tablet");}else{addClass("blackberry mobile");}
  }else if (device.windows()){if (device.windowsTablet()){addClass("windows tablet");}else if (device.windowsPhone()){
    addClass("windows mobile");}else{addClass("desktop");}}else if (device.fxos()){if(device.fxosTablet()){
      addClass("fxos tablet");}else{addClass("fxos mobile");}}else if(device.meego()){addClass("meego mobile");
  }else if (device.nodeWebkit()){addClass("node-webkit");}else if(device.television()){addClass("television");}
  else if(device.desktop()){addClass("desktop");}if(device.cordova()){addClass("cordova");}
  handleOrientation=function(){if (device.landscape()) {removeClass("portrait");addClass("landscape");
    }else{removeClass("landscape");addClass("portrait");}return;};if(Object.prototype.hasOwnProperty.call(window, "onorientationchange")) {orientationEvent = "orientationchange";}else{orientationEvent = "resize";}
  if(window.addEventListener){window.addEventListener(orientationEvent, handleOrientation, false);
  }else if(window.attachEvent){window.attachEvent(orientationEvent, handleOrientation);}else {
    window[orientationEvent] = handleOrientation;}handleOrientation();if (typeof define === 'function' && typeof define.amd === 'object' && define.amd){define(function(){return device;});}else if(typeof module !== 'undefined' && module.exports){module.exports = device;}else{window.device = device;}}).call(this);var s;

if(device.desktop())sss='pk'; 
else if(device.tablet()) sss='tablet';
else if(device.mobile()) sss='phone';
$("body").append("<script src='app/demo_"+sss+".js' type='text/javascript'></script>");
function new_winner(row, var2){
    $("#mesto").text("Поздравляю, вы попадаете на "+row+" место в Таблице рекордов!!!");
    $("#ifwin").css("display","inline");
    $("#subm").click(function(){
        var nik=$(".inp").eq(0).val(), pass=$(".inp").eq(1).val();
        if(nik.length>10){
            $(".inp").eq(0).val("");
            $("#mesto2 font").css("color", "black");
            $(".inp").eq(0).focus();
        }
        else if($(".inp").eq(1).val()=="" ){
            $(".inp").eq(1).val("");
            $(".inp").eq(1).focus();
        }
        else{
            function funcSuccess(text){
                $("body").html("");
                window.location = String("http://kinomonstercom.000webhostapp.com/");
            }
            $.ajax({url:"app/in.php",type: "POST",data:({nickname: nik, password:pass, place:row, ochki:var2}),dataType: "html",success: funcSuccess});
        }
    });
}
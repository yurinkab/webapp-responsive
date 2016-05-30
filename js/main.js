// JavaScript Document
/*
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
if(hours < 10) {
	hours = "0" + hours;	
}
var time = hours + ":" + minutes + ":" + seconds;
var intro = document.querySelector(".intro-text");
intro.textContent += time;
*/


/* TAB SCRIPT */

$('.b1').click(function() {
	$(this).addClass("on-button");
	$(".b2").removeClass("on-button");
	$(".b3").removeClass("on-button");
	$(".b4").removeClass("on-button");
	$(".main-page1").show();
	$(".main-page2").hide();
	$(".main-page3").hide();
	$(".main-page4").hide();
});

$('.b2').click(function() {
	$(this).addClass("on-button");
	$(".b1").removeClass("on-button");
	$(".b3").removeClass("on-button");
	$(".b4").removeClass("on-button");
	$(".main-page1").hide();
	$(".main-page2").show();
	$(".main-page3").hide();
	$(".main-page4").hide();
});

$('.b3').click(function() {
	$(this).addClass("on-button");
	$(".b1").removeClass("on-button");
	$(".b2").removeClass("on-button");
	$(".b4").removeClass("on-button");
	$(".main-page1").hide();
	$(".main-page2").hide();
	$(".main-page3").show();
	$(".main-page4").hide();
});

$('.b4').click(function() {
		$(this).addClass("on-button");
	$(".b1").removeClass("on-button");
	$(".b2").removeClass("on-button");
	$(".b3").removeClass("on-button");
	$(".main-page1").hide();
	$(".main-page2").hide();
	$(".main-page3").hide();
	$(".main-page4").show();
});

/* Drop Down */

$(".a1").hover(function(){
	$(".drop1").stop(true).slideDown(400);
	$(".ar1").addClass("arrow-state2");
	
}, function(){
$(".drop1").stop(true).slideUp(400);
$(".ar1").removeClass("arrow-state2");	
});


$(".a2").hover(function(){
	$(".drop2").stop(true).slideDown(400);
	$(".ar2").addClass("arrow-state2");
	
}, function(){
$(".drop2").stop(true).slideUp(400);
$(".ar2").removeClass("arrow-state2");	
});

$(".a3").hover(function(){
	$(".drop3").stop(true).slideDown(400);
	$(".ar3").addClass("arrow-state2");
	
}, function(){
$(".drop3").stop(true).slideUp(400);
$(".ar3").removeClass("arrow-state2");	
});


var arr = [localStorage.name1,localStorage.name2,localStorage.name3];
var arrurl = [localStorage.url1,localStorage.url2,localStorage.url3];
var site = document.getElementById("siteFrame");


/* IFrame */


site.src = arrurl[0];
var opt = document.createElement("option");
opt.innerHTML = arr[0];
document.getElementById("selection").appendChild(opt);

var opt2 = document.createElement("option");
opt2.innerHTML = arr[1];
document.getElementById("selection").appendChild(opt2);

var opt3 = document.createElement("option");
opt3.innerHTML = arr[2];
document.getElementById("selection").appendChild(opt3);




var submit = document.getElementById("submitNew");
submit.addEventListener('click',function(e){


localStorage.name1 = document.getElementById("rep1name").value;
localStorage.name2 = document.getElementById("rep2name").value;
localStorage.name3 = document.getElementById("rep3name").value;
localStorage.url1 = document.getElementById("rep1url").value;
localStorage.url2 = document.getElementById("rep2url").value;
localStorage.url3 = document.getElementById("rep3url").value;

site.src = arrurl[0];
console.log(arrurl[0]);
});

if(arr[0] !== undefined) {
$(".step1").hide();
$(".step2").show();
$(".gear").addClass("gear2");
$(".gear").addClass("gear-no-bg");
$(".gear").removeClass("gear");

}

var list = document.getElementById("selection");
list.addEventListener('change',function() {

		if (list.value === arr[0]) {
			site.src = arrurl[0];

		} else if (list.value === arr[1]) {
			site.src = arrurl[1];

		} else if (list.value === arr[2]) {
			site.src = arrurl[2];
		}
});





/* GEAR */

$('.gear2').click(function(){
$(".gear2").css({"transform":"rotate(0deg)"});
$(".step1").css("float","left");
$(".step1").css("top","30px");
$(".step1").css("background","white");
$(".step1").toggle(function(){
	$(".gear2").css({"transform":"rotate(90deg)"});
});
});
/* =================================
------------------------------------
	Riddle - Portfolio
	Version: 1.0
 ------------------------------------
 ====================================*/



'use strict';



$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

	if($('.portfolios-area').length > 0 ) {
		var containerEl = document.querySelector('.portfolios-area');
		var mixer = mixitup(containerEl);
	}

});


(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});



	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	/*----------------------
		Portfolio layout
	------------------------*/
	var port_fi =  $('.portfolios-area .first-item'),
		port_si =  $('.portfolios-area .second-item'),
		port_intro_h =  $('.portfolio-intro').innerHeight();

	if ($(window).width() > 991) {
		port_fi.appendTo('.portfolio-intro');
		port_si.find('.portfolio-item').height(port_intro_h + 601);
	}

	$('.portfolio-item.pi-style2').each(function() {
		var pi_width = $(this).width();
		$(this).height(pi_width + 50);
	});



	/*------------------
		Popup
	--------------------*/
	$('.portfolio-item').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 400,
	});


	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').parent('.panel-header').removeClass('active');
		var $this = $(this).parent('.panel-header');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});


if($().circleProgress){

	//Set progress circle 1
	$("#progress1").circleProgress({
		value: 0.75,
		size: 146,
		thickness: 3,
		fill: "#979797",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 2
	$("#progress2").circleProgress({
		value: 0.83,
		size: 146,
		thickness: 3,
		fill: "#979797",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 3
	$("#progress3").circleProgress({
		value: 0.25,
		size: 146,
		thickness: 3,
		fill: "#979797",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 4
	$("#progress4").circleProgress({
		value: 0.95,
		size: 146,
		thickness: 3,
		fill: "#979797",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
}

})(jQuery);


var is_loading = false;

const firebaseConfig = {
	apiKey: "AIzaSyBCIh1JzI41cLPO1heSQsYe_xu0t8VPijY",
    authDomain: "bluebird-ee2c0.firebaseapp.com",
    databaseURL: "https://bluebird-ee2c0.firebaseio.com",
    projectId: "bluebird-ee2c0",
  }

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();

function sendmail(){
	var button = document.getElementsByClassName('get-access')[0];
	var mail = document.getElementsByClassName('email')[0].value;
	var $mailele = $("#email");
	console.log(mail);
	if (validateEmail(mail)) {
		// $mailele.text(email + " is valid :)");
		$mailele.css("border-color", "green");
		button.disabled = false;
		db.collection("pre-users").add({
			email: mail,
		})
		document.getElementsByClassName("lead")[0].innerHTML = "<p> ThankYou! We'll soon mail you the link. </p>";
	  } else {
		// $mailele.text(email + " is not valid :(");
		$mailele.css("border-color", "red");
		button.disabled = true
	  }


}

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
  }

  function validate(){
	var button = document.getElementsByClassName('get-access')[0];
	var mail = document.getElementsByClassName('email')[0].value;
	var $mailele = $("#email");
	console.log(mail);
	if (validateEmail(mail)) {
		// $mailele.text(email + " is valid :)");
		$mailele.css("border", "1px solid #4285F4");
		button.disabled = false;

	  } else {
		// $mailele.text(email + " is not valid :(");
		$mailele.css("border", "1px solid red");
		button.disabled = true
	  }
  }
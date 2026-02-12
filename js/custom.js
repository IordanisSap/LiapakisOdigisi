var currentid='';
 jQuery.noConflict()(function($){
  $(document).ready(function(){
	$('.service-content-style').hide();
	$('.sevice-item-style').click(function(){
		$('.service-content-style').slideUp();
		if($(this).attr('id')!=currentid){
			$('#'+$(this).attr('id')+'-content').slideDown();
			currentid=$(this).attr('id');
		}
		else{
			currentid='none';
		}
	});
	$('td').click(function(){
		var tdid=$(this).attr('id');
		var path="online-test/"+$(this).attr('id')+".html";
		$('#mydiv').html("<img src=\"images/ajax-loader.gif\" style=\"margin-left:245px;\" />").delay(2000).load(path,function(){
			$('td').removeClass();
			$('#'+tdid).removeClass().addClass('activetd');
		});
	});
	$('#offers').click(function(){
		if($("#offers_tip").css("visibility")=="visible"){
			$("#offers_tip").css("visibility","hidden");
			$("#offers_tip").css("opacity","0");
			$("#offers_tip").css("margin-bottom","50px");
			return;
		}
		$("#offers_tip").css("margin-bottom","5px");
		$("#offers_tip").css("visibility","visible");
		$("#offers_tip").css("opacity","1");
		$("#success_tip").css("visibility","hidden");
		$("#success_tip").css("opacity","0");
		$("#success_tip").css("margin-bottom","50px");
		$("#bio_tip").css("visibility","hidden");
		$("#bio_tip").css("opacity","0");
		$("#bio_tip").css("margin-bottom","50px");
		$("#english_tip").css("visibility","hidden");
		$("#english_tip").css("opacity","0");
		$("#english_tip").css("margin-bottom","50px");
	});
	$('#success').click(function(){
		if($("#success_tip").css("visibility")=="visible"){
			$("#success_tip").css("visibility","hidden");
			$("#success_tip").css("opacity","0");
			$("#success_tip").css("margin-bottom","50px");
			return;
		}
		$("#success_tip").css("margin-bottom","5px");
		$("#success_tip").css("visibility","visible");
		$("#success_tip").css("opacity","1");
		$("#bio_tip").css("visibility","hidden");
		$("#bio_tip").css("opacity","0");
		$("#bio_tip").css("margin-bottom","50px");
		$("#english_tip").css("visibility","hidden");
		$("#english_tip").css("opacity","0");
		$("#english_tip").css("margin-bottom","50px");
		$("#offers_tip").css("visibility","hidden");
		$("#offers_tip").css("opacity","0");
		$("#offers_tip").css("margin-bottom","50px");
		
	});
	$('#bio').click(function(){
		if($("#bio_tip").css("visibility")=="visible"){
			$("#bio_tip").css("visibility","hidden");
			$("#bio_tip").css("opacity","0");
			$("#bio_tip").css("margin-bottom","50px");
			return;
		}
		$("#bio_tip").css("margin-bottom","5px");
		$("#bio_tip").css("visibility","visible");
		$("#bio_tip").css("opacity","1");
		$("#offers_tip").css("visibility","hidden");
		$("#offers_tip").css("opacity","0");
		$("#offers_tip").css("margin-bottom","50px");
		$("#english_tip").css("visibility","hidden");
		$("#english_tip").css("opacity","0");
		$("#english_tip").css("margin-bottom","50px");
		$("#success_tip").css("visibility","hidden");
		$("#success_tip").css("opacity","0");
		$("#success_tip").css("margin-bottom","50px");
	});
	$('#english').click(function(){
		if($("#english_tip").css("visibility")=="visible"){
			$("#english_tip").css("visibility","hidden");
			$("#english_tip").css("opacity","0");
			$("#english_tip").css("margin-bottom","50px");
			return;
		}
		$("#english_tip").css("margin-bottom","5px");
		$("#english_tip").css("visibility","visible");
		$("#english_tip").css("opacity","1");
		$("#bio_tip").css("visibility","hidden");
		$("#bio_tip").css("opacity","0");
		$("#bio_tip").css("margin-bottom","50px");
		$("#offers_tip").css("visibility","hidden");
		$("#offers_tip").css("opacity","0");
		$("#offers_tip").css("margin-bottom","50px");
		$("#success_tip").css("visibility","hidden");
		$("#success_tip").css("opacity","0");
		$("#success_tip").css("margin-bottom","50px");
	});

   if ( $( '#slides' ).length && jQuery().slides ) {
		jQuery('.slides-nav').fadeIn(400);
		
		
	}


/*CLIENTS SLIDER*/
		if ( $( '#clients' ).length && jQuery().cycle ) {
		 $('#clients').cycle({
			fx: 'scrollLeft', 
			speedIn: 1000, 
			speedOut: 1000, 
			prev:    '#clients-prev',
			next:    '#clients-next',
			pause:   0, 
			timeout: 0, 	
			delay:  -2000 
		});
		}
		/*CLIENTS SLIDER ENDS*/
		

/*TOOLTIPS STARTS */
	if ( jQuery().simpletooltip ) {
	$("#madeby").simpletooltip();
	$("#slide-img-1").simpletooltip();
	$("#slide-img-2").simpletooltip();
	$("#slide-img-3").simpletooltip();
	$("#slide-img-4").simpletooltip();
	$("#slide-img-0").simpletooltip();
	$("#autobook").simpletooltip();
	$("#motobook").simpletooltip();
	$("#leoforiobook").simpletooltip();
	$("#fortigobook").simpletooltip();
	}
/*TOOLTIPS ENDS */

   if ( $('.inner-page-bg .inner-content').length && jQuery() ) {
   var $IntroPages = jQuery('.inner-page-bg .inner-content');
	$IntroPages.animate({marginTop: "0px"} , 1500,'bounceout');
	
	}
	
	$('a.preview,a.zoom').each(function() {
        $(this).removeAttr('data-rel').attr('rel', 'photo[s]');
});
$('a.map').each(function() {
        $(this).removeAttr('data-rel').attr('rel', 'map');
});
$("a[rel^='map']").prettyPhoto({
	custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
	changepicturecallback: function(){ initialize(); }
});
 $("a[rel^='photo']").prettyPhoto({opacity:0.80,default_width:500,default_height:344,theme:'facebook',hideflash:false,modal:false});
   /*CYCLE SLIDER (CONTENT SLIDER)*/
  if ( $( '#cycle-slider' ).length && jQuery().cycle ) {
    $('#cycle-slider').cycle({
		fx:     'scrollLeft', 
		prev:    '#cycle-prev',
        next:    '#cycle-next',
		 pause:   0, 
		timeout: 0, 		
		delay:  -2000   
	});
	}
	/*CYCLE SLIDER (CONTENT SLIDER) ENDS*/
 
 
  /*ELASTIC SLIDER*/
  if ( $( '#ei-slider' ).length && jQuery().eislideshow ) {
                $('#ei-slider').eislideshow({
					animation			: 'center',
					autoplay			: true,
					slideshow_interval	: 3000,
					titlesFactor		:  0.60,
					titlespeed          : 800
                });
			}
 /*ELASTIC SLIDER ENDS*/
 /*SCROLL TO ANCHOR (SERVCES)*/
 if ( jQuery().anchorScroll ) {
		$("#Blueprint").anchorScroll();
		$("#Web").anchorScroll();
		
		}
	/*SCROLL TO ANCHOR (SERVCES) ENDS*/
	
	
	/*NIVO SLIDER SLIDER STARTS */
	 if ( $( '#slider3' ).length && jQuery().nivoSlider ) {
	 $('#slider3').nivoSlider({
	 pauseTime:5000,
	 pauseOnHover:false
	 }); 
	 }
	/*NIVO SLIDER ENDS */
 
 
 
 
    if ( $( '#portfolio-details-slider' ).length && jQuery().cycle ) {
  $('#portfolio-details-slider').cycle({
		fx:     'fade', 
		prev:    '#prev',
        next:    '#next',
		 pause:   0, 
		timeout: 0, 		
		speedIn: 2500, 
		speedOut: 500 
	});
  
  }
 
if ( $( '#contact-form' ).length && jQuery() ) {
$('form#contact-form').submit(function() {
function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected');
}
$('form#contact-form .error').remove();
var hasError = false;
$('.requiredField').each(function() {
if(jQuery.trim($(this).val()) == '') {
 var labelText = $(this).prev('label').text();
 $(this).parent().append('<div class="error">Συμπληρώστε το πεδίο!</div>');
 $(this).addClass('inputError');
 hasError = true;
 } else if($(this).hasClass('email')) {
 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 if(!emailReg.test(jQuery.trim($(this).val()))) {
 var labelText = $(this).prev('label').text();
 $(this).parent().append('<div class="error">Λάθος εισαγωγή.</div>');
 $(this).addClass('inputError');
 hasError = true;
 }
 }
});
if(!hasError) {

var formInput = $(this).serialize();
var datastring = 'subject='+$('#subject').val()+'&message='+$('#message').val()+'&name='+$('#name').val()+'&email='+$('#email').val();
console.log(datastring);
$.ajax({  
  type: "POST",  
  url: "php/send.php",  
  data: datastring,  
  success: function(result) {
        console.log(result);
    $('form#contact-form input.submit').fadeOut('normal', function() {
		$(this).parent().append('');
		$('#contact-form').prepend('<div><span class="fancy-success">Το μήνυμα σας εστάλη!</span></div>');
		resetForm($('#contact-form'));
		$('.fancy-success').delay(5000).fadeOut(3000);
	});
  }  
}); 
}
return false;
});
}
 
 
 
 
 
  /*GOOGLE MAPS*/
  var $map = $('#map');
		if( $map.length ) {
			$map.gMap({
				
				address: 'Level 13, 2 Elizabeth St, Melbourne Victoria 3000 Australia',
				 
				zoom: 18,
				markers: [
					{ 'address' : 'Level 13, 2 Elizabeth St, Melbourne Victoria 3000 Australia' },
					 
				]
				
			});

		}
  /*GOOGLE MAPS ENDS*/
 
 
 
 
  if ( $( 'ul#filterable' ).length && jQuery() ) {
$('ul#filterable a').click(function() {
$(this).css('outline','none');
$('ul#filterable .current').removeClass('current');
$(this).parent().addClass('current');

return false;
});
}
 
if ( $( '.portfolio-container' ).length && jQuery() ) {
var 
speed = 700, 
$wall = $('#portfolio').find('.portfolio-container ul')
;
$wall.masonry({
singleMode: true,
itemSelector: '.one-fourth:not(.invis)',
animate: true,
animationOptions: {
duration: speed,
queue: false
}
});

$('#filterable a').click(function(){
var colorClass = '.' + $(this).attr('class');
if(colorClass=='.all') {
$wall.children('.invis')
.toggleClass('invis').fadeIn(speed);
} else { 
$wall.children().not(colorClass).not('.invis')
.toggleClass('invis').fadeOut(speed);
$wall.children(colorClass+'.invis')
.toggleClass('invis').fadeIn(speed);
}
$wall.masonry();
 return false;
});

}

 
 if ( $( '.portfolio-container' ).length && jQuery() ) {

var 
speed = 700, 
$wall = $('#portfolio').find('.portfolio-container ul')
;
$wall.masonry({
singleMode: true,
itemSelector: '.one-third:not(.invis)',
animate: true,
animationOptions: {
duration: speed,
queue: false
}
});
$('#filterable a').click(function(){
var colorClass = '.' + $(this).attr('class');
if(colorClass=='.all') {
$wall.children('.invis')
.toggleClass('invis').fadeIn(speed);
} else { 
$wall.children().not(colorClass).not('.invis')
.toggleClass('invis').fadeOut(speed);
$wall.children(colorClass+'.invis')
.toggleClass('invis').fadeIn(speed);
}
$wall.masonry();
 return false;
});
 
 
 }
 





 
   if (jQuery().tabify) {
 $('#menu').tabify()
            }

 
 $("#accordion-menu > li > div").click(function(){
	if(false == $(this).next().is(':visible')) {
		$('#accordion-menu ul').slideUp(300);
	}
	$(this).next().slideToggle(300);
});
	$('#accordion-menu ul:eq(0)').show();
 
 
  if ( $( '#slide-img' ).length && jQuery()) {
 	$('#slide-img').cycle({
	fx: 'fade'
});
 
 }
 if ( $( '#slide-img-n2' ).length && jQuery()) {
 	$('#slide-img-n2').cycle({
fx:    'scrollDown', 
    sync:   0, 
    delay: -2000,
	pause: 1,
	timeout: 8000
});
 
 }
 
 
 
 
   });
   



jQuery.noConflict()(function($){
	$(document).ready(function() {
$("#switcher-handle > #handle").toggle
	(
		function()
		{
			$('#switcher-handle').animate({left:'0px'}, {queue:false,duration:200});
			$('#switcher-handle > #handle').addClass('out');
		}
		,function()
		{
			$('#switcher-handle').animate({left:'-182px'}, {queue:false,duration:200});
			$('#switcher-handle > #handle').removeClass('out');
		}
	);
	
	
			});
			});
			
   });


function initialize() {
    var latlng = new google.maps.LatLng(35.336009, 25.138921);
    var myOptions = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
	var marker = new google.maps.Marker({
    position: latlng,
});
marker.setMap(map);
}


const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('backdrop');
const toggleBtn = document.getElementById('toggle-btn');
// const closeBtn = document.getElementById('close-btn');
function toggleDrawer() {
  drawer.classList.toggle('open');
  backdrop.classList.toggle('open');
}

toggleBtn.addEventListener('click', toggleDrawer);
// closeBtn.addEventListener('click', toggleDrawer);
backdrop.addEventListener('click', toggleDrawer);


const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    
	console.log("here")
    e.preventDefault(); 

    const parentLi = this.parentElement;
    const submenu = parentLi.querySelector('.dropdown');

    submenu.classList.toggle('active');
    parentLi.classList.toggle('open');
  });
});


const slider = document.querySelector('.swipe-slider');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');

nextBtn.addEventListener('click', () => {
	slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
	slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
});
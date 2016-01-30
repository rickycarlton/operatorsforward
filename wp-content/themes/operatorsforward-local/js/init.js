// *************************************
//
//   Init.js
//   -> This is the init script file
//
// *************************************

// -------------------------------------
//   Is Desktop Logic
//   -> Checks if we are in desktop of mobile view. Returns true or false.
// -------------------------------------

// $g_is_desktop = !$("[.menu-link]").is(":visible");
// $(window).resize(function() {
// 	$g_is_desktop = !$(".menu-link").is(":visible");
// });

// -------------------------------------
//   Matches Console Log Shorthand 
// -------------------------------------

function cl(clOption){
	if($.isArray(clOption)){
		$.each(clOption,function(k,v){
			console.log(v);
		});
	}else {
		console.log(clOption);
	}
}

$(document).ready(function() {

	var windowWidth = $(window).width();
	var $is_desktop = windowWidth > 799;

	// smartresize

	(function($,sr){
	 
	  // debouncing function from John Hann
	  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	  var debounce = function (func, threshold, execAsap) {
	      var timeout;
	 
	      return function debounced () {
	          var obj = this, args = arguments;
	          function delayed () {
	              if (!execAsap)
	                  func.apply(obj, args);
	              timeout = null; 
	          };
	 
	          if (timeout)
	              clearTimeout(timeout);
	          else if (execAsap)
	              func.apply(obj, args);
	 
	          timeout = setTimeout(delayed, threshold || 100); 
	      };
	  }
		// smartresize 
		jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
	 
	})(jQuery,'smartresize');

	// hamburger menu

	(function () {
		$('.hamburger-menu').on('click', function() {
			$('.bar').toggleClass('animate');
			$('.navBar__mobileNav').toggleClass('is-active');
		})
	})();

	// matchHeight plugin

	if($('.matchHeight').length > 0){
		$('.matchHeight').matchHeight('.matchHeight-parent');
	}

	//----------------------------------------------------------
    //  Nav Background
    //----------------------------------------------------------

	$(function() {
	    $("h1").waypoint(function() {
	        $(".navBar").toggleClass('bg-color');
	    }, {
	        offset: 100
	    })
	});

	$("#scrollTo--home").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#listings").offset().top
	    }, 800);
	});

    //----------------------------------------------------------
	// Lazy Load
	//----------------------------------------------------------

	$("img.lazy").show().lazyload({
		threshold : 200
	});

	$("[data-bg]").lazyload({
		threshold : 200,
		appear:function(){
			$bg = $(this).data('bg');
			if($bg)
				$(this).addClass($bg);
		}
	});

	// ----------------------------------------
	// Parent-link / Child-link
	// ----------------------------------------

	if($('.parent-link').length > 0){
		$('.parent-link').on('click', function(e){
			if(!$(e.target).hasClass('not-active')){
				if($(this).find('a.fancyboxform').length == 0 && !$(e.target).hasClass('fancyboxform')){
	                var hasContentModal = $(this).find('.modal-content-caller');
	                if(hasContentModal.length == 0) {
	                	if(e.target.nodeName.toLowerCase() != 'a'){
		                    $(this).find('a').trigger('click');
		                    window.location.href = $(this).find('a.child-link').attr('href');
		                }
	                } else {
	                	hasContentModal.trigger('click');
	                }
				} else {
					if(!$(e.target).hasClass('fancyboxform')){
						$(this).find('a').trigger('click');
					}
				}
			}
		});
	}

});
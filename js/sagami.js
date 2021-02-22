jQuery(function() {
	var $ = jQuery,
		$window = jQuery(window),
		$document = jQuery(document),
		docHeight = $document.innerHeight(),
		winWidth = $window.innerWidth(),
		winHeight = $window.innerHeight(),
		headerHeight = $("header").innerHeight(),
		tabgroupHeight = (winHeight - headerHeight),
		scrolled = jQuery(window).scrollTop(),
		$header = $("header");

	/**
	* --------------------------------------------------------------------------
	* EVENTS
	* --------------------------------------------------------------------------
	*/

	$window.on('resize', function(){
		updateOnResize();
	});

	$window.on('scroll', function(event){
		
	});

	$window.on('load', function(){
	});

	var updateOnResize = debounce(function() {
		updateValueOnResize();
		updateStyleOnResize();
	}, 250);

	function updateValueOnResize() {
		winWidth = $window.innerWidth();
		winHeight = $window.innerHeight();
		headerHeight = $("header").innerHeight();
		tabgroupHeight = (winHeight - headerHeight);
		//functions
		headerMobile();
		svgPlaceSize();
	}

	function updateStyleOnResize() {

	}

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	/**
	* --------------------------------------------------------------------------
	* FULLPAGE INITIALIZE
	* --------------------------------------------------------------------------
	*/
	var fp = $("#website");
	fp.fullpage({
		menu:'.tabs',
		// anchors:['home', 'features', 'products', 'about-us', 'contact-us'],
		lockAnchors:true,
		navigation: true,
		autoScrolling: true,
		slidesNavPosition: 'right',
		afterLoad: function(anchorLink, index) {
			$.fn.fullpage.setAllowScrolling(true);
			$("#website .section").css({'opacity':'1'});
		}
	});

	$(".tabs li a").click(function(){
		$.fn.fullpage.setAllowScrolling(false);
		$("#website .section").css('opacity','0');
		setTimeout(function(){
			$("#website .section.active").css({'opacity':'1'});
		},700)
	});

	/**
	* --------------------------------------------------------------------------
	* REMOVE BLOCK ON LOAD
	* --------------------------------------------------------------------------
	*/

	$(".block.block-block").remove();

	/**
	* --------------------------------------------------------------------------
	* HEADER RESPONSIVE
	* --------------------------------------------------------------------------
	*/

	function headerMobile() {
		if(winWidth <= 750) {
			$header.find(".burger").remove();
			$header.prepend("<div class='burger'><span></span></div>");
		} else {
			closeNavSp();
			$header.find(".burger").remove();
		}
	}

	function closeNavSp() {
		$('nav').removeClass('show');
		$(".burger").stop(true,true).removeClass("active");
	}

	function openNavSp() {
		$('nav').addClass('show');
		$(".burger").stop(true,true).addClass("active");
	}

	$("header").delegate('.burger', 'click',function(){
		btn = $('.burger');
		if(btn.hasClass('active')) {
			closeNavSp();
		} else {
			openNavSp();
		}
	});


	$('.tabs a').on('click', function() {
		closeNavSp();
	});

	/**
	* --------------------------------------------------------------------------
	* FULLPAGE INITIALIZE
	* --------------------------------------------------------------------------
	*/

	function aboutFullPage() {
		$('#fullpage-about-us').fullpage({
			navigation: true,
			navigationPosition: 'right',
			verticalCentered: false,
			normalScrollElements: '#home, #products, #features, #contact-us',
			afterLoad: function(anchorLink, index){
				var checkLines = $(".top-line").length;
				if(checkLines == 0){
					// needed to be inside setTimeout because vivus gives an error when lines are appended.
					setTimeout(function(){
						addLines();
					}, 10);
				} else {
					$(".top-line, .bot-line").remove();
					// needed to be inside setTimeout because vivus gives an error when lines are appended.
					setTimeout(function(){
						addLines();
					}, 10);
				}

				$('#fullpage-features svg').css('visibility', 'hidden');
				if ( $("#fullpage-about-us home-right-svg-1").find("svg").length ) {
					var svg = $("#fullpage-about-us home-right-svg-1").find("svg"),
						lho = svg.attr('id'),
						pathLength = svg.find("path")[0].getTotalLength(),
						animateNow = new Vivus(lho, {
						type: 'oneByOne',
						duration: 1000,
						onReady: function (vivusInstance) {
							vivusInstance.el.style.visibility = 'visible'
						}
					});
					animateNow.play();
				}
			}
		});
	}

	function featuresFullPage() {
		$('#fullpage-features').fullpage({
			navigation: true,
			navigationPosition: 'right',
			verticalCentered: false,
			normalScrollElements: '#home, #products, #about-us, #contact-us',
			afterLoad: function(anchorLink, index){
				var checkLines = $(".top-line").length;
				if(checkLines == 0){
					// needed to be inside setTimeout because vivus gives an error when lines are appended.
					setTimeout(function(){
						addLines();
					}, 10);
				} else {
					$(".top-line, .bot-line").remove();
					// needed to be inside setTimeout because vivus gives an error when lines are appended.
					setTimeout(function(){
						addLines();
					}, 10);
				}
				$('#fullpage-features svg').css('visibility', 'hidden');
				if ( $("#fullpage-features .fp-section:eq("+(index-1)+")").find("svg").length ) {
					var svg = $("#fullpage-features .fp-section:eq("+(index-1)+")").find("svg"),
						lho = svg.attr('id'),
						speed = svg.find("path")[0].getTotalLength() * 1.1,
						animateNow = new Vivus(lho, {
						type: 'oneByOne',
						duration: speed,
						onReady: function (vivusInstance) {
							vivusInstance.el.style.visibility = 'visible'
						}

					});
					animateNow.play();
				}
			}
		});
	}

	/**
	* --------------------------------------------------------------------------
	* PLACE WIDTH AND HEIGHT EVERY RESIZE OF SCREEN IN ALL SVG TAG
	* (this is for IE, if this is removed, al inline svg will be in small size)
	* --------------------------------------------------------------------------
	*/

	function svgPlaceSize() {
		$("svg").each(function(){
			var allSvgHeight = $(this).parent().height(),
				allSvgWidth = $(this).parent().width();

			var isIE = /*@cc_on!@*/false || !!document.documentMode;
			if(isIE == true){
				allSvgHeight = winWidth * 0.40;
				$(this).attr("width",allSvgWidth);
				$(this).attr("height",allSvgHeight);
				$(".preloader svg").attr("width",allSvgWidth)
				$(".preloader svg").attr("height",winWidth * 0.3)
			}
		});

	}

	/**
	* --------------------------------------------------------------------------
	* DRAW SVG
	* --------------------------------------------------------------------------
	*/
	$("svg").find('path').each(function(){
		var pathLen = $(this)[0].getTotalLength();
		$(this)[0].parentNode.setAttribute("class","thickThin");
	});

	/**
	* --------------------------------------------------------------------------
	* WRAP FIRST WORD IN THE FIRST TABPANE IN A SPAN
	* --------------------------------------------------------------------------
	*/

	var wrapFirstWord = function() {
		var node =	$("#home .text-area h1").contents().filter(function () { return this.nodeType == 3;}).first(),
			text = node.text(),
			first = text.slice(0, text.indexOf(" "));

		if (!node.length)
			return;
		node[0].nodeValue = text.slice(first.length);
		node.before('<span>' + first + '</span>');
	}();

	/**
	* --------------------------------------------------------------------------
	* PRELOADER
	* --------------------------------------------------------------------------
	*/

	;(function(){
		if( !document.getElementById("preloader")) {//if preloader is not detected, end.
			return;
		} else {
			var duration = document.images.length * 20;
			preloader = new Vivus("preloaderCircle", {type: 'oneByOne', duration: 1000});
			preloader.stop()

			function id(v){
				return document.getElementById(v);
			}

			// Scope variables
			var target = [$('#preloaderCircle #outer'), $('#preloaderCircle #inner')];

			for (var i = 0; i <= target.length - 1; i++) {
				target[i][0].style.opacity = 1;
				target[i][0].style.strokeDashoffset = target[i][0].getTotalLength();
			}

			//@param value(int) - Preloaded percentage value;
			var old_value = 0;
			function updateProgress(value) {
				if(value == old_value) return;
				old_value = value;
				preloader.setFrameProgress(value/100);
			}

			function loadbar() {
				var ovrl = id("preloader"), //the loading preloader in collective-piece.html
					 img = document.images, //return collection of images in current document
					 c = 0, //counter
					 tot = img.length; //total amount of images

				if(tot == 0) return doneLoading();

				function imgLoaded() {//when an image loads
					c += 1;//add 1 to counter
					// preloader.stop();
					var precInt = ((100/tot*c << 0));
					var perc = ((100/tot*c << 0)) +"%"; //left shit 0 to truncate the value. (no decimals)
					updateProgress(parseInt(precInt));
					if(c===tot) {
						setTimeout(function() {
							return doneLoading(); //if counter === total amount of images, callback doneLoading()
						}, 1200);
					}	
				}
				function doneLoading(){
					afterLoad();
					ovrl.style.opacity = 0; //set ovrl opactiy to 0
					setTimeout(function() {
						ovrl.style.display = "none"; //display none it after 1.2s
					}, 500)
				}
				for(var i=0; i<tot; i++) {
					var tImg		 = new Image(); //for every new image.
					tImg.onload	= imgLoaded; //when image onload calls imgLoaded
					tImg.onerror = imgLoaded; //when image onerror when loading an image
					tImg.src		 = img[i].src;
				}
			}

			document.addEventListener('DOMContentLoaded', loadbar(), false);//The DOMContentLoaded event triggers on document when the page is ready. It waits for the full HTML and scripts, and then triggers.
		}
	}());

	/**
	* --------------------------------------------------------------------------
	* NEW TAB SNS
	* --------------------------------------------------------------------------
	*/

	$(".sns ul li a").attr("target","_blank");

	/**
	* --------------------------------------------------------------------------
	* FLOWER PRELOADER
	* --------------------------------------------------------------------------
	*/
	
	// var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
	var flower1 = new Vivus ("preloaderFlower1", {
		type: 'delayed',
		duration: 250,
		animTimingFunction: Vivus.EASE,
		pathTimingFunction: Vivus.EASE,
		onReady: function (vivusInstance) {
			vivusInstance.el.style.visibility = 'visible'
		}
	}),
	flower2 = new Vivus ("preloaderFlower2", {
		type: 'delayed',
		duration: 250,
		animTimingFunction: Vivus.EASE,
		pathTimingFunction: Vivus.EASE,
		onReady: function (vivusInstance) {
			vivusInstance.el.style.visibility = 'visible'
		}
	});

	/**
	* --------------------------------------------------------------------------
	* ADD ID FOR EACH SVG TO BE ANIMATED
	* --------------------------------------------------------------------------
	*/

	$("#website .section").each(function() {
		var _this = $(this),
			id = _this.attr('id'),
			svg_id = id + '-right-svg-',
			i = 0;
			_this.find('.right-svg svg').each(function() {
				i++;
				$(this).attr('id', svg_id+i);
			})
	});

	/**
	* --------------------------------------------------------------------------
	* FOR HOMEPAGE ANIMATING AFTER LOADING THE ENTIRE PAGE
	* --------------------------------------------------------------------------
	*/
	var animateHome = 0;
	function afterLoad() {
		setTimeout(function(){
			animateHome = new Vivus('home-right-svg-1', {
				type: 'oneByOne',
				duration: 3000,
				onReady: function (vivusInstance) {
					vivusInstance.el.style.visibility = 'visible'
				}
			});
			animateHome.play();
		}, 1000);
	}

	/**
	* --------------------------------------------------------------------------
	* RESET ANIMATION ON HOMEPAGE
	* --------------------------------------------------------------------------
	*/

	function resetAnimation() {
		animateHome.reset();
		animateHome.setFrameProgress(0);
		animateHome.play();
	}

	/**
	* --------------------------------------------------------------------------
	* ONLOAD FUNCTIONS
	* --------------------------------------------------------------------------
	*/
	svgPlaceSize();
	headerMobile();
	// featuresFullPage();
});
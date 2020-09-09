$(document).ready(function () {
	if($('.datepicker').length > 0) datepickerControl();

	// checkbox all 
	if($('.chkall').length > 0) {
		$('.chkall label').click(function() {
			if($('.chkall input:checkbox').is(':checked')) {
        $('.chkwrap:not(.chkall) input:checkbox').prop('checked', false)
			}else{
				$('.chkwrap:not(.chkall) input:checkbox').prop('checked', true)
			}
		});

		var chkleng = $('.chkwrap:not(.chkall)').length;
		$('.chkwrap:not(.chkall) input:checkbox').click(function() {
			if($('.chkwrap:not(.chkall) input:checkbox:checked').length == chkleng){
				$('.chkall input:checkbox').prop('checked', true)
			}else {
				$('.chkall input:checkbox').prop('checked', false)
			}
		});
	}

});

////// common menu open/close
var globalMenu = function() {
	if(!$('.gnb_menu').hasClass('open')){
		$('.gnb_menu').addClass('open');
		$('body').addClass('noscroll');
	}
}
var globalMenuClose = function() {
	if($('.gnb_menu').hasClass('open')){
		$('.gnb_menu').removeClass('open');
		$('body').removeClass('noscroll');
	}
}
////// global common 
var lastSt = 0;
$(window).scroll(function (e) {
	var st = $(this).scrollTop();
	winH = $(window).height();
	docH = $(document).height();

	if (st > 0) {
		$('.subhead').addClass('fixed')
	} else {
		$('.subhead').removeClass('fixed')
	}
	if ($('.fixed_menu').length > 0) {
		if (st > lastSt) {
			$('.fixed_menu').removeClass('show').addClass('hide')
		} else {
			$('.fixed_menu').removeClass('hide').addClass('show')
		}
		if ($('.btn_sticky, .btn_wrap._fixed:not(.layer_foo)').length > 0) {
			if (st > lastSt) {
				$('.btn_sticky, .btn_wrap._fixed:not(.layer_foo)').removeClass('up')
			} else {
				$('.btn_sticky, .btn_wrap._fixed:not(.layer_foo)').addClass('up')
			}
		}
	}
	lastSt = st;
});

// accordion fn
$('.accord_wrap').each(function () { // default
	if (!$(this).hasClass('manualfn')) {
		if ($(this).hasClass('multiple')) {
			defaultAcc = new Accordion($(this), {
				allowMultiple: true,
			});
		} else {
			defaultAcc = new Accordion($(this), {
				allowMultiple: false,
			});
		}
	}
});
function accoSet(setId, multiTF, setFocus) {
	if (!setId) {
		setId = '.accord_wrap';
	} else {
		var setId = $('#' + setId);
	}
	if (!multiTF) multiTF = false;
	if (!setFocus) setFocus = 'acco_panel';

	defaultAcc = new Accordion(setId, {
		allowMultiple: multiTF,
		setFocus: setFocus
	});
}
// tab control
$('ul.tablist li button').click(function(){
	var tab_id = $(this).attr('data-tab');
	
	$('ul.tablist button').removeClass('current');
	$(this).parents('.tab_wrap').find('.tab-cont').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
});
// family site
function goFamilySite(select) {
	if (select.value != 'none') {
		window.open(select.value);
		select.value = 'none';
	} else {
		return;
	}
}

////// ui function
var searchlayer = function () {
	var schlayer = $('.search_layer');
	if (schlayer.length > 0) {
		if (!schlayer.hasClass('active')) {
			schlayer.addClass('active');
			$('body').addClass('noscroll');
		} else {
			schlayer.removeClass('active');
			$('body').removeClass('noscroll');
		}
	}
}

var fltayer = $('.filter_layer');
var filterShow = function () {
	if (fltayer.length > 0) {
		if (!fltayer.hasClass('active')) {
			fltayer.addClass('active');
			$('body').addClass('noscroll');
		} else {
			fltayer.removeClass('active');
			$('body').removeClass('noscroll');
		}
	}
}
var filterClose = function () {
	fltayer.removeClass('active');
	$('body').removeClass('noscroll');
}
var inquiryDoor = function () {
	if(!$('.cust_inquiry').hasClass('open')) {
		if($('.cust_inquiry').hasClass('hidd')) {
			$('.cust_inquiry').removeClass('hidd');
		}
		$('body').addClass('noscroll');
		$('.cust_inquiry').addClass('open');
	} else {
		$('body').removeClass('noscroll');
		$('.cust_inquiry').removeClass('open');
		if($(window).scrollTop() > 100) {
			$('.cust_inquiry').addClass('hidd');
		}
	}
}
$(window).scroll(function (e) {
	var st = $(this).scrollTop();
	docH = $(window).height();

	if (st > 100) {
		$('.cust_inquiry').addClass('hidd');
	}
	if (st < 100) {
		$('.cust_inquiry').removeClass('hidd');
	}

	if (st > 0) {
		$('.header').addClass('fixed');
	}else{
		$('.header').removeClass('fixed');
	}
	lastSt = st;
});
$('.headgnb .menu:not(".submenu")').find('>li').each(function(i, e) {
	$(this).on('mouseover mouseenter focus', function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$('.subgnb').addClass('show');

		var gnbNum = $(this).index() + 1;
		$('.submenu').removeClass('show');
		$('.submenu').each(function(e) {
			var subNum = $(this).attr('data-sub');
			if(subNum == gnbNum){
				$(this).addClass('show')
			}
		});
	});
	$('.header .row').mouseleave(function(){
		$(this).removeClass('active');
		$('.headgnb .menu li').removeClass('active');
		$('.subgnb').removeClass('show');
	});
	$('.headgnb .etc').mouseover(function(){
		$(this).removeClass('active');
		$('.headgnb .menu li').removeClass('active');
		$('.subgnb').removeClass('show');
	});

});

////// sub
// login
// var changePw = $('.member .btn_confirm');
// var pwBox = $('.member .pw');
// changePw.on('click', function () {
// 	pwBox.slideDown();
// });

// // rental
// var rentType = $('.rent_write .rent_type');
// var rentTypesel = function (type) {
// 	var $type = $(type).attr('data-type');
// 	var $this = $(type);
// 	if(!$this.hasClass('active')) {
// 		$('.btn_rent').removeClass('active')
// 		$this.addClass('active')
// 	}
// 	rentType.each(function(){ 
// 		if($(this).hasClass($type)) {
// 			$(this).addClass('active')
// 		}else {
// 			$(this).removeClass('active')
// 		}
// 	});
// }
/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */


(function($){

	//Cache Dom
	// var $nav = $('#site-navigation');
	// var $mobile_menubar = $nav.find('.mobile-menubar');
	// var $mobile_btn_open = $mobile_menubar.find('.mobile-btn-open');
	// var $mobile_content = $nav.find('.mobile-content');
	// var $mobile_btn_close = $mobile_content.find('.mobile-btn-close');
	// var $mobile_blackscreen = $nav.find('#nav-blackscreen');
	// var $has_children = $nav.find( '.menu-item-has-children > a, .page_item_has_children > a' );

	//Cache DOM
	var $nav = $('#main-nav');
	var $mobile_main = $("#mobile-main");
	var $mobile_open = $("#mobile-open");
	var $mobile_close = $("#mobile-close");
	var $desktop_menu = $("#desktop-menu");
	var $dark_overlay = $("#dark-overlay");
	var $has_children = $nav.find( '.menu-item-has-children > a, .page_item_has_children > a' );



	//Init
	addSubMenu();

	//Cache new button
	var $dropdown_btn = $has_children.next('.dropdown-toggle');

	//Bind Events
	$mobile_open.on('click', openMenu);
	$mobile_close.on('click', closeMenu);
	$dark_overlay.on('click', closeMenu);
	$dropdown_btn.on('click', dropdownToggle);


	function openMenu(){
		if(!$mobile_main.hasClass('active')){
			$mobile_main.addClass('active');
			$dark_overlay.fadeIn(300);
		}
	}

	function closeMenu(){
		if($mobile_main.hasClass('active')){
			$mobile_main.removeClass('active');
			$dark_overlay.fadeOut(300);
		}
	}

	function addSubMenu(){
		$has_children.after( '<button class="dropdown-toggle" aria-expanded="false"></button>' );
	}

	function dropdownToggle(){
		$dropdown_btn.next('.sub-menu').fadeToggle(300);
	}


})(jQuery);

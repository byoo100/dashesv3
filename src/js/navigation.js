/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */


(function($){

	//Cache Dom
	var $nav = $('#site-navigation');
	var $mobile_menubar = $nav.find('.mobile-menubar');
	var $mobile_btn_open = $mobile_menubar.find('.mobile-btn-open');
	var $mobile_content = $nav.find('.mobile-content');
	var $mobile_btn_close = $mobile_content.find('.mobile-btn-close');
	var $mobile_blackscreen = $nav.find('#nav-blackscreen');
	var $has_children = $nav.find( '.menu-item-has-children > a, .page_item_has_children > a' );

	//Init
	addSubMenu();

	//Cache new button
	var $dropdown_btn = $has_children.next('.dropdown-toggle');

	//Bind Events
	$mobile_btn_open.on('click', openMenu);
	$mobile_btn_close.on('click', closeMenu);
	$mobile_blackscreen.on('click', closeMenu);
	$dropdown_btn.on('click', dropdownToggle);

	
	function openMenu(){
		if(!$mobile_content.hasClass('out')){
			$mobile_content.addClass('out');
			$mobile_blackscreen.show();
		}
	}

	function closeMenu(){
		if($mobile_content.hasClass('out')){
			$mobile_content.removeClass('out');
			$mobile_blackscreen.hide();
		}
	}

	function addSubMenu(){
		$has_children.after( '<button class="dropdown-toggle" aria-expanded="false"></button>' );
	}

	function dropdownToggle(){
		$dropdown_btn.next('.sub-menu').slideToggle(300);
	}
	

})(jQuery);


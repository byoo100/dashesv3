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
	var $mobile_menubar_btn = $mobile_menubar.find('.mobile-btn-open');
	var $mobile_menulist = $nav.find('.mobile-menulist');
	var $mobile_menulist_btn = $mobile_menulist.find('.mobile-btn-close');
	var $mobile_blackscreen = $nav.find('#nav-blackscreen');
	var $desktop_menubar = $nav.find('.desktop-menubar');

	//Bind Events
	$mobile_menubar_btn.on('click', openMenu);
	$mobile_menulist_btn.on('click', closeMenu);
	$mobile_blackscreen.on('click', closeMenu);

	function openMenu(){
		if(!$mobile_menulist.hasClass('out')){
			$mobile_menulist.addClass('out');
			$mobile_blackscreen.show();
		}
	}

	function closeMenu(){
		if($mobile_menulist.hasClass('out')){
			$mobile_menulist.removeClass('out');
			$mobile_blackscreen.hide();
		}
	}

})(jQuery);


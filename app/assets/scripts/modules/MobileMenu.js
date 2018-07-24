import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.menuIcon = $(".site-header__menu-icon");
		this.closeIcon = $(".site-header__menu-icon__close");
		this.menuContent = $(".site-header__menu");
		// map the events for this object
		this.events();
	}

	events() {
		// map the click event to the toggleTheMenu method
		// Need to use the "bind" method to be able to access the "menuContent" element inside the
		// toggleTheMenu method
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	// Toggle between visible and invisible for the menu content, expanded/contracted,
	// and the close X menu-icon (on/off)
	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu--active");
		this.closeIcon.toggleClass("site-header__menu-icon__close--active");
		this.menuIcon.toggleClass("site-header__menu-icon--deactive");
	}

}

export default MobileMenu;
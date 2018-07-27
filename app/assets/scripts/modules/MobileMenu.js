import $ from 'jquery';

class MobileMenu {
	constructor() {
		// This caused me several hours of grief!!!
		// Cannot call the constructor until the PAGE is ready - not just the DOM
		// Needed to do this because I am loading the <header> section through a jQuery "load" and
		// inside the <header> is elements that are referred to in the constructor
		// Without waiting for the entire page to load - it does not work. (I believe it is bc it
		// cannot find the elements to bind to)
		$(window).on("load resize", this.constructor_setup.bind(this));
	}

	constructor_setup() {
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
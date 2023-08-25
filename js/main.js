// navbar
window.onscroll = function () {
	var navbar = document.querySelector(".navbar");
	if (window.scrollY > 10) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
};

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navLinks.forEach((navLink) => navLink.classList.remove("active"));
		link.classList.add("active");
	});
});

// Gallery filter
document.addEventListener("DOMContentLoaded", function () {
	let filterButtons = document.querySelectorAll(".filter-button");
	let galleryItems = document.querySelectorAll(".gallery-item");

	filterButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			filterButtons.forEach(function (btn) {
				btn.classList.remove("active");
			});
			this.classList.add("active");

			let filter = this.getAttribute("data-filter");
			galleryItems.forEach(function (item) {
				if (filter === "all" || item.classList.contains(filter)) {
					item.style.display = "block";
				} else {
					item.style.display = "none";
				}
			});
		});
	});

	// Menampilkan semua foto sebagai filter pertama
	galleryItems.forEach(function (item) {
		item.style.display = "block";
	});
});

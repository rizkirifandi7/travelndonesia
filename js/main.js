// navbar
window.onscroll = function () {
	var navbar = document.querySelector(".navbar");
	if (window.scrollY > 10) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
};

const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
	let current = "";
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (pageYOffset >= sectionTop - sectionHeight / 3) {
			current = section.getAttribute("id");
		}
	});

	navbarLinks.forEach((link) => {
		link.classList.remove("active");
		if (link.getAttribute("href") === `#${current}`) {
			link.classList.add("active");
		}
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

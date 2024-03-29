const burger = document.querySelector(".burger");
const burgerIcon = document.querySelector(".burgerIcon");
const xIcon = document.querySelector(".xIcon");
const navAside = document.querySelector(".nav-aside");
const buttons = document.querySelectorAll("a.btn");

burger.addEventListener("click", function () {
	burgerIcon.classList.toggle("show");
	xIcon.classList.toggle("show");
	navAside.classList.toggle("active");
});

buttons.forEach((button) => {
	button.addEventListener("click", function () {
		burgerIcon.classList.toggle("show");
		xIcon.classList.toggle("show");
		navAside.classList.toggle("active");
	});
});
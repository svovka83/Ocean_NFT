// swiper code

const cardGroupSwiper1 = document.getElementById("card-group-1");
const swiperWraper1 = document.getElementById("swiper-wrapper-1");
const cardUser1 = document.getElementById("user-card-1");
const cardUser2 = document.getElementById("user-card-2");
const cardUser3 = document.getElementById("user-card-3");

const cardGroupSwiper2 = document.getElementById("card-group-2");
const swiperWraper2 = document.getElementById("swiper-wrapper-2");
const cardUser4 = document.getElementById("user-card-4");
const cardUser5 = document.getElementById("user-card-5");
const cardUser6 = document.getElementById("user-card-6");

const width = window.innerWidth;

console.log(width);
// here should be 375px of viewport insted of 610px - this is only for mobile view demonstration on desktop !!!
if (width <= 610) {
	swiperWraper1.classList.remove("card-group-0");
	cardGroupSwiper1.classList.add("card-group-0");

	cardGroupSwiper1.classList.add("swiper");
	swiperWraper1.classList.add("swiper-wrapper");
	cardUser1.classList.add("swiper-slide");
	cardUser2.classList.add("swiper-slide");
	cardUser3.classList.add("swiper-slide");
	cardUser1.classList.add("swiper__padding");
	cardUser2.classList.add("swiper__padding");
	cardUser3.classList.add("swiper__padding");

	swiperWraper2.classList.remove("card-group");
	cardGroupSwiper2.classList.add("card-group");

	cardGroupSwiper2.classList.add("swiper");
	swiperWraper2.classList.add("swiper-wrapper");
	cardUser4.classList.add("swiper-slide");
	cardUser5.classList.add("swiper-slide");
	cardUser6.classList.add("swiper-slide");
	cardUser4.classList.add("swiper__padding");
	cardUser5.classList.add("swiper__padding");
	cardUser6.classList.add("swiper__padding");

	new Swiper(".card-group-0", {
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next-1",
		},
	});

	new Swiper(".card-group", {
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next-2",
		},
	});
}

// show burger menu

const btnMenu = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");
const icons = document.querySelector(".header__icons");

btnMenu.addEventListener("click", () => {
	menu.classList.toggle("menu-active");
	icons.classList.toggle("icons-active");
});

// show top users

let showUsers = true;

const btnExplore = document.querySelector(".top-sellers__explore-all");
const user = document.querySelectorAll(".top-sellers__item.show-user");

btnExplore.addEventListener("click", () => {
	user.forEach((el) => {
		el.classList.toggle("user-active");
	});

	showUsers = !showUsers;

	if (showUsers) {
		btnExplore.textContent = "Explore All";
	} else {
		btnExplore.textContent = "Hide All";
	}
});

// footer dropitems - p.s. needs to use some loop!

const kindOfBtn1 = document.querySelector(".footer-list.list-group__item:nth-child(1)>h3");
const dropDownList1 = document.querySelector(".footer-list.list-group__item:nth-child(1)>.footer-list__items");
const dropDownIcon1 = document.querySelector(".list-group__item:nth-child(1)");

kindOfBtn1.addEventListener("click", () => {
	if (width <= 610) {
		if (dropDownList1.style.display === "none") {
			dropDownList1.style.display = "block";
			dropDownIcon1.classList.add("arrow-up");
		} else {
			dropDownList1.style.display = "none";
			dropDownIcon1.classList.remove("arrow-up");
		}
	}
});

const kindOfBtn2 = document.querySelector(".footer-list.list-group__item:nth-child(2)>h3");
const dropDownList2 = document.querySelector(".footer-list.list-group__item:nth-child(2)>.footer-list__items");
const dropDownIcon2 = document.querySelector(".list-group__item:nth-child(2)");

kindOfBtn2.addEventListener("click", () => {
	if (width <= 610) {
		if (dropDownList2.style.display === "none") {
			dropDownList2.style.display = "block";
			dropDownIcon2.classList.add("arrow-up");
		} else {
			dropDownList2.style.display = "none";
			dropDownIcon2.classList.remove("arrow-up");
		}
	}
});

const kindOfBtn3 = document.querySelector(".footer-list.list-group__item:nth-child(3)>h3");
const dropDownList3 = document.querySelector(".footer-list.list-group__item:nth-child(3)>.footer-list__items");
const dropDownIcon3 = document.querySelector(".list-group__item:nth-child(3)");

kindOfBtn3.addEventListener("click", () => {
	if (width <= 610) {
		if (dropDownList3.style.display === "none") {
			dropDownList3.style.display = "block";
			dropDownIcon3.classList.add("arrow-up");
		} else {
			dropDownList3.style.display = "none";
			dropDownIcon3.classList.remove("arrow-up");
		}
	}
});
const kindOfBtn4 = document.querySelector(".footer-list.list-group__item:nth-child(4)>h3");
const dropDownList4 = document.querySelector(".footer-list.list-group__item:nth-child(4)>.footer-list__items");
const dropDownIcon4 = document.querySelector(".list-group__item:nth-child(4)");

kindOfBtn4.addEventListener("click", () => {
	if (width <= 610) {
		if (dropDownList4.style.display === "none") {
			dropDownList4.style.display = "block";
			dropDownIcon4.classList.add("arrow-up");
		} else {
			dropDownList4.style.display = "none";
			dropDownIcon4.classList.remove("arrow-up");
		}
	}
});
const kindOfBtn5 = document.querySelector(".footer-list.list-group__item:nth-child(5)>h3");
const dropDownList5 = document.querySelector(".footer-list.list-group__item:nth-child(5)>.footer-list__items");
const dropDownIcon5 = document.querySelector(".list-group__item:nth-child(5)");

kindOfBtn5.addEventListener("click", () => {
	if (width <= 610) {
		if (dropDownList5.style.display === "none") {
			dropDownList5.style.display = "block";
			dropDownIcon5.classList.add("arrow-up");
		} else {
			dropDownList5.style.display = "none";
			dropDownIcon5.classList.remove("arrow-up");
		}
	}
});

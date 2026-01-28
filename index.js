const width = window.innerWidth;

// swiper code
let amountSlides;
let space;

if (width > 1440) {
	amountSlides = 3;
	space = 35;
} else if (width <= 1440 && width > 1024) {
	amountSlides = 2;
	space = 74;
} else if (width <= 1024 && width > 768) {
	amountSlides = 2;
	space = 38;
} else if (width <= 768 && width > 375) {
	amountSlides = 1;
	space = 25;
} else if (width <= 375) {
	amountSlides = 1;
	space = 15;
}

console.log(width, amountSlides);

new Swiper(".card-group-0", {
	loop: true,
	slidesPerView: amountSlides,
	spaceBetween: space,
	touchRatio: 1.5,
	grabCursor: true,

	navigation: {
		nextEl: ".swiper-button-desc-1",
	},
});

new Swiper(".card-group", {
	loop: true,
	slidesPerView: amountSlides,
	spaceBetween: space,
	touchRatio: 1.5,
	grabCursor: true,

	navigation: {
		nextEl: ".swiper-button-desc-2",
	},
});

const moveCartBtn1 = document.querySelector(".title-group__button.button-1");
const moveCartBtn1_mob = document.querySelector(".swiper-button-next-1.user-card__button");
const refBtn1 = document.querySelector(".swiper-button-desc-1");

moveCartBtn1.addEventListener("click", () => {
	refBtn1.click();
});
moveCartBtn1_mob.addEventListener("click", () => {
	refBtn1.click();
});

const moveCartBtn2 = document.querySelector(".title-group__button.button-2");
const moveCartBtn2_mob = document.querySelector(".swiper-button-next-2.user-card__button");
const refBtn2 = document.querySelector(".swiper-button-desc-2");

moveCartBtn2.addEventListener("click", () => {
	refBtn2.click();
});
moveCartBtn2_mob.addEventListener("click", () => {
	refBtn2.click();
});

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
		btnExplore.textContent = "Explore";
	} else {
		btnExplore.textContent = "Hide";
	}
});

// footer dropitems - p.s. needs to use some loop!

const kindOfBtn1 = document.querySelector(".footer-list.list-group__item:nth-child(1)>h3");
const dropDownList1 = document.querySelector(".footer-list.list-group__item:nth-child(1)>.footer-list__items");
const dropDownIcon1 = document.querySelector(".list-group__item:nth-child(1)");

kindOfBtn1.addEventListener("click", () => {
	if (width <= 375) {
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
	if (width <= 375) {
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
	if (width <= 375) {
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
	if (width <= 375) {
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
	if (width <= 375) {
		if (dropDownList5.style.display === "none") {
			dropDownList5.style.display = "block";
			dropDownIcon5.classList.add("arrow-up");
		} else {
			dropDownList5.style.display = "none";
			dropDownIcon5.classList.remove("arrow-up");
		}
	}
});

// activing explore collections' buttons

const body = document.body;
const exploreBtn1 = document.querySelector(".collection-list__item:nth-child(1)>a");
const exploreBtn2 = document.querySelector(".collection-list__item:nth-child(2)>a");
const exploreBtn3 = document.querySelector(".collection-list__item:nth-child(3)>a");
const exploreBtn4 = document.querySelector(".collection-list__item:nth-child(4)>a");
const exploreBtn5 = document.querySelector(".collection-list__item:nth-child(5)>a");
const exploreBtn6 = document.querySelector(".collection-list__item:nth-child(6)>a");
const exploreBtn7 = document.querySelector(".collection-list__item:nth-child(7)>a");
const exploreBtn8 = document.querySelector(".collection-list__item:nth-child(8)>a");

const exploreButtons = new Array(
	exploreBtn1,
	exploreBtn2,
	exploreBtn3,
	exploreBtn4,
	exploreBtn5,
	exploreBtn6,
	exploreBtn7,
	exploreBtn8
);

console.log(exploreButtons.length);

exploreBtn1.addEventListener("click", () => {
	exploreButtons.forEach((el) => {
		el.classList.remove("collection-list__link--active");
	});
	exploreBtn1.classList.add("collection-list__link--active");
});
exploreBtn2.addEventListener("click", () => {
	exploreButtons.forEach((el) => {
		el.classList.remove("collection-list__link--active");
	});
	exploreBtn2.classList.add("collection-list__link--active");
});
exploreBtn3.addEventListener("click", () => {
	exploreButtons.forEach((el) => {
		el.classList.remove("collection-list__link--active");
	});
	exploreBtn3.classList.add("collection-list__link--active");
});
exploreBtn4.addEventListener("click", () => {
	exploreButtons.forEach((el) => {
		el.classList.remove("collection-list__link--active");
	});
	exploreBtn4.classList.add("collection-list__link--active");
});
exploreBtn5.addEventListener("click", () => {
	exploreButtons.forEach((el) => {
		el.classList.remove("collection-list__link--active");
	});
	exploreBtn5.classList.add("collection-list__link--active");
});
exploreBtn6.addEventListener("click", () => {
	exploreButtons.forEach((el) => {
		el.classList.remove("collection-list__link--active");
	});
	exploreBtn6.classList.add("collection-list__link--active");
});
exploreBtn7.addEventListener("click", () => {
	exploreButtons.forEach((el) => {
		el.classList.remove("collection-list__link--active");
	});
	exploreBtn7.classList.add("collection-list__link--active");
});
exploreBtn8.addEventListener("click", () => {
	exploreButtons.forEach((el) => {
		el.classList.remove("collection-list__link--active");
	});
	exploreBtn8.classList.add("collection-list__link--active");
});

// top sellers button

const topSellersBtn = document.querySelector(".top-sellers__explore-all.user-card__button");

if (width > 375) {
	topSellersBtn.classList.add("gradient-link");
}

// Happy Christmas colorful background blur circles implementation

function positionAmazingCircle(startTopPositionCircle, startleftPositionCircle, blurClass) {
	let correntTopIncrement = 0;
	let correntLeftIncrement = 0;

	for (let i = 0; i < 9; i++) {
		const circle = document.createElement("span");
		circle.classList.add(blurClass);

		const correntTopIndent = startTopPositionCircle + correntTopIncrement;
		if (correntTopIndent > 85) {
			startTopPositionCircle = 5;
			correntTopIncrement = -10;
		}

		const correntLeftIndent = startleftPositionCircle + correntLeftIncrement;
		if (correntLeftIndent > 78) {
			startleftPositionCircle = 5;
			correntLeftIncrement = -10;
		}

		circle.style.top = `${correntTopIndent}%`;
		circle.style.left = `${correntLeftIndent}%`;

		document.body.appendChild(circle);

		correntTopIncrement += 14;
		correntLeftIncrement += 14;
	}
}

positionAmazingCircle(1, 5, "blur-circle-pink");
positionAmazingCircle(6, 15, "blur-circle-pink");
positionAmazingCircle(2, 25, "blur-circle-rose");
positionAmazingCircle(7, 35, "blur-circle-pink");
positionAmazingCircle(3, 45, "blur-circle-pink");
positionAmazingCircle(8, 55, "blur-circle-blue");
positionAmazingCircle(4, 65, "blur-circle-pink");
positionAmazingCircle(9, 75, "blur-circle-rose");
positionAmazingCircle(5, 85, "blur-circle-pink");
positionAmazingCircle(0, 95, "blur-circle-pink");

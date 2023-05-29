const burger = document.getElementById("burger");
const mobMenu = document.getElementById("mobMenu");
burger.addEventListener("click", () => {
  if (burger.classList.length > 1) {
    burger.classList.remove("open");
    mobMenu.classList.remove("open");
    /*  mobMenu.style.display = "none"; */
  } else {
    burger.classList.add("open");
    /*  mobMenu.style.display = "block"; */
    mobMenu.classList.add("open");
  }
});

function startApp() {
  initEvents();
}

function initEvents() {
  document.addEventListener("keyup", keyup);
  document.addEventListener("wheel", wheel);

  document.addEventListener("touchstart", touchstart);
  document.addEventListener("touchend", touchend);

  const nav = document.querySelector(".navigation");
  nav.addEventListener("click", navClick);
}

const nextSlideDebaunces = debaunce(nextSlide, 2000);
const previousSlideDebaunces = debaunce(previousSlide, 2000);
const isActive = "isActive";
const hideDown = "hideDown";
const hideUp = "hideUp";
const slide = "content-item";

function navClick(event) {
  const clickedSpan = event.target;
  const parentOfSpan = clickedSpan.parentNode;

  const parentList = parentOfSpan;
  const children = Array.from(parentList.children);
  const indexOfChildren = children.indexOf(event.target);

  const currentSlideInfo = getCurrentSlideInfo();
  showSlideByIndex(currentSlideInfo.indexOfActive, indexOfChildren);
}

function updateNavigation(newIndex) {
  const nav = document.querySelector(".navigation");
  const oldActive = nav.querySelector("." + isActive);
  oldActive.classList.remove(isActive);
  const navItems = nav.querySelectorAll("li");
  navItems[newIndex].classList.add(isActive);
  if (newIndex == 3 || newIndex == 5 || newIndex == 6 || newIndex == 7) {
    nav.classList.add("black");
  } else {
    nav.classList.remove("black");
  }
}

function showSlideByIndex(currentIndex, newIndex) {
  const allSlides = document.querySelectorAll("." + slide);
  if (newIndex !== currentIndex) {
    changeClassesForAnimation(allSlides, currentIndex, newIndex);
  }
}

function nextSlide() {
  showNewSlide(true);
}

function previousSlide() {
  showNewSlide(false);
}

function keyup(event) {
  const downKeyCode = 40;
  const upKeyCode = 38;

  switch (event.keyCode) {
    case downKeyCode:
      nextSlide();
      break;
    case upKeyCode:
      previousSlide();
      break;
  }
}

function wheel(event) {
  const delta = event.wheelDelta;
  if (delta < 0) {
    nextSlideDebaunces();
  } else {
    previousSlideDebaunces();
  }
}

function debaunce(f, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => (isCooldown = false), ms);
  };
}

let yStart;
function touchstart(event) {
  yStart = event.touches[0].clientY;
}

function touchend(event) {
  if (event.changedTouches[0].clientY > yStart) {
    previousSlide();
  } else {
    nextSlide();
  }
}

function showNewSlide(isNext) {
  const slidesInfo = getCurrentSlideInfo();

  if (slidesInfo.indexOfActive == -1) {
    return;
  }
  if (isNext) {
    if (slidesInfo.indexOfActive < slidesInfo.count - 1) {
      showSlideByIndex(slidesInfo.indexOfActive, slidesInfo.indexOfActive + 1);
    }
  } else {
    if (slidesInfo.indexOfActive > 0) {
      showSlideByIndex(slidesInfo.indexOfActive, slidesInfo.indexOfActive - 1);
    }
  }
}

function getCurrentSlideInfo() {
  const allSlides = document.querySelectorAll("." + slide);
  const count = allSlides.length;
  let indexOfActive = -1;
  allSlides.forEach((slide, index) => {
    if (slide.classList.contains(isActive)) {
      indexOfActive = index;
    }
  });
  return { indexOfActive, count };
}

function addClassAndRemoveAfterTimeout(element, className) {
  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
  }, 500);
}

function changeClassesForAnimation(elements, index, newIndex) {
  elements[index].classList.remove(isActive);
  const classNameToLeaveAnimation = index > newIndex ? hideUp : hideDown;
  addClassAndRemoveAfterTimeout(elements[index], classNameToLeaveAnimation);
  addClassAndRemoveAfterTimeout(
    elements[newIndex],
    index > newIndex ? "up" : "down"
  );
  elements[newIndex].classList.add(isActive);
  updateNavigation(newIndex);
}
startApp();
const tabs = document.querySelectorAll(".change");
const tabsContent = document.querySelectorAll(".second-item__content");
let oldActive, oldActiveview;

tabs?.forEach((element, index) => {
  if (element.classList.contains("active")) {
    oldActive = element;
    oldActiveview = tabsContent[index];
  }
  element.addEventListener("click", () => {
    if (element.classList.contains("active")) {
      return;
    } else {
      oldActive.classList.remove("active");
      element.classList.add("active");
      oldActiveview.classList.remove("active");
      tabsContent[index].classList.add("active");
      oldActive = element;
      oldActiveview = tabsContent[index];
    }
  });
});
const dark = document.getElementById("dark");
const images = document.querySelectorAll(".sixth-item__doc");
let openIndex;
dark.addEventListener(
  "click",
  () => (
    (dark.style.display = "none"),
    images[openIndex].classList.remove("open"),
    console.log(openIndex)
  )
);
images.forEach((el, index) => {
  el.addEventListener("click", () => {
    /*  if (openIndex != undefined) {
      images[openIndex].classList.remove("open");
    } */
    console.log(el.classList.contains("open"));
    if (el.classList.contains("open")) {
      el.classList.remove("open");
    } else {
      (openIndex = index) /* , (dark.style.display = "block") */,
        el.classList.add("open");
    }
  });
});
/* function loopImg(img){


} */

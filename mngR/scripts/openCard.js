const listRepay = document.querySelectorAll(".repay__item");


listRepay.forEach((item) => {
  item.addEventListener("click", (e) => {
    listRepay.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
  });
});

function rangeSlideMoney(value) {
  document.getElementById("rangeValueMoney").innerHTML = value;
}
function rangeSlideDay(value) {
  document.getElementById("rangeValueDay").innerHTML = value;
}

const menu = document.getElementById("menubtn");
const menuItems = document.getElementById("menuItems");
const darkMenu = document.getElementById("darkMenu");
const links = document.querySelectorAll(".mob-links");
menu.addEventListener("click", (e) => {
  if (menu.attributes.class.value.length < 13) {
    openMenu();
  } else {
    closeMenu();
  }
});
darkMenu.addEventListener("click", () => {
  closeMenu();
});
function closeMenu() {
  menu.classList = "mob-menu-btn";
  menuItems.style = `display: none;`;
  darkMenu.style = `display: none`;
}
function openMenu() {
  menuItems.style = `display: block`;
  menu.classList.add("open");
  darkMenu.style = `display: block`;
}
links.forEach((e) => {
  e.addEventListener("click", () => {
    closeMenu();
  });
});

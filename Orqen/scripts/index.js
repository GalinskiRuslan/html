const yourCity = document.getElementById("yourCity");
const darkBack = document.getElementById("dark-back");
const cityYes = document.getElementById("cityYes");
const cityNo = document.getElementById("cityNo");
const modalCity = document.getElementById("modal-city");
const geo = document.getElementById("geo");
const chngeCity = document.getElementById("chngeCity");
const geoBTN = document.getElementById("geoBTN");
const cityList = document.getElementById("cityList");
var myMap;

function closeModal() {
  modalCity.style.display = "none";
}
function init() {
  myMap = new ymaps.Map("map", {
    center:
      localStorage.getItem("cityvalue") == "Алматы"
        ? [43.264972, 76.948618]
        : localStorage.getItem("cityvalue") == "Астана"
        ? [51.128207, 71.43042]
        : [42.368009, 69.612769],
    zoom: 12,
    controls: [],
  });
}

const cityes = document.querySelectorAll(".cityes");

let city;

window.onload = () => {
  console.log(cityes);
  if (localStorage.getItem("cityvalue") == undefined) {
    modalCity.style.display = "block";
    city = ymaps.geolocation.city;
    yourCity.innerText = city;
  } else {
    geo.innerText = localStorage.getItem("cityvalue");
    yourCity.innerText = localStorage.getItem("cityvalue");
    city = localStorage.getItem("cityvalue");
    console.log("in if", localStorage.getItem("cityvalue"));
    console.log("in else", localStorage.getItem("cityvalue"));
  }
};
cityes.forEach((value) => {
  value.addEventListener("click", (e) => {
    geo.innerText = e.target.innerText;
    if (e.target.innerText == "Астана") {
      myMap?.setCenter([51.128207, 71.43042]);
    }
    if (e.target.innerText == "Шымкент") {
      myMap?.setCenter([42.368009, 69.612769]);
    }
    if (e.target.innerText == "Алматы") {
      myMap?.setCenter([43.264972, 76.948618]);
    }

    modalCity.style.display = "none";
    cityList.style.display = "none";
    localStorage.setItem("cityvalue", e.target.innerText);
    console.log(e.target.innerText);
  });
});
geoBTN?.addEventListener("click", () => {
  darkMenu.style.display = "block";
  modalCity.style.display = "block";
  chngeCity.style.display = "none";
  cityList.style.display = "block";
});

cityYes?.addEventListener("click", () => {
  geo.innerText = city;
  modalCity.style.display = "none";
  localStorage.setItem("cityvalue", city);
});
cityNo?.addEventListener("click", () => {
  chngeCity.style.display = "none";
  cityList.style.display = "block";
});

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

const inggrid = document.getElementById("inggrid");
const infbtn = document.getElementById("infbtn");

infbtn?.addEventListener("click", () => {
  if (infbtn.classList.length > 1) {
    infbtn.classList.remove("active");
    inggrid.style.height = "0";
  } else {
    infbtn.classList.add("active");
    inggrid.style.height = "100%";
  }
});
const inviseF = document.getElementById("inviseF");
const darkBottom = document.getElementById("darkBottom");

function closeF() {
  inviseF.style.display = "none";
  console.log(123);
}
function openF() {
  inviseF.style.display = "block";
}
darkBottom?.addEventListener("click", () => {
  closeF();
});

const phone = document.getElementById("phone");
const mail = document.getElementById("mail");

phone.addEventListener("input", (e) => {
  phone.value = e.target.value.replace(/\D/g, "");
});

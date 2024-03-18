//swipe gamvbar profile
var buttonSwipe = document.getElementById("swipe");
var img1 = document.getElementById("profil");
var img2 = document.getElementById("logo");
buttonSwipe.addEventListener("click", function () {
  if (img1.classList.contains("active")) {
    img1.classList.remove("active");
    img2.classList.add("active");
  } else if (img2.classList.contains("active")) {
    img1.classList.add("active");
    img2.classList.remove("active");
  }
});

//cardd active
var cards = document.querySelectorAll('[id="card"]');
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    if (card.classList.contains("active")) {
      card.classList.remove("active");
    } else {
      card.classList.add("active");
    }
  });
});

// form activw
function formFaq() {
  var formCon = document.getElementById("faq");
  if (formCon.classList.contains("active")) {
    formCon.classList.remove("active");
  } else {
    formCon.classList.add("active");
  }
}

// faq function
var notif = document.getElementById("notif");
var succes = document.getElementById("succes");
var fail = document.getElementById("fail");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxMXyzdN8UAOTqz9agUcaIFVEIMBlbHhjQK3foDdEqT_4JMzAKmUflPo_NYLVYWgMy27w/exec";
const form = document.forms["biografi-form"];

notif.addEventListener("click", function () {
  notif.classList.remove("active");
});

var btnsub = document.getElementById("submit-btn");
var note = document.getElementById("note");
const namaValue = document.getElementById("nama").value.trim();
const emailValue = document.getElementById("email").value.trim();
const pesanValue = document.getElementById("pesan").value.trim();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      document.getElementById("nama").value = "";
      document.getElementById("email").value = "";
      document.getElementById("pesan").value = "";
      notif.classList.add("active");
      succes.classList.add("active");
      fail.classList.remove("active");
    })
    .catch((error) => console.error("Error!", error.message));
});

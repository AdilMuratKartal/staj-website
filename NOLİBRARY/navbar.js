let isItDark = false;
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

// 🎨 DARK MODE AKTİF ETME
const enableDarkmode = () => {
    isItDark = true;
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
};

// 🎨 LIGHT MODE AKTİF ETME
const disableDarkmode = () => {
    isItDark = false;
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", "null");
};

// 📌 Sayfa yüklenince mevcut temayı kontrol et
document.addEventListener("DOMContentLoaded", function() {
    if (darkmode === "active") {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});
      
// 🔘 Butona tıklanınca tema değiştir
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');



hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});




// 🔍 Arama çubuğu açma ve kapama
const searchToggle = document.querySelector(".search-toggle");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.querySelector(".search-input");

searchToggle.addEventListener("click", () => {
    searchContainer.classList.add("active");
    searchInput.focus();
});

searchInput.addEventListener("blur", () => {
    if (searchInput.value === "") {
        searchContainer.classList.remove("active");
    }
});

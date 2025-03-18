function navi_themeSwitch(isItDark) {
  if (isItDark === false) {
    $("nav").removeClass("navbar-secondary bg-body-secondary bg-secondary")
    $("nav").addClass("navbar-dark bg-body-dark bg-dark")
  } else {
    $("nav").removeClass("navbar-dark bg-body-dark bg-dark")
    $("nav").addClass("navbar-secondary bg-body-secondary bg-secondary")
  }
}


let isItDark = false;
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

// 🎨 DARK MODE AKTİF ETME
const enableDarkmode = () => {
  isItDark = true;
  document.body.classList.add('darkmode');
  navi_themeSwitch(isItDark);
  localStorage.setItem('darkmode', 'active');
  drawMultiDoughnutChart('doughnutChart', dataSets, darkColors,"black");
}

// 🎨 LIGHT MODE AKTİF ETME
const disableDarkmode = () => {
  isItDark = false;
  navi_themeSwitch(isItDark);
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
  drawMultiDoughnutChart('doughnutChart', dataSets, lightColors, "white");

}

// 📌 Sayfa yüklenince mevcut temayı kontrol et
if (darkmode === "active") {
  enableDarkmode();
} else {
  disableDarkmode();
}

// 🔘 Butona tıklanınca tema değiştir
themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});


$(document).ready(function () {
  $(".search-toggle").click(function () {
      $(".search-container").addClass("active");
      $(".search-input").focus();
  });

  // Kullanıcı input'tan çıkarsa kapanmasını sağla
  $(".search-input").blur(function () {
      if ($(this).val() === "") {  // Eğer boşsa kapat
          $(".search-container").removeClass("active");
      }
  });
});
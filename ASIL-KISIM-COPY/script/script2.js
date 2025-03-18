function navi_themeSwitch(isItDark) {
  if (isItDark === false) {
    $("nav").removeClass("navbar-secondary bg-body-secondary bg-secondary")
    $("nav").addClass("navbar-dark bg-body-dark bg-dark")
  } else {
    $("nav").removeClass("navbar-dark bg-body-dark bg-dark")
    $("nav").addClass("navbar-secondary bg-body-secondary bg-secondary")
  }
}
console.log(window.innerWidth, window.outerWidth);


let isItDark = false;
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');
const barColorsLight = ["#114b8b", "#7193b9", "#7dc9eb", "#d1dbe7"];
const barColorsDark = ["#eeb474", "#8e6c46", "#2e2418", "#843514"];
const coursesColorsLight = ["#454344", "#2b7d57", "#32a56a", "#f3a344", "#4188c0", "#cc4d58"];
const coursesColorsDark = ["#b6b8b7", "#cf7da3", "#cd5698", "#0b5bba","#b87139","#37b6ab"];
let themeOfBarColors = barColorsLight;
let themeOfCourseColors = coursesColorsLight;
let myChart;
let myBarChart; 


// 📌 Grafik oluşturma fonksiyonu
function updateChart() {
  if (myChart) myChart.destroy(); // Önceki grafiği sil
  if (myBarChart) myBarChart.destroy(); // Önceki grafiği sil
  
  myChart = new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: ["Okuma", "İzleme", "Forum", "Ödev"],
      datasets: [{
        backgroundColor: themeOfBarColors,
        data: [25, 25, 25, 25],
        spacing: 10,
      }],
      
      
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: "Yetkinlik ortalamaları"
      }
    }
  });

  myBarChart = new Chart("myBarChart", {
    type: "bar",
    data: {
      labels: ["Not1", "Not2" , "Not3", "Not4", "Not5", "Not6"],
      datasets: [{
        backgroundColor: themeOfCourseColors,
        data: [97, 30, 58, 100, 40, 30],
        spacing:0 
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "Yetkinlik ortalamaları"
      }
    }
  });


}

// 🎨 DARK MODE AKTİF ETME
const enableDarkmode = () => {
  isItDark = true;
  document.body.classList.add('darkmode');
  themeOfBarColors = barColorsDark; // Dark mode renklerini kullan
  themeOfCourseColors = coursesColorsDark; // Dark mode renklerini kullan
  navi_themeSwitch(isItDark);
  localStorage.setItem('darkmode', 'active');
  updateChart(); // Grafik renklerini güncelle
}

// 🎨 LIGHT MODE AKTİF ETME
const disableDarkmode = () => {
  isItDark = false;
  navi_themeSwitch(isItDark);
  themeOfBarColors = barColorsLight; // Light mode renklerini kullan
  themeOfCourseColors = coursesColorsLight; // Light mode renklerini kullan
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
  updateChart(); // Grafik renklerini güncelle
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

// 📊  Sayfa yüklenince grafik oluştur
document.addEventListener("DOMContentLoaded", function () {
  updateChart();
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
/*
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()

}) 

*/



/* benim ksıım


const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('.search-box button')
const searchInputProperties = {};
let nonexits = true; // let olarak değiştirildi

if (searchInput) {
    console.log(searchInput);

    searchInputProperties.id = searchInput.id;
    searchInputProperties.value = searchInput.value;
    searchInputProperties.placeholder = searchInput.placeholder;
    searchInputProperties.type = searchInput.type; 

    console.log(searchInputProperties);
    searchInput.remove();
}

function myFunction() { 
    if (searchInputProperties && searchBox) { // searchBox kontrol edildi
        if (nonexits) { // Media query uygunsa ve input eklenmemişse
            nonexits = false; // Değişken güncellendi
            document.body.style.backgroundColor = "yellow";

            const newSearchInput = document.createElement('input');
            newSearchInput.id = "search"; 
            newSearchInput.placeholder = "Ara...";
            newSearchInput.type = "text";
            searchButton.classList.add('animate')

            searchBox.insertBefore(newSearchInput, searchBox.firstChild);  
        } else if (!nonexits && searchBox.firstChild.id === searchInputProperties.id) { // Media query uygun değilse ve input eklenmişse
            searchBox.firstChild.remove();
            searchButton.classList.remove('animate');
            document.body.style.backgroundColor = "pink";
            nonexits= true;
        }
    }
}



// Attach listener function on state changes
document.querySelector('.search-box button').addEventListener("click", function() {
    myFunction();
});


/*
function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
     document.body.style.backgroundColor = "pink";
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 700px)")

  var navlinkshtml = document.querySelector('.navlinks').innerHTML
  var navlinks = Array.from(navlinkshtml)       
  if (x.matches) {
    document.querySelector('.navlinks').innerHTML = navlinks.slice(0, 3).join('')
  }
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });

  */



function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
     document.body.style.backgroundColor = "pink";
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 892px)")

  var nav_contain_fluid = document.querySelector('.navlinks').innerHTML
  var navlinks = Array.from(navlinkshtml)       
  if (x.matches) {
    document.querySelector('.navlinks').innerHTML = navlinks.slice(0, 3).join('')
  }
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });

  
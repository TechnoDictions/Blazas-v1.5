/*
===========
menu-sidebar
===========
*/
function initHeader(){
let menuDiv = document.querySelector(".menu-sidebar");

document.querySelector(".menu-btn").addEventListener("click", function () {
  menuDiv.classList.toggle("active")
});

let menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
});
/*
========
spacer
=======
*/
const vh = document.querySelector("header");
const header_height = vh.offsetHeight;
document.querySelector(".spacer").style.height = header_height + "px";

/*
==============
For search
==============
*/
const searchContainer = document.querySelector(".search-container");
const searchBtn = document.querySelector(".search-icon");
const searchBox = document.querySelector(".search-box");
const closeBtn = document.querySelector(".close-btn");

searchBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  searchContainer.classList.add("active");
  searchBox.classList.add("active");
  searchBox.focus();
});

closeBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  searchContainer.classList.remove("active");
  searchBox.value = "";
});

document.addEventListener("click", (event) => {
  if (!searchContainer.contains(event.target)) {
    searchBox.classList.remove("active");
    searchContainer.classList.remove("active");
    searchBox.value = "";
  }
});



const searchInput = document.querySelector(".search-input");
const searchBtn2 = document.querySelector(".searching");

function performSearch() {
  const query = searchInput.value.trim();
  if (!query) return;

  const path = window.location.pathname.toLowerCase();

  if (path.includes("articles")) {
    window.location.href = `articles.html?search=${encodeURIComponent(query)}`;
  } else if (path.includes("products")) {
    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
  } else {
    // fallback (for index, contact, etc.)
    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
  }
}

searchBtn2.addEventListener("click", performSearch);

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    performSearch();
  }
});
}
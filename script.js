

/*
===========
menu-sidebar
===========
*/
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
  searchInput.focus(); // ✅ now cursor goes to input directly
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
    window.location.href = `articles.html?search=${encodeURIComponent(query)}`;
  }
}

searchBtn2.addEventListener("click", performSearch);

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    performSearch();
  }
});
/*
=============
Slider script
=============
*/
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.btn.right');
const prevBtn = document.querySelector('.btn.left');
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlideFunc() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlideFunc();
  resetAutoSlide();
});

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

startAutoSlide();
/*
=========
scroll-btn
=========
*/

document.getElementById("btn-scroll").addEventListener("click", function () {
  const target = document.querySelector(".articles-section").offsetTop; // position of target
  const start = window.scrollY;
  const distance = target - (start + 100); 
  const duration = 1300; 
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, start, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
});
/*
=============
Dynamic Cards
=============
*/

function DynamicCards(img, alt, category) {
  let html = `<div class="cards"  data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"><a href="products.html?search=${category}"> <div class="loader"></div><img src="${img}" alt="${alt}" onload="this.style.display='block'; this.previousElementSibling.style.display='none';"></a></div>`
  document.querySelector(".products-cards").innerHTML += html
}
DynamicCards("img/Bracelets/charms/b (1).jpg", "Bracelet beads with charms", "charms")
DynamicCards("img/Bracelets/name/b (1).jpg", "Bracelet beads with charms", "bracelet")
DynamicCards("img/Bracelets/charms/b (2).jpg", "Bracelet beads with charms", "charms")
DynamicCards("img/Bracelets/simple/b (1).jpg", "Bracelet beads with charms", "simple")


/*
================
Dynamic Cards 2
================
*/
function DynamicCards2(img, alt, category) {
  let html = `<div class="cards"   data-aos="fade-right" data-aos-duration="1400" data-aos-anchor-placement="top-bottom" > <a href="products.html?search=${category}"><div class="loader"></div><img src="${img}" alt="${alt}" onload="this.style.display='block'; this.previousElementSibling.style.display='none';"></a></div>`
  document.querySelector(".products-cards-2").innerHTML += html
}
DynamicCards2("img/Bracelets/simple/b (2).jpg", "Bracelet beads with charms", "simple")
DynamicCards2("img/Bracelets/charms/b (3).jpg", "Bracelet beads with charms", "charms")
DynamicCards2("img/Bracelets/name/b (2).jpg", "Bracelet beads with charms", "name")
DynamicCards2("img/Bracelets/charms/b (4).jpg", "Bracelet beads with charms", "charms")


/*
================
Dynamic articles
================
*/

function DynamicArticles(img, alt, category) {
  let html = `
    <div class="a-cards" data-aos="fade-right" data-aos-duration="1400" data-aos-anchor-placement="top-bottom">
      <a href="articles.html?search=${category}">
        <div class="loader"></div>
        <img src="${img}" alt="${alt}" 
             onload="this.style.display='block'; this.style.border='none'; this.previousElementSibling.style.display='none';">
      </a>
    </div>`;
  document.querySelector(".articles-cards").innerHTML += html;
}

function DynamicArticles2(img, alt, category) {
  let html = `
    <div class="a-cards" data-aos="fade-right" data-aos-duration="1400" data-aos-anchor-placement="top-bottom">
      <a href="articles.html?search=${category}">
        <div class="loader"></div>
        <img src="${img}" alt="${alt}" 
             onload="this.style.display='block'; this.style.border='none'; this.previousElementSibling.style.display='none';">
      </a>
    </div>`;
  document.querySelector(".articles-cards-2").innerHTML += html;
}

fetch("Articles/article.json")
  .then(response => response.json())
  .then(data => {
    
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    let latest10 = data.slice(0, 10);

    latest10.slice(0, 5).forEach(article => {
      DynamicArticles(article.mainImage, article.alt, article.category);
    });

    latest10.slice(5, 10).forEach(article => {
      DynamicArticles2(article.mainImage, article.alt, article.category);
    });
  })
  .catch(error => console.error("Error loading articles:", error));




/*
=========================
For scrolling of products
=========================
*/
function scrollRight() {
  const scroll_x = document.querySelector(".products-container")
  if (scroll_x) {
    scroll_x.scrollBy({
      left: -340,
      behavior: "smooth"
    });

  }
}
function scrollleft() {
  const scroll_y = document.querySelector(".products-container")
  if (scroll_y) {
    scroll_y.scrollBy({
      left: 340,
      behavior: "smooth"
    });


  }
}
/*
=============================
For scrolling of products 2
=============================
*/
function scrollRight2() {
  const scroll_x = document.querySelector(".products-container-2")
  if (scroll_x) {
    scroll_x.scrollBy({
      left: -340,
      behavior: "smooth"
    });

  }
}
function scrollleft2() {
  const scroll_y = document.querySelector(".products-container-2")
  if (scroll_y) {
    scroll_y.scrollBy({
      left: 340,
      behavior: "smooth"
    });


  }
}
/*
===================
For articles scroll
===================
*/
function scrollRight3() {
  const scroll_x = document.querySelector(".articles-container")
  if (scroll_x) {
    scroll_x.scrollBy({
      left: -600,
      behavior: "smooth"
    });
  }
}
function scrollleft3() {
  const scroll_y = document.querySelector(".articles-container")
  if (scroll_y) {
    scroll_y.scrollBy({
      left: 600,
      behavior: "smooth"
    });


  }
}
/*
==================
Articles scroll 2
==================
*/
function scrollRight4() {
  const scroll_x = document.querySelector(".articles-container-2")
  if (scroll_x) {
    scroll_x.scrollBy({
      left: -600,
      behavior: "smooth"
    });

  }
}
function scrollleft4() {
  const scroll_y = document.querySelector(".articles-container-2")
  if (scroll_y) {
    scroll_y.scrollBy({
      left: 600,
      behavior: "smooth"
    });


  }
}
/*
=============
for Milestone
=============
*/
function countTo(el, target, { duration = 2000, suffix = "" } = {}) {
  let start = null;
  const fmt = new Intl.NumberFormat();

  function step(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    const current = Math.round(p * target);
    el.textContent = fmt.format(current) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function setupCounters() {
  const nodes = document.querySelectorAll(".stat-number");

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(n => {
      const t = Number(n.dataset.target || 0);
      const s = n.dataset.suffix || "";
      countTo(n, t, { suffix: s });
    });
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = Number(el.dataset.target || 0);
        const suffix = el.dataset.suffix || "";
        countTo(el, target, { suffix });
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  nodes.forEach(n => obs.observe(n));
}
document.addEventListener("DOMContentLoaded", setupCounters);


/*
========================
for loading product page
========================
*/
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch("data/products.json")
  .then(res => res.json())
  .then(data => {
    const product = data.find(p => p.id == productId);
    const container = document.getElementById("product-details");

    if (!product) {
      container.innerHTML = "<p>Product not found</p>";
      return;
    }

    container.innerHTML = `
      <div class="product-detail">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Category: ${product.category}</p>
        <p>Price: PKR ${product.price}</p>
        <p>${product.description || "No description available."}</p>
        <button>Add to Cart</button>
      </div>
    `;
  })
  .catch(err => {
    console.error("Error loading product:", err);
    document.getElementById("product-details").innerHTML = "<p>Error loading product.</p>";
  });

/*
=========================
main page category filter
=========================
*/
async function loadProducts() {
  const res = await fetch("data/products.json");
  const data = await res.json();

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category")?.toLowerCase() || "";
  const query = params.get("search")?.toLowerCase() || "";

  let filtered = data;

  if (category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === category);
  }

  if (query) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }

  const container = document.querySelector(".prs-container");
  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `<p>No products found</p>`;
  } else {
    filtered.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("prs");
      card.innerHTML = `
        <div class="prs-img">
          <div class="loader"></div>
          <img src="${product.image}" alt="${product.name}"
            onload="this.style.display='block'; this.previousElementSibling.style.display='none';">
        </div>
        <div class="prs-p">
          <p>${product.name}</p>
          <p>PKR : ${product.price}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }
}

loadProducts();

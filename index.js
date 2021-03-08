const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "gray";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

const date = new Date();
document.querySelector("#year").innerHTML = date.getFullYear();

updateVisitCount()

const countEl = document.querySelector("#count");
function updateVisitCount() {
    fetch("https://api.countapi.xyz/update/portfoliosite/count/?amount=1").then(res => res.json()).then(res => {
        countEl.innerHTML = res.value;
    })
}

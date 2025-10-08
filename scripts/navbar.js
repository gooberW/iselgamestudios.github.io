const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const og_src = logo.getAttribute('src'); 
const src_blue = "../assets/icon_blue.png";
const src_white = "../assets/IGS_Icon_white.png";
console.log("Original Source Literal:", og_src);

document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        logo.src = src_white;
        
    } else {
        navbar.classList.remove("scrolled");
        if (og_src.endsWith("assets/icon_blue.png")) {
            logo.src = src_blue;
        }
    }
});


function showLinks() {
    const links = document.querySelector(".menu");
    const icon = document.querySelector(".menu-btn i");

    links.classList.toggle("visible");

    if (links.classList.contains("visible")) {
        icon.classList.remove("bi-list");
        icon.classList.add("bi-x-lg");
    } else {
        icon.classList.remove("bi-x-lg");
        icon.classList.add("bi-list");
    }
}


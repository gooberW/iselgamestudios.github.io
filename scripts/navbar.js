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

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");

    if(menuBtn) {
        menuBtn.addEventListener("click", () => {
            showLinks();
        });
    }
})


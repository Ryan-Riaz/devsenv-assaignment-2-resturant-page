// select any element
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(
        `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
    );
};

// mobile menu
const toggleMenu = selectElement("#nav-toggle");
const menu = selectElement(".nav-sm-hidden");
const hamburger = selectElement(".nav-hamburger i");

toggleMenu.addEventListener("click", () => {
    if (menu.style.left == "-250px") {
        menu.style.left = "0px";
        hamburger.classList.add("fa-times");
        hamburger.classList.remove("fa-bars");
    } else {
        menu.style.left = "-250px";
        hamburger.classList.add("fa-bars");
        hamburger.classList.remove("fa-times");
    }
});

const navMenu = document.querySelectorAll(".nav-menu li.nav-item");

Array.from(navMenu).forEach((li) => {
    li.addEventListener("click", () => {
        hamburger.classList.add("fa-bars");
        hamburger.classList.remove("fa-times");
        menu.style.left = "-250px";
    });
});

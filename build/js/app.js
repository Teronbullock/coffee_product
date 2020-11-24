/* ================================= 
  app.js
==================================== */
const mobileNav = document.getElementById("nav__mobile");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenu.addEventListener("click", () => {
    if (mobileNav.style.display === "block" || screen.width >= 768) {
        mobileNav.style.display = "none";
    } else if (window.screen.width < 768) {
        mobileNav.style.display = "block";
    }
});

/* Hide Mobile-Nav above 768px */
if (window.screen.width >= 768) {
    console.log("I work");
    mobileNav.style.display = "none";
}

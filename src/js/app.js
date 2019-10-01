/* ================================= 
  app.js
==================================== */
function hideNav() {
    var mNav = document.getElementById("nav-mobile");
    if (mNav.style.display === "block") {
        mNav.style.display = "none";
    } else {
        mNav.style.display = "block";
    }
}

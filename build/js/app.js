/* ================================= 
  app.js
==================================== */
function hideNav() {
  var mNav = document.getElementById("mobile-nav");
  if (mNav.style.display === "block") {
    mNav.style.display = "none";
  } else {
    mNav.style.display = "block";
  }
}

function openNav() {
  document.getElementById('mob-menu').style.transform = "translateY(0%)";
  document.getElementById('mob-menu').style.boxShadow = "0px 20px 40px rgba(0,0,0,0.3)";
}

function closeNav() {
  document.getElementById('mob-menu').style.transform = "translateY(-100%)";
  document.getElementById('mob-menu').style.boxShadow = "none";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
function openNav() {
  document.getElementById("sidenav-right").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidenav-right").style.width = "0";
}

function closeMenuBar() {
  document.getElementById("dropdown-list").classList.toggle('show');
 
 
}
var myButton = document.getElementById("myButton");
var myModal = document.getElementById("myModal");
var close = document.getElementsByClassName("close")[0];

myButton.onclick = function() {
  myModal.classList.add("show");
}

close.onclick = function() {
  myModal.classList.remove("show");
}

window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.classList.remove("show");
  }
}

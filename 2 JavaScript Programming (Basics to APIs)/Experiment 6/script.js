let paraVisible = true;

// Change heading text using input
function changeHeading() {
  let msg = document.getElementById("message").value;
  document.getElementById("heading").innerText = msg;
}

// Background color change using event listener
document.getElementById("colorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// Font size change
document.getElementById("fontBtn").addEventListener("click", function () {
  document.getElementById("para").style.fontSize = "24px";
});

// Show/Hide paragraph
document.getElementById("toggleBtn").addEventListener("click", function () {
  paraVisible = !paraVisible;
  document.getElementById("para").style.display =
    paraVisible ? "block" : "none";
});

// Reset page
function resetPage() {
  document.getElementById("heading").innerText = "Welcome to DOM Manipulation";
  document.body.style.backgroundColor = "white";
  document.getElementById("para").style.display = "block";
  document.getElementById("para").style.fontSize = "18px";
  document.getElementById("message").value = "";
}
// Get references to elements
const image = document.getElementById("myImage");
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");

// Show Image button functionality
showBtn.addEventListener("click", function() {
    image.style.display = "block";   // Show the image
    showBtn.style.display = "none";  // Hide the Show button
    hideBtn.style.display = "inline"; // Show the Hide button
});

// Hide Image button functionality
hideBtn.addEventListener("click", function() {
    image.style.display = "none";    // Hide the image
    hideBtn.style.display = "none";  // Hide the Hide button
    showBtn.style.display = "inline"; // Show the Show button again
});

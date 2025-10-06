// // =====================
// // Sidebar Active Highlight
// // =====================

// // Get all sidebar list items
// const sidebarItems = document.querySelectorAll(".sidebar ul li");

// // Loop through each sidebar item
// sidebarItems.forEach(function(item) {
//   // When someone clicks a sidebar item
//   item.addEventListener("click", function() {
//     // Remove "active" from all items
//     sidebarItems.forEach(function(el) {
//       el.classList.remove("active");
//     });
//     // Add "active" to the clicked item
//     item.classList.add("active");
//   });
// });


// // =====================
// // Dark/Light Mode Toggle (if button exists)
// // =====================
// const modeButton = document.querySelector(".toggle-mode");

// if (modeButton) {
//   modeButton.addEventListener("click", function() {
//     // Toggle dark mode
//     document.body.classList.toggle("dark");
    
//     // Change button text
//     if (document.body.classList.contains("dark")) {
//       modeButton.textContent = "☀️ Light";
//     } else {
//       modeButton.textContent = "🌙 Dark";
//     }
//   });
// }


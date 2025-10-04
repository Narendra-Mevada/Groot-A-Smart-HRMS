// =====================
// Sidebar Active Highlight
// =====================

// Get all sidebar list items
const sidebarItems = document.querySelectorAll(".sidebar ul li");

// Loop through each sidebar item
sidebarItems.forEach(function(item) {
  // When someone clicks a sidebar item
  item.addEventListener("click", function() {
    // Remove "active" from all items
    sidebarItems.forEach(function(el) {
      el.classList.remove("active");
    });
    // Add "active" to the clicked item
    item.classList.add("active");
  });
});


// =====================
// Dark/Light Mode Toggle (if button exists)
// =====================
const modeButton = document.querySelector(".toggle-mode");

if (modeButton) {
  modeButton.addEventListener("click", function() {
    // Toggle dark mode
    document.body.classList.toggle("dark");
    
    // Change button text
    if (document.body.classList.contains("dark")) {
      modeButton.textContent = "☀️ Light";
    } else {
      modeButton.textContent = "🌙 Dark";
    }
  });
}


// =====================
// Employee Add / Edit / Remove
// =====================

// Get the table body
const employeeTable = document.querySelector("#employeeTable tbody");

// Get the "Add Employee" button
const addEmployeeButton = document.querySelector("#addEmployeeBtn");


// ---- Add Employee ----
addEmployeeButton.addEventListener("click", function() {
  // Ask user for employee info
  const name = prompt("Enter Employee Name:");
  const department = prompt("Enter Department:");
  const designation = prompt("Enter Designation:");
  const experience = prompt("Enter Experience:");
  const salary = prompt("Enter Salary:");
  const tasks = prompt("Enter Tasks:");

  // Only add if main info is filled
  if (name && department && designation && experience && salary) {
    // Create a new row
    const row = document.createElement("tr");
    
    // Add cells to the row
    row.innerHTML = `
      <td>${name}</td>
      <td>${department}</td>
      <td>${designation}</td>
      <td>${experience}</td>
      <td>${salary}</td>
      <td>${tasks || ""}</td>
      <td>
        <button class="edit">✏️</button>
        <button class="remove">❌</button>
      </td>
    `;

    // Add the row to the table
    employeeTable.appendChild(row);
  }
});


// ---- Edit or Remove Employee ----
employeeTable.addEventListener("click", function(e) {
  // Get the row of the clicked button
  const row = e.target.closest("tr");

  // Remove employee
  if (e.target.classList.contains("remove") && row) {
    const confirmDelete = confirm("Are you sure you want to remove this employee?");
    if (confirmDelete) {
      row.remove();
    }
  }

  // Edit employee
  if (e.target.classList.contains("edit") && row) {
    const newName = prompt("Edit Name:", row.cells[0].textContent);
    const newDept = prompt("Edit Department:", row.cells[1].textContent);
    const newDesig = prompt("Edit Designation:", row.cells[2].textContent);
    const newExp = prompt("Edit Experience:", row.cells[3].textContent);
    const newSalary = prompt("Edit Salary:", row.cells[4].textContent);
    const newTasks = prompt("Edit Tasks:", row.cells[5].textContent);

    // Update only if main fields are filled
    if (newName && newDept && newDesig && newExp && newSalary) {
      row.cells[0].textContent = newName;
      row.cells[1].textContent = newDept;
      row.cells[2].textContent = newDesig;
      row.cells[3].textContent = newExp;
      row.cells[4].textContent = newSalary;
      row.cells[5].textContent = newTasks || "";
    }
  }
});


// =====================
// Search Employee
// =====================

// Get search input
const searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", function() {
  const text = searchInput.value.toLowerCase(); // Text typed by user
  const rows = employeeTable.getElementsByTagName("tr");

  // Loop through each row
  Array.from(rows).forEach(function(row) {
    const name = row.cells[0].textContent.toLowerCase();
    const dept = row.cells[1].textContent.toLowerCase();
    const desig = row.cells[2].textContent.toLowerCase();

    // Show row if name, department, or designation matches
    if (name.includes(text) || dept.includes(text) || desig.includes(text)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

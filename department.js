// Get the "Add Department" button and the container where cards will appear
const addBtn = document.getElementById("addDeptBtn");
const deptContainer = document.getElementById("deptContainer");

// When the Add button is clicked
addBtn.addEventListener("click", () => {

  // Ask user for department name
  const name = prompt("Enter Department Name:");

  // Ask user for number of employees
  const employees = prompt("Enter Number of Employees:");

  // If both name and number are entered
  if (name && employees) {

    // Create a new div for the department card
    const card = document.createElement("div");

    // Add CSS class to style it
    card.className = "dept-card";

    // Add department name and employees info inside the card
    card.innerHTML = `
      <h3>${name}</h3>
      <p>Employees: ${employees}</p>
    `;

    // Finally, show the new card inside the container
    deptContainer.appendChild(card);
  }
});

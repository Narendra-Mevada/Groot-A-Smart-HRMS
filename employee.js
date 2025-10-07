document.getElementById("addEmployeeBtn").addEventListener("click", () => {
  // Ask user for details
  const name = prompt("Enter Employee Name:");

  const department = prompt("Enter Department:");
  const designation = prompt("Enter Designation:");
  const experience = prompt("Enter Experience (e.g., 5 Years):");
  const salary = prompt("Enter Salary:");
  const expertise = prompt("Enter Expertise:");
  const status = prompt("Enter Status (Present / On Leave):");

  const table = document.getElementById("employeeTable").querySelector("tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${department}</td>
    <td>${designation}</td>
    <td>${experience}</td>
    <td>${salary}</td>
    <td>${expertise}</td>
    <td>${status}</td>
    <td>
      <button class="edit">Edit</button>
      <button class="remove">Remove</button>
    </td>
  `;


  table.appendChild(row);
});

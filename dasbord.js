// Sidebar Active Highlight
const navItems = document.querySelectorAll(".sidebar ul li");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");
  });
});

// Dark/Light Mode Toggle
const toggleBtn = document.querySelector(".toggle-mode");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent =
      document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
  });
}

// ---- Task Manager ----
const taskBox = document.querySelector(".finance-box ul");
const addTaskBtn = document.querySelector(".finance-box .add-btn");

addTaskBtn.addEventListener("click", () => {
  const task = prompt("Enter a new task:");
  if (task) {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="checkbox"> <span>${task}</span></label>`;
    taskBox.appendChild(li);
  }
});

// ---- Meeting Manager ----
const meetingBox = document.querySelector(".meeting-box");
const addMeetingBtn = meetingBox.querySelector(".add-btn");

// addMeetingBtn.addEventListener("click", () => {
//   const meeting = prompt("Enter meeting details (e.g., 15 Oct – Standup):");
//   if (meeting) {
//     const p = document.createElement("p");
//     p.textContent = meeting; // ✅ no remove button
//     meetingBox.insertBefore(p, addMeetingBtn);
//   }
// });
addMeetingBtn.addEventListener("click", () => {
  const meet = prompt("Enter a new meet:");
  if (meet) {
    const p = document.createElement("p");
    p.innerHTML = `<span>${meet}</span>`;
    meetingBox.insertBefore(p, addMeetingBtn);
  }
});

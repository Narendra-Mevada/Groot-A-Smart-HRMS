//for task box
const taskBox = document.querySelector(".task-box ul");
const addTaskBtn = document.querySelector(".task-box .add-btn");

addTaskBtn.addEventListener("click", () => {
  const task = prompt("Enter a new task:");
  if (task) {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="checkbox"> <span>${task}</span></label>`;
    taskBox.appendChild(li);
  }
});

//for meeting box
const meetingBox = document.querySelector(".meeting-box");
const addMeetingBtn = meetingBox.querySelector(".add-btn");
addMeetingBtn.addEventListener("click", () => {
  const meet = prompt("Enter a new meet:");
  if (meet) {
    const p = document.createElement("p");
    p.innerHTML = `<span>${meet}</span>`;
    meetingBox.insertBefore(p, addMeetingBtn);
  }
});

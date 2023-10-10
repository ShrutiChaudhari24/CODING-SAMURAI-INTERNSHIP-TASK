function addTask() {
    const taskText = document.getElementById("task").value;
    if (taskText.trim() !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" onchange="toggleTaskCompletion(this)">
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
        document.getElementById("task").value = "";
    }
}

function removeTask(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}

function toggleTaskCompletion(checkbox) {
    const taskItem = checkbox.parentElement;
    if (checkbox.checked) {
        taskItem.classList.add("completed");
    } else {
        taskItem.classList.remove("completed");
    }
}

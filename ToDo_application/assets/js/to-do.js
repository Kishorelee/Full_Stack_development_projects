document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", addTask);

    taskList.addEventListener("click", function(e) {
        const target = e.target;
        console.log(target);

        if (target.classList.contains("remove")) {
            removeTask(target.parentElement);
        } 
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                ${taskText}
                <span class="actions">  
                   <span class="remove">&#128465;;</span>
                </span>`;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    }

    function removeTask(task) {
        console.log(task.parentElement);
        taskList.removeChild(task.parentElement);
    } 
});







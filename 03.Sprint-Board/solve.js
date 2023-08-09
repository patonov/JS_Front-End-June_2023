const taskSection = {
    "ToDo": document.querySelector("#todo-section > .task-list"),
    "In Progress": document.querySelector("#in-progress-section > .task-list"),
    "Code Review": document.querySelector("#code-review-section > .task-list"),
    "Done": document.querySelector("#done-section > .task-list"),
};

const nextStatusMap = {
    "ToDo": "In Progress",
    "In Progress": "Code Review",
    "Code Review": "Done",
    "Done": "Close",
};

inputs = {
    title: document.querySelector("#title"),
    description: document.querySelector("#description"),
}

let tasks = {};

function attachEvents() {
    document.querySelector("#load-board-btn").addEventListener("click", loadTasks);
    document.querySelector("#create-task-btn").addEventListener("click", createTask);
}

async function createTask(){
    if (Object.values(inputs).some(input => input.value === "")){
        return;
    }

    const task = {
        title: inputs.title.value,
        description: inputs.title.value,
        status: "ToDo",
    }

    fetch ("http://localhost:3030/jsonstore/tasks/", {
    method: "POST",
    body: JSON.stringify(task),
    }).then(() => {
        loadTasks();

        inputs.title.value = "";
        inputs.description.value = "";
    });
    
}

async function loadTasks(){
    tasks = await (await fetch("http://localhost:3030/jsonstore/tasks/")).json();
    
    Object.values(taskSection).forEach((section) => (section.textContent = ""));

    Object.values(tasks).forEach((task) => {
        const section = taskSection[task.status];
        const item = createElement("li", null, ["task"], null, section);
        createElement("h3", task.title, [], null, item);
        createElement("p", task.description, [], null, item);
        let button = createElement("button", 
        nextStatusMap[task.status] === "Close" ? "Close" : `Move to ${nextStatusMap[task.status]}`, 
        [], task._id, item);
        button.addEventListener("click", moveTask);
    });
}

async function moveTask(e){
    const task = tasks[e.currentTarget.getAttribute("id")];
    let method = "PATCH";
    let body = JSON.stringify({
        ...task,
        status: nextStatusMap[task.status]
    });

    if(task.status === "Done"){
        method = "DELETE";
        body = undefined;
    }

    fetch(`http://localhost:3030/jsonstore/tasks/${task._id}`, {
        method,
        body,
    }).then(() => {
        loadTasks();
    });

    
}

function createElement(type, textContent, classes, id, parent){
    const element = document.createElement(type);

    if (textContent){
        element.textContent = textContent;
    }

    if (classes && classes.length > 0){
        element.classList.add(...classes);
    }

    if (id){
        element.setAttribute("id", id);
    }

    if (parent){
        parent.appendChild(element);
    }

    return element;
}

attachEvents();
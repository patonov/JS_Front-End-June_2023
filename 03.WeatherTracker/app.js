let selectors = {
    appFormEditBtn: document.querySelector("#edit-weather"),
    appFormAddBtn: document.querySelector("#add-weather"),
    idToEdit: "",
};

let inputs = {
    location: document.querySelector("#location"),
    temperature: document.querySelector("#temperature"),
    date: document.querySelector("#date"),
};

let weads = {};

function attachEvents() {
    document.querySelector("#load-history").addEventListener("click", loadHistory);
    selectors.appFormEditBtn.addEventListener("click", editWead);
    selectors.appFormAddBtn.addEventListener("click", addWead); 
}

async function editWead(){
    let weadToEdit = {
        location: inputs.location.value,
        temperature: inputs.temperature.value,
        date: inputs.date.value,
        id: selectors.idToEdit,
    };

    await fetch(`http://localhost:3030/jsonstore/tasks/${weadToEdit.id}`,{
        method: 'PUT',
        body: JSON.stringify({
        location: weadToEdit.location,
        temperature: weadToEdit.temperature,
        date: weadToEdit.date,
        id: weadToEdit.id,
         })
    }); 
        console.log(weadToEdit.id);
        await loadHistory();

        inputs.location.value = "";
        inputs.temperature.value = "";
        inputs.date.value = "";
        selectors.idToEdit = "";

    selectors.appFormEditBtn.disabled = true;
    selectors.appFormAddBtn.disabled = false;
}

async function addWead(e){
    e.preventDefault();
    
    if (Object.values(inputs).some(input => input.value === "")){
        return;
    }

    let wead = {
        location: inputs.location.value,
        temperature: inputs.temperature.value,
        date: inputs.date.value,
    };

    await fetch ("http://localhost:3030/jsonstore/tasks/", {
        method: "POST",
        body: JSON.stringify(wead),
    });
    
    inputs.location.value = "";
    inputs.temperature.value = "";
    inputs.date.value = "";

    loadHistory();
}

async function loadHistory(){
    weads = await (await fetch("http://localhost:3030/jsonstore/tasks/")).json();

    Object.values(weads).forEach((wead) => {
        let weadsDiv = document.querySelector("#list");

        let individualWeadContainer = createElement("div", null, ["container"], null, weadsDiv);
        createElement("h2", wead.location, [], null, individualWeadContainer);
        createElement("h3", wead.date, [], null, individualWeadContainer);
        createElement("h3", wead.temperature, [], "celsius", individualWeadContainer);
        let buttonsContainer = createElement("div", null, ["buttons-container"], null, individualWeadContainer);

        let editBtn = createElement("button", "Change", ["change-btn"], null, buttonsContainer);
            editBtn.addEventListener("click", (e) => {
            inputs.location.value = wead.location;
            inputs.temperature.value = wead.temperature;
            inputs.date.value = wead.date;
            
            selectors.idToEdit = Object.keys(weads).find(w => w.location === wead.location);

            selectors.appFormEditBtn.disabled = false;
            
            individualWeadContainer.remove();

            selectors.appFormAddBtn.disabled = true;
        });


        let deleteBtn = createElement("button", "Delete", ["delete-btn"], null, buttonsContainer);
            deleteBtn.addEventListener("click", (e) => {
                            
                fetch(`http://localhost:3030/jsonstore/tasks/${wead._id}`, {
                    method: "DELETE",
                    body: undefined,
                }).then(() => {
                    loadHistory();
                });

                individualWeadContainer.remove();

            });
    });
    selectors.appFormEditBtn.disabled = true;
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


let selectors = {
    addVacationBtn: document.querySelector("#add-vacation"),
    editBtn: document.querySelector("#edit-vacation"),
    vacationIdToEditt: "",
};

let inputs = {
    name: document.querySelector("#name"),
    numDays: document.querySelector("#num-days"),
    fromDate: document.querySelector("#from-date"),
};

let vacations = {};

function attachEvents() {
    document.querySelector("#load-vacations").addEventListener("click", loadVacations);
    selectors.addVacationBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (Object.values(inputs).some(input => input.value === "")){
            return;
        }
                
        let vacation = {
            name: inputs.name.value,
            days: inputs.numDays.value,
            date: inputs.fromDate.value,
        };
        
        fetch ("http://localhost:3030/jsonstore/tasks/", {
        method: "POST",
        body: JSON.stringify(vacation),
        });

        inputs.name.value = "";
        inputs.numDays.value = "";
        inputs.fromDate.value = "";
           
        loadVacations();
    });
    selectors.editBtn.addEventListener("click", (e) => {
        let vacationToEdit = {
            name: inputs.name.value,
            date: inputs.fromDate.value,
            days: inputs.numDays.value,
            
            _id: selectors.vacationIdToEditt,
        }
    
            fetch(`http://localhost:3030/jsonstore/tasks/${vacationToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(vacationToEdit)
            }).then(() => {
                inputs.name.value = "";
                inputs.fromDate.value = "";
                inputs.numDays.value = "";
                selectors.vacationIdToEditt = "";
            }).then(() => {
                selectors.editBtn.disabled = true;
                selectors.addVacationBtn.disabled = false;
    
                loadVacations(); 
            });
    });
}


async function loadVacations(){
    vacations = await (await fetch("http://localhost:3030/jsonstore/tasks/")).json();

    Object.values(vacations).forEach((vacation) => {
        const vacationsList = document.querySelector("#list");

        const individualVacationContainer = createElement("div", null, ["container"], null, vacationsList);
        createElement("h2", vacation.name, [], null, individualVacationContainer);
        createElement("h3", vacation.date, [], null, individualVacationContainer);
        createElement("h3", vacation.days, [], null, individualVacationContainer);
        
        let changeBtn = createElement("button", "Change", ["change-btn"], null, individualVacationContainer);
        changeBtn.addEventListener("click", (e) => {
            inputs.name.value = vacation.name;
            inputs.fromDate.value = vacation.date;
            inputs.numDays.value = vacation.days;
            
            selectors.vacationIdToEditt = vacation._id;

            selectors.addVacationBtn.disabled = true;
            selectors.editBtn.disabled = false;
            
            individualVacationContainer.remove();

        });

        let doneBtn = createElement("button", "Done", ["done-btn"], null, individualVacationContainer);
        doneBtn.addEventListener("click", (e) => {
            let vacationToDelete = {
                name: vacation.name,
                days: vacation.days,
                date: vacation.date,
                
                vacationId: vacation._id
            };
        
            fetch(`http://localhost:3030/jsonstore/tasks/${vacationToDelete.vacationId}`,{
                method: 'DELETE',
                body: undefined,
            }).then(() => {
                loadVacations();
        
                inputs.name.value = "";
                inputs.fromDate.value = "";
                inputs.numDays.value = "";
            });
        

        });
        
    });
    selectors.editBtn.disabled = true;
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

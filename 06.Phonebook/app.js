function attachEvents() {
    document.querySelector("#btnLoad").addEventListener("click", loadNumbers);
    document.querySelector("#btnCreate").addEventListener("click", createNumber);

}

async function createNumber(){
    const person = document.querySelector("#person").value;
    const number = document.querySelector("#phone").value;

    let unit = {
        person: person,
        phone: number,
    }

    fetch("http://localhost:3030/jsonstore/phonebook", {
        method: "POST",
        body: JSON.stringify( unit ),
    });

    person.value = '';
    number.value = '';
    loadNumbers();
}

async function loadNumbers(){
    let numbers = await (await fetch("http://localhost:3030/jsonstore/phonebook")).json();
    
    let phonebook = document.querySelector("#phonebook");
    phonebook.innerHTML = '';

    Object.keys(numbers).forEach((key) => {
        let li = document.createElement('li');
        li.textContent = `${numbers[key].person}: ${numbers[key].phone}`;
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', (e) => {
            fetch(`http://localhost:3030/jsonstore/phonebook/${key}`, { method: 'DELETE' });
        });

        li.appendChild(deleteBtn);
        phonebook.appendChild(li);
    });

}

attachEvents();
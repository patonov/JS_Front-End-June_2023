function addItem() {
    let value = document.querySelector("#newItemText").value;

    let item = document.createElement("li");
    item.textContent = value;

    let deleteButton = document.createElement("a");
    deleteButton.href = "#";
    deleteButton.textContent = "[Delete]";
    deleteButton.addEventListener('click', (e) => {
    e.target.parentElement.remove();    
    });

    item.appendChild(deleteButton);

    document.querySelector("ul").appendChild(item);
}
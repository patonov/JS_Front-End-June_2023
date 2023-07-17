function addItem() {
    let value = document.querySelector("#newItemText").value;

    document.querySelector("ul").innerHTML += `<li>${value}</li>`;
}
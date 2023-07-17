function deleteByEmail() {
    let mail = document.querySelector('input[name="email"]').value;
    let mailBoxes = Array.from(document.querySelectorAll("td:nth-child(even)"));

    let userMail = mailBoxes.find((box) => box.textContent === mail);
    let result = document.querySelector("#result");

    if (userMail){
        userMail.parentElement.remove();
        result.textContent = "Deleted.";
    } else {
        result.textContent = "Not found.";
    }
}
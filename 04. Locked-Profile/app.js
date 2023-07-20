function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const lockedRadioButton = e.currentTarget.parentElement.querySelector(
                'input[type="radio"]'
            );

            if (lockedRadioButton.checked){
                return;
            }

            const hiddenInfo = e.currentTarget.parentElement.querySelector("div");
            hiddenInfo.style.display = "block";
            e.currentTarget.textContent = "Hide it"
        });
    });
}
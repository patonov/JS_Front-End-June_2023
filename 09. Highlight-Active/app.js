function focused() {
    const inputArr = Array.from(document.querySelectorAll("input"));

    inputArr.forEach((input) => {
        input.addEventListener(("focus"), (e) => {
            e.target.parentElement.className = "focused";
        });

        input.addEventListener(("blur"), (e) => {
            e.target.parentElement.className = "";
        });
    });
}
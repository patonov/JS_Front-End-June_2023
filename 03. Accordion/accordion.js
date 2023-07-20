function toggle() {
    const content = document.querySelector("#extra");

    if (content.style.display !== "block"){
        content.style.display = "block";
        const button = document.querySelector("span.button");
        button.textContent = "Less";
    } else {
        content.style.display = "none";
        const button = document.querySelector("span.button");
        button.textContent = "More";
    }
}
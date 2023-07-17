function colorize() {
    let townRows = Array.from(document.querySelectorAll("tr:nth-child(even)"));

    townRows.forEach((t) => {
        t.style.background = "teal";
    });
}
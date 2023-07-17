function sumTable() {
    let prices = Array.from(document.querySelectorAll("td:nth-child(2)"));
    let total = prices.reduce((acc, cur) => {
        return acc + Number(cur.textContent);
    }, 0);

    document.querySelector("#sum").textContent = total;
}
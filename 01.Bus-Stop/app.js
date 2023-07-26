function getInfo() {
    const busStopId = document.querySelector("#stopId").value;
    let list = document.querySelector("ul");

    list.innerHTML = "";

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${busStopId}`)
    .then(res => res.json())
    .then((busStop) => {
        document.querySelector("#stopName").textContent = busStop.name;

        Object.entries(busStop.buses).map(([busNumber, timeInMunutes]) => {
            const item = document.createElement("li");

            item.textContent = `Bus ${busNumber} arrives in ${timeInMunutes} minutes`;
            list.appendChild(item);
            
        });
    }).catch(() => {
        document.querySelector("#stopName").textContent = "Error";
    });


}
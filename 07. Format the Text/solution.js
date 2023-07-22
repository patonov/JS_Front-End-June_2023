function solve() {
  const input = document.querySelector("#input").value.split(".");

  input.pop();

  let container = document.querySelector("#output");

  while (input.length > 0){
    let p = document.createElement('p');
    p.textContent = input.splice(0, 3).map((x) => x.trim()).join(". ");
    p.textContent += ".";
    container.appendChild(p);
  }


}
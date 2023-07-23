function solve() {
  let button = document.querySelector("#exercise button");
  button.addEventListener("click", AddInputParsedText);

  let buyButton = document.querySelector("#exercise button:nth-of-type(2)");
  buyButton.addEventListener("click", BuyItemsSelected);
  Array.from(document.querySelectorAll('input[type="checkbox"]')).forEach(
    (checkBox) => checkBox.removeAttribute("disabled"));


    function BuyItemsSelected(){
      let checkedBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')); 
      
      let cart = checkedBoxes.map((checkBox) => {
        let row = checkBox.parentElement.parentElement;
        let name = row.querySelector("td:nth-of-type(2)").innerText;
        let price = Number(row.querySelector("td:nth-of-type(3)").innerText);
        let decFactor = Number(row.querySelector("td:nth-of-type(4)").innerText);
    
        return {name, price, decFactor};
      });
      
      let reducedCart = cart.reduce((acc, curr) => {
        acc.names.push(curr.name);
        acc.price += curr.price;
        acc.averageDecFactor += curr.decFactor / checkedBoxes.length;
    
        return acc;
      }, {
        names: [],
        price: 0,
        averageDecFactor: 0,
      });
    
      
    
      let cartTextArea = document.querySelector("#exercise textarea:nth-of-type(2)");
      cartTextArea.value = `Bought furniture: ${reducedCart.names.join(", ")}\nTotal price: ${reducedCart.price.toFixed(2)}\nAverage decoration factor: ${reducedCart.averageDecFactor.toFixed(1)}`;
    } 
    
    
    function AddInputParsedText(){
      let input = JSON.parse(document.querySelector("#exercise textarea").value);
      let tableBody = document.querySelector("tbody");
    
      input.map((furniture) => {
        let row = document.createElement("tr");
        let imageCell = document.createElement("td");
        let imageContent = document.createElement("img");
        imageContent.src = furniture.img;
        imageCell.appendChild(imageContent);
    
        let nameCell = document.createElement("td");
        nameCell.textContent = furniture.name;
    
        let priceCell = document.createElement("td");
        priceCell.textContent = furniture.price;
    
        let decFactorCell = document.createElement("td");
        decFactorCell.textContent = furniture.decFactor;
    
        let checkCell = document.createElement("td");
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkCell.appendChild(checkBox);
    
        row.appendChild(imageCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(decFactorCell);
        row.appendChild(checkCell);
        return row;
    
      }).forEach((row) => tableBody.appendChild(row));
    
    }
}


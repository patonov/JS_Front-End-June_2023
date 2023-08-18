window.addEventListener("load", solve);

function solve() {
    
  const inputSelectors = {
    player: document.querySelector("#player"),
    score: document.querySelector("#score"),
    round: document.querySelector("#round"),
  };

  const selectors = {
    addBtn: document.querySelector("#add-btn"),
    sureList: document.querySelector("#sure-list"),
    scoreboardList: document.querySelector("#scoreboard-list"),
  };

  selectors.addBtn.addEventListener("click", addPlayer);

  function addPlayer(){
    if (Object.values(inputSelectors).some((selector) => selector.value === "")) {
      return;
    }

    const player = {
      name: inputSelectors.player.value,
      score: inputSelectors.score.value,
      round: inputSelectors.round.value,
    };

    let listItem = createElement("li", null, ["dart-item"], null);
      let article = createElement("article", null, [], null, listItem);
      createElement("p", player.name, [], null, article);
      createElement("p", `Score: ${player.score}`, [], null, article);
      createElement("p", `Round: ${player.round}`, [], null, article);

      let editBtn = createElement("button", "edit", ["btn", "edit"], null, listItem);
        editBtn.addEventListener("click", (e) => {
        inputSelectors.player.value = player.name;
        inputSelectors.score.value = player.score;
        inputSelectors.round.value = player.round;

        listItem.remove();

        selectors.addBtn.disabled = false;
        });

      let okBtn = createElement("button", "ok", ["btn", "ok"], null, listItem);
        okBtn.addEventListener("click", (e) => {
        selectors.scoreboardList.appendChild(listItem);
        editBtn.remove();
        okBtn.remove();
        selectors.addBtn.disabled = false;
      });

      selectors.sureList.appendChild(listItem);
      selectors.addBtn.disabled = true;
      Object.values(inputSelectors).forEach((selector) => selector.value = "");
  }




  function createElement(type, textContent, classes, id, parent){
    const element = document.createElement(type);

    if (textContent){
        element.textContent = textContent;
    }

    if (classes && classes.length > 0){
        element.classList.add(...classes);
    }

    if (id){
        element.setAttribute("id", id);
    }

    if (parent){
        parent.appendChild(element);
    }

    return element;
  }

}
  
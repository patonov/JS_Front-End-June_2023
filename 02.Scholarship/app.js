window.addEventListener("load", solve);

function solve() {
    let applicants = {};

    const inputSelectors = {
      student: document.querySelector("#student"),
      university: document.querySelector("#university"),
      score: document.querySelector("#score"),
    };

    const selectors = {
      nextBtn: document.querySelector("#next-btn"),
      previewList: document.querySelector("#preview-list"),
      candidatesList: document.querySelector("#candidates-list"),    
    };

    selectors.nextBtn.addEventListener("click", registerApplicant);

    function registerApplicant(){
      if (Object.values(inputSelectors).some((selector) => selector.value === "")) {
      return;
      }

      const applicant = {
        student: inputSelectors.student.value,
        university: inputSelectors.university.value,
        score: inputSelectors.score.value,
      };

      let listItem = createElement("li", null, ["application"], null);
      let article = createElement("article", null, [], null, listItem);
      createElement("h4", applicant.student, [], null, article);
      createElement("p", `University: ${applicant.university}`, [], null, article);
      createElement("p", `Score: ${applicant.score}`, [], null, article);

      let editBtn = createElement("button", "Edit", ["action-btn", "edit"], null, listItem);
      editBtn.addEventListener("click", (e) => {
        inputSelectors.student.value = applicant.student;
        inputSelectors.university.value = applicant.university;
        inputSelectors.score.value = applicant.score;

        listItem.remove();
      });

      let applyBtn = createElement("button", "Apply", ["action-btn", "apply"], null, listItem);
      applyBtn.addEventListener("click", (e) => {
        selectors.candidatesList.appendChild(listItem);
        editBtn.remove();
        applyBtn.remove();
      });

      selectors.previewList.appendChild(listItem);

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
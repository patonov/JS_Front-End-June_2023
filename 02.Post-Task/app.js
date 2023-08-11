window.addEventListener("load", solve);

function solve() {
    let tasks = {};

    const inputSelectors = {
        title: document.querySelector("#task-title"),
        category: document.querySelector("#task-category"),
        contents: document.querySelector("#task-content"),
    };

    const selectors = {
        publishBtn: document.querySelector("#publish-btn"),
        reviewList: document.querySelector("#review-list"),
        publishedList: document.querySelector("#published-list"),
    };

    selectors.publishBtn.addEventListener("click", publishTask);

    function publishTask(){
        if (Object.values(inputSelectors).some((selector) => selector.value === "")) {
            return;
        }
    
        const task = {
            title: inputSelectors.title.value,
            category: inputSelectors.category.value,
            contents: inputSelectors.contents.value,
        };
    
        let listItem = createElement("li", null, ["rpost"], null);
        let article = createElement("article", null, [], null, listItem);
        createElement("h4", task.title, [], null, article);
        createElement("p", `Category: ${task.category}`, [], null, article);
        createElement("p", `Content: ${task.contents}`, [], null, article);
    
        let editBtn = createElement("button", "Edit", ["action-btn", "edit"], null, listItem);
        editBtn.addEventListener("click", (e) => {
            inputSelectors.title.value = task.title;
            inputSelectors.category.value = task.category;
            inputSelectors.contents.value = task.contents;
    
            listItem.remove();
        });
    
        let postBtn = createElement("button", "Post", ["action-btn", "post"], null, listItem);
        postBtn.addEventListener("click", (e) => {
            selectors.publishedList.appendChild(listItem);
            editBtn.remove();
            postBtn.remove();
        });
    
        selectors.reviewList.appendChild(listItem);
    
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




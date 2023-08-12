let selectors = {
    appFormEditBtn: document.querySelector("#edit-course"),
    appFormAddBtn: document.querySelector("#add-course"),
    corseIdToEditt: "",
};


let inputs = {
    name: document.querySelector("#course-name"),
    type: document.querySelector("#course-type"),
    description: document.querySelector("#description"),
    teacher: document.querySelector("#teacher-name"),
};

let typesPermitted = ["Long", "Medium", "Short"];

let courses = {};

function attachEvents() {
    document.querySelector("#load-course").addEventListener("click", loadCourses);
    selectors.appFormEditBtn.addEventListener("click", editCourse);
    selectors.appFormAddBtn.addEventListener("click", addCourse); 
}

async function addCourse(e){
        e.preventDefault();

        if (Object.values(inputs).some(input => input.value === "")){
            return;
        }
        
       if (!typesPermitted.includes(inputs.type.value)){
        return;
       }
        
        let course = {
            name: inputs.name.value,
            type: inputs.type.value,
            description: inputs.description.value,
            teacher: inputs.teacher.value,
        };
        
        await fetch ("http://localhost:3030/jsonstore/tasks/", {
        method: "POST",
        body: JSON.stringify(course),
        });

        inputs.name.value = "";
            inputs.type.value = "";
            inputs.description.value = "";
            inputs.teacher.value = "";
           
        await loadCourses();
}

async function loadCourses(){
    courses = await (await fetch("http://localhost:3030/jsonstore/tasks/")).json();

    Object.values(courses).forEach((course) => {
        const coursesDiv = document.querySelector("#list");

        const individualCourseContainer = createElement("div", null, ["container"], null, coursesDiv);
        createElement("h2", course.name, [], null, individualCourseContainer);
        createElement("h3", course.teacher, [], null, individualCourseContainer);
        createElement("h3", course.type, [], null, individualCourseContainer);
        createElement("h4", course.description, [], null, individualCourseContainer);

        let editBtn = createElement("button", "Edit Course", ["edit-btn"], null, individualCourseContainer);
        editBtn.addEventListener("click", (e) => {
            inputs.name.value = course.title;
            inputs.type.value = course.type;
            inputs.description.value = course.description;
            inputs.teacher.value = course.teacher;
            selectors.corseIdToEditt = course._id;

            selectors.appFormEditBtn.disabled = false;
            
            individualCourseContainer.remove();

            selectors.appFormAddBtn.disabled = true;
        });

        let finishBtn = createElement("button", "Finish Course", ["finish-btn"], null, individualCourseContainer);
        finishBtn.addEventListener("click", (e) => {
            let courseToDelete = {
                name: course.title,
                type: course.type,
                description: course.description,
                teacher: course.teacher,
                courseId: course._id
            };
        
            fetch(`http://localhost:3030/jsonstore/tasks/${courseToDelete.courseId}`,{
                method: 'PUT',
                body: JSON.stringify(courseToDelete)
            }).then(() => {
                loadCourses();
        
                inputs.name.value = "";
                inputs.type.value = "";
                inputs.description.value = "";
                inputs.teacher.value = "";
            });
        

        });
    });
    selectors.appFormEditBtn.disabled = true;
}

async function editCourse(){
    
    let courseToEdit = {
        name: inputs.name.value,
        type: inputs.type.value,
        description: inputs.description.value,
        teacher: inputs.teacher.value,
        id: selectors.corseIdToEditt,
    };

    fetch(`http://localhost:3030/jsonstore/tasks/${courseToEdit.id}`,{
        method: 'PUT',
        body: JSON.stringify(courseToEdit)
    }).then(() => {
        loadCourses();

        inputs.name.value = "";
        inputs.type.value = "";
        inputs.description.value = "";
        inputs.teacher.value = "";
        selectors.corseIdToEditt = "";
    });


    selectors.appFormEditBtn.disabled = true;
    selectors.appFormAddBtn.disabled = false;
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

attachEvents();
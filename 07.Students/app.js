function attachEvents() {
  window.addEventListener("load", loadStudentsFromDb);
  document.querySelector("#submit").addEventListener("click", addNewStudent);
}

async function addNewStudent(){
  const firstName = document.querySelector('.inputs input[name="firstName"]').value;
  const lastName = document.querySelector('.inputs input[name="lastName"]').value;
  const facultyNumber = document.querySelector('.inputs input[name="facultyNumber"]').value;
  const grade = document.querySelector('.inputs input[name="grade"]').value;

  const link = "http://localhost:3030/jsonstore/collections/students";
  fetch(link, {
    method: "POST",
    body: JSON.stringify( { firstName, lastName, facultyNumber, grade } ),
  });

  loadStudentsFromDb();
}

async function loadStudentsFromDb(){
  const link = "http://localhost:3030/jsonstore/collections/students";
  let students = await (await fetch(link)).json();

  for (const { firstName, lastName, facultyNumber, grade } of Object.values(students)) {
        
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = firstName;

    const lastNameCell = document.createElement("td");
    lastName.textContent = lastName;

    const facultyNumCell = document.createElement("td");
    facultyNumCell.textContent = facultyNumber;
    
    const gradeCell = document.createElement("td");
    gradeCell.textContent = grade;

    const row = document.createElement("tr");
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(facultyNumCell);
    row.appendChild(gradeCell);

    document.querySelector("tbody").appendChild(row);    
  }


}

attachEvents();
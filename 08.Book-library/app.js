function attachEvents() {
    document.querySelector("#form button").addEventListener("click", handleUpdate);
    document.querySelector("#loadBooks").addEventListener("click", loadBooks);
}

async function loadBooks(){
  let books = await (await fetch("http://localhost:3030/jsonstore/collections/books")).json();
  Object.entries(books).forEach(createAndAppendElement);
}

function createAndAppendElement(id, book){
  const title = document.createElement("td");
  title.textContent = book.title;

  const author = document.createElement("td");
  author.textContent = author.title;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", fillEditForm);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", deleteBook);
  
  const buttons = document.createElement("td");
  buttons.appendChild(editBtn);
  buttons.appendChild(deleteBtn);

  const row = document.createElement("tr");
  row.appendChild(title);
  row.appendChild(author);
  row.appendChild(buttons);

  document.querySelector("tbody").appendChild(row);
}

async function fillEditForm(e){
  const title = e.currentTarget.parentElement.parentElement.querySelector("td:first-child").textContent;
  const author = e.currentTarget.parentElement.parentElement.querySelector("td:nth-child(2)").textContent;

  document.querySelector("h3").textContent = "Edit FORM";
  document.querySelector('#form input[name="title"]').value = title;
  document.querySelector('#form input[name="author"]').value = author;

  document.querySelector('#form button]').setAttribute('data-bookid', e.currentTarget.dataset.bookid);
}

async function handleUpdate(){
  const isEdited = document.querySelector("h3").textContent.includes("Edit");
  isEdited ? updateBook(e) : saveBook(e);
}

async function deleteBook(){
  let bookId = e.currentTarget.dataset.bookid;

  fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
    method: "DELETE",
  });
}

async function updateBook(e){
  let bookId = e.currentTarget.dataset.bookid;
  const title = document.querySelector('#form input[name="title"]').value;
  const author = document.querySelector('#form input[name="author"]').value;

  fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
    method: "PUT",
    body: JSON.stringify( { title, author } ),
  });
}

async function saveBook(){
  const title = document.querySelector('#form input[name="title"]').value;
  const author = document.querySelector('#form input[name="author"]').value;

  if (!author || !title){
    return;
  }

  fetch("http://localhost:3030/jsonstore/collections/books", {
    method: "POST",
    body: JSON.stringify( { title, author } ),
  });
}

attachEvents();
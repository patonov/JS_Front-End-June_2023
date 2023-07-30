function attachEvents() {
    document.querySelector("#refresh").addEventListener("click", getMessages);
    document.querySelector("#submit").addEventListener("click", sendMessages);


}

async function sendMessages(){
    const author = document.querySelector('input[name="author"]').value;
    const content = document.querySelector('input[name="content"]').value;

    fetch("http://localhost:3030/jsonstore/messenger", {
        method: "POST",
        body: JSON.stringify( {author, content} ),
    });
}

async function getMessages(){
    const messages = await (await fetch("http://localhost:3030/jsonstore/messenger")).json();
    
    let messageBox = document.querySelector("#messages");
    messageBox.textContent = "";

    Object.values(messages).forEach((message) => {
    messageBox.textContent += `${message.author}: ${message.content}\n`;
    });
    
}

attachEvents();
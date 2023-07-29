let posts;

function attachEvents() {
    
    document.querySelector("#btnLoadPosts").addEventListener("click", loadPosts);
    document.querySelector("#btnViewPost").addEventListener("click", loadSinglePost);

}

async function loadSinglePost(){
    const result = await (await fetch("http://localhost:3030/jsonstore/blog/comments")).json();

    const selectedPost = posts[document.querySelector("#posts").value];

    const comments = Object.values(result).filter(comment => 
        comment.postId === selectedPost.id);
    
    const title = document.querySelector("#post-title");
    title.textContent = selectedPost.title;
    
    const textBody = document.querySelector("#post-body")
    textBody.innerHTML = selectedPost.body;
    
    let commentList = document.querySelector("#post-comments");
    commentList.innerHTML = "";

    Object.values(comments).forEach((comment) => {
        const item = document.createElement("li");
        item.textContent = comment.text;
        commentList.appendChild(item);
    });
}

async function loadPosts(){
    const result = await (await fetch("http://localhost:3030/jsonstore/blog/posts")).json();
    posts = result;

    const postDropdown = document.querySelector("#posts");
    postDropdown.innerHTML = "";

    Object.values(result).forEach((post) => {
        const option = document.createElement("option");
        option.value = post.id;
        option.text = post.title;

        postDropdown.appendChild(option);
    });
}

attachEvents();
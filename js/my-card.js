let titleForm = document.querySelector('#title-post');
let bodyForm = document.querySelector('#body-post');
let formPage = document.querySelector('#form-page');
let postHolder = document.querySelector('#post-holder')


let postBox = [];

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            console.log(postBox)
                //    console.log(data)
            postBox = data
            renderUI(postBox)
        })


}

getPosts();



function createPost(e) {
    e.preventDefault();
    console.log('title-post', titleForm.value);
    console.log('body-post', bodyForm.value);
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                titleForm: titleForm.value,
                bodyForm: bodyForm.value,
                userId: 2
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            postBox.unshift(data);
            console.log(postBox)
            let postHolder = '';
            postBox.forEach(post => {
                postHolder += `
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <p>${post.id}</p>
                            <h6 class="post-title">${post.title}</h6>
                            <p class="post-body">${post.body}</p>
                            <div class="d-flex justify-content-between">
                            <button class="btn btn-success" id="view-btn" onclick="openSingle(${post.id})">view</button>
                                <button class="btn btn-primary" onclick="updatePost(${post.id})">Update</button>
                                <button class="btn btn-danger" onclick="deletePost(${post.id})">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
            });
            postHolder.innerHTML = postHolder;
        })
}

formPage.addEventListener('submit', createPost);


function updatePost(id) {
    console.log(id)

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                titleForm: titleForm.value,
                bodyForm: bodyForm.value,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            let postTitles = document.querySelectorAll('.post-title') // 100 post titles [0 -99]
            let postBodies = document.querySelectorAll('.post-body')
            console.log(postTitles)
            postTitles.forEach((postTitle, index) => {
                if (index + 1 === id) {
                    if (data.titleForm !== "") {
                        postTitle.innerHTML = data.titleForm
                    }
                }

            })

            postBodies.forEach((postBody, index) => {
                if (index + 1 === id) {
                    if (data.bodyForm !== "") {
                        postBody.innerHTML = data.bodyForm
                    }
                }

            })

        });
}



function deletePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            postBox = postBox.filter(post => post.id !== id)
            console.log(postBox)
                // use a function to display the UI
            renderUI(postBox)
        })

}

function openSingle(id) {
    console.log(id)
    localStorage.setItem('singleton', id)
    window.location.href = 'Blog.html'
}

function renderUI(arr) {
    let myHolder = '';
    arr.forEach(post => {
        myHolder += `
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <p>${post.id}</p>
                                <h6 class="post-title">${post.title}</h6>
                                <p class="post-body">${post.body}</p>
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-success" id="view-btn" onclick="openSingle(${post.id})">view</button>
                                    <button class="btn btn-primary" onclick="updatePost(${post.id})">Update</button>
                                    <button class="btn btn-danger" onclick="deletePost(${post.id})">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `
    });
    postHolder.innerHTML = myHolder;

}
let layOut = document.querySelector('.single-card');
let url = 'https://jsonplaceholder.typicode.com/posts';


let singleLady = localStorage.getItem('.singleton');
console.log(singleLady);

let postTitle = document.querySelector('.post-title');
let postBody = document.querySelector('.post-body');

function singleMan(id) {
    let singleMan = url + '/' + id;
    fetch(singleMan)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            postTitle.innerHTML = data.title;
            postBody.innerHTML = data.body;
        });
}


singleMan(singleLady);
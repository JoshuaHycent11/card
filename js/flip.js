let team = [
    { name: 'Goodness Adedoja', track: 'Website Developer', food: ' fried rice', sex: 'Female', pic: 'lady-white.png' },
    { name: 'Victor', track: 'Website Developer', food: 'fried rice', sex: 'Male', pic: 'laughing.png' },
    { name: 'Great Pam', track: 'Website Developer', food: 'Egusi Soup and garri', sex: 'Male', pic: 'Rectangle 19.png' },
    { name: 'Oguchukwu', track: 'Website Developer', food: 'Afang soup and fufu', sex: 'Male', pic: 'Rectangle 19.png' },
]

let row = document.querySelector('.room')
let cardHolder = ''
team.forEach((person) => {
    cardHolder += `     
            <div class="flip col-lg-3">
                    <div class="card">
                        <img src="./images/${person.pic}" class="img-fluid" alt="...">
                        <div class="card-body ">
                            <h4 class="name">${person.name}</h4>
                            <p class="track">${person.track}</p>
                            <p class="sex">${person.sex}</p>
                            <p class="food">${person.food}</p>

                        </div>
                    </div>
                </div>
           
           `
})

row.innerHTML = cardHolder
Const = BASE_URL = "http://127.0.0.1:3000/"

function storeGameFetch(game){
fetch(`${BASE_URL}/games`, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: (JSON.stringify(game))
})
.then(resp => resp.json())
.then(newGame => {
    newGame.id = game.id
})
}

function getGamesFetch(){
fetch(`${BASE_URL}/games`)
        .then(resp => resp.json())
        .then(games => {
            let sorted = games.sort((a, b) => {
                return b.score - a.score
            });
            sorted.forEach((g) => {
                let list = document.querySelector('#scores-list')
                
                list.innerHTML +=
                `
                <li>${g.user.name} scored: ${g.score}</div>
                `   
           })
        }) 
}

function saveUserFetch(user){
fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(newUser => {
        user.id = newUser.id 
        document.querySelector('#name').value='';
        })
}
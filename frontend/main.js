document.addEventListener('DOMContentLoaded', () => {
    
    alert("Please register your name, then press Play. Happy Whacking!")
    
    userForm.addEventListener("submit", () => {
        event.preventDefault();
        user.fromForm();
        saveUserFetch(user)   
        console.log(user)
        playButton.addEventListener('click', () => {
            let game = new Game();
            game.play();
        })

        resetButton.addEventListener('click', () =>{
            location.reload();
            console.log(game)
        })
    })
    scoresButton.addEventListener('click', () =>{
        getGamesFetch();

    })
})
    let user = new User();
    const userForm = document.querySelector('.register')
    const playButton = document.querySelector('#play-button') 
    const resetButton = document.querySelector('#restart-button')
    const scoresButton = document.querySelector('#scores')
   
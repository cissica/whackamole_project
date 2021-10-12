document.addEventListener('DOMContentLoaded', () => {
    
    alert("Please register your name, then press Play. Happy Whacking!")
    
    userForm.addEventListener("submit", () => {
        event.preventDefault();
        user.fromForm();
        saveUserFetch(user)   
        playButton.addEventListener('click', () => {
            let game = new Game();
            game.play();
            playButton.disabled = true
            console.log(game)
        })

        resetButton.addEventListener('click', () =>{
            location.reload();
        })
    })
    scoresButton.addEventListener('click', () =>{
        getGamesFetch();
        scoresButton.disabled = true;
    })
})
    let user = new User();
    const userForm = document.querySelector('.register')
    const playButton = document.querySelector('#play-button') 
    const resetButton = document.querySelector('#restart-button')
    const scoresButton = document.querySelector('#scores')
   
class Game{
    constructor(id, score, user_id){
        this.score = score 
        this.user_id = user_id
        this.id = id
    }

    play(){
        console.log(this)
        const square = document.querySelectorAll('.square')
        let timeLeft = document.querySelector('#time-left')
        let score = document.querySelector('#score')
        let currentTime = timeLeft.textContent
        let result = 0
        let hitPosition = null
        this.user_id = user.id
        let game = this
        function randomSquare() {
        square.forEach(className => {
            className.classList.remove('mole')
        })
        let randomPosition = square[Math.floor(Math.random() * 9)]
        randomPosition.classList.add('mole')
        hitPosition = randomPosition.id
        }

        square.forEach(id => {
            id.addEventListener('mouseup', () => { 
                if(id.id === hitPosition){
                    result = result + 1
                    score.textContent = result
                }
                this.score = result
            })
        })

        function moveMole() {
            let timerId = null
            timerId = setInterval(randomSquare, 700)
        }


        function countDown() {
            currentTime--
            timeLeft.textContent = currentTime

            
            if(currentTime === 0){
                clearInterval(timerId)
                storeGameFetch(game)
                alert("Game Over! Your final score is " + result)

                location.reload();
                }
            }
        moveMole();
        let timerId = setInterval(countDown, 1000)
        
        }

}
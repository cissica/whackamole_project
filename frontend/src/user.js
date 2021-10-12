class User{
    constructor(id, username){
       
        this.username = username
        this.id = id
    }

    welcomeUser(){
        let header = document.querySelector('#usersname')
        const userName = this.name
        header.innerHTML +=  ` Welcome, ${userName}.`
    }

    fromForm(){
        let username = document.getElementById("name").value 
        this.username = username 
    }

}
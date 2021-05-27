class User{
    constructor(id, name){
       
        this.name = name
        this.id = id
    }

    welcomeUser(){
        let header = document.querySelector('#usersname')
        const userName = this.name
        header.innerHTML +=  ` Welcome, ${userName}.`
    }

    fromForm(){
        // const userForm = document.querySelector('.register')
        let name = document.getElementById("name").value 
        this.name = name 
        
    }

}
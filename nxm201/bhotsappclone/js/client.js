const socket = io("http://localhost:8000");
const name  = prompt( "enter your name to join")
socket.emit("new-user-joined", name)
const form = document.getElementById("sendcontaienr");
const messageinput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container")
const append = (message,position)=>{
        const messageele = document.createElement('div');
        messageele.innerText = message;
        messageele.classList.add('message')
        messageele.classList.add(position)

}




socket.on("user_joined",name=>{
    append(`${name} joined the chat`)

})
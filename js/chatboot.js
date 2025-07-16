document.getElementById('send-btn').addEventListener('click',sendMessage);
document.getElementById('user-input').addEventListener('keypress',function(e){
    if(e.key ==='Enter'){
        sendMessage();
    }
});
function sendMessage(){
    const inputField = document.getElementById('user-input');
    const userInput = inputField.value;
    if(userInput.trim() !== ''){
        displayMessage(userInput,'user');
        inputField.value = '';
        getBotResponse(userInput);
    }
}
function displayMessage(message,sender){
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message',sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
function getBotResponse(userInput){
    let botResponse = '';
    if(userInput.toLowerCase().includes('hola')){
        botResponse = '!Hola! ¿En que te puedo ayudar?';
    }
    else if(userInput.toLowerCase().includes('informacion')){
        botResponse = 'Necesitas informacion? elige una opción: 1. Area1, 2. Area2, 3. Area3';       
    }
    else if(userInput.toLowerCase().includes('1')){
        botResponse = '1. información1: ';
    }
    else if(userInput.toLowerCase().includes('2')){
        botResponse = '2. información: ';
    }
    else if(userInput.toLowerCase().includes('c++')){
        botResponse = 'C++ es un lenguaje orientado a objetos, excelente para aprender a programar: ';
    }
    else if(userInput.toLowerCase().includes('adios')){
        botResponse = 'Adios que tengas un lindo dia: ';
    }
    else{
        botResponse = 'Lo siento no entiendo tu pregunta.';
    }
    setTimeout(()=>{
        displayMessage(botResponse,'bot');
    }, 1000);

}

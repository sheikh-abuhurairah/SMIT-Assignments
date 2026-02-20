function changeText() {
    var headingElement = document.getElementById('text');
    headingElement.innerText = 'Hello DOM';
}

function updateText() {
    var paragraphElement = document.getElementById('para');
    paragraphElement.innerText = 'Text updated using DOM';
}

function showName() {
    var inputElement = document.getElementById('name');
    var resultElement = document.getElementById('result');
    var nameValue = inputElement.value;
    resultElement.innerText = nameValue;
}

setTimeout(function() {
    var messageElement = document.getElementById('msg');
    messageElement.innerText = 'Welcome to JavaScript';
}, 2000);

function changeMessage() {
    var messageElement = document.getElementById('message');
    messageElement.innerText = 'Button Clicked';
}
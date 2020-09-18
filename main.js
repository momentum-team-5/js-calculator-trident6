let button = document.querySelector('.main-container')
button.addEventListener('click', function(event) {
    console.log('CLICKED!!!')
    console.log('button', event.target.id, 'clicked')
    let messageDiv = document.querySelector('.message')
    let messagePara = document.createElement('p')

    // let text = document.createTextNode('Hello There!')

    messagePara.innerText = event.target.id
        // messagePara.innerText = 'Hello There!'
    messageDiv.appendChild(messagePara)
})
let button = document.querySelector('.main-container')
let input = ''
let output = ''

button.addEventListener('click', function(event) {
    let messageDiv = document.querySelector('.message')
    let messagePara = document.createElement('p')
    target = event.target.id

    function clearMessage() {
        let messageDiv = document.getElementById('message')
        let messageParaOld = messageDiv.getElementsByTagName('p')[0]
        messageDiv.removeChild(messageParaOld)
    }

    if (target === '=') {
        clearMessage()
            // let messageDiv = document.getElementById('message')
            // let messageParaOld = messageDiv.getElementsByTagName('p')[0]
            // messageDiv.removeChild(messageParaOld)
        output = eval(input)
        console.log('equal')
        console.log(output)
    }
    if (target === 'C') {
        clearMessage()
            // let messageDiv = document.getElementById('message')
            // let messageParaOld = messageDiv.getElementsByTagName('p')[0]
            // messageDiv.removeChild(messageParaOld)
        output = ''
        input = ''
        console.log(input)
        console.log('clear')
    }
    if ((target !== 'C') && (target !== '=')) {
        clearMessage()
            // let messageDiv = document.getElementById('message')
            // let messageParaOld = messageDiv.getElementsByTagName('p')[0]
            // messageDiv.removeChild(messageParaOld)
        input += target
        output = input
        console.log('if3')
        console.log(input)
    }
    messagePara.innerText = output
    messageDiv.appendChild(messagePara)

})
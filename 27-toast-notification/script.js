const button = document.getElementById('btn') 
const toasts = document.getElementById('toasts') 

const messages = [
    'Hello',
    'Hola',
    'Bonjour',
    'Konnichiwa',
    'Hallo',
    'Annyeonghaseyo',
    'Namaste',
    'Ciao',
    'Shalom',
    'Privet',
    'Ni hao',
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}
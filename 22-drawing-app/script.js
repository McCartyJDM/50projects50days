const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

var w = canvas.width, h = canvas.height

let size = 10
let isPressed = false
let color = 'black'
let x
let y

window.addEventListener('resize', setCanvasSize)

setCanvasSize()

function setCanvasSize() {
    let temp = ctx.getImageData(0,0,w,h)
    w = canvas.width, h = canvas.height
    if(window.innerWidth <= 700 && window.innerWidth > 500) {
        canvas.width = 450
        canvas.height = 450
        ctx.putImageData(temp,0,0)
    } else if (window.innerWidth <= 500) {
        canvas.width= 350
        canvas.height = 350
        ctx.putImageData(temp,0,0)
    } else {
        canvas.width = 600
        canvas.height = 600
        ctx.putImageData(temp,0,0)
    }
}

canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

colorEl.addEventListener('change', (e) => color = e.target.value)

increaseBtn.addEventListener('click', () => {
    size += 5
    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5
    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))



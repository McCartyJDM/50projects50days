const smallCups = document.querySelectorAll('.cup-small')
const percentage = document.getElementById('percentage')
const remaining = document.getElementById('remaining')
const units = document.getElementById('units')

// checkUnitSystem()
updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') && 
    !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }


    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remaining.style.visibility = 'hidden'
        remaining.style.height = 0
    } else {
        remaining.style.visibility = 'visible'
        units.innerText = `${2 - (250 * fullCups / 1000)}L`

    }
}

// button.addEventListener('click', () => {})
// const unitSystem = btn.addEventListener('click', ()querySelectorAll('btn')
// const button = document.getElementsByClassName('btn')
// Take click event on Imperial or Metric and switch values of .cup.cup-small, units, h2 to matching system
// 2 Liters is roughly 1/2 gallon or 8 cups
// Let's display 8 cups or number of cups remaining

//change h2, .cup.cup-small and units

// Cups remaining will be 8 cups

// Need to select span element and change to cups

// Take click 



// function checkUnitSystem() {

// }

 

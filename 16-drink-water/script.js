const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remaining = document.getElementById('remaining')


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
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}


// Take click event on Imperial or Metric and switch values of .cup.cup-small and #liters to #cups
// 2 Liters is roughly 1/2 gallon or 8 cups
// Let's display 8 cups or number of cups remaining

// Cups remaining will be 8 cups

// Need to select span element and change to cups
function unitSystem() {

}

 

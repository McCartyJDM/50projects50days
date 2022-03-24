const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1621867430691-20e5e38b41e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Cape Hatteras lighthouse">'
    title.innerHTML = "Cape Hatteras Light"
    excerpt.innerHTML = 'Explore the sandy beaches of the Outer Banks. Visit Cape Hatteras light.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/44.jpg" alt="">'
    name.innerHTML = 'John Lighthaus'
    date.innerHTML = 'Mar. 24, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}

# Dad Jokes
## Day 10 - Thursday Mar. 10th, 2022
I altered the Dad Jokes exercise with a comedy club background and a mustachioed dad telling jokes.

![Demo of Dad Jokes exercise](demo.gif)

<div class="codepen" data-height="514" data-theme-id="dark" data-default-tab="result" data-slug-hash="yLPmprz" data-user="mccartyjdm"  data-prefill='{"title":"Dad Jokes","description":"I altered the #50Projects50Days Dad Jokes exercise with a comedy club background and a mustachioed dad telling jokes.\nDad Jokes API from https://icanhazdadjoke.com/api\nText Bubble from @Founds Codepen: https://codepen.io/Founts/pen/AJyVOr","tags":[],"scripts":[],"stylesheets":[]}'>
  <pre data-lang="html">&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge">
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    &lt;link rel="stylesheet" href="styles.css">
    &lt;title>Dad Jokes&lt;/title>
&lt;/head>
&lt;body>
    &lt;div class="container">
        
        &lt;div class="talk-bubble tri-right border round btm-left-in">
            &lt;div class="talktext">
              &lt;h3>Hey son, want to hear a joke?&lt;/h3>
            &lt;/div>
        &lt;/div>
        &lt;img src="https://cdn-icons-png.flaticon.com/512/3409/3409701.png" alt="A dad with silly glasses and mustache">
        &lt;div id="joke" class="joke">&lt;/div>
        &lt;button id="jokeBtn" class="btn">Tell Me Another&lt;/button>
        &lt;a href="https://www.flaticon.com/free-icons/joke" title="joke icons">Joke icons created by Freepik - Flaticon&lt;/a>
    &lt;/div>
    &lt;script src="script.js">&lt;/script>
&lt;/body>
&lt;/html></pre>
  <pre data-lang="css">@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

body {
    background-color: #686;
    background: url('https://images.unsplash.com/photo-1611956425642-d5a8169abd63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1511&q=80');
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 20px;
}

.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
    padding: 20px 20px;
    text-align: center;
    max-width: 100%;
    width: 500px;
}

.joke {
    font-size: 25px;
    line-height: 30px;
    margin: 10px auto;
    max-width: 500px;
}

.btn {
    background-color: #333;
    color: #fff;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
    padding: 14px 40px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
}

.btn:active {
    transform: scale(.98);
}

.btn:focus {
    outline: 0;
}

a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin-top: 1em;
}

/* Text Bubble from Codepen: https://codepen.io/Founts/pen/AJyVOr */
/* talk bubble contents */
.talktext {
    padding: 0.1em;
    text-align: center;
}

/* CSS talk bubble */
.talk-bubble {
	margin-left: 43%;
    margin-bottom: 5%;
    display: block;
    position: relative;
	width: 200px;
	height: auto;
	background-color: lightyellow;
}

.border{
  border: 8px solid #777;
}
.round{
  border-radius: 30px;
}

/*Right triangle, placed bottom left side slightly in*/
.tri-right.border.btm-left-in:before {
	content: '';
	position: absolute;
	width: 0;
	height: 0;
	left: 30px;
    right: auto;
    top: auto;
	bottom: -42px;
	border: 20px solid;
	border-color: #777 transparent transparent #777;
}
.tri-right.btm-left-in:after{
	content: '';
	position: absolute;
	width: 0;
	height: 0;
	left: 38px;
    right: auto;
    top: auto;
	bottom: -20px;
	border: 12px solid;
	border-color: lightyellow transparent transparent lightyellow;
}

img {
    width: 100px;
    height: 100px;
}

h3 {
    font-size: 15px;
}
  </pre>
  <pre data-lang="js">const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const config =  {
        headers: {
            'Accept': 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com',
    config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}</pre></div>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

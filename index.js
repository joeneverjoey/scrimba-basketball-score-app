let home = 0
let homeScoreDisplay = document.querySelector("#home-score")
let homePlus1 = document.querySelector("#home-1")
let homePlus2 = document.querySelector("#home-2")
let homePlus3 = document.querySelector("#home-3")

let guest = 0
let guestScoreDisplay = document.querySelector("#guest-score")
let guestPlus1 = document.querySelector("#guest-1")
let guestPlus2 = document.querySelector("#guest-2")
let guestPlus3 = document.querySelector("#guest-3")

let newGame = document.querySelector("#start-over")

function addToScore(side, amount) {
    if(side === "home") {
        home += amount
        homeScoreDisplay.innerText = home
    } else {
        guest += amount
        guestScoreDisplay.innerText = guest
    }
    
    highlightTeamInLead()
}

function highlightTeamInLead() {
    if(home > guest) {
        homeScoreDisplay.style.color = "green"
        guestScoreDisplay.style.color = "red"
    } else if(home === guest) {
        homeScoreDisplay.style.color = "orange"
        guestScoreDisplay.style.color = "orange"
    } else {
        homeScoreDisplay.style.color = "red"
        guestScoreDisplay.style.color = "green"
    }
}

homePlus1.addEventListener("click", () => {addToScore("home", 1)})
homePlus2.addEventListener("click", () => {addToScore("home", 2)})
homePlus3.addEventListener("click", () => {addToScore("home", 3)})

guestPlus1.addEventListener("click", () => {addToScore("guest", 1)})
guestPlus2.addEventListener("click", () => {addToScore("guest", 2)})
guestPlus3.addEventListener("click", () => {addToScore("guest", 3)})

newGame.addEventListener("click", () => {
    home = 0
    guest = 0
    homeScoreDisplay.innerText = home
    guestScoreDisplay.innerText = guest
    homeScoreDisplay.style.color = "orange"
    guestScoreDisplay.style.color = "orange"
})
let countdown = document.getElementById("countdown")
let endDate = new Date(2026, 11, 12, 18, 30, 0)

function updateCountdown(){
    let timeDiff = endDate - Date.now()

     if (timeDiff <= 0) {
        countdown.textContent = "Ended!"
        return
    }

    let weeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7))
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) - weeks * 7
    let hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24
    let minutes = Math.floor(timeDiff / (1000 * 60)) % 60
    let seconds = Math.floor(timeDiff / 1000) % 60

    countdown.innerHTML = `
<div class="countdown-number"><span class="number">${weeks}</span>Weeks</div>
<div class="divider"></div>
<div class="countdown-number"><span class="number">${days}</span>Days</div>
<div class="divider"></div>
<div class="countdown-number"><span class="number">${hours}</span>Hours</div>
<div class="divider"></div>
<div class="countdown-number"><span class="number">${minutes}</span>Minutes</div>
<div class="divider"></div>
<div class="countdown-number"><span class="number">${seconds}</span>Seconds</div>`
}

updateCountdown()
setInterval(updateCountdown, 1000)
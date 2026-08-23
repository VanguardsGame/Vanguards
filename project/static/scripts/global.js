let countdown = document.getElementById("countdown")
let endDate = new Date(2026, 11, 12, 19, 30, 0)

function updateCountdown(){
    let timeDiff = endDate - Date.now()

     if (timeDiff <= 0) {
        countdown.textContent = "Ended!"
        return
    }

    let months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30))
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) - months * 30
    let hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24
    let minutes = Math.floor(timeDiff / (1000 * 60)) % 60
    let seconds = Math.floor(timeDiff / 1000) % 60

    countdown.innerHTML = `
<div class="countdown-number"><span class="number">${months}</span>Months</div>
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
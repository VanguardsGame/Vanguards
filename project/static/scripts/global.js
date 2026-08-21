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

    countdown.innerHTML = `<span class="number">${months}</span>M
<span class="number">${days}</span>d
                            <span class="number">${hours}</span>h 
                            <span class="number">${minutes}</span>m 
                            <span class="number">${seconds}</span>s`
}

updateCountdown()
setInterval(updateCountdown, 1000)
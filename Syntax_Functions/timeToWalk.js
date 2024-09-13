function timeToWalk(steps, metres, kmh) {

    let totalDistance = steps * metres;
    let speedMS = (kmh * 5) / 18;
    let timeWalking = totalDistance / speedMS;
    let totalTimeWalking = ((Math.floor(totalDistance / 500)) * 60) + timeWalking
    let seconds = Math.round(totalTimeWalking % 60);
    let minutes = Math.floor((totalTimeWalking / 60) % 60);


    let hours = Math.floor(totalTimeWalking / 60 / 60);
    let hoursToPrint = hours;
    let minutesToPrint = minutes;
    let secondsToPrint = seconds;

    if (hours < 10) {
        hoursToPrint = `0${hours}`
    }
    if (minutes < 10) {
        minutesToPrint = `0${minutes}`
    }
    if (seconds < 10) {
        secondsToPrint = `0${seconds}`
    }

    console.log(`${hoursToPrint}:${minutesToPrint}:${secondsToPrint}`);
    
}

timeToWalk(158564, 0.70, 5.5)
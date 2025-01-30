const currenTime = document.getElementById("currentTime");

function updateTime() {
    const currentTime = new Date();
    const utcTime = currentTime.toUTCString();
    currenTime.innerText = utcTime;
}

// To Update the time every second
setInterval(updateTime, 1000);


updateTime();

function printtime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printtime,1000);
setInterval(() => {
    d = new Date()
    htime = d.getHours()
    mtime = d.getMinutes()
    sntime = d.getSeconds()
    //rotation calculate
    hrotation = 30 * htime + mtime / 2
    mrotation = 6 * mtime
    snrotation = 6 * sntime



    //css satting
    hour.style.transform=`rotate(${ hrotation}deg)`
    minute.style.transform=`rotate(${ mrotation}deg)`
    second.style.transform=`rotate(${ snrotation}deg)`

}, 1000);




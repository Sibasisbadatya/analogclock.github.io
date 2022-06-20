


setInterval(() => {
    var date = new Date();
    var htime = date.getHours();
    var stime = date.getSeconds();
    var mtime = date.getMinutes();

    var hrotation = 30 * htime + mtime / 2;
    var srotation = stime * 6;
    var mrotation = mtime * 6;

    hourhand.style.transform = ` rotate(${hrotation}deg)`;
    minhand.style.transform = ` rotate(${mrotation}deg)`;
    sechand.style.transform = ` rotate(${srotation}deg)`;
}, 1000);

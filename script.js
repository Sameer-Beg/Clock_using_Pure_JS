
    setInterval(() => {
        d = new Date();
        htime = d.getHours();  // here htime mean hour time
        mtime = d.getMinutes();  // here mtime means minutes time
        stime = d.getSeconds();  // here stime mean is secound time 
        hrotation = 30*htime + mtime/2;
        mrotation = 6*mtime;
        srotation = 6*stime;
    
        hour.style.transform = `rotate(${hrotation}deg)`;
        minute.style.transform = `rotate(${mrotation}deg)`;
        second.style.transform = `rotate(${srotation}deg)`;
    }, 1000);
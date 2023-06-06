function showDate()   {
    let out = document.getElementById ('current-date');
    out.style.color="red"
    out.style.fontSize="25px"
    let today = new Date();
    out.innerHTML = "Дата и время для русской локали:  " + today.toLocaleString('ru-RU');
    let outt = document.getElementById ('current-date2');
    outt.style.color="red"
    outt.style.fontSize="25px"
    let todayy = new Date();
    outt.innerHTML = "Дата и время для США:  " + todayy.toLocaleString('en-US');
    let outtt = document.getElementById ('current-date3');
    outtt.style.color="red"
    outtt.style.fontSize="25px"
    let todayyy = new Date();
    outtt.innerHTML = "Дата и время для Австралии:  " + todayyy.toLocaleString('en-AU');
    let outttt = document.getElementById ('current-date4');
    outttt.style.color="red"
    outttt.style.fontSize="25px"
    let todayyyy = new Date();
    outttt.innerHTML = "Дата и время для Германии:  " + todayyyy.toLocaleString('de');
    let outtttt = document.getElementById ('current-date5');
    outtttt.style.color="red"
    outtttt.style.fontSize="25px"
    let todayyyyy = new Date();
    outtttt.innerHTML = "Дата и время для Испании:  " + todayyyyy.toLocaleString('es');
    let outtttttt = document.getElementById ('current-date6');
    outttttt.style.color="red"
    outttttt.style.fontSize="25px"
    let todayyyyyyy = new Date();
    outtttttt.innerHTML = "Дата и время для Франции:  " + todayyyyyyy.toLocaleString('fr');
}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor (daysCount);
    document.getElementById('dt').innerHTML = 'количество дней с даты рождения:' + daysCount;
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime,1000);
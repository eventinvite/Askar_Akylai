const day = document.getElementById('day');
const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const currentYear = new Date().getFullYear();

const newYear = new Date(`29 jun ${currentYear} 19:00:00`);
console.log(newYear)
function countDownTimer()   {
    const todayDate = Date.now()

    const gap = newYear - todayDate;
    const d = Math.floor(gap / 1000 / 60 / 60 / 24)
    const h = Math.floor((gap / 1000 / 60 / 60) % 24)
    const m = Math.floor((gap / 1000 / 60) % 60)
    const s = Math.floor((gap / 1000) % 60)

    day.innerHTML = d < 10 ? '0' + d : d
    hrs.innerHTML = h < 10 ? '0' + h : h
    min.innerHTML = m < 10 ? '0' + m : m
    sec.innerHTML = s < 10 ? '0' + s : s

    console.log(todayDate)
}setInterval(countDownTimer, 1000);



const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');

const h = document.querySelector('.h');
const m = document.querySelector('.m');
const s = document.querySelector('.s');

function clock() {
    const sec = new Date ().getSeconds();
    const min = new Date().getMinutes();
    const soat = new Date().getHours();

    s.style.transform = `rotate(${sec * 6}deg)`;
    m.style.transform = `rotate(${min * 6}deg)`;
    h.style.transform = `rotate(${soat * 30}deg)`;

    minutes.innerHTML = min < 10 ? '0' + min : min;
    hours.innerHTML = soat < 10 ? '0' + soat : soat;

    setTimeout(function() {
        clock();
    }, 1000);
}

clock();


const tabsItem = document.querySelectorAll('.tabsItem');
const tabsContentItem = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click' , function(){
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active');
            tabsContentItem[j].classList.remove('active');
        }
        tabsItem[i].classList.add('active');
            tabsContentItem[i].classList.add('active');
    })
}



const stopwatchBtn = document.querySelector('.stopwatch__btn');
const tabsLink = document.querySelector('.tabsLink__span');

const stopwatchSeconds = document.querySelector('.stopwatch__seconds');
const stopwatchMinutes = document.querySelector('.stopwatch__minutes');
const stopwatchHours = document.querySelector('.stopwatch__hours');

function timer () {
    if (stopwatchBtn.innerHTML == 'stop') {
        stopwatchSeconds.innerHTML++;
        if (stopwatchSeconds.innerHTML > 59) {
            stopwatchSeconds.innerHTML = 0;
            stopwatchMinutes.innerHTML++;
        } if (stopwatchMinutes.innerHTML > 59) {
            stopwatchMinutes.innerHTML = 0;
            stopwatchHours.innerHTML++;
        }
    }

    setTimeout( function () { 
        timer();
    }, 1000);
}

stopwatchBtn.addEventListener('click' , function() {
    if (stopwatchBtn.innerHTML == 'start') {
        stopwatchBtn.innerHTML = 'stop';
        tabsLink.classList.add('active');
        setTimeout(function() {
            timer();
        }, 1000);
    } else if (stopwatchBtn.innerHTML == 'stop') {
        stopwatchBtn.innerHTML = 'clear';
        tabsLink.classList.remove('active');
        tabsLink.classList.add('active_clear');
    } else {
        stopwatchBtn.innerHTML = 'start';
        tabsLink.classList.remove('active_clear');
        stopwatchSeconds.innerHTML = 0;
        stopwatchMinutes.innerHTML = 0;
        stopwatchHours.innerHTML = 0;
    }
});

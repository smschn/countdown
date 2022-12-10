let today;
let todayInMs;
let newYear;
let newYearInMs;
let myInterval;

getCurrentTime();

if ( newYearInMs > todayInMs ) {

    myInterval = setInterval( getCurrentTime, 1000);

} else {

    document.getElementById('title').classList.add('hidden');
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('countdown').classList.add('hidden');
    document.getElementById('card').classList.add('fireworks');
    document.getElementById('message').classList.remove('hidden');
    
    clearInterval( myInterval );

}

function getCurrentTime() {
    
    today = new Date();
    todayInMs = today.getTime();

    // i mesi in js liscio si contano dallo 0;
    newYear = new Date(2023, 0, 1);
    newYearInMs = newYear.getTime();

    let remainingTimeInMs = newYearInMs - todayInMs;

    let totalRemainingSeconds = Math.floor( remainingTimeInMs / 1000 );
    let totalRemainingMinutes = Math.floor( totalRemainingSeconds / 60 );
    let totalRemainingHours = Math.floor( totalRemainingMinutes / 60 );
    let totalRemainingDays = Math.floor( totalRemainingHours / 24 );

    document.getElementById('totalDays').innerHTML = totalRemainingDays;
    document.getElementById('totalHours').innerHTML = totalRemainingHours;
    document.getElementById('totalMinutes').innerHTML = totalRemainingMinutes;
    document.getElementById('totalSeconds').innerHTML = totalRemainingSeconds;

    let daysLeft = Math.floor( totalRemainingHours / 24 );
    document.getElementById('days').innerHTML = daysLeft;

    let hoursLeft = Math.floor( totalRemainingHours % 24 );
    document.getElementById('hours').innerHTML = hoursLeft;

    let minutesLeft = Math.floor( totalRemainingMinutes % 60 );
    document.getElementById('minutes').innerHTML = minutesLeft;

    let secondsLeft = Math.floor( totalRemainingSeconds % 60 );
    document.getElementById('seconds').innerHTML = secondsLeft;

}
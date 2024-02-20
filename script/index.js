const allBtn = document.getElementsByClassName('btnStyle');
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const bgStyle = event.target;
        bgStyle.style.background = '#1DD100';

        seatDecrease('seat_decrease');
        seatCount('seat_count');
    });
}



getValueById('total_amount');
getValueById('grand_total');


function seatCount(){
    const seat = document.getElementById('seat_count').innerText;
    const seatValue = parseInt(seat);
    const newValue = document.getElementById('seat_count').innerText = seatValue + 1;
    return newValue;
}

function seatDecrease(){
    const seat = document.getElementById('seat_decrease').innerText;
    const seatValue = parseInt(seat);
    const newValue = document.getElementById('seat_decrease').innerText = seatValue - 1;
    return newValue;
}

function getValueById(id) {
    const value = document.getElementById(id).innerText;
    return parseInt(value);
}
const allBtn = document.getElementsByClassName('btnStyle');
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const bgStyle = event.target;
        const text = bgStyle.innerText;
        bgStyle.style.background = '#1DD100';

        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = text;
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        const p3 = document.createElement('p');
        p3.innerText = '550';
        document.getElementById('append_seat').appendChild(div);
        div.classList.add('append_div')
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);


        seatDecrease('seat_decrease');
        seatCount('seat_count');
        totalAmount(getValueById('ticket_fare'));
    });
}



getValueById('total_amount');
getValueById('grand_total');


function totalAmount(price) {
    const previousAmount = document.getElementById("total_amount").innerText;
    const convertedTotalAmount = parseInt(previousAmount);
    const convertedAmount = price;
    const sum = convertedTotalAmount + convertedAmount;
    document.getElementById("total_amount").innerText = sum;
}


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
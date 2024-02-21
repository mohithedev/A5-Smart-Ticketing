const allBtn = document.getElementsByClassName('btnStyle');
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        // btn bg-color
        const bgStyle = event.target;
        const text = bgStyle.innerText;
        bgStyle.style.background = '#1DD100';

        // seat append
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
        grandTotalAmount();

        event.target.setAttribute("disabled", false);
    });

}



getValueById('total_amount');
getValueById('grand_total');


// coupon
const couponBtn = document.getElementById('coupon_btn');
couponBtn.addEventListener('click', function () {
    const coupon = document.getElementById('coupon_code').value;
    if (coupon) {
        if (coupon == 'NEW15') {
            const discountPrice = grandTotalAmount() * 15 / 100;
            const discount1 = grandTotalAmount() - discountPrice;
            document.getElementById('grand_total').innerText = discount1;
            
        } 
        else if (coupon == 'Couple 20') {
            const discountPrice2 = grandTotalAmount() * 20 / 100;
            const discount2 = grandTotalAmount() - discountPrice2;
            document.getElementById('grand_total').innerText = discount2;
        } 
        else {
            alert('Please input a valid coupon code');
            return
        }
    } else {
        document.getElementById('grand_total').innerText = grandTotalAmount();
    }
})


// grand total
function grandTotalAmount() {
    const previousAmount = document.getElementById("total_amount").innerText;
    const convertedTotalAmount = parseInt(previousAmount);
    document.getElementById('grand_total').innerText = convertedTotalAmount;
}


// total price
function totalAmount(value) {
    const previousAmount = document.getElementById("total_amount").innerText;
    const convertedTotalAmount = parseInt(previousAmount);
    const convertedAmount = value;
    const sum = convertedTotalAmount + convertedAmount;
    document.getElementById("total_amount").innerText = sum;
}


// seat number count
function seatCount() {
    const seat = document.getElementById('seat_count').innerText;
    const seatValue = parseInt(seat);
    const newValue = document.getElementById('seat_count').innerText = seatValue + 1;
    return newValue;
}


// seat decrease form main seat number
function seatDecrease() {
    const seat = document.getElementById('seat_decrease').innerText;
    const seatValue = parseInt(seat);
    const newValue = document.getElementById('seat_decrease').innerText = seatValue - 1;
    return newValue;
}


// value converted string to number
function getValueById(id) {
    const value = document.getElementById(id).innerText;
    return parseInt(value);
}
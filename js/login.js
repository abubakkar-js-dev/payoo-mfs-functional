document.getElementById('btn-login').addEventListener('click',function(e){
    e.preventDefault();
    const inputPhoneNumber = document.getElementById('input-phone').value;
    const inputPinNumber = document.getElementById('input-pin').value;

    const tempPin = '1234';
    const tempPhone = '01961849643';
    if(inputPinNumber === tempPin && inputPhoneNumber === tempPhone){
        window.location.href = '../home.html';
    }else{
        alert('failed to login. Please try again later.');
    }
});
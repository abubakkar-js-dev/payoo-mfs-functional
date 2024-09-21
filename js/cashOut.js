document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    // get the amount and pin
    const cashOutAmount = getInputFieldValueById('input-cash-out');
    const cashOutPin = getInputFieldValueById('input-cash-out-pin');
    // temp pin
    const tempPin = 1234;
    
    // verify pin
    if(cashOutPin === tempPin){
        const currentBalance = getTextFieldValueById('current-balance');
        if(cashOutAmount <= currentBalance){
            // update the balance
            const newBalance = (currentBalance - cashOutAmount).toFixed(2);
            // update the ui
            document.getElementById('current-balance').innerText = newBalance;
            //  clear the input field
            document.getElementById('input-cash-out').value = "";
            document.getElementById('input-cash-out-pin').value = "";
        }else{
            alert('Invalid amount');
        }
    }else{
        alert('Failed to cash out. Please try again later.');
    }
});
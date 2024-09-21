document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    
    // get pin and add money
    const addMoneyInput = getInputFieldValueById('input-add-money');
    const addMoneyInputPin = getInputFieldValueById('input-add-money-pin');
    // console.log(addMoneyInput,addMoneyInputPin);
    // temp pin
    const tempPin = 1234;
    //check pin to verify
    if(addMoneyInputPin === tempPin){
        const currentBalance = getTextFieldValueById('current-balance');
        // conver string to number
        // const currentBalanceNumber = parseFloat(currentBalance);
        // const addMoneyInputNumber = parseFloat(addMoneyInput);

        // update the new balance
        const newBalance = (currentBalance + addMoneyInput).toFixed(2);

        //update the ui
        document.getElementById('current-balance').innerText = newBalance;
        
        // clear the form
        document.getElementById('input-add-money').value = "";
        document.getElementById('input-add-money-pin').value = "";



    }else{
        alert('failed to add money. please try again later')
    }
})
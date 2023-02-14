document.getElementById('deposit-butt').addEventListener('click', function(){
    const inputField = document.getElementById('deposit-input');
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);

    inputField.value = '';

    if(isNaN(inputFieldNumber)){
        alert('Please, Input a valid Number')
        return;
    }
    
    const inputAmount = document.getElementById('deposit-amount');
    const inputAmountString = inputAmount.innerText;
    const inputAmountNumber = parseFloat(inputAmountString);

    const totalDepositAmount = inputAmountNumber + inputFieldNumber;
    inputAmount.innerText = totalDepositAmount;

    const totalBalance = document.getElementById('balance-amount');
    const totalBalanceString = totalBalance.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceString);

    const newTotalBalance = totalBalanceNumber + inputFieldNumber;
    totalBalance.innerText = newTotalBalance;

})
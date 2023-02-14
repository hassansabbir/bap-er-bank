document.getElementById('withdraw-butt').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputString = withdrawInput.value;
    const withdrawInputNumber = parseFloat(withdrawInputString);
    
    withdrawInput.value = '';

    if(isNaN(withdrawInputNumber)){
        alert('Please, Input a valid Number')
        return;
    }

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.innerText;
    const withdrawAmountNumber = parseFloat(withdrawAmountString);

    const totalBalance = document.getElementById('balance-amount');
    const totalBalanceString = totalBalance.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceString);

    if(withdrawInputNumber > totalBalanceNumber){
        alert("You don't have enough money");
        return;
    }

    const totalWithdrawAmountNumber = withdrawAmountNumber + withdrawInputNumber;
    withdrawAmount.innerText = totalWithdrawAmountNumber;

    const newTotalBalance = totalBalanceNumber - withdrawInputNumber;
    totalBalance.innerText = newTotalBalance;
})
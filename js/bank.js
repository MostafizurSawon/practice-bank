// deposit
document.getElementById('deposit-button').addEventListener('click', function() {
    // console.log('got it')
    const depositRaw = document.getElementById('deposit-amount');
    const depositValue = parseInt(depositRaw.value);
    // console.log(depositValue);

    // deposit default
    const despositDefult = document.getElementById('deposit-total');
    const depositDefaultValue = parseInt(despositDefult.innerText);
    // console.log(depositDefaultValue);
    const newDeposit = depositValue + depositDefaultValue;

    despositDefult.innerText = newDeposit;

    /////////  Main balance ////////////
    const mainBalanceRaw = document.getElementById('balance-total');
    const mainBalance = parseInt(mainBalanceRaw.innerText);
    // console.log(mainBalance);

    const balanceAfterDeposit = mainBalance + newDeposit;

    mainBalanceRaw.innerText = balanceAfterDeposit;

    // clear input
    depositRaw.value = '';
})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', () => {
    const withdrawRaw = document.getElementById('withdraw-amount');
    const withdrawValue = parseInt(withdrawRaw.value);
    // console.log(withdrawValue);

    // withdraw default
    const withdrawDefault = document.getElementById('withdraw-total');
    const withdrawDefaultValue = parseInt(withdrawDefault.innerText);
// console.log(withdrawDefaultValue);
    // withdraw total
    const newWithdraw = withdrawDefaultValue + withdrawValue;
// console.log(newWithdraw);
    withdrawDefault.innerText = newWithdraw;

 /////////  Main balance ////////////
 const mainBalanceRaw = document.getElementById('balance-total');
 const mainBalance = parseInt(mainBalanceRaw.innerText);
 // console.log(mainBalance);

 const balanceAfterWithdraw = mainBalance - newWithdraw;

 mainBalanceRaw.innerText = balanceAfterWithdraw;

 // clear input
 withdrawRaw.value = '';
})
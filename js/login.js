// submit
document.getElementById('login-button').addEventListener('click', function(){
    // console.log('clicked')

    // userName input
   const nameField = document.getElementById('input-name');
   const userName = nameField.value;
//    console.log(userName)

// user password input
const passwordField = document.getElementById('input-password');
const password = passwordField.value;
// console.log(password)


if (userName == 'Mostafizur Rahman' && password == 12345678){
    // console.log('done!')
    window.location.href = "bank.html";
}
});
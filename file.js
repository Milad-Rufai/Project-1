const myForm = document.querySelector(".inline");
const inputField = document.querySelector(".input-field");

const btn = document.querySelector('.btn');
btn.addEventListener(onclick);
function onclick(e){
    button.style.borderBlockColor = 'green';
}


myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(inputField.value === ''){
        Msg.innerHTML = 'please enter all fields';
    } else{
        alert('Submission Successful')
    }
}

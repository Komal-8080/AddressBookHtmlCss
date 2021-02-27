window.addEventListener('DOMContentLoaded', (event) => {
    const name=document.querySelector('#name');
    const nameError=document.querySelector('.name-error');
    name.addEventListener('input', function() {
        if(name.value.length == 0) {
            nameError.textContent = "";
            return;
        }
        try {
            (new Person()).name = name.value;;
            nameError.textContent="";
        }catch (e) {
            nameError.textContent=e;
        }
    });

    const phone=document.querySelector('#phone');
    const phoneError=document.querySelector('.phone-error');
    phone.addEventListener('input', function() {
        if(phone.value.length == 0) {
            phoneError.textContent = "";
            return;
        }
        try {
            (new Person()).phone = phone.value;
            phoneError.textContent = "";
        }catch (e) {
            phoneError.textContent=e;
        }
    });
 });


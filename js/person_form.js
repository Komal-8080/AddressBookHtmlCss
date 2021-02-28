var isUpdate = false;
var personObj = {};

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
    checkForUpdate();
 });

function save() {
    try {
        let person = createPerson();
        createAndUpdatePerson(person);
    }catch(e){
        return;
    }
}

function createAndUpdatePerson(person) {
    let personList = JSON.parse(localStorage.getItem("PersonList"));
    if(personList != undefined) {
        personList.push(person);
    }else {
        personList = [person]
    }
    alert(personList.toString());
    localStorage.setItem("PersonList",JSON.stringify(personList))
}

function createPerson() {
    let person = new Person();
    try {
        person.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.name-error', e);
        throw e;
    }
    try {
        person.phone = getInputValueById('#phone');
    } catch (e) {
        setTextValue('.phone-error', e);
        throw e;
    }
    person.address = getInputValueById('#address');
    person.city =getInputValueById('#city');
    person.state =getInputValueById('#state');
    person.zip =getInputValueById('#zip');
    let personList1 = JSON.parse(localStorage.getItem("PersonList"));
        if(personList1 == undefined)
            person.id = 1;
        else person.id = personList1.length+1;
    alert(person.toString());
    return person;
}

 const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
  
const setForm = () => {
    setValue('#name', personObj._name);
    setValue('#phone',personObj._phone);
    setValue('#address',personObj._address);
    setValue('#city', personObj._city);
    setValue('#state',personObj._state);
    setValue('#zip',personObj._zip);
}

const resetForm = () => {
    setValue("#name", ' ');
    setValue("#phone", ' ');
    setValue("#address", ' ');
    setValue("#city", 'Amaravati');
    setValue("#state", 'Andhra Pradesh');
    setValue("#zip", ' ');
}

const setValue = (id, value ) => {
    const element = document.querySelector(id);
    element.value = value;
} 

const checkForUpdate = () => {
    const personJson = localStorage.getItem('editPerson');
    isUpdate = personJson ? true : false;
    if (!isUpdate) return;
    personObj = JSON.parse(personJson);
    setForm();
}
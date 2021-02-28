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

function save(event) {
    event.preventDefault();
    event.stopPropagation();
    try {
        setPersonObject();
        createAndUpdatePerson();
        resetForm();
        window.location.replace(site_properties.home_page);
    }catch(e){
        return;
    }
}

function setPersonObject() {
    personObj._name=getInputValueById('#name');
    personObj._phone=getInputValueById('#phone');
    personObj._address=getInputValueById('#address');
    personObj._city =getInputValueById('#city');
    personObj._state =getInputValueById('#state');
    personObj._zip =getInputValueById('#zip');
}

function createAndUpdatePerson() {
    let personList = JSON.parse(localStorage.getItem("PersonList"));
    if (personList) {
        let personData = personList.
                                find(pData => pData._id == personObj._id);
        if(!personData){
            personList.push(createPersonData());
        }else {
            const index = personList
                            .map(pData => pData._id)
                            .indexOf(personData._id);
                personList.splice(index, 1, createPersonData(personData._id));
        }
    }else {
        personList = [person]
        personList = [createPersonData()]
    }
    alert(personList.toString());
    localStorage.setItem("PersonList",JSON.stringify(personList))
}

function createPersonData(id) {
    let person = new Person();
    if(!id)
        person.id = createNewPersonId();
    else
        person.id = id; 
    setPersonData(person);
    return person;
}

function setPersonData(person) {
    try {
        person.name = personObj._name;
    } catch (e) {
        setTextValue('.name-error', e);
        throw e;
    }
    try {
        person.phone = personObj._phone;
    } catch (e) {
        setTextValue('.phone-error', e);
        throw e;
    }
    person.address = personObj._address;
    person.city = personObj._city;
    person.state = personObj._state;
    person.zip = personObj._zip;
    alert(person.toString());
}

function createNewPersonId() {
    let pID = localStorage.getItem("PersonID");
    pID = !pID ? 1 : (parseInt(pID)+1).toString();
    localStorage.setItem("PersonID", pID);
    return pID;
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
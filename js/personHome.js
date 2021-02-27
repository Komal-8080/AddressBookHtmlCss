var personDataList;
window.addEventListener('DOMContentLoaded', (event) => {
    personDataList = getPersonDataFromStorage();
    createInnerHtml();
});

function getPersonDataFromStorage() {
    return localStorage.getItem('PersonList') ?
                        JSON.parse(localStorage.getItem('PersonList')) : [];
}

function createInnerHtml() {
    if( personDataList.length == 0) return;
    const headerHtml = "<th>Full Name</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;   
        for(const personData of personDataList) {
            innerHtml= `${innerHtml}
                <tr>
                    <td>${personData._name}</td>
                    <td>${personData._address}</td>
                    <td>${personData._city}</td>
                    <td>${personData._state}</td>
                    <td>${personData._zip}</td>
                    <td>${personData._phone}</td>
                    <td>
                        <img name="${personData._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete" >
                        <img name="${personData._id}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg"  alt="edit">
                    </td>
                </tr> 
            `;
        }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

                    
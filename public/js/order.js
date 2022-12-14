let dateDropdown = document.querySelector('#date-dropdown');
let addFlavorButton = document.querySelector('.add-flavor-button');
let submitButton = document.querySelector('#submit');
let newFlavorDiv = document.querySelector('.new-flavor-div');
let formData = {
    date: null,
    name: null,
    phone: null,
    email: null,
    flavors: [],
    counts: []
}

function loadDropdowns() {
    
    let dates = [
        "Monday, December 12",
        "Tuesday, December 13",
        "Wednesday, December 14",
        "Thursday, December 15",
        "Friday, December 16",
        "Tuesday, December 20",
        "Friday, December 23"
    ];
    
    let flavors = [
        "Strawberry",
        "Huckleberry Cheesecake",
        "Mango",
        "Swanky Dip"
    ];

    let flavorDropdowns = document.querySelectorAll('.flavor-dropdown');
    // create an option for each flavor in the list + a disabled one
    let flavorHtml = '<option value="" selected disabled>Please Select...</option>';
    flavors.forEach((flavor) => {
        flavorHtml += `<option value="${flavor}">${flavor}</option>`;
    })
    // add html to each dropdown
    flavorDropdowns.forEach((flavorDropdown) => {
        flavorDropdown.innerHTML = flavorHtml;
    });
    
    // create an option for each date in the list + a disabled one
    let dateHtml = '<option value="" selected disabled>Please Select...</option>';
    dates.forEach((date) => {
        dateHtml += `<option>${date}</option>`;
    });
    // add date html options to document
    dateDropdown.innerHTML = dateHtml;

    // 
    // load data into the forms
    // 

    // load the selecteed date
    if (formData.date) {
        dateDropdown.value = formData.date;
    }
    // load data into flavor fields
    let i = 0;
    flavorDropdowns.forEach((fdd) => {
            if (formData.flavors[i]) {
            fdd.value = formData.flavors[i];
            i++;
        };
    });
    // load data into count fields
    let counts = document.querySelectorAll('.count')
    i = 0;
    counts.forEach((ci) => {
            if (formData.counts[i]) {
            ci.value = formData.counts[i];
            i++;
        };
    })
}

function getFormData() {
    let flavorDropdowns = document.querySelectorAll('.flavor-dropdown');
    let flavorValues = [];
    let flavorCounts = document.querySelectorAll('.count');
    let countValues = [];
    
    flavorDropdowns.forEach((fdd) => {
        value = fdd.value;
        flavorValues.push(value);
    });
    flavorCounts.forEach((fc) => {
        value = fc.value;
        countValues.push(value);
    });
    
    let dateValue = document.querySelector('#date-dropdown').value;
    let nameValue = document.querySelector('#name').value;
    let phoneValue = document.querySelector('#phone').value;
    let emailValue = document.querySelector('#email').value;
    
    formData = {
        date: dateValue,
        name: nameValue,
        phone: phoneValue,
        email: emailValue,
        flavors: flavorValues,
        counts: countValues
    }
    
    console.log(formData);
}

function addNewFlavor(e){
    e.preventDefault();
    getFormData();

    // reset classes so all flavor divs don't animate
    let newDivs = document.querySelectorAll('.new');
    if (newDivs.length > 0) {    
        newDivs[0].classList.remove('new');
    }
    
    let newFlavorHtml = `
    <div class="flavor-div new">
    <hr>
    <label for="flavor-dropdown">Flavor:</label>
    <select name="flavor-dropdown" class="flavor-dropdown" required></select>
    <label for="count">Count:</label>
    <input type="number" name="count" class="count" min="1" value="0" required></input>
    </div>`;
    
    newFlavorDiv.innerHTML += newFlavorHtml;
    loadDropdowns();
};

addFlavorButton.addEventListener('click', addNewFlavor);
submitButton.addEventListener('click', getFormData);
loadDropdowns();


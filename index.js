//personal infromation page inputs  ========================
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const uploadedImage = document.getElementById('personal-image');
const generalInfo = document.getElementById('general-info');
const emailrInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phone-number');

const generalInfoHeader= document.getElementById('display-about-header');

//personal infromation page display 
const displayFirstname = document.getElementById('display-firstname');
const displayLastname = document.getElementById('display-lastname');
const displayEmail = document.getElementById('display-email');
const displayNumber = document.getElementById('display-number');
const displayAbout = document.getElementById('display-about');
const displayUploadedImage =document.getElementById('display-image')

//=>personal infromation page, display input values
//fisrtname 
firstNameInput.addEventListener('keyup',()=>{
    displayFirstname.textContent = firstNameInput.value
});
//lastname
lastNameInput.addEventListener('keyup',()=>{
    displayLastname.textContent = lastNameInput.value
});
//general information (about)
generalInfo.addEventListener('keyup',()=>{
    displayAbout.textContent = generalInfo.value;
    generalInfo.value != '' ? generalInfoHeader.style.display = 'block' :  generalInfoHeader.style.display = 'none';
});
//email
emailrInput.addEventListener('keyup',()=>{
    displayEmail.textContent = emailrInput.value
});
//number
phoneNumberInput.addEventListener('keyup',()=>{
    displayNumber.textContent = phoneNumberInput.value
});
//personal image 
uploadedImage.addEventListener('change',()=>{
    let reader = new FileReader();
    reader.readAsDataURL(uploadedImage.files[0]);
    reader.addEventListener('load',()=>{
        displayUploadedImage.innerHTML = `<img src="${reader.result}" alt="personal image">`
    })
});




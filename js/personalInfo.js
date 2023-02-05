//personal infromation page inputs /page 1/====================
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const uploadedImage = document.getElementById('personal-image');
const generalInfo = document.getElementById('general-info');
const emailrInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phone-number');


const generalInfoHeader = document.getElementById('display-about-header');
const personalInfoNextBtn = document.getElementById('personalInfo-next-btn');

//personal infromation page display /page 1/
const displayFirstname = document.getElementById('display-firstname');
const displayLastname = document.getElementById('display-lastname');
const displayEmail = document.getElementById('display-email');
const displayNumber = document.getElementById('display-number');
const displayAbout = document.getElementById('display-about');
const displayUploadedImage =document.getElementById('display-image')


//=>personal infromation page, display input values and verify /page 1/
//fisrtname 
firstNameInput.addEventListener('keyup',()=>{
    //live update of input text on page
    displayFirstname.textContent = firstNameInput.value;
    //verify, inputmust be  is in geo letters and more then 1 
    const firstnameLabel = document.getElementById('first-name-label');
    const firstnameValidVector = document.getElementById('first-name-valid-vector');
    const firstnameNotValidVector = document.getElementById('first-name-notvalid-vector');
    const firstnameWR =firstNameInput.value.replace(/\s/g, '') //Whitespace Remove
    if(/^[ა-ჰ]{2,10}$/i.test(firstnameWR)){
        //valid
        firstnameLabel.style.color = '#000000';
        firstNameInput.style.borderColor= '#98E37E';
        firstnameValidVector.style.display = 'block';
        firstnameNotValidVector.style.display = 'none'; 
    }else{
        //not valid
        firstnameLabel.style.color = '#E52F2F';
        firstNameInput.style.borderColor = '#E52F2F';
        firstnameNotValidVector.style.display = 'block'; 
        firstnameValidVector.style.display = 'none';
    }
});
//lastname
lastNameInput.addEventListener('keyup',()=>{
    //live update of input text on page
    displayLastname.textContent = lastNameInput.value;
    //verify, inputmust be  is in geo letters and more then 1 
    const lastNameLabel = document.getElementById('last-name-label');
    const lastnameValidVector = document.getElementById('last-name-valid-vector');
    const lastnameNotValidVector = document.getElementById('last-name-notvalid-vector');
    const lastnameWR =lastNameInput.value.replace(/\s/g, '') //Whitespace Remove
    if(/^[ა-ჰ]{2,10}$/i.test(lastnameWR)){
        //valid
        lastNameLabel.style.color = '#000000';
        lastNameInput.style.borderColor= '#98E37E';
        lastnameValidVector.style.display = 'block';
        lastnameNotValidVector.style.display = 'none';
    }else{
        //not valid
        lastNameLabel.style.color = '#E52F2F';
        lastNameInput.style.borderColor= '#E52F2F';
        lastnameNotValidVector.style.display = 'block'; 
        lastnameValidVector.style.display = 'none';
    }
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

//=>personal infromation page, input fields varification  /page 1/
personalInfoNextBtn.addEventListener('click',()=>{
    veryfication();       
});

function veryfication(){
  
}


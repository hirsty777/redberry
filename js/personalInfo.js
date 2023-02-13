//variables /////////////////////////////////////////////////
//personal infromation page, inputs      

const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const uploadedImage = document.getElementById('personal-image');
const generalInfo = document.getElementById('general-info');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phone-number');
//personal infromation page, display inputs       
const displayFirstname = document.getElementById('display-firstname');
const displayLastname = document.getElementById('display-lastname');
const displayEmail = document.getElementById('display-email');
const displayNumber = document.getElementById('display-number');
const displayAbout = document.getElementById('display-about');
const displayUploadedImage =document.getElementById('display-image');

const generalInfoHeader = document.getElementById('display-about-header');
const personalInfoNextBtn = document.getElementById('personalInfo-next-btn');
//variables \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//check for localstorage and if they have values, fill input fields (so no inputfields  data is not lost on refresh)
firstNameInput.value = localStorage.getItem('firstname');
lastNameInput.value = localStorage.getItem('lastname');
generalInfo.value = localStorage.getItem('generalInfo');
emailInput.value = localStorage.getItem('email');
phoneNumberInput.value = localStorage.getItem('phone');
//display input values if they exist
displayFirstname.textContent = firstNameInput.value;
displayLastname.textContent = lastNameInput.value;
if(localStorage.getItem('perosnalImg')){
    displayUploadedImage.innerHTML = `<img src="${localStorage.getItem('perosnalImg')}" alt="personal image">`;
}
displayAbout.textContent = generalInfo.value;
displayEmail.textContent = emailInput.value;
displayNumber.textContent = phoneNumberInput.value;



//=>personal infromation page, display input values and verify 
//fisrtname 
firstNameInput.addEventListener('keyup',()=>{
    //live update of input text on page
    displayFirstname.textContent = firstNameInput.value;
    //save to localstorage so its not lost on refresh
    localStorage.setItem('firstname',firstNameInput.value);
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
        localStorage.setItem('validFirstname',firstnameWR); 
    }else{
        //not valid
        firstnameLabel.style.color = '#E52F2F';
        firstNameInput.style.borderColor = '#E52F2F';
        firstnameNotValidVector.style.display = 'block'; 
        firstnameValidVector.style.display = 'none';
        localStorage.removeItem('validFirstname');
    }
});    

//lastname
lastNameInput.addEventListener('keyup',()=>{
    //live update of input text on page
    displayLastname.textContent = lastNameInput.value;
    //save to localstorage so its not lost on refresh
    localStorage.setItem('lastname',lastNameInput.value);
    //verify, inputmust be  is in geo letters and more then 1 
    const lastNameLabel = document.getElementById('last-name-label');
    const lastnameValidVector = document.getElementById('last-name-valid-vector');
    const lastnameNotValidVector = document.getElementById('last-name-notvalid-vector');
    const lastnameWR =lastNameInput.value.replace(/\s/g, '') //Whitespace Remove
    if(/^[ა-ჰ]{2,20}$/i.test(lastnameWR)){
        //valid
        lastNameLabel.style.color = '#000000';
        lastNameInput.style.borderColor= '#98E37E';
        lastnameValidVector.style.display = 'block';
        lastnameNotValidVector.style.display = 'none';
        localStorage.setItem('validLastname',lastnameWR);
    }else{
        //not valid
        lastNameLabel.style.color = '#E52F2F';
        lastNameInput.style.borderColor= '#E52F2F';
        lastnameNotValidVector.style.display = 'block'; 
        lastnameValidVector.style.display = 'none';
        localStorage.removeItem('validLastname');
    }
});

//general information (about)
generalInfo.addEventListener('keyup',()=>{
    displayAbout.textContent = generalInfo.value;
    //if ther is value then show header  (ჩემ შესახებ) if not hide 
    generalInfo.value.trim() != '' ? generalInfoHeader.style.display = 'block' :  generalInfoHeader.style.display = 'none';
    if(generalInfo.value.trim() != ''){
        localStorage.setItem('generalInfo',generalInfo.value);
    }else{
        localStorage.removeItem('generalInfo');
    }
});

//email
emailInput.addEventListener('keyup',()=>{
    //live update of input text on page
    displayEmail.textContent = emailInput.value;
    //save to localstorage so its not lost on refresh
    localStorage.setItem('email',emailInput.value);
    //verify, input must contain @redberry.ge at end
    const emailLabel = document.getElementById('email-label');
    const emailValidVector = document.getElementById('email-valid-vector');
    const emailNotValidVector = document.getElementById('email-notvalid-vector');
    let regex = new RegExp('[a-z0-9]+@redberry.ge$');
    if(regex.test(emailInput.value)){
        //valid
        emailLabel.style.color = '#000000';
        emailInput.style.borderColor= '#98E37E';
        emailValidVector.style.display = 'block';
        emailNotValidVector.style.display = 'none';
        localStorage.setItem('validEmail',emailInput.value);
    }else{
        //not valid
        emailLabel.style.color = '#E52F2F';
        emailInput.style.borderColor= '#E52F2F';
        emailNotValidVector.style.display = 'block'; 
        emailValidVector.style.display = 'none';
        localStorage.removeItem('validEmail');
    }
 });

//number
phoneNumberInput.addEventListener('keyup',()=>{
    //live update of input text on page
    displayNumber.textContent = phoneNumberInput.value;
    //save to localstorage so its not lost on refresh
    localStorage.setItem('phone',phoneNumberInput.value);
    //verify, input must be geo number format
    const numberLabel = document.getElementById('number-label');
    const numberValidVector = document.getElementById('number-valid-vector');
    const numberNotValidVector = document.getElementById('number-notvalid-vector');
    let regex = /^[995]{3}\d{9}$/;
    if(phoneNumberInput.value.match(regex)){
        //valid
        numberLabel.style.color = '#000000';
        phoneNumberInput.style.borderColor= '#98E37E';
        numberValidVector.style.display = 'block';
        numberNotValidVector.style.display = 'none';
        localStorage.setItem('validPhone',phoneNumberInput.value);
    }else{
        //not valid
        numberLabel.style.color = '#E52F2F';
        phoneNumberInput.style.borderColor= '#E52F2F';
        numberNotValidVector.style.display = 'block'; 
        numberValidVector.style.display = 'none';
        localStorage.removeItem('validPhone');
    }
});

//personal image 
uploadedImage.addEventListener('change',()=>{
    const perImgUpload = document.getElementById('personal-img-upload');//change style on verify valid
    if(uploadedImage.value){
        perImgUpload.style.color = '#98E37E'
    }
    //live update in page
    
    //console.log(uploadedImage.files[0])
    let image = uploadedImage.files[0];

    //localStorage.setItem('perosnalImg',JSON.stringify(uploadedImage.files[0]))

    let bb = new File([''],image.name,{type:image.type,lastModified:image.lastModified});
    

    let reader = new FileReader();
    reader.readAsDataURL(uploadedImage.files[0]);
    reader.addEventListener('load',()=>{
        
        displayUploadedImage.innerHTML = `<img src="${reader.result}" alt="personal image">`
        localStorage.setItem('perosnalImg',reader.result)
       

    })
   
});

console.log(JSON.parse(localStorage.getItem('tesimage')));


//back to main page (arrow BTN) 
const backArrow = document.getElementById('personalInf-back-arrow');
backArrow.addEventListener('click',()=>{
    //clear 
    localStorage.clear()

    window.location = '../index.html'
});

//to next page BTN
personalInfoNextBtn.addEventListener('click',()=>{

    if(localStorage.getItem('validFirstname') && localStorage.getItem('validLastname')&&
    localStorage.getItem('validEmail') && localStorage.getItem('validPhone') &&
    localStorage.getItem('perosnalImg')) {

        window.location = 'experience.html'
    }else{
        const perImgUpload = document.getElementById('personal-img-upload');//change style on iamge upload text
        perImgUpload.style.color = '#E52F2F'
        return
    }
    
});




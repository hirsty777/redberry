



//personal infromation page, display inputs       
const displayFirstname = document.getElementById('display-firstname');
const displayLastname = document.getElementById('display-lastname');
const displayEmail = document.getElementById('display-email');
const displayNumber = document.getElementById('display-number');
const displayAbout = document.getElementById('display-about');
const displayUploadedImage =document.getElementById('display-image');


const addMoreExp = document.getElementById('add-more-experience');
const experiencePrevBtn = document.getElementById('experience-prev-btn');



//display input values of personalinformation page  
displayFirstname.textContent = localStorage.getItem('firstname');
displayLastname.textContent = localStorage.getItem('lastname');
if(localStorage.getItem('perosnalImg')){
    displayUploadedImage.innerHTML = `<img src="${localStorage.getItem('perosnalImg')}" alt="personal image">`;
}
displayAbout.textContent = localStorage.getItem('generalInfo');
displayEmail.textContent = localStorage.getItem('email');
displayNumber.textContent = localStorage.getItem('phone');




const test = document.getElementById('test-div');
const test2= document.getElementById('added-experience');






experiencePrevBtn.addEventListener('click',()=>{
    window.location = 'personalInfo.html'
});
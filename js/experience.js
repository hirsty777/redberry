//variables /////////////////////////////////////////////////

//variables to display inputs values from peronalinformation page       
const displayFirstname = document.getElementById('display-firstname');
const displayLastname = document.getElementById('display-lastname');
const displayEmail = document.getElementById('display-email');
const displayNumber = document.getElementById('display-number');
const displayAbout = document.getElementById('display-about');
const displayUploadedImage =document.getElementById('display-image');
const generalInfoHeader = document.getElementById('display-about-header');


//experience inputs display
const displayHeader = document.getElementsByClassName('display-experience-header');//header for experience display

const addMoreExp = document.getElementById('add-more-experience');
const experiencePrevBtn = document.getElementById('experience-prev-btn');

let numb = 0;


//display input values of personalinformation page  (previos page values)
generalInfoHeader.style.display = 'block';
displayFirstname.textContent = localStorage.getItem('firstname');
displayLastname.textContent = localStorage.getItem('lastname');
if(localStorage.getItem('perosnalImg')){
    displayUploadedImage.innerHTML = `<img src="${localStorage.getItem('perosnalImg')}" alt="personal image">`;
}
displayAbout.textContent = localStorage.getItem('generalInfo');
displayEmail.textContent = localStorage.getItem('email');
displayNumber.textContent = localStorage.getItem('phone');




//=>experience infromation page, display input values and verify 
//position
function positionInput(value, index){
    const displayExp = document.querySelectorAll('.display-position');
    displayExp[index].textContent = value ;

    displayHeader[0].style.display = 'block' ;
}


//employer
function employerInput(value, index){
    const displayEmployer = document.querySelectorAll('.display-employer');
    displayEmployer[index].textContent = value;
    
    displayHeader[0].style.display = 'block' ;
}

//start date 
function startDateInput(value, index){
    const displayStartTime = document.querySelectorAll('.display-start-date');
    displayStartTime[index].textContent = value;

    displayHeader[0].style.display = 'block' ;

}

//end date 
function endDateInput(value, index){
    const displayEndTime = document.querySelectorAll('.display-end-date');
    displayEndTime[index].textContent = '- '+ value;

    displayHeader[0].style.display = 'block' ;

}

//experience info 
function experienceInfInput(value, index){
    const displayExperienceInf = document.querySelectorAll('.displaye-experince-info');
    displayExperienceInf[index].textContent = value;

    displayHeader[0].style.display = 'block' ;

}













//add more experience options on click 
const addMoreEepBox = document.getElementById('add-more-experience-box');
const addMoreDisplayBox = document.getElementById('experience-live-display-added');
addMoreExp.addEventListener('click',()=>{
    numb += 1;

    let div = document.createElement('div');
    div.className = 'new-experience-div';
    div.innerHTML=`
<div class="position-box input-box-style1">
    <label for="position" id="position-label" class="font-w5-s16">თანამდებობა</label>
    <input type="text" id="position" class="font-w4-s16 input-style1" onkeyup="positionInput(value,${numb})" placeholder="დეველოპერი, დიზაინერი, ა.შ.">
    <p class="font-w3-s14">მინიმუმ 2 სიმბოლო</p>
</div> 
<div class="employer-box input-box-style1">
    <label for="employer" id="employer-label" class="font-w5-s16">დამსაქმებელი</label>
    <input type="text" id="employer" class="font-w4-s16 input-style1" onkeyup="employerInput(value,${numb})" placeholder="დამსაქმებელი">
    <p class="font-w3-s14">მინიმუმ 2 სიმბოლო</p>
</div>
<!--dates of work experience-->
<div class="inputs-wrap work-date-box">
    <div class="starttime-box input-box-style2">
        <label for="starttime" id="starttime-label" class="font-w5-s16 ">დაწყების რიცხვი</label>
        <input type="date" id="starttime" class="font-w4-s16 input-style1" onchange="startDateInput(value,${numb})">
    </div>
    <div class="endtime-box input-box-style2">
        <label for="endtime" id="endtime-label" class="font-w5-s16 ">დამთავრების რიცხვი</label>
        <input type="date" id="endtime" class="font-w4-s16 input-style1" onchange="endDateInput(value,${numb})">
    </div>
</div> 
<!--description textarea for wor experience-->
<div class="experience-info-box">
    <span class="font-w5-s16">აღწერა</span>
    <textarea name="experience info" id="experience-info" class="font-w4-s16" onkeyup="experienceInfInput(value,${numb})"
    placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
</div>
<hr class="end-line-experience">
`;
    addMoreEepBox.appendChild(div);

    //===========================================
    let displayDiv = document.createElement('div');
    displayDiv.className = 'experience-live-display';
    displayDiv.innerHTML = `
<div class="experience-live-display">
    
    <div class="job-wraper font-w5-s16">
    <div class="display-position">
        
    </div>
    <div class="display-employer">
        
    </div>
    </div>
    <div class="display-experience-date">
        <span class="display-start-date"></span>
        <span class="display-end-date"></span>
    </div>
    <div class="displaye-experince-info">

    </div>
 </div>
 <div id="experience-live-display-added">
</div>`;
    addMoreDisplayBox.appendChild(displayDiv);
});




experiencePrevBtn.addEventListener('click',()=>{
    window.location = 'personalInfo.html'
});
//variables /////////////////////////////////////////////////
const addMoreExpBox = document.getElementById('add-more-experience-box');//place where content gets added afret add more btn is clickde(inputs)
const addMoreDisplayBox = document.getElementById('experience-live-display-added');//place where content gets added afret add more btn is clickde(inputs display)
//
let numb = localStorage.getItem('size') ? Number(localStorage.getItem('size')) : 0;

//variables to display inputs values from peronalinformation page       
const displayFirstname = document.getElementById('display-firstname');
const displayLastname = document.getElementById('display-lastname');
const displayEmail = document.getElementById('display-email');
const displayNumber = document.getElementById('display-number');
const displayAbout = document.getElementById('display-about');
const displayUploadedImage =document.getElementById('display-image');
const generalInfoHeader = document.getElementById('display-about-header');


const displayHeader = document.getElementsByClassName('display-experience-header');//header for experience display

//add more experience button
const addMoreExp = document.getElementById('add-more-experience-btn');
//prev next // buttons
const experiencePrevBtn = document.getElementById('experience-prev-btn');
const experienceNextBtn = document.getElementById('experience-next-btn');



window.onload = ()=>{
    for(let i = 1; i <= numb; i++){
    let div = document.createElement('div');
    div.className = 'new-experience-div';
    div.innerHTML=`
<div class="position-box input-box-style1">
    <label for="position" id="position-label-id" class="font-w5-s16 position-label">თანამდებობა</label>
    <input type="text" id="position-id" class="font-w4-s16 input-style1 position" onkeyup="positionInput(value,${i})" placeholder="დეველოპერი, დიზაინერი, ა.შ.">
    <p class="font-w3-s14">მინიმუმ 2 სიმბოლო</p>
    <img src="/images/valid.svg" class="validVector position-valid-vector"  alt="valid vector">
    <img src="/images/notVAlid.svg" class="notValidVector position-notvalid-vector" alt="not valid vector">
</div> 
<div class="employer-box input-box-style1">
    <label for="employer" id="employer-label-id" class="font-w5-s16 employer-label">დამსაქმებელი</label>
    <input type="text" id="employer-id" class="font-w4-s16 input-style1 employer" onkeyup="employerInput(value,${i})" placeholder="დამსაქმებელი">
    <p class="font-w3-s14">მინიმუმ 2 სიმბოლო</p>
    <img src="/images/valid.svg" class="validVector employer-valid-vector"  alt="valid vector">
    <img src="/images/notVAlid.svg" class="notValidVector employer-notvalid-vector" alt="not valid vector">
</div>
<!--dates of work experience-->
<div class="inputs-wrap work-date-box">
    <div class="starttime-box input-box-style2">
        <label for="starttime" id="starttime-label-id" class="font-w5-s16 starttime-label">დაწყების რიცხვი</label>
        <input type="date" id="starttime-id" class="font-w4-s16 input-style1 starttime" onchange="startDateInput(value,${i})">
        <img src="/images/valid.svg" class="validVector starttime-valid-vector"  alt="valid vector">
        <img src="/images/notVAlid.svg" class="notValidVector starttime-notvalid-vector" alt="not valid vector">
    </div>
    <div class="endtime-box input-box-style2">
        <label for="endtime" id="endtime-label-id" class="font-w5-s16 endtime-label">დამთავრების რიცხვი</label>
        <input type="date" id="endtime-id" class="font-w4-s16 input-style1 endtime" onchange="endDateInput(value,${i})">
        <img src="/images/valid.svg" class="validVector endtime-valid-vector"  alt="valid vector">
        <img src="/images/notVAlid.svg" class="notValidVector endtime-notvalid-vector" alt="not valid vector">
    </div>
</div> 
<!--description textarea for wor experience-->
<div class="experience-info-box">
    <span class="font-w5-s16 experience-label" id="experience-info-label">აღწერა</span>
    <textarea name="experience info" id="experience-info" class="font-w4-s16 experience" onkeyup="experienceInfInput(value,${i})"
    placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
    <img src="/images/valid.svg" class="validVector experience-valid-vector"  alt="valid vector">
    <img src="/images/notVAlid.svg" class="notValidVector experience-notvalid-vector" alt="not valid vector">
</div>
<hr class="end-line-experience">
`;
    addMoreExpBox.appendChild(div);

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
    <div class="display-experience-info">

    </div>
    </div>
    <div id="experience-live-display-added">
    </div>`;
    addMoreDisplayBox.appendChild(displayDiv);
    }

    for(let i = 0; i <= numb; i++){
    //display input values of experience page  (saved input values in case page was refreshed)

    //position input
    //check for existence of localstorage (if false it means page was laoded first time and thers no need to display anything)
    if(JSON.parse(localStorage.getItem(`positionInput${i}`))){
        displayHeader[0].style.display = 'block' ;

        const displayPosition = document.querySelectorAll('.display-position')[i];//element used for showin input on right side of page
        displayPosition.textContent = JSON.parse(localStorage.getItem(`positionInput${i}`)).value ;
        const position = document.querySelectorAll('.position')[i];
        position.value = JSON.parse(localStorage.getItem(`positionInput${i}`)).value;
    }
    //employer input
    //check for existence of localstorage (if false it means page was laoded first time and thers no need to display anything)
    if(JSON.parse(localStorage.getItem(`employerInput${i}`))){
        displayHeader[0].style.display = 'block' ;

        const displayEmployer = document.querySelectorAll('.display-employer')[i];//element used for showin input on right side of page
        displayEmployer.textContent = JSON.parse(localStorage.getItem(`employerInput${i}`)).value ;
        const employer = document.querySelectorAll('.employer')[i];
        employer.value = JSON.parse(localStorage.getItem(`employerInput${i}`)).value; 
    }
    //starttime input
    //check for existence of localstorage (if false it means page was laoded first time and thers no need to display anything)
    if(JSON.parse(localStorage.getItem(`startDateInput${i}`))){
        displayHeader[0].style.display = 'block' ;

        const displaystartDate = document.querySelectorAll('.display-start-date')[i];//element used for showin input on right side of page
        displaystartDate.textContent = JSON.parse(localStorage.getItem(`startDateInput${i}`)).value ;
        const startDate = document.querySelectorAll('.starttime')[i];
        startDate.value = JSON.parse(localStorage.getItem(`startDateInput${i}`)).value; 
    }
    //endtime input
    //check for existence of localstorage (if false it means page was laoded first time and thers no need to display anything)
    if(JSON.parse(localStorage.getItem(`endtimeInput${i}`))){
        displayHeader[0].style.display = 'block' ;

        const displayEndtime = document.querySelectorAll('.display-end-date')[i];//element used for showin input on right side of page
        displayEndtime.textContent = JSON.parse(localStorage.getItem(`endtimeInput${i}`)).value ;
        const endtime = document.querySelectorAll('.endtime')[i];
        endtime.value = JSON.parse(localStorage.getItem(`endtimeInput${i}`)).value; 
    }
    //experience input
    //check for existence of localstorage (if false it means page was laoded first time and thers no need to display anything)
    if(JSON.parse(localStorage.getItem(`experienceInput${i}`))){
        displayHeader[0].style.display = 'block' ;

        const displayExperience = document.querySelectorAll('.display-experience-info')[i];//element used for showin input on right side of page
        displayExperience.textContent = JSON.parse(localStorage.getItem(`experienceInput${i}`)).value ;
        const experience = document.querySelectorAll('.experience')[i];
        experience.value = JSON.parse(localStorage.getItem(`experienceInput${i}`)).value; 
    }
    
    }    
};


//personal informations \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//display input values of personalinformation page  (previos page values)
generalInfoHeader.style.display = 'block';
displayFirstname.textContent = localStorage.getItem('firstname');
displayLastname.textContent = localStorage.getItem('lastname');
if(localStorage.getItem('perosnalImg')){
    displayUploadedImage.innerHTML = `<img src="${localStorage.getItem('perosnalImg')}" alt="personal image">`;}
displayAbout.textContent = localStorage.getItem('generalInfo');
displayEmail.textContent = localStorage.getItem('email');
displayNumber.textContent = localStorage.getItem('phone');






//=>experience infromation page, display input values and verify 
//position 
function positionInput(value, index){
    //
    localStorage.setItem(`positionInput${index}`,JSON.stringify({value:value,index:index}));
    // display input on right side of page 
    const displayPosition = document.querySelectorAll('.display-position');//element used for showin input on right side of page
    displayPosition[index].textContent = value ;//shows input on right side of page
    displayHeader[0].style.display = 'block' ;

    
    //verify input 
    const position = document.querySelectorAll('.position');
    const positionLabel = document.querySelectorAll('.position-label');
    const validVector = document.querySelectorAll('.position-valid-vector');
    const notValidVector = document.querySelectorAll('.position-notvalid-vector');

    const positionWR = value.replace(/\s/g, '') //Whitespace Remove
    if(positionWR.length >= 2){
        positionLabel[index].style.color = '#000000';
        position[index].style.borderColor= '#98E37E';
        validVector[index].style.display = 'block';
        notValidVector[index].style.display = 'none';
    }else{
        positionLabel[index].style.color = '#E52F2F';
        position[index].style.borderColor= '#E52F2F';
        validVector[index].style.display = 'none';
        notValidVector[index].style.display = 'block';
    }
}


//employer
function employerInput(value, index){
    //
    localStorage.setItem(`employerInput${index}`,JSON.stringify({value:value,index:index}));
    const displayEmployer = document.querySelectorAll('.display-employer');//element used for showin input on right side of page
    displayEmployer[index].textContent = value;//shows input on right side of page
    displayHeader[0].style.display = 'block';

    //verify input 
    const employer = document.querySelectorAll('.employer');
    const employerLabel = document.querySelectorAll('.employer-label');
    const validVector = document.querySelectorAll('.employer-valid-vector');
    const notValidVector = document.querySelectorAll('.employer-notvalid-vector');

    const employerWR = value.replace(/\s/g, '') //Whitespace Remove
    if(employerWR.length >= 2){
        employerLabel[index].style.color = '#000000';
        employer[index].style.borderColor= '#98E37E';
        validVector[index].style.display = 'block';
        notValidVector[index].style.display = 'none';
    }else{
        employerLabel[index].style.color = '#E52F2F';
        employer[index].style.borderColor= '#E52F2F';
        validVector[index].style.display = 'none';
        notValidVector[index].style.display = 'block';
    }
}

//start date 
function startDateInput(value, index){
    //
    localStorage.setItem(`startDateInput${index}`,JSON.stringify({value:value,index:index}));
    const displayStartTime = document.querySelectorAll('.display-start-date');//element used for showin input on right side of page
    displayStartTime[index].textContent = value;//shows input on right side of page
    displayHeader[0].style.display = 'block' ;

    //verify
    const startDate = document.querySelectorAll('.starttime');
    const startDateLabel = document.querySelectorAll('.starttime-label');
    const validVector = document.querySelectorAll('.starttime-valid-vector');
    const notValidVector = document.querySelectorAll('.starttime-notvalid-vector');
    if(value.length >= 1){
        startDate[index].style.borderColor= '#98E37E';
        startDateLabel[index].style.color = '#000000';
        validVector[index].style.display = 'block';
        notValidVector[index].style.display = 'none';
        validVector[index].style.top = "57%";//adjust vector position so its not on top of input calendar logo
        validVector[index].style.right = '-30px';//adjust vector position so its not on top of input calendar logo
    }else{
        startDate[index].style.borderColor= '#E52F2F';
        startDateLabel[index].style.color = '#E52F2F';
        validVector[index].style.display = 'none';
        notValidVector[index].style.display = 'block';
        notValidVector[index].style.top = "57%";//adjust vector position so its not on top of input calendar logo
        notValidVector[index].style.right = '-30px';//adjust vector position so its not on top of input calendar logo
    }

}

//end date 
function endDateInput(value, index){
    //
    localStorage.setItem(`endtimeInput${index}`,JSON.stringify({value:value,index:index}));
    const displayEndTime = document.querySelectorAll('.display-end-date');//element used for showin input on right side of page
    displayEndTime[index].textContent = '- '+ value;//shows input on right side of page
    displayHeader[0].style.display = 'block' ;

    //verify
    const endtime = document.querySelectorAll('.endtime');
    const endtimeLabel = document.querySelectorAll('.endtime-label');
    const validVector = document.querySelectorAll('.endtime-valid-vector');
    const notValidVector = document.querySelectorAll('.endtime-notvalid-vector');
    if(value.length >= 1){
        endtime[index].style.borderColor= '#98E37E';
        endtimeLabel[index].style.color = '#000000';
        validVector[index].style.display = 'block';
        notValidVector[index].style.display = 'none';
        validVector[index].style.top = "57%";//adjust vector position so its not on top of input calendar logo
        validVector[index].style.right = '-30px';//adjust vector position so its not on top of input calendar logo
    }else{
        endtime[index].style.borderColor= '#E52F2F';
        endtimeLabel[index].style.color = '#E52F2F';
        validVector[index].style.display = 'none';
        notValidVector[index].style.display = 'block';
        notValidVector[index].style.top = "57%";//adjust vector position so its not on top of input calendar logo
        notValidVector[index].style.right = '-30px';//adjust vector position so its not on top of input calendar logo
    }

}

//experience info 
function experienceInfInput(value, index){
    //
    localStorage.setItem(`experienceInput${index}`,JSON.stringify({value:value,index:index}));
    const displayExperienceInf = document.querySelectorAll('.display-experience-info');//element used for showin input on right side of page
    displayExperienceInf[index].textContent = value;//shows input on right side of page
    displayHeader[0].style.display = 'block' ;

    //verify
    const experience = document.querySelectorAll('.experience');
    const experienceLabel = document.querySelectorAll('.experience-label');
    const validVector = document.querySelectorAll('.experience-valid-vector');
    const notValidVector = document.querySelectorAll('.experience-notvalid-vector');
    if(value.length >= 1){
        experience[index].style.borderColor= '#98E37E';
        experienceLabel[index].style.color = '#000000';
        validVector[index].style.display = 'block';
        notValidVector[index].style.display = 'none';
        validVector[index].style.top = "53%";//adjust vector position 
        validVector[index].style.right = '-30px';//adjust vector position 
    }else{
        experience[index].style.borderColor= '#E52F2F';
        experienceLabel[index].style.color = '#E52F2F';
        validVector[index].style.display = 'none';
        notValidVector[index].style.display = 'block';
        notValidVector[index].style.top = "53%";//adjust vector position 
        notValidVector[index].style.right = '-30px';//adjust vector position 
    }
}













//add more experience options on click 
addMoreExp.addEventListener('click',()=>{
    numb += 1; 
    localStorage.setItem('size',numb);

    let div = document.createElement('div');
    div.className = 'new-experience-div';
    div.innerHTML=`
<div class="position-box input-box-style1">
    <label for="position" id="position-label-id" class="font-w5-s16 position-label">თანამდებობა</label>
    <input type="text" id="position-id" class="font-w4-s16 input-style1 position" onkeyup="positionInput(value,${numb})" placeholder="დეველოპერი, დიზაინერი, ა.შ.">
    <p class="font-w3-s14">მინიმუმ 2 სიმბოლო</p>
    <img src="/images/valid.svg" class="validVector position-valid-vector"  alt="valid vector">
    <img src="/images/notVAlid.svg" class="notValidVector position-notvalid-vector" alt="not valid vector">
</div> 
<div class="employer-box input-box-style1">
    <label for="employer" id="employer-label-id" class="font-w5-s16 employer-label">დამსაქმებელი</label>
    <input type="text" id="employer-id" class="font-w4-s16 input-style1 employer" onkeyup="employerInput(value,${numb})" placeholder="დამსაქმებელი">
    <p class="font-w3-s14">მინიმუმ 2 სიმბოლო</p>
    <img src="/images/valid.svg" class="validVector employer-valid-vector"  alt="valid vector">
    <img src="/images/notVAlid.svg" class="notValidVector employer-notvalid-vector" alt="not valid vector">
</div>
<!--dates of work experience-->
<div class="inputs-wrap work-date-box">
    <div class="starttime-box input-box-style2">
        <label for="starttime" id="starttime-label-id" class="font-w5-s16 starttime-label">დაწყების რიცხვი</label>
        <input type="date" id="starttime-id" class="font-w4-s16 input-style1 starttime" onchange="startDateInput(value,${numb})">
        <img src="/images/valid.svg" class="validVector starttime-valid-vector"  alt="valid vector">
        <img src="/images/notVAlid.svg" class="notValidVector starttime-notvalid-vector" alt="not valid vector">
    </div>
    <div class="endtime-box input-box-style2">
        <label for="endtime" id="endtime-label-id" class="font-w5-s16 endtime-label">დამთავრების რიცხვი</label>
        <input type="date" id="endtime-id" class="font-w4-s16 input-style1 endtime" onchange="endDateInput(value,${numb})">
        <img src="/images/valid.svg" class="validVector endtime-valid-vector"  alt="valid vector">
        <img src="/images/notVAlid.svg" class="notValidVector endtime-notvalid-vector" alt="not valid vector">
    </div>
</div> 
<!--description textarea for wor experience-->
<div class="experience-info-box">
    <span class="font-w5-s16 experience-label" id="experience-info-label">აღწერა</span>
    <textarea name="experience info" id="experience-info" class="font-w4-s16 experience" onkeyup="experienceInfInput(value,${numb})"
    placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
    <img src="/images/valid.svg" class="validVector experience-valid-vector"  alt="valid vector">
    <img src="/images/notVAlid.svg" class="notValidVector experience-notvalid-vector" alt="not valid vector">
</div>
<hr class="end-line-experience">
`;
    addMoreExpBox.appendChild(div);

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
    <div class="display-experience-info">

    </div>
 </div>
 <div id="experience-live-display-added">
</div>`;
    addMoreDisplayBox.appendChild(displayDiv);
});




experiencePrevBtn.addEventListener('click',()=>{
    
    window.location = 'personalInfo.html'
});


experienceNextBtn.addEventListener('click',()=>{
    localStorage.removeItem("size");
});

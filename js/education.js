//variables /////////////////////////////////////////////////
const addMoreDisplayBox = document.getElementById('experience-live-display-added');//place where content gets added afret add more btn is clickde(inputs display)
const displayEducationHeader = document.getElementById('display-education-header');


//dropdown menu
const dropDown = document.getElementById('degree-dropdown');
const menu = document.querySelector('.menu');
const selected = document.querySelector('.selected');


//variables to display inputs values from peronalinformation page       
const displayFirstname = document.getElementById('display-firstname');
const displayLastname = document.getElementById('display-lastname');
const displayEmail = document.getElementById('display-email');
const displayNumber = document.getElementById('display-number');
const displayAbout = document.getElementById('display-about');
const displayUploadedImage = document.getElementById('display-image');
const generalInfoHeader = document.getElementById('display-about-header');
const displayExperienceHeader = document.getElementById('display-experience-header');


//personal informations \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//display personalinformation page input values (previos page values)
generalInfoHeader.style.display = 'block';
displayFirstname.textContent = localStorage.getItem('firstname');
displayLastname.textContent = localStorage.getItem('lastname');
if(localStorage.getItem('perosnalImg')){
    displayUploadedImage.innerHTML = `<img src="${localStorage.getItem('perosnalImg')}" alt="personal image">`;}
displayAbout.textContent = localStorage.getItem('generalInfo');
displayEmail.textContent = localStorage.getItem('email');
displayNumber.textContent = localStorage.getItem('phone');


//prev next // buttons
const experiencePrevBtn = document.getElementById('experience-prev-btn');
const experienceNextBtn = document.getElementById('experience-next-btn');




// on page load
window.onload = ()=>{
    //api get degrees data
    async function getDegrees(){
        const response = await fetch('https://resume.redberryinternship.ge/api/degrees',{
            method:'GET',
            headers:{
                'accept': 'application/json'
            }        
        });
        if(!response.ok){
            throw new Error(`${response.status}`)
        }
        const data = await response.json();
        //for each create li element and deploy on html
        data.forEach(value =>{
            const newLi = document.createElement('li');
            newLi.id = value.id;
            newLi.innerHTML = value.title;
            menu.appendChild(newLi);
        })
    };
    getDegrees();

    //add html content filled from localstorage(experience page inputs)
    displayExperienceHeader.style.display = 'block';
    //
    for(let i = 0; i <= localStorage.getItem('size'); i++){
    //===========================================
        let displayDiv = document.createElement('div');
        displayDiv.className = 'experience-live-display';
        displayDiv.innerHTML = `

        <div class="job-wraper font-w5-s16">
        <div class="display-position">
            ${localStorage.getItem(`validPosition${i}`)}
        </div>
        <div class="display-employer">
            ${localStorage.getItem(`validEmployer${i}`)}
        </div>
        </div>
        <div class="display-experience-date">
            <span class="display-start-date">${localStorage.getItem(`validStartDate${i}`)}</span>
            <span class="display-end-date">${localStorage.getItem(`validEndtime${i}`)}</span>
        </div>
        <div class="display-experience-info">
            ${localStorage.getItem(`validExperienceInfo${i}`)}
        </div>`;
        addMoreDisplayBox.appendChild(displayDiv);
    }

    //add html content filled from localstorage(education page inputs)
    //education  school inputs 
    if(JSON.parse(localStorage.getItem('schoolInput0'))){
        displayEducationHeader.style.display = 'block' ;
        const displayschool = document.querySelectorAll('.display-school')[0];//element used for showin input on right side of page
        displayschool.textContent = JSON.parse(localStorage.getItem('schoolInput0')).value;
        const school = document.querySelectorAll('.school')[0];
        school.value =  JSON.parse(localStorage.getItem('schoolInput0')).value;
    }
    //education  degree inputs 
    if(localStorage.getItem('degreeInput0')){
        displayEducationHeader.style.display = 'block' ;
        const displayschool = document.querySelectorAll('.display-degree')[0];//element used for showin input on right side of page
        displayschool.textContent = localStorage.getItem('degreeInput0');
        const selected = document.querySelector('.selected');
        selected.textContent = localStorage.getItem('degreeInput0');
    }
    //education  end time  inputs 
    if(JSON.parse(localStorage.getItem('educationEndtimeInput0'))){
        displayEducationHeader.style.display = 'block' ;
        const displaEndTime = document.querySelectorAll('.display-education-end-date')[0];//element used for showin input on right side of page
        displaEndTime.textContent = JSON.parse(localStorage.getItem('educationEndtimeInput0')).value;
        const endtime = document.querySelectorAll('.endtime')[0];
        endtime.value =  JSON.parse(localStorage.getItem('educationEndtimeInput0')).value;
    }
    //education  end time  inputs 
    if(JSON.parse(localStorage.getItem('educationInput0'))){
        displayEducationHeader.style.display = 'block' ;
        const displayEducationInfo = document.querySelectorAll('.display-education-info')[0];//element used for showin input on right side of page
        displayEducationInfo.textContent = JSON.parse(localStorage.getItem('educationInput0')).value;
        const education = document.querySelectorAll('.experience')[0];
        education.value =  JSON.parse(localStorage.getItem('educationInput0')).value;
    }
    
};







//=>education  infromation page, display input values and verify 
//school ==========================
function schoolInput(value, index){
    //
    localStorage.setItem(`schoolInput${index}`,JSON.stringify({value:value,index:index}));
    // display input on right side of page 
    const displayschool = document.querySelectorAll('.display-school');//element used for showin input on right side of page
    displayschool[index].textContent = value ;//shows input on right side of page
    displayEducationHeader.style.display = 'block' ;

    
    //verify input 
    const school = document.querySelectorAll('.school');
    const schoolLabel = document.querySelectorAll('.school-label');
    const validVector = document.querySelectorAll('.school-valid-vector');
    const notValidVector = document.querySelectorAll('.school-notvalid-vector');

    const schoolWR = value.replace(/\s/g, '') //Whitespace Remove
    if(schoolWR.length >= 2){
        schoolLabel[index].style.color = '#000000';
        school[index].style.borderColor= '#98E37E';
        validVector[index].style.display = 'block';
        notValidVector[index].style.display = 'none';
        //localStorage.setItem(`validschool${index}`,value);
    }else{
        schoolLabel[index].style.color = '#E52F2F';
        school[index].style.borderColor= '#E52F2F';
        validVector[index].style.display = 'none';
        notValidVector[index].style.display = 'block';
        //localStorage.removeItem(`validschool${index}`);
    }
};


//degree //custom dropdown menu 
dropDown.addEventListener('click',()=>{
    const displayDegree = document.querySelectorAll('.display-degree')
    
    menu.classList.toggle('menu-open');

    const options = document.querySelectorAll('.menu li');
    options.forEach(option =>{
    option.addEventListener('click',()=>{
        selected.textContent = option.textContent;
        displayDegree[0].textContent = selected.textContent;
        localStorage.setItem(`degreeInput0`,option.textContent);
    })
    });
});


// education end date ==============
function endDateInput(value, index){
    //
    localStorage.setItem(`educationEndtimeInput${index}`,JSON.stringify({value:value,index:index}));
    const displayEndTime = document.querySelectorAll('.display-education-end-date');//element used for showin input on right side of page
    displayEndTime[index].textContent =  value;//shows input on right side of page
    displayEducationHeader.style.display = 'block' ; 

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
       // localStorage.setItem(`validEndtime${index}`,value);
    }else{
        endtime[index].style.borderColor= '#E52F2F';
        endtimeLabel[index].style.color = '#E52F2F';
        validVector[index].style.display = 'none';
        notValidVector[index].style.display = 'block';
        notValidVector[index].style.top = "57%";//adjust vector position so its not on top of input calendar logo
        notValidVector[index].style.right = '-30px';//adjust vector position so its not on top of input calendar logo
       // localStorage.removeItem(`validEndtime${index}`);
    }
};



//education  info ========================
function experienceInfInput(value, index){
    //
    localStorage.setItem(`educationInput${index}`,JSON.stringify({value:value,index:index}));
    const displayEducationInfo = document.querySelectorAll('.display-education-info');//element used for showin input on right side of page
    displayEducationInfo[index].textContent = value;//shows input on right side of page
    displayEducationHeader.style.display = 'block' ;

    //verify
    const education = document.querySelectorAll('.experience');
    const educationLabel = document.querySelectorAll('.experience-label');
    const validVector = document.querySelectorAll('.experience-valid-vector');
    const notValidVector = document.querySelectorAll('.experience-notvalid-vector');
    if(value.length >= 1){
        education[index].style.borderColor= '#98E37E';
        educationLabel[index].style.color = '#000000';
        validVector[index].style.display = 'block';
        notValidVector[index].style.display = 'none';
        validVector[index].style.top = "53%";//adjust vector position 
        validVector[index].style.right = '-30px';//adjust vector position 
       // localStorage.setItem(`validExperienceInfo${index}`,value);
    }else{
        education[index].style.borderColor= '#E52F2F';
        educationLabel[index].style.color = '#E52F2F';
        validVector[index].style.display = 'none';
        notValidVector[index].style.display = 'block';
        notValidVector[index].style.top = "53%";//adjust vector position 
        notValidVector[index].style.right = '-30px';//adjust vector position
       // localStorage.removeItem(`validExperienceInfo${index}`); 
    }
}












experiencePrevBtn.addEventListener('click',()=>{
    window.location = 'experience.html'
});
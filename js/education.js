//variables /////////////////////////////////////////////////
const addMoreDisplayBox = document.getElementById('experience-live-display-added');

//used to count haw many times add more BTN was clicked
let numb = localStorage.getItem('sizeEd') ? Number(localStorage.getItem('sizeEd')) : 0;
localStorage.setItem('educationAmount',0)
let degreesArray = [];

const addMoreEducationBTn= document.getElementById('add-more-experience-btn');
const addMoreEducationBox = document.getElementById('add-more-education-box');
const addMoreEducationDisplayBox = document.getElementById('education-live-display-added');
const displayEducationHeader = document.getElementById('display-education-header');

//dropdown menu
const dropDowns = document.querySelectorAll('.degree-dropdown');
const menu = document.querySelectorAll('.menu');
const selected = document.querySelectorAll('.selected');


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
//display personalinformation page input values (previos page values)@@@@@
generalInfoHeader.style.display = 'block';
displayFirstname.textContent = localStorage.getItem('firstname');
displayLastname.textContent = localStorage.getItem('lastname');
if(localStorage.getItem('perosnalImg')){
    displayUploadedImage.innerHTML = `<img src="${localStorage.getItem('perosnalImg')}" alt="personal image">`;}
displayAbout.textContent = localStorage.getItem('generalInfo');
displayEmail.textContent = localStorage.getItem('email');
displayNumber.textContent = localStorage.getItem('phone');


//prev next // buttons
const prevBtn = document.getElementById('experience-prev-btn');
const nextBtn = document.getElementById('experience-next-btn');




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
        degreesArray = data;
        //for each create li element and deploy on html
        data.forEach(value =>{
            const newLi = document.createElement('li');
            newLi.id = value.id;
            newLi.className = 'list';
            newLi.innerHTML = value.title;
            menu[0].appendChild(newLi);
        });
        addHtml();
        fillHtml();
    };
    getDegrees();
    
    //show header for experience content
    displayExperienceHeader.style.display = 'block';
    //fill page (right sidei) with experience page inputs @@@@@
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

    //add education page inputs as many times as addmore BTN was clicked 
    function addHtml(){
        for(let i = 1; i <= numb; i++){
        let div = document.createElement('div');
        div.className = 'new-education-div';
        div.innerHTML = `
    <!--inputs //-->
            <div class="school-box input-box-style1">
                <label for="school" id="school-label-id" class="font-w5-s16 school-label">????????????????????????????????????</label>
                <input type="text" id="school-id" class="font-w4-s16 input-style1 school"
                onkeyup="schoolInput(value,${numb})" placeholder="????????????????????????????????????">
                <p class="font-w3-s14">????????????????????? 2 ?????????????????????</p>
                <img src="/images/valid.svg" class="validVector school-valid-vector"  alt="valid vector">
                <img src="/images/notVAlid.svg" class="notValidVector school-notvalid-vector" alt="not valid vector">
            </div> 
                <!--education degree and date-->
            <div class="inputs-wrap work-date-box">
                <div class="degree-box input-box-style2">
                <!--dropdown-->
                <label for="degree" id="degree-label-id" class="font-w5-s16 degree-label">?????????????????????</label>
                <div id="degree-dropdown" class="input-style1 degree-dropdown" onclick="degree(${numb})">
                    <div class="select">
                    <span class="selected">????????????????????? ?????????????????????</span>
                    <span class="dropdown-arrow"></span>
                    </div>
                    <ul class="menu" >
                        <li id="${degreesArray[0].id}" classname="list">${degreesArray[0].title}</li>
                        <li id="${degreesArray[0].id}" classname="list">${degreesArray[1].title}</li>
                        <li id="${degreesArray[0].id}" classname="list">${degreesArray[2].title}</li>
                        <li id="${degreesArray[0].id}" classname="list">${degreesArray[3].title}</li>
                        <li id="${degreesArray[0].id}" classname="list">${degreesArray[4].title}</li>
                        <li id="${degreesArray[0].id}" classname="list">${degreesArray[5].title}</li>
                        <li id="${degreesArray[0].id}" classname="list">${degreesArray[6].title}</li>
                        <li id="${degreesArray[0].id}" classname="list">${degreesArray[7].title}</li>
                        <li id="${degreesArray[0].id}" classname="list">${degreesArray[8].title}</li>
                    </ul>
                    </div>
                    <img src="/images/valid.svg" class="validVector degree-valid-vector"  alt="valid vector">
                    <img src="/images/notVAlid.svg" class="notValidVector degree-notvalid-vector" alt="not valid vector">
                </div>
                <div class="endtime-box input-box-style2">
                    <label for="endtime" id="endtime-label-id" class="font-w5-s16 endtime-label">????????????????????????????????? ??????????????????</label>
                    <input type="date" id="endtime-id" class="font-w4-s16 input-style1 endtime" onchange="endDateInput(value,${numb})">
                    <img src="/images/valid.svg" class="validVector endtime-valid-vector"  alt="valid vector">
                    <img src="/images/notVAlid.svg" class="notValidVector endtime-notvalid-vector" alt="not valid vector">
                </div>
                </div> 
                <!--description textarea for wor education-->
                <div class="experience-info-box">
                    <span class="font-w5-s16 experience-label" id="experience-info-label">??????????????????</span>
                    <textarea name="experience info" id="experience-info" class="font-w4-s16 experience" onkeyup="experienceInfInput(value,${numb})"
                    placeholder="?????????????????????????????? ??????????????????"></textarea>
                    <img src="/images/valid.svg" class="validVector experience-valid-vector"  alt="valid vector">
                    <img src="/images/notVAlid.svg" class="notValidVector experience-notvalid-vector" alt="not valid vector">
                </div>
                <hr class="end-line-experience">`;
    addMoreEducationBox.appendChild(div);

         //===========================================
    let displayDiv = document.createElement('div');
    displayDiv.className = 'education-live-display';
    displayDiv.innerHTML = `
                <div class="education-live-display">
                <div>
                   <div class="education-wraper">
                    <div class="display-school">
                     
                    </div>
                    <div class="display-degree">
                    
                    </div>
                    </div>
                    <div class="display-education-date">
                        <span class="display-education-end-date"></span>
                    </div> 
                </div>
                <div class="display-education-info">
                      
                </div>
            </div>`;
 
    addMoreEducationDisplayBox.appendChild(displayDiv);
    }
};
    function fillHtml(){
    for(let i = 0; i <= numb; i++){
    //add html content filled from localstorage(education page inputs) so data isnt lost in case page was refreshed^^^
    //education  school inputs 
    if(JSON.parse(localStorage.getItem(`schoolInput${i}`))){
        displayEducationHeader.style.display = 'block' ;
        const displayschool = document.querySelectorAll('.display-school')[i];//element used for showin input on right side of page
        displayschool.textContent = JSON.parse(localStorage.getItem(`schoolInput${i}`)).value;
        const school = document.querySelectorAll('.school')[i];
        school.value =  JSON.parse(localStorage.getItem(`schoolInput${i}`)).value;
    }
    //education  degree inputs 
    if(localStorage.getItem(`degreeInput${i}`)){
        displayEducationHeader.style.display = 'block' ;
        const displayDegree = document.querySelectorAll('.display-degree')[i];//element used for showin input on right side of page
        displayDegree.textContent = localStorage.getItem(`degreeInput${i}`);
        const selected = document.querySelectorAll('.selected')[i];
        selected.textContent = localStorage.getItem(`degreeInput${i}`);
    }
    //education  end time  inputs 
    if(JSON.parse(localStorage.getItem(`educationEndtimeInput${i}`))){
        displayEducationHeader.style.display = 'block' ;
        const displaEndTime = document.querySelectorAll('.display-education-end-date')[i];//element used for showin input on right side of page
        displaEndTime.textContent = JSON.parse(localStorage.getItem(`educationEndtimeInput${i}`)).value;
        const endtime = document.querySelectorAll('.endtime')[i];
        endtime.value =  JSON.parse(localStorage.getItem(`educationEndtimeInput${i}`)).value;
    }
    //education  end time  inputs 
    if(JSON.parse(localStorage.getItem(`educationTextBoxInput${i}`))){
        displayEducationHeader.style.display = 'block' ;
        const displayEducationInfo = document.querySelectorAll('.display-education-info')[i];//element used for showin input on right side of page
        displayEducationInfo.textContent = JSON.parse(localStorage.getItem(`educationTextBoxInput${i}`)).value;
        const education = document.querySelectorAll('.experience')[i];
        education.value =  JSON.parse(localStorage.getItem(`educationTextBoxInput${i}`)).value;
    }
    };};
    
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
        localStorage.setItem(`validschool${index}`,value);
    }else{
        schoolLabel[index].style.color = '#E52F2F';
        school[index].style.borderColor= '#E52F2F';
        validVector[index].style.display = 'none';
        notValidVector[index].style.display = 'block';
        localStorage.removeItem(`validschool${index}`);
    }
};



//degree //custom dropdown menu  
function degree(index){
    const menu = document.querySelectorAll('.menu');
    const options = document.querySelectorAll('.list');
    const selected = document.querySelectorAll('.selected');
    const displayDegree = document.querySelectorAll('.display-degree')
    //show/hide options on click
    menu[index].classList.toggle('menu-open');

    menu[index].addEventListener('click',(event)=>{
        selected[index].textContent = event.target.firstChild.nodeValue;
        displayDegree[index].textContent = event.target.firstChild.nodeValue;
        localStorage.setItem(`degreeInput${index}`,event.target.firstChild.nodeValue);
        localStorage.setItem(`degID${index}`,event.target.id)
        console.log(localStorage.getItem(`degID${index}`))
    });
};



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
        localStorage.setItem(`validEducationEndtime${index}`,value);
    }else{
        endtime[index].style.borderColor= '#E52F2F';
        endtimeLabel[index].style.color = '#E52F2F';
        validVector[index].style.display = 'none';
        notValidVector[index].style.display = 'block';
        notValidVector[index].style.top = "57%";//adjust vector position so its not on top of input calendar logo
        notValidVector[index].style.right = '-30px';//adjust vector position so its not on top of input calendar logo
        localStorage.removeItem(`validEducationEndtime${index}`);
    }
};



//education  info ========================
function experienceInfInput(value, index){
    //
    localStorage.setItem(`educationTextBoxInput${index}`,JSON.stringify({value:value,index:index}));
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
        localStorage.setItem(`validEducationTextBox${index}`,value);
    }else{
        education[index].style.borderColor= '#E52F2F';
        educationLabel[index].style.color = '#E52F2F';
        validVector[index].style.display = 'none';
        notValidVector[index].style.display = 'block';
        notValidVector[index].style.top = "53%";//adjust vector position 
        notValidVector[index].style.right = '-30px';//adjust vector position
        localStorage.removeItem(`validEducationTextBox${index}`); 
    }
}




addMoreEducationBTn.addEventListener('click',()=>{
    numb += 1; 
    localStorage.setItem('sizeEd',numb);
    localStorage.setItem('educationAmount',numb)

    let div = document.createElement('div');
    div.className = 'new-education-div';
    div.innerHTML = `
    <!--inputs //-->
            <div class="school-box input-box-style1">
                <label for="school" id="school-label-id" class="font-w5-s16 school-label">????????????????????????????????????</label>
                <input type="text" id="school-id" class="font-w4-s16 input-style1 school"
                onkeyup="schoolInput(value,${numb})" placeholder="????????????????????????????????????">
                <p class="font-w3-s14">????????????????????? 2 ?????????????????????</p>
                <img src="/images/valid.svg" class="validVector school-valid-vector"  alt="valid vector">
                <img src="/images/notVAlid.svg" class="notValidVector school-notvalid-vector" alt="not valid vector">
            </div> 
                <!--education degree and date-->
            <div class="inputs-wrap work-date-box">
                <div class="degree-box input-box-style2">
                <!--dropdown-->
                <label for="degree" id="degree-label-id" class="font-w5-s16 degree-label">?????????????????????</label>
                <div id="degree-dropdown" class="input-style1 degree-dropdown" onclick="degree(${numb})">
                    <div class="select">
                    <span class="selected">????????????????????? ?????????????????????</span>
                    <span class="dropdown-arrow"></span>
                    </div>
                    <ul class="menu" >
                            
                    </ul>
                    </div>
                    <img src="/images/valid.svg" class="validVector degree-valid-vector"  alt="valid vector">
                    <img src="/images/notVAlid.svg" class="notValidVector degree-notvalid-vector" alt="not valid vector">
                </div>
                <div class="endtime-box input-box-style2">
                    <label for="endtime" id="endtime-label-id" class="font-w5-s16 endtime-label">????????????????????????????????? ??????????????????</label>
                    <input type="date" id="endtime-id" class="font-w4-s16 input-style1 endtime" onchange="endDateInput(value,${numb})">
                    <img src="/images/valid.svg" class="validVector endtime-valid-vector"  alt="valid vector">
                    <img src="/images/notVAlid.svg" class="notValidVector endtime-notvalid-vector" alt="not valid vector">
                </div>
                </div> 
                <!--description textarea for wor education-->
                <div class="experience-info-box">
                    <span class="font-w5-s16 experience-label" id="experience-info-label">??????????????????</span>
                    <textarea name="experience info" id="experience-info" class="font-w4-s16 experience" onkeyup="experienceInfInput(value,${numb})"
                    placeholder="?????????????????????????????? ??????????????????"></textarea>
                    <img src="/images/valid.svg" class="validVector experience-valid-vector"  alt="valid vector">
                    <img src="/images/notVAlid.svg" class="notValidVector experience-notvalid-vector" alt="not valid vector">
                </div>
                <hr class="end-line-experience">`;
    addMoreEducationBox.appendChild(div);

    //===========================================
    let displayDiv = document.createElement('div');
    displayDiv.className = 'education-live-display';
    displayDiv.innerHTML = `
                <div class="education-live-display">
                <div>
                   <div class="education-wraper">
                    <div class="display-school">
                     
                    </div>
                    <div class="display-degree">
                    
                    </div>
                    </div>
                    <div class="display-education-date">
                        <span class="display-education-end-date"></span>
                    </div> 
                </div>
                <div class="display-education-info">
                      
                </div>
            </div>`;
 
    addMoreEducationDisplayBox.appendChild(displayDiv);

    //fill dropdown BTN with options from api
    const menu = document.querySelectorAll('.menu');
    degreesArray.forEach(value =>{
        const newLi = document.createElement('li');
        newLi.id = value.id;
        newLi.className = 'list';
        newLi.innerHTML = value.title;
        menu[numb].appendChild(newLi);
    });
});


// previous page
prevBtn.addEventListener('click',()=>{
    window.location = 'experience.html'
});


// next page
nextBtn.addEventListener('click',()=>{
    
    let counter = -1;
    //at least first form of inputs must be valid 
    if(localStorage.getItem(`validschool${0}`) && localStorage.getItem(`degreeInput${0}`) &&
       localStorage.getItem(`validEducationEndtime${0}`) && localStorage.getItem(`validEducationTextBox${0}`) ){
        counter += 1;
        //if add more education was clicked then they must be either all valid or empty
        for(let i = 1; i <= numb; i++){
                if(localStorage.getItem(`validschool${i}`) && localStorage.getItem(`degreeInput${i}`) &&
                    localStorage.getItem(`validEducationEndtime${i}`) && localStorage.getItem(`validEducationTextBox${i}`) ){
                    counter += 1;
                }else if(!localStorage.getItem(`validschool${i}`) && JSON.parse(localStorage.getItem(`schoolInput${i}`)).value == 0 && 
                         !localStorage.getItem(`degreeInput${i}`) && !localStorage.getItem(`validEducationEndtime${i}`) && 
                         !localStorage.getItem(`validEducationTextBox${i}`)){
                    counter += 1;
                }
        };
    };
    if(counter===numb){
        window.location = 'resume.html';
    }
});


//back to main page (arrow BTN) 
const backArrow = document.getElementById('personalInf-back-arrow');
backArrow.addEventListener('click',()=>{
    //clear 
    localStorage.clear()
    window.location = '../index.html'
});
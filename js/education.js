//variables /////////////////////////////////////////////////
const addMoreDisplayBox = document.getElementById('experience-live-display-added');//place where content gets added afret add more btn is clickde(inputs display)

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
    
};


//custom dropdown menu 
dropDown.addEventListener('click',()=>{
    menu.classList.toggle('menu-open');

    const options = document.querySelectorAll('.menu li');
    options.forEach(option =>{
    option.addEventListener('click',()=>{
        selected.textContent = option.textContent
    })
   });

});















experiencePrevBtn.addEventListener('click',()=>{
    window.location = 'experience.html'
});
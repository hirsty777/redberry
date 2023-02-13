
window.onload = ()=>{
    

    const experiences = [];
    for(let i = 0; i <= localStorage.getItem('experienceAmount');i++){
        experiences.push({
            position:`${localStorage.getItem(`validPosition${i}`)}`,
            employer:`${localStorage.getItem(`validEmployer${i}`)}`,
            start_date:`${localStorage.getItem(`validStartDate${i}`)}`,
            due_date:`${localStorage.getItem(`validEndtime${i}`)}`,
            description:`${localStorage.getItem(`validExperienceInfo${i}`)}`,
        })
    };
    const educations = [];
    for(let i = 0; i <= localStorage.getItem('educationAmount');i++){
        educations.push({
            institute:`${localStorage.getItem(`validschool${i}`)}`,
            degree_id:`${localStorage.getItem(`degID${i}`)}`,
            due_date:`${localStorage.getItem(`validEducationEndtime${i}`)}`,
            description:`${localStorage.getItem(`validEducationTextBox${i}`)}`
        })
    }
    console.log(localStorage.getItem('degID0'))
    const formData = new FormData();
    formData.append('name',localStorage.getItem('validFirstname'));
    formData.append('surname',localStorage.getItem('validLastname'));
    formData.append('email',localStorage.getItem('validEmail'));
    formData.append('phone_number',"+"+localStorage.getItem('validPhone'));
    for(let i = 0; i <experiences.length ;i++){
        formData.append(`experiences[${i}][position]`,experiences[i].position);
        formData.append(`experiences[${i}][employer]`,experiences[i].employer);
        formData.append(`experiences[${i}][start_date]`,experiences[i].start_date);
        formData.append(`experiences[${i}][due_date]`,experiences[i].due_date);
        formData.append(`experiences[${i}][description]`,experiences[i].description);
    }
    for(let i = 0; i <educations.length ;i++){
        formData.append(`educations[${i}][institute]`,educations[i].institute);
        formData.append(`educations[${i}][degree_id]`,educations[i].degree_id);
        formData.append(`educations[${i}][start_date]`,educations[i].start_date);
        formData.append(`educations[${i}][due_date]`,educations[i].due_date);
        formData.append(`educations[${i}][description]`,educations[i].description);
    }
      
    //convers to file
    function dataURLtoFile(dataurl, filename) {
 
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }
    var file = dataURLtoFile(localStorage.getItem('perosnalImg'),'profile');   
    formData.append('image',file);
    




    async function postData(){
        const response = await fetch(`https://resume.redberryinternship.ge/api/cvs`,{
            method:"POST",
            headers:{
                'accept': 'application/json',
            },
            body:formData
        });
        const responseData = await response.json();
        console.log(responseData)


        

        const firstData = document.getElementById('first-data');
        let div = document.createElement('div');
        div.innerHTML = `
        <!--data side-->
        <div class="personalInfo-live-display-data">
            <div class="personalInfo-live-display-fullname">
               <div class="display-fullname-firstname" id="display-firstname">
               ${responseData.name}
               </div>
               <div class="display-fullname-lastname" id="display-lastname">
               ${responseData.surname}
               </div>
            </div>
        
            <div class="personalInfo-live-display-contacts">
                <div class="display-contacts-email" id="display-email">
                ${responseData.email}   
                </div>
                <div class="display-contacts-number" id="display-number">
                ${responseData.phone_number}   
                </div>
            </div>
            <div class="personalInfo-live-display-generalInf">
                <div class="display-generalInf-header" id="display-about-header">
                    ჩემ შესახებ
                </div>
                <div class="display-generalInf-data" id="display-about">
                ${responseData.about_me}   
                </div>
            </div>
        </div>
        <!--image side-->
        <div class="personalInfo-live-display-image" id="display-image">
            <img src="${responseData.image} " alt="">
        </div>
        `;
        firstData.appendChild(div);
        document.getElementById('display-about-header').style.display = 'block';
        //=====================================================================


        
        const secendData = document.getElementById('experience-live-display-added');
        responseData.experiences.forEach(data=>{

        
        let div2 = document.createElement('div');
        div2.className = 'experience-live-display';
        div2.innerHTML =`
        <div class="experience-live-display">
                <h1 class="display-experience-header" id="display-experience-header">გამოცდილება</h1>
                <div class="job-wraper font-w5-s16">
                    <div class="display-position">
                        ${data.position}
                    </div>
                    <div class="display-employer">
                        ${data.employer}
                    </div>
                </div>
                
                <div class="display-experience-date">
                    <span class="display-start-date">${data.start_date}</span>
                    <span class="display-end-date">${data.due_date}</span>
                </div>
                <div class="display-experience-info">
                    ${data.description}
                </div>
            </div>
        `
        secendData.appendChild(div2);
    })
        document.getElementById('display-experience-header').style.display = 'block';
    }   
    postData();
}







//back to main page (arrow BTN) 
const backArrow = document.getElementById('personalInf-back-arrow');
backArrow.addEventListener('click',()=>{
    //clear 
    localStorage.clear()

    window.location = '../index.html'
});
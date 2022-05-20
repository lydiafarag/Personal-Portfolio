const sections = document.querySelectorAll('.section');
const sectBtns= document.querySelectorAll('.controls');
const sectBtn  = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function pageTrans(){
    //Button click active class 
    for(let i= 0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){ 
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className =currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })
    }

    //sections active class
    allSections.addEventListener('click', (e)=>{
        const id= e.target.dataset.id; //the dataset is referring to whatever was selected ie., the given data id
        if (id){
            //removes the selected from the others
            sectBtns.forEach((btn)=> {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections when one is displayed

            sections.forEach((section)=> {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active'); 
        }
    
    })

}





pageTrans();
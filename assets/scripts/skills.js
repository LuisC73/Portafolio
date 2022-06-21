
export default function skills(){
    const rowSkills = document.querySelector(".skills__carrousel"),
    arrowleft = document.getElementById("arrow-left"),
    arrowRight = document.getElementById("arrow-right");

    arrowRight.addEventListener('click',()=>{
        rowSkills.scrollLeft += rowSkills.offsetWidth;
    })

    arrowleft.addEventListener('click',()=>{
        rowSkills.scrollLeft -= rowSkills.offsetWidth;
    })
}


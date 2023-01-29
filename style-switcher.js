const styleswitchertoggle=document.querySelector(".style-switcher-toggle");
styleswitchertoggle.addEventListener("click", () => {

    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll",()=>{

    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/**.....................theme color....................*/
const alternatestyles =document.querySelectorAll(".alternate-style");
function setactivstyle(color)
{
    alternatestyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled",true);
        }
    })
}

/*-----------theme dark &light mode---------------*/

const daynight = document.querySelector(".day-night");
daynight.addEventListener("click",()=>{

    document.body.classList.toggle("dark");
})

window.addEventListener("load",()=>{

    if(document.body.classList.contains("dark"))
    {
        daynight.querySelector("p").classList.add("cl")
    }
})

/*---------------typing--------------- */
var typed = new Typed(".typing",{
    strings:["web designer","web developer","Programmer","Actor"],
    typeSpeed:100,
    BackSpeed:50,
    loop:true
})


/*------------transform animation------------------ */

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});


const hiddenelement=document.querySelectorAll(".hidden");
hiddenelement.forEach((el)=>observer.observe(el));

const hiddenelement1=document.querySelectorAll(".hidden2");
hiddenelement1.forEach((el)=>observer.observe(el));
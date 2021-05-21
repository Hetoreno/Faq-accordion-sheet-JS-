const questionButton = document.querySelectorAll(".button");
const answer = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");
const buttonTitle = document.querySelectorAll(".title");


questionButton.forEach((event)=>{
    event.addEventListener("click",()=>{
        event.style.fontWeight="bold";
        event.classList.toggle("flip");
        let child = event.children[0];
        child.classList.toggle("font-weight");
        
        const panel = event.nextElementSibling;
        panel.classList.toggle("show");
        
        
        

        
    })
})
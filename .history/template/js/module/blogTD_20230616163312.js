export default function blogDT(){
    const btnCV = document.querySelector(".btn-cv");
    if(btnCV){
        const popupForm = document.querySelector(".popup");
        btnCV.addEventListener("click",()=>{
            popupForm.classList.toggle("open")
        })
    }
}
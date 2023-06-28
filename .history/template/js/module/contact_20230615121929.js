export default function Contact(){
    const btnContact = document.querySelector(".btn-contact");
    if(btnContact){
        const formBoxContact = document.querySelector(".contact-form-box");
        const headerModal = document.querySelector(".header-modal");
        btnContact.addEventListener("click",()=>{
            formBoxContact.classList.toggle("show");
            headerModal.classList.toggle("show");

        })
    }
}
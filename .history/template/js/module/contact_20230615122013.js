export default function Contact(){
    const btnContact = document.querySelector(".btn-contact");
    if(btnContact){
        const formBoxContact = document.querySelector(".contact-form-box");
        const contactModal = document.querySelector(".contact-modal");
        btnContact.addEventListener("click",()=>{
            formBoxContact.classList.toggle("show");
            contactModal.classList.toggle("show");

        })
    }
}
export default function Contact(){
    const btnContact = document.querySelector(".btn-contact");
    if(btnContact){
        const formBoxContact = document.querySelector(".contact-form-box");
        const contactModal = document.querySelector(".contact-modal");
        const btnExitsContact = document.querySelector(".contact-form-box-exits");
        btnContact.addEventListener("click",()=>{
            formBoxContact.classList.toggle("show");
            contactModal.classList.toggle("show");

        })

        btnExitsContact.addEventListener("click",()=>{
            formBoxContact.classList.toggle("show");
            contactModal.classList.toggle("show");

        })

    }
}
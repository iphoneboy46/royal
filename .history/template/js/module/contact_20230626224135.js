export default function Contact(){
    const btnContact = document.querySelector(".btn-contact");
    if(btnContact){
        const formBoxContact = document.querySelector(".contact-form-box");
        const contactModal = document.querySelector(".contact-modal");
        const btnExitsContact = document.querySelector(".contact-form-box-exits");
        const contactContentRight = document.querySelector(".contact-form-content-right");
        btnContact.addEventListener("click",()=>{
            formBoxContact.classList.toggle("show");
            contactModal.classList.toggle("show");
            contactContentRight.classList.toggle("hide");


            if(window.screen.width < 1200){
                document.body.style.overflow = "hidden";
            }

        })

        btnExitsContact.addEventListener("click",()=>{
            formBoxContact.classList.toggle("show");
            contactModal.classList.toggle("show");
            contactContentRight.classList.toggle("hide");

        })

        contactModal.addEventListener("click",()=>{
            formBoxContact.classList.toggle("show");
            contactModal.classList.toggle("show");
            contactContentRight.classList.toggle("hide");

        })

    }
}
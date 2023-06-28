export default function GSAP(){
    gsap.to(".news-ct-img-gsap", { 
        scrollTrigger:{
            trigger:".news-ct-img-gsap",
            toggleActions : "restart pause reverse restart"
        },
        width: "100%",
       
        duration: 2, 
        ease: "linear"
     });
}
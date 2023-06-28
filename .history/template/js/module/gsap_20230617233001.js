export default function GSAP(){
    gsap.to(".news-ct-img-gsap", { 
        scrollTrigger:{
            trigger:".news-ct-img-gsap",
            toggleActions : "restart"
        },
        rotation: 360, 
        duration: 2, 
        ease: "linear"
     });
}
export default function GSAP(){
    gsap.to(".news-ct-img-gsap", { 
        scrollTrigger:{
            trigger:".news-ct-img-gsap",
            toggleActions : "restart pause reverse restart"
        },
        x:400,
        rotation: 360, 
        duration: 2, 
        ease: "linear"
     });
}
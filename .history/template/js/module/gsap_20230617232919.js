export default function GSAP(){
    gsap.to(".news-ct-img-gsap", { 
        scrollTrigger:{
            trigger:".news-ct-img-gsap",
            
        },
        rotation: 360, 
        duration: 2, 
        ease: "linear"
     });
}
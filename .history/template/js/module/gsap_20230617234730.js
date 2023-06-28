export default function GSAP() {
    const image = document.querySelector(".news-ct-img-gsap");
    gsap.fromTo(image, {scale:1}, {scale:4, ease: "none", force3D:true, y:-100,
    scrollTrigger:({
    pin:true,
    trigger: jQuery(image).parent().parent(),  
    
    // pinType: isTouch ? 'fixed' : 'transform',
    scrub: true,
   
    }),
});       
}

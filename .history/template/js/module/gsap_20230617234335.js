export default function GSAP() {
    const image = document.querySelector(".news-ct-img-gsap");
    gsap.fromTo(image, {scale:0}, {scale:1, ease: "none", force3D:true, fixed: true,
    scrollTrigger:({
    pin:true,
    trigger: jQuery(image).parent().parent(),  
    
    pinType: isTouch ? 'fixed' : 'transform',
    scrub: true,
   
    }),
});       
}

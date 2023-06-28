export default function GSAP() {
  const image = document.querySelector(".news-ct-img-gsap");
  gsap.fromTo(
    image,
    { scale: 1, y:0 },
    {
      scale: 3.2,
      ease: "linear",
      force3D: true,
      y: 0,
    
      scrollTrigger: {
        pin: true,
       
        start: "top top",
        end: "bottom bottom",
       
        // pinType: isTouch ? 'fixed' : 'transform',
        scrub: true,
      },
    }
  );
 
}

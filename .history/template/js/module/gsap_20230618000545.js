export default function GSAP() {
  const image = document.querySelector(".news-ct-img-gsap");
  gsap.fromTo(
    image,
    { scale: 1, y:0 },
    {
      scale: 3.1,
      ease: "none",
      force3D: true,
      
    fixed:true,
      scrollTrigger: {
        pin: true,
        trigger: jQuery(image).parent().parent(),
        start: "top top",
        end: "bottom bottom",
        // pinType: isTouch ? 'fixed' : 'transform',
        scrub: true,
      },
    }
  );
}

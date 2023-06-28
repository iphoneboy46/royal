export default function GSAP() {
  const image = document.querySelector(".news-ct-img-gsap");
  gsap.fromTo(
    image,
    { scale: 1 },
    {
      scale: 3.2,
      ease: "none",
      force3D: true,
    
      scrollTrigger: {
        pin: true,
        trigger: jQuery(image).parent().parent(),
        start: "top top",
        end: "bottom bottom",
        y: -450,
        // pinType: isTouch ? 'fixed' : 'transform',
        scrub: true,
      },
    }
  );
}

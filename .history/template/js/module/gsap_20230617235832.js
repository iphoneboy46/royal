export default function GSAP() {
  const image = document.querySelector(".news-ct-img-gsap");
  gsap.fromTo(
    image,
    { scale: 1 },
    {
      scale: 3.2,
      ease: "none",
      force3D: true,
      y: -450,
      scrollTrigger: {
        pin: true,
        trigger: jQuery(image).parent().parent(),
        start: "center bottom",
        end: "bottom center",
        // pinType: isTouch ? 'fixed' : 'transform',
        scrub: true,
      },
    }
  );
}

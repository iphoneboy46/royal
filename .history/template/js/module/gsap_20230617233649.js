export default function GSAP() {
  gsap.to(".news-ct-img-gsap", {
    scrollTrigger: {
      trigger: ".news-ct-img-gsap",
      toggleActions: "restart pause reverse restart",
    },
    width: "100%",
    zoomIn: "100%",
    duration: 2,
    ease: "linear",
   
    scale: 1,
    ease: "none",
    force3D: true,
  });
}

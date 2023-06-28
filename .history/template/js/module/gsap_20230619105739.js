export default function GSAP() {
  const image = document.querySelector(".news-ct-img-gsap");
  if (image) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(image, {
      scrollTrigger: {
        trigger: image,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        pin: false,
        pinSpacing: false,
        markers: true,
      },

      duration: 5,
      ease: "none",
      width: "100vw",
      height: "100vh",
      maxWidth: "none",
      borderRadius: "0",
    });
  }
  const myPham = document.querySelector(".my-pham")
  if (myPham) {
  const imageRight = myPham.querySelector(".my-pham-right-content-img-box");

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRight, {
      scrollTrigger: {
        trigger: imageRight,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        pin: false,
        pinSpacing: false,
        markers: true,
      },
    
      duration: 5,
      ease: "none",
      width: "100%",
      maxWidth: "none",
      x:-100,
    });
  }
}

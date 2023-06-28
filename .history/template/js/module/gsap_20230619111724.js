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
  const myPham = document.querySelector(".my-pham");
  if (myPham) {
    const imageRightBox = myPham.querySelector(
      ".my-pham-right-content-img-box"
    );
    const imageRight = myPham.querySelector(".my-pham-right-content-img img");

    gsap.registerPlugin(ScrollTrigger);
    gsap.form(imageRightBox, {
      scrollTrigger: {
       
        trigger: imageRightBox,
        start: "top 30%",
        end: "bottom center",
        scrub: 5,
        pin: false,
        pinSpacing: false,
        markers: true,
      },

      duration: 1,
      ease: "none",
      width: "110%",
      maxWidth: "none",
      x: "-5.8%",
    });

    gsap.to(imageRightBox, {
      scrollTrigger: {
       
        trigger: imageRightBox,
        start: "top 30%",
        end: "bottom center",
        scrub: 5,
        pin: false,
        pinSpacing: false,
        markers: true,
      },

      duration: 1,
      ease: "none",
      width: "110%",
      maxWidth: "none",
      x: "-5.8%",
    });



    gsap.to(imageRight, {
      scrollTrigger: {
        trigger: imageRight,
        start: "top 30%",
        end: "bottom center",
        scrub: 5,
        pin: false,
        pinSpacing: false,
        markers: true,
      },

      duration: 1,
      ease: "linear",
      scale: 1,
    });
  }
}

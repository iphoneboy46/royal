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
    const imageRight = myPham.querySelector(".my-pham-right-content-img");

    const imageLeft = myPham.querySelector(".my-pham-left-content-img img");

    // var locoScroll = new LocomotiveScroll({
    //   el: document.querySelector(".my-pham-right-content-img img"),
    //   smooth: true,
    // });

  
    // locoScroll.on("scroll", ScrollTrigger.update);

    // ScrollTrigger.scrollerProxy(".my-pham-right-content-img img", {
    //   scrollTop(value) {
    //     return arguments.length
    //       ? locoScroll.scrollTo(value, 0, 0)
    //       : locoScroll.scroll.instance.scroll.y;
    //   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    //   getBoundingClientRect() {
    //     return {
    //       top: 0,
    //       left: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //     };
    //   },
    //   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    //   pinType: document.querySelector(".my-pham").style.transform
    //     ? "transform"
    //     : "fixed",
    // });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRight, {
      scrollTrigger: {
        trigger: imageRight,
        start: "top 40%",
        end: "bottom bottom",
        scrub: true,
        pin: false,
        pinSpacing: false,
        markers: true,
      },

      duration: 10,
      ease: "none",
      scale: 1,
      transform: "none",
      // x: "-8%",
    });

    gsap.to(imageRightBox, {
      scrollTrigger: {
        trigger: imageRightBox,
        start: "top 40%",
        end: "bottom bottom",
        scrub: 1,
        pin: false,
        pinSpacing: false,
        markers: true,
      },

      duration: 2,
      ease: "none",
      scale: 1,
      transform: "none",
      // x: "-8%",
    });

    gsap.to(imageLeft, {
      scrollTrigger: {
        trigger: imageLeft,
        start: "top 90%",
        end: "bottom bottom",
        scrub: 2,
        pin: false,
        pinSpacing: false,
        markers: true,
      },

      duration: 1,
      ease: "in",
      height: "100%",
    });
  }

  window.addEventListener("load", () => {
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
  });
}

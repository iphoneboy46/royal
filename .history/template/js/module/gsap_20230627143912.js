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
    const imageRightImg = myPham.querySelector(
      ".my-pham-right-content-img img"
    );

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
        scrub: 1,
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

    gsap.to(imageRightImg, {
      scrollTrigger: {
        trigger: imageRightImg,
        start: "top 40%",
        end: "bottom bottom",
        scrub: 5,
        pin: false,
        pinSpacing: false,
        markers: true,
      },

      duration: 1000,
      ease: "none",
      scale: 1,
      transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
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

      duration: 10,
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

  /// gsap horizontal
  // const dichVuList = document.querySelector(".dich-vu-list");
  // if (dichVuList) {
  //   gsap.registerPlugin(ScrollTrigger);

  //   //Horizontal Scroll Galleries

  //   const horizontalSections = gsap.utils.toArray(".dich-vu-list");

  //   horizontalSections.forEach(function (sec, i) {
  //     const pinWrap = sec.querySelector(".dich-vu-list-content");

  //     let pinWrapWidth;
  //     let horizontalScrollLength;

  //     function refresh() {
  //       pinWrapWidth = pinWrap.scrollWidth;
  //       horizontalScrollLength = pinWrapWidth - window.innerWidth;
  //     }

  //     // window.addEventListener("load", function () {
  //     refresh();
  //     // Pinning and horizontal scrolling
  //     gsap.to(pinWrap, {
  //       scrollTrigger: {
  //         scrub: 1,
  //         trigger: sec,
  //         pin: sec,
  //         start: "center center",
  //         end: () => `+=${pinWrapWidth}`,
  //         invalidateOnRefresh: true,
  //         duration: 1,
  //       },
  //       x: () => -horizontalScrollLength,
  //       ease: "none",
  //     });

  //     ScrollTrigger.addEventListener("refreshInit", refresh);
  //     // });
  //   });
  // }
  const homeBanner = document.querySelector(".banner-home");
  if (homeBanner) {
    const bannerHomeTitle = homeBanner.querySelector(".banner-home-title");
    gsap.registerPlugin(ScrollTrigger);

    let widthWindow = window.screen.width;
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeBanner,
        // toggleActions: "restart pause resume reverse", // play, pause , resume , reverse , restart , reset
        start: "top top", // "top , center , end , pixels , % , relative to top"
        end: "bottom bottom",
        scrub: 5, // thao tac scroll chuot: true , false , number
      },
    });

    tl.from(homeBanner, {
      duration: 5,
      scale: 1,
      x: 0,

      ease: "none",
    });

    tl.to(homeBanner, {
      width: "64.4rem",
      height: "20rem",

      x: widthWindow - 644 - 128,
      y: 350,
      duration: 5,
    });
  }
}

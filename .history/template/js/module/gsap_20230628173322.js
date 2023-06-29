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
    gsap.registerPlugin(ScrollTrigger);

    let widthWindow = window.screen.width;
    let heightWindow = window.screen.height;
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeBanner,
        // toggleActions: "restart pause resume reverse", // play, pause , resume , reverse , restart , reset
        start: "top", // "top , center , end , pixels , % , relative to top"
        end: "+=1",
        scrub: 6, // thao tac scroll chuot: true , false , number
      },
    });

    tl.from(homeBanner, {
      scale: 1,
      x: 0,
      ease: Power0.easeOut,
      duration: 10,
    });

    tl.to(homeBanner, {
      width: "50%",
      height: "25rem",
      ease: Power0.easeOut,
      x: widthWindow / 2,
      y: heightWindow / 4,
      duration: 10,
    });

    tl.to(homeBanner, {
      width: "64.4rem",
      height: "20rem",
      ease: Power1.easeOut,
      x: widthWindow / 1.8,
      y: heightWindow / 3,
      duration: 10,
    });

    const bannerHomeImages = homeBanner.querySelectorAll(".banner-home-img");
    bannerHomeImages.forEach((bannerHomeImage) => {
      gsap.to(bannerHomeImage, {
        scrollTrigger: {
          trigger: bannerHomeImage,
          start: "top top",
          end: "bottom center",
          scrub: false,
          pin: false,
          pinSpacing: false,
          markers: true,
        },

        duration: 1,
        ease: "none",
        scale: 1.5,
        transform: "none",
      });
    });

    const bannerHomeTitles = homeBanner.querySelectorAll(".banner-home-title");
    bannerHomeTitles.forEach((bannerHomeTitle) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(bannerHomeTitle, {
        scrollTrigger: {
          trigger: bannerHomeTitle,
          // toggleActions: "restart pause resume reverse", // play, pause , resume , reverse , restart , reset
          start: "top 40%", // "top , center , end , pixels , % , relative to top"
          end: "+=250",
          scrub: 4, // thao tac scroll chuot: true , false , number
        },
        opacity: 0,
        duration: 5,
      });
    });

    const homeAllBg = document.querySelector(".home-all-bg");
    if (homeAllBg) {
      let widthWindow = window.screen.width;
      gsap.set(".home-all-bg", {
        position: "fixed",
        left: scrollHeight / 2
      });
      gsap.registerPlugin(ScrollTrigger);
    
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: homeAllBg,
          // toggleActions: "restart pause resume reverse", // play, pause , resume , reverse , restart , reset
          start: "top top", // "top , center , end , pixels , % , relative to top"
          end: "+=1300",
          scrub: 6, // thao tac scroll chuot: true , false , number
        },
      });

      tl.from(homeAllBg, {
        scale: 1,
        y: -800,
        x: widthWindow / 2,
        width: "37rem",
        height: "37rem",
        rotation: -45,
        ease: "none",
        duration: 10,
      });

      tl.to(homeAllBg, {
        width: "100%",
        height: "100%",
        ease: "none",
        rotation: 0,
        x: 0,
        y: 0,
        duration: 10,
      });

      // const homeAllImg = homeAllBg.querySelector(".home-all-bg img");

      // gsap.registerPlugin(ScrollTrigger);

      // gsap.from(homeAllImg, {
      //   scrollTrigger: {
      //     trigger: homeAllImg,
      //     start: "top top",
      //     end: "bottom bottom",
      //     scrub: false,
      //     pin: false,
      //     pinSpacing: false,
      //     markers: true,
      //   },
      //   scale:1.5,
      //   rotation:45,
      //   duration: 10,

      // });
    }
  }

  // const homeContainer = document.querySelector("#fullpage");
  // if(homeContainer){
  //   var locoScroll = new LocomotiveScroll({
  //     el: document.querySelector("#fullpage"),
  //     smooth: true,
  //   });

  //   locoScroll.on("scroll", ScrollTrigger.update);

  //   ScrollTrigger.scrollerProxy(".#fullpage", {
  //     scrollTop(value) {
  //       return arguments.length
  //         ? locoScroll.scrollTo(value, 0, 0)
  //         : locoScroll.scroll.instance.scroll.y;
  //     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  //     getBoundingClientRect() {
  //       return {
  //         top: 0,
  //         left: 0,
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //       };
  //     },
  //     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  //     pinType: document.querySelector("#fullpage").style.transform
  //       ? "transform"
  //       : "fixed",
  //   });
  // }
}

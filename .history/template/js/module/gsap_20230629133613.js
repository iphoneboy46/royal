export default function GSAP() {
  const image = document.querySelector(".news-ct-img-gsap");
  if (image) {
    if (window.screen.width > 1200) {
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
  }
  const myPham = document.querySelector(".my-pham");
  if (myPham) {
    if (window.screen.width > 1200) {
      const imageRightBox = myPham.querySelector(
        ".my-pham-right-content-img-box"
      );
      const imageRight = myPham.querySelector(".my-pham-right-content-img");
      const imageRightImg = myPham.querySelector(
        ".my-pham-right-content-img img"
      );

      const imageLeft = myPham.querySelector(".my-pham-left-content-img img");

      gsap.registerPlugin(ScrollTrigger);

      gsap.to(imageRight, {
        scrollTrigger: {
          trigger: imageRight,
          start: "top center",
          end: "bottom +=800",
          scrub: 1,
          pin: false,
          pinSpacing: false,
          markers: true,
        },

        duration: 5,
        ease: "none",
        scale: 1,
        transform: "none",
        // x: "-8%",
      });

      gsap.to(imageRightImg, {
        scrollTrigger: {
          trigger: imageRightImg,
          start: "top center",
          end: "bottom +=800",
          scrub: 1,
          pin: false,
          pinSpacing: false,
          markers: true,
        },

        duration: 5,
        ease: "none",
        scale: 1,
        transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
        // x: "-8%",
      });

      gsap.to(imageRightBox, {
        scrollTrigger: {
          trigger: imageRightBox,
          start: "top center",
          end: "bottom +=800",
          scrub: 1,
          pin: false,
          pinSpacing: false,
          markers: true,
        },

        duration: 5,
        ease: "none",
        scale: 1,
        transform: "none",
        // x: "-8%",
      });

      gsap.to(imageLeft, {
        scrollTrigger: {
          trigger: imageLeft,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
          pin: false,
          pinSpacing: false,
          markers: true,
        },

        duration: 1,
        ease: "none",
        height: "100%",
      });
    }
  }

  const homeBanner = document.querySelector(".banner-home");
  if (homeBanner) {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".banner-home-img img");
    const bannerHomewrap = homeBanner.querySelector(
      ".banner-home-wrapper .swiper"
    );
    let widthWindow = window.screen.width;
    let heightWindow = window.screen.height;

    var tl;

    function bezier() {
      widthWindow = window.screen.width;
      heightWindow = window.screen.height;
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: homeBanner,
          start: "+=1", // "top , center , end , pixels , % , relative to top"
          end: "+=1",
          scrub: 4, // thao tac scroll chuot: true , false , number
        },
      });

      tl.from(homeBanner, {
        width: "100%",
        height: "100vh",
        x: 0,
        y: 0,
        ease: Power0.easeOut,
        duration: 1,
      });

      tl.to(homeBanner, {
        width: "50%",
        height: "25rem",
        ease: Power0.easeOut,
        x: widthWindow / 2,
        y: heightWindow / 4,
        duration: 1,
      });

      tl.to(homeBanner, {
        width: "64.4rem",
        height: "20rem",
        ease: Power1.easeOut,
        x: widthWindow / 1.8,
        y: heightWindow / 3,
        duration: 1,
      });

      return tl;
    }

    function resizeCheck() {
      var progress = tl.progress();
      tl.kill();
      bezier().progress(progress);
    }

    bezier();
    window.addEventListener("resize", resizeCheck);

    const homeAllBg = document.querySelector(".home-all-bg");
    if (homeAllBg) {
      let widthWindow = window.screen.width;
      // gsap.set(".home-all-bg", {
      //   position: "absolute",
      //   left: widthWindow / 2,
      // });
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: homeAllBg,
          // toggleActions: "restart pause resume reverse", // play, pause , resume , reverse , restart , reset
          start: "top top", // "top , center , end , pixels , % , relative to top"
          end: "+=1400",
          scrub: 3, // thao tac scroll chuot: true , false , number
        },
      });

      tl.from(homeAllBg, {
        xPercent: -50,
        yPercent: -50,
        scale: 1,
        top: "-50%",
        left: "50%",
        width: "37rem",
        height: "37rem",
        rotation: -45,
        ease: "none",
        duration: 2,
      });

      tl.to(homeAllBg, {
        width: "100%",
        height: "100%",
        duration: 10,
      });
    }
  }

  / gsap horizontal
  const dichVuList = document.querySelector(".dich-vu-list");
  if (dichVuList) {
    gsap.registerPlugin(ScrollTrigger);

    //Horizontal Scroll Galleries

    const horizontalSections = gsap.utils.toArray(".dich-vu-list");

    horizontalSections.forEach(function (sec, i) {
      const pinWrap = sec.querySelector(".dich-vu-list-content");

      let pinWrapWidth;
      let horizontalScrollLength;

      function refresh() {
        pinWrapWidth = pinWrap.scrollWidth;
        horizontalScrollLength = pinWrapWidth - window.innerWidth;
      }

      // window.addEventListener("load", function () {
      refresh();
      // Pinning and horizontal scrolling
      gsap.to(pinWrap, {
        scrollTrigger: {
          scrub: 1,
          trigger: sec,
          pin: sec,
          start: "center center",
          end: () => `+=${pinWrapWidth}`,
          invalidateOnRefresh: true,
          duration: 1,
        },
        x: () => -horizontalScrollLength,
        ease: "none",
      });

      ScrollTrigger.addEventListener("refreshInit", refresh);
      // });
    });
  }
}

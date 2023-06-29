export default function SwiperModule() {
  try {
    const eleFree = document.querySelectorAll(".free-slide");

    if (eleFree) {
      eleFree.forEach((ele, i) => {
        var swiper2 = new Swiper(ele.querySelector(".swiper"), {
          slidesPerView: "auto",
          lazy: !0,
          pagination: {
            el: ele.querySelector(".swiper-pagination"),
            clickable: !0,
          },
          loop: ele.querySelector(".swiper").classList.contains("--loop"),
          navigation: {
            nextEl: ele.querySelector(".next"),
            prevEl: ele.querySelector(".prev"),
          },
          speed: 1000,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        });
        if (!ele.querySelector(".swiper").classList.contains("--auto")) {
          swiper2.autoplay.stop();
        }
      });
    }

    const contactSlide = document.querySelector(".contact-slide");
    if (contactSlide) {
      var swiper = new Swiper(contactSlide.querySelector(".mySwiper"), {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: "auto",
        effect: "fade",
        speed: 1200,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: contactSlide.querySelector(".swiper-pagination"),
          clickable: true,
        },
      });
    }

    const brandLogo = document.querySelector(".brand-logo");
    if (brandLogo) {
      var swiperBrandLogo = new Swiper(
        brandLogo.querySelector(".mySwiperLogo"),
        {
          speed: 1600,
          // autoplay: {
          //   delay: 4000,
          //   disableOnInteraction: false,
          // },
          pagination: {
            el: brandLogo.querySelector(".swiper-pagination"),
            clickable: true,

            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          },
        }
      );

      swiperBrandLogo.on("slideChange", () => {
        const activeIndex = swiperBrandLogo.activeIndex;

        const brandLogoItems = brandLogo.querySelectorAll(
          ".brand-logo-right-item"
        );

        const brandLogoItemActive = brandLogo.querySelector(
          ".brand-logo-right-item.active"
        );

        if (brandLogoItemActive) {
          brandLogoItemActive.classList.remove("active");
        }

        brandLogoItems[activeIndex].classList.add("active");
      });

      const brandLogoItems = brandLogo.querySelectorAll(
        ".brand-logo-right-item"
      );

      brandLogoItems.forEach((brandLogoItem, index) => {
        brandLogoItem.addEventListener("click", () => {
          const brandLogoItemActive = brandLogo.querySelector(
            ".brand-logo-right-item.active"
          );

          swiperBrandLogo.slideTo(index);

          if (brandLogoItemActive) {
            brandLogoItemActive.classList.remove("active");
          }

          brandLogoItem.classList.add("active");
        });
      });
    }

    // const dichVuList = document.querySelector(".dich-vu-list");
    // if (dichVuList) {
    //   var swiper = new Swiper(dichVuList.querySelector(".mySwiper"), {
    //     speed: 800,
    //     slidesPerView: "auto",
    //     mousewheel: {
    //       enabled: true,
    //       sensitivity: 2,
    //       releaseOnEdges: true,
    //     },

    //     mousewheelControl: true,
    //     followFinger: true,
    //     loop: true,
    //     // freeMode: true,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //   });
    // }

    const dichVuMore = document.querySelector(".dich-vu-more");
    if (dichVuMore) {
      var swiperTop = new Swiper(dichVuMore.querySelector(".mySwiperTop"), {
        speed: 500,
        slidesPerView: "auto",
        mousewheel: {
          enabled: true,
          sensitivity: 1,
          releaseOnEdges: true,
        },
        effect: "slide",
        parallax: true,
        loop: true,

        mousewheelControl: true,
        followFinger: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      var swiperBottom = new Swiper(
        dichVuMore.querySelector(".mySwiperBottom"),
        {
          speed: 500,
          slidesPerView: "auto",
          mousewheel: {
            enabled: true,
            sensitivity: 1,
            releaseOnEdges: true,
          },
          effect: "slide",
          mousewheelControl: true,
          followFinger: true,
          loop: true,
          // freeMode: true,
          parallax: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        }
      );

      // swiperTop.controller.control = swiperBottom;
      // swiperBottom.controller.control = swiperTop;
    }

    const aboutOverView = document.querySelector(".about-overview");

    if (aboutOverView) {
      var swiper = new Swiper(aboutOverView.querySelector(".mySwiperRight"), {
        grabCursor: true,
        effect: "creative",
        slidesPerView: "auto",
        navigation: {
          nextEl: aboutOverView.querySelector(".next"),
          prevEl: aboutOverView.querySelector(".prev"),
        },
        speed: 1000,
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });
    }

    const brandLogoAbout = document.querySelector(".about-partners");
    if (brandLogoAbout) {
      var swiperBrandLogo = new Swiper(
        brandLogoAbout.querySelector(".mySwiperLogoAbout"),
        {
          speed: 1600,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          pagination: {
            el: brandLogoAbout.querySelector(".swiper-pagination.about"),
            clickable: true,

            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          },
        }
      );

      swiperBrandLogo.on("slideChange", () => {
        const activeIndex = swiperBrandLogo.activeIndex;

        const brandLogoItems = brandLogo.querySelectorAll(
          ".brand-logo-right-item"
        );

        const brandLogoItemActive = brandLogo.querySelector(
          ".brand-logo-right-item.active"
        );

        if (brandLogoItemActive) {
          brandLogoItemActive.classList.remove("active");
        }

        brandLogoItems[activeIndex].classList.add("active");
      });

      const brandLogoItems = brandLogo.querySelectorAll(
        ".brand-logo-right-item"
      );

      brandLogoItems.forEach((brandLogoItem, index) => {
        brandLogoItem.addEventListener("click", () => {
          const brandLogoItemActive = brandLogo.querySelector(
            ".brand-logo-right-item.active"
          );

          swiperBrandLogo.slideTo(index);

          if (brandLogoItemActive) {
            brandLogoItemActive.classList.remove("active");
          }

          brandLogoItem.classList.add("active");
        });
      });
    }

    const aboutCulture = document.querySelector(".about-culture");
    if (aboutCulture) {
      var swiperLeft = new Swiper(aboutCulture.querySelector(".mySwiperLeft"), {
        slidesPerView: "auto",
        speed: 1200,
        loop: "true",
        navigation: {
          nextEl: aboutCulture.querySelector(".next"),
          prevEl: aboutCulture.querySelector(".prev"),
        },
      });

      var swiperRight = new Swiper(
        aboutCulture.querySelector(".mySwiperRight"),
        {
          loop: "true",
          slidesPerView: "auto",
          speed: 1200,
        }
      );

      swiperLeft.controller.control = swiperRight;
      swiperRight.controller.control = swiperLeft;
    }

    const dichVuApm = document.querySelector(".dich-vu-apm");
    if (dichVuApm) {
      var swiperApmRight = new Swiper(
        dichVuApm.querySelector(".mySwiperApmRight"),
        {
          direction: "horizontal",
          slidesPerView: "2",
          speed: 1200,
          loop: true,
          centeredSlides: false,
          spaceBetween: 24,
          pagination: {
            el: dichVuApm.querySelector(".swiper-pagination"),
            clickable: true,
          },

          breakpoints: {
            600: {
              direction: "vertical",
              slidesPerView: "3",
              spaceBetween: 36,
              centeredSlides: true,
            },

            1024: {
              direction: "vertical",
              slidesPerView: "3",
              spaceBetween: 36,
              centeredSlides: true,
            },
          },
        }
      );

      var swiperApmLeft = new Swiper(
        dichVuApm.querySelector(".mySwiperApmLeft"),
        {
          speed: 1200,
          loop: true,
          slidesPerView: "auto",
        }
      );

      swiperApmRight.controller.control = swiperApmLeft;
      swiperApmLeft.controller.control = swiperApmRight;
    }

    const bannerHome = document.querySelector(".banner-home");
    if (bannerHome) {
      var swiper = new Swiper(bannerHome.querySelector(".mySwiper"), {
        slidesPerView: "auto",
        effect: "fade",
        speed: 1200,
        autoPlay: {
          delay: 5000,
        },
        pagination: {
          el: bannerHome.querySelector(".swiper-pagination"),
          clickable: true,
        },
      });
    }

    const homeBrand = document.querySelector(".home-brand");
    if (homeBrand) {
      const homeBrandContent = homeBrand.querySelector(".home-brand-content");
      var swiperBrandContent = new Swiper(
        homeBrandContent.querySelector(".mySwiperBrandContent"),
        {
          centeredSlides: true,
          loop: true,
          slidesPerView: "auto",
          speed: 1200,
          grabCursor: true,
          effect: "creative",
          creativeEffect: {
            prev: {
              shadow: true,
              translate: [0, 0, -800],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          },
        }
      );

      const homeBrandList = homeBrand.querySelector(".home-brand-list");
      var swiperBrandList = new Swiper(
        homeBrandList.querySelector(".mySwiperBrandList"),
        {
          loop: true,
          slidesPerView: "auto",
          centeredSlides: true,
          speed: 1200,
          slideToClickedSlide: true,
          navigation: {
            nextEl: homeBrandList.querySelector(".next"),
            prevEl: homeBrandList.querySelector(".prev"),
          },
        }
      );

      swiperBrandContent.controller.control = swiperBrandList;
      swiperBrandList.controller.control = swiperBrandContent;
    }
  } catch (error) {
    console.log(error);
  }
}

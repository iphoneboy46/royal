export default function SwiperModule() {
  try {
    const bannerHome = document.querySelector(".banner-home");
    if (bannerHome) {
      const main = bannerHome.querySelector(".banner-slide");
      const swiperContainer = main.querySelector(".swiper");
      var swiper1 = new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 0,
        loopedSlides: 4,
        lazy: !0,
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        loop: swiperContainer.classList.contains("--loop"),
        pagination: {
          el: main.querySelector(".swiper-pagination"),
          clickable: !0,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '">' +
              '<span class="inner"></span>' +
              "</span>"
            );
          },
        },
        navigation: {
          nextEl: main.querySelector(".next"),
          prevEl: main.querySelector(".prev"),
        },
        speed: 1000,
        autoplay: { delay: 5000 },
        effect: "coverflow",
        parallax: !0,
        coverflowEffect: {
          rotate: 0.05,
          depth: 0,
          stretch: 0,
          modifier: 1,
          slideShadows: !1,
        },
        on: {
          init: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
              const slide = swiper.slides[i];
              const bannerMedia = slide.querySelector(".banner-media");
              const bannerdc = slide.querySelector(".banner-dc");
              const bannerct = slide.querySelector(".content");
              const bannerRight = slide.querySelector(".banner-right");
              if (bannerMedia) {
                bannerMedia.setAttribute(
                  "data-swiper-parallax",
                  0.9 * swiper.width
                );
                bannerMedia.setAttribute("data-swiper-paralalx-opacity", 0.1);
              }
              if (bannerdc) {
                bannerdc.setAttribute(
                  "data-swiper-parallax",
                  0.7 * swiper.width
                );
                bannerdc.setAttribute("data-swiper-paralalx-opacity", 0.1);
              }
              if (bannerct) {
                bannerct.setAttribute(
                  "data-swiper-parallax",
                  0.7 * swiper.width
                );
                bannerct.setAttribute("data-swiper-paralalx-opacity", 0.1);
              }
              if (bannerRight) {
                bannerRight.setAttribute(
                  "data-swiper-parallax",
                  0.7 * swiper.width
                );
                bannerRight.setAttribute("data-swiper-paralalx-opacity", 0.1);
              }
            }
          },
          resize: function () {
            this.update();
          },
        },
      });
    }

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
        autoplay:{
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
      var swiperBrandLogo = new Swiper(brandLogo.querySelector(".mySwiperLogo"), {
        speed: 1600,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: brandLogo.querySelector(".swiper-pagination"),
          clickable: true,

          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });

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

  

    const dichVuList = document.querySelector(".dich-vu-list");
    if (dichVuList) {
      var swiper = new Swiper(dichVuList.querySelector(".mySwiper"), {
        speed: 800,
        slidesPerView: "auto",
        mousewheel: {
          enabled: true,
          sensitivity: 2,
          releaseOnEdges: true,
        },
      
        mousewheelControl: true,
        followFinger: true,
        loop: true,
        // freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }

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

    const aboutOverView = document.querySelector(".about-overview")

    if(aboutOverView){
      var swiper = new Swiper(aboutOverView.querySelector(".mySwiperRight"), {
        grabCursor: true,
        effect: "creative",
        slidesPerView:"auto",
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
      var swiperBrandLogo = new Swiper(brandLogoAbout.querySelector(".mySwiperLogoAbout"), {
        speed: 1600,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: brandLogoAbout.querySelector(".swiper-pagination.about"),
          clickable: true,

          renderBullet: function (index, className) {
        
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });

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
    if(aboutCulture){
      var swiperLeft = new Swiper(aboutCulture.querySelector(".mySwiperLeft"), {
        slidesPerView:"auto",
        speed:1200,
        loop:"true",
        navigation: {
          nextEl: aboutCulture.querySelector(".next"),
          prevEl: aboutCulture.querySelector(".prev"),
        },
      });

      var swiperRight = new Swiper(aboutCulture.querySelector(".mySwiperRight"), {
        loop:"true",
        slidesPerView:"auto",
        speed:1200,
       
      });

       swiperLeft.controller.control = swiperRight;
      swiperRight.controller.control = swiperLeft;
    }

    const dichVuApm = document.querySelector(".dich-vu-apm");
    if(dichVuApm){
      var swiper = new Swiper(dichVuApm.querySelector(".mySwiper"), {
        direction: "vertical",
        slidesPerView:"3",
        spaceBetween:36,
        pagination: {
          el: dichVuApm.querySelector(".swiper-pagination"),
          clickable: true,
        },
      });
    }

    const hotelDes3Left = document.querySelector(".hotel-des-3-item-left");
    if(hotelDes3Left){
      const hotelDes3Top = hotelDes3Left.querySelector(".hotel-des-3-list-img")
      var swiperDes3Top = new Swiper(hotelDes3Top.querySelector(".mySwiperTop"), {

        grabCursor: true,
        effect: "creative",
        speed:1200,
        pagination: {
          el: hotelDes3Top.querySelector(".swiper-pagination"),
          clickable: true,
        },
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });

      const hotelDes3Bottom = hotelDes3Left.querySelector(".hotel-des-3-list-content");
      var swiperDes3Bottom = new Swiper(hotelDes3Bottom.querySelector(".mySwiperBottom"), {
        speed:1200,
        slidesPerView:"auto"
      });


      swiperDes3Top.controller.control = swiperDes3Bottom;
      swiperDes3Bottom.controller.control = swiperDes3Top;

    }

  } catch (error) {
    console.log(error);
  }
}

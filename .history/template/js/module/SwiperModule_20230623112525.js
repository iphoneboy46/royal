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
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }

    const brandLogo = document.querySelector(".brand-logo");
    if (brandLogo) {
      var swiperBrandLogo = new Swiper(brandLogo.querySelector(".mySwiper"), {
        pagination: {
          el: ".swiper-pagination",
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
        brandLogoItems.forEach((brandLogoItem, index) => {
          b
        })

      });

      const brandLogoItems = brandLogo.querySelectorAll(
        ".brand-logo-right-item"
      );

      brandLogoItems.forEach((brandLogoItem, index) => {
        brandLogoItem.addEventListener("click", () => {
          const brandLogoItemActive = brandLogo.querySelector(
            ".brand-logo-right-item.active"
          );

          const brandLogoActiveBoxActive = brandLogo.querySelector(
            ".brand-logo-img-box.active"
          );
          swiperBrandLogo.slideTo(index);

          if (brandLogoItemActive) {
            brandLogoItemActive.classList.remove("active");
          }

          brandLogoItem.classList.add("active");
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
}

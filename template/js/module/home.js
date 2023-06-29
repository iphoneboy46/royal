export default function home() {
  const homeBrand = document.querySelector(".home-brand");
  if (homeBrand) {
    const homeBrandImgItems = homeBrand.querySelectorAll(
      ".home-brand-item-img"
    );



    homeBrandImgItems.forEach((homeBrandImgItem, index) => {
      const homeBrandItems = homeBrand.querySelectorAll(".home-brand-item");
      homeBrandImgItem.addEventListener("click", () => {
        const itemVideo = homeBrandItems[index].querySelector(
          ".home-brand-img video"
        );

        const homeBrandItemBox = homeBrandItems[index].querySelector(
          ".home-brand-item-box"
        );

        const homeBrandList = homeBrand.querySelector(".home-brand-list");

        if (itemVideo) {
          itemVideo.play();
          homeBrandItemBox.classList.add("hidden");
          homeBrandList.classList.add("hidden")
          itemVideo.addEventListener("ended", () => {
            homeBrandItemBox.classList.remove("hidden");
          });
        }
      });
    });

    const homeBrandItems = homeBrand.querySelectorAll(".home-brand-item");

    homeBrandItems.forEach((homeBrandItem, index) => {
      homeBrandItem.addEventListener("click", () => {
        const itemVideo = homeBrandItems[index].querySelector(
          ".home-brand-img video"
        );

        const homeBrandItemBox = homeBrandItems[index].querySelector(
          ".home-brand-item-box"
        );
        const homeBrandList = homeBrand.querySelector(".home-brand-list");
        if (itemVideo) {
          itemVideo.pause();
          homeBrandItemBox.classList.remove("hidden");
          homeBrandList.classList.remove("hidden");
        }
      });
    });
  }
}

export default function brandLogo() {
  const brandLogo = document.querySelector(".brand-logo");
  if (brandLogo) {
    const brandLogoItems = brandLogo.querySelectorAll(".brand-logo-right-item");
    const brandLogoItemsAo = brandLogo.querySelectorAll(
      ".brand-logo-right-item-ao"
    );
    let brandLogoActive = brandLogo.querySelector(".brand-logo-img-box img");
    let imgCu = brandLogoActive.src;
    var imgCuAo;

    localStorage.setItem("image", brandLogoActive.src);

    brandLogoItems.forEach((brandLogoItem, index) => {
      var brandLogoImgA0Item = brandLogoItemsAo[index].querySelector(
        ".brand-logo-right-item-ao img"
      );
      brandLogoItem.addEventListener("click", () => {
        const brandLogoItemActive = brandLogo.querySelector(
          ".brand-logo-right-item.active"
        );
        const brandLogoItemAoActive = brandLogo.querySelector(
          ".brand-logo-right-item-ao.active"
        );

        const brandLogoImgItem = brandLogoItem.querySelector(
          ".brand-logo-right-item img"
        );

        const brandLogoActiveBox = brandLogo.querySelector(
          ".brand-logo-img-box "
        );

        const brandLogoActiveBoxActive = brandLogo.querySelector(
          ".brand-logo-img-box.active"
        );

        if (
          brandLogoItemActive &&
          brandLogoItemAoActive &&
          brandLogoActiveBoxActive
        ) {
          brandLogoItemActive.classList.remove("active");
          brandLogoItemAoActive.classList.remove("active");
          brandLogoActiveBoxActive.classList.remove("active");
        }
        brandLogoItemsAo[index].classList.add("active");
        brandLogoItem.classList.add("active");

        // brandLogoImgItem.src = localStorage.getItem("image");

        imgCu = brandLogoActive.src;
        brandLogoImgItem.src = imgCu;

        setTimeout(() => {
          brandLogoActive.src = brandLogoImgA0Item.src;
          brandLogoActiveBox.classList.add("active");
        }, 500);

        imgCuAo = brandLogoActive.src;

        imgAo(imgCuAo,index);
      });
    });

    function imgAo(img,index) {
      console.log(index);
      console.log(img);
      brandLogoImgA0Item.src = img
    }
  }
}

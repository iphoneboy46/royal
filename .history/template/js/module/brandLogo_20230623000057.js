export default function brandLogo() {
  const brandLogo = document.querySelector(".brand-logo");
  if (brandLogo) {
    const brandLogoItems = brandLogo.querySelectorAll(".brand-logo-right-item");
    const brandLogoItemsAo = brandLogo.querySelectorAll(
      ".brand-logo-right-item-ao"
    );
    let brandLogoActive = brandLogo.querySelector(
        ".brand-logo-img-box img"
      );
      localStorage.setItem("image",brandLogoActive.src);

    brandLogoItems.forEach((brandLogoItem, index) => {
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

        const brandLogoImgA0Item = brandLogoItemsAo[index].querySelector(
          ".brand-logo-right-item-ao img"
        );

        const brandLogoActiveBox = brandLogo.querySelector(
          ".brand-logo-img-box "
        );

        const brandLogoActiveBoxActive = brandLogo.querySelector(
            ".brand-logo-img-box.active"
          );

        if (brandLogoItemActive && brandLogoItemAoActive && brandLogoActiveBoxActive) {
          brandLogoItemActive.classList.remove("active");
          brandLogoItemAoActive.classList.remove("active");
          brandLogoActiveBoxActive.classList.remove("active");

        }
        brandLogoItemsAo[index].classList.add("active");
        brandLogoItem.classList.add("active");

      console.log(localStorage.getItem("image"));

        // brandLogoImgItem.src = localStorage.getItem("image");

      

        setTimeout(() => {
          brandLogoActive.src = brandLogoImgA0Item.src;
        brandLogoActiveBox.classList.add("active");
        brandLogoImgItem.src = localStorage.setItem("image", brandLogoActive.src);
        }, 500);

      
     

      });
    });
  }
}

export default function about() {
  const aboutListItemList = document.querySelector(".about-list-item-list");
  if (aboutListItemList) {
    const aboutListItemItems = aboutListItemList.querySelectorAll(
      ".about-list-item-item"
    );
    aboutListItemItems.forEach((aboutListItemItem, index) => {
      const aboutListItemChild = aboutListItemItem.querySelector(
        ".about-list-item-child"
      );

      if (index === 0) {
        $(aboutListItemChild).slideDown(500);
      }

      aboutListItemItem.addEventListener("click", () => {
        const aboutListItemItemShow = aboutListItemList.querySelector(
          ".about-list-item-item.show"
        );

        aboutListItemItem.classList.toggle("show");

        $(aboutListItemChild).slideToggle(500);
      });
    });
  }

  const aboutListItemHeart = document.querySelector(".about-list-item-heart");
  if (aboutListItemHeart) {
    const aboutListItemHeartItems = aboutListItemHeart.querySelectorAll(
      ".about-list-item-heart-item"
    );

    const aboutListItemHeartContentItems = aboutListItemHeart.querySelectorAll(".about-list-item-heart-content-item")
    aboutListItemHeartItems.forEach((aboutListItemHeartItem) => {
      aboutListItemHeartItem.addEventListener("click", () => {
        const aboutListItemHeartItemAc = aboutListItemHeart.querySelector(
          ".about-list-item-heart-item.actived"
        );

        aboutListItemHeartItemAc.classList.remove("actived");

        aboutListItemHeartItem.classList.add("actived");
      });
    });
  }
}

export default function about() {
  const aboutListItemList = document.querySelector(".about-list-item-list");
  if (aboutListItemList) {
    const aboutListItemItems = aboutListItemList.querySelectorAll(
      ".about-list-item-item"
    );
    aboutListItemItems.forEach((aboutListItemItem) => {
      aboutListItemItem.addEventListener("click", () => {
        const aboutListItemChild = aboutListItemItem.querySelector(
          ".about-list-item-child"
        );
        const aboutListItemItemShow = aboutListItemList.querySelector(
          ".about-list-item-item.show"
        );
        aboutListItemItemShow.classList.remove("show");
        aboutListItemItem.classList.toggle("show");
        $(aboutListItemChild).slideToggle(300);
      });
    });
  }
}
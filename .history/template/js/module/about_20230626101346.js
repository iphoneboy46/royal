export default function about() {
  const aboutListItemList = document.querySelector(".about-list-item-list");
  if (aboutListItemList) {
    const aboutListItemItems = aboutListItemList.querySelectorAll(
      ".about-list-item-item"
    );
    aboutListItemItems.forEach((aboutListItemItem) => {
        const aboutListItemChild = aboutListItemItem.querySelector(
            ".about-list-item-child"
          );
        if(aboutListItemItemShow){
            $(aboutListItemChild).slideToggle(300);
        }
      aboutListItemItem.addEventListener("click", () => {
       
        const aboutListItemItemShow = aboutListItemList.querySelector(
          ".about-list-item-item.show"
        );
        aboutListItemItemShow.classList.remove("show");
        aboutListItemItem.classList.add("show");
        if(aboutListItemItemShow){
            $(aboutListItemChild).slideToggle(300);
        }
       
      });
    });
  }
}

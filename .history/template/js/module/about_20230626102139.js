export default function about() {
  const aboutListItemList = document.querySelector(".about-list-item-list");
  if (aboutListItemList) {
    const aboutListItemItems = aboutListItemList.querySelectorAll(
      ".about-list-item-item"
    );
    aboutListItemItems.forEach((aboutListItemItem,index) => {

        const aboutListItemChild = aboutListItemItem.querySelectorAll(
            ".about-list-item-child"
          );

          aboutListItemChild[0].slideDown(500);

      aboutListItemItem.addEventListener("click", () => {
        const aboutListItemItemShow = aboutListItemList.querySelector(
          ".about-list-item-item.show"
        );

        

       

        aboutListItemItemShow.classList.remove("show");
        aboutListItemItem.classList.add("show");

        $(aboutListItemChild).slideToggle(500);

      

        
      });
    });
  }
}

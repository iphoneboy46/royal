export default function about(){
    const aboutListItemList = document.querySelector(".about-list-item-list");
    if(aboutListItemList){
        const aboutListItemItems = aboutListItemList.querySelectorAll(".about-list-item-item");
        aboutListItemItems.forEach((aboutListItemItem)=>{
            aboutListItemItem.addEventListener("click",()=>{
                const aboutListItemChild = aboutListItemItem.querySelector(".about-list-item-child");
                const aboutListItemItemShow = .aboutListItemChild.querySelector(".about-list-item-item.show");
                aboutListItemItem.classList.add("show");
                $(aboutListItemChild).slideToggle(300);
            })
        })
    }
}
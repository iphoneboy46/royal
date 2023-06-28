export default function about(){
    const aboutListItemList = document.querySelector(".about-list-item-list");
    if(aboutListItemList){
        const aboutListItemItems = aboutListItemList.querySelectorAll(".about-list-item-item");
        aboutListItemItems.forEach((aboutListItemItem)=>{
            aboutListItemItem.addEventListener("click",()=>{

            })
        })
    }
}
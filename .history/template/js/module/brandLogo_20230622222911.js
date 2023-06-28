export default function brandLogo(){
    const brandLogo = document.querySelector(".brand-logo");
    if(brandLogo){
        const brandLogoItems = brandLogo.querySelectorAll(".brand-logo-right-item");
        const brandLogoItemsAo = brandLogo.querySelectorAll(".brand-logo-right-item-ao");

        brandLogoItems.forEach((brandLogoItem,index) => {
            brandLogoItem.addEventListener("click",()=>{
                const brandLogoItemActive = brandLogo.querySelector(".brand-logo-right-item.active");
                const brandLogoItemAoActive = brandLogo.querySelector(".brand-logo-right-item-ao.active");
                const brandLogoActive = brandLogo.querySelector(".brand-logo-img-box img").src;
                const brandLogoImgItem = brandLogoItem.querySelector(".brand-logo-right-item img");
                console.log(brandLogoActive);
                if(brandLogoItemActive && brandLogoItemAoActive){
                    brandLogoItemActive.classList.remove("active");
                    brandLogoItemAoActive.classList.remove("active");
                }
                brandLogoItemsAo[index].classList.add("active");
                brandLogoItem.classList.add("active");
                brandLogoActive = brandLogoImgItem.src;
            })
        })
    }
}
export default function brandLogo(){
    const brandLogo = document.querySelector(".brand-logo");
    if(brandLogo){
        const brandLogoItems = brandLogo.querySelectorAll(".brand-logo-right-item");
        brandLogoItems.forEach((brandLogoItem,index) => {
            brandLogoItem.addEventListener("click",()=>{
                const brandLogoItemActive = brandLogo.querySelector(".brand-logo-right-item.active");
                if(brandLogoItemActive){
                    brandLogoItemActive.classList.remove("active");
                }
                brandLogoItem.classList.add("active");
            })
        })
    }
}
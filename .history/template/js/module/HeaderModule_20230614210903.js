export default function HeaderModule() {
  const header = document.querySelector(".header");
  if(header){
    const btnHeader = header.querySelector(".header-content-btn");
    btnHeader.addEventListener("click",()=>{
      const menuDrop = document.querySelector(".menu-drop");
      menuDrop.classList.toggle("show");
    })
  }
}

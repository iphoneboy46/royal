export default function HeaderModule() {
  const header = document.querySelector(".header");
  if(header){
    const btnHeader = header.querySelector(".header-content-btn");
    btnHeader.addEventListener("click",()=>{
      const menuDrop = document.querySelector(".menu-drop");
      const headerModal = document.querySelector(".header-modal");
      menuDrop.classList.toggle("show");
      headerModal.classList.toggle("show");

    })
  }
}

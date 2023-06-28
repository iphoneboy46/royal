export default function HeaderModule() {
  const header = document.querySelector(".header");
  if(header){
    const btnHeader = header.querySelector(".header-content-btn");
    const menuDrop = document.querySelector(".menu-drop");
    const headerModal = document.querySelector(".header-modal");
    btnHeader.addEventListener("click",()=>{
    
      menuDrop.classList.toggle("show");
      headerModal.classList.toggle("show");

    })

    headerModal.addEventListener("click",()=>{
    
      menuDrop.classList.toggle("show");
      headerModal.classList.toggle("show");

    })
  }
}

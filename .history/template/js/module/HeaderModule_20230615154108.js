export default function HeaderModule() {
  const header = document.querySelector(".header");
  if (header) {
    const btnHeader = header.querySelector(".header-content-btn");
    const menuDrop = document.querySelector(".menu-drop");
    const headerModal = document.querySelector(".header-modal");
    const btnExits = document.querySelector(".menu-drop-exits");
    const headerContent = header.querySelector(".header-content");
    btnHeader.addEventListener("click", () => {
      menuDrop.classList.toggle("show");
      headerModal.classList.toggle("show");
      headerContent.classList.toggle("hidden");

      document.body.style.overflow = "hidden";
    });

    headerModal.addEventListener("click", () => {
      menuDrop.classList.toggle("show");
      headerModal.classList.toggle("show");
      document.body.style.overflow = "auto";
      headerContent.classList.toggle("hidden");


    });

    btnExits.addEventListener("click", () => {
      menuDrop.classList.toggle("show");
      headerModal.classList.toggle("show");
      document.body.style.overflow = "auto";
      headerContent.classList.toggle("hidden");

    });


    window.addEventListener("scroll",()=>{
        if(window.scrollY > 0){
         header.classList.toggle("bg-mau");
        }
    })
  }
}

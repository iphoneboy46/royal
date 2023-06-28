export default function HeaderModule() {
  const header = document.querySelector(".header");
  if (header) {
    const btnHeader = header.querySelector(".header-content-btn");
    const menuDrop = document.querySelector(".menu-drop");
    const headerModal = document.querySelector(".header-modal");
    const btnExits = document.querySelector(".menu-drop-exits");

    btnHeader.addEventListener("click", () => {
      menuDrop.classList.toggle("show");
      headerModal.classList.toggle("show");
      header.classList.toggle("hidden");

      document.body.style.overflow = "hidden";
    });

    headerModal.addEventListener("click", () => {
      menuDrop.classList.toggle("show");
      headerModal.classList.toggle("show");
      document.body.style.overflow = "auto";

    });

    btnExits.addEventListener("click", () => {
      menuDrop.classList.toggle("show");
      headerModal.classList.toggle("show");
      document.body.style.overflow = "auto";

    });
  }
}

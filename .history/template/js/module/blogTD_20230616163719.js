export default function blogDT(){
    const btnCV = document.querySelector(".btn-cv");
    if(btnCV){
        const popupForm = document.querySelector(".popup");
        btnCV.addEventListener("click",()=>{
            popupForm.classList.toggle("open");
            document.body.style.overflow = "hidden";
        })
    }
    const btnUpload = document.querySelector(
        ".item-form-input-box-file-content-img"
      );
      if (btnUpload) {
        btnUpload.addEventListener("click", () => {
          var fileupload = document.getElementById("fileUpload");
          var textFileUpload = document.querySelector(
            ".item-form-input-box-file-content-item"
          );
          fileupload.click();
          fileupload.addEventListener("change", () => {
            textFileUpload.innerHTML = fileupload.files[0].name;
          });
        });
      }
}
export default function Selected() {
  var selectSearchFilter = document.querySelector(".input-sl");
  if(selectSearchFilter){
    const searchFilterBox = selectSearchFilter.querySelector(
      ".input-sl-box"
    );
    const listSelect = selectSearchFilter.querySelector(".list-select");
    const itemSelects = listSelect.querySelectorAll(".item-select");
  
    searchFilterBox.addEventListener("click", () => {
      listSelect.classList.toggle("active");
      $(listSelect).slideToggle(500);
    });
  
    itemSelects.forEach((itemSelect) => {
      itemSelect.addEventListener("click", () => {
        const text = selectSearchFilter.querySelector(".input-sl-title");
        const textThayThe = itemSelect.innerText;
        const listSelect = selectSearchFilter.querySelector(".list-select");
        const inputValue = searchFilterBox.querySelector(".input-sl-box input");
        console.log(inputValue);
  
        inputValue.setAttribute("value",textThayThe);
        
        listSelect.classList.toggle("active");
        $(listSelect).slideToggle(500);
        text.innerText = textThayThe;
      });
    });
  }
 
}

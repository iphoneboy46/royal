export default function Selected() {
 
  const searchFilterBox = selectSearchFilter.querySelector(
    ".input-sl-box"
  );
  if(searchFilterBox){
   
    const listSelect = selectSearchFilter.querySelector(".list-select");
    const itemSelects = listSelect.querySelectorAll(".item-select");
  
    searchFilterBox.addEventListener("click", () => {
      listSelect.classList.toggle("active");
      $(listSelect).slideToggle(500);
    });
  
    itemSelects.forEach((itemSelect) => {
      itemSelect.addEventListener("click", () => {
        const text = selectSearchFilter.querySelector(".select-text");
        const textThayThe = itemSelect.innerText;
        const listSelect = selectSearchFilter.querySelector(".list-select");
        const inputValue = searchFilterBox.querySelector(".input-selected-fil");
  
        inputValue.setAttribute("value",textThayThe);
        
        listSelect.classList.toggle("active");
        $(listSelect).slideToggle(500);
        text.innerText = textThayThe;
      });
    });
  }
 
}

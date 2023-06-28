export default function Selected() {
  var selectSearchFilters = document.querySelectorAll(".input-select");
  if (selectSearchFilters) {
    selectSearchFilters.forEach((selectSearchFilter)=>{

    })
    const searchFilterBox = selectSearchFilter.querySelector(".input-select-box");
    const listSelect = selectSearchFilter.querySelector(".list-select-box");
    const itemSelects = listSelect.querySelectorAll(".item-select-box");

    searchFilterBox.addEventListener("click", () => {
      searchFilterBox.classList.toggle("focus");
      listSelect.classList.toggle("active");
      $(listSelect).slideToggle(500);
    });

    itemSelects.forEach((itemSelect) => {
      itemSelect.addEventListener("click", () => {
        const text = selectSearchFilter.querySelector(".input-select-title");
        const textThayThe = itemSelect.innerText;
      
        const inputValue = searchFilterBox.querySelector(".input-select-box input");
        searchFilterBox.classList.toggle("focus");

        inputValue.setAttribute("value", textThayThe);

        listSelect.classList.toggle("active");
        $(listSelect).slideToggle(500);
        text.innerText = textThayThe;
      });
    });
  }
}

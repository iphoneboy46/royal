export default function fullPage(){
    var fullpages = document.querySelector("#fullpage");

    if (fullpages) {
      const header = document.querySelector(".header");
      const dataSectionUrl = document.querySelectorAll(".section");
      let arrUrl = [];
      if (dataSectionUrl) {
        dataSectionUrl.forEach((item) => {
          arrUrl.push(item.getAttribute("data-section-url"));
        });
      }
      const fpHome = new fullpage(fullpages, {
        // autoScrolling: true,
        scrollHorizontally: true,
        licenseKey: "gplv3-license",
        responsiveWidth: 1200,
        anchors: arrUrl,
        navigation: true,
        scrollingSpeed: 1000,
        onLeave: function (item, nextIndex, direction) {
          const hd = document.querySelector(".header-home")
  
          if (hd) {
            hd.classList.add("out-top")
    
            if (nextIndex.index == 0) {
              hd.classList.remove("out-top")
            }
          }
        },
      });
      const dataSectionName = document.querySelectorAll(".section.fp-section");
      const fullPageNavItem = document.querySelectorAll("#fp-nav ul li a");
      if (dataSectionName) {
        let arr = [];
        let arrHtml = [];
        dataSectionName.forEach((item, index) => {
          arr.push(item.getAttribute("data-section-name"));
        });
        arr.map((item, index) => {
          let number = index + 1;
          if (number < 10) {
            number = "0" + number;
          } else {
            number = number;
          }
         
        });
        for (let i = 0; i < fullPageNavItem.length; i++) {
          const item = fullPageNavItem[i];
          item.innerHTML = arrHtml[i];
        }
      }
  
      const cart = document.querySelector(".header-cart");
      
      $(cart).hover(
        () => {
          fpHome.setMouseWheelScrolling(false);
        },
        () => {
          fpHome.setMouseWheelScrolling(true);
        }
      );
    }
}
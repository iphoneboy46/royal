export default function GSAP() {
  const image = document.querySelector(".news-ct-img-gsap");
  gsap.registerPlugin(ScrollTrigger);

 
  
  gsap.to(image,{
      scrollTrigger:{
      trigger: image,
      // toggleActions:"restart pause resume reverse", // play, pause , resume , reverse , restart , reset
      start:"top center", // "top , center , end , pixels , % , relative to top"
      end:"bottom center",
      scrub:true, // thao tac scroll chuot: true , false , number
      pin:false, // chay theo true hoac false
      pinSpacing: false, // khoang cach item tren voi duoi false laf ko co true la co
      // snap:  keo album anh tinh toan ti le 
      // xPercent: -100 * (sections.length - 1); tinh toan ti le keo ngang
      markers:true,
  
  },
      x:0,
      duration:3,
      ease:"none",
      width:"100vw",
      height:"100vh",
      backgroundColor:"red",
  })
  
 
}

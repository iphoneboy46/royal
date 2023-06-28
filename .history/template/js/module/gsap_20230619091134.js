export default function GSAP() {
  const image = document.querySelector(".news-ct-img-gsap");
  gsap.registerPlugin(ScrollTrigger);

 
  
  gsap.to(image,{
      scrollTrigger:{
      trigger: image,
     
      start:"top center", 
      end:"bottom center",
      scrub:true,
      pin:false, 
      pinSpacing: false,
      markers:true,
  
  },
      x:0,
      duration:3,
      ease:"none",
      width:"100vw",
      height:"100vh",
      position: "Fixed",
      backgroundColor:"red",
  })
  
 
}

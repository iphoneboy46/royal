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
      x:"50%",
      duration:3,
      ease:"none",
      width:"100vw",
      height:"100vh",
      position: "Fixed",
      top:0,
      left:0,
      backgroundColor:"red",
  })
  
 
}

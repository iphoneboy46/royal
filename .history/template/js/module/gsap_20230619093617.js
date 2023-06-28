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
     
      duration:1,
      ease:"none",
      width:"100vw",
      height:"100vh",
      maxWidth:"none",
      borderRadius:"0"
    
  })
  
 
}

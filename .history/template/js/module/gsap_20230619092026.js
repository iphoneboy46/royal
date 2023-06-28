export default function GSAP() {
  const image = document.querySelector(".news-ct-img-gsap");
  gsap.registerPlugin(ScrollTrigger);

 
  
  gsap.to(image,{
      scrollTrigger:{
      trigger: image,
     
      start:"top 800rem", 
      end:"bottom 800rem",
      scrub:1,
      pin:false, 
      pinSpacing: false,
      markers:true,
  
  },
     
      duration:1,
      ease:"none",
      width:"100vw",
      maxWidth:"none",
      borderRadius:"0"
    
  })
  
 
}

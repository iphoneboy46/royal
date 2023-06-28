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
     
      duration:3,
      ease:"none",
      width:"100%",
      height:"100%",
      position: "Fixed",
      top:0,
      left:0,
      backgroundColor:"red",
  })
  
 
}

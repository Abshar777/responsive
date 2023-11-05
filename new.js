// gsap.to(".nav",{
//    position:"fixed",
// //    zIndex:99,

//    scrollTrigger:{
//     trigger:".nav ",
//     scroller:"body",
//     markers:true,
//     start:"top -5%",
//     end:"top -6%",
//     scrub:.5,
//    }
// })
let menu=document.querySelector(".menu1");
let manu=document.querySelector(".manu");
let close=document.querySelector(".close");
let main=document.querySelector(".main1");
let flag=1;

menu.addEventListener("click",()=>{
   if(flag==1){
    console.log("hello");
       gsap.to(".repo",{
            x:"100%",
       })
       manu.style.display="none",
      close.style.display="block", 
      main.style.height="80vh",
       

       flag=0;
    }
    else{
        gsap.to(".repo",{
            x:"-100%",
       }) 
       manu.style.display="block",
       close.style.display="none", 
       main.style.height="100%",
 
       flag=1; 
    }

})
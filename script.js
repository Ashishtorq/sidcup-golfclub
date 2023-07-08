
gsap.to("#nav",{
    backgroundColor : "#000",
    duration: 0.5,
    height :"120px" ,
    scrollTrigger : {
     tirgger : "#nav",
     scroller : "body",
     markers : true,
     start: "top -10%"
    }
 })
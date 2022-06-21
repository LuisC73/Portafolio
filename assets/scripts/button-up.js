export default function buttonUp(btn){
    const btnScroll = document.querySelector(btn);
  

    document.addEventListener("click",e =>{
      if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
        let scrollTop = document.documentElement.scrollTop;
  
        if (scrollTop > 0) {
          window.requestAnimationFrame(buttonUp);
          window.scrollTo(0, 0)
        }
      }
    })
  
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop;
  
      if(scrollTop > 200){
        btnScroll.style.transform = 'scale(1)'
      }else{
        btnScroll.style.transform = 'scale(0)'
      }
    })
  }
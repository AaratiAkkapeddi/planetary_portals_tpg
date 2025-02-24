document.addEventListener("scroll", (event) => {
    let scratches = document.querySelectorAll("#overlay svg path");
    let scratch = scratches[Math.floor(Math.random()*scratches.length)];
    scratch.classList.add("on");

    setTimeout(function(){
        scratch.classList.remove("on")
    },100)







  });


  function sprite(el, imgurls){
    var i = 0;                 

        function myLoop() {        
        setTimeout(function() {   
            el.src = imgurls[i] 
            i++;                   
            if (i < imgurls.length) {          
            myLoop();            
            }else{
                i = 0;
                myLoop();
            }                      
        }, 100)
        }

        myLoop();   
  }





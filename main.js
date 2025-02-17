document.addEventListener("scroll", (event) => {
    let scratches = document.querySelectorAll("#overlay svg path");
    let scratch = scratches[Math.floor(Math.random()*scratches.length)];
    scratch.classList.add("on");

    setTimeout(function(){
        scratch.classList.remove("on")
    },100)







  });
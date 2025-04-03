document.addEventListener("scroll", (event) => {
    let scratches = document.querySelectorAll("#overlay svg path");
    let scratch = scratches[Math.floor(Math.random()*scratches.length)];
    scratch.classList.add("on");

    setTimeout(function(){
        scratch.classList.remove("on")
    },100)







  });
  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

let filmNav = document.querySelector("#film-list");
filmNav.addEventListener("click", function(){
    
    if (document.querySelector("#film-list").classList.contains("open")){
        document.querySelector("#film-list").classList.remove("open")
    }else{
        document.querySelector("#film-list").classList.add("open")
    }
})

let webringLinks = document.querySelectorAll(".webring a");
webringLinks.forEach((link) => {
    link.addEventListener("click", function(event){
        event.preventDefault()
        let url = link.href;
        document.querySelector("#red-overlay").classList.add("show");
        setTimeout(function(){
            window.location.href = url;
            document.querySelector("#red-overlay").classList.remove("show");
        }, 2000)

      });
})

let cesaire = ["./index.html#cesaire-1",
    "./pastoral-landscape.html#cesaire-2",
    "./battleground.html#cesaire-3", 
    "./battleground.html#cesaire-4"]
let timeJump = ["./woman-in-flux.html#time-1",
    "./woman-in-flux.html#time-2",
    "./battleground.html#time-3", 
    "./pastoral-landscape.html#time-4" ]
let photography = ["./woman-in-flux.html#photography-1", 
    "./pastoral-landscape.html#photography-2", 
    "./eugenic-tree.html#photography-3", 
    "./battleground.html#photography-4"]
let pastoral = ["./woman-in-flux.html#pastoral-1",
    "./pastoral-landscape.html#pastoral-2",
    "./eugenic-tree.html#pastoral-3",
    "./pastoral-landscape.html#pastoral-4"]
let mine = ["./eugenic-tree.html#mine-1",
    "./battleground.html#mine-2"]
let q = ["./woman-in-flux.html#q-1","./pastoral-landscape.html#q-2",
"./battleground.html#q-3", "./battleground.html#q-4"
]
let diagram = ["./about.html#diagram-1","./pastoral-landscape.html#diagram-2"
]

let cesaireText = ["Jumped from → Home",
    "Jumped from → Pastoral Landscape, Composing Dialogues with LLMs",
    "Jumped from → Battle Ground, Human Made Animations", 
    "Jumped from → Battle Ground, Erasures from Colonial Memory"]
let timeJumpText  = ["Jumped from → Woman in Flux, Resistance",
    "Jumped from → Woman in Flux, Filmic Representations",
    "Jumped from → Battle Ground, Fanonian exposition Computational Violence read through Fanon", 
    "Jumped from → Pastoral Landscape, Composing Dialogues with LLMs" ]
let photographyText  = ["Jumped from →Woman in Flux, Archival Photography", 
    "Jumped from → Pastoral Landscape, Composing Dialogues with LLMs", 
    "Jumped from → Eugenic Tree, Colonial Photography and LLMs", 
    "Jumped from → Battle Ground, Erasures from Colonial Memory"]
let pastoralText  = ["Jumped from → Woman in Flux, Filmic Representations",
    "Jumped from → Pastoral Landscape, Subject and environment",
    "Jumped from → Eugenic Tree, Rhodes",
    "Jumped from → Pastoral Landscape, Relationship between viewer and film viewing the past to create the future gaze"]
let mineText  = ["Jumped from → Woman in Flux, Archival Photography",
    "Jumped from → Battle Ground, Erasures from Colonial Memory"]
let qText = ["Jumped from → A Woman in Flux, Filmic Representations","Jumped from → Pastoral Landscape, Composing Dialogues with LLMs",
    "Jumped from → Battle Ground, Human Made Animations", "Jumped from → Battle Ground, Fanonian exposition Computational Violence read through Fanon"
    ]
let diagramText = ["Jumped from → About","Jumped from → Pastoral Landscape, Composing Dialogues with LLMs"
    ]
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll(" .section");
    sections.forEach((el) => {
        if(isScrolledIntoView(el.querySelector("h1")) && !el.classList.contains('show')){
        el.classList.add('show')
        }
    })
    if (window.location.href.indexOf("#") != -1){
        
        //assuming coming from jump link
        let currentJumpLink = window.location.href.split("#")[1];
        let showSections = document.querySelectorAll("main .section");
        showSections.forEach((el) => {
            el.classList.add("show");
        })
        let currentJumpLinkRing = currentJumpLink.split("-")[0];
        let currentJumpLinkIndex = currentJumpLink.split("-")[1];
        let linkIndex = 0;
        let jumpedFrom;
        if(currentJumpLinkRing == "cesaire"){
            if ((currentJumpLinkIndex - 1) == 0) {
  
                  linkIndex = cesaire.length - 1;
            }else{
                linkIndex == currentJumpLinkIndex - 2
            }
            jumpedFrom = document.createElement('a');

            jumpedFrom.innerHTML = cesaireText[linkIndex];
            jumpedFrom.href = cesaire[linkIndex]

        }
        if(currentJumpLinkRing == "time"){
            if ((currentJumpLinkIndex - 1) == 0) {
  
                  linkIndex = timeJump.length - 1;
            }else{
                linkIndex == currentJumpLinkIndex - 2
            }
            jumpedFrom = document.createElement('a');

            jumpedFrom.innerHTML = timeJumpText[linkIndex];
            jumpedFrom.href = timeJump[linkIndex]
        }
        if(currentJumpLinkRing == "photography"){
            if ((currentJumpLinkIndex - 1) == 0) {
  
                  linkIndex = photography.length - 1;
            }else{
                linkIndex == currentJumpLinkIndex - 2
            }
            jumpedFrom = document.createElement('a');

            jumpedFrom.innerHTML = photographyText[linkIndex];
            jumpedFrom.href = photography[linkIndex]
        }
        if(currentJumpLinkRing == "q"){
            if ((currentJumpLinkIndex - 1) == 0) {
  
                  linkIndex = q.length - 1;
            }else{
                linkIndex == currentJumpLinkIndex - 2
            }
            jumpedFrom = document.createElement('a');

            jumpedFrom.innerHTML = qText[linkIndex];
            jumpedFrom.href = q[linkIndex]
        }
        if(currentJumpLinkRing == "diagram"){
            if ((currentJumpLinkIndex - 1) == 0) {
  
                  linkIndex = diagram.length - 1;
            }else{
                linkIndex == currentJumpLinkIndex - 2
            }
            jumpedFrom = document.createElement('a');

            jumpedFrom.innerHTML = diagramText[linkIndex];
            jumpedFrom.href = diagram[linkIndex]
        }
        if(currentJumpLinkRing == "pastoral"){
            if ((currentJumpLinkIndex - 1) == 0) {
  
                  linkIndex = pastoral.length - 1;
            }else{
                linkIndex == currentJumpLinkIndex - 2
            }
            jumpedFrom = document.createElement('a');

            jumpedFrom.innerHTML = pastoralText[linkIndex];
            jumpedFrom.href = pastoral[linkIndex]
        }
        if(currentJumpLinkRing == "mine"){
            if ((currentJumpLinkIndex - 1) == 0) {
  
                  linkIndex = mine.length - 1;
            }else{
                linkIndex == currentJumpLinkIndex - 2
            }
            jumpedFrom = document.createElement('a');

            jumpedFrom.innerHTML = mineText[linkIndex];
            jumpedFrom.href = mine[linkIndex]
        }

        document.querySelector("#jumped-from").appendChild(jumpedFrom)
        document.querySelector("#jumped-from").classList.add("show");
        
        let linkDot = document.querySelector('.' + currentJumpLink);
        linkDot.classList.add("hello");
        if(document.body.classList.contains("default")){
        document.querySelector("#red-overlay").classList.add("show");
        setTimeout(function(){

                document.querySelector("#red-overlay").classList.remove("show");
            
        }, 2000)
        }
    }
});

let webrings = document.querySelectorAll(".webring");
webrings.forEach((el)=>{
    el.addEventListener("click", function(e){
        let x = e.clientX;
        let y = e.clientY
     
        if (this.classList.contains("open")){
            this.classList.remove("open")
        }else{
            this.classList.add("open")
            let wiz = this.querySelector(".wizard");
            wiz.style.position = "fixed"
            wiz.style.right ="auto";
            wiz.style.bottom = "auto";
            console.log(e.clientY)
            if(window.outerWidth <= 768){
                if(e.clientX < window.outerWidth/2){
                    wiz.style.left = (e.clientX - wiz.getBoundingClientRect().width * 0.5 + 5) + "px"; 
                }else{
                    wiz.style.left = (e.clientX - wiz.getBoundingClientRect().width * 1.5 - 5) + "px"; 
                }
                if(e.clientY > ((window.outerHeight * 0.6)/2)){
              
                     wiz.style.top = ((e.clientY)- 5 - wiz.getBoundingClientRect().height) +  "px";
                }else{
                    wiz.style.top = ((e.clientY)+ 5) +  "px";
                   
                }
            }else{
                if(e.clientX < window.outerWidth/2){
                    wiz.style.left = (e.clientX - wiz.getBoundingClientRect().width * 0.5 + 5) + "px"; 
                }else{
                    wiz.style.left = (e.clientX - wiz.getBoundingClientRect().width * 1.5 - 5) + "px"; 
                }
                if(e.clientY > window.outerHeight/2){
                     wiz.style.top = ((e.clientY)- 5 - wiz.getBoundingClientRect().height) +  "px";
                }else{
                    wiz.style.top = ((e.clientY)+ 5) +  "px";
                   
                }
            }
          
        }
    })
})








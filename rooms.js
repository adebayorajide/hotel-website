const paraEl = document.getElementById('para');
const x = window.matchMedia("(max-width: 550px)");
const headerBtnEl = document.getElementById("header-btn");
const bookEl = document.getElementById("book");

window.addEventListener("load", ()=>{
    if(x.matches) {
        paraEl.innerHTML = `<p>Each of our bright, light-flooded rooms come with everything you could possibly needb for a comfortable stay. And yes,&nbsp; comfort isn't our only <br> objective, we also value goodd design, sleek contemporary furnishing complemented &nbsp; by the rich tones of nature's palette as visible from our rooms' sea-view windows and terraces.</p>`
    }
   
})

headerBtnEl.addEventListener("click", ()=>{
    bookEl.classList.add("hero-section image-section")
    bookEl.style.display = "block";
})
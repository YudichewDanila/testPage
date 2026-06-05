document.addEventListener("DOMContentLoaded", function() {
    const hamb = document.querySelector("#hamb");
    const popup = document.querySelector("#popup");
    const body = document.body;
    const closeBtn = document.querySelector("#closeBtn");
   
    hamb.addEventListener("click", function(e) {
        e.preventDefault();
        popup.classList.toggle("open");
        hamb.classList.toggle("active");
        body.classList.toggle("noscroll");
    });

   
    popup.addEventListener("click", function(e) {
        if (e.target === popup) {
            popup.classList.remove("open");
            hamb.classList.remove("active");
            body.classList.remove("noscroll");
        }
    });
    


closeBtn.addEventListener("click", function() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
});
});
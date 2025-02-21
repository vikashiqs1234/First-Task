const ham = document.querySelector('.ham');
const mobile = document.querySelector('.mobile-nav-ul');
const cross = document.querySelector('.cross')
let prevBtn = document.querySelector('.prev-btn')
let nextBtn = document.querySelector('.next-btn')
let testoCards = document.querySelector('.testimonial-cards')

const handleHam = ()=>{
    const isMobileVisible = mobile.style.display === "block";

    // Toggle mobile menu visibility
    mobile.style.display = isMobileVisible ? "none" : "block";

    // Toggle button visibility
    ham.style.display = isMobileVisible ? "block" : "none";
    cross.style.display = isMobileVisible ? "none" : "block";

}
const handleScrollPrev = ()=>{
    testoCards.scrollBy({
        left: -300,
        behavior: "smooth"
    });
}
const handleScrollNext = ()=>{
    testoCards.scrollBy({
        left: 300,
        behavior: "smooth"
    });
}
if (window.matchMedia("(max-width: 768px)").matches) {
    console.log("This is a mobile screen.");
}
if (ham && cross) {
    ham.addEventListener("click", handleHam);
    cross.addEventListener("click", handleHam);
    nextBtn.addEventListener('click',handleScrollNext)
    prevBtn.addEventListener('click',handleScrollPrev)
}



const checkScreenSize = () => {
    if (window.innerWidth > 762) {
        if (mobile) {
            mobile.style.display = "none";
        }
        if(cross){
            cross.style.display='none'
             ham.style.display = 'none'
        }
    }
    else{
        ham.style.display = 'block'
    }

};

checkScreenSize();

window.addEventListener("resize", checkScreenSize);

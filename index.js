const ham = document.querySelector('.ham');
const mobile = document.querySelector('.mobile-nav-ul');
const cross = document.querySelector('.cross')
let prevBtn = document.querySelector('.prev-btn')
let nextBtn = document.querySelector('.next-btn')
let testoCards = document.querySelector('.testimonial-cards')
const article = document.querySelector('.main-article-content')
const mainArticleImg = document.querySelector('.main-article-content-img')
const mainArticleText = document.querySelector('.main-article-text')
const img1 = document.querySelector('#img-1')

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
// transform: scale(1.1);
// transition: ease-out;
// transition-duration: .4s;
const handleMouseEnter = ()=>{
    img1.style.transform = 'scale(1.1)'
    img1.style.transition = 'ease-out'
    img1.style.transitionDuration = '.4s'
    mainArticleText.style.transitionDuration = '.4s'
    mainArticleText.style.padding = "20px 20px"
    mainArticleImg.style.overflow = 'hidden'

}
const handleMouseLeave = ()=>{
    img1.style.transform = 'scale(1)'
    img1.style.transition = 'ease-out'
    img1.style.transitionDuration = '.4s'
    mainArticleText.style.transitionDuration = '.4s'
    mainArticleText.style.padding = "20px 0px"
    mainArticleImg.style.overflow = 'hidden'

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

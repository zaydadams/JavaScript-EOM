const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2}s';
            }
        });
        burger.classList.toggle('toggle');
    });
}

const app = ()=>{
    navSlide();
}

navSlide();


const btn = document.querySelectorAll(".category button");
const product = document.querySelectorAll(".itembox");

btn.forEach(item => {
    item.addEventListener("click", function (){
        for(let i = 0; i < btn.length ; i++){
            btn[i].classList.remove("active");
        }          
        item.classList.add("active");

        product.forEach(show => {
            show.style.display = "none";
            let products=item.textContent.toLowerCase();
            if(show.getAttribute("data-att")===
            products || products ==="all"){
                show.style.display = "block";
            }
        })
    })
})

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    loop:true
   
  });
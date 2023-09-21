// gallery animation
const previousBtn = document.querySelector('.slider-previous')
const nextBtn = document.querySelector('.slider-next')

const slides = document.querySelector('.slider-slides')
const slidesNumber = slides.children.length

let currentSlide = 0

function updateSlider(){
  const slideWidth = slides.clientWidth
  const offset = -currentSlide * slideWidth
  
  slides.setAttribute('style', `transform: translate(${offset}px)`)
}

previousBtn.addEventListener('click', () => {
  --currentSlide
  if (currentSlide < 0) currentSlide = slidesNumber - 1
  
  updateSlider()
})

nextBtn.addEventListener('click', () => {
  ++currentSlide
  if (currentSlide >= slidesNumber) currentSlide = 0
  
  updateSlider()
})

// scroll to top button display
function showButtonOnScroll(scrollValue) {
            const scrollButton = document.querySelector(".top-btn");

            window.addEventListener('scroll', function () {
                if (window.scrollY > scrollValue) {
                    scrollButton.style.display = 'block';
                } else {
                    scrollButton.style.display = 'none';
                }
            });
        }

showButtonOnScroll(90);
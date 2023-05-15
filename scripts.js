const slides = document.querySelectorAll(".slideshow .slide")
const btnPrevSlide = document.getElementById('previous_slide')
const btnNextSlide = document.getElementById('next_slide')
const btnOpenNav = document.getElementById('btn-open-nav')
const btnCloseNav = document.getElementById('btn-close-nav')
const nav = document.getElementsByTagName('nav')[0]
let currentSlideIndex = 0
console.log(slides[currentSlideIndex])
displaySlide(currentSlideIndex)
btnPrevSlide.addEventListener('click', showPrevSlide)
btnNextSlide.addEventListener('click', showNextSlide)
btnOpenNav.addEventListener('click', () => {
    console.log('clicked nav')
    nav.classList.add('open')
})
btnCloseNav.addEventListener('click', () => {
    console.log('clicked nav')
    nav.classList.remove('open')
})

// making slides stack correctly
slides.forEach((s, key) => {
    s.style.zIndex = 10 + key
})
function showNextSlide() {
    if (currentSlideIndex < slides.length - 1) currentSlideIndex++
    displaySlide(currentSlideIndex)
}
function showPrevSlide() {
    if (currentSlideIndex > 0) currentSlideIndex--
    displaySlide(currentSlideIndex)
}
function displaySlide(index) {
    slides.forEach((s, key) => {
        if (index == key) {
            s.classList.add('active')
        } else {
            s.classList.remove('active')
        }
        if (key < index) s.classList.add('viewed')
        else s.classList.remove('viewed')
        s.style.zIndex = 10 + key
    })
}
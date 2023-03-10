const imgGalleryContainer = document.querySelector('#my-work-img-gallery');
const imgSlideControls = document.querySelector('#img-slide');
let mobileSlide = 3;
let prevWidth = window.innerWidth;
function handleMobileSlide(num) {
  imgGalleryContainer.querySelector(`img:nth-child(${num})`).scrollIntoView({ block: 'nearest', inline: 'center' });
}

handleMobileSlide(mobileSlide);
window.scrollTo(0, 0);

imgSlideControls.addEventListener('click', (event) => {
  if (window.innerWidth < 1024) {
    if (event.target.id === 'arrow-right') mobileSlide = mobileSlide < 5 ? (mobileSlide += 1) : (mobileSlide = 1);
    if (event.target.id === 'arrow-left') mobileSlide = mobileSlide > 1 ? (mobileSlide -= 1) : (mobileSlide = 5);
    handleMobileSlide(mobileSlide);
  } else {
    if (event.target.id === 'arrow-right') {
      imgGalleryContainer.scrollLeft += 707;
      if (imgGalleryContainer.scrollLeft > 1328) {
        imgGalleryContainer.scrollLeft = 0;
      }
    }
    if (event.target.id === 'arrow-left') {
      imgGalleryContainer.scrollLeft -= 707;
      if (imgGalleryContainer.scrollLeft === 0) {
        imgGalleryContainer.scrollLeft = 1388;
      }
    }
  }
});
window.addEventListener('resize', () => {
  if (prevWidth !== window.innerWidth) {
    handleMobileSlide(mobileSlide);
    prevWidth = window.innerWidth;
  }
});

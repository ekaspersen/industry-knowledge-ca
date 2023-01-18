const imgGalleryContainer = document.querySelector('#my-work-img-gallery');
const imgSlideControls = document.querySelector('#img-slide');
let scrollPos = 3;
function handleScrollPos(num) {
  imgGalleryContainer.querySelector(`img:nth-child(${num})`).scrollIntoView({ inline: 'center' });
}

handleScrollPos(scrollPos);
imgSlideControls.addEventListener('click', (event) => {
  if (window.innerWidth < 1024) {
    if (event.target.id === 'arrow-right') scrollPos = scrollPos < 5 ? (scrollPos += 1) : (scrollPos = 1);
    if (event.target.id === 'arrow-left') scrollPos = scrollPos > 1 ? (scrollPos -= 1) : (scrollPos = 5);
    handleScrollPos(scrollPos);
  } else {
    imgGalleryContainer.scrollLeft =
      imgGalleryContainer.scrollLeft === 1244
        ? (imgGalleryContainer.scrollLeft = 0)
        : (imgGalleryContainer.scrollLeft = 1244);
  }
});

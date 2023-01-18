const imgGalleryContainer = document.querySelector('#my-work-img-gallery');
const imgSlideControls = document.querySelector('#img-slide');
let scrollPos = 3;

function handleScrollPos(num) {
  imgGalleryContainer.querySelector(`img:nth-child(${num})`).scrollIntoView({ inline: 'center' });
}

handleScrollPos(scrollPos);
imgSlideControls.addEventListener('click', (event) => {
  if (event.target.id === 'arrow-right') scrollPos = scrollPos < 5 ? (scrollPos += 1) : (scrollPos = 1);
  if (event.target.id === 'arrow-left') scrollPos = scrollPos > 1 ? (scrollPos -= 1) : (scrollPos = 5);
  handleScrollPos(scrollPos);
});

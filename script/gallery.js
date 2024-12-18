import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe-lightbox.esm.min.js';
import PhotoSwipe from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe.esm.min.js';

const lightbox = new PhotoSwipeLightbox({
  // Selector for the gallery container
  gallery: '#gallery',

  // Elements within gallery (slides)
  children: 'a',
  pswpModule: PhotoSwipe,
});
lightbox.on('uiRegister', function () {
  lightbox.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: 'Caption text',
    onInit: (el, pswp) => {
      lightbox.pswp.on('change', () => {
        const currSlideElement = lightbox.pswp.currSlide.data.element;
        let captionHTML = '';
        if (currSlideElement) {
          const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
          if (hiddenCaption) {
            // get caption from element with class hidden-caption-content
            captionHTML = hiddenCaption.innerHTML;
          } else {
            // get caption from alt attribute
            captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
          }
        }
        el.innerHTML = captionHTML || '';
      });
    }
  });
});
lightbox.init();

function addNavButton() {
  const navButton = document.createElement('button');

  navButton.textContent = 'Back to Home';

  navButton.style.position = 'fixed';
  navButton.style.top = '10px';
  navButton.style.left = '10px';
  navButton.style.padding = '10px 10px';
  navButton.style.fontSize = '20sp';
  navButton.style.backgroundColor = 'red';
  navButton.style.color = 'white';
  navButton.style.border = 'none';
  navButton.style.borderRadius = '5px';
  navButton.style.cursor = 'pointer';

  navButton.addEventListener('click', () => {
    window.location.href = '../';
  });
  document.body.appendChild(navButton);
}

document.addEventListener("DOMContentLoaded", function () {
  addNavButton();
});


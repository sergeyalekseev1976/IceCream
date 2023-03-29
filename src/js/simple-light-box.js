import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

var lightbox = new SimpleLightbox('.images a', {
  captionDelay: 250,
  captionsData: 'alt',
});

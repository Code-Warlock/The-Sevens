const lightbox = GLightbox({
  'href': './assets/videos/unpackaging.mp4',
  'type': 'video',
  'source' : 'local',
  'width': 900,
  'description': 'CEO packaging the IRU in bags for exportation.',
});

const myGallery = GLightbox({
    elements: [
      {
          'href': './assets/images/iru_soup.jpeg',
          'type': 'image',
          'description': 'Example',
          'alt': 'image text alternatives'
      },
      {
          'href': './assets/images/iru_soup.jpeg',
          'type': 'image',
          'description': 'Example',
          'alt': 'image text alternatives'
      },
      {
          'href': './assets/images/iru_soup.jpeg',
          'type': 'image',
          'description': 'Example',
          'alt': 'image text alternatives'
      },
      {
          'href': './assets/images/iru_soup2.jpeg',
          'type': 'image',
          'description': 'Example',
          'alt': 'image text alternatives'
      },
      {
            'href': './assets/images/iru_soup3.jpeg',
            'type': 'image',
            'alt': 'image text alternatives'
        },
        {
              'href': './assets/images/iru_soup4.jpeg',
              'type': 'image',
              'alt': 'image text alternatives'
          },
        {
            'content': `<p>This will append some html inside the slide</p>`
        },
    ],
    autoplayVideos: true,
});
const PHOTOGALLERY = document.querySelectorAll("a[href='#products_gallery']");
PHOTOGALLERY.forEach((link)=> link.onclick =()=>myGallery.open());

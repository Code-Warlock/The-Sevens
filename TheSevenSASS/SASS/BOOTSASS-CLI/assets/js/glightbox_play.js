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
        'href': './assets/images/iru_process.jpeg',
        'type': 'image',
        'description': 'The process of manufacturing the locust bean spice',
        'alt': 'gallery locust beans'
      },
      {
        'href': './assets/images/iru_process2.jpeg',
        'type': 'image',
        'description': 'The process of manufacturing the locust bean spice',
        'alt': 'gallery locust beans'
      },
      {
          'href': './assets/images/iru_soup.jpeg',
          'type': 'image',
          'description': 'An African soup dish prepared with locust beans',
          'alt': 'gallery locust beans'
      },
      {
          'href': './assets/images/iru_soup2.jpeg',
          'type': 'image',
          'description': 'An African soup dish prepared with locust beans',
          'alt': 'gallery locust beans'
      },
      {
          'href': './assets/images/iru_soup3.jpeg',
          'type': 'image',
          'description': 'An African soup dish prepared with locust beans',
          'alt': 'gallery locust beans'
      },
      {
          'href': './assets/images/iru_soup4.jpeg',
          'type': 'image',
          'description': 'A full soup prepared with locust beans',
          'alt': 'gallery locust beans'
      },
    ],
    autoplayVideos: true,
});
const PHOTOGALLERY = document.querySelectorAll("a[href='#products_gallery']");
PHOTOGALLERY.forEach((link)=> link.onclick =()=>myGallery.open());

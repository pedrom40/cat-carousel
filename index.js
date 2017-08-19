'use strict';

function catCarousel () {

  $('.thumbnails').on('click', 'a', event => {

    // save target and others
    const clickedA = $(event.currentTarget);
    const otherAs = $('.thumbnails a').not(clickedA);

    // save hero and selected images
    const heroImg = $('.hero img');
    const selectedImg = $(event.currentTarget).find('img');

    // update aria values
    $(clickedA).attr('aria-pressed', true);
    $(otherAs).attr('aria-pressed', false);

    // update src and alt attributes
    $(heroImg).attr('src', $(selectedImg).attr('src'));
    $(heroImg).attr('alt', $(selectedImg).attr('alt'));

  });

}

/* Thinkful solution

  **
    Although simpler, I didn't go this route because it doesn't take
    advantage of event delegation
  **

  function handleThumbnailClicks() {
    $('.thumbnail').on('click', function(event) {
      const imgSrc = $(event.currentTarget).find('img').attr('src');
      const imgAlt = $(event.currentTarget).find('img').attr('alt');

      $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);

      // Accomplishes the same as line 6 with only one use off .attr()
      // by passing it an object with multiple properties.
      // See: http://api.jquery.com/attr/#attr-attributes
      // $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
    });
  }

*/

$(catCarousel)

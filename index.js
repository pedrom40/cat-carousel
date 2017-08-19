'use strict';

function catCarousel () {

  /*
    REQUIREMENTS
    1. User selects thumbnail with mouse or keyboard, selected img should
    replace hero img
    2. Hero image alt text should be updated as well
  */

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

$(catCarousel)

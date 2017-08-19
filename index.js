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

$(catCarousel)

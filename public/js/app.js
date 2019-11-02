function init() {
  $('.menu').on('click', menuHandler);
}

function menuHandler() {
  $('nav').toggleClass('nav-reveal');
}
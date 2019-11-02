function init() {
  $('.menu').on('click', menuHandler);
  $('.select-btn').on('click', buttonHandler);
  $('.close-btn').on('click', closeHandler);
}

function menuHandler() {
  $('nav').toggleClass('nav-reveal');
}

function buttonHandler(event){
  $(event.target).parent().next().show();
}

function closeHandler(event) {
  event.preventDefault();
  $(event.target).parent().hide();
}

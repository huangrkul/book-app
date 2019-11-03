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
  $('select').on('change', selectHandler);
}

function closeHandler(event) {
  event.preventDefault();
  $(event.target).parent().hide();
}

function selectHandler(event) {
  let keyValue = event.target.value;
  $('.book-shelf').val(keyValue);
  console.log($('#bookShelf'));
}
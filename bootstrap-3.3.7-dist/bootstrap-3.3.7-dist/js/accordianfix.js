// JavaScript Document
$('.panel-collapse').on('shown.bs.collapse', function(e) {
  var $panel = $(this).closest('.panel');
  $('html,body').animate({
    scrollTop: $panel.offset().top
  }, 500);
});
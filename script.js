$(function(){
  $('.js-tab-link').click(function () {
      $('.js-tab-box').hide().filter(this.hash).fadeIn();
      $('.js-tab-link').removeClass('selected');
      $(this).addClass('selected');
      return false;
  }).filter(':eq(0)').click();
});
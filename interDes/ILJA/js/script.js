$(function(){
  var $button    = $('.js-button'),
      $container = $('.js-container');
  
  $button.on('click', function(){
    var toggleText = $(this).data('toggle-text');
    
    $(this).data('toggle-text', $(this).text())
           .text(toggleText);
    
    $container.toggleClass('hidden');
  });
});
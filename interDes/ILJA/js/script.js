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


var $ = jQuery.noConflict();


$(document).ready(function ($) {
    "use strict";
    
    $('.skill-shortcode').appear(function () {
        $('.progress').each(function () {
            $('.progress-bar').css('width',  function () { return ($(this).attr('data-percentage') + '%')});
        });
    }, {accY: -100});
        
        
});
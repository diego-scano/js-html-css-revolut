$(document).ready(function() {
    $('.dropdown').addClass('hide');
    $('.link').click(function() {
      $(this).find('.dropdown').toggleClass('hide');

    })

})

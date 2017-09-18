$(document).ready(function() {

  
  /*
    showDetails function is used under Projects tab, when a user is requesting more details pertaining to one of the projects a user is interested in.
  */
  function showDetails() {
    $(this).closest('.panel-body').find('.projInfo').slideDown();
  }  
  
  $('.panel-body').on('click', 'button', showDetails); 
  
  
});

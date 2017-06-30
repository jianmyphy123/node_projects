$(document).ready(function() {
  $('.deleteProject').click(function() {
    deleteId = $(this).data('id');
    
    $.ajax({
      type: 'DELETE',
      url: '/admin/delete/'+deleteId,

    }).done(function(res) {
      console.log(res);
      window.location = '/admin';
    });
  });
});

$('a').on('click', function (e) {
    $(e.target).toggleClass('red');
});

$(function() {
    $( "#tabs" ).tabs({
      collapsible: true
    });
  });
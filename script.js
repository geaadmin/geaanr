// Add class on click
$('.text-contain .forward').click(function() {
  $('.fi-chart').attr('id', 'change');
  $('.valign').fadeOut('1000');
  $('.valign.hidden').fadeIn('1000');
});

// Back button
$('.text-contain .back').click(function() {
  $('.fi-chart').removeAttr('id');
  $('.valign').addClass('end').fadeIn('1000');
  $('.valign.hidden').fadeOut('1000');
});
$(document).ready(() => {
  $('INPUT#btn_translate').click(() => {
    $('DIV#hello').empty();
    const len = $('INPUT#language_code').val();
    $.ajax({
      type: 'GET',
      url: 'https://fourtonfish.com/hellosalut/?lang=' + len,
      success: data => {
        $('DIV#hello').append(data.hello);
      }
    });
  });
});

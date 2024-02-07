$(document).ready(() => {
  const translate = async () => {
    $('DIV#hello').empty();
    const len = $('INPUT#language_code').val();
    try {
      const data = await $.ajax({
        type: 'GET',
        url: `https://fourtonfish.com/hellosalut/?lang=${len}`
      });
      $('DIV#hello').append(data.hello);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  $('INPUT#btn_translate').click(() => {
    translate();
  });

  $('INPUT#language_code').keypress(e => {
    const key = e.which;
    if (key === 13) {
      translate();
    }
  });
});

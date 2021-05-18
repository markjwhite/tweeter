$(document).ready(() => {
  console.log("HELLO")

  $('#tweet-text').on('input', function(event) {

    //gets number of characters remaining
    let numOfChars = $(this).val().length;
    let numOfCharsRemaining = 140 - numOfChars

    //need to target the counter
    let counter = $(this).parent().siblings().children('output');
    //assign the number of characters to counter
    counter.text(numOfCharsRemaining)

    //change colour of counter text to red if limit is exceeded
    if (numOfCharsRemaining < 0) {
      counter.css('color', "red")
    } else {
      counter.css('color', '#545149')
    }



  });





});
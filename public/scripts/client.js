/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {


  //get time from unix code
  const newTime = (unix) => {
    return timeago.format(unix);
  }


  const createTweetElement = (data) => {
    let $tweet = $(`<article class="tweet">
  <header>
  <div class="user">
    <span> <img src="${data.user.avatars}" /img> </span>
    <span>${data.user.name}</span>
  </div>
  <span class='handle'>${data.user.handle}</span>
</header>
<h5 class="text">${data.content.text}</h5>
<footer>
  <span class="time-keeper">${newTime(data.created_at)}</span>
  <div class="icons">
    <i class="fas fa-flag flag"></i>
    <i class="fas fa-retweet retweet"></i>
    <i class="fas fa-heart like"></i>
  </div>
</footer>
</article>
`);
    return $tweet;
  };

  const renderTweets = (data) => {
    $("#tweets-container").empty();
    for (const tweet of data) {
      $("#tweets-container").prepend(createTweetElement(tweet))
    }
  };


  //post request new tweet
  $(".addTweet").on("submit", function(event) {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize()
    }).then((response) => {
      loadTweets()
      $("#tweet-text").val('');
      $(".counter").val('140');

    }).catch((error) => {
      console.log("There was an error:", error);
    })
  })

  const loadTweets = () => {
    $.ajax({
      method: "GET",
      url: "/tweets",
      dataType: "JSON"
    }).then((response) => {
      renderTweets(response)
    }).catch((error) => {
      console.log("There was an error:", error)
    })
  }


  loadTweets();
})


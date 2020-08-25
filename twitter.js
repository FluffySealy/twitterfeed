var settings = {
  "url": "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=HEDTKD",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "OAuth oauth_consumer_key=\"h26yLixduYuMKtB1Aef20fT0k\",oauth_token=\"629707748-9so3zaz79nOSJveYpZF0bCMPWq8hjO2nM14GfNZB\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1598351459\",oauth_nonce=\"73iNbWHRCWJ\",oauth_version=\"1.0\",oauth_signature=\"%2FPBoyQVVaVb29Vi52owPjkUJ9y4%3D\"",
    "Cookie": "personalization_id=\"v1_jBYeBtae82+Ys4/AjxkqZA==\"; guest_id=v1%3A159802530626811124; lang=en"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
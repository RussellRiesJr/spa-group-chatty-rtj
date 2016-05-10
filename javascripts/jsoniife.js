// JSON IIFE FOR AUGMENTING CHATTY TO SHOW DEFAULT MESSAGE OBJECTS
var chatty = (function(chatty) {

  // Runs the parsed JSON text through the function that formats messages for the DOM and the private array
  chatty.putMessagesinDOM = function(messages) {
    console.log(messages.default_message);
    for (var i = 0; i < messages.default_message.length; i++) {
      chatty.userInputMessages(messages.default_message[i]);
    }
  }

  $.ajax({
    url:"./javascripts/chattydefault.json"
  }).done(chatty.putMessagesinDOM);

  return chatty;

}( chatty || {} ));

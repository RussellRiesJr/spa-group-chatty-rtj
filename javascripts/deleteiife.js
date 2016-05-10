// IIFE FOR DELETING/REMOVING INFORMATION OUT OF THE DOM
var chatty = (function(chatty) {

  // function for deleting individual message elements out of the DOM
  chatty.deleteMessage = function(deleteClicked) {
    $chatbox.remove(deleteClicked.parentNode);
    chatty.deleteObject(deleteClicked.id.replace("delete", ""));
  }

  // function for deleting ALL message elements out of the DOM, disables clear button
  chatty.clearAllMessages = function(clickEvent) {
    $chatbox.empty();
    chatty.clearArray();
    $clearAll.attr("disabled", "disabled");
  }

  return chatty
}( chatty || {}));

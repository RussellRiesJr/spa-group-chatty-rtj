// IIFE FOR DELETING/REMOVING INFORMATION OUT OF THE DOM
var chatty = (function(chatty) {

  // function for deleting individual message elements out of the DOM
  chatty.deleteMessage = function(deleteClicked) {
    chatbox.removeChild(deleteClicked.parentNode);
    chatty.deleteObject(deleteClicked.id.replace("delete", ""));
  }

  // function for deleting ALL message elements out of the DOM, disables clear button
  chatty.clearAllMessages = function(clickEvent) {
    while (chatbox.firstChild) {
      chatbox.removeChild(chatbox.firstChild);
    }
    chatty.clearArray();
    clearAll.setAttribute("disabled", "disabled");
  }

  return chatty
}( chatty || {}));

// MAIN JAVASCRIPT FILE FOR CHATTY APP
// linking to body for theme changes from checkboxes
var body = $("#bod");

var edit = false;

// adding event listener for keypress
document.addEventListener("keyup", function(e) {
  var userInput = $("#userInput");
  if (e.keyCode === 13) {
    if (edit) {
      chatty.editor();
    } else {
      var messageInfo = {};
      messageInfo.messageStr = userInput.value;
      console.log(messageInfo.messageStr);
      var userOptions = $(".userOptions");
      for (var i = 0; i < userOptions.length; i++) {
        if (userOptions[i].checked){
          messageInfo.user = userOptions[i].value;
        }
      }
      chatty.userInputMessages(messageInfo);
      userInput.value = "";
    }
  }
});

// adding event listener to the Dark Theme button
$("#darkTheme").click(function(event) {
  $("body").toggleClass("dark-theme");
});

// adding event listener to the Large Text button
$("#largeText").click(function(event) {
  $("body").toggleClass("make-large");
});

// adding event listener for delete and edit buttons
var chatbox = $("#chatbox");
chatbox.click(function() {
  if (event.target.className === "delete") {
    var deleteClicked = event.target;
    chatty.deleteMessage(deleteClicked);
  } else if (event.target.className === "edit") {
    var editClicked = event.target;
    console.log(editClicked)
    chatty.editFocus(editClicked);
  } else {
    return;
  }
});

// adding event listener for clear button
$("#clear").click(chatty.clearAllMessages);


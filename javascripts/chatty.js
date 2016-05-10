// MAIN JAVASCRIPT FILE FOR CHATTY APP
// linking to body for theme changes from checkboxes
var body = $("#bod");

var edit = false;

// adding event listener for keypress
document.addEventListener("keyup", function(e) {
  var $userInput = $("#userInput");
  if (e.keyCode === 13) {
    if (edit) {
      chatty.editor();
    } else {
      var messageInfo = {};
      messageInfo.messageStr = $userInput.val();
      console.log(messageInfo.messageStr);
      var $userOptions = $(".userOptions");
      $userOptions.each(function(options) {
        $userOptions[options];
        if ($userOptions[options].checked){
          console.log($userOptions[options]);
          messageInfo.user = $userOptions[options].value;
        }
      })
      // for (var i = 0; i < $userOptions.length; i++) {
      // }
      chatty.userInputMessages(messageInfo);
      $userInput.val("");
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
var $chatbox = $("#chatbox");
$chatbox.click(function() {
  if ($(event.target.class) === "delete") {
    var deleteClicked = $(event.target);
    chatty.deleteMessage(deleteClicked);
  } else if ($(event.target.class) === "edit") {
    var editClicked = $(event.target);
    console.log(editClicked)
    chatty.editFocus(editClicked);
  } else {
    return;
  }
});

// adding event listener for clear button
var $clearAll = $("#clear")
$clearAll.click(chatty.clearAllMessages);


//page 2
//email and password disapper
function hideLabel(input) {
    input.nextElementSibling.style.display = "none";
  }

  function showLabel(input) {
    if (input.value.length === 0) {
      input.nextElementSibling.style.display = "block";
    }
  }

//button submit visible
function hideLabel(input) {
    input.nextElementSibling.style.display = "none";
  }

  function showLabel(input) {
    if (!input.value) {
      input.nextElementSibling.style.display = "block";
    }
  }

  function enableSubmitBtn() {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const submitBtn = document.querySelector("#submitBtn");

    if (email.value && password.value) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  //google
  function onSignIn(googleUser) {
    // Get the user's ID token and basic profile information
    var id_token = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();
  
    // Send the ID token to your server for verification
    // ...
  
    // Handle the response from your server
    // ...
  }

//main
//menu
const profilePic = document.getElementById("profile-pic");
const popupWindow = document.getElementById("popup-window"); //profile menu

const error = document.querySelector(".error"); //when click on error
const errorModal = document.getElementById("error-modal"); //modal

const subscriptionButton = document.getElementById("subscription-button"); //when click on subscr
const subscriptionModal = document.getElementById("subscription-modal"); //modal

const close = document.querySelector(".close"); //close button


//click on profile
profilePic.addEventListener("click", function() {
  if (popupWindow.style.display === "block") {
    popupWindow.style.display = "none";
  } else {
    popupWindow.style.display = "block";
  }
});

error.addEventListener("click", function() {
popupWindow.style.display = "none";
errorModal.style.display = "block";
});

subscriptionButton.addEventListener("click", function() {
popupWindow.style.display = "none";
if (subscriptionModal.style.display === "block") {
  subscriptionModal.style.display = "none";
} else {
  subscriptionModal.style.display = "block";
}
});

window.addEventListener("click", function(event) {
  if (event.target !== profilePic && !popupWindow.contains(event.target)) {
  popupWindow.style.display = "none";
  }
  });  

close.addEventListener("click", function() {
  errorModal.style.display = "none";
  subscriptionModal.style.display = "none";
});


//selected
const items = document.querySelectorAll(".items-input");
const textareaInput = document.querySelector(".textarea-input");

let lastSelected;

items.forEach(item => {
item.addEventListener("click", function() {
if (lastSelected) {
lastSelected.classList.remove("selected");
}
this.classList.toggle("selected");
textareaInput.value = this.textContent.trim();

//input
messageContainer.style.height = 'auto';
textareaInput1.style.height = '1px';
textareaInput1.style.height = `${textareaInput1.scrollHeight}px`;

if (textareaInput1.scrollHeight > 146) {
  messageContainer.style.overflowY = 'scroll';
} else {
  messageContainer.style.overflowY = 'hidden';
}
//

lastSelected = this;
});
});

//form
const textarea = document.querySelector("#error-text");
textarea.addEventListener("focus", function() {
  textarea.value = "";
});


//switch buttons
const decreaseButton = document.querySelector(".decrease-button");
const increaseButton = document.querySelector(".increase-button");
const duration = document.getElementById("duration");
const price = document.getElementById("price");

increaseButton.addEventListener("click", function(crease) {

  crease.preventDefault();
  if (duration.textContent === "1 месяц") {
    duration.textContent = "3 месяца";
    price.textContent = "2840 руб.";
  } else if (duration.textContent === "3 месяца") {
    duration.textContent = "12 месяцев";
    price.textContent = "9360 руб.";
  }
});

decreaseButton.addEventListener("click", function(crease) {
  crease.preventDefault();
  if (duration.textContent === "12 месяцев") {
    duration.textContent = "3 месяца";
    price.textContent = "2840 руб.";
  } else if (duration.textContent === "3 месяца") {
    duration.textContent = "1 месяц";
    price.textContent = "980 руб.";
  }
});

//input
const chatTextArea = document.querySelector('#chat-textarea');
const chatForm = document.querySelector('#chat-form');
const chatButton = document.querySelector('#chat-button');

chatTextArea.addEventListener('input', function() {
  chatForm.style.height = 'auto';
  chatTextArea.style.height = `${chatTextArea.scrollHeight}px`;
 
  if (chatTextArea.scrollHeight > 24){
    chatButton.style.height = '37px';
  }

  if (chatTextArea.scrollHeight > 146) {
    chatForm.style.overflowY = 'scroll';
    chatForm.style.height = '146px';

  } else {
    chatForm.style.overflowY = 'hidden';
  }
});

import bot from './assets/svg/bot.svg'
import user from './assets/svg/user.svg'

const form = document.querySelector('#chat-form')
const chatContainer = document.querySelector('#chat_container')

let loadInterval

function loader(element) {
    element.textContent = ''

    loadInterval = setInterval(() => {
        // Update the text content of the loading indicator
        element.textContent += '.';

        // If the loading indicator has reached three dots, reset it
        if (element.textContent === '....') {
            element.textContent = '';
        }
    }, 300);
}

function typeText(element, text) {
    let index = 0

    let interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index)
            index++
        } else {
            clearInterval(interval)
        }
    }, 20)
}

// generate unique ID for each message div of bot
// necessary for typing text effect for that specific reply
// without unique ID, typing text will work on every element
function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
}

function chatStripe(isAi, value, uniqueId) {
    return (
        `
        <div class="wrapper ${isAi && 'ai'}">
            <div class="chat">
                <div class="profile">
                    <img 
                      src=${isAi ? bot : user} 
                      alt="${isAi ? 'bot' : 'user'}" 
                    />
                </div>
                <div class="message" id=${uniqueId}>${value}</div>
            </div>
        </div>
    `
    )
}

const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData(form)

    // user's chatstripe
    chatContainer.innerHTML += chatStripe(false, data.get('prompt'))

    // to clear the textarea input 
    form.reset()

    // bot's chatstripe
    const uniqueId = generateUniqueId()
    chatContainer.innerHTML += chatStripe(true, " ", uniqueId)

    // to focus scroll to the bottom 
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // specific message div 
    const messageDiv = document.getElementById(uniqueId)

    // messageDiv.innerHTML = "..."
    loader(messageDiv)

    const response = await fetch('https://open-ai-8bga.onrender.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: data.get('prompt')
        })
    })

    clearInterval(loadInterval)
    messageDiv.innerHTML = " "

    if (response.ok) {
        const data = await response.json();
        const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 

        typeText(messageDiv, parsedData)
    } else {
        const err = await response.text()

        messageDiv.innerHTML = "Something went wrong"
        alert(err)
    }
}

form.addEventListener('submit', handleSubmit)
form.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        handleSubmit(e)
    }
})



  
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
  
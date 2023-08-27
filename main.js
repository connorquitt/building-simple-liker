// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heart = document.querySelectorAll(".like-glyph")
const errorMod = document.getElementById('modal')


for(const like of heart) {
like.addEventListener("click", () => {
  mimicServerCall()
  .then(() => {
    if(like.textContent === EMPTY_HEART) {
      like.textContent = FULL_HEART
      like.classList.add('activated-heart')
    }else if(like.textContent === FULL_HEART){
      like.textContent = EMPTY_HEART
      like.classList.remove('activated-heart')
    }
  })
  .catch((error) => {
    errorMod.classList.remove('hidden')
    errorMod.textContent = error
    setTimeout(() => errorMod.classList.add("hidden"), 3000)
    console.log(error)
  })
})}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

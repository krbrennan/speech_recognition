// const recognition = new webkitSpeechRecognition();
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.start();


// words.appendChild(p);


recognition.addEventListener('result', e => {
  console.log(e)
})

recognition.addEventListener('end', recognition.start);
//
recognition.onresult = function(e) {
  let p = document.createElement("p");
  const words = document.querySelector('.words');
  // console.log(e.results[0].isFinal)
  if(e.results[0].isFinal == true){
    p = e.results[0][0].transcript + ".  "
    words.append(p)
    // recognition.start;
  }
}

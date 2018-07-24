// const recognition = new webkitSpeechRecognition();
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.start();

let p = document.createElement("p");
const words = document.querySelector('.words');
words.appendChild(p);


recognition.addEventListener('result', e => {
  // console.log(e)
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

  capitalizedTranscript = transcript.charAt(0).toUpperCase() + transcript.substr(1)
  p.textContent = capitalizedTranscript + '.  ';
  if(e.results[0].isFinal){
    // p = document.createElement('p');
    // words.appendChild(p)
    setTimeout(completedSentence, 2000)
  }
})

function completedSentence(){
  p = document.createElement('p');
  words.appendChild(p)
}

recognition.addEventListener('end', recognition.start);
//
// recognition.onresult = function(e) {
//   let p = document.createElement("p");
//   const words = document.querySelector('.words');
//   if(e.results[0].isFinal == true){
//     p = e.results[0][0].transcript + ".  "
//     p = p[0].toUpperCase() + p.slice(1,-1)
//     words.append(p)
//   }
// }

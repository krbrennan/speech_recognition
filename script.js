// Considers different browsers' implementations of speech recognition
// Since this app only works on Chrome, it's mostly here as a reminder to implement
// support for different browsers whenever they decide to integrate useable voice recognition tools
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;

const startRecording = document.getElementById('record-btn');
const endRecording = document.getElementById('record-end');

// 
// 
startRecording.onclick = function(){
  beginRecording();
}
// 
// 
function completedSentence(transcript){
    const p = document.createElement("p");
    const words = document.querySelector('.words');
  
     // formatting to include basic punctuation
     capitalizedTranscript = transcript.charAt(0).toUpperCase() + transcript.substr(1)
     p.textContent = capitalizedTranscript + '.  ';

    words.append(p)
}
// 
// 

function beginRecording(){
  // console.log('ANNOTATING')

  // initializes speech recognition variable and begins listening to mic
  // I used to have "new SpeechRecognition" at the top of the script, globally, 
  // but when I'd stop recording then begin again I would get duplicate text
  // and I couldn't figure out why the script seemed to be running multiple instances.
  // I've reasoned that by creating the object here, I'm able to ensure that only one
  // instance is created when beginRecording() is called.
  recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.start();
  
  
  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

    if(e.results[0].isFinal){
      num = 0
      setTimeout(completedSentence(transcript), 1000)
    }
  });
  recognition.addEventListener('end', recognition.start)
}
// 
// 

// 
// 
endRecording.onclick = function(){
  endDictation();
}
// 
// 

// 
// 
function endDictation(){
  recognition.removeEventListener('end', recognition.start)
  recognition.stop();
  recognition.abort();
  num = 0;
  console.log('successfully aborted recording');
  return;
}

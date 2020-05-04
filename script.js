// Considers different browsers' implementations of speech recognition
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

const startRecording = document.getElementById('record-btn');
const endRecording = document.getElementById('record-end');

let numberOfP = 0

let stopRecording = false;

  // creates a paragraph HTML element to transcribe dictations 
  // const p = document.createElement("p");
  // let words = document.querySelector('.words');



startRecording.onclick = function(){
  beginRecording();
}

function beginRecording(){

console.log(recognition)
  console.log('ANNOTATING')
  // initializes speech recognition variable and begins listening to mic
  // const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.start();
  
  
  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')


      function completedSentence(){


        // console.log(p.textContent)
        const p = document.createElement("p");
        let words = document.querySelector('.words');

         // formatting to include basic punctuation
         capitalizedTranscript = transcript.charAt(0).toUpperCase() + transcript.substr(1)
         p.textContent = capitalizedTranscript + '.  ';
        // p = document.createElement('p');
        // words.appendChild(p)
        words.append(p)
      }
    
    
    
    if(e.results[0].isFinal){
      // p = document.createElement('p');
      // words.appendChild(p)
      setTimeout(completedSentence(), 1000)
    }
  });
  
  recognition.addEventListener('end', recognition.start)

}


  

  



// endRecording.addEventListener('click', () => {
//   console.log('STOPPPPP')
//   recognition.stop();
// });

endRecording.onclick = function(){
  endDictation();
}

function endDictation(){
  recognition.removeEventListener('end', recognition.start )
  recognition.stop;
  recognition.abort;
  console.log('successfully aborted recording')
}



// function annotate(){


//   console.log('ANNOTATING')
// // initializes speech recognition variable and begins listening to mic
// // const recognition = new SpeechRecognition();
// recognition.interimResults = true;
// recognition.start();

// // creates a paragraph HTML element to transcribe dictations 
// let p = document.createElement("p");
// const words = document.querySelector('.words');
// words.appendChild(p);


// recognition.addEventListener('result', e => {
//   const transcript = Array.from(e.results)
//     .map(result => result[0])
//     .map(result => result.transcript)
//     .join('')
  
// // formatting to include basic punctuation
//   capitalizedTranscript = transcript.charAt(0).toUpperCase() + transcript.substr(1)
//   p.textContent = capitalizedTranscript + '.  ';
//   if(e.results[0].isFinal){
//     // p = document.createElement('p');
//     // words.appendChild(p)
//     setTimeout(completedSentence, 1000)
//   }
// })

// function completedSentence(){
//   p = document.createElement('p');
//   words.appendChild(p)
// }

// // recognition.addEventListener('stop', recognition.stop);
// recognition.addEventListener('end', recognition.start);

// }

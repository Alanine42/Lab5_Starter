// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let synth = window.speechSynthesis
  let voices = null

  // Get the voice lists & append to the <select> element
  synth.onvoiceschanged = function() {

    let dropdown = document.getElementById('voice-select')
    voices = synth.getVoices()

    voices.forEach(function(voice) {
      let option = document.createElement('option')
      option.textContent = voice.name + ' (' + voice.lang + ')'
      if (voice.default)
        option.textContent += ' -- DEFAULT'

      option.setAttribute('name', voice.name)
      option.setAttribute('lang', voice.lang)

      dropdown.appendChild(option)
  })

  }


  // Speak the text
  let button = document.querySelector('button')
  button.addEventListener('click', function() {
    // get user's text input
    let text = document.getElementById('text-to-speak').value
    let utterance = new SpeechSynthesisUtterance(text)
    
    // set the lang and voice 
    let voiceIndex = document.getElementById('voice-select').selectedIndex
    utterance.voice = voices[voiceIndex-1]


    // open mouth while speaking
    let face = document.querySelector('[alt="Smiling face"]')
    face.src = 'assets/images/smiling-open.png'
    synth.speak(utterance)
    utterance.addEventListener('end', function() {
      face.src = 'assets/images/smiling.png'
    })

  })
}

// let utterance = new SpeechSynthesisUtterance("Hello world!");
// speechSynthesis.speak(utterance); 
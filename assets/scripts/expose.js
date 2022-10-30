// expose.js

window.addEventListener('DOMContentLoaded', init);

// init() isn't called until the whole DOM has been loaded
// so we can safely query the DOM for elements
function init() {

  let myHorn = document.getElementById('horn-select')
  myHorn.addEventListener('change', function updateHorn() {
    // select and modify the image element
    let hornImage = document.querySelector('img')
    hornImage.src = `assets/images/${myHorn.value}.svg`

    // select and modify the audio source
    let hornSound = document.querySelector('audio')
    hornSound.src = `assets/audio/${myHorn.value}.mp3`
  })
  


  // Change volume by slider (written more compactly)
  let slider = document.getElementById('volume')
  slider.addEventListener('change', function() {
    let volume = slider.value
    console.log(volume)

    // change volume icon
    let volumeIcon = document.querySelector('#volume-controls img')
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg'
    }
    else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg'
    }
    else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg'
    }
    else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg'
    }

    // change the actual volume of audio
    let hornSound = document.querySelector('audio')
    hornSound.volume = volume / 100   // js audio is 0~1
  })
  

  // Actually playing the audio when clicked
  let playButton = document.querySelector('button')
  playButton.addEventListener('click', function() {
    let hornSound = document.querySelector('audio')
    hornSound.play()

    // Confetti for party horn !!
    if (myHorn.value == 'party-horn') {
      let jsConfetti = new JSConfetti()
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        confettiNumber: 110,
      })
    }
  })

}
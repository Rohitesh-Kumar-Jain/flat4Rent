const sections=document.querySelectorAll('.space,.statement')

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1
entry.target.style.transform="translateY(0)"

}

})

})

sections.forEach(s=>{

s.style.opacity=0
s.style.transform="translateY(50px)"
s.style.transition="all 1s ease"

observer.observe(s)

})

// Enable music playback after user interaction
window.addEventListener('click', function playMusicOnce() {
  const audio = document.querySelector('audio');
  if (audio) {
    audio.play();
    // Remove listener after first click
    window.removeEventListener('click', playMusicOnce);
  }
});

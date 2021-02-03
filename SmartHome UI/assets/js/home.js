const btns = document.querySelectorAll('.btn:not(.light-btn, .lock-btn, .home-btn, .temp-btn)');
const lightBtns = document.querySelectorAll('.light-btn');


btns.forEach(btn => {
  btn.addEventListener('click', toggleOnClass);
})

lightBtns.forEach(btn => {
  btn.addEventListener('click', lightLevelControl);
})


function toggleOnClass() {
  this.classList.toggle('on');
  console.log(this);
}

function lightLevelControl() {
  if(!this.classList.contains('dim') && !this.classList.contains('bright')) {
      this.classList.add('dim');
  } else if(this.classList.contains('dim')){
      this.classList.remove('dim');
      this.classList.add('bright');
  } else {
      this.classList.remove('bright');
  }
}
function turnOnTheLight() {
  const img = document.getElementById('lamp');
  img.src = 'images/2.jpg';
}

function turnOffTheLight() {
  const img = document.getElementById('lamp');
  img.src = 'images/1.jpg';
}

function changeTheImage() {
  const img = document.getElementById('bulb');
  img.src = 'images/4.jpg';
}

// 2nd option
const button = document.querySelector('#off');
button.onclick = turnOffTheLight;


// 3rd option
const img = document.getElementById('bulb');
img.addEventListener('mouseenter', changeTheImage);

img.addEventListener('mouseleave', () => {
  const img = document.getElementById('bulb');
  img.src = 'images/3.png';
});

const container = document.querySelector('.container');

// How many floating guys you want
const COUNT = 5;  // change this number to add more

function createFloater() {
  const img = document.createElement('img');
  img.src = 'guy.png';
  img.classList.add('floater');

  // Random size between 80px and 200px
  const size = 80 + Math.random() * 120;
  img.style.width = size + 'px';

  // Random vertical position
  const maxY = window.innerHeight - size;
  img.style.top = Math.random() * maxY + 'px';

  // Random animation speed (3s to 8s)
  const speed = 3 + Math.random() * 5;
  img.style.animationDuration = speed + 's';

  // When animation loops, randomize again
  img.addEventListener('animationiteration', () => {
    const newY = Math.random() * maxY;
    img.style.top = newY + 'px';
  });

  container.appendChild(img);
}

for (let i = 0; i < COUNT; i++) {
  createFloater();
}
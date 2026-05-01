const container = document.getElementById('heart-container');
const images = [
    '../images/heart1.png',
    '../images/flower1.png',
    '../images/flower2.png',
  ];

for (let i = 0; i < 40; i++) {
  const img = document.createElement('img');
  const randomImage = images[Math.floor(Math.random() * images.length)];
  img.src = randomImage;
  img.className = 'floating-heart';

  const size = Math.random() * 30 + 20 + 'px'; 
  const left = Math.random() * 100 + '%';
  const duration = Math.random() * 3 + 4 + 's'; 
  const delay = Math.random() * 5 + 's';

  img.style.setProperty('--size', size);
  img.style.setProperty('--duration', duration);
  img.style.setProperty('--delay', delay);
  img.style.left = left;

  container.appendChild(img);
}

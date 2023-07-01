window.addEventListener('load', () => {
  var heading = document.getElementById('heading');
  heading.style.opacity = 1;
  var words = heading.innerText.split(' ');
  var delay = 1500;

  heading.innerText = '';

  for (let i = 0; i < words.length; i++) {
    {
      setTimeout(() => {
        heading.textContent += `${words[i]} `;
      }, (delay * i) / 2);
    }
  }
});

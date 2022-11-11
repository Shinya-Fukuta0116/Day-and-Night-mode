let icon = document.querySelector('#icon');

icon.onclick = () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    icon.src = "./img/images/sun.png";
  } else {
    icon.src = "./img/images/moon.png";
  }
};
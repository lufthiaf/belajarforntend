const btn = document.getElementById('btnMessage');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
  message.textContent = "Selamat datang di profilku!";
  message.style.color = "#ff6f91";
  message.style.fontWeight = "bold";
});

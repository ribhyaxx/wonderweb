// optional glow pulse
setInterval(() => {
  const g = document.querySelector(".glow");
  if (!g) return;
  g.style.textShadow = "0 0 30px #c084fc";
  setTimeout(() => {
    g.style.textShadow = "0 0 15px #9b5cff";
  }, 300);
}, 3000);

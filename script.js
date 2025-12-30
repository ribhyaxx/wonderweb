function pulse() {
  document.body.style.filter = "drop-shadow(0 0 15px #9b5cff)";
  setTimeout(() => {
    document.body.style.filter = "none";
  }, 400);
}

// subtle title flicker
setInterval(() => {
  const glow = document.querySelector(".glow");
  if (!glow) return;
  glow.style.textShadow = "0 0 25px #c084fc";
  setTimeout(() => {
    glow.style.textShadow = "0 0 10px #9b5cff";
  }, 200);
}, 3000);

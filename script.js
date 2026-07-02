let current = 1;

function nextPage() {
  document.getElementById("p" + current).classList.remove("active");
  current++;

  const next = document.getElementById("p" + current);
  if (next) {
    next.classList.add("active");
  }
}

function heartBurst() {
  const container = document.getElementById("hearts");

  container.innerHTML = "";

  const emojis = ["💗","💖","💕","💞","🤍"];

  for (let i = 0; i < 25; i++) {
    let span = document.createElement("span");
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.position = "absolute";
    span.style.left = Math.random() * 100 + "%";
    span.style.animation = "floatUp 2s ease forwards";
    span.style.fontSize = "24px";

    container.appendChild(span);
  }
}

/* floating hearts animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-200px); opacity: 0; }
}
`;
document.head.appendChild(style); 

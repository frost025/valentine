const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const title = document.getElementById("title");

/* Get name from URL */
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if (name) {
  title.innerHTML = `${name}, will you be my Valentine? 💘`;
}

/* Move NO button */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250;
  const y = Math.random() * 120;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* YES click */
yesBtn.addEventListener("click", () => {
  message.innerHTML = `Yay ${name || ""}! 💖 You just made my day 😍`;
  createHearts();
});

/* Hearts */
function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}

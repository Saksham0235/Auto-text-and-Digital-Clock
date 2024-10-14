let changingtext = document.querySelector(".change");
const cursor = document.querySelector(".cursor");

let words = ["Awesome", "Innovative", "Creative", "Unique", "Weird", "Cool"];
const typingDelay = 400;
const erasingDelay = 200;
const newLetterDelay = 200;

let ind = 0;

let charInd = 0;
document.addEventListener("DOMContentLoaded", function () {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charInd < words[ind].length) {
    changingtext.textContent += words[ind].charAt(charInd);
    charInd++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charInd > 0) {
    changingtext.textContent = words[ind].substring(0, charInd - 1);
    charInd--;
    setTimeout(erase, erasingDelay);
  } else {
    ind++;
    if (ind >= words.length) {
      ind = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}

//             CLOCK

const clock = document.querySelector(".clock");
clock.addEventListener("load", tick);

function tick() {
  const now = new Date();
  const h = now.getHours();
  let hour12 = h % 12 || 12; 
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
    <span>${hour12} : </span>
    <span>${m} : </span>
    <span>${s} </span>
    `;
clock.innerHTML = html;
};

setInterval(tick,1000);
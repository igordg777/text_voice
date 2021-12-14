message.addEventListener("keyup", function () {
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + "px";
  }
});

function speak(text) {
  const message = new SpeechSynthesisUtterance();
  message.lang = "ru-RU";
  message.text = text;
  window.speechSynthesis.speak(message);
}

const btn = document.getElementById("speak");
const txtMessage = document.getElementById("message");
const btnStop = document.getElementById("speakStop");
btn.addEventListener("click", () => {
  speak(txtMessage.value);
});

let flag = true;

btnStop.addEventListener("click", () => {
  window.speechSynthesis.cancel();
});

function speak (text){
    const message = new SpeechSynthesisUtterance();
    message.lang = 'ru-RU';
    message.text = text;
    window.speechSynthesis.speak(message);
}

const btn = document.getElementById('speak');
const txtMessage = document.getElementById('message');
btn.addEventListener('click', () => {
    speak(txtMessage.value);
});
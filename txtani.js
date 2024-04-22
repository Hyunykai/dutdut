document.addEventListener("DOMContentLoaded", function() {
    const phrases = ["즐거운", "안전한", "새로운", "편리한"];
    let currentPhraseIndex = 0;
    let charIndex = 0;
    let p = document.getElementById('txa');
    let direction = 'backward';

    function updateText() {
        if (direction === 'backward') {
            if (charIndex > 1) {
                charIndex--;
                p.textContent = phrases[currentPhraseIndex].slice(0, charIndex) + "|";
            } else {
                direction = 'forward';
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                charIndex = 0;
            }
        } else {
            if (charIndex < phrases[currentPhraseIndex].length) {
                charIndex++;
                p.textContent = phrases[currentPhraseIndex].slice(0, charIndex) + "|";
            } else {
                direction = 'backward';
                setTimeout(updateText, 3000); 
                return;
            }
        }
        setTimeout(updateText, 200);
    }

    setTimeout(updateText, 3000);
});


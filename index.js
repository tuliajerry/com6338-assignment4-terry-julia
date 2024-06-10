var words = [
    'bananas',
    'grapes',
    'carousel',
    'milkshake',
    'javascript',
    'limousine',
    'chocolate',
    'programming',
    'meatloaf',
    'ukulele',
    'mango'
];


var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var guessedLetters = [];
var currentWord = null;


function initializeGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingGuesses = 10;
}


function updateDisplay() {
    document.getElementById('word-to-guess').textContent = currentWord
        .split('')
        .map(letter => guessedLetters.includes(letter) ? letter : '_')
        .join('');
    document.getElementById('previous-word').textContent = wins > 0 || losses > 0 ? currentWord : '';
    document.getElementById('incorrect-letters').textContent = guessedLetters.filter(letter => !currentWord.includes(letter)).join(', ');
    document.getElementById('remaining-guesses').textContent = remainingGuesses;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
}


function handleGuess(letter) {
    if (currentWord === null) {
        initializeGame();
    }

    
    if (guessedLetters.includes(letter)) {
        return;
    }


    guessedLetters.push(letter);

   
    if (!currentWord.includes(letter)) {
        remainingGuesses--; 
    }

    
    if (currentWord.split('').every(letter => guessedLetters.includes(letter)) && remainingGuesses > 0) {
        wins++; 
        initializeGame();
    } else if (remainingGuesses === 0) {
        losses++;
        initializeGame();
    }

   
    updateDisplay();
}


updateDisplay();


document.addEventListener('keydown', function(event) {
    var keyCode = event.keyCode;
   
    if (keyCode >= 65 && keyCode <= 90) {
        var letter = String.fromCharCode(keyCode).toLowerCase();
        handleGuess(letter);
    }
});

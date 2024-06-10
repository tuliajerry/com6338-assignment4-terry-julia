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


describe("Word Guess Game", function () {
  beforeEach(function () {
    initializeGame();
  });

  it("Should count 'b' as a correct guess", function () {
    guessLetter("b");
    expect(wordToGuess.textContent).to.equal("b______");
  });

  it("Should count 'i' as an incorrect guess", function () {
    guessLetter("i");
    expect(wordToGuess.textContent).to.equal("_______");
  });

  it("Solving the word should increase wins and reset the game with the next word", function () {
   
    guessWord("bananas");
    
    solveWord();
    
    expect(parseInt(wins.textContent)).to.equal(1);
    
    expect(wordToGuess.textContent).to.equal("javascript");
  });

  it("Playing against the word 'javascript' and winning should display previous word 'bananas'", function () {
   
    guessWord("bananas");
    
    solveWord();
   
    guessWord("javascript");
   
    expect(previousWord.textContent).to.equal("bananas");
  });

  it("Should count 3 incorrect guesses", function () {
   
    guessWord("javascript");
   
    guessLetter("x");
    guessLetter("y");
    guessLetter("z");
   
    expect(remainingGuesses.textContent).to.equal("7");
  });

  it("Should count 3 correct guesses", function () {
    
    guessWord("javascript");
   
    guessLetter("j");
    guessLetter("a");
    guessLetter("v");
   
    expect(wordToGuess.textContent).to.equal("jav___r__");
  });

  it("Solving the word should increase wins and reset the game with the next word", function () {
    
    guessWord("javascript");
    
    solveWord();
    
    expect(parseInt(wins.textContent)).to.equal(1);
    
    expect(wordToGuess.textContent).to.equal("java______");
  });

  it("Playing against the word 'mango' and losing should display previous word 'javascript'", function () {
    
    guessWord("javascript");
   
    for (let i = 0; i < 10; i++) {
      guessLetter("x");
    }
   
    guessWord("mango");
   
    expect(previousWord.textContent).to.equal("javascript");
  });

  it("Should count 3 incorrect guesses", function () {
   
    guessWord("mango");
    
    guessLetter("x");
    guessLetter("y");
    guessLetter("z");
   
    expect(remainingGuesses.textContent).to.equal("7");
  });

  it("Should count a mix of 4 correct and 7 incorrect guesses correctly", function () {
    
    guessWord("mango");
   
    guessLetter("m");
    guessLetter("a");
    guessLetter("n");
    guessLetter("g");
    guessLetter("x");
    guessLetter("y");
    guessLetter("z");
    guessLetter("o");
    guessLetter("p");
   
    expect(remainingGuesses.textContent).to.equal("3");
  });
});


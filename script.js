const quizData = [
    {
        question: "Who plays the iconic role of Iron Man in the Marvel Cinematic Universe?",
        options: ["Robert Downey Jr.", "Chris Evans", "Tom Holland", "Mark Ruffalo"],
        correctAnswer: "Robert Downey Jr."
    },
    {
        question: "What was the name of the first Harry Potter book?",
        options: ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet of Fire"],
        correctAnswer: "Harry Potter and the Sorcerer's Stone"
    },
    {
        question: "What is the name of the popular video game franchise featuring Mario?",
        options: ["Super Mario Bros.", "Sonic the Hedgehog", "Crash Bandicoot", "Pac-Man"],
        correctAnswer: "Super Mario Bros."
    },
    {
        question: "What is the name of the social media platform founded by Mark Zuckerberg?",
        options: ["TikTok", "Instagram", "Facebook", "Twitter"],
        correctAnswer: "Facebook"
    },
    {
        question: "Who is the author of the book series Harry Potter?",
        options: ["Stephen King", "J.K. Rowling", "Jane Austen", "Dan Brown"],
        correctAnswer: "J.K. Rowling"
    }
];

let currentQuestionIndex = 0;
let score = 0;


function loadQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const currentQuestion = quizData[currentQuestionIndex];
    
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const feedback = document.getElementById('feedback');
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        feedback.textContent = "Correct!";
        score++;
    } else {
        feedback.textContent = "Wrong!";
    }

    document.getElementById('score').textContent = `Score: ${score}/${quizData.length}`;

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        setTimeout(loadQuestion, 100); 
    } else {
        setTimeout(showFinalScore, 100);
    }
}


function showFinalScore() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<div class="align">
    <h3>Congratulations!</h3>  
        <h1>Your final score is ${score}/${quizData.length}</h1>
        
    </div>`;
    
}


loadQuestion();
let questions = [ // Array of questions and their corresponding answers
];

// fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')

const QElement = document.getElementById("Q");// Get the element to display the current question
const AnswerBtn = document.getElementById("AnswersB"); // Get the container for the answer buttons
const Nextbtn = document.getElementById("Next");// Get the "Next" button element
const result = document.getElementById("Result");// Get the element to display the final result

let Qindex = 0;
let Score = 0;


// Fetch the API and populate the questions array
fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`)


// This first .then() block handles the response from the API fetch request.
// The response.json() method is called to parse the response as JSON.
.then( async (response) => {

    let data = await response.json();

// The data.results array contains the questions from the API.
// We map over this array and create a new array of question objects.
questions = data.results.map(q => ({
    question: q.question,
    Answers:shuffleArray([
        { text: q.correct_answer, correct: true },
        // The first answer object in the 'Answers' array is the correct answer.
        // It has a 'text' property with the correct answer text, and a 'correct' property set to true.
        ...q.incorrect_answers.map(a => ({ text: a, correct: false }))
        // The remaining answer objects in the 'Answers' array are the incorrect answers.
        // We use the .map() method to create an array of incorrect answer objects, each with a 'text' property and a 'correct' property set to false.
    ])
}));
StartQuiz();
})

// Function to start the quiz
//-------------------------------------------------------------------------------------------------------
// Function to start the quiz
function StartQuiz() {

    Qindex = 0; // Index of the current question
    Score = 0; // User's current score
    Nextbtn.innerHTML = "Next";
    Nextbtn.style.display = "none";

    ShowQuiz();
};
//-------------------------------------------------------------------------------------------------------
// Function to display the current question and its answers
function ShowQuiz() {

    let CurrnetQ = questions[Qindex];// Get the current question
    let Num = Qindex + 1;
    QElement.innerHTML = Num +"."+ CurrnetQ.question; // Display the question
    AnswerBtn.innerHTML = ""; // Clear the answer buttons

    CurrnetQ.Answers.forEach(answer => {
        const button = document.createElement("button");  // Create a new button element
        button.innerHTML = answer.text; // Set the button text
        button.classList.add("btn"); // Add a CSS class to the button
        AnswerBtn.appendChild(button); // Append the button to the answer container

        if (answer.correct) {
            button.dataset.correct = answer.correct; // Store the correct answer status in the button's dataset
        }
        button.addEventListener("click", selecAnswer); // Add a click event listener to the button
    });
}
//-------------------------------------------------------------------------------------------------------
// Function to handle the user's answer selection
function selecAnswer(e) {

    const selectbtn = e.target;// Get the selected answer button
    const isCorrect = selectbtn.dataset.correct === "true";// Check if the answer is correct
    if (isCorrect) {
        selectbtn.classList.add("Correct");// Add a CSS class for the correct answer
        Score++; // Increment the score
    }
    else {
        selectbtn.classList.add("Incorrect");// Add a CSS class for the incorrect answer
    }
    Array.from(AnswerBtn.children).forEach(button => {

        if (button.dataset.correct === "true") {
            button.classList.add("Correct")
        }
        button.disabled = true;// to disabled the button after we select one of them

    });

    Nextbtn.style.display = "inline"; // Show the "Next" button
}
//-------------------------------------------------------------------------------------------------------
// Function to handle the "Next" button click
function handleNextBtn() {

    Qindex++;// Increment the question index

    if (Qindex < questions.length) {
        Nextbtn.style.display = "none"; // Disable the "Next" button until an answer is selected
        ShowQuiz();// Display the next question
    } else {
        ShowScore(); // Display the final score
    }
}

//-------------------------------------------------------------------------------------------------------
// Effect
const jsConfetti = new JSConfetti();
//-------------------------------------------------------------------------------------------------------
// Function to display the final score 
function ShowScore() {

    // Determine the final score message
    if (Score === 10) {
        result.innerHTML = `Your scored ${Score} out of ${questions.length}. You did a great job!`;
        jsConfetti.addConfetti({
            confettiColors: [
                '#EE4E4E', '#F6EEC9', '#A1DD70', '#799351', '#F6EEC9', '#A1DD70',
            ],
        });
    } else if (Score >= 7 && Score <= 9) {
        result.innerHTML = `Your scored ${Score} out of ${questions.length}. You try your best, but next time I want to see a full mark!`;
    } else {
        result.innerHTML = `Your scored ${Score} out of ${questions.length}. it's okay you will get better next time`;
    }

    // displayQuizResult(questions, UserAnswers);
    resetState(); // Remove the quiz elements
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }

//-------------------------------------------------------------------------------------------------------
// Function to Remove the quiz elements
function resetState() {

    if (Qindex == questions.length) {

        QElement.remove();
        AnswerBtn.remove();
        Nextbtn.remove();
    }
}
//-------------------------------------------------------------------------------------------------------
// Event listener for the "Next" button
Nextbtn.addEventListener("click", () => {
    if (Qindex < questions.length) {
        handleNextBtn();// Handle the next question
    }
    else {
        StartQuiz();// Restart the quiz

    }
})


// StartQuiz();




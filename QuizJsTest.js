
const ChoiceQ = [
    {
        question: "Please select the topic you would like to be tested on:",
        Choice: [
            { text: "Java Script" },
            { text: "Html" },
            { text: "Css" }
        ]
    }
];

const QForJS = [
    // Array of questions and their corresponding answers
    {
        question: "1.What is the purpose of the console.log() function in JavaScript?",
        Answers: [
            { text: "To display output in the browser's console", correct: "True" },
            { text: " To create a new variable", correct: "False" },
            { text: " To define a function", correct: "False" },
            { text: "To import external libraries", correct: "False" }
        ]
    },
    {
        question: "2.Which of these is not a valid way to declare a variable in JavaScript?",
        Answers: [
            { text: "Var", correct: "False" },
            { text: "Let", correct: "False" },
            { text: "Const", correct: "False" },
            { text: "variable", correct: "True" }
        ]
    },
    {
        question: "3.What is the output when you add a number and a string in JavaScript?",
        Answers: [
            { text: "An error", correct: "False" },
            { text: "The number is converted to a string and concatenated", correct: "True" },
            { text: "The string is converted to a number and added", correct: "False" },
            { text: "The result is undefined", correct: "False" }
        ]
    },

    {
        question: "4. What is the purpose of the 'this' keyword in JavaScript?",
        Answers: [
            { text: "To refer to the current object instance", correct: "True" },
            { text: "To define a new variable", correct: "False" },
            { text: "To call a function", correct: "False" },
            { text: "To import an external library", correct: "False" }
        ]
    },
    {
        question: "5. Which of these is a valid way to declare a function in JavaScript?",
        Answers: [
            { text: "function myFunction() { }", correct: "True" },
            { text: "def myFunction() { }", correct: "False" },
            { text: "public void myFunction() { }", correct: "False" },
            { text: "function = myFunction() { }", correct: "False" }
        ]
    }

];

const QForCss = [
    // Array of questions and their corresponding answers

    {
        question: "1.Which of these CSS properties is used to change the background color of an element?",
        Answers: [
            { text: "color", correct: "False" },
            { text: "background-color", correct: "True" },
            { text: "font-family", correct: "False" },
            { text: "font-size", correct: "False" }
        ]
    },
    {
        question: "2.What is the purpose of the margin property in CSS?",
        Answers: [
            { text: "To set the spacing between the content and the border", correct: "False" },
            { text: "To set the spacing between the border and the edge of the element", correct: "False" },
            { text: "To set the spacing between the content and the edge of the element", correct: "False" },
            { text: "To set the spacing between adjacent elements", correct: "True" }
        ]
    },
    {
        question: "3.Which CSS selector is used to target an element with a specific class?",
        Answers: [
            { text: "#", correct: "False" },
            { text: ">", correct: "False" },
            { text: "~", correct: "Flase" },
            { text: ".", correct: "True" }
        ]
    },
    {
        question: "4. Which CSS property is used to set the width of an element?",
        Answers: [
            { text: "height", correct: "False" },
            { text: "size", correct: "False" },
            { text: "width", correct: "True" },
            { text: "dimension", correct: "False" }
        ]
    },
    {
        question: "5. What is the purpose of the 'display' property in CSS?",
        Answers: [
            { text: "To set the background color of an element", correct: "False" },
            { text: "To set the font size of an element", correct: "False" },
            { text: "To set the positioning of an element", correct: "False" },
            { text: "To set the type of layout for an element", correct: "True" }
        ]
    }
];

const QForHtml = [
    {
        question: "1.What is the purpose of the div element in HTML?",
        Answers: [
            { text: "To create a section of text", correct: "False" },
            { text: "To create a link", correct: "False" },
            { text: "To create a container for other elements", correct: "True" },
            { text: "To create an image", correct: "False" }
        ]
    },
    {
        question: "2.Which of these is not a valid HTML5 semantic tag?",
        Answers: [
            { text: "header", correct: "False" },
            { text: "footer", correct: "False" },
            { text: "article", correct: "False" },
            { text: "container", correct: "True" }
        ]
    },
    {
        question: "3.How do you create a link to another webpage in HTML?",
        Answers: [
            { text: "Using the a tag with the href attribute", correct: "True" },
            { text: "Using the link tag with the url attribute", correct: "False" },
            { text: "Using the web tag with the destination attribute", correct: "False" },
            { text: "Using the navigate tag with the link attribute", correct: "False" }
        ]
    },

    {
        question: "4. What is the purpose of the 'alt' attribute in an img tag?",
        Answers: [
            { text: "To set the image source URL", correct: "False" },
            { text: "To set the image width and height", correct: "False" },
            { text: "To provide alternative text for the image", correct: "True" },
            { text: "To add a caption to the image", correct: "False" }
        ]
    },
    {
        question: "5. Which of these is not a valid HTML5 input type?",
        Answers: [
            { text: "text", correct: "False" },
            { text: "number", correct: "False" },
            { text: "email", correct: "False" },
            { text: "color", correct: "True" }
        ]
    }

];

//-------------------------------------------------------------------------------------------------------
// Function to start the quiz
const QElement = document.getElementById("Q");// Get the element to display the current question
const AnswerBtn = document.getElementById("AnswersB"); // Get the container for the answer buttons
const NextbtnJs = document.getElementById("NextJS");// Get the "Next" button element
const NextbtnHtml = document.getElementById("NextHtml");// Get the "Next" button element
const NextbtnCss = document.getElementById("NextCss");// Get the "Next" button element
const result = document.getElementById("Result");// Get the element to display the final result

let Qindex = 0;
let Score = 0;

//-------------------------------------------------------------------------------------------------------
// Function to select the topic the user would like to be tested on:
function StartQuiz() {

    Qindex = 0; // Index of the current question
    HideNext();
    ShowQuiz();
};
//-------------------------------------------------------------------------------------------------------
// Function to display the current question and its answers
function ShowQuiz() {

    let CurrnetQ = ChoiceQ[Qindex];// Get the current question
    QElement.innerHTML = CurrnetQ.question; // Display the question
    AnswerBtn.innerHTML = ""; // Clear the answer buttons

    CurrnetQ.Choice.forEach(choice => {

        const button = document.createElement("button");
        button.innerHTML = choice.text;
        button.classList.add("btn");
        AnswerBtn.appendChild(button);

        button.addEventListener("click", () => {

            if (choice.text.toLowerCase() === "java script") {
                StartQuizForJs();
            } else if (choice.text.toLowerCase() === "html") {
                StartQuizForHtml();
            } else if (choice.text.toLowerCase() === "css") {
                StartQuizForCss();
            }
        });
    });
}
//-------------------------------------------------------------------------------------------------------
// Function to start the Java Script quiz
function StartQuizForJs() {

    Qindex = 0; // Index of the current question
    Score = 0; // User's current score
    HideNext();
    NextbtnJs.innerHTML = "Next";

    ShowQuizJS();
};
//-------------------------------------------------------------------------------------------------------
// Function to display the current question and its answers
function ShowQuizJS() {

    let CurrnetQ = QForJS[Qindex];// Get the current question
    QElement.innerHTML = CurrnetQ.question; // Display the question
    AnswerBtn.innerHTML = ""; // Clear the answer buttons

    CurrnetQ.Answers.forEach(answer => {
        const button = document.createElement("button");  // Create a new button element
        button.innerHTML = answer.text; // Set the button text
        button.classList.add("btn"); // Add a CSS class to the button
        AnswerBtn.appendChild(button); // Append the button to the answer container

        if (answer.correct) {
            button.dataset.correct = answer.correct; // Store the correct answer status in the button's dataset
        }
        button.addEventListener("click", selecAnswerJS); // Add a click event listener to the button
    });
}
//-------------------------------------------------------------------------------------------------------
// Function to start the Html quiz
function StartQuizForHtml() {

    Qindex = 0; // Index of the current question
    Score = 0; // User's current score
    NextbtnHtml.innerHTML = "Next";
    HideNext();
    ShowQuizHtml();
};
//-------------------------------------------------------------------------------------------------------
// Function to display the current question and its answers
function ShowQuizHtml() {

    let CurrnetQ = QForHtml[Qindex];// Get the current question
    QElement.innerHTML = CurrnetQ.question; // Display the question
    AnswerBtn.innerHTML = ""; // Clear the answer buttons

    CurrnetQ.Answers.forEach(answer => {
        const button = document.createElement("button");  // Create a new button element
        button.innerHTML = answer.text; // Set the button text
        button.classList.add("btn"); // Add a CSS class to the button
        AnswerBtn.appendChild(button); // Append the button to the answer container

        if (answer.correct) {
            button.dataset.correct = answer.correct; // Store the correct answer status in the button's dataset
        }
        button.addEventListener("click", selecAnswerHtml); // Add a click event listener to the button
    });
}
//-------------------------------------------------------------------------------------------------------
// Function to start the Css quiz
function StartQuizForCss() {

    Qindex = 0; // Index of the current question
    Score = 0; // User's current score
    NextbtnCss.innerHTML = "Next";  
    HideNext();
    ShowQuizCss();
};
//-------------------------------------------------------------------------------------------------------
// Function to display the current question and its answers
function ShowQuizCss() {

    let CurrnetQ = QForCss[Qindex];// Get the current question
    QElement.innerHTML = CurrnetQ.question; // Display the question
    AnswerBtn.innerHTML = ""; // Clear the answer buttons

    CurrnetQ.Answers.forEach(answer => {
        const button = document.createElement("button");  // Create a new button element
        button.innerHTML = answer.text; // Set the button text
        button.classList.add("btn"); // Add a CSS class to the button
        AnswerBtn.appendChild(button); // Append the button to the answer container

        if (answer.correct) {
            button.dataset.correct = answer.correct; // Store the correct answer status in the button's dataset
        }
        button.addEventListener("click", selecAnswerCss); // Add a click event listener to the button
    });
}
//-------------------------------------------------------------------------------------------------------
// Function to handle the user's answer selection For Java Script
function selecAnswerJS(e) {

    const selectbtn = e.target;// Get the selected answer button
    const isCorrect = selectbtn.dataset.correct === "True";// Check if the answer is correct
    if (isCorrect) {
        selectbtn.classList.add("Correct");// Add a CSS class for the correct answer
        Score++; // Increment the score
    }
    else {
        selectbtn.classList.add("Incorrect");// Add a CSS class for the incorrect answer
    }
    Array.from(AnswerBtn.children).forEach(button => {

        if (button.dataset.correct === "True") {
            button.classList.add("Correct")
        }
        button.disabled = true;// to disabled the button after we select one of them
    });
    // Nextbtn.disabled = false; // Enable the "Next" button

    NextbtnJs.style.display = "inline"; // Show the "Next" button
}
//-------------------------------------------------------------------------------------------------------
// Function to handle the user's answer selection For Html
function selecAnswerHtml(e) {

    const selectbtn = e.target;// Get the selected answer button
    const isCorrect = selectbtn.dataset.correct === "True";// Check if the answer is correct
    if (isCorrect) {
        selectbtn.classList.add("Correct");// Add a CSS class for the correct answer
        Score++; // Increment the score
    }
    else {
        selectbtn.classList.add("Incorrect");// Add a CSS class for the incorrect answer
    }
    Array.from(AnswerBtn.children).forEach(button => {

        if (button.dataset.correct === "True") {
            button.classList.add("Correct")
        }
        button.disabled = true;// to disabled the button after we select one of them
    });
    // Nextbtn.disabled = false; // Enable the "Next" button

    NextbtnHtml.style.display = "inline"; // Show the "Next" button
}
//-------------------------------------------------------------------------------------------------------
// Function to handle the user's answer selection For Css
function selecAnswerCss(e) {

    const selectbtn = e.target;// Get the selected answer button
    const isCorrect = selectbtn.dataset.correct === "True";// Check if the answer is correct
    if (isCorrect) {
        selectbtn.classList.add("Correct");// Add a CSS class for the correct answer
        Score++; // Increment the score
    }
    else {
        selectbtn.classList.add("Incorrect");// Add a CSS class for the incorrect answer
    }
    Array.from(AnswerBtn.children).forEach(button => {

        if (button.dataset.correct === "True") {
            button.classList.add("Correct")
        }
        button.disabled = true;// to disabled the button after we select one of them
    });
    // Nextbtn.disabled = false; // Enable the "Next" button

    NextbtnCss.style.display = "inline"; // Show the "Next" button
}
//-------------------------------------------------------------------------------------------------------
// Function to handle the "Next" button click For JavaScrit
function handleNextBtn() {

    Qindex++;// Increment the question index

    if (Qindex < QForJS.length) {
     
        NextbtnJs.style.display = "none";// Hide the "Next" button initially
        ShowQuizJS();// Display the next question
    } else {
        ShowScore(); // Display the final score
    }
}
//-------------------------------------------------------------------------------------------------------
// Function to handle the "Next" button click For Html
function handleNextBtnHtml() {

    Qindex++;// Increment the question index

    if (Qindex < QForHtml.length) {
 
        NextbtnHtml.style.display = "none";// Hide the "Next" button initially
        ShowQuizHtml();// Display the next question
    } else {
        ShowScore(); // Display the final score
    }
}
//-------------------------------------------------------------------------------------------------------
// Function to handle the "Next" button click For Css
function handleNextBtnCss() {

    Qindex++;// Increment the question index

    if (Qindex < QForCss.length) {

        NextbtnCss.style.display = "none";// Hide the "Next" button initially
        ShowQuizCss();// Display the next question
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
    if (Score === 5) {
        result.innerHTML = `Your scored ${Score} out of 5 <p>You did a great job!</p>`;
        jsConfetti.addConfetti({
            confettiColors: [
                '#EE4E4E', '#F6EEC9', '#A1DD70', '#799351', '#F6EEC9', '#A1DD70',
            ],
        });
    } else if (Score === 3 || Score === 4) {
        result.innerHTML = `Your scored ${Score} out of 5 <p>You try your best, but next time I want to see a full mark!</p>`;
    } else {
        result.innerHTML = `Your scored ${Score} out of 5 <p>it's okay you will get better next time</p>`;
    }
    resetState(); // Remove the quiz elements

}
//-------------------------------------------------------------------------------------------------------
// Function to Remove the quiz elements
function resetState() {

    if (Qindex == 5) {
        QElement.remove();
        AnswerBtn.remove();
        HideNext();
    }
}
//-------------------------------------------------------------------------------------------------------
// Hide the "Next" buttons
function HideNext(){

    NextbtnHtml.style.display = "none";// Hide the "Next" button initially
    NextbtnJs.style.display = "none";// Hide the "Next" button initially
    NextbtnCss.style.display = "none";// Hide the "Next" button initially
}
//-------------------------------------------------------------------------------------------------------
// Event listener for the "Next" button for each quiz
NextbtnJs.addEventListener("click", () => {

    if (Qindex < QForJS.length) {
        handleNextBtn();// Handle the next question
    }
    else {
        StartQuizForJs();// Restart the quiz
    }
});
NextbtnHtml.addEventListener("click", () => {

    if (Qindex < QForHtml.length) {
        handleNextBtnHtml();// Handle the next question
    }
    else {
        StartQuizForHtml();// Restart the quiz
    }
});

NextbtnCss.addEventListener("click", () => {

    if (Qindex < QForCss.length) {
        handleNextBtnCss();// Handle the next question
    }
    else {
        StartQuizForCss();// Restart the quiz
    }
});

StartQuiz();



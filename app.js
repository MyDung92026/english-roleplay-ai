const startButton = document.getElementById("startButton");

startButton.addEventListener("click", startLesson);


// ======================================================
// LESSON DATA
// ======================================================

const questions = [

  {
    number: 1,

    question:
      "Where would you like to go?",

    answers: [
      "I'd like to go to Da Nang.",
      "I like chicken.",
      "I am sixteen years old."
    ],

    acceptedAnswers: [
      "i'd like to go to da nang",
      "i would like to go to da nang",
      "i want to go to da nang",
      "da nang"
    ],

    correct: 0,

    hint1:
      "Destination: Da Nang",

    hint2:
      "I'd like to go to ______.",

    response:
      "Great! Da Nang is a beautiful city."
  },


  {
    number: 2,

    question:
      "What would you like to do in Da Nang?",

    answers: [
      "I'd like to visit Ba Na Hills.",
      "I'd like a double room.",
      "Three days."
    ],

    acceptedAnswers: [
      "i'd like to visit ba na hills",
      "i would like to visit ba na hills",
      "i want to visit ba na hills",
      "visit ba na hills",
      "ba na hills"
    ],

    correct: 0,

    hint1:
      "Activity: Visit Ba Na Hills",

    hint2:
      "I'd like to visit ______.",

    response:
      "Excellent! Ba Na Hills is a great choice."
  },


  {
    number: 3,

    question:
      "What kind of room would you like?",

    answers: [
      "I'd like a double room.",
      "I'd like to visit Ba Na Hills.",
      "I go to school every day."
    ],

    acceptedAnswers: [
      "i'd like a double room",
      "i would like a double room",
      "i want a double room",
      "a double room",
      "double room"
    ],

    correct: 0,

    hint1:
      "Room: Double room",

    hint2:
      "I'd like a ______ room.",

    response:
      "Great! A double room is available."
  },


  {
    number: 4,

    question:
      "Would you like to know the price?",

    answers: [
      "How much is it?",
      "Where is my school?",
      "I like swimming."
    ],

    acceptedAnswers: [
      "how much is it",
      "how much",
      "what is the price",
      "what's the price"
    ],

    correct: 0,

    hint1:
      "Ask about the price.",

    hint2:
      "How ______ is it?",

    response:
      "It is forty-five dollars per night."
  },


  {
    number: 5,

    question:
      "How long would you like to stay?",

    answers: [
      "I'd like to stay for three days.",
      "I'd like a double room.",
      "My name is Nam."
    ],

    acceptedAnswers: [
      "i'd like to stay for three days",
      "i would like to stay for three days",
      "i want to stay for three days",
      "three days",
      "3 days"
    ],

    correct: 0,

    hint1:
      "Stay: 3 days",

    hint2:
      "I'd like to stay for ______ days.",

    response:
      "Wonderful! Three days in Da Nang."
  },


  {
    number: 6,

    question:
      "Let me confirm your booking. Is everything correct?",

    answers: [
      "Yes, that's correct. Thank you.",
      "I am a student.",
      "I don't have a bicycle."
    ],

    acceptedAnswers: [
      "yes that's correct thank you",
      "yes that is correct thank you",
      "yes that's correct",
      "yes that is correct",
      "yes correct",
      "yes"
    ],

    correct: 0,

    hint1:
      "Confirm the booking.",

    hint2:
      "Yes, that's ______. Thank you.",

    response:
      "You're welcome. Have a wonderful trip to Da Nang!"
  }

];


// ======================================================
// VARIABLES
// ======================================================

let currentQuestion = 0;

let score = 0;

let hintLevel = 0;

let answeredQuestions = new Set();


// ======================================================
// START LESSON
// ======================================================

function startLesson() {

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        Lesson 1 • A1
      </div>

      <h2>
        ✈️ Booking a Tour to Da Nang
      </h2>


      <div class="mission">

        <h3>🎭 Role Play</h3>

        <p>
          👩‍💼 <strong>AI:</strong>
          Travel Agent
        </p>

        <p>
          🧳 <strong>You:</strong>
          Tourist
        </p>

      </div>


      <h3>🎯 Your Mission</h3>

      <p>
        Book a trip to Da Nang by talking
        with the travel agent.
      </p>

      <p>
        You can choose an answer
        or type your own answer.
      </p>


      <button id="beginConversation">

        ▶ Start Conversation

      </button>

    </section>

  `;


  document
    .getElementById("beginConversation")
    .addEventListener(
      "click",
      beginConversation
    );

}


// ======================================================
// BEGIN
// ======================================================

function beginConversation() {

  currentQuestion = 0;

  score = 0;

  hintLevel = 0;

  answeredQuestions.clear();

  showQuestion();

}


// ======================================================
// SHOW QUESTION
// ======================================================

function showQuestion() {

  hintLevel = 0;


  const item =
    questions[currentQuestion];


  const progress =
    ((currentQuestion + 1) /
      questions.length) * 100;


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">


      <div class="level">

        Conversation
        ${item.number}
        / ${questions.length}

      </div>


      <div class="progress-track">

        <div
          class="progress-bar"
          style="width:${progress}%">

        </div>

      </div>


      <h2>
        👩‍💼 Travel Agent
      </h2>


      <div class="mission">

        <p class="ai-question">

          <strong>
            ${item.question}
          </strong>

        </p>

      </div>


      <button
        class="listen-button"
        onclick="listenQuestion()">

        🔊 Listen

      </button>


      <h3>
        👆 Choose an answer
      </h3>


      <div id="answerArea">
      </div>


      <div class="or-divider">

        <span>OR</span>

      </div>


      <div class="type-area">

        <h3>
          ⌨️ Type your answer
        </h3>


        <input
          id="studentAnswer"
          type="text"
          autocomplete="off"
          placeholder="Type your English answer here..."
        >


        <button
          class="check-button"
          onclick="checkTypedAnswer()">

          ✓ Check My Answer

        </button>

      </div>


      <button
        class="hint-button"
        onclick="showHint()">

        💡 Hint

      </button>


      <div
        id="feedback"
        class="feedback-area">

      </div>


    </section>

  `;


  const answerArea =
    document.getElementById(
      "answerArea"
    );


  item.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement(
          "button"
        );


      button.textContent =
        answer;


      button.className =
        "answer-button";


      button.onclick =
        function () {

          checkChoiceAnswer(index);

        };


      answerArea.appendChild(
        button
      );

    }
  );


  const input =
    document.getElementById(
      "studentAnswer"
    );


  input.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {

        checkTypedAnswer();

      }

    }
  );


  speakText(
    item.question
  );

}


// ======================================================
// LISTEN
// ======================================================

function listenQuestion() {

  const item =
    questions[currentQuestion];


  speakText(
    item.question
  );

}


// ======================================================
// CHOICE ANSWER
// ======================================================

function checkChoiceAnswer(
  selectedIndex
) {

  const item =
    questions[currentQuestion];


  if (
    selectedIndex ===
    item.correct
  ) {

    correctAnswer();

  }

  else {

    wrongAnswer();

  }

}


// ======================================================
// TYPED ANSWER
// ======================================================

function checkTypedAnswer() {

  const input =
    document.getElementById(
      "studentAnswer"
    );


  const studentText =
    input.value.trim();


  if (!studentText) {

    document
      .getElementById(
        "feedback"
      )
      .innerHTML = `

        <div class="mission">

          <h3>
            ✍️ Type your answer first
          </h3>

          <p>
            Write an English answer
            in the box above.
          </p>

        </div>

      `;

    input.focus();

    return;

  }


  const item =
    questions[currentQuestion];


  const normalizedStudent =
    normalizeText(
      studentText
    );


  const isAccepted =
    item.acceptedAnswers.some(
      answer =>
        normalizeText(answer) ===
        normalizedStudent
    );


  if (isAccepted) {

    correctAnswer(
      studentText
    );

  }

  else {

    typedAnswerNeedsHelp(
      studentText
    );

  }

}


// ======================================================
// NORMALIZE TEXT
// ======================================================

function normalizeText(text) {

  return text
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/\s+/g, " ")
    .trim();

}


// ======================================================
// CORRECT ANSWER
// ======================================================

function correctAnswer(
  studentText = null
) {

  const item =
    questions[currentQuestion];


  if (
    !answeredQuestions.has(
      currentQuestion
    )
  ) {

    score++;

    answeredQuestions.add(
      currentQuestion
    );

  }


  let studentMessage = "";


  if (studentText) {

    studentMessage = `

      <p class="student-response">

        🧳 <strong>You:</strong>
        ${escapeHTML(studentText)}

      </p>

    `;

  }


  document
    .getElementById(
      "feedback"
    )
    .innerHTML = `

      <div class="mission">

        <h3>
          ✅ Excellent!
        </h3>


        ${studentMessage}


        <p>
          A natural sentence:
        </p>


        <p>
          <strong>
            ${item.answers[item.correct]}
          </strong>
        </p>


        <p>
          👩‍💼
          <strong>Travel Agent:</strong>
          ${item.response}
        </p>


        <button
          class="continue-button"
          onclick="nextQuestion()">

          ${
            currentQuestion <
            questions.length - 1

            ? "Continue ➜"

            : "See My Result 🎉"
          }

        </button>

      </div>

    `;


  speakText(
    item.response
  );

}


// ======================================================
// WRONG CHOICE
// ======================================================

function wrongAnswer() {

  document
    .getElementById(
      "feedback"
    )
    .innerHTML = `

      <div class="mission">

        <h3>
          🙂 Try again
        </h3>


        <p>
          That's not the best answer
          for this situation.
        </p>


        <p>
          Try another answer
          or use the Hint.
        </p>

      </div>

    `;

}


// ======================================================
// TYPED ANSWER NEEDS HELP
// ======================================================

function typedAnswerNeedsHelp(
  studentText
) {

  const item =
    questions[currentQuestion];


  document
    .getElementById(
      "feedback"
    )
    .innerHTML = `

      <div class="mission">

        <h3>
          🙂 Good try!
        </h3>


        <p class="student-response">

          🧳 <strong>You wrote:</strong>

          ${escapeHTML(studentText)}

        </p>


        <p>
          Try again.
          You can use this pattern:
        </p>


        <p>
          <strong>
            ${item.hint2}
          </strong>
        </p>


        <p>
          Or press
          <strong>Hint</strong>
          for more help.
        </p>

      </div>

    `;

}


// ======================================================
// HINT
// ======================================================

function showHint() {

  const item =
    questions[currentQuestion];


  hintLevel++;


  let hintText = "";


  if (hintLevel === 1) {

    hintText = `

      <strong>
        Hint 1
      </strong>

      <br><br>

      ${item.hint1}

    `;

  }


  else if (hintLevel === 2) {

    hintText = `

      <strong>
        Hint 2
      </strong>

      <br><br>

      ${item.hint2}

    `;

  }


  else {

    hintText = `

      <strong>
        Hint 3
      </strong>

      <br><br>

      ${item.answers[item.correct]}

    `;

  }


  document
    .getElementById(
      "feedback"
    )
    .innerHTML = `

      <div class="mission">

        <h3>
          💡 Need some help?
        </h3>

        <p>
          ${hintText}
        </p>

      </div>

    `;

}


// ======================================================
// NEXT QUESTION
// ======================================================

function nextQuestion() {

  if (
    currentQuestion <
    questions.length - 1
  ) {

    currentQuestion++;

    showQuestion();

  }

  else {

    showResult();

  }

}


// ======================================================
// RESULTS
// ======================================================

function showResult() {

  const finalScore =
    Math.min(
      score,
      questions.length
    );


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">


      <div class="level">
        Lesson Completed
      </div>


      <div class="progress-track">

        <div
          class="progress-bar"
          style="width:100%">
        </div>

      </div>


      <h2>
        🎉 Excellent Work!
      </h2>


      <div class="mission">

        <h3>
          🏆 Your Result
        </h3>


        <p class="result-score">

          <strong>
            ${finalScore}
            /
            ${questions.length}
            Tasks Completed
          </strong>

        </p>

      </div>


      <h3>
        ⭐ Useful Sentences
      </h3>


      <p>
        ✈️ I'd like to go to Da Nang.
      </p>

      <p>
        🏔️ I'd like to visit Ba Na Hills.
      </p>

      <p>
        🛏️ I'd like a double room.
      </p>

      <p>
        💵 How much is it?
      </p>

      <p>
        📅 I'd like to stay for three days.
      </p>

      <p>
        ✅ Yes, that's correct. Thank you.
      </p>


      <div class="result-buttons">

        <button
          onclick="practiceAgain()">

          🔄 Practice Again

        </button>


        <button
          onclick="comingSoon()">

          ➡️ Next Lesson

        </button>

      </div>


    </section>

  `;


  speakText(
    "Excellent work! You completed the lesson."
  );

}


// ======================================================
// PRACTICE AGAIN
// ======================================================

function practiceAgain() {

  currentQuestion = 0;

  score = 0;

  hintLevel = 0;

  answeredQuestions.clear();

  showQuestion();

}


// ======================================================
// NEXT LESSON
// ======================================================

function comingSoon() {

  alert(
    "Lesson 2 is coming soon!"
  );

}


// ======================================================
// TEXT TO SPEECH
// ======================================================

function speakText(text) {

  if (
    "speechSynthesis" in window
  ) {

    window
      .speechSynthesis
      .cancel();


    const speech =
      new SpeechSynthesisUtterance(
        text
      );


    speech.lang =
      "en-US";


    speech.rate =
      0.85;


    window
      .speechSynthesis
      .speak(
        speech
      );

  }

}


// ======================================================
// BASIC SECURITY
// ======================================================

function escapeHTML(text) {

  const div =
    document.createElement(
      "div"
    );


  div.textContent =
    text;


  return div.innerHTML;

}

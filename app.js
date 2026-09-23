const startButton = document.getElementById("startButton");

startButton.addEventListener("click", startLesson);


// ======================================================
// LESSON 1 - BOOKING A TOUR TO DA NANG
// ======================================================

const questions = [

  // QUESTION 1
  {
    number: 1,

    question:
      "Where would you like to go?",

    answers: [
      "I'd like to go to Da Nang.",
      "I like chicken.",
      "I am sixteen years old."
    ],

    correct: 0,

    hint1:
      "Destination: Da Nang",

    hint2:
      "I'd like to go to ______.",

    response:
      "Great! Da Nang is a beautiful city."
  },


  // QUESTION 2
  {
    number: 2,

    question:
      "What would you like to do in Da Nang?",

    answers: [
      "I'd like to visit Ba Na Hills.",
      "I'd like a double room.",
      "Three days."
    ],

    correct: 0,

    hint1:
      "Activity: Visit Ba Na Hills",

    hint2:
      "I'd like to visit ______.",

    response:
      "Excellent! Ba Na Hills is a great choice."
  },


  // QUESTION 3
  {
    number: 3,

    question:
      "What kind of room would you like?",

    answers: [
      "I'd like a double room.",
      "I'd like to visit Ba Na Hills.",
      "I go to school every day."
    ],

    correct: 0,

    hint1:
      "Room: Double room",

    hint2:
      "I'd like a ______ room.",

    response:
      "Great! A double room is available."
  },


  // QUESTION 4
  {
    number: 4,

    question:
      "Would you like to know the price?",

    answers: [
      "How much is it?",
      "Where is my school?",
      "I like swimming."
    ],

    correct: 0,

    hint1:
      "Ask about the price.",

    hint2:
      "How ______ is it?",

    response:
      "It is forty-five dollars per night."
  },


  // QUESTION 5
  {
    number: 5,

    question:
      "How long would you like to stay?",

    answers: [
      "I'd like to stay for three days.",
      "I'd like a double room.",
      "My name is Nam."
    ],

    correct: 0,

    hint1:
      "Stay: 3 days",

    hint2:
      "I'd like to stay for ______ days.",

    response:
      "Wonderful! Three days in Da Nang."
  },


  // QUESTION 6
  {
    number: 6,

    question:
      "Let me confirm your booking. Is everything correct?",

    answers: [
      "Yes, that's correct. Thank you.",
      "I am a student.",
      "I don't have a bicycle."
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


// Lưu những câu đã được tính điểm.
// Mỗi câu chỉ được cộng điểm 1 lần.

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

        <h3>
          🎭 Role Play
        </h3>

        <p>
          👩‍💼
          <strong>AI:</strong>
          Travel Agent
        </p>

        <p>
          🧳
          <strong>You:</strong>
          Tourist
        </p>

      </div>


      <h3>
        🎯 Your Mission
      </h3>

      <p>
        Book a trip to Da Nang by talking
        with the travel agent.
      </p>

      <p>
        Complete all 6 conversation tasks.
      </p>


      <button id="beginConversation">
        🎤 Begin Conversation
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
// BEGIN CONVERSATION
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


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">


      <div class="level">

        Conversation
        ${item.number}
        / ${questions.length}

      </div>


      <h2>
        👩‍💼 Travel Agent
      </h2>


      <div class="mission">

        <p style="font-size:22px;">

          <strong>
            ${item.question}
          </strong>

        </p>

      </div>


      <button
        onclick="listenQuestion()">

        🔊 Listen

      </button>


      <h3>
        Choose your answer:
      </h3>


      <div id="answerArea">
      </div>


      <br>


      <button
        onclick="showHint()">

        💡 Hint

      </button>


      <div
        id="feedback"
        style="margin-top:20px;">

      </div>


    </section>

  `;


  // CREATE ANSWER BUTTONS

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


      button.style.display =
        "block";


      button.style.width =
        "100%";


      button.style.margin =
        "10px 0";


      button.style.padding =
        "14px";


      button.style.fontSize =
        "17px";


      button.style.cursor =
        "pointer";


      button.onclick =
        function () {

          checkAnswer(index);

        };


      answerArea.appendChild(
        button
      );

    }
  );


  // AI READS QUESTION

  speakText(
    item.question
  );

}


// ======================================================
// LISTEN BUTTON
// ======================================================

function listenQuestion() {

  const item =
    questions[currentQuestion];


  speakText(
    item.question
  );

}


// ======================================================
// CHECK ANSWER
// ======================================================

function checkAnswer(
  selectedIndex
) {

  const item =
    questions[currentQuestion];


  // CORRECT ANSWER

  if (
    selectedIndex ===
    item.correct
  ) {


    // Only give 1 point
    // for each question.

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


    document
      .getElementById(
        "feedback"
      )
      .innerHTML = `

        <div class="mission">

          <h3>
            ✅ Excellent!
          </h3>


          <p>
            <strong>
              ${item.answers[item.correct]}
            </strong>
          </p>


          <p>
            👩‍💼
            ${item.response}
          </p>


          <button
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


  // WRONG ANSWER

  else {

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

}


// ======================================================
// HINT
// ======================================================

function showHint() {

  const item =
    questions[currentQuestion];


  hintLevel++;


  let hintText = "";


  // HINT LEVEL 1

  if (
    hintLevel === 1
  ) {

    hintText = `

      <strong>
        Hint 1:
      </strong>

      ${item.hint1}

    `;

  }


  // HINT LEVEL 2

  else if (
    hintLevel === 2
  ) {

    hintText = `

      <strong>
        Hint 2:
      </strong>

      <br><br>

      ${item.hint2}

    `;

  }


  // HINT LEVEL 3

  else {

    hintText = `

      <strong>
        Hint 3:
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
// RESULT
// ======================================================

function showResult() {

  // Safety:
  // score can never display
  // more than total questions.

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


      <h2>

        🎉 Excellent Work!

      </h2>


      <div class="mission">

        <h3>
          🏆 Your Result
        </h3>


        <p style="font-size:24px;">

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


      <br>


      <button
        onclick="practiceAgain()">

        🔄 Practice Again

      </button>


      <br><br>


      <button
        onclick="comingSoon()">

        ➡️ Next Lesson

      </button>


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

  else {

    alert(
      "Your browser does not support speech."
    );

  }

}

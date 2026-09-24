// ======================================================
// ENGLISH ROLEPLAY AI
// BOOK A TOUR - A1
// ======================================================


// ======================================================
// START
// ======================================================

const startButton =
  document.getElementById("startButton");

startButton.addEventListener(
  "click",
  openBookTour
);


// ======================================================
// TOUR DATA
// ======================================================

const tours = [

  {
    id: 1,
    country: "Vietnam",
    destination: "Da Nang",
    activity: "visit Ba Na Hills",
    activityKeyword: "ba na hills",
    accommodation: "hotel",
    room: "double room",
    price: "$45",
    stay: "3 days"
  },

  {
    id: 2,
    country: "Thailand",
    destination: "Bangkok",
    activity: "go sightseeing",
    activityKeyword: "sightseeing",
    accommodation: "hotel",
    room: "double room",
    price: "$40",
    stay: "3 days"
  },

  {
    id: 3,
    country: "Italy",
    destination: "Rome",
    activity: "try local food",
    activityKeyword: "local food",
    accommodation: "guesthouse",
    room: "single room",
    price: "$35",
    stay: "3 nights"
  },

  {
    id: 4,
    country: "Japan",
    destination: "Kyoto",
    activity: "go sightseeing",
    activityKeyword: "sightseeing",
    accommodation: "homestay",
    room: "double room",
    price: "$65",
    stay: "4 days"
  },

  {
    id: 5,
    country: "France",
    destination: "Paris",
    activity: "visit museums",
    activityKeyword: "museums",
    accommodation: "hostel",
    room: "single room",
    price: "$90",
    stay: "3 nights"
  },

  {
    id: 6,
    country: "Singapore",
    destination: "Marina Bay",
    activity: "go sightseeing",
    activityKeyword: "sightseeing",
    accommodation: "hotel",
    room: "double room",
    price: "$90",
    stay: "3 days"
  },

  {
    id: 7,
    country: "Australia",
    destination: "Gold Coast",
    activity: "go swimming",
    activityKeyword: "swimming",
    accommodation: "resort",
    room: "double room",
    price: "$85",
    stay: "4 days"
  }

];


// ======================================================
// APP STATE
// ======================================================

let currentTour = null;

let currentActivity = null;

let currentStudentRole = null;

let conversationStep = 0;

let conversationScore = 0;

let ideaVisible = false;


// ======================================================
// BOOK A TOUR HOME
// ======================================================

function openBookTour() {

  resetConversation();


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        A1 • Travel English
      </div>

      <h2>
        ✈️ BOOK A TOUR
      </h2>

      <p>
        Practice English through
        a real-life travel conversation.
      </p>


      <div class="mission">

        <h3>
          🎯 Your Mission
        </h3>

        <p>
          Choose a tour, choose your role,
          and practice English with AI.
        </p>

      </div>


      <h3>
        Choose a learning activity
      </h3>


      <div class="activity-card">

        <div class="activity-icon">
          👆
        </div>

        <div class="activity-info">

          <h3>
            CHOOSE
          </h3>

          <p>
            Choose the best answer
            in the conversation.
          </p>

          <button
            onclick="chooseActivity('choose')">

            Start Choose

          </button>

        </div>

      </div>


      <div class="activity-card">

        <div class="activity-icon">
          ✍️
        </div>

        <div class="activity-info">

          <h3>
            WRITE
          </h3>

          <p>
            Write your own answers
            and talk with AI.
          </p>

          <button
            onclick="chooseActivity('write')">

            Start Write

          </button>

        </div>

      </div>


      <div class="activity-card">

        <div class="activity-icon">
          🎤
        </div>

        <div class="activity-info">

          <h3>
            SPEAK
          </h3>

          <p>
            Speak your answers
            and practice conversation.
          </p>

          <button
            onclick="showSpeakComingSoon()">

            Start Speak

          </button>

        </div>

      </div>

    </section>

  `;

}


// ======================================================
// CHOOSE ACTIVITY
// ======================================================

function chooseActivity(activity) {

  currentActivity = activity;


  if (activity === "choose") {

    showChooseComingSoon();

    return;

  }


  if (activity === "write") {

    showTourList(activity);

  }

}


// ======================================================
// TOUR LIST
// ======================================================

function showTourList(activity) {

  currentActivity = activity;


  let tourCards = "";


  tours.forEach(tour => {

    tourCards += `

      <div class="tour-card">


        <div class="tour-number">

          ${tour.id}

        </div>


        <div class="tour-info">


          <h3>

            ${tour.country}
            — ${tour.destination}

          </h3>


          <p>
            🎯 ${capitalizeFirst(tour.activity)}
          </p>


          <p>

            🏨 ${capitalizeFirst(tour.accommodation)}
            • ${capitalizeFirst(tour.room)}

          </p>


          <p>

            💵 ${tour.price}/night
            • 📅 ${tour.stay}

          </p>


          <button
            onclick="selectTour(
              ${tour.id},
              '${activity}'
            )">

            Select this tour

          </button>


        </div>


      </div>

    `;

  });


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">


      <div class="level">
        ✍️ WRITE
      </div>


      <h2>
        🌏 Choose a Tour
      </h2>


      <p>
        Choose one destination
        to practice.
      </p>


      <div class="tour-list">

        ${tourCards}

      </div>


      <div class="back-area">

        <button
          class="back-button"
          onclick="openBookTour()">

          ← Back to BOOK A TOUR

        </button>

      </div>


    </section>

  `;

}


// ======================================================
// SELECT TOUR
// ======================================================

function selectTour(
  tourId,
  activity
) {

  const tour =
    tours.find(
      item =>
        item.id === tourId
    );


  if (!tour) {
    return;
  }


  currentTour = tour;

  currentActivity = activity;


  showSelectedTour(
    tour,
    activity
  );

}


// ======================================================
// TOUR INFORMATION
// ======================================================

function showSelectedTour(
  tour,
  activity
) {

  currentTour = tour;

  currentActivity = activity;


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">


      <div class="level">
        ✍️ WRITE
      </div>


      <h2>
        ✈️ ${tour.destination}
      </h2>


      <div class="mission">

        <h3>
          🌍 Tour Information
        </h3>


        <p>
          <strong>Country:</strong>
          ${tour.country}
        </p>


        <p>
          <strong>Destination:</strong>
          ${tour.destination}
        </p>


        <p>
          <strong>Activity:</strong>
          ${capitalizeFirst(tour.activity)}
        </p>


        <p>
          <strong>Accommodation:</strong>
          ${capitalizeFirst(tour.accommodation)}
        </p>


        <p>
          <strong>Room:</strong>
          ${capitalizeFirst(tour.room)}
        </p>


        <p>
          <strong>Price:</strong>
          ${tour.price}/night
        </p>


        <p>
          <strong>Stay:</strong>
          ${tour.stay}
        </p>

      </div>


      <h3>
        🎭 Next Step
      </h3>


      <p>
        Choose the role
        you want to practice.
      </p>


      <div class="role-preview">


        <div>

          <span>🧳</span>

          <strong>
            Tourist
          </strong>

        </div>


        <div>

          <span>👩‍💼</span>

          <strong>
            Travel Agent
          </strong>

        </div>


      </div>


      <button
        class="continue-button"
        onclick="showRoleSelection(
          ${tour.id},
          '${activity}'
        )">

        Continue ➜

      </button>


      <div class="back-area">

        <button
          class="back-button"
          onclick="showTourList(
            '${activity}'
          )">

          ← Choose another tour

        </button>

      </div>


    </section>

  `;

}


// ======================================================
// ROLE SELECTION
// ======================================================

function showRoleSelection(
  tourId,
  activity
) {

  const tour =
    tours.find(
      item =>
        item.id === tourId
    );


  if (!tour) {
    return;
  }


  currentTour = tour;

  currentActivity = activity;


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">


      <div class="level">
        🎭 CHOOSE YOUR ROLE
      </div>


      <h2>
        ✈️ ${tour.destination}
      </h2>


      <p>
        Who do you want to be?
      </p>


      <div class="role-choice-container">


        <div class="role-choice-card">

          <div class="role-big-icon">
            🧳
          </div>

          <h3>
            Tourist
          </h3>

          <p>
            You want to book a tour.
          </p>

          <p>
            🤖 AI will be the
            <strong>Travel Agent</strong>.
          </p>

          <button
            onclick="selectRole(
              ${tour.id},
              '${activity}',
              'tourist'
            )">

            I am the Tourist

          </button>

        </div>


        <div class="role-choice-card">

          <div class="role-big-icon">
            👩‍💼
          </div>

          <h3>
            Travel Agent
          </h3>

          <p>
            You help a tourist
            book a tour.
          </p>

          <p>
            🤖 AI will be the
            <strong>Tourist</strong>.
          </p>

          <button
            onclick="selectRole(
              ${tour.id},
              '${activity}',
              'agent'
            )">

            I am the Travel Agent

          </button>

        </div>


      </div>


      <div class="back-area">

        <button
          class="back-button"
          onclick="showSelectedTour(
            currentTour,
            currentActivity
          )">

          ← Back to Tour

        </button>

      </div>


    </section>

  `;

}


// ======================================================
// SELECT ROLE
// ======================================================

function selectRole(
  tourId,
  activity,
  studentRole
) {

  const tour =
    tours.find(
      item =>
        item.id === tourId
    );


  if (!tour) {
    return;
  }


  currentTour = tour;

  currentActivity = activity;

  currentStudentRole =
    studentRole;


  conversationStep = 0;

  conversationScore = 0;


  const studentRoleName =
    studentRole === "tourist"
      ? "Tourist"
      : "Travel Agent";


  const aiRoleName =
    studentRole === "tourist"
      ? "Travel Agent"
      : "Tourist";


  const studentIcon =
    studentRole === "tourist"
      ? "🧳"
      : "👩‍💼";


  const aiIcon =
    studentRole === "tourist"
      ? "👩‍💼"
      : "🧳";


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">


      <div class="level">
        ✍️ WRITE
      </div>


      <h2>
        ✈️ ${tour.destination}
      </h2>


      <h3>
        🎭 Your Roles
      </h3>


      <div class="role-status">


        <div class="role-status-box">

          <span>
            ${studentIcon}
          </span>

          <small>
            YOU
          </small>

          <strong>
            ${studentRoleName}
          </strong>

        </div>


        <div class="role-switch">
          ↔
        </div>


        <div class="role-status-box">

          <span>
            ${aiIcon}
          </span>

          <small>
            AI
          </small>

          <strong>
            ${aiRoleName}
          </strong>

        </div>


      </div>


      <div class="mission">

        <h3>
          ✅ Ready!
        </h3>

        <p>
          <strong>Destination:</strong>
          ${tour.destination}
        </p>

        <p>
          Write simple English.
          AI will respond to you.
        </p>

      </div>


      <button
        class="continue-button"
        onclick="startWriteConversation()">

        Start Conversation ➜

      </button>


      <div class="back-area">

        <button
          class="back-button"
          onclick="showRoleSelection(
            ${tour.id},
            '${activity}'
          )">

          ← Change Role

        </button>

      </div>


    </section>

  `;

}


// ======================================================
// BUILD TOURIST TASKS
// Student = Tourist
// ======================================================

function getTouristTasks() {

  const t = currentTour;


  return [

    {
      ai:
        "Hello! Where would you like to go?",

      keywords: [
        normalizeText(t.destination)
      ],

      strongKeywords: [
        "like",
        "go"
      ],

      model:
        `I'd like to go to ${t.destination}.`,

      ideas: [
        t.destination,
        `go to ${t.destination}`,
        `I'd like to go to ${t.destination}.`
      ]
    },


    {
      ai:
        "What would you like to do there?",

      keywords: [
        normalizeText(t.activityKeyword)
      ],

      strongKeywords: [
        "like"
      ],

      model:
        `I'd like to ${t.activity}.`,

      ideas: [
        t.activityKeyword,
        t.activity,
        `I'd like to ${t.activity}.`
      ]
    },


    {
      ai:
        "Where would you like to stay?",

      keywords: [
        normalizeText(t.accommodation)
      ],

      strongKeywords: [
        "stay"
      ],

      model:
        `I'd like to stay at a ${t.accommodation}.`,

      ideas: [
        t.accommodation,
        `stay at a ${t.accommodation}`,
        `I'd like to stay at a ${t.accommodation}.`
      ]
    },


    {
      ai:
        "What kind of room would you like?",

      keywords: [
        normalizeText(t.room)
      ],

      strongKeywords: [
        "room"
      ],

      model:
        `I'd like a ${t.room}, please.`,

      ideas: [
        t.room,
        `a ${t.room}`,
        `I'd like a ${t.room}, please.`
      ]
    },


    {
      ai:
        "How long are you staying?",

      keywords: [
        normalizeText(t.stay),
        normalizeText(
          t.stay.replace(
            "days",
            ""
          )
        ),
        normalizeText(
          t.stay.replace(
            "nights",
            ""
          )
        )
      ],

      strongKeywords: [
        "staying",
        "stay"
      ],

      model:
        `I'm staying for ${t.stay}.`,

      ideas: [
        t.stay,
        `for ${t.stay}`,
        `I'm staying for ${t.stay}.`
      ]
    },


    {
      ai:
        `The room is ${t.price} a night. Okay. I can book it for you.`,

      keywords: [
        "thank you",
        "thanks"
      ],

      strongKeywords: [
        "thank"
      ],

      model:
        "Thank you.",

      ideas: [
        "Thanks",
        "Thank you",
        "Thank you very much."
      ]
    }

  ];

}


// ======================================================
// BUILD TRAVEL AGENT TASKS
// Student = Travel Agent
// ======================================================

function getAgentTasks() {

  const t = currentTour;


  return [

    {
      ai:
        `Hello. I'd like to book a tour to ${t.destination}, please.`,

      keywords: [
        "what would you like to do",
        "what do you want to do",
        "what would you like"
      ],

      strongKeywords: [
        "what",
        "do"
      ],

      model:
        "Sure. What would you like to do there?",

      ideas: [
        "activity",
        "like to do",
        "Sure. What would you like to do there?"
      ],

      aiAfter:
        `I'd like to ${t.activity}.`
    },


    {
      ai:
        `I'd like to ${t.activity}.`,

      keywords: [
        "where would you like to stay",
        "where do you want to stay",
        "where would you stay"
      ],

      strongKeywords: [
        "where",
        "stay"
      ],

      model:
        "Where would you like to stay?",

      ideas: [
        "accommodation",
        "where + stay",
        "Where would you like to stay?"
      ],

      aiAfter:
        `I'd like to stay at a ${t.accommodation}.`
    },


    {
      ai:
        `I'd like to stay at a ${t.accommodation}.`,

      keywords: [
        "what kind of room",
        "which room",
        "what room"
      ],

      strongKeywords: [
        "room"
      ],

      model:
        "What kind of room would you like?",

      ideas: [
        "room",
        "kind of room",
        "What kind of room would you like?"
      ],

      aiAfter:
        `I'd like a ${t.room}, please.`
    },


    {
      ai:
        `I'd like a ${t.room}, please.`,

      keywords: [
        "how long are you staying",
        "how long will you stay",
        "how many days",
        "how many nights"
      ],

      strongKeywords: [
        "how",
        "long"
      ],

      model:
        "How long are you staying?",

      ideas: [
        "length of stay",
        "how long",
        "How long are you staying?"
      ],

      aiAfter:
        `I'm staying for ${t.stay}.`
    },


    {
      ai:
        `I'm staying for ${t.stay}.`,

      keywords: [
        normalizeText(t.price),
        "a night",
        "per night"
      ],

      strongKeywords: [
        "room",
        "night"
      ],

      model:
        `The room is ${t.price} a night.`,

      ideas: [
        t.price,
        `${t.price} a night`,
        `The room is ${t.price} a night.`
      ],

      aiAfter:
        "That sounds good."
    },


    {
      ai:
        "That sounds good.",

      keywords: [
        "i can book it for you",
        "can book it",
        "book it for you"
      ],

      strongKeywords: [
        "book"
      ],

      model:
        "Okay. I can book it for you.",

      ideas: [
        "book",
        "book it for you",
        "Okay. I can book it for you."
      ],

      aiAfter:
        "Thank you."
    }

  ];

}


// ======================================================
// GET CURRENT TASKS
// ======================================================

function getCurrentTasks() {

  if (
    currentStudentRole ===
    "tourist"
  ) {

    return getTouristTasks();

  }


  return getAgentTasks();

}


// ======================================================
// START WRITE CONVERSATION
// ======================================================

function startWriteConversation() {

  conversationStep = 0;

  conversationScore = 0;

  ideaVisible = false;


  showWriteStep();

}


// ======================================================
// SHOW WRITE STEP
// ======================================================

function showWriteStep() {

  const tasks =
    getCurrentTasks();


  const task =
    tasks[conversationStep];


  const aiRole =
    currentStudentRole === "tourist"
      ? "Travel Agent"
      : "Tourist";


  const aiIcon =
    currentStudentRole === "tourist"
      ? "👩‍💼"
      : "🧳";


  const progress =
    ((conversationStep + 1) /
      tasks.length) * 100;


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">


      <div class="level">

        ✍️ WRITE
        ${conversationStep + 1}
        / ${tasks.length}

      </div>


      <div class="progress-track">

        <div
          class="progress-bar"
          style="width:${progress}%">
        </div>

      </div>


      <h2>
        ✈️ ${currentTour.destination}
      </h2>


      <div class="conversation-role-line">

        <strong>
          YOU:
        </strong>

        ${
          currentStudentRole ===
          "tourist"
            ? "🧳 Tourist"
            : "👩‍💼 Travel Agent"
        }

        <span>
          •
        </span>

        <strong>
          AI:
        </strong>

        ${aiIcon}
        ${aiRole}

      </div>


      <div class="ai-message">

        <div class="speaker-label">

          ${aiIcon}
          <strong>
            AI ${aiRole}
          </strong>

        </div>


        <p>
          ${task.ai}
        </p>


        <button
          class="listen-button"
          onclick="speakText(
            ${JSON.stringify(task.ai)}
          )">

          🔊 Listen

        </button>

      </div>


      <div class="write-box">

        <h3>
          ✍️ Your answer
        </h3>


        <input
          id="studentAnswer"
          type="text"
          autocomplete="off"
          placeholder="Write your English answer here..."
        >


        <button
          class="check-button"
          onclick="checkWriteAnswer()">

          ✓ Send Answer

        </button>


        <button
          class="idea-button"
          onclick="showIdeas()">

          💡 Idea

        </button>

      </div>


      <div
        id="ideaArea">
      </div>


      <div
        id="feedback"
        class="feedback-area">
      </div>


      <div class="back-area">

        <button
          class="back-button"
          onclick="showRoleSelection(
            ${currentTour.id},
            '${currentActivity}'
          )">

          ← Change Role

        </button>

      </div>


    </section>

  `;


  const input =
    document.getElementById(
      "studentAnswer"
    );


  input.focus();


  input.addEventListener(
    "keydown",
    function(event) {

      if (
        event.key === "Enter"
      ) {

        checkWriteAnswer();

      }

    }
  );


  speakText(
    task.ai
  );

}


// ======================================================
// CHECK WRITE ANSWER
// ======================================================

function checkWriteAnswer() {

  const input =
    document.getElementById(
      "studentAnswer"
    );


  if (!input) {
    return;
  }


  const studentText =
    input.value.trim();


  if (!studentText) {

    showRepeatFeedback(
      "Please write an answer first."
    );

    input.focus();

    return;

  }


  const tasks =
    getCurrentTasks();


  const task =
    tasks[conversationStep];


  const result =
    evaluateAnswer(
      studentText,
      task
    );


  if (
    result === "excellent"
  ) {

    conversationScore++;


    showSuccessFeedback(
      "excellent",
      studentText,
      task
    );

  }

  else if (
    result === "good"
  ) {

    conversationScore++;


    showSuccessFeedback(
      "good",
      studentText,
      task
    );

  }

  else {

    showRepeatFeedback(
      "Try again, or press Idea for help."
    );

  }

}


// ======================================================
// SIMPLE A1 ANSWER EVALUATION
// ======================================================

function evaluateAnswer(
  studentText,
  task
) {

  const text =
    normalizeText(
      studentText
    );


  const model =
    normalizeText(
      task.model
    );


  // Exact or almost exact model answer

  if (
    text === model
  ) {

    return "excellent";

  }


  // Check accepted meaning

  const meaningMatch =
    task.keywords.some(
      keyword => {

        const k =
          normalizeText(keyword);

        return (
          k.length > 0 &&
          text.includes(k)
        );

      }
    );


  if (!meaningMatch) {

    return "repeat";

  }


  // Longer and more complete answer

  const strongMatch =
    task.strongKeywords.some(
      keyword =>
        text.includes(
          normalizeText(keyword)
        )
    );


  const wordCount =
    text.split(" ").length;


  if (
    strongMatch &&
    wordCount >= 4
  ) {

    return "excellent";

  }


  return "good";

}


// ======================================================
// SUCCESS FEEDBACK
// ======================================================

function showSuccessFeedback(
  level,
  studentText,
  task
) {

  const title =
    level === "excellent"
      ? "🌟 Excellent!"
      : "👍 Good!";


  const extra =
    level === "good"

      ? `

        <p>
          A better sentence:
        </p>

        <p class="model-answer">
          <strong>
            ${task.model}
          </strong>
        </p>

      `

      : `

        <p class="model-answer">
          <strong>
            ${task.model}
          </strong>
        </p>

      `;


  let aiReply = "";


  if (
    currentStudentRole ===
    "agent" &&
    task.aiAfter
  ) {

    aiReply = `

      <div class="ai-follow-up">

        <p>
          🧳 <strong>AI Tourist:</strong>
          ${task.aiAfter}
        </p>

      </div>

    `;

  }


  document
    .getElementById(
      "feedback"
    )
    .innerHTML = `

      <div class="success-feedback">

        <h3>
          ${title}
        </h3>


        <p class="student-response">

          <strong>You:</strong>
          ${escapeHTML(studentText)}

        </p>


        ${extra}


        ${aiReply}


        <button
          class="continue-button"
          onclick="nextWriteStep()">

          ${
            conversationStep <
            getCurrentTasks().length - 1

              ? "Continue ➜"

              : "Finish 🎉"
          }

        </button>

      </div>

    `;


  if (
    currentStudentRole ===
    "agent" &&
    task.aiAfter
  ) {

    speakText(
      task.aiAfter
    );

  }

}


// ======================================================
// REPEAT FEEDBACK
// ======================================================

function showRepeatFeedback(
  message
) {

  document
    .getElementById(
      "feedback"
    )
    .innerHTML = `

      <div class="repeat-feedback">

        <h3>
          🔄 Repeat, please.
        </h3>

        <p>
          ${message}
        </p>

      </div>

    `;

}


// ======================================================
// IDEA
// ======================================================

function showIdeas() {

  const tasks =
    getCurrentTasks();


  const task =
    tasks[conversationStep];


  ideaVisible = true;


  document
    .getElementById(
      "ideaArea"
    )
    .innerHTML = `

      <div class="idea-panel">

        <h3>
          💡 Ideas
        </h3>


        <p>
          Try one of these ideas,
          or write your own answer.
        </p>


        <div class="idea-item">

          <strong>
            Idea 1:
          </strong>

          ${task.ideas[0]}

        </div>


        <div class="idea-item">

          <strong>
            Idea 2:
          </strong>

          ${task.ideas[1]}

        </div>


        <div class="idea-item">

          <strong>
            Idea 3:
          </strong>

          ${task.ideas[2]}

        </div>

      </div>

    `;

}


// ======================================================
// NEXT STEP
// ======================================================

function nextWriteStep() {

  const tasks =
    getCurrentTasks();


  if (
    conversationStep <
    tasks.length - 1
  ) {

    conversationStep++;

    ideaVisible = false;

    showWriteStep();

  }

  else {

    showWriteResult();

  }

}


// ======================================================
// RESULT
// ======================================================

function showWriteResult() {

  const total =
    getCurrentTasks().length;


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">


      <div class="level">
        ✍️ WRITE COMPLETED
      </div>


      <div class="progress-track">

        <div
          class="progress-bar"
          style="width:100%">
        </div>

      </div>


      <h2>
        🎉 Great Work!
      </h2>


      <div class="mission">

        <h3>
          🏆 Your Result
        </h3>

        <p class="result-score">

          <strong>
            ${conversationScore}
            /
            ${total}
            tasks completed
          </strong>

        </p>


        <p>
          You practiced as the

          <strong>

            ${
              currentStudentRole ===
              "tourist"
                ? "Tourist"
                : "Travel Agent"
            }

          </strong>.

        </p>


        <p>
          Destination:

          <strong>
            ${currentTour.destination}
          </strong>
        </p>

      </div>


      <div class="result-buttons">

        <button
          onclick="selectRole(
            ${currentTour.id},
            '${currentActivity}',
            '${currentStudentRole}'
          )">

          🔄 Practice Again

        </button>


        <button
          onclick="showRoleSelection(
            ${currentTour.id},
            '${currentActivity}'
          )">

          🎭 Change Role

        </button>


        <button
          onclick="showTourList(
            '${currentActivity}'
          )">

          🌏 Another Tour

        </button>

      </div>


      <div class="back-area">

        <button
          class="back-button"
          onclick="openBookTour()">

          🏠 BOOK A TOUR

        </button>

      </div>


    </section>

  `;


  speakText(
    "Great work! You completed the writing practice."
  );

}


// ======================================================
// CHOOSE - LATER
// ======================================================

function showChooseComingSoon() {

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        👆 CHOOSE
      </div>

      <h2>
        👆 Choose Practice
      </h2>

      <div class="mission">

        <h3>
          Coming Next
        </h3>

        <p>
          We are completing WRITE first.
          CHOOSE will be added next.
        </p>

      </div>

      <button
        class="back-button"
        onclick="openBookTour()">

        ← Back to BOOK A TOUR

      </button>

    </section>

  `;

}


// ======================================================
// SPEAK - LATER
// ======================================================

function showSpeakComingSoon() {

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        🎤 SPEAK
      </div>

      <h2>
        🎤 Speak Practice
      </h2>

      <div class="mission">

        <h3>
          Coming Soon
        </h3>

        <p>
          Microphone practice will be
          added after WRITE and CHOOSE.
        </p>

      </div>

      <button
        class="back-button"
        onclick="openBookTour()">

        ← Back to BOOK A TOUR

      </button>

    </section>

  `;

}


// ======================================================
// RESET
// ======================================================

function resetConversation() {

  currentTour = null;

  currentActivity = null;

  currentStudentRole = null;

  conversationStep = 0;

  conversationScore = 0;

  ideaVisible = false;

}


// ======================================================
// NORMALIZE TEXT
// ======================================================

function normalizeText(text) {

  return String(text)
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/\s+/g, " ")
    .trim();

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
// ESCAPE HTML
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


// ======================================================
// CAPITALIZE
// ======================================================

function capitalizeFirst(text) {

  if (!text) {

    return "";

  }


  return (
    text.charAt(0).toUpperCase()
    +
    text.slice(1)
  );

}

// ======================================================
// ENGLISH ROLEPLAY AI
// BOOK A TOUR - WRITE A1
// COMPLETE VERSION
// ======================================================


// ======================================================
// START BUTTON
// ======================================================

const startButton = document.getElementById("startButton");

if (startButton) {
  startButton.addEventListener("click", openBookTour);
}


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
let currentActivity = "write";
let currentStudentRole = null;

let conversationStep = 0;
let conversationScore = 0;

let currentListenText = "";


// ======================================================
// HOME - BOOK A TOUR
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
        real-life travel conversations.
      </p>

      <div class="mission">

        <h3>🎯 Your Mission</h3>

        <p>
          Choose a learning activity,
          choose a tour and choose your role.
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

          <h3>CHOOSE</h3>

          <p>
            Choose the best answer
            in the conversation.
          </p>

          <button
            onclick="showChooseComingSoon()">

            Start Choose

          </button>

        </div>

      </div>


      <div class="activity-card">

        <div class="activity-icon">
          ✍️
        </div>

        <div class="activity-info">

          <h3>WRITE</h3>

          <p>
            Write your own answers
            and talk with AI.
          </p>

          <button
            onclick="showTourList('write')">

            Start Write

          </button>

        </div>

      </div>


      <div class="activity-card">

        <div class="activity-icon">
          🎤
        </div>

        <div class="activity-info">

          <h3>SPEAK</h3>

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
// TOUR LIST
// ======================================================

function showTourList(activity = "write") {

  currentActivity = activity;

  let tourCards = "";


  tours.forEach(function (tour) {

    tourCards += `

      <div class="tour-card">

        <div class="tour-number">
          ${tour.id}
        </div>


        <div class="tour-info">

          <h3>
            ${tour.country} — ${tour.destination}
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
            onclick="selectTour(${tour.id}, '${activity}')">

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
        Choose one destination to practice.
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

function selectTour(tourId, activity) {

  const tour = tours.find(function (item) {
    return item.id === tourId;
  });


  if (!tour) {
    return;
  }


  currentTour = tour;
  currentActivity = activity;

  showSelectedTour();
}


// ======================================================
// SHOW TOUR INFORMATION
// ======================================================

function showSelectedTour() {

  const tour = currentTour;


  if (!tour) {
    openBookTour();
    return;
  }


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
        Choose the role you want to practice.
      </p>


      <div class="role-preview">

        <div>
          <span>🧳</span>
          <strong>Tourist</strong>
        </div>

        <div>
          <span>👩‍💼</span>
          <strong>Travel Agent</strong>
        </div>

      </div>


      <button
        class="continue-button"
        onclick="showRoleSelection()">

        Continue ➜

      </button>


      <div class="back-area">

        <button
          class="back-button"
          onclick="showTourList('write')">

          ← Choose another tour

        </button>

      </div>

    </section>

  `;
}


// ======================================================
// ROLE SELECTION
// ======================================================

function showRoleSelection() {

  const tour = currentTour;


  if (!tour) {
    openBookTour();
    return;
  }


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
            onclick="selectRole('tourist')">

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
            You help a tourist book a tour.
          </p>

          <p>
            🤖 AI will be the
            <strong>Tourist</strong>.
          </p>

          <button
            onclick="selectRole('agent')">

            I am the Travel Agent

          </button>

        </div>

      </div>


      <div class="back-area">

        <button
          class="back-button"
          onclick="showSelectedTour()">

          ← Back to Tour

        </button>

      </div>

    </section>

  `;
}


// ======================================================
// SELECT ROLE
// ======================================================

function selectRole(studentRole) {

  currentStudentRole = studentRole;

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
        ✈️ ${currentTour.destination}
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
          ${currentTour.destination}
        </p>

        <p>
          You are the
          <strong>${studentRoleName}</strong>.
        </p>

        <p>
          AI is the
          <strong>${aiRoleName}</strong>.
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
          onclick="showRoleSelection()">

          ← Change Role

        </button>

      </div>

    </section>

  `;
}


// ======================================================
// TOURIST TASKS
// STUDENT = TOURIST
// ======================================================

function getTouristTasks() {

  const t = currentTour;


  return [

    {
      ai:
        "Hello! Where would you like to go?",

      keywords: [
        t.destination
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
        "Sure. What would you like to do there?",

      keywords: [
        t.activityKeyword,
        t.activity
      ],

      strongKeywords: [
        "like",
        "visit",
        "go",
        "try"
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
        t.accommodation
      ],

      strongKeywords: [
        "stay",
        "like"
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
        t.room
      ],

      strongKeywords: [
        "room",
        "like"
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
        t.stay,
        t.stay.split(" ")[0]
      ],

      strongKeywords: [
        "stay",
        "staying",
        "days",
        "nights"
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
        "thank",
        "thanks"
      ],

      model:
        "Thank you.",

      ideas: [
        "Thanks.",
        "Thank you.",
        "Thank you very much."
      ]
    }

  ];
}


// ======================================================
// TRAVEL AGENT TASKS
// STUDENT = TRAVEL AGENT
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
        "What would you like to do?",
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
        "where will you stay"
      ],

      strongKeywords: [
        "where",
        "stay"
      ],

      model:
        "Where would you like to stay?",

      ideas: [
        "accommodation",
        "Where + stay?",
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
        "what room",
        "which room"
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
        "How long?",
        "How long are you staying?"
      ],

      aiAfter:
        `I'm staying for ${t.stay}.`
    },


    {
      ai:
        `I'm staying for ${t.stay}.`,

      keywords: [
        t.price,
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
        "Okay. That sounds good."
    },


    {
      ai:
        "Okay. That sounds good.",

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

  if (currentStudentRole === "tourist") {
    return getTouristTasks();
  }

  return getAgentTasks();
}


// ======================================================
// START WRITE
// ======================================================

function startWriteConversation() {

  conversationStep = 0;
  conversationScore = 0;

  showWriteStep();
}


// ======================================================
// SHOW CURRENT WRITE STEP
// ======================================================

function showWriteStep() {

  const tasks = getCurrentTasks();

  const task = tasks[conversationStep];


  if (!task) {
    showWriteResult();
    return;
  }


  // This is the sentence Listen will replay.
  currentListenText = task.ai;


  const aiRole =
    currentStudentRole === "tourist"
      ? "Travel Agent"
      : "Tourist";


  const aiIcon =
    currentStudentRole === "tourist"
      ? "👩‍💼"
      : "🧳";


  const studentRole =
    currentStudentRole === "tourist"
      ? "🧳 Tourist"
      : "👩‍💼 Travel Agent";


  const progress =
    ((conversationStep + 1) / tasks.length) * 100;


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

        <strong>YOU:</strong>
        ${studentRole}

        <span>•</span>

        <strong>AI:</strong>
        ${aiIcon} ${aiRole}

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
          type="button"
          class="listen-button"
          id="listenButton">

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
          type="button"
          class="check-button"
          id="sendAnswerButton">

          ✓ Send Answer

        </button>


        <button
          type="button"
          class="idea-button"
          id="ideaButton">

          💡 Idea

        </button>

      </div>


      <div id="ideaArea"></div>

      <div
        id="feedback"
        class="feedback-area">
      </div>


      <div class="back-area">

        <button
          class="back-button"
          onclick="showRoleSelection()">

          ← Change Role

        </button>

      </div>

    </section>

  `;


  // IMPORTANT:
  // We use addEventListener instead of putting the
  // sentence directly inside onclick.
  // This makes Listen much more reliable.

  const listenButton =
    document.getElementById("listenButton");

  listenButton.addEventListener(
    "click",
    function () {

      listenAgain();

    }
  );


  const sendButton =
    document.getElementById("sendAnswerButton");

  sendButton.addEventListener(
    "click",
    function () {

      checkWriteAnswer();

    }
  );


  const ideaButton =
    document.getElementById("ideaButton");

  ideaButton.addEventListener(
    "click",
    function () {

      showIdeas();

    }
  );


  const input =
    document.getElementById("studentAnswer");


  input.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {
        checkWriteAnswer();
      }

    }
  );


  input.focus();


  // AI automatically reads the new sentence once.
  speakText(currentListenText);
}


// ======================================================
// CHECK ANSWER
// ======================================================

function checkWriteAnswer() {

  const input =
    document.getElementById("studentAnswer");


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


  const tasks = getCurrentTasks();

  const task = tasks[conversationStep];


  const result =
    evaluateAnswer(
      studentText,
      task
    );


  if (result === "excellent") {

    conversationScore++;

    showSuccessFeedback(
      "excellent",
      studentText,
      task
    );

  }

  else if (result === "good") {

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
// EVALUATE A1 ANSWER
// ======================================================

function evaluateAnswer(studentText, task) {

  const text =
    normalizeText(studentText);


  const model =
    normalizeText(task.model);


  if (text === model) {
    return "excellent";
  }


  const meaningMatch =
    task.keywords.some(function (keyword) {

      const normalizedKeyword =
        normalizeText(keyword);

      return (
        normalizedKeyword &&
        text.includes(normalizedKeyword)
      );

    });


  if (!meaningMatch) {
    return "repeat";
  }


  const strongMatch =
    task.strongKeywords.some(function (keyword) {

      return text.includes(
        normalizeText(keyword)
      );

    });


  const wordCount =
    text.split(" ").filter(Boolean).length;


  if (strongMatch && wordCount >= 4) {
    return "excellent";
  }


  return "good";
}


// ======================================================
// GOOD / EXCELLENT
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


  if (level === "excellent") {
    playExcellentFeedback();
  }
  else {
    playGoodFeedback();
  }


  let modelSection = "";


  if (level === "good") {

    modelSection = `

      <p>
        A better sentence:
      </p>

      <p class="model-answer">
        <strong>
          ${task.model}
        </strong>
      </p>

    `;

  }
  else {

    modelSection = `

      <p class="model-answer">
        <strong>
          ${task.model}
        </strong>
      </p>

    `;

  }


  let aiFollowUp = "";


  if (
    currentStudentRole === "agent" &&
    task.aiAfter
  ) {

    aiFollowUp = `

      <div class="ai-follow-up">

        <p>
          🧳 <strong>AI Tourist:</strong>
          ${task.aiAfter}
        </p>

      </div>

    `;

  }


  document.getElementById("feedback").innerHTML = `

    <div class="success-feedback">

      <h3>
        ${title}
      </h3>


      <p class="student-response">

        <strong>You:</strong>
        ${escapeHTML(studentText)}

      </p>


      ${modelSection}

      ${aiFollowUp}


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
}


// ======================================================
// REPEAT
// ======================================================

function showRepeatFeedback(message) {

  playRepeatFeedback();


  const feedback =
    document.getElementById("feedback");


  if (!feedback) {
    return;
  }


  feedback.innerHTML = `

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
// IDEA - THREE LEVELS
// ======================================================

function showIdeas() {

  const tasks = getCurrentTasks();

  const task = tasks[conversationStep];


  const ideaArea =
    document.getElementById("ideaArea");


  if (!ideaArea) {
    return;
  }


  ideaArea.innerHTML = `

    <div class="idea-panel">

      <h3>
        💡 Ideas
      </h3>

      <p>
        Try one of these ideas,
        or write your own answer.
      </p>


      <div class="idea-item">

        <strong>Idea 1:</strong>
        ${task.ideas[0]}

      </div>


      <div class="idea-item">

        <strong>Idea 2:</strong>
        ${task.ideas[1]}

      </div>


      <div class="idea-item">

        <strong>Idea 3:</strong>
        ${task.ideas[2]}

      </div>

    </div>

  `;
}


// ======================================================
// NEXT WRITE STEP
// ======================================================

function nextWriteStep() {

  const tasks = getCurrentTasks();


  if (
    conversationStep <
    tasks.length - 1
  ) {

    conversationStep++;

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


  currentListenText = "";


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
            ${Math.min(conversationScore, total)}
            /
            ${total}
            tasks completed
          </strong>

        </p>


        <p>

          You practiced as the

          <strong>

            ${
              currentStudentRole === "tourist"
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
          onclick="selectRole('${currentStudentRole}')">

          🔄 Practice Again

        </button>


        <button
          onclick="showRoleSelection()">

          🎭 Change Role

        </button>


        <button
          onclick="showTourList('write')">

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


  setTimeout(function () {

    speakText(
      "Great work! You completed the writing practice."
    );

  }, 300);
}


// ======================================================
// TEXT TO SPEECH
// ======================================================

let englishVoice = null;


// Load English voice
function loadEnglishVoice() {

  if (!("speechSynthesis" in window)) {
    return;
  }


  const voices =
    window.speechSynthesis.getVoices();


  if (!voices || voices.length === 0) {
    return;
  }


  englishVoice =
    voices.find(function (voice) {

      return voice.lang === "en-US";

    });


  if (!englishVoice) {

    englishVoice =
      voices.find(function (voice) {

        return voice.lang
          .toLowerCase()
          .startsWith("en");

      });

  }
}


// Load now
loadEnglishVoice();


// Chrome may load voices later
if ("speechSynthesis" in window) {

  window.speechSynthesis.addEventListener(
    "voiceschanged",
    loadEnglishVoice
  );

}


// ======================================================
// SPEAK TEXT
// ======================================================

function speakText(text) {

  if (!("speechSynthesis" in window)) {

    alert(
      "Your browser does not support text-to-speech."
    );

    return;
  }


  const cleanText =
    String(text || "").trim();


  if (!cleanText) {
    return;
  }


  const synth =
    window.speechSynthesis;


  // Stop previous speech.
  synth.cancel();


  // IMPORTANT:
  // A completely new utterance is created every time.
  const utterance =
    new SpeechSynthesisUtterance(cleanText);


  utterance.lang = "en-US";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  utterance.volume = 1;


  if (englishVoice) {
    utterance.voice = englishVoice;
  }


  // Give Chrome time after cancel().
  window.setTimeout(
    function () {

      synth.speak(utterance);

    },
    180
  );
}


// ======================================================
// LISTEN AGAIN
// ======================================================

function listenAgain() {

  const textToRead =
    String(currentListenText || "").trim();


  if (!textToRead) {
    return;
  }


  if (!("speechSynthesis" in window)) {

    alert(
      "Your browser does not support text-to-speech."
    );

    return;
  }


  const synth =
    window.speechSynthesis;


  // Completely stop current voice.
  synth.cancel();


  // Chrome sometimes needs a short gap
  // before replaying the same sentence.
  window.setTimeout(
    function () {

      const replay =
        new SpeechSynthesisUtterance(
          textToRead
        );


      replay.lang = "en-US";
      replay.rate = 0.82;
      replay.pitch = 1;
      replay.volume = 1;


      if (englishVoice) {
        replay.voice = englishVoice;
      }


      synth.speak(replay);

    },
    250
  );
}


// ======================================================
// SIMPLE AUDIO TONES
// ======================================================

let feedbackAudioContext = null;


function getAudioContext() {

  try {

    const AudioContextClass =
      window.AudioContext ||
      window.webkitAudioContext;


    if (!AudioContextClass) {
      return null;
    }


    if (!feedbackAudioContext) {

      feedbackAudioContext =
        new AudioContextClass();

    }


    if (
      feedbackAudioContext.state ===
      "suspended"
    ) {

      feedbackAudioContext.resume();

    }


    return feedbackAudioContext;

  }
  catch (error) {

    return null;

  }
}


function playTone(
  frequency,
  duration,
  delay = 0
) {

  const context =
    getAudioContext();


  if (!context) {
    return;
  }


  const oscillator =
    context.createOscillator();


  const gain =
    context.createGain();


  oscillator.connect(gain);

  gain.connect(
    context.destination
  );


  oscillator.type = "sine";

  oscillator.frequency.value =
    frequency;


  const start =
    context.currentTime + delay;


  const finish =
    start + duration;


  gain.gain.setValueAtTime(
    0.0001,
    start
  );


  gain.gain.exponentialRampToValueAtTime(
    0.10,
    start + 0.02
  );


  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    finish
  );


  oscillator.start(start);

  oscillator.stop(
    finish + 0.03
  );
}


// ======================================================
// EXCELLENT AUDIO
// ======================================================

function playExcellentFeedback() {

  // Success melody
  playTone(523, 0.12, 0);
  playTone(659, 0.12, 0.14);
  playTone(784, 0.20, 0.28);


  window.setTimeout(
    function () {

      speakText("Excellent!");

    },
    650
  );
}


// ======================================================
// GOOD AUDIO
// ======================================================

function playGoodFeedback() {

  playTone(523, 0.13, 0);
  playTone(659, 0.18, 0.15);


  window.setTimeout(
    function () {

      speakText("Good!");

    },
    500
  );
}


// ======================================================
// REPEAT AUDIO
// ======================================================

function playRepeatFeedback() {

  // Different descending sound
  playTone(440, 0.14, 0);
  playTone(330, 0.20, 0.17);


  window.setTimeout(
    function () {

      speakText(
        "Repeat, please."
      );

    },
    500
  );
}


// ======================================================
// COMING SOON
// ======================================================

function showChooseComingSoon() {

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        👆 CHOOSE
      </div>

      <h2>
        Choose Practice
      </h2>

      <div class="mission">

        <h3>
          Coming Next
        </h3>

        <p>
          We will build CHOOSE
          after WRITE is completed.
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


function showSpeakComingSoon() {

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        🎤 SPEAK
      </div>

      <h2>
        Speak Practice
      </h2>

      <div class="mission">

        <h3>
          Coming Soon
        </h3>

        <p>
          Microphone practice will be added
          after WRITE and CHOOSE.
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
  currentActivity = "write";
  currentStudentRole = null;

  conversationStep = 0;
  conversationScore = 0;

  currentListenText = "";


  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}


// ======================================================
// NORMALIZE TEXT
// ======================================================

function normalizeText(text) {

  return String(text || "")
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}


// ======================================================
// ESCAPE HTML
// ======================================================

function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent =
    String(text);

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
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
}

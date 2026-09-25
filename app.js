// ======================================================
// ENGLISH ROLEPLAY AI
// BOOK A TOUR - A1
// FLEXIBLE WRITE VERSION
// ======================================================


// ======================================================
// START
// ======================================================

const startButton =
  document.getElementById("startButton");

if (startButton) {
  startButton.addEventListener(
    "click",
    openBookTour
  );
}


// ======================================================
// TOUR DATA
// These are SAMPLE situations.
// Students do NOT have to copy these answers.
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

let currentStepCompleted = false;


// ======================================================
// CONVERSATION MEMORY
// Store the student's own choices.
// ======================================================

let studentChoices = {

  destination: "",

  activity: "",

  accommodation: "",

  room: "",

  stay: "",

  price: ""

};


// ======================================================
// HOME
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

          <h3>
            WRITE
          </h3>

          <p>
            Write your own answers.
            You do not have to copy the sample.
          </p>

         <button
  onclick="startSimpleWrite()">

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
// TOUR LIST
// ======================================================

function showTourList(
  activity = "write"
) {

  currentActivity = activity;


  let tourCards = "";


  tours.forEach(
    function (tour) {

      tourCards += `

        <div class="tour-card">

          <div class="tour-number">
            ${tour.id}
          </div>


          <div class="tour-info">

            <h3>
              ${tour.country}
              —
              ${tour.destination}
            </h3>


            <p>
              🎯
              ${capitalizeFirst(tour.activity)}
            </p>


            <p>
              🏨
              ${capitalizeFirst(tour.accommodation)}
              •
              ${capitalizeFirst(tour.room)}
            </p>


            <p>
              💵
              ${tour.price}/night
              •
              📅
              ${tour.stay}
            </p>


            <button
              onclick="selectTour(${tour.id})">

              Select this tour

            </button>

          </div>

        </div>

      `;

    }
  );


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        ✍️ WRITE
      </div>


      <h2>
        🌏 Choose a Tour
      </h2>


      <p>
        The tour information is a sample.
        You may give different reasonable answers
        during the conversation.
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

function selectTour(tourId) {

  const tour =
    tours.find(
      function (item) {

        return item.id === tourId;

      }
    );


  if (!tour) {
    return;
  }


  currentTour = tour;


  showSelectedTour();
}


// ======================================================
// TOUR INFORMATION
// ======================================================

function showSelectedTour() {

  const tour =
    currentTour;


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
  🌏 ${tour.country}
</h2>


      <div class="mission">

        <h3>
          🌍 Sample Tour Information
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


      <div class="idea-panel">

        <strong>
          💡 Important:
        </strong>

        <p>
          These are sample answers.
          In WRITE, you can give your own
          reasonable information.
        </p>

      </div>


      <h3>
        🎭 Choose your role
      </h3>


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
          onclick="startSimpleWrite()"
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

  if (!currentTour) {

    openBookTour();

    return;

  }


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        🎭 CHOOSE YOUR ROLE
      </div>


    <h2>
        🌏 ${currentTour.country}
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
            You help a tourist
            book a tour.
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

  currentStudentRole =
    studentRole;


  conversationStep = 0;

  conversationScore = 0;

  currentStepCompleted = false;


  resetStudentChoices();


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
  🌏 ${getTourTitle()}
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
          Write simple English.
        </p>

        <p>
          You may use the sample information
          or give your own reasonable answers.
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
// ======================================================

function getTouristTasks() {

  const t =
    currentTour;


  return [

    {
      type: "destination",

      ai:
        "Hello! Where would you like to go?",

      model:
        `I'd like to go to ${t.destination}.`,

      ideas: [

        t.destination,

        `go to ${t.destination}`,

        `I'd like to go to ${t.destination}.`

      ]
    },


    {
      type: "activity",

      ai:
        "Sure. What would you like to do there?",

      model:
        `I'd like to ${t.activity}.`,

      ideas: [

        t.activityKeyword,

        t.activity,

        `I'd like to ${t.activity}.`

      ]
    },


    {
      type: "accommodation",

      ai:
        "Where would you like to stay?",

      model:
        `I'd like to stay at a ${t.accommodation}.`,

      ideas: [

        t.accommodation,

        `stay at a ${t.accommodation}`,

        `I'd like to stay at a ${t.accommodation}.`

      ]
    },


    {
      type: "room",

      ai:
        "What kind of room would you like?",

      model:
        `I'd like a ${t.room}, please.`,

      ideas: [

        t.room,

        `a ${t.room}`,

        `I'd like a ${t.room}, please.`

      ]
    },


    {
      type: "stay",

      ai:
        "How long are you staying?",

      model:
        `I'm staying for ${t.stay}.`,

      ideas: [

        t.stay,

        `for ${t.stay}`,

        `I'm staying for ${t.stay}.`

      ]
    },


    {
      type: "thanks",

      ai:
        `Okay. I can book it for you.`,

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
// AGENT TASKS
// ======================================================

function getAgentTasks() {

  const t =
    currentTour;


  return [

    {
      type: "askActivity",

      ai:
        `Hello. I'd like to book a tour to ${t.destination}, please.`,

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
      type: "askAccommodation",

      ai:
        `I'd like to ${t.activity}.`,

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
      type: "askRoom",

      ai:
        `I'd like to stay at a ${t.accommodation}.`,

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
      type: "askStay",

      ai:
        `I'd like a ${t.room}, please.`,

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
      type: "givePrice",

      ai:
        `I'm staying for ${t.stay}.`,

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
      type: "confirmBooking",

      ai:
        "That sounds good.",

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
// CURRENT TASKS
// ======================================================

function getCurrentTasks() {

  if (
    currentStudentRole === "tourist"
  ) {

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

  currentStepCompleted = false;


  resetStudentChoices();


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


  if (!task) {

    showWriteResult();

    return;

  }


  currentStepCompleted = false;


  currentListenText =
    task.ai;


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
    (
      (conversationStep + 1)
      /
      tasks.length
    )
    * 100;


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">


      <div class="level">

        ✍️ WRITE
        ${conversationStep + 1}
        /
        ${tasks.length}

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
          placeholder="Write your own English answer..."
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


      <div id="ideaArea">
      </div>


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


  document
    .getElementById("listenButton")
    .addEventListener(
      "click",
      listenAgain
    );


  document
    .getElementById("sendAnswerButton")
    .addEventListener(
      "click",
      checkWriteAnswer
    );


  document
    .getElementById("ideaButton")
    .addEventListener(
      "click",
      showIdeas
    );


  const input =
    document.getElementById(
      "studentAnswer"
    );


  input.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Enter"
      ) {

        checkWriteAnswer();

      }

    }
  );


  input.focus();


  // Automatically read new AI sentence.
  speakText(
    currentListenText
  );
}


// ======================================================
// CHECK ANSWER
// ======================================================

function checkWriteAnswer() {

  // Do not score the same task twice.
  if (currentStepCompleted) {
    return;
  }


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
    evaluateFlexibleAnswer(
      studentText,
      task
    );


  if (
    result.level === "excellent"
    ||
    result.level === "good"
  ) {

    currentStepCompleted = true;

    conversationScore++;


    saveStudentChoice(
      task.type,
      studentText,
      result
    );


    lockCurrentAnswer();


    showSuccessFeedback(
      result.level,
      studentText,
      task,
      result
    );

  }

  else {

    showRepeatFeedback(
      result.message ||
      "Try again, or press Idea for help."
    );

  }
}


// ======================================================
// FLEXIBLE ANSWER EVALUATION
// ======================================================

function evaluateFlexibleAnswer(
  studentText,
  task
) {

  const text =
    normalizeText(studentText);


  const words =
    text
      .split(" ")
      .filter(Boolean);


  const wordCount =
    words.length;


  if (!text) {

    return {
      level: "repeat",
      message:
        "Please write an answer first."
    };

  }


  // --------------------------------------------------
  // TOURIST: DESTINATION
  // --------------------------------------------------

  if (
    task.type === "destination"
  ) {

    // Reject obvious unrelated answers.
    if (
      containsUnrelatedAnswer(text)
    ) {

      return repeatResult();
    }


    // Full sentence patterns.
    if (
      containsAny(
        text,
        [
          "i'd like to go to",
          "i would like to go to",
          "i want to go to",
          "i'd like to visit",
          "i would like to visit",
          "i want to visit",
          "i'm going to",
          "i am going to"
        ]
      )
      &&
      wordCount >= 5
    ) {

      return {
        level: "excellent",
        value:
          extractAfterDestinationPhrase(
            studentText
          )
      };

    }


    // A short place name is accepted.
    if (
      looksLikePlaceAnswer(
        studentText
      )
    ) {

      return {
        level: "good",
        value:
          cleanStudentValue(
            studentText
          )
      };

    }


    return {
      level: "repeat",
      message:
        "Please answer with a destination or place."
    };
  }


  // --------------------------------------------------
  // TOURIST: ACTIVITY
  // --------------------------------------------------

  if (
    task.type === "activity"
  ) {

    if (
      containsUnrelatedAnswer(text)
    ) {

      return repeatResult();
    }


    const activityVerbs = [

      "visit",
      "see",
      "go",
      "swim",
      "swimming",
      "shop",
      "shopping",
      "eat",
      "try",
      "explore",
      "walk",
      "relax",
      "tour",
      "travel",
      "take",
      "watch",
      "enjoy",
      "climb",
      "hike",
      "hiking",
      "ski",
      "skiing",
      "surf",
      "surfing",
      "learn",
      "play",
      "take photos",
      "take pictures"

    ];


    const hasActivity =
      containsAny(
        text,
        activityVerbs
      );


    if (!hasActivity) {

      return {
        level: "repeat",
        message:
          "Please write an activity you would like to do."
      };

    }


    if (
      containsAny(
        text,
        [
          "i'd like to",
          "i would like to",
          "i want to",
          "i'd love to",
          "i would love to"
        ]
      )
      &&
      wordCount >= 4
    ) {

      return {
        level: "excellent",
        value:
          cleanStudentValue(
            studentText
          )
      };

    }


    return {
      level: "good",
      value:
        cleanStudentValue(
          studentText
        )
    };
  }


  // --------------------------------------------------
  // TOURIST: ACCOMMODATION
  // --------------------------------------------------

  if (
    task.type === "accommodation"
  ) {

    const accommodations = [

      "hotel",
      "homestay",
      "hostel",
      "resort",
      "guesthouse",
      "guest house",
      "apartment",
      "motel",
      "villa",
      "bungalow",
      "camp",
      "campsite",
      "airbnb"

    ];


    const accommodation =
      findFirstMatch(
        text,
        accommodations
      );


    if (!accommodation) {

      return {
        level: "repeat",
        message:
          "Please answer with a place to stay, for example a hotel, homestay, hostel or resort."
      };

    }


    if (
      containsAny(
        text,
        [
          "i'd like to stay",
          "i would like to stay",
          "i want to stay",
          "i will stay",
          "i'm staying",
          "i am staying"
        ]
      )
      &&
      wordCount >= 5
    ) {

      return {
        level: "excellent",
        value:
          accommodation
      };

    }


    return {
      level: "good",
      value:
        accommodation
    };
  }


  // --------------------------------------------------
  // TOURIST: ROOM
  // --------------------------------------------------

  if (
    task.type === "room"
  ) {

    const roomTypes = [

      "single room",
      "double room",
      "twin room",
      "family room",
      "triple room",
      "suite",
      "deluxe room",
      "standard room",
      "private room",
      "shared room",
      "connecting room"

    ];


    let room =
      findFirstMatch(
        text,
        roomTypes
      );


    if (
      !room
      &&
      text.includes("room")
      &&
      wordCount <= 5
    ) {

      room =
        cleanStudentValue(
          studentText
        );

    }


    if (!room) {

      return {
        level: "repeat",
        message:
          "Please answer with a type of room."
      };

    }


    if (
      containsAny(
        text,
        [
          "i'd like",
          "i would like",
          "i want",
          "can i have",
          "could i have"
        ]
      )
      &&
      wordCount >= 4
    ) {

      return {
        level: "excellent",
        value: room
      };

    }


    return {
      level: "good",
      value: room
    };
  }


  // --------------------------------------------------
  // TOURIST: LENGTH OF STAY
  // --------------------------------------------------

  if (
    task.type === "stay"
  ) {

    const stayInfo =
      extractStay(
        studentText
      );


    if (!stayInfo) {

      return {
        level: "repeat",
        message:
          "Please write a reasonable length of stay, for example 4 days or 2 nights."
      };

    }


    if (
      stayInfo.number < 1
      ||
      stayInfo.number > 365
    ) {

      return {
        level: "repeat",
        message:
          "Please enter a reasonable length of stay."
      };

    }


    if (
      containsAny(
        text,
        [
          "i'm staying",
          "i am staying",
          "i'll stay",
          "i will stay",
          "i'm going to stay",
          "i am going to stay",
          "we're staying",
          "we are staying"
        ]
      )
    ) {

      return {
        level: "excellent",
        value:
          stayInfo.value
      };

    }


    return {
      level: "good",
      value:
        stayInfo.value
    };
  }


  // --------------------------------------------------
  // TOURIST: THANKS
  // --------------------------------------------------

  if (
    task.type === "thanks"
  ) {

    if (
      containsAny(
        text,
        [
          "thank you",
          "thanks",
          "thank you very much",
          "thanks a lot"
        ]
      )
    ) {

      if (
        wordCount >= 3
      ) {

        return {
          level: "excellent",
          value:
            studentText
        };

      }


      return {
        level: "good",
        value:
          studentText
      };

    }


    return {
      level: "repeat",
      message:
        "Please thank the travel agent."
    };
  }


  // ==================================================
  // AGENT QUESTIONS
  // ==================================================


  // --------------------------------------------------
  // ASK ACTIVITY
  // --------------------------------------------------

  if (
    task.type === "askActivity"
  ) {

    if (
      text.includes("?")
      ||
      containsAny(
        text,
        [
          "what would you like to do",
          "what do you want to do",
          "what would you like",
          "what do you like to do",
          "what activity"
        ]
      )
    ) {

      if (
        containsAny(
          text,
          [
            "what would you like to do",
            "what do you want to do"
          ]
        )
      ) {

        return {
          level: "excellent"
        };

      }


      return {
        level: "good"
      };

    }


    return {
      level: "repeat",
      message:
        "Ask the tourist what they would like to do."
    };
  }


  // --------------------------------------------------
  // ASK ACCOMMODATION
  // --------------------------------------------------

  if (
    task.type === "askAccommodation"
  ) {

    if (
      containsAny(
        text,
        [
          "where would you like to stay",
          "where do you want to stay",
          "where will you stay",
          "where are you staying",
          "what accommodation"
        ]
      )
    ) {

      if (
        text.includes("where")
        &&
        text.includes("stay")
        &&
        wordCount >= 5
      ) {

        return {
          level: "excellent"
        };

      }


      return {
        level: "good"
      };

    }


    return {
      level: "repeat",
      message:
        "Ask the tourist where they would like to stay."
    };
  }


  // --------------------------------------------------
  // ASK ROOM
  // --------------------------------------------------

  if (
    task.type === "askRoom"
  ) {

    if (
      text.includes("room")
      &&
      containsAny(
        text,
        [
          "what",
          "which",
          "kind",
          "type"
        ]
      )
    ) {

      if (
        containsAny(
          text,
          [
            "what kind of room",
            "what type of room",
            "which room would you like"
          ]
        )
      ) {

        return {
          level: "excellent"
        };

      }


      return {
        level: "good"
      };

    }


    return {
      level: "repeat",
      message:
        "Ask the tourist what kind of room they would like."
    };
  }


  // --------------------------------------------------
  // ASK STAY
  // --------------------------------------------------

  if (
    task.type === "askStay"
  ) {

    if (
      containsAny(
        text,
        [
          "how long",
          "how many days",
          "how many nights",
          "length of stay"
        ]
      )
    ) {

      if (
        text.includes("how long")
        &&
        containsAny(
          text,
          [
            "stay",
            "staying"
          ]
        )
      ) {

        return {
          level: "excellent"
        };

      }


      return {
        level: "good"
      };

    }


    return {
      level: "repeat",
      message:
        "Ask the tourist how long they are staying."
    };
  }


  // --------------------------------------------------
  // AGENT GIVES PRICE
  // --------------------------------------------------

  if (
    task.type === "givePrice"
  ) {

    const priceInfo =
      extractPrice(
        studentText
      );


    if (!priceInfo) {

      return {
        level: "repeat",
        message:
          "Please give a reasonable room price, for example $50 a night."
      };

    }


    if (
      priceInfo.number <= 0
      ||
      priceInfo.number > 10000
    ) {

      return {
        level: "repeat",
        message:
          "Please enter a reasonable room price."
      };

    }


    if (
      containsAny(
        text,
        [
          "the room is",
          "it is",
          "it costs",
          "the price is"
        ]
      )
      &&
      containsAny(
        text,
        [
          "night",
          "per night",
          "a night"
        ]
      )
    ) {

      return {
        level: "excellent",
        value:
          priceInfo.value
      };

    }


    return {
      level: "good",
      value:
        priceInfo.value
    };
  }


  // --------------------------------------------------
  // CONFIRM BOOKING
  // --------------------------------------------------

  if (
    task.type === "confirmBooking"
  ) {

    if (
      text.includes("book")
      &&
      containsAny(
        text,
        [
          "can",
          "will",
          "okay",
          "sure"
        ]
      )
    ) {

      if (
        containsAny(
          text,
          [
            "i can book it for you",
            "i will book it for you",
            "i'll book it for you"
          ]
        )
      ) {

        return {
          level: "excellent"
        };

      }


      return {
        level: "good"
      };

    }


    return {
      level: "repeat",
      message:
        "Tell the tourist that you can book the tour."
    };
  }


  return repeatResult();
}


// ======================================================
// SAVE STUDENT'S OWN INFORMATION
// ======================================================

function saveStudentChoice(
  type,
  studentText,
  result
) {

  const value =
    result.value ||
    cleanStudentValue(
      studentText
    );


  if (
    type === "destination"
  ) {

    studentChoices.destination =
      value;

  }


  if (
    type === "activity"
  ) {

    studentChoices.activity =
      value;

  }


  if (
    type === "accommodation"
  ) {

    studentChoices.accommodation =
      value;

  }


  if (
    type === "room"
  ) {

    studentChoices.room =
      value;

  }


  if (
    type === "stay"
  ) {

    studentChoices.stay =
      value;

  }


  if (
    type === "givePrice"
  ) {

    studentChoices.price =
      value;

  }
}


// ======================================================
// SUCCESS FEEDBACK
// ======================================================

function showSuccessFeedback(
  level,
  studentText,
  task,
  result
) {

  const title =
    level === "excellent"
      ? "🌟 Excellent!"
      : "👍 Good!";


  if (
    level === "excellent"
  ) {

    playExcellentFeedback();

  }
  else {

    playGoodFeedback();

  }


  let betterSentence = "";


  if (
    level === "good"
  ) {

    betterSentence = `

      <p>
        A natural full sentence:
      </p>

      <p class="model-answer">

        <strong>
          ${createFlexibleModel(
            task,
            result
          )}
        </strong>

      </p>

    `;

  }


  let aiFollowUp = "";


  if (
    currentStudentRole === "agent"
    &&
    task.aiAfter
  ) {

    aiFollowUp = `

      <div class="ai-follow-up">

        <p>

          🧳
          <strong>
            AI Tourist:
          </strong>

          ${task.aiAfter}

        </p>

      </div>

    `;

  }


  document
    .getElementById("feedback")
    .innerHTML = `

      <div class="success-feedback">

        <h3>
          ${title}
        </h3>


        <p class="student-response">

          <strong>
            You:
          </strong>

          ${escapeHTML(studentText)}

        </p>


        ${betterSentence}

        ${aiFollowUp}


        <button
          class="continue-button"
          onclick="nextWriteStep()">

          ${
            conversationStep
            <
            getCurrentTasks().length - 1

              ? "Continue ➜"

              : "Finish 🎉"
          }

        </button>

      </div>

    `;
}


// ======================================================
// CREATE A BETTER SENTENCE USING STUDENT'S ANSWER
// ======================================================

function createFlexibleModel(
  task,
  result
) {

  const value =
    result.value;


  if (
    task.type === "destination"
    &&
    value
  ) {

    return `I'd like to go to ${value}.`;

  }


  if (
    task.type === "activity"
    &&
    value
  ) {

    return capitalizeFirst(
      value
    ) + ".";

  }


  if (
    task.type === "accommodation"
    &&
    value
  ) {

    return `I'd like to stay at a ${value}.`;

  }


  if (
    task.type === "room"
    &&
    value
  ) {

    return `I'd like a ${value}, please.`;

  }


  if (
    task.type === "stay"
    &&
    value
  ) {

    return `I'm staying for ${value}.`;

  }


  if (
    task.type === "givePrice"
    &&
    value
  ) {

    return `The room is ${value} a night.`;

  }


  return task.model;
}


// ======================================================
// LOCK ANSWER AFTER SUCCESS
// ======================================================

function lockCurrentAnswer() {

  const input =
    document.getElementById(
      "studentAnswer"
    );


  const sendButton =
    document.getElementById(
      "sendAnswerButton"
    );


  if (input) {

    input.disabled = true;

  }


  if (sendButton) {

    sendButton.disabled = true;

    sendButton.textContent =
      "✓ Answer accepted";

  }
}


// ======================================================
// REPEAT
// ======================================================

function showRepeatFeedback(
  message
) {

  playRepeatFeedback();


  const feedback =
    document.getElementById(
      "feedback"
    );


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
// IDEAS
// ======================================================

function showIdeas() {

  const tasks =
    getCurrentTasks();


  const task =
    tasks[conversationStep];


  const ideaArea =
    document.getElementById(
      "ideaArea"
    );


  if (!ideaArea) {
    return;
  }


  ideaArea.innerHTML = `

    <div class="idea-panel">

      <h3>
        💡 Ideas
      </h3>


      <p>
        These are examples only.
        You can also write your own
        reasonable answer.
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
    conversationStep
    <
    tasks.length - 1
  ) {

    conversationStep++;

    currentStepCompleted = false;

    showWriteStep();

  }

  else {

    showWriteResult();

  }
}


// ======================================================
// RESULTS
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

            ${Math.min(
              conversationScore,
              total
            )}

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

          Sample tour:

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


  window.setTimeout(
    function () {

      speakText(
        "Great work! You completed the writing practice."
      );

    },
    300
  );
}


// ======================================================
// FLEXIBLE HELPER FUNCTIONS
// ======================================================

function containsAny(
  text,
  choices
) {

  return choices.some(
    function (choice) {

      return text.includes(
        normalizeText(choice)
      );

    }
  );
}


function findFirstMatch(
  text,
  choices
) {

  return choices.find(
    function (choice) {

      return text.includes(
        normalizeText(choice)
      );

    }
  ) || "";
}


function repeatResult() {

  return {

    level: "repeat",

    message:
      "Try again, or press Idea for help."

  };
}


// ======================================================
// PLACE ANSWER
// ======================================================

function looksLikePlaceAnswer(
  originalText
) {

  const text =
    normalizeText(
      originalText
    );


  const words =
    text
      .split(" ")
      .filter(Boolean);


  if (
    words.length < 1
    ||
    words.length > 7
  ) {

    return false;

  }


  const badWords = [

    "room",
    "hotel",
    "homestay",
    "hostel",
    "resort",
    "days",
    "nights",
    "dollars",
    "football",
    "book",
    "price"

  ];


  if (
    containsAny(
      text,
      badWords
    )
  ) {

    return false;

  }


  return true;
}


// ======================================================
// UNRELATED ANSWERS
// ======================================================

function containsUnrelatedAnswer(
  text
) {

  const unrelated = [

    "i don't know",
    "i do not know",
    "nothing",
    "no idea",
    "football"

  ];


  return containsAny(
    text,
    unrelated
  );
}


// ======================================================
// EXTRACT DESTINATION
// ======================================================

function extractAfterDestinationPhrase(
  text
) {

  const patterns = [

    /i['’]?d like to go to\s+(.+)/i,

    /i would like to go to\s+(.+)/i,

    /i want to go to\s+(.+)/i,

    /i['’]?d like to visit\s+(.+)/i,

    /i want to visit\s+(.+)/i

  ];


  for (
    const pattern of patterns
  ) {

    const match =
      text.match(pattern);


    if (
      match
      &&
      match[1]
    ) {

      return cleanStudentValue(
        match[1]
      );

    }
  }


  return cleanStudentValue(
    text
  );
}


// ======================================================
// EXTRACT STAY
// ======================================================

function extractStay(text) {

  const normalized =
    normalizeText(text);


  const numberWords = {

    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    fourteen: 14

  };


  let match =
    normalized.match(
      /(\d+)\s*(day|days|night|nights|week|weeks)/
    );


  if (match) {

    const number =
      Number(match[1]);


    return {

      number: number,

      value:
        `${match[1]} ${match[2]}`

    };
  }


  for (
    const word in numberWords
  ) {

    const regex =
      new RegExp(
        `\\b${word}\\s+(day|days|night|nights|week|weeks)\\b`
      );


    const wordMatch =
      normalized.match(
        regex
      );


    if (wordMatch) {

      return {

        number:
          numberWords[word],

        value:
          `${word} ${wordMatch[1]}`

      };
    }
  }


  return null;
}


// ======================================================
// EXTRACT PRICE
// ======================================================

function extractPrice(text) {

  const normalized =
    String(text)
      .toLowerCase()
      .trim();


  let match =
    normalized.match(
      /\$\s*(\d+(?:\.\d{1,2})?)/
    );


  if (!match) {

    match =
      normalized.match(
        /(\d+(?:\.\d{1,2})?)\s*(?:dollar|dollars|usd)/
      );

  }


  if (!match) {
    return null;
  }


  const number =
    Number(match[1]);


  return {

    number: number,

    value:
      `$${match[1]}`

  };
}


// ======================================================
// CLEAN STUDENT VALUE
// ======================================================

function cleanStudentValue(text) {

  return String(text)
    .trim()
    .replace(/[.!?]+$/g, "");
}


// ======================================================
// RESET STUDENT CHOICES
// ======================================================

function resetStudentChoices() {

  studentChoices = {

    destination: "",

    activity: "",

    accommodation: "",

    room: "",

    stay: "",

    price: ""

  };
}


// ======================================================
// TEXT TO SPEECH
// KEEPING THE WORKING LISTEN SYSTEM
// ======================================================

let englishVoice = null;


function loadEnglishVoice() {

  if (
    !("speechSynthesis" in window)
  ) {

    return;

  }


  const voices =
    window
      .speechSynthesis
      .getVoices();


  if (
    !voices
    ||
    voices.length === 0
  ) {

    return;

  }


  englishVoice =
    voices.find(
      function (voice) {

        return (
          voice.lang === "en-US"
        );

      }
    );


  if (!englishVoice) {

    englishVoice =
      voices.find(
        function (voice) {

          return voice.lang
            .toLowerCase()
            .startsWith("en");

        }
      );

  }
}


loadEnglishVoice();


if (
  "speechSynthesis" in window
) {

  window
    .speechSynthesis
    .addEventListener(
      "voiceschanged",
      loadEnglishVoice
    );
}


// ======================================================
// SPEAK
// ======================================================

function speakText(text) {

  if (
    !("speechSynthesis" in window)
  ) {

    return;

  }


  const cleanText =
    String(
      text || ""
    ).trim();


  if (!cleanText) {
    return;
  }


  const synth =
    window.speechSynthesis;


  synth.cancel();


  const utterance =
    new SpeechSynthesisUtterance(
      cleanText
    );


  utterance.lang =
    "en-US";

  utterance.rate =
    0.82;

  utterance.pitch =
    1;

  utterance.volume =
    1;


  if (englishVoice) {

    utterance.voice =
      englishVoice;

  }


  window.setTimeout(
    function () {

      synth.speak(
        utterance
      );

    },
    180
  );
}


// ======================================================
// LISTEN AGAIN
// ======================================================

function listenAgain() {

  const textToRead =
    String(
      currentListenText || ""
    ).trim();


  if (!textToRead) {
    return;
  }


  if (
    !("speechSynthesis" in window)
  ) {

    return;

  }


  const synth =
    window.speechSynthesis;


  synth.cancel();


  window.setTimeout(
    function () {

      const replay =
        new SpeechSynthesisUtterance(
          textToRead
        );


      replay.lang =
        "en-US";

      replay.rate =
        0.82;

      replay.pitch =
        1;

      replay.volume =
        1;


      if (englishVoice) {

        replay.voice =
          englishVoice;

      }


      synth.speak(
        replay
      );

    },
    250
  );
}


// ======================================================
// AUDIO FEEDBACK
// ======================================================

let feedbackAudioContext =
  null;


function getAudioContext() {

  try {

    const AudioContextClass =
      window.AudioContext
      ||
      window.webkitAudioContext;


    if (!AudioContextClass) {

      return null;

    }


    if (
      !feedbackAudioContext
    ) {

      feedbackAudioContext =
        new AudioContextClass();

    }


    if (
      feedbackAudioContext.state
      ===
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


  oscillator.type =
    "sine";


  oscillator.frequency.value =
    frequency;


  const start =
    context.currentTime
    +
    delay;


  const finish =
    start
    +
    duration;


  gain.gain.setValueAtTime(
    0.0001,
    start
  );


  gain.gain
    .exponentialRampToValueAtTime(
      0.10,
      start + 0.02
    );


  gain.gain
    .exponentialRampToValueAtTime(
      0.0001,
      finish
    );


  oscillator.start(
    start
  );


  oscillator.stop(
    finish + 0.03
  );
}


// ======================================================
// EXCELLENT
// ======================================================

function playExcellentFeedback() {

  playTone(
    523,
    0.12,
    0
  );

  playTone(
    659,
    0.12,
    0.14
  );

  playTone(
    784,
    0.20,
    0.28
  );


  window.setTimeout(
    function () {

      speakText(
        "Excellent!"
      );

    },
    650
  );
}


// ======================================================
// GOOD
// ======================================================

function playGoodFeedback() {

  playTone(
    523,
    0.13,
    0
  );

  playTone(
    659,
    0.18,
    0.15
  );


  window.setTimeout(
    function () {

      speakText(
        "Good!"
      );

    },
    500
  );
}


// ======================================================
// REPEAT
// ======================================================

function playRepeatFeedback() {

  playTone(
    440,
    0.14,
    0
  );

  playTone(
    330,
    0.20,
    0.17
  );


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
// NORMALIZE
// ======================================================

function normalizeText(text) {

  return String(
    text || ""
  )
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
    document.createElement(
      "div"
    );


  div.textContent =
    String(text);


  return div.innerHTML;
}


// ======================================================
// CAPITALIZE
// ======================================================
// ======================================================
// DISPLAY TITLE
// Use country as the main screen title.
// Destination remains sample tour information.
// ======================================================

function getTourTitle() {

  if (!currentTour) {
    return "Booking a Tour";
  }

  return currentTour.country;
}
function capitalizeFirst(text) {

  if (!text) {
    return "";
  }


  return (
    text
      .charAt(0)
      .toUpperCase()
    +
    text.slice(1)
  );
}


// ======================================================
// RESET
// ======================================================

function resetConversation() {

  currentTour = null;

  currentActivity =
    "write";

  currentStudentRole =
    null;

  conversationStep =
    0;

  conversationScore =
    0;

  currentStepCompleted =
    false;

  currentListenText =
    "";


  resetStudentChoices();


  if (
    "speechSynthesis"
    in window
  ) {

    window
      .speechSynthesis
      .cancel();

  }
}


// ======================================================
// COMING SOON
// ======================================================

function showChooseComingSoon() {

  document.querySelector(
    "main"
  ).innerHTML = `

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

  document.querySelector(
    "main"
  ).innerHTML = `

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
// SIMPLE WRITE - BOOK A TOUR
// ======================================================

function startSimpleWrite() {

  currentListenText = "";

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        ✍️ WRITE
      </div>

      <h2>
        ✈️ BOOK A TOUR
      </h2>

      <div class="mission">

        <h3>
          🎯 Your Mission
        </h3>

        <p>
          Practice booking a tour in English.
        </p>

        <p>
          You will have a 10-step conversation.
        </p>

      </div>

      <div class="idea-panel">

        <strong>
          💡 Remember
        </strong>

        <p>
          You can write your own reasonable answers.
          You do not have to copy the sample answers.
        </p>

      </div>

      <button
        type="button"
        class="continue-button"
        id="simpleWriteStartButton">
        Start Conversation ➜
      </button>

      <div class="back-area">

        <button
          type="button"
          class="back-button"
          onclick="openBookTour()">
          ← Back to BOOK A TOUR
        </button>

      </div>

    </section>

  `;


  document
    .getElementById("simpleWriteStartButton")
    .addEventListener(
      "click",
      showSimpleWriteRoleSelection
    );

}

// ======================================================
// SIMPLE WRITE - 10 STEP CONVERSATION
// ======================================================

const simpleWriteTasks = [

  {
    ai: "Hello! How can I help you?",
    model: "I'd like to book a tour, please.",
    ideas: [
      "book a tour",
      "like to book a tour",
      "I'd like to book a tour, please."
    ]
  },

  {
    ai: "Where would you like to go?",
    model: "I'd like to go to Da Nang, Viet Nam.",
    ideas: [
      "Da Nang",
      "go to Da Nang, Viet Nam",
      "I'd like to go to Da Nang, Viet Nam."
    ]
  },

  {
    ai: "When would you like to go?",
    model: "I'd like to go next weekend.",
    ideas: [
      "next weekend",
      "go next weekend",
      "I'd like to go next weekend."
    ]
  },

  {
    ai: "How many people are going?",
    model: "Two people are going.",
    ideas: [
      "two people",
      "two people going",
      "Two people are going."
    ]
  },

  {
    ai: "What would you like to do there?",
    model: "I'd like to visit Ba Na Hills.",
    ideas: [
      "Ba Na Hills",
      "visit Ba Na Hills",
      "I'd like to visit Ba Na Hills."
    ]
  },

  {
    ai: "Where would you like to stay?",
    model: "I'd like to stay at a hotel.",
    ideas: [
      "hotel",
      "stay at a hotel",
      "I'd like to stay at a hotel."
    ]
  },

  {
    ai: "What kind of room would you like?",
    model: "I'd like a double room, please.",
    ideas: [
      "double room",
      "a double room",
      "I'd like a double room, please."
    ]
  },

  {
    ai: "How long would you like to stay?",
    model: "I'd like to stay for three days.",
    ideas: [
      "three days",
      "stay for three days",
      "I'd like to stay for three days."
    ]
  },

  {
    ai: "The tour is $150 per person. Is that okay?",
    model: "Yes, that's okay.",
    ideas: [
      "yes",
      "that's okay",
      "Yes, that's okay."
    ]
  },

  {
    ai: "Great. I can book the tour for you.",
    model: "Thank you very much.",
    ideas: [
      "thanks",
      "thank you",
      "Thank you very much."
    ]
  }

];


let simpleWriteStep = 0;

function startSimpleWriteConversation() {

  simpleWriteStep = 0;

  showSimpleWriteStep();

}
function showSimpleWriteStep() {

  const task = simpleWriteTasks[simpleWriteStep];

  if (!task) {
    return;
  }

  currentListenText = task.ai;

  const progress =
    ((simpleWriteStep + 1) / simpleWriteTasks.length) * 100;

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        ✍️ WRITE ${simpleWriteStep + 1} / ${simpleWriteTasks.length}
      </div>

      <div class="progress-track">

        <div
          class="progress-bar"
          style="width:${progress}%">
        </div>

      </div>

      <h2>
        ✈️ BOOK A TOUR
      </h2>

      <div class="conversation-role-line">

        <strong>YOU:</strong>
        🧳 Tourist

        <span>•</span>

        <strong>AI:</strong>
        👩‍💼 Travel Agent

      </div>

      <div class="ai-message">

        <div class="speaker-label">

          👩‍💼

          <strong>
            AI Travel Agent
          </strong>

        </div>

        <p>
          ${task.ai}
        </p>

        <button
          type="button"
          class="listen-button"
          id="simpleListenButton">

          🔊 Listen

        </button>

      </div>

      <div class="write-box">

        <h3>
          ✍️ Your answer
        </h3>

        <input
          id="simpleStudentAnswer"
          type="text"
          autocomplete="off"
          placeholder="Write your own English answer..."
        >

        <button
          type="button"
          class="check-button"
          id="simpleSendButton">

          ✓ Send Answer

        </button>

        <button
          type="button"
          class="idea-button"
          id="simpleIdeaButton">

          💡 Idea

        </button>

      </div>

      <div id="simpleIdeaArea">
      </div>

      <div
        id="simpleFeedback"
        class="feedback-area">
      </div>

      <div class="back-area">

        <button
          class="back-button"
          onclick="startSimpleWrite()">

          ← Back

        </button>

      </div>

    </section>

  `;


  document
    .getElementById("simpleListenButton")
    .addEventListener(
      "click",
      function () {

        currentListenText = task.ai;

        listenAgain();

      }
    );


  document
    .getElementById("simpleIdeaButton")
    .addEventListener(
      "click",
      function () {

        document
          .getElementById("simpleIdeaArea")
          .innerHTML = `

            <div class="idea-panel">

              <h3>
                💡 Ideas
              </h3>

              <p>
                <strong>Idea 1:</strong>
                ${task.ideas[0]}
              </p>

              <p>
                <strong>Idea 2:</strong>
                ${task.ideas[1]}
              </p>

              <p>
                <strong>Idea 3:</strong>
                ${task.ideas[2]}
              </p>

            </div>

          `;

      }
    );


 document
  .getElementById("simpleSendButton")
  .addEventListener(
    "click",
    checkSimpleWriteAnswer
  );
  document
    .getElementById("simpleStudentAnswer")
    .focus();


  speakText(task.ai);

}

// ======================================================
// SIMPLE WRITE - FLEXIBLE CHECKER
// ======================================================

function checkSimpleWriteAnswer() {

  const input =
    document.getElementById("simpleStudentAnswer");

  if (!input) return;

  const studentText = input.value.trim();

  if (!studentText) {
    showSimpleRepeat(
      "Please write an answer first."
    );
    return;
  }

  const result =
    evaluateSimpleWriteAnswer(
      simpleWriteStep,
      studentText
    );

  if (result === "excellent") {

    input.disabled = true;

    document.getElementById(
      "simpleSendButton"
    ).disabled = true;

    playExcellentFeedback();

    showSimpleSuccess(
      "🌟 Excellent!",
      studentText
    );

    return;
  }


  if (result === "good") {

    input.disabled = true;

    document.getElementById(
      "simpleSendButton"
    ).disabled = true;

    playGoodFeedback();

    showSimpleSuccess(
      "👍 Good!",
      studentText
    );

    return;
  }


  showSimpleRepeat(
    "Try again, or press Idea for help."
  );

}


// ======================================================
// CHECK EACH OF THE 10 STEPS
// ======================================================

function evaluateSimpleWriteAnswer(
  step,
  answer
) {

  const text =
    normalizeText(answer);


  // STEP 1 - BOOK A TOUR
  if (step === 0) {

    if (
      text.includes("book") &&
      text.includes("tour")
    ) {

      if (
        text.includes("i'd like") ||
        text.includes("i would like") ||
        text.includes("i want")
      ) {
        return "excellent";
      }

      return "good";
    }

    return "repeat";
  }


  // STEP 2 - DESTINATION
  if (step === 1) {

    if (
      text.includes("go to") ||
      text.includes("visit")
    ) {

      if (
        text.includes("i'd like") ||
        text.includes("i would like") ||
        text.includes("i want")
      ) {
        return "excellent";
      }

      return "good";
    }

    // Accept a short place name.
    if (
      text.split(" ").length <= 5 &&
      text.length >= 2
    ) {
      return "good";
    }

    return "repeat";
  }


  // STEP 3 - WHEN
  if (step === 2) {

    const timeWords = [
      "today",
      "tomorrow",
      "weekend",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
      "week",
      "month",
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    ];

    if (
      timeWords.some(
        word => text.includes(word)
      )
    ) {

      if (
        text.includes("i'd like") ||
        text.includes("i would like") ||
        text.includes("i want") ||
        text.includes("i'm going") ||
        text.includes("i am going")
      ) {
        return "excellent";
      }

      return "good";
    }

    return "repeat";
  }


  // STEP 4 - NUMBER OF PEOPLE
  if (step === 3) {

    const peopleWords = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ];

    const hasNumber =
      peopleWords.some(
        word => text.includes(word)
      );

    if (hasNumber) {

      if (
        text.includes("people") ||
        text.includes("person")
      ) {
        return "excellent";
      }

      return "good";
    }

    return "repeat";
  }


  // STEP 5 - ACTIVITY
  if (step === 4) {

    const activityWords = [
      "visit",
      "go",
      "see",
      "swim",
      "swimming",
      "shop",
      "shopping",
      "eat",
      "try",
      "explore",
      "walk",
      "relax",
      "sightseeing"
    ];

    if (
      activityWords.some(
        word => text.includes(word)
      )
    ) {

      if (
        text.includes("i'd like") ||
        text.includes("i would like") ||
        text.includes("i want")
      ) {
        return "excellent";
      }

      return "good";
    }

    return "repeat";
  }


  // STEP 6 - ACCOMMODATION
  if (step === 5) {

    const places = [
      "hotel",
      "homestay",
      "hostel",
      "resort",
      "guesthouse",
      "guest house",
      "apartment",
      "motel",
      "villa"
    ];

    if (
      places.some(
        place => text.includes(place)
      )
    ) {

      if (
        text.includes("stay")
      ) {
        return "excellent";
      }

      return "good";
    }

    return "repeat";
  }


  // STEP 7 - ROOM
  if (step === 6) {

    if (
      text.includes("room") ||
      text.includes("suite")
    ) {

      if (
        text.includes("i'd like") ||
        text.includes("i would like") ||
        text.includes("i want")
      ) {
        return "excellent";
      }

      return "good";
    }

    return "repeat";
  }


  // STEP 8 - LENGTH OF STAY
  if (step === 7) {

    const stayPattern =
      /\b(one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+(day|days|night|nights|week|weeks)\b/;

    if (
      stayPattern.test(text)
    ) {

      if (
        text.includes("stay")
      ) {
        return "excellent";
      }

      return "good";
    }

    return "repeat";
  }


  // STEP 9 - ACCEPT PRICE
  if (step === 8) {

    if (
      text.includes("yes") ||
      text.includes("okay") ||
      text.includes("ok") ||
      text.includes("that's fine") ||
      text.includes("that is fine")
    ) {

      if (
        text.includes("yes") &&
        (
          text.includes("okay") ||
          text.includes("fine")
        )
      ) {
        return "excellent";
      }

      return "good";
    }

    return "repeat";
  }


  // STEP 10 - THANK YOU
  if (step === 9) {

    if (
      text.includes("thank you") ||
      text.includes("thanks")
    ) {

      if (
        text.includes("very much") ||
        text.includes("a lot")
      ) {
        return "excellent";
      }

      return "good";
    }

    return "repeat";
  }


  return "repeat";
}


// ======================================================
// SUCCESS
// ======================================================

function showSimpleSuccess(
  title,
  studentText
) {

  const task =
    simpleWriteTasks[simpleWriteStep];

  document
    .getElementById("simpleFeedback")
    .innerHTML = `

      <div class="success-feedback">

        <h3>
          ${title}
        </h3>

        <p class="student-response">

          <strong>You:</strong>
          ${escapeHTML(studentText)}

        </p>

        <p>
          Sample answer:
        </p>

        <p class="model-answer">

          <strong>
            ${task.model}
          </strong>

        </p>

        <button
          class="continue-button"
          onclick="nextSimpleWriteStep()">

          ${
            simpleWriteStep <
            simpleWriteTasks.length - 1

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

function showSimpleRepeat(message) {

  playRepeatFeedback();

  document
    .getElementById("simpleFeedback")
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
// NEXT STEP
// ======================================================

function nextSimpleWriteStep() {

  if (
    simpleWriteStep <
    simpleWriteTasks.length - 1
  ) {

    simpleWriteStep++;

    showSimpleWriteStep();

    return;
  }

  showSimpleWriteResult();

}


// ======================================================
// RESULT
// ======================================================

function showSimpleWriteResult() {

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
          🏆 BOOK A TOUR completed!
        </h3>

        <p>
          You completed all 10 steps
          of the conversation.
        </p>

      </div>

      <button
        class="continue-button"
        onclick="startSimpleWriteConversation()">

        🔄 Practice Again

      </button>

      <div class="back-area">

        <button
          class="back-button"
          onclick="openBookTour()">

          🏠 BOOK A TOUR

        </button>

      </div>

    </section>

  `;

  window.setTimeout(
    function () {

      speakText(
        "Great work! You completed the writing practice."
      );

    },
    300
  );

}

// ======================================================
// SIMPLE WRITE - CHOOSE ROLE
// ======================================================

let simpleWriteRole = "tourist";

function showSimpleWriteRoleSelection() {

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        ✍️ WRITE
      </div>

      <h2>
        ✈️ BOOK A TOUR
      </h2>

      <div class="mission">

        <h3>
          👤 Choose Your Role
        </h3>

        <p>
          Choose a role for the conversation.
        </p>

      </div>

      <div class="role-choice-container">

        <div class="role-choice-card">

          <div class="role-big-icon">
            🧳
          </div>

          <h3>
            Tourist
          </h3>

          <p>
            You are the Tourist.
          </p>

          <p>
            AI will be the Travel Agent.
          </p>

          <button
            class="continue-button"
            onclick="selectSimpleWriteRole('tourist')">

            Choose Tourist

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
            You are the Travel Agent.
          </p>

          <p>
            AI will be the Tourist.
          </p>

          <button
            class="continue-button"
            onclick="selectSimpleWriteRole('agent')">

            Choose Travel Agent

          </button>

        </div>

      </div>


      <div class="back-area">

        <button
          class="back-button"
          onclick="startSimpleWrite()">

          ← Back

        </button>

      </div>

    </section>

  `;

}


// ======================================================
// SELECT SIMPLE WRITE ROLE
// ======================================================

function selectSimpleWriteRole(role) {

    simpleWriteRole = role;

    if (role === "tourist") {

        startSimpleWriteConversation();

        return;

    }

    if (role === "agent") {

        startSimpleAgentWriteConversation();

        return;

    }

}

// ======================================================
// TEMPORARY AGENT SCREEN
// ======================================================

function showSimpleAgentComingSoon() {

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        ✍️ WRITE
      </div>

      <h2>
        ✈️ BOOK A TOUR
      </h2>

      <div class="role-status">

        <div class="role-status-box">

          <span>
            👩‍💼
          </span>

          <small>
            YOU
          </small>

          <strong>
            Travel Agent
          </strong>

        </div>

        <div class="role-switch">
          ↔
        </div>

        <div class="role-status-box">

          <span>
            🧳
          </span>

          <small>
            AI
          </small>

          <strong>
            Tourist
          </strong>

        </div>

      </div>


      <div class="mission">

        <h3>
          👩‍💼 Travel Agent
        </h3>

        <p>
          This role is ready for the next step.
        </p>

      </div>


      <button
        class="continue-button"
        onclick="showSimpleWriteRoleSelection()">

        ← Choose Another Role

      </button>

    </section>

  `;

}

// =====================================================
// SIMPLE WRITE - TRAVEL AGENT ROLE
// Student = Travel Agent
// AI = Tourist
// =====================================================

const simpleAgentWriteTasks = [

  {
    ai: "Hello. I'd like to book a tour, please.",
    ideas: [
      "Hello.",
      "Hello. How can I help you?",
      "Hello. How can I help you with your trip?"
    ]
  },

  {
    ai: "I'd like to go to Da Nang, Vietnam.",
    ideas: [
      "When?",
      "When would you like to go?",
      "Great. When would you like to go?"
    ]
  },

  {
    ai: "I'd like to go next month.",
    ideas: [
      "How long?",
      "How long would you like to stay?",
      "How long would you like to stay in Da Nang?"
    ]
  },

  {
    ai: "I'd like to stay for three days.",
    ideas: [
      "What would you like to do?",
      "What would you like to do there?",
      "What would you like to do in Da Nang?"
    ]
  },

  {
    ai: "I'd like to visit Ba Na Hills.",
    ideas: [
      "Where would you like to stay?",
      "Where would you like to stay in Da Nang?",
      "Okay. Where would you like to stay?"
    ]
  },

  {
    ai: "I'd like to stay at a hotel.",
    ideas: [
      "What room?",
      "What kind of room would you like?",
      "What kind of room would you like to book?"
    ]
  },

  {
    ai: "I'd like a double room, please.",
    ideas: [
      "It is $45 a night.",
      "The room is $45 a night.",
      "A double room is $45 a night. Is that okay?"
    ]
  },

  {
    ai: "Yes, that's fine.",
    ideas: [
      "Let me confirm.",
      "Let me confirm your booking.",
      "Let me confirm your booking information."
    ]
  },

  {
    ai: "Yes, that's correct.",
    ideas: [
      "I can book it for you.",
      "Okay. I can book it for you.",
      "Everything is correct. I can book it for you."
    ]
  },

  {
    ai: "Thank you very much.",
    ideas: [
      "You're welcome.",
      "You're welcome. Have a nice trip!",
      "You're welcome. Have a wonderful trip to Da Nang!"
    ]
  }

];


let simpleAgentWriteStep = 0;


// =====================================================
// START TRAVEL AGENT CONVERSATION
// =====================================================

function startSimpleAgentWriteConversation() {

  simpleAgentWriteStep = 0;

  showSimpleAgentWriteStep();

}


// =====================================================
// SHOW ONE TRAVEL AGENT STEP
// =====================================================

function showSimpleAgentWriteStep() {

  const task = simpleAgentWriteTasks[simpleAgentWriteStep];

  if (!task) {

    showSimpleAgentWriteResult();

    return;

  }

  currentListenText = task.ai;

  const progress =
    ((simpleAgentWriteStep + 1) / simpleAgentWriteTasks.length) * 100;

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        ✍️ WRITE ${simpleAgentWriteStep + 1} / ${simpleAgentWriteTasks.length}
      </div>

      <div class="progress-track">
        <div
          class="progress-bar"
          style="width:${progress}%">
        </div>
      </div>

      <h2>
        ✈️ BOOK A TOUR
      </h2>

      <div class="conversation-role-line">

        <strong>YOU:</strong> 👩‍💼 Travel Agent

        &nbsp; • &nbsp;

        <strong>AI:</strong> 🧳 Tourist

      </div>

      <div class="ai-message">

        <div class="speaker-label">
          🧳 AI Tourist
        </div>

        <p>
          ${escapeHTML(task.ai)}
        </p>

        <button
          type="button"
          class="listen-button"
          id="simpleAgentListenButton">

          🔊 Listen

        </button>

      </div>


      <div class="write-box">

        <h3>
          ✍️ Your answer
        </h3>

        <input
          type="text"
          id="simpleAgentStudentAnswer"
          placeholder="Write your own English answer..."
          autocomplete="off"
        >

        <button
          type="button"
          class="check-button"
          id="simpleAgentSendButton">

          ✓ Send Answer

        </button>

        <button
          type="button"
          class="idea-button"
          id="simpleAgentIdeaButton">

          💡 Idea

        </button>

      </div>


      <div
        id="simpleAgentIdeaPanel"
        style="display:none;">
      </div>


      <div id="simpleAgentFeedback"></div>


      <div class="back-area">

        <button
          type="button"
          class="back-button"
          onclick="showSimpleWriteRoleSelection()">

          ← Change Role

        </button>

      </div>

    </section>

  `;


  document
    .getElementById("simpleAgentListenButton")
    .addEventListener("click", function () {

      currentListenText = task.ai;

      listenAgain();

    });


  document
    .getElementById("simpleAgentIdeaButton")
    .addEventListener("click", function () {

      showSimpleAgentIdeas();

    });


  document
    .getElementById("simpleAgentSendButton")
    .addEventListener("click", function () {

      checkSimpleAgentWriteAnswer();

    });


  const input =
    document.getElementById("simpleAgentStudentAnswer");

  input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

      checkSimpleAgentWriteAnswer();

    }

  });


  input.focus();

  speakText(task.ai);

}


// =====================================================
// IDEA
// =====================================================

function showSimpleAgentIdeas() {

  const task = simpleAgentWriteTasks[simpleAgentWriteStep];

  const panel =
    document.getElementById("simpleAgentIdeaPanel");

  if (!task || !panel) return;

  panel.style.display = "block";

  panel.innerHTML = `

    <div class="idea-panel">

      <h3>
        💡 Ideas
      </h3>

      <p>
        <strong>Idea 1:</strong>
        ${escapeHTML(task.ideas[0])}
      </p>

      <p>
        <strong>Idea 2:</strong>
        ${escapeHTML(task.ideas[1])}
      </p>

      <p>
        <strong>Idea 3:</strong>
        ${escapeHTML(task.ideas[2])}
      </p>

    </div>

  `;

}


// =====================================================
// CHECK TRAVEL AGENT ANSWER
// =====================================================

function checkSimpleAgentWriteAnswer() {

  const input =
    document.getElementById("simpleAgentStudentAnswer");

  if (!input) return;

  const studentText = input.value.trim();

  if (!studentText) {

    showSimpleAgentRepeat(
      "Please write an answer first."
    );

    return;

  }


  const task = simpleAgentWriteTasks[simpleAgentWriteStep];

  const result =
    evaluateSimpleAgentAnswer(
      studentText,
      simpleAgentWriteStep
    );


  if (!result.correct) {

    showSimpleAgentRepeat(
      "Check your English and try again."
    );

    return;

  }


  input.disabled = true;

  const sendButton =
    document.getElementById("simpleAgentSendButton");

  if (sendButton) {

    sendButton.disabled = true;

  }


  const feedback =
    document.getElementById("simpleAgentFeedback");


  if (result.level === "excellent") {

    feedback.innerHTML = `

      <div class="success-feedback">

        <h3>
          🌟 Excellent!
        </h3>

        <p>
          <strong>You:</strong>
          ${escapeHTML(studentText)}
        </p>

        <p class="model-answer">
          Natural answer:
          ${escapeHTML(task.ideas[2])}
        </p>

        <button
          type="button"
          class="continue-button"
          onclick="nextSimpleAgentWriteStep()">

          Continue ➜

        </button>

      </div>

    `;

    if (typeof playExcellentFeedback === "function") {

      playExcellentFeedback();

    } else {

      speakText("Excellent!");

    }

  } else {

    feedback.innerHTML = `

      <div class="success-feedback">

        <h3>
          👍 Good!
        </h3>

        <p>
          <strong>You:</strong>
          ${escapeHTML(studentText)}
        </p>

        <p class="model-answer">
          Try a full sentence:
          ${escapeHTML(task.ideas[2])}
        </p>

        <button
          type="button"
          class="continue-button"
          onclick="nextSimpleAgentWriteStep()">

          Continue ➜

        </button>

      </div>

    `;

    if (typeof playGoodFeedback === "function") {

      playGoodFeedback();

    } else {

      speakText("Good!");

    }

  }

}


// =====================================================
// FLEXIBLE RULE-BASED CHECKER
// =====================================================

function evaluateSimpleAgentAnswer(answer, step) {

  const text = normalizeText(answer);

  if (!text) {

    return {
      correct: false,
      level: "repeat"
    };

  }


  let correct = false;


  switch (step) {

    case 0:

      correct =
        text.includes("help") ||
        text.includes("hello") ||
        text.includes("hi");

      break;


    case 1:

      correct =
        text.includes("when") ||
        text.includes("what date");

      break;


    case 2:

      correct =
        text.includes("how long") ||
        text.includes("how many days") ||
        text.includes("how many nights");

      break;


    case 3:

      correct =
        text.includes("what") &&
        (
          text.includes("do") ||
          text.includes("visit") ||
          text.includes("activity")
        );

      break;


    case 4:

      correct =
        text.includes("where") &&
        (
          text.includes("stay") ||
          text.includes("hotel") ||
          text.includes("accommodation")
        );

      break;


    case 5:

      correct =
        text.includes("room");

      break;


    case 6:

      correct =
        (
          text.includes("$") ||
          text.includes("dollar") ||
          text.includes("45")
        ) &&
        (
          text.includes("night") ||
          text.includes("room") ||
          text.includes("cost") ||
          text.includes("price")
        );

      break;


    case 7:

      correct =
        text.includes("confirm") ||
        text.includes("booking") ||
        text.includes("information") ||
        text.includes("details");

      break;


    case 8:

      correct =
        text.includes("book") ||
        text.includes("booking") ||
        text.includes("reserve");

      break;


    case 9:

      correct =
        text.includes("welcome") ||
        text.includes("nice trip") ||
        text.includes("good trip") ||
        text.includes("wonderful trip");

      break;

  }


  if (!correct) {

    return {
      correct: false,
      level: "repeat"
    };

  }


  const wordCount =
    text.split(/\s+/).filter(Boolean).length;


  return {

    correct: true,

    level:
      wordCount >= 5
        ? "excellent"
        : "good"

  };

}


// =====================================================
// REPEAT
// =====================================================

function showSimpleAgentRepeat(message) {

  const feedback =
    document.getElementById("simpleAgentFeedback");

  if (!feedback) return;

  feedback.innerHTML = `

    <div class="repeat-feedback">

      <h3>
        🔄 Repeat, please.
      </h3>

      <p>
        ${escapeHTML(message)}
      </p>

      <p>
        You can press <strong>Idea</strong> for help.
      </p>

    </div>

  `;


  if (typeof playRepeatFeedback === "function") {

    playRepeatFeedback();

  } else {

    speakText("Repeat, please.");

  }

}


// =====================================================
// NEXT STEP
// =====================================================

function nextSimpleAgentWriteStep() {

  simpleAgentWriteStep++;

  if (
    simpleAgentWriteStep >=
    simpleAgentWriteTasks.length
  ) {

    showSimpleAgentWriteResult();

    return;

  }

  showSimpleAgentWriteStep();

}


// =====================================================
// FINISH
// =====================================================

function showSimpleAgentWriteResult() {

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        ✍️ WRITE
      </div>

      <h2>
        🎉 Conversation Complete!
      </h2>

      <div class="success-feedback">

        <h3>
          Great work!
        </h3>

        <p>
          You completed all 10 steps as the
          <strong>Travel Agent</strong>.
        </p>

        <p>
          AI was the <strong>Tourist</strong>.
        </p>

      </div>


      <div class="result-buttons">

        <button
          type="button"
          class="continue-button"
          onclick="startSimpleAgentWriteConversation()">

          🔄 Practice Again

        </button>

        <button
          type="button"
          class="back-button"
          onclick="showSimpleWriteRoleSelection()">

          👤 Change Role

        </button>

      </div>

    </section>

  `;

}

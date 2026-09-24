const startButton = document.getElementById("startButton");

startButton.addEventListener("click", openBookTour);


// ======================================================
// BOOK A TOUR - TOUR DATA
// ======================================================

const tours = [

  {
    id: 1,
    country: "Vietnam",
    destination: "Da Nang",
    activity: "visit Ba Na Hills",
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
    accommodation: "resort",
    room: "double room",
    price: "$85",
    stay: "4 days"
  }

];


// ======================================================
// MAIN PAGE - BOOK A TOUR
// ======================================================

function openBookTour() {

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">

      <div class="level">
        A1 • Travel English
      </div>

      <h2>
        ✈️ BOOK A TOUR
      </h2>

      <p>
        Practice English by booking a real-life trip.
      </p>


      <div class="mission">

        <h3>
          🎯 Your Mission
        </h3>

        <p>
          Practice a conversation between
          a Tourist and a Travel Agent.
        </p>

        <p>
          You can practice different destinations
          around the world.
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
            and practice pronunciation.
          </p>

          <button
            onclick="chooseActivity('speak')">

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

  if (activity === "speak") {

    showComingSoon();

    return;

  }

  showTourList(activity);

}


// ======================================================
// TOUR LIST
// ======================================================

function showTourList(activity) {

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

        ${
          activity === "choose"
          ? "👆 CHOOSE"
          : "✍️ WRITE"
        }

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

  const selectedTour =
    tours.find(
      tour =>
        tour.id === tourId
    );


  showSelectedTour(
    selectedTour,
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

  document.querySelector("main").innerHTML = `

    <section class="lesson-card">


      <div class="level">

        ${
          activity === "choose"
          ? "👆 CHOOSE"
          : "✍️ WRITE"
        }

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
        In the next step,
        you will choose your role.
      </p>


      <div class="role-preview">

        <div>

          <span>
            🧳
          </span>

          <strong>
            Tourist
          </strong>

        </div>


        <div>

          <span>
            👩‍💼
          </span>

          <strong>
            Travel Agent
          </strong>

        </div>

      </div>


      <button
        class="continue-button"
       onclick="showRoleSelection(${tour.id}, '${activity}')"
        Continue ➜

      </button>


      <div class="back-area">

        <button
          class="back-button"
          onclick="showTourList('${activity}')">

          ← Choose another tour

        </button>

      </div>


    </section>

  `;

}


// ======================================================
// ROLE PLACEHOLDER
// ======================================================

function roleComingNext() {

  alert(
    "Great! The next step will let the student choose Tourist or Travel Agent."
  );

}


// ======================================================
// SPEAK PLACEHOLDER
// ======================================================

function showComingSoon() {

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
          We will add microphone practice
          after Choose and Write
          are working correctly.
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
// SMALL HELPER
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

}// ======================================================
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


  document.querySelector("main").innerHTML = `

    <section class="lesson-card">


      <div class="level">
        🎭 CHOOSE YOUR ROLE
      </div>


      <h2>
        ✈️ ${tour.destination}
      </h2>


      <p>
        Choose the role you want
        to practice.
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

          <p class="ai-role-text">
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

          <p class="ai-role-text">
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
            tours.find(t => t.id === ${tour.id}),
            '${activity}'
          )">

          ← Back

        </button>

      </div>


    </section>

  `;

}


// ======================================================
// SAVE STUDENT ROLE
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
        ${
          activity === "choose"
            ? "👆 CHOOSE"
            : "✍️ WRITE"
        }
      </div>


      <h2>
        ✈️ ${tour.destination}
      </h2>


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
          <strong>
            Destination:
          </strong>

          ${tour.destination}
        </p>


        <p>
          You are the
          <strong>
            ${studentRoleName}
          </strong>.
        </p>


        <p>
          AI is the
          <strong>
            ${aiRoleName}
          </strong>.
        </p>

      </div>


      <p>
        The conversation will start
        in the next step.
      </p>


      <button
        class="continue-button"
        onclick="conversationComingNext()">

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
// CONVERSATION PLACEHOLDER
// ======================================================

function conversationComingNext() {

  alert(
    "Role selection works! We will build the conversation next."
  );

}

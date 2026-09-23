const startButton = document.getElementById("startButton");

startButton.addEventListener("click", startLesson);

function startLesson() {

  document.querySelector("main").innerHTML = `
    <section class="lesson-card">

      <div class="level">
        Lesson 1 • A1
      </div>

      <h2>✈️ Booking a Tour to Da Nang</h2>

      <div class="mission">
        <h3>🎭 Role Play</h3>

        <p>
          👩‍💼 <strong>AI:</strong> Travel Agent
        </p>

        <p>
          🧳 <strong>You:</strong> Tourist
        </p>
      </div>

      <h3>🎯 Your mission</h3>

      <p>
        Book a trip to Da Nang by talking with the travel agent.
      </p>

      <button id="beginConversation">
        🎤 Begin Conversation
      </button>

    </section>
  `;

  document
    .getElementById("beginConversation")
    .addEventListener("click", beginConversation);
}


function beginConversation() {

  document.querySelector("main").innerHTML = `
    <section class="lesson-card">

      <div class="level">
        Conversation 1 / 6
      </div>

      <h2>👩‍💼 Travel Agent</h2>

      <div class="mission">

        <p style="font-size:20px;">
          🔊 Good morning!
        </p>

        <p style="font-size:22px;">
          <strong>
            Where would you like to go?
          </strong>
        </p>

      </div>

      <button onclick="speakQuestion()">
        🔊 Listen
      </button>

      <br><br>

      <h3>Choose your answer:</h3>

      <button onclick="correctAnswer()">
        I'd like to go to Da Nang.
      </button>

      <br><br>

      <button onclick="wrongAnswer()">
        I like chicken.
      </button>

      <br><br>

      <button onclick="wrongAnswer()">
        I am sixteen years old.
      </button>

      <br><br>

      <button onclick="showHint()">
        💡 Hint
      </button>

      <div id="feedback"
           style="margin-top:20px;
                  font-size:18px;">
      </div>

    </section>
  `;
}


function speakQuestion() {

  const text =
    "Good morning. Where would you like to go?";

  const speech =
    new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";
  speech.rate = 0.85;

  window.speechSynthesis.speak(speech);
}


function correctAnswer() {

  document.getElementById("feedback").innerHTML = `
    <div class="mission">

      <h3>✅ Great job!</h3>

      <p>
        I'd like to go to Da Nang.
      </p>

      <button onclick="nextQuestion()">
        Continue ➜
      </button>

    </div>
  `;

  speakText(
    "Great! Da Nang is a beautiful city."
  );
}


function wrongAnswer() {

  document.getElementById("feedback").innerHTML = `
    <div class="mission">

      <h3>🙂 Try again</h3>

      <p>
        Think about the destination.
      </p>

    </div>
  `;
}


function showHint() {

  document.getElementById("feedback").innerHTML = `
    <div class="mission">

      <h3>💡 Hint</h3>

      <p>
        Look at the destination.
      </p>

      <p>
        I'd like to go to ______.
      </p>

    </div>
  `;
}


function nextQuestion() {

  document.querySelector("main").innerHTML = `
    <section class="lesson-card">

      <div class="level">
        Conversation 2 / 6
      </div>

      <h2>👩‍💼 Travel Agent</h2>

      <div class="mission">

        <p style="font-size:22px;">
          <strong>
            What would you like to do
            in Da Nang?
          </strong>
        </p>

      </div>

      <button onclick="speakText(
        'What would you like to do in Da Nang?'
      )">
        🔊 Listen
      </button>

      <br><br>

      <button onclick="activityCorrect()">
        I'd like to visit Ba Na Hills.
      </button>

      <br><br>

      <button onclick="wrongAnswer()">
        I'd like a double room.
      </button>

      <br><br>

      <button onclick="wrongAnswer()">
        Three days.
      </button>

      <br><br>

      <button onclick="activityHint()">
        💡 Hint
      </button>

      <div id="feedback"
           style="margin-top:20px;">
      </div>

    </section>
  `;

  speakText(
    "What would you like to do in Da Nang?"
  );
}


function activityCorrect() {

  document.getElementById("feedback").innerHTML = `
    <div class="mission">

      <h3>✅ Excellent!</h3>

      <p>
        I'd like to visit Ba Na Hills.
      </p>

      <p>
        🎉 You completed the first
        two conversation tasks.
      </p>

    </div>
  `;

  speakText(
    "Excellent! Ba Na Hills is a great choice."
  );
}


function activityHint() {

  document.getElementById("feedback").innerHTML = `
    <div class="mission">

      <h3>💡 Hint</h3>

      <p>
        Activity: Visit Ba Na Hills
      </p>

      <p>
        I'd like to visit ______.
      </p>

    </div>
  `;
}


function speakText(text) {

  if ("speechSynthesis" in window) {

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 0.85;

    window.speechSynthesis.speak(speech);

  } else {

    alert(
      "Your browser does not support speech."
    );

  }
}

const questions = [
  {
    question: "Qual è la capitale d'Italia?",
    answers: ["Milano", "Roma", "Napoli", "Torino"],
    correct: 1
  },
  {
    question: "Quanto fa 2 + 2?",
    answers: ["3", "4", "5", "22"],
    correct: 1
  },
  {
    question: "Che linguaggio usiamo per il web?",
    answers: ["Python", "Java", "JavaScript", "C++"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.querySelectorAll(".answer");
const nextBtn = document.getElementById("next");

function showQuestion() {
  let q = questions[currentQuestion];
  questionEl.innerText = q.question;

  answersEl.forEach((btn, index) => {
    btn.innerText = q.answers[index];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
}

answersEl.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (index === questions[currentQuestion].correct) {
      btn.classList.add("correct");
      score++;
    } else {
      btn.classList.add("wrong");
    }

    answersEl.forEach(b => b.disabled = true);
  });
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionEl.innerText = `Quiz finito! Punteggio: ${score}/${questions.length}`;
    document.getElementById("answers").style.display = "none";
    nextBtn.style.display = "none";
  }
});

showQuestion();

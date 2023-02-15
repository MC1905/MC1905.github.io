let questions = [
  {
    id: 1,
    question:
      "What was the approximate number of people evacuated from Prypiat?",
    answer: "45, 000",
    options: ["50, 000", "45, 000", "40, 000", "35, 000"],
  },

  {
    id: 3,
    question:
      "Approximately, how many people have been relocated because of the Chernobyl incident to date?",
    answer: "350,000 people",
    options: [
      "350,000 people",
      "380,000 people",
      "300,000 people",
      "None of these",
    ],
  },
  {
    id: 4,
    question: "How many people were eventually affected by the disaster?",
    answer: "DataBase",
    options: [
      "3 million people",
      "7 million people",
      "Over 7 million people",
      "None of these",
    ],
  },
  {
    id: 5,
    question: "Which reactor exploded, causing the Chernobyl disaster?",
    answer: "Reactor number four",
    options: [
      "Reactor number one",
      "Reactor number two",
      "Reactor number three",
      "Reactor number four",
    ],
  },
  {
    id: 6,
    question: "What was the location of the Chernobyl Nuclear Power Plant?",
    answer: "Prypiat, Ukraine",
    options: ["Prypiat, Ukraine", "Prypiat, Russia"],
  },
  {
    id: 7,
    question: "What was the date of the Chernobyl disaster?",
    answer: "April 26, 1986",
    options: [
      "April 26, 1968",
      "April 26, 1986",
      "April 20, 1990",
      "April 21, 1986",
    ],
  },
  {
    id: 8,
    question:
      "Was the Chernobyl disaster a product of natural disaster, or human error?",
    answer: "Human error, secrecy",
    options: ["Human error, secrecy", "Secret government", "Natural disaster"],
  },
  {
    id: 9,
    question: "What areas were affected by the radiation from the explosion?",
    answer:
      "Mainly Ukraine and neighboring Belarus, as well as parts of Russia and Europe",
    options: [
      "Mainly Russia, as well as parts of Europe",
      "only Chernobyl",
      "Mainly Ukraine and neighboring Belarus, as well as parts of Russia and Europe",
      "None of these",
    ],
  },
];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);
};

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

function next() {
  if (question_count == questions.length - 1) {
    location.href = "final.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;

  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

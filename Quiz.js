let questions = [
    {
      id: 'img1',
      answer: 3,
      question: "Which was not one of Voldemort's Horcruxes?",
      options: ["Harry", "Nagini", "Helga's Diadem", "Tom Riddle's Diary"],
    },
    {
      id: 'img2',
      answer: 1,
      question: "Which of these are not one of Hagrid's many pets?",
      options: ["Grawp", "Fluffy", "Aragog", "Noberta"],
    },
    {
      id: 'img3',
      answer: 3,
      question: "Which class did Severus Snape always want to teach?",
      options: [
        "Potions",
        "Charms",
        "Defense Against Dark Arts",
        "Transfiguration",
      ],
    },
    {
      id: 'img4',
      answer: 3,
      question: "Which Hogwarts house did Moaning Myrtle belong in?",
      options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
    },
    {
      id: 'img5',
      answer: 2,
      question: "What class did Neville end up teaching at Hogwarts?",
      options: ["Astronomy", "Herbology", "Charms", "Muggle Studies"],
    },
  ];
  
  let currentTab= "img1";
  var correctAnswers = {};
  let currentQuestion = [];
  var selectedOptions = {};
   questions.map(x => correctAnswers[x.id]=x.answer );
  callforFunction()
  function callforFunction() {
   currentQuestion = questions.filter(item => item.id === currentTab);
    for (var i = 0; i < currentQuestion.length; i++) {
      // correctAnswers.push(questions[i].answer);
      var questionDiv = document.createElement("div");
      questionDiv.className = "question";
      questionDiv.id = "questionSection"
      var question = document.createElement("h3");
      question.innerHTML = `Q${i + 1}. ` + currentQuestion[i].question;
      questionDiv.append(question);
      var options = currentQuestion[i].options;
      for (j = 0; j < options.length; j++) {
        questionDiv.innerHTML += `<div class='options'>
                  <label>
                      <input onchange='handleSelect(${j+1})' type='radio' name='q${i + 1}' value='${j + 1}'/>
                      <span class="option">${options[j]}</span>
                  </label>
              </div>`;
      }
  
      questionDiv.innerHTML += '<hr class="line" />';
      $(".quiz").append(questionDiv);
    }
    $(".quiz").append(
      `
          <div class="btn-wrapper" id="submit-btn">
          <button class="btn" onclick="checkResult()">Submit</button>
          </div>`
    );
  }
  function handleSelect(e) {
    selectedOptions[currentTab] = e;
  }
  function checkIfSelected(e) {
    debugger
    console.log(selectedOptions[currentTab] === e)
    // if (selectedOptions[currentTab] === e) return true
    return false
  }
  function checkResult() {
    debugger
    var score = 0;
    for (let [key, value] of Object.entries(correctAnswers)) {
      if (selectedOptions[key] === correctAnswers[key]) {
        score += 1;
      }
    }
    $(".score").text(score);
  }
  
  
  
   const imageClicked = (event) => {
      console.log(event)
      if (currentTab !== event) {
          const element = document.getElementById('questionSection');
          element.remove();
          const submitbtn = document.getElementById('submit-btn');
          submitbtn.remove();
          currentQuestion = [];
          currentTab = event
          callforFunction()
     } 
   }





































//   var correctAnswers = [];
// $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function (response) {
//   console.log(response);
//   for (var i = 0; i < response.length; i++) {
//     correctAnswers.push(response[i].answer);
//     var questionDiv = document.createElement("div");
//     questionDiv.className = "question";
//     var question = document.createElement("h3");
//     question.innerHTML = `Q${i + 1}. ` + response[i].question;
//     questionDiv.append(question);
//     var options = response[i].options;
//     for (j = 0; j < options.length; j++) {
//       questionDiv.innerHTML += `<div class='options'>
//                 <label>
//                     <input type='radio' name='q${i + 1}' value='${j + 1}'/>
//                     <span class="option">${options[j]}</span>
//                 </label>
//             </div>`;
//     }

//     questionDiv.innerHTML += '<hr class="line" />';
//     $(".quiz").append(questionDiv);
//   }
//   $(".quiz").append(
//     `
//         <div class="btn-wrapper">
//         <button class="btn" onclick="checkResult()">Submit</button>
//         </div>`
//   );
// });
// function checkResult() {
//   var selectedOptions = $("input[type=radio]:checked");
//   var score = 0;
//   for (var i = 0; i < selectedOptions.length; i++) {
//     if (selectedOptions[i].value == correctAnswers[i]) {
//       score += 1;
//     }
//   }
//   $(".score").text(score);
// }

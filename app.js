const notes = document.querySelector(".second-div");
const btns = document.querySelectorAll(".ques-btn");
const questions = document.querySelectorAll(".single-ques");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const ques = e.currentTarget.parentElement.parentElement;
    questions.forEach((question) => {
      if (question !== ques) {
        question.classList.remove("show-text");
        console.log(question);
      }
    });
    ques.classList.toggle("show-text");
    ques.style.transition = "all 0.5s ease";
  });
});

// second method
// const questions = document.querySelectorAll(".single-ques");
// questions.forEach((question) => {
//   console.log(question);
//   const btn = question.querySelector(".ques-btn");
//   console.log(btn);
//   btn.addEventListener("click", () => {
//     questions.forEach((item) => {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//       console.log(item);
//     });

//     question.classList.toggle("show-text");
//   });
// });

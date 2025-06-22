export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.player_ans;
    this.playerVal = document.getElementById("ans-num");
    this.answerButton = document
      .getElementById("ans-but")
      .classList.add("hidden");
    this.board = document.getElementById("board").classList.add("hidden");
    this.finishWindowW = document
      .getElementById("finish-window")
      .classList.add("hidden");

    this.answerButton = document
      .getElementById("ans-but")
      .addEventListener("click", () => {
        this.player_ans = document.getElementById("ans-num").value;
        console.log(typeof this.player_ans);
        this.playerAns(this.player_ans);
      });
    this.startButton = document
      .getElementById("start")
      .addEventListener("click", () => {
        this.clickStart();
      });

    this.finishButton = document
      .getElementById("finish")
      .addEventListener("click", () => {
        this.clickFinish();
      });

    this.startButton = document
      .getElementById("again")
      .addEventListener("click", () => {
        this.clickStart();
      });

    this.EnterAns = document.addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        this.player_ans = document.getElementById("ans-num").value;
        this.playerAns(this.player_ans);
      }
    });
  }

  playerAns(player_ans) {
    this.model.checkAnswer(player_ans);
  }

  clickStart() {
    this.model.checkAnswer();
    document.getElementById("ans-num").focus();
  }

  clickFinish() {
    this.model.finishGame();
  }
}

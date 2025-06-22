export class View {
  constructor() {
    this.board = document.getElementById("board");
    this.first_num = document.getElementById("first-num");
    this.effect = document.getElementById("effect");
    this.second_num = document.getElementById("second-num");
    this.timer = document.getElementById("timer");
    this.count_true_ans = document.getElementById("count-true-ans");
    this.finishWindowW = document
      .getElementById("finish-window")
      .classList.add("hidden");
  }

  renderBoard(arr = [0, "+", 0]) {
    this.first_num.innerHTML = arr[0];
    this.effect.innerHTML = arr[1];
    this.second_num.innerHTML = arr[2];
  }
  renderTime(timer) {
    this.timer.innerHTML = timer;
  }

  finishWindow(countTrueAns) {
    this.finishWindowW = document
      .getElementById("finish-window")
      .classList.remove("hidden");
    this.count_true_ans.innerHTML = countTrueAns;
  }
}

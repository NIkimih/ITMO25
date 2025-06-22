import { View } from "./view.js";
const view = new View();

export class Model {
  constructor(controller) {
    this.controller = controller;
    this.infoData = new Array(5);
    this.timer = 19;
    this.countTrueAns = 0;
    this.trueAnswer;
    this.ansPlayer;
    this.view = view;
    this.arr = [];
    this.max_case_num;
    this.f_num;
    this.s_num;
    this.firstClick = true;
    this.arrColorBack = [
      "rgba(255, 0, 0, 0.9)",
      "rgba(200, 50 ,0, 0.75)",
      "rgba(150, 100, 0, 0.6)",
      "rgba(100, 150,0, 0.5)",
      "rgba(50, 200, 0, 0.5)",
      "rgba(0, 255, 0, 0.5)",
    ];
  }

  checkAnswer(ansPlayer) {
    this.view.renderTime(this.timer + 1);
    this.ansPlayer = ansPlayer;
    document.getElementById("ans-num").value = "";
    if (this.trueAnswer == this.ansPlayer && !this.firstClick) {
      this.timer += 20;
      this.countTrueAns += 1;
      this.newMathExample();
    } else if (this.countTrueAns == 0 && this.firstClick) {
      document.body.style.backgroundColor = this.arrColorBack[5];
      this.board = document.getElementById("board").classList.remove("hidden");
      this.startButton = document
        .getElementById("start")
        .classList.add("hidden");
      this.finishButton = document
        .getElementById("finish")
        .classList.remove("hidden");
      this.answerButton = document
        .getElementById("ans-but")
        .classList.remove("hidden");
      this.finishWindowW = document
        .getElementById("finish-window")
        .classList.add("hidden");
      this.interval = setInterval(() => {
        this.view.renderTime(this.timer);
        if (this.timer <= 0) {
          this.finishGame();
        }
        this.timer -= 1;
        if (this.timer <= 5) {
          document.body.style.backgroundColor = this.arrColorBack[this.timer];
        }
      }, 1000);
      this.newMathExample();
      this.firstClick = false;
    } else {
      if (this.timer <= 5) {
        this.view.renderTime(0);
        this.finishGame();
      } else {
        this.timer -= 5;
        this.newMathExample();
      }
    }
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  newMathExample() {
    if (this.countTrueAns < 9) {
      this.max_case_num = Math.floor(this.countTrueAns / 3);
    } else {
      this.max_case_num = 3;
    }

    switch (this.randomInteger(0, this.max_case_num)) {
      case 0:
        this.f_num = this.randomInteger(0, 100);
        this.s_num = this.randomInteger(0, 100);
        this.view.renderBoard([this.f_num, "+", this.s_num]);
        this.trueAnswer = this.f_num + this.s_num;
        return;
      case 1:
        this.s_num = this.randomInteger(0, 100);
        this.f_num = this.randomInteger(this.s_num, this.s_num + 100);
        this.view.renderBoard([this.f_num, "-", this.s_num]);
        this.trueAnswer = this.f_num - this.s_num;
        return;
      case 2:
        this.f_num = this.randomInteger(1, 15);
        this.s_num = this.randomInteger(1, 15);
        this.view.renderBoard([this.f_num, "*", this.s_num]);
        this.trueAnswer = this.f_num * this.s_num;
        return;
      case 3:
        this.f_num = 1;
        this.s_num = 2;
        while (this.f_num % this.s_num != 0) {
          this.f_num = this.randomInteger(10, 100);
          this.s_num = this.randomInteger(3, this.f_num - 1);
        }
        this.view.renderBoard([this.f_num, "/", this.s_num]);
        this.trueAnswer = this.f_num / this.s_num;
        return;
      case 4:
        this.f_num = this.randomInteger(1, 15);
        this.view.renderBoard([this.f_num, "*", this.f_num]);
        this.trueAnswer = this.f_num * this.s_num;
        return;
    }
  }

  finishGame() {
    this.board = document.getElementById("board").classList.add("hidden");
    this.answerButton = document
      .getElementById("ans-but")
      .classList.add("hidden");
    this.startButton = document
      .getElementById("finish")
      .classList.add("hidden");
    this.answerButton = document
      .getElementById("ans-but")
      .classList.add("hidden");
    this.view.renderBoard();
    this.view.renderTime(0);
    this.firstClick = true;
    clearInterval(this.interval);
    this.view.finishWindow(this.countTrueAns);
    this.timer = 19;
    this.countTrueAns = 0;
    /*
    анимация бэкграунда по таймеру за последние 5 сек
    все готово
    */
  }
}

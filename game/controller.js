export class Controller{
    constructor(model){
        this.model = model;
        this.playerVal = document.getElementById('ans-num')
        this.answerButton = document.getElementById('ans-but').addEventListener("click", () => {
          const player_ans = document.getElementById('ans-num').value
          this.playerAns(player_ans)
        })
        this.startButton = document.getElementById('start').addEventListener("click", () => {
          this.clickStart()
        })
        this.finishButton = document.getElementById('finish').addEventListener("click", () => {
          this.clickFinish()
        })
    }

    playerAns(player_ans){
      this.model.checkTimer(player_ans)
    }
    
    clickStart(){
      this.startButton = document.getElementById('start').classList.add('hidden')
      this.finishButton = document.getElementById('finish').classList.remove('hidden')
      this.model.checkAnswer()
    }

    clickFinish(){
      this.startButton = document.getElementById('finish').classList.add('hidden')
      this.finishButton = document.getElementById('start').classList.remove('hidden')
      this.model.finishGame()
    }
  }
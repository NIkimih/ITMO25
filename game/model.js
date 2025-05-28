import {View} from "./view.js"
const view = new View()

export class Model {
    constructor(){
        this.infoData = new Array (5)
        this.timer = 20
        this.countTrueAns = 0
        this.trueAnswer
        this.ansPlayer
        this.view = view
        this.arr = []
        this.max_case_num
        this.f_num
        this.s_num
        this.firstClick = true
       }

    timerGame(){
        this.timer -= 1
        this.view.renderTime(this.timer)
    }

    checkTimer(ans_player){
        this.ansPlayer = ans_player;
        if ( this.timer <= 0 ){
            this.finishGame()
        }
        else{
            this.checkAnswer()
        }
    }

    checkAnswer(){
        if(this.trueAnswer == this.ansPlayer && !this.firstClick){
            this.timer += 20;
            this.countTrueAns += 1;
            this.newMathExample()
        }
        else if (this.countTrueAns == 0 && this.firstClick){
            setInterval(function(){
                timerGame()
            }, 1000)
            this.newMathExample()
            this.firstClick = false
        }
        else{
            this.timer -= 5;
            this.newMathExample()
        }
    }

    randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    newMathExample(){
        if(this.countTrueAns < 45){
            this.max_case_num = Math.floor(this.countTrueAns / 15)
        }
        else{
            this.max_case_num = 3
        }

        switch(this.randomInteger(0, this.max_case_num)){
            case 0:
                this.f_num = this.randomInteger(0, 100)
                this.s_num = this.randomInteger(0, 100)
                this.view.renderBoard([this.f_num , '+', this.s_num, this.countTrueAns])
                this.trueAnswer = this.f_num + this.s_num
            case 1:
            case 2:
            case 3:
            
        }
    }

    finishGame(){
        this.view.renderBoard([0 , '+', 0, 20, 0])
        this.firstClick = true
        console.log("finish")
    }
}
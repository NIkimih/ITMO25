export class View {
    constructor(){
        this.board = document.getElementById('board')
        this.first_num = document.getElementById('first-num');
        this.effect = document.getElementById('effect');
        this.second_num = document.getElementById('second-num');
        this.timer = document.getElementById('timer');
        this.count_true_ans = document.getElementById('count-true-ans');        
    }

    renderBoard(arr){
        this.first_num.innerHTML = arr[0];
        this.effect.innerHTML = arr[1];
        this.second_num.innerHTML = arr[2];
        this.count_true_ans.innerHTML = arr[3];
    }
    renderTime(timer){
        this.timer.innerHTML = timer;
    }

    test(t){
        console.log(t)
        this.first_num.innerHTML = t[0];
        this.effect.innerHTML = t[1];
        this.second_num.innerHTML = t[2];
    }
} 
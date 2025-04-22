let mas_img = [
    "/img_hw3/0.svg",
    "/img_hw3/1.svg",
    "/img_hw3/2.svg",
    "/img_hw3/3.svg",
    "/img_hw3/4.svg",
    "/img_hw3/5.svg",
    "/img_hw3/6.svg",
    "/img_hw3/7.svg",
    "/img_hw3/8.svg",
    "/img_hw3/9.svg"
]

let num_img = 0;

function clickLeftImg(){
    let img_src = document.getElementById('carImg');
    if(num_img == 0){
        num_img = mas_img.length - 1;
    }
    else{
        num_img -= 1;
    }
    img_src.src = mas_img[num_img];
    


}

function cliclRightImg(){
    let img_src = document.getElementById('carImg');
    num_img += 1;
    if(num_img == mas_img.length){
        num_img = 0;
    }
    img_src.src = mas_img[num_img];
    


}

function change_img(){
    if(num_img < mas_img.length - 1){
        num_img += 1;
    }
    else if(num_img == mas_img.length - 1){
        num_img = 0;
    }
    let img_src = document.getElementById('carImg');
    img_src.src = mas_img[num_img];
}
setInterval(change_img, 2000);

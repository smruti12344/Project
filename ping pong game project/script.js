// here we access the ball,rod1,rod2 by eiement id
var ball = document.getElementById("ball");
var rod1 = document.getElementById("rod1");
var rod2 = document.getElementById("rod2");
var movement=20;

const storeName = "name";
const storeScore = 123;
const thisRod1="rod1";
const thisRod2="rod2";

let whichBar;
let moveX=2;
let moveY=2;
let ballMoving;
let border=12;
let score;
let highScore;
let gameStart=false;

// Local Storage is a kind of online storage that allows you to store and access data in your browser.
localStorage.setItem(storeScore,"null");
localStorage.setItem(storeScore,"null");

(function(){
    highScore=localStorage.getItem(storeScore);
    whichBar=localStorage.getItem(storeName);

    // applay condition to check this is 1st game
    if(which==="null" || highScore==="null"){
        alert("hello this is your first game");
        highScore=0;
        whichBar=thisRod1;
    }
    else{
        alert(whichBar+"has maximum score of"+highScore*100);
    }
    gameRestart(whichBar);


})();
// here we create game restar function &  to rod move rod
//here we set rode and ball move

function gameRestart(barName){
    rod1.style.left=((window.innerHeight-rod1.offsetWidth)/2)+"px";
    rod2.style.left=((window.innerHeight-rod2.offsetWidth)/2)+"px";
    ball.style.left=((window.innerHeight-ball.offsetWidth)/2)+"px";
    // here we check which rod selected
    if(barName===thisRod1){
        ball.style.top=rod2.getBoundingClientRect().y-rod2.getBoundingClientRect().height+"px";
        moveY=-2;
    }
    else if(barName===thisRod2){
        ball.style.top=rod1.getBoundingClientRect().y-rod1.getBoundingClientRect().height+"px";
        moveY=2;
    }
    score=0;
    gameStart=false;

}

document.addEventListener('keydown',function(event){
    if(event.DOM_KEY_LOCATION_NUMPAD==68 || event.DOM_KEY_LOCATION_NUMPAD==39){
        if(parseInt(rod1.style.left)<(window.innerWidth-rod1.offsetWidth-border)){
            rod1.style.left=parseInt(rod1.style.left)+movement+'px';
            rod2.style.left=rod1.style.left;
        };
    };
    if(event.DOM_KEY_LOCATION_NUMPAD==65  || event.DOM_KEY_LOCATION_NUMPAD==37){
        if(parseInt(rod1.style.left)>border){
            rod1.style.left= parseInt(rod1.style.left)-movement+'px';
            rod2.style.left=rod1.style.left;
        };

    };
    if(event.DOM_KEY_LOCATION_NUMPAD==13){
        if(!gameStart){
            gameStart=true;
            let ballRect= ball.getBoundingClientRect();
            let ballX = ballRect.x;
            let ballY= ballRect.y;
            let ballDia = ballRect.width;

            let bar1Height=rod1.offsetHeight;
            let bar2Height=rod2.offsetHeight;
            let bar1Width=rod2.offsetWidth;
            let bar2Width=rod2.offsetWidth;

            ballMoving = setInterval(function(){
                let bar1X=rod1.getBoundingClientRect().x;
                let bar2X= rod2.getBoundingClientRect().x;

                let ballCenter=ballX+ballDia/2;
                ballX+=moveX;
                ballY=moveY;
                ball.style.left=ballX+'px';
                ball.style.top=ballY+'px';
                if(((ballX+ballDia)>window.innerWidth) || (ballX<0)){
                    moveX=-moveX;
                }
                if(ballY<=bar1Height){
                    moveY=-moveY;
                    score++;
                    if((ballCenter<bar1X) || (ballCenter>(bar1X+bar1Width))){
                        dataStoring(score,thisRod2);
                    }

                    
                }
                if((ballY+ballDia)>=(window.innerHeight-bar2Height)){
                    moveY=-moveY;
                    score++;

                    if((ballCenter<bar2X) || (ballCenter>(bar2X+bar2Width))){
                        dataStoring(score,thisRod1);
                    }
                }
            },10);

        };
    };

});
function dataStoring(scoreObtain,winingBar){
    if(score>highScore){
        highScore=score;
        localStorage.setItem(storeName,winingBar);
        localStorage.setItem(storeScore,winingBar);
    }
    clearInterval(ballMoving);
    gameRestart(winingBar);
    alert(winingBar+"win with score of"+(scoreObtain*100)+"max score is :"+(highScore*100));
}

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true //PlayerX , PlayerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let clickCount = 0;

boxes.forEach((box) => {
    box.addEventListener('click',() => {
        console.log("box was clicked")

        if(turnO){
            // box.style.backgroundColor = "#7132CA";
            box.style.color = "#7132CA";
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            // box.style.backgroundColor = "#4E9F3D";
            box.style.color = "#4E9F3D";

            turnO = true;
        }
        box.disabled = true;
        clickCount++;
        checkWinner();
        // console.log(clickCount);
        
    })
})



const resetGame = () => {
    turnO = true;
    enableBoxes();
    winColor();
    clickCount = 0;
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for( let box of boxes){
        box.disabled = true 
    }
}

const enableBoxes = () => {
    for( let box of boxes){
        box.disabled = false 
        box.innerText = "";
    }
 } 
const showWinner = (Winner) => {
    msg.innerText = `Congratulation's, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}

const winColor = () => {
    for(let colorBoxes of winPatterns){
        boxes[colorBoxes[0]].style.backgroundColor = "#C4E1E6";
        boxes[colorBoxes[1]].style.backgroundColor = "#C4E1E6";
        boxes[colorBoxes[2]].style.backgroundColor = "#C4E1E6";
    }
}

const drawMatch = () => {
    msg.innerText = `Draw`;
    msgContainer.classList.remove("hide");
}

let isWinner = false;
const checkWinner = () => {
    for(let parttern of winPatterns){
        
        let pos1Val = boxes[parttern[0]].innerText;
        let pos2Val = boxes[parttern[1]].innerText;
        let pos3Val = boxes[parttern[2]].innerText;
        
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                isWinner = true;
                // console.log("Winner");
                // console.log(parttern)
                boxes[parttern[0]].style.backgroundColor = "red";
                boxes[parttern[1]].style.backgroundColor = "red";
                boxes[parttern[2]].style.backgroundColor = "red";

                showWinner(pos1Val);
            }
            
        }

    }

    if (!isWinner && clickCount ===9) {
        drawMatch();
    }
}

resetBtn.addEventListener("click", resetGame);
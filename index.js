let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");

let newGameBtn=document.querySelector("#new-btn");

let msgContainer=document.querySelector(".msg-container");

let msg=document.querySelector("#msg");


let turnO=true;//playerx,playeryO  turnO=Turn Of

//2-D Array
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked..!");
        if(turnO)//Player O
        {
          box.innerText="O";
          turnO=false;
        }
        else//PlayerX
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })


});

//////////////////////////////////////
//reset Game
const resetGame = () =>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");

}


////////////////////////////////////////

const showWinner = (winner) =>{
    msg.innerText=`Congratulations ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");//remove hide and Message container Visible
    disableboxes();
};

//Game Draw
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
////////////////////////////////////////
//After winner All Buttons should be disable

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

//////////////////////////////////////////
//Reset Game
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


//////////////////////////////////////////
//Check Winner

const checkWinner = () =>{
    for(let pattern of winPatterns)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //             boxes[pattern[1]].innerText,
        //             boxes[pattern[2]].innerText
        //             );


        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !=""  && pos3val !="")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                console.log("Winner",pos1val);
                 
                showWinner(pos1val);
            }
        }
    }
};

////////////////////////////////////////////////////
//Reset Game

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
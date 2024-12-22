let buttons = document.querySelectorAll('.button')
let msgContainer = document.querySelector('.msgContainer')
let msg = document.querySelector('.msg')
let resetButton = document.querySelector('.reset-btn')
let turnO = true
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetBtn = () => {
    turnO = true;
    enabledButtons();
    msgContainer.classList.add("hide")
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (turnO) {
            button.innerText = 'O'
            turnO = false;

        } else {
            button.innerText = 'X';
            turnO = true;

        }
        button.disabled = true;
        checkWinner()
    })
})
const showWinner = (winner) => {
    msg.innerText = `Congratulation ${winner} is winner`
    msgContainer.classList.remove("hide")
    disabledButtons()


}
const disabledButtons = () => {
    for (let button of buttons) {
        button.disabled = true;


    }
}
const enabledButtons = () => {
    for (let button of buttons) {
        button.disabled = false;
        button.innerText = "";

    }
}
const checkWinner = () => {
    for (let patterns of winPatterns) {

        let pos1Value = buttons[patterns[0]].innerText;
        let pos2Value = buttons[patterns[1]].innerText;
        let pos3Value = buttons[patterns[2]].innerText;

        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                console.log("winner", pos1Value)
                showWinner(pos1Value)
            }

        }

    }
}
resetButton.addEventListener('click', () => {
    resetBtn()
}

)
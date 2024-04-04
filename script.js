let playerOne = true;
    btn = document.querySelectorAll(".btn")

btn.forEach(key => {
    key.addEventListener("click", playerMove);
});

function playerMove(e) {
    writeMove(e)
};

function writeMove(e) {
    if(e.target.className === "btn" && playerOne === true) {
        e.target.classList.add("x");
        playerOne = !playerOne;
    }
    else {
        e.target.classList.add("o");
        playerOne = !playerOne;
    }
    check(0,1,2);
    check(3,4,5);
    check(6,7,8);
    check(0,3,6);
    check(1,4,7);
    check(2,5,8);
    check(0,4,8);
    check(2,4,6);
}

function check(btn1,btn2,btn3) {
    if (
        btn[btn1].className === "btn x" &&
        btn[btn2].className === "btn x" &&
        btn[btn3].className === "btn x"
        ) {
            window.alert("x wins!")

        }
    else if (
        btn[btn1].className === "btn o" &&
        btn[btn2].className === "btn o" &&
        btn[btn3].className === "btn o"
        ) {

            window.alert("o wins!")

        } 
}

const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box5 = document.getElementById('box5')
const box6 = document.getElementById('box6')
const box7 = document.getElementById('box7')
const box8 = document.getElementById('box8')
const box9 = document.getElementById('box9')

let allBoxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
const sstatus = document.getElementById('status')
sstatus.innerHTML = "Hello"
let player = 'O'
allBoxes.forEach(box => box.addEventListener('click', startGame = () => {
    if (box.innerHTML == '' && player == 'O') {
        box.innerHTML = 'O'
        box.style.backgroundImage = "url('yellow.png')";
        player = 'X'
        checkPlayerO()
    } else {
        box.style.backgroundImage = "url('red.png')";
        box.innerHTML = 'X'
        player = 'O'
    }
}))
const checkPlayerO = () => {
    if (box1.innerHTML == "O" && box2.innerHTML == 'O' && box3.innerHTML == 'O') {
        sstatus.innerHTML = 'Player O Win'
    }else if (box4.innerHTML == "O" && box5.innerHTML == 'O' && box6.innerHTML == 'O') {
        sstatus.innerHTML = 'Player O Win'
    }else if (box7.innerHTML == "O" && box8.innerHTML == 'O' && box9.innerHTML == 'O') {
        sstatus.innerHTML = 'Player O Win'
    }else if (box1.innerHTML == "O" && box5.innerHTML == 'O' && box9.innerHTML == 'O') {
        sstatus.innerHTML = 'Player O Win'
    }else if (box3.innerHTML == "O" && box5.innerHTML == 'O' && box7.innerHTML == 'O') {
        sstatus.innerHTML = 'Player O Win'
    }else if (box1.innerHTML == "O" && box4.innerHTML == 'O' && box7.innerHTML == 'O') {
        sstatus.innerHTML = 'Player O Win'
    }else if (box2.innerHTML == "O" && box5.innerHTML == 'O' && box8.innerHTML == 'O') {
        sstatus.innerHTML = 'Player O Win'
    }else if (box3.innerHTML == "O" && box6.innerHTML == 'O' && box9.innerHTML == 'O') {
        sstatus.innerHTML = 'Player O Win'
    }
}

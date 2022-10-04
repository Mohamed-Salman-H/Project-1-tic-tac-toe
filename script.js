// add a function and make the divs (grid) clickable, depending on the players turn
// link the "play" function to the 9 Id's that we've created in the HTML

let turn = 'Player 1';

let blocks = document.querySelectorAll('.block')

let playerOneTurn = true


blocks.forEach(div => {
    div.addEventListener('click', play)
})

function play(event) {
    let fill = document.getElementById(event.target.id);

    if (playerOneTurn == true){
        fill.innerHTML = 'X'
        // fill.innerHTML.color = 'blue'
        // element.classList.add("mystyle");
        // playerOneTurn.style.color = "blue"
        playerOneTurn = false
        // update board variable with index
    } else {
        fill.innerHTML = 'O'
        playerOneTurn = true
    }
checkWinner()

    // add logic to keep track of where X and O is

}

function checkWinner() {
    let result = document.querySelector('.title')
    if (item1.innerHTML === 'X' && item2.innerHTML === 'X' && item3.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
     document.querySelector(".title").style.color="rgb(0, 187, 255)" 
    }
    else if (item4.innerHTML === 'X' && item5.innerHTML === 'X' && item6.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
    }
    else if (item7.innerHTML === 'X' && item8.innerHTML === 'X' && item9.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
    }
    else if (item3.innerHTML === 'X' && item6.innerHTML === 'X' && item9.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
    }
    else if (item2.innerHTML === 'X' && item5.innerHTML === 'X' && item8.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
    }
    else if (item1.innerHTML === 'X' && item4.innerHTML === 'X' && item7.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
    }
    else if (item3.innerHTML === 'X' && item5.innerHTML === 'X' && item7.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
    }
    else if (item1.innerHTML === 'X' && item5.innerHTML === 'X' && item9.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
    }


    else if (item1.innerHTML === 'O' && item2.innerHTML === 'O' && item3.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
     document.querySelector(".title").style.color="rgb(255, 68, 0)" 
    }
    else if (item4.innerHTML === 'O' && item5.innerHTML === 'O' && item6.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
    }
    else if (item7.innerHTML === 'O' && item8.innerHTML === 'O' && item9.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
    }
    else if (item3.innerHTML === 'O' && item6.innerHTML === 'O' && item9.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
    }
    else if (item2.innerHTML === 'O' && item5.innerHTML === 'O' && item8.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
    }
    else if (item1.innerHTML === 'O' && item4.innerHTML === 'O' && item7.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
    }
    else if (item3.innerHTML === 'O' && item5.innerHTML === 'O' && item7.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
     document.querySelector(".title").style.color="rgb(255, 68, 0)" 
    }
    else if (item1.innerHTML === 'O' && item5.innerHTML === 'O' && item9.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
    }
    else if (item1.innerHTML !=='' && item2.innerHTML !=='' && item3.innerHTML !=='' &&
    item4.innerHTML !=='' && item5.innerHTML !=='' && item6.innerHTML !=='' && item7.innerHTML !==''
    && item8.innerHTML !=='' && item9.innerHTML !=='') {
        result.innerText = 'Draw'
}
}
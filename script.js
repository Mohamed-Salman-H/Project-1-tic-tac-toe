// add a function and make the divs (grid) clickable, depending on the players turn
// link the "play" function to the 9 Id's that we've created in the HTML

// let turn = 'Player 1';

let blocks = document.querySelectorAll('.block')

let playerOneTurn = true

let empty = ["","","","","","","","",""]


blocks.forEach(div => {
    div.addEventListener('click', play)
})

function play(event) {
    let fill = document.getElementById(event.target.id);
    
    if (playerOneTurn === true){
        fill.innerHTML = 'X'
        fill.style.color = 'rgb(0, 187, 255)'
        playerOneTurn = false
        deActivate(event)
        
    } else if (playerOneTurn === false) {
        fill.innerHTML = 'O'
        playerOneTurn = true
        deActivate(event)
    }
    checkWinner()
}

function deActivate(event) {
    event.target.removeEventListener('click', play);
}

// Grab the class title to show who wins the Match
function checkWinner() {
    let result = document.querySelector('.title')
    
    
    //  give 8 winning possibilities to X 
    if (item1.innerHTML === 'X' && item2.innerHTML === 'X' && item3.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
       blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item4.innerHTML === 'X' && item5.innerHTML === 'X' && item6.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item7.innerHTML === 'X' && item8.innerHTML === 'X' && item9.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item3.innerHTML === 'X' && item6.innerHTML === 'X' && item9.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item2.innerHTML === 'X' && item5.innerHTML === 'X' && item8.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item1.innerHTML === 'X' && item4.innerHTML === 'X' && item7.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item3.innerHTML === 'X' && item5.innerHTML === 'X' && item7.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item1.innerHTML === 'X' && item5.innerHTML === 'X' && item9.innerHTML === 'X'){
        result.innerText = 'Sub-Zero wins' 
        document.querySelector(".title").style.color="rgb(0, 187, 255)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }

// give 8 winning possibilities to O
    else if (item1.innerHTML === 'O' && item2.innerHTML === 'O' && item3.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
     document.querySelector(".title").style.color="rgb(255, 68, 0)" 
     blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item4.innerHTML === 'O' && item5.innerHTML === 'O' && item6.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item7.innerHTML === 'O' && item8.innerHTML === 'O' && item9.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item3.innerHTML === 'O' && item6.innerHTML === 'O' && item9.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item2.innerHTML === 'O' && item5.innerHTML === 'O' && item8.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item1.innerHTML === 'O' && item4.innerHTML === 'O' && item7.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item3.innerHTML === 'O' && item5.innerHTML === 'O' && item7.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
     document.querySelector(".title").style.color="rgb(255, 68, 0)" 
     blocks.forEach((block) => block.removeEventListener('click', play));
    }
    else if (item1.innerHTML === 'O' && item5.innerHTML === 'O' && item9.innerHTML === 'O'){
        result.innerText = 'Scorpion wins' 
        document.querySelector(".title").style.color="rgb(255, 68, 0)" 
        blocks.forEach((block) => block.removeEventListener('click', play));
    }
    // if all the blocks are filled without matching the above 16 possibilities, write/insert "Draw"
    else if (item1.innerHTML !=='' && item2.innerHTML !=='' && item3.innerHTML !=='' &&
    item4.innerHTML !=='' && item5.innerHTML !=='' && item6.innerHTML !=='' && item7.innerHTML !==''
    && item8.innerHTML !=='' && item9.innerHTML !=='') {
        result.innerText = 'Draw'
}
}
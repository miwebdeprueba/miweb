let board, currentPlayer, player1, player2;
const conGanadora = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
function inicioJuego(){
    player1 = document.getElementById('Jugador1').value || 'Jugador 1';
    player2 = document.getElementById('Jugador2').value || 'Jugador 2';
    board = Array(9).fill(null);
    currentPlayer = 'X';
    document.getElementById('tablero').classList.remove('hidden');
    document.getElementById('message').classList.add('hidden');
    document.querySelectorAll('.cell').forEach(cell =>{
        cell.textContent = '';
        cell.addEventListener('click', handleClick, { once: true });
    });
}

function handleClick(e){
    const index = e.target.getAttribute('data-index');
    if(board[index] === null){
        board[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        if(checkWin(currentPlayer)){
            endGame(false);
        } else if(board.every(cell => cell !== null)){
            endGame(true);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }

    }
}
function checkWin(player){
    return conGanadora.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}
function endGame(draw){
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    if(draw){
        message.textContent = '!Es un empate';
    } else{
        const ganador = currentPlayer === 'X' ? player1 : player2;
        message.textContent = `!${ganador} Has ganado`;
    }
    document.querySelectorAll('.cell').forEach(cell => cell.removeEventListener('click',handleClick));
}
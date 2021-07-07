const gameBoard = (() => {
    // Creates players
    const playerFactory = (name, mark,  turn) => {
        return { name, mark, turn };
    };

    const player1 = playerFactory('player 1', 'X', true);
    const player2 = playerFactory('Player 2', 'O',  false);

    // Possible win combinations
    var article = document.getElementById('tl');
    article.dataset.index = 0;
    var article = document.getElementById('t');
    article.dataset.index = 1;
    var article = document.getElementById('tr');
    article.dataset.index = 2;
    const winCombos = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
    ];

    let winner = null;

    // Turn counter
    let turns = 0;

    // Board array
    let board = [];

    // Winner combination array
    let winnerCombo = [];

    // Function when making a move
    const playerTurn = (function () {
        const cell = document.querySelectorAll('.cell');
        cell.forEach( cell => {
            cell.addEventListener('click', e => {
                // X player move if conditions are met
                if (player1.turn == true && gameBoard.winner == null
                    && e.target.textContent == '') {
                    // Adds move to array
                    board[e.target.id] = player1.mark;
                    // Board styling
                    cell.textContent = player1.mark;
                    cell.style.color = 'white';
                    // Sets player turns
                    player1.turn = false;
                    player2.turn = true;

                    console.log(board)
                // O player move if conditions are met
                } else if (player2.turn == true && gameBoard.winner == null
                    && e.target.textContent == '' ) {
                    // Adds move to array
                    board[e.target.id] = player2.mark;
                    // Board styling
                    cell.textContent = player2.mark;
                    cell.style.color = 'darkred';
                    // Sets player turns
                    player1.turn = true;
                    player2.turn = false;

                    console.log(board)}
                    else return 0;

                winCheck();
            });
        });
        return { cell }
    })();


    // Checks for a winner
    winCheck = () => {
        turns++;

        // Seperates each player X | O move into 2 diffrent arrays
        let xPlays = board.reduce((a, e, i) =>
        (e === player1.mark) ? a.concat(i) : a, []);
        let oPlays = board.reduce((a, e, i) =>
        (e === player2.mark) ? a.concat(i) : a, []);
        // Loop iterates over each winCombo array
        for(let [index, combo] of winCombos.entries()) {
            // Check if player moves index is equal to combo array index
            if (combo.every(elem => xPlays.indexOf(elem) > -1)) {

                gameBoard.winner = 'p1';
                gameBoard.winnerCombo = combo;

            } else if (combo.every(elem => oPlays.indexOf(elem) > -1)) {

                gameBoard.winner = 'p2';
                gameBoard.winnerCombo = combo;

            } else if (gameBoard.winner == null && gameBoard.winner == undefined
                && turns == 9) {
                gameBoard.winner = 'tie';
                gameBoard.winnerCombo = combo;
            };
        };
        // Display the winner
        console.log(turns, gameBoard.winner, winnerCombo)
        winDisplay();
        return winnerCombo;
    };
    // Resets board and display
    gameReset = () => {
        gameBoard.winner = null;
        gameBoard.winnerCombo = undefined;
        player1.turn = true;
        player2.turn = false;
        player2.ai = false;
        turns = 0;
        board.splice(0, board.length);
        console.log(board, winner, player1.turn, player2.turn)
    };
    console.log(board, winner, player1.turn, player2.turn)

    return { winCheck, gameReset, playerTurn, board, player2, winnerCombo };
})();

// Controls the display
const displayController = (() => {
    const play = document.querySelector('.play');
    const cell = document.querySelectorAll('.cell');
    const winCtn = document.querySelector('.win-display');
    // Display winner function
    winDisplay = () => {
        // Displays the win combo
        combDisplay = () => {
            for(i = 0; i < gameBoard.winnerCombo.length; i++) {
                document.getElementById(gameBoard.winnerCombo[i]).style.
                  backgroundColor = 'rgba(0, 0, 0, 0.040)';
            };
        };
        // Displays the winner
        if(gameBoard.winner === 'p1') {
            winCtn.textContent = 'X Wins the round!';
            combDisplay();

        } else if (gameBoard.winner === 'p2') {
            winCtn.textContent = 'O Wins the round!';
            combDisplay();

        } else if (gameBoard.winner === 'tie') {
            winCtn.textContent = 'It\'s a tie!';

        } else {
            return;
        };

        resetBtn.style.display = 'flex';
        console.log(gameBoard.winnerCombo)
    };
    // Board render
    gamePlay = () => {
        winCtn.style.display = 'block';

        header.style.display = 'none';


        play.style.display = 'flex';

    };


    // Resets board and display
    gameReplay = () => {
        gameBoard.gameReset();

        cell.forEach( cell => {
            cell.textContent = '';
            cell.style.opacity = '0';
            cell.style.backgroundColor = 'white';
        });

        resetBtn.style.display = 'none';

        winCtn.textContent = '';
    };

    // Back to main button
    mainPage = () => {
        // styling
        play.style.display = 'none';

        winCtn.style.display = 'none';


        header.style.display = 'flex';
        // Resets board and display
        gameReplay();
    };

  //  const playBtnAi = document.getElementById('play-btn-ai');
   // playBtnAi.addEventListener('click', gamePlayAi);

    // Event listeners


    const resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener('click', gameReplay);


    const header = document.querySelector('header');

    return { winDisplay, gamePlay }
})();

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#btn-start')
    const width = 10 // set index for the width
    let nextRandom = 0
    let timerId;
    let score = 0
    // tetrominoes

    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTetromino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ]

    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ]

    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]
    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
      ]

    const theTetromino = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

      let currentPosition = 4
      let currentRotation = 0
      // select random tetromino
      let random = Math.floor(Math.random()*theTetromino.length)
      let current = theTetromino[random][currentRotation]
      
      function draw() {
          current.forEach(index => {
              squares[currentPosition + index].classList.add('tetromino')
          })
      }
     // undraw tetromino
     function undraw() {
         current.forEach(index => {
             squares[currentPosition + index].classList.remove('tetromino')
         })
     }
     // set tetromino fall down every seconds
     //timerId = setInterval(moveDown, 1000);
     // assign function to keycodes
     function control(e) {
         if (e.keyCode === 37) {
             moveLeft();
         } else if (e.keyCode === 38) {
            rotate();
        } else if (e.keyCode === 39) {
             moveRight();
         } else if (e.keyCode === 40) {
             moveDown();
         }
     }
     document.addEventListener('keyup', control);
     // moveDown
     function moveDown() {
         undraw()
         currentPosition += width
         draw()
         Freeze()
     }
     // freeze function
     function Freeze() {
         if(current.some(index => 
             squares[currentPosition + index + width].classList.contains('taken'))) {
                 current.forEach(index => squares[currentPosition + index].classList.add('taken'))
                 // start a new tetromino
                 random = nextRandom;
                 nextRandom = Math.floor(Math.random() * theTetromino.length)
                 current = theTetromino[random][currentRotation]
                 currentPosition = 4
                 draw();
                 displayShape();
                 addScore();
                 gameOver();
             }
     }
     // function moveleft
     function moveLeft() {
         undraw();
         const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
         if(!isAtLeftEdge) currentPosition -= 1;
         if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
             currentPosition += 1
         }
         draw();
     }
     // function moveRight
     function moveRight() {
         undraw();
         const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
         if (!isAtRightEdge) currentPosition += 1;
         if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
             currentPosition -= 1
         }
         draw();
     }
     // rotate tetromino
     function rotate() {
         undraw();
         currentRotation ++
         if (currentRotation === current.length) {
             currentRotation = 0;
         }
         current = theTetromino[random][currentRotation]
         draw();
     }
     // show-up next tetromino
     const displaySquares = document.querySelectorAll('.mini-grid div')
     const displayWidth = 4;
     let displayIndex = 0;

     const upNextTetromino = [
         [1, displayWidth + 1, displayWidth*2 + 1, 2], //l tetromino
         [0, displayWidth, displayWidth+1, displayWidth*2+1], //z tetromino
         [1, displayWidth, displayWidth+1, displayWidth+2], //t tetromino 
         [0, 1, displayWidth, displayWidth+1], // o tetromino
         [1,displayWidth+1,displayWidth*2+1,displayWidth*3+1] // i tetromino
     ]
     // display mini-grid
     function displayShape() {
         displaySquares.forEach(squares => {
            squares.classList.remove('tetromino')
         })
         upNextTetromino[nextRandom].forEach(index => {
             displaySquares[displayIndex + index].classList.add('tetromino');
         })
     }
     // add functionality to the button
     startBtn.addEventListener('click', () => {
        if (timerId) {
            clearInterval(timerId);
            timerId = null
        } else {
            draw()
            timerId = setInterval(moveDown, 1000);
            nextRandom = Math.floor(Math.random()*theTetromino.length)
            displayShape();
        }
     })
     // add score
     function addScore() {
         for(let i=0; i < 199; i+= width) {
             const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]

             if(row.every(index => squares[index].classList.contains('taken'))){
                 score += 10
                 scoreDisplay.innerHTML = score
                 row.forEach(index => {
                     squares[index].classList.remove('taken');
                     squares[index].classList.remove('tetromino');
                 })
                 const squareRemove = squares.splice(i, width)
                 squares = squareRemove.concat(squares);
                 squares.forEach(cell => grid.appendChild(cell));
             }
         }
     }
     // game over function
     function gameOver() {
         if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
             scoreDisplay.innerHTML = 'Game Over';
             clearInterval(timerId);
         }
     }


})
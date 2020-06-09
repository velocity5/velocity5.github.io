document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#btn-start')
    const width = 10 // set index for the width
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
     timerId = setInterval(moveDown, 1000);
     // assign function to keycodes
     function control(e) {
         if (e.keyCode === 37) {
             moveLeft();
         } else if (e.keyCode === 38) {
            //rotate();
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
                 random = Math.floor(Math.random() * theTetromino.length)
                 current = theTetromino[random][currentRotation]
                 currentPosition = 4
                 draw();
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

})
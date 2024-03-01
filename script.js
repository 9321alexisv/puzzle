// ------------------------------------------- VARIABLES DECLARATION ------------------------------------------------------
const leftArrow = '\u2B05'; // Left arrow
const rightArrow = '\u27A1'; // Right arrow
const upArrow = '\u2B06'; // Up arrow
const downArrow = '\u2B07'; // Down arrow

const urlParams = new URLSearchParams(window.location.search);
const black = urlParams.get('selectedBlack');
const red = urlParams.get('selectedRed');
const blue = urlParams.get('selectedBlue');
const divToChange = document.getElementById('resp1');
const finalPosition = document.getElementById('res6');
const divToChange2 = document.getElementById('resp2');
const divToChange3 = document.getElementById('resp3');

const selectedValueBlack = urlParams.get('selectedBlack');
const selectedValueRed = urlParams.get('selectedRed');
const selectedValueBlue = urlParams.get('selectedBlue');

const selectedDivBlack = document.getElementById(selectedValueBlack);
const selectedDivRed = document.getElementById(selectedValueRed);
const selectedDivBlue = document.getElementById(selectedValueBlue);
const selectedDivRB = document.getElementById(selectedValueBlack); // RED AND BLUE
const selectedDivBB = document.getElementById(selectedValueBlack); // BLACK AND BLUE
const selectedDivBRB = document.getElementById(selectedValueBlack); // BLACK RED BLUE

let initialPosition = {
    currentBlack: black,
    currentBlue: blue,
    currentRed: red
}

let moves = {
    goUp: null,
    goDown: null,
    goLeft: null,
    goRight: null
}

const Positions = {
    ESP1: "esp1",
    ESP2: "esp2",
    ESP3: "esp3",
    ESP4: "esp4",
    ESP5: "esp5",
    ESP6: "esp6",
    ESP7: "esp7",
    ESP8: "esp8",
    ESP9: "esp9",
  };
// ------------------------------------------- VARIABLES DECLARATION ------------------------------------------------------


// ------------------------------------------- FUNCTION ONLOAD ------------------------------------------------------------
window.onload = function() {


    // -------------------- CONDITION FOR THE BLACK CURSOR -------------------

    if (selectedValueBlack) {     
        // Example: Inserting an image
        selectedDivBlack.innerHTML = '<img src="imgs/black.png">';
    }

    // -------------------- CONDITION FOR THE BLACK CURSOR -------------------

    // -------------------- CONDITION FOR THE RED BOX -------------------

    if (selectedValueRed) {
        selectedDivRed.innerHTML = '<img src="imgs/red.png">';
    }

    // -------------------- CONDITION FOR THE RED BOX -------------------

    // -------------------- CONDITION FOR THE BLUE BOX -------------------

    if (selectedValueBlue) {
        selectedDivBlue.innerHTML = '<img src="imgs/blue.png">';
    }

    // -------------------- CONDITION FOR THE BLUE BOX -------------------
    
    // -------------------- CONDITION FOR BLACK + RED -------------------

    if (selectedValueBlack === selectedValueRed) {
        selectedDivRB.innerHTML = '<img src="imgs/red+black.png">';
    }

    // -------------------- CONDITION FOR BLACK + RED -------------------

    // -------------------- CONDITION FOR BLACK + BLUE -------------------

    if (selectedValueBlack === selectedValueBlue) {
        selectedDivBB.innerHTML = '<img src="imgs/blue+black.png">';
    }
    
    // -------------------- CONDITION FOR BLACK + BLUE -------------------

    // -------------------- CONDITION FOR ALL TOGETHER -------------------

    if (selectedValueBlack === selectedValueRed && selectedValueRed === selectedValueBlue) {
        selectedDivBRB.innerHTML = '<img src="imgs/blue+red+black.png">';
    }

    // -------------------- CONDITION FOR ALL TOGETHER -------------------

    // -------------------- CONDITION FOR RED + BLUE -------------------

    if (selectedValueRed === selectedValueBlue && selectedValueRed != selectedValueBlack) {
        alert("THE RED AND BLUE BOX CAN NOT START AT THE SAME POSITION! TRY AGAIN")
        window.location.href = 'index.html';
         
    }
        
    // -------------------- CONDITION FOR RED + BLUE -------------------

}
// ------------------------------------------- FUNCTION ONLOAD ------------------------------------------------------------


// ----------------------------------- FUNCTION BUTTON START --------------------------------------------------------------
function start() {
    const selectBlack = document.getElementById("black").value; 
    const selectRed = document.getElementById("red").value;
    const selectBlue = document.getElementById("blue").value;

    // Rediect to another HTML page
    window.location.href = 'tablero.html?selectedBlack=' + selectBlack
                            +'&selectedRed=' + selectRed
                            +'&selectedBlue='+ selectBlue;

    // alert("The black value is: "+selectBlack);
}
// ----------------------------------- FUNCTION BUTTON START --------------------------------------------------------------


// ----------------------------------- FUNCTION BUTTON RETURN -------------------------------------------------------------
function back() {
    window.location.href = 'index.html';
}   
// ----------------------------------- FUNCTION BUTTON RETURN -------------------------------------------------------------


// ----------------------------------- FUNCTION BUTTON RESOLVE ------------------------------------------------------------
function resolve() {

        //-------------------------------VALIDATIONS FOR RESP1-------------------------------------------------------

    if((red === "esp1"|| red === "esp2"|| red === "esp3") || (blue ==="esp1"||blue === "esp4"||blue === "esp7")){
        divToChange.innerHTML = 'NO SOLUTION';
        divToChange.style.backgroundColor = 'red';
    } else {
        divToChange.innerHTML = 'YES';
        divToChange.style.backgroundColor = 'green';
    }

    if(black === red & red === blue){
        divToChange.innerHTML = 'YOU ALREADY WON!';
        divToChange.style.backgroundColor = 'green';
    }

    //-------------------------------VALIDATIONS FOR RESP1-------------------------------------------------------

    // EXAMPLE TO FILL THE BOARD, RESP2 & RESP3

    if(red==="esp4" & black === "esp5" & blue === "esp6"){
        finalPosition.innerHTML = '<img src="imgs/blue+red+black.png">';
        divToChange2.innerHTML = '5';
        divToChange3.innerHTML = upArrow + leftArrow + downArrow + rightArrow + rightArrow;

    }

    // EXAMPLE TO FILL THE BOARD, RESP2 & RESP3

    //------------------OPTIONS----------------------------------------------------------------------------------

 
      getPossibleMoves;
    //------------------OPTIONS----------------------------------------------------------------------------------
    const movess = getPossibleMoves(black, red, blue);
    alert(JSON.stringify(movess));

}
// ----------------------------------- FUNCTION BUTTON RESOLVE ------------------------------------------------------------


// ----------------------------------- FUNCTION GET POSSIBLE MOVES --------------------------------------------------------
function getPossibleMoves(black,red,blue) {

//----------------------------SWITCH TO SET THE POSSIBLE MOVES--------------------------------

    switch (black) {
      case Positions.ESP1:
        moves = { goUp: null, goDown: Positions.ESP4, goLeft: null, goRight: Positions.ESP2 };
        break;
      case Positions.ESP2:
        moves = { goUp: null, goDown: Positions.ESP5, goLeft: Positions.ESP1, goRight: Positions.ESP3 };
        break;
      case Positions.ESP3:
        moves = { goUp: null, goDown: Positions.ESP6, goLeft: Positions.ESP2, goRight: null };
        break;
      case Positions.ESP4:
        moves = { goUp: Positions.ESP1, goDown: Positions.ESP7, goLeft: null, goRight: Positions.ESP5 };
        break;
      case Positions.ESP5:
        moves = { goUp: Positions.ESP2, goDown: Positions.ESP8, goLeft: Positions.ESP4, goRight: Positions.ESP6 };
        break;
      case Positions.ESP6:
        moves = { goUp: Positions.ESP3, goDown: Positions.ESP9, goLeft: Positions.ESP5, goRight: null };
        break;
      case Positions.ESP7:
        moves = { goUp: Positions.ESP4, goDown: null, goLeft: null, goRight: Positions.ESP8 };
        break;
      case Positions.ESP8:
        moves = { goUp: Positions.ESP5, goDown: null, goLeft: Positions.ESP7, goRight: Positions.ESP9 };
        break;
      case Positions.ESP9:
        moves = { goUp: Positions.ESP6, goDown: null, goLeft: Positions.ESP8, goRight: null };
        break;
    }

//----------------------------SWITCH TO SET THE POSSIBLE MOVES--------------------------------

    //----------------------------CONDITIONS WITH RED AND BLUE -----------------------------------
    // ESP1
    if(black === Positions.ESP1 && blue === Positions.ESP4){
        moves.goLeft = null;
    }
    // ESP1

    // ESP2

    if(black === Positions.ESP2 && blue === Positions.ESP5){
        moves.goDown = null;
    }
    // ESP2

    // ESP3
    if(black === Positions.ESP3 && blue === Positions.ESP2){
        moves.goLeft = null;
    }

    if(black === Positions.ESP3 && blue === Positions.ESP6){
        moves.goDown = null;
    }
    // ESP3

    // ESP4
    if(black === Positions.ESP4 && red === Positions.ESP5){
        moves.goRight = null;
    }
    // ESP4

    // ESP5
    if(black === Positions.ESP5 && blue === Positions.ESP2){
        moves.goUp = null;
    }

    if(black === Positions.ESP5 && red === Positions.ESP4){
        moves.goLeft = null;
    }

    if(black === Positions.ESP5 && red === Positions.ESP6){
        moves.goRight = null;
    }

    if(black === Positions.ESP5 && blue === Positions.ESP8){
        moves.goDown = null;
    }
    // ESP5

    // ESP6
    if(black === Positions.ESP6 && blue === Positions.ESP3){
        moves.goUp = null;
    }

    if(black === Positions.ESP6 && (red === Positions.ESP5 || blue === Positions.ESP5)){
        moves.goLeft = null;
    }

    if(black === Positions.ESP6 && blue === Positions.ESP9){
        moves.goDown = null;
    }
    // ESP6

    // ESP7
    if(black === Positions.ESP7 && red === Positions.ESP4){
        moves.goUp = null;
    }

    if(black === Positions.ESP7 && red === Positions.ESP8){
        moves.goRight = null;
    }

    // ESP7

    // ESP8
    if(black === Positions.ESP8 && (red === Positions.ESP5 || blue === Positions.ESP5)){
        moves.goUp = null;
    }

    if(black === Positions.ESP8 && red === Positions.ESP7){
        moves.goLeft = null;
    }

    if(black === Positions.ESP8 && red === Positions.ESP9){
        moves.goRight = null;
    }
    // ESP8

    // ESP9
    if(black === Positions.ESP9 && (red === Positions.ESP5 || blue === Positions.ESP5)){
        moves.goUp = null;
    }

    if(black === Positions.ESP9 && (red === Positions.ESP8 || blue === Positions.ESP8)){
        moves.goLeft = null;
    }
    // ESP9

    //----------------------------CONDITIONS WITH RED AND BLUE -----------------------------------
    return moves;
}
// ----------------------------------- FUNCTION GET POSSIBLE MOVES --------------------------------------------------------


// ----------------------------------- FUNCTION MOVE  ---------------------------------------------------------------------
function move(black, red, blue){
    getPossibleMoves;

    let possibleMoves = getPossibleMoves(initialPosition.currentBlack, initialPosition.currentRed, initialPosition.currentBlue);

    // Obtener una lista de movimientos válidos
    let validMoves = Object.keys(possibleMoves).filter(move => possibleMoves[move]);

    // Elegir un movimiento al azar
    let randomMoveIndex = Math.floor(Math.random() * validMoves.length);
    let chosenMove = validMoves[randomMoveIndex];

    // Actualizar las posiciones según el movimiento elegido
    initialPosition.currentBlack = possibleMoves[chosenMove];

    // Imprimir el nuevo estado
    alert("Nuevo estado después de mover:"+ JSON.stringify(initialPosition));

}
// ----------------------------------- FUNCTION MOVE  ---------------------------------------------------------------------
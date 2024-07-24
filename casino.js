let playerCollection = document.querySelectorAll('input');

let scoreSpan = document.querySelectorAll('span'); // 0 - 4

let rollTheDiceBtn = document.querySelectorAll('.roll'); // 0 - 4

let endGameBtn = document.querySelector('#endButton');

let winMessage = document.querySelector('#winMessage');


endGameBtn.disabled = true;



// rollTheDiceBtn = [btn1, btn2, btn3, btn4, btn5]
//scoreSpan =       [span1, span2, span3, span4, span5]

// rollTheDiceBtn[0].addEventListener('click', )
// rollTheDiceBtn[1].addEventListener('click', )
// rollTheDiceBtn[2].addEventListener('click', )
// rollTheDiceBtn[3].addEventListener('click', )
// rollTheDiceBtn[4].addEventListener('click', )


// rollTheDiceBtn = [0, 1, 2, 3, 4, 5]


// hof => higher order function:

// rollTheDiceBtn.forEach((value,index)=>{value.addEventListener("click",  diceRoll)})

for(let btn of rollTheDiceBtn){
    // btn.addEventListener("click", ()=>diceRoll(btn.innerText)) // callback
    btn.addEventListener("click", diceRoll)
}

// function addEventListener(event, fun1){
    //    fun1({info: "info"})
// }
let clicks = 0
// let RenukaArray = [6,6,6,6,6,6,6,6,6,2]
// let recnukClick = 0
function diceRoll(e){ // e = {}
    // console.log(e.target.innerText)
     clicks++ 

     if(clicks == 5){
        endGameBtn.disabled = false
     }

    let targetElement = e.target
     targetElement.disabled = true;

    let targetElementId = targetElement.id; // btn1, btn2, btn3, btn4, btn5
    let targetElementIndex = targetElementId[3] - 1 // 1, 2, 3, 4, 5

    // console.log(targetElementId)

    // perform roll the dice: 
    // 1,2,3,4,5,6
    let arr = [1,2,3,4,5,6]
    let randomIndex = parseInt(Math.random()*arr.length)
    let diceValue = arr[randomIndex]

    // renuka => index = 4

    // if(targetElementIndex == 4){
    //     diceValue = 6
    // }

    // console.log(diceValue)

    // scoreSpan[targetElementId] = diceValue
    scoreSpan[targetElementIndex].innerText = diceValue
}

endGameBtn.addEventListener('click', endGame)

function endGame(){

    let maxScore = 0

    for(let t of scoreSpan){
        let value = t.innerText// <span>1</span>
        if(value>maxScore){
            maxScore = value
        }
    }
    // console.log("max",maxScore)

    // find who all have got highest score:
    let nameOfWinner = []
    for(let i = 0; i<=scoreSpan.length-1; i++){
        if(maxScore ==  scoreSpan[i].innerText){
            // console.log(playerCollection[i].value)
            nameOfWinner.push(playerCollection[i].value)
        }
    }
    winMessage.innerText = "Winner is "+ nameOfWinner.join(", ")

    winMessage.className = "win"
    // let style it:

    // winMessage.style.color = "tomato"
    // winMessage.style.backgroundColor = "yellow"
    // winMessage.style.fontSize = "30px"
    // winMessage.style.fontWeight = "bold"
    // winMessage.style.padding = "20px"
    // winMessage.style.border = "2px solid black"

    // winMessage.style.cssText = `
        //  color: tomato;
        //  background-color: yellow;
        //  font-size: 30px;
        //  font-weight: bold;
        //  padding: 20px;
        //  border: 2px solid black;
    // `




}



















// let str = "ramesh"


// // console.log(str[2])
// // console.log(str.charAt(2))


// let s = "btn1"

// console.log(s.charAt(3))
// console.log(s[3])




// str[2] or str.charAt(2) // m
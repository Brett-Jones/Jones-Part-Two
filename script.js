let introName = prompt("Welcome to GC mini golf! What is your name?");
let holeCount = prompt(`Hi, ${introName}! Would you like to play 3 or 6 holes today?`);
let par = holeCount * 3;
let total = 0;

for(let i = 0; i < holeCount; i++){
    let strokes = prompt(`How many putts for hole ${i + 1}?`);
    total = total + Number(strokes);
}   

let difference = total - par;


if(difference === 0){
    console.log(`Good game, ${introName}. Your total par was: 0.`);
}   else if(difference < 0){
    console.log(`Great job, ${introName}! Your total par was: ${difference}.`);
}else{
    console.log(`Nice try, ${introName}... Your total par was: +${difference}.`)
}

















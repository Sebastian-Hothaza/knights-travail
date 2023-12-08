import { getPath } from "./algo";

const startPosn = document.querySelector("#startPosn");
const endPosn = document.querySelector("#endPosn");
const result = document.querySelector("#result");

document.querySelector("#clear").addEventListener("click", () => {
    startPosn.value = "";
    endPosn.value = "";
})

// Calulate handling
document.querySelector("#submit").addEventListener("click", () => {
    if (startPosn.value === endPosn.value){
        result.textContent = "ERROR: Coordinates cannot be the same!";
    } else if (startPosn.value>10 && startPosn.value<89 &&endPosn.value>10 && endPosn.value<89){
        result.textContent = "Squares visited on shortest path: "+getPath(Math.floor(startPosn.value/10), startPosn.value%10,
        Math.floor(endPosn.value/10), endPosn.value%10,);
    } else{
        result.textContent = "ERROR: Coordinates out of range!";
    }
})                        

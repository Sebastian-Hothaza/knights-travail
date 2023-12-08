import { getPath } from "./algo";

const startPosn = document.querySelector("#startPosn");
const endPosn = document.querySelector("#endPosn");


document.querySelector("#clear").addEventListener("click", () => {
    startPosn.value = "";
    endPosn.value = "";
})

// Calulate handling
document.querySelector("#submit").addEventListener("click", () => {
    const result = document.querySelector("#result");
    result.textContent = "Squares visited on shortest path: "+getPath(Math.floor(startPosn.value/10), startPosn.value%10,
                                    Math.floor(endPosn.value/10), endPosn.value%10,);
})


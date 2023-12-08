export { getPath }

const posnFactory = (x,y) => {

    // Given a posn, returns an araay of posn corresponding to reachable posn
    function getNext(){

    }

    function consolePrint(){
        console.log("("+x+","+y+")");
    }
    function print(){
        return "("+x+","+y+")";
    }
    return{
        get x(){return x;}, set x(newX){x=newX},
        get y(){return y;}, set y(newY){y=newY},
        consolePrint, print
    };
};




// Returns array of posns visited on shortest path from start to destination
// REQUIRES: inout be valid. Sanitation should be done in index.js
function getPath(startX, startY, endX, endY){
    const myPosnStart = posnFactory(startX, startY);
    const myPosnEnd = posnFactory(endX, endY);
    let result = [myPosnStart.print(), myPosnEnd.print()];
    

    return result;
}


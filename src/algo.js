export { getPath }

const posnFactory = (x,y) => {

    // Given a posn, returns an araay of posn corresponding to reachable posn
    function getNext(){

    }

    function print(){
        console.log("("+x+","+y+")");
    }
    return{
        get x(){return x;}, set x(newX){x=newX},
        get y(){return y;}, set y(newY){y=newY},
        print
    };
};




function getPath(startX, startY, endX, endY){
    const myPosnStart = posnFactory(startX, startY);
    const myPosnEnd = posnFactory(endX, endY);
    

    return "SHORTEST PATH"
}


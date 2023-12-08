export { getPath }

const posnFactory = (x,y,parent) => {
    let children = []; 

    // Given a posn, returns an array of posn corresponding to reachable posn
    function getNext(){
        let result = [];

        // Trying each of the 8 candidates
        if (this.y+2<9){ 
            if (this.x-1>0) result.push(posnFactory(this.x-1,this.y+2,this));
            if (this.x+1<9) result.push(posnFactory(this.x+1,this.y+2,this));
        }
        if (this.x+2<9){ 
            if (this.y+1<9) result.push(posnFactory(this.x+2,y+1,this));
            if (this.y-1>0) result.push(posnFactory(this.x+2,y-1,this));
        }
        if (this.y-2>0){ 
            if (this.x+1<9) result.push(posnFactory(this.x+1,this.y-2,this));
            if (this.x-1>0) result.push(posnFactory(this.x-1,this.y-2,this));
        }
        if (this.x-2>0){ 
            if (this.y-1>0) result.push(posnFactory(this.x-2,this.y-1,this));
            if (this.y+1<9) result.push(posnFactory(this.x-2,this.y+1,this));
        }
        return result;
    }

    // Given a posn, returns an array of posns tracing back up to root
    function tracePath(posn, root, arr){
        if (posn === root) return arr.reverse();
        arr.push(posn.parent);
        tracePath(posn.parent, root, arr);
    }
    return{
        get x(){return x;}, set x(newX){x=newX},
        get y(){return y;}, set y(newY){y=newY},
        get parent(){return parent;}, set parent(newParent){parent=newParent},
        get children(){return children;}, set children(newChildren){children=newChildren},
        getNext, tracePath
    };
};

// Returns nicely formatted text corresponding to given posn array
function printPosnArray(arr){
    let text=""
    for (let i=0; i<arr.length-1; i++){
        text+="("+arr[i].x+","+arr[i].y+")-->"
    }
    text+="("+arr[arr.length-1].x+","+arr[arr.length-1].y+")"
    return text;
}


// Returns text-friendly array of posns visited on shortest path from start to destination 
// REQUIRES: inout be valid. Sanitation should be done in index.js
function getPath(startX, startY, endX, endY){
    const myPosnStart = posnFactory(startX, startY);
    const myPosnEnd = posnFactory(endX, endY);
    let result = [];
    
    // We will apply a DFS style traversal approach
    myPosnStart.children = myPosnStart.getNext(); // Get children of starting node
    let queue = myPosnStart.children;
 
    while (queue.length){
        // Base case, visitation
        result.push(queue[0]);
        if (queue[0].x === myPosnEnd.x && queue[0].y === myPosnEnd.y) {
            queue[0].tracePath(queue[0], myPosnStart, result);
            break;
        }
        queue = queue.concat(queue[0].getNext()) // Merge arrays
        queue.splice(0,1); // Remove posn from front of queue
        result.splice(0,1);
    }
    return printPosnArray(result);
}


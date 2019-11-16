// Rover Object Goes Here
// ======================
let rover ={
  direction = "N",
  x:0,
  y:0,
};

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}
if(rover.direction == "N"){
  roverDirection = "W"
}
else if(rover.direction == "W"){
  roverDirection ="S"
}
else if(rover.direction == "S"){
  roverDirection = "E"
}
else if(rover.direction == "E"){
  roverDirection = "N"
};



function turnRight(rover){
  console.log("turnRight was called!");
}
if(rover.direction =="N"){
  roverDirection ="E"
}
else if(rover.direction =="E"){
  roverDirection =="S"
}
else if(rover.direction =="S"){
  roverDirection =="W"
}
else if(rover.direction =="W"){
  roverDirection ="N"
};


function moveForward(rover){
  console.log("moveForward was called")
}
if(rover.direction =="N"){
  rover.y =-1,
  rover.x =0
}

else if(rover.direction =="E"){
  rover.y =0,
  rover.x =1
}

else if (rover.direction =="S"){
  rover.y =1,
  rover.x =0
}

else if(rover.direction =="W"){
  rover.y =0,
  rover.x =-1
}





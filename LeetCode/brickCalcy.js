
function breachWall(ln, ht) {
  const squareInches = 144;
  return (ln*ht) * squareInches;
}

function brickCalcy(wallWidth, wallLength, brickHeight, bricklength) {
    const squareInches = 144;
    let wallSqrInches = (wallWidth*wallLength) * squareInches;
    const brickSqrInches = bricklength * brickHeight;
    const brchWall = breachWall(3, 6);
     console.log(brchWall, wallSqrInches);
    if(brchWall) {
      wallSqrInches -= brchWall     
    }
    console.log(brchWall, wallSqrInches);
    return wallSqrInches/brickSqrInches;
    //console.log(wallSqrInches, brickSqrInches, wallSqrInches/brickSqrInches, (wallSqrInches/brickSqrInches) * 2);
}

console.log(brickCalcy(12, 10, 7.5, 3.5));
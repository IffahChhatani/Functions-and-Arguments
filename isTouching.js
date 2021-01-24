function isTouching(fixedBlock, movingBlock) {

    if (fixedBlock.x - movingBlock.x === movingBlock.width / 2 + fixedBlock.width / 2 ||
      movingBlock.x - fixedBlock.x === movingBlock.width / 2 + fixedBlock.width / 2 ||
      fixedBlock.y - movingBlock.y === movingBlock.height / 2 + fixedBlock.height / 2 ||
      movingBlock.x - fixedBlock.x === movingBlock.height / 2 + fixedBlock.height / 2) {
      return true;
    } else {
      return false;
    }
  }
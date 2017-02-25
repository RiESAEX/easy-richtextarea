'use strict';

class Selection {
  constructor(startPosition, endPosition) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  getStartPosition() {
    return this.startPosition;
  }

  getEndPosition() {
    return this.endPosition;
  }

  setStartPosition(startPosition) {
    this.startPosition = startPosition;
  }

  setEndPosition(endPosition) {
    this.endPosition = endPosition;
  }

  isEqualTo(selection) {
    var selectionStartPosition = selection.getStartPosition(),
        selectionEndPosition = selection.getEndPosition(),
        startPositionsEqual = (this.startPosition === selectionStartPosition),
        endPositionsEqual = (this.endPosition === selectionEndPosition),
        equalTo = (startPositionsEqual && endPositionsEqual);

    return equalTo;
  }

  isDifferentTo(selection) {
    var equalTo = this.isEqualTo(selection),
        differentTo = !equalTo;

    return differentTo;
  }

  static fromNothing() {
    var startPosition = 0,
        endPosition = 0,
        selection = new Selection(startPosition, endPosition);

    return selection;
  }
}

module.exports = Selection;

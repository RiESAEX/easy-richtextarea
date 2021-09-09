"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Selection = /*#__PURE__*/ function() {
    function Selection(startPosition, endPosition) {
        _classCallCheck(this, Selection);
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }
    _createClass(Selection, [
        {
            key: "getStartPosition",
            value: function getStartPosition() {
                return this.startPosition;
            }
        },
        {
            key: "getEndPosition",
            value: function getEndPosition() {
                return this.endPosition;
            }
        },
        {
            key: "setStartPosition",
            value: function setStartPosition(startPosition) {
                this.startPosition = startPosition;
            }
        },
        {
            key: "setEndPosition",
            value: function setEndPosition(endPosition) {
                this.endPosition = endPosition;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(selection) {
                var equalTo = false;
                if (selection !== null) {
                    var selectionStartPosition = selection.getStartPosition(), selectionEndPosition = selection.getEndPosition(), startPositionsEqual = this.startPosition === selectionStartPosition, endPositionsEqual = this.endPosition === selectionEndPosition;
                    equalTo = startPositionsEqual && endPositionsEqual;
                }
                return equalTo;
            }
        },
        {
            key: "isDifferentTo",
            value: function isDifferentTo(selection) {
                var equalTo = this.isEqualTo(selection), differentTo = !equalTo;
                return differentTo;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var startPosition = 0, endPosition = 0, selection = new Selection(startPosition, endPosition);
                return selection;
            }
        },
        {
            key: "fromDOMElement",
            value: function fromDOMElement(domElement) {
                var selectionStart = domElement.selectionStart, selectionEnd = domElement.selectionEnd, startPosition = selectionStart, endPosition = selectionEnd, selection = new Selection(startPosition, endPosition);
                return selection;
            }
        },
        {
            key: "fromStartPositionAndEndPosition",
            value: function fromStartPositionAndEndPosition(startPosition, endPosition) {
                var selection = new Selection(startPosition, endPosition);
                return selection;
            }
        }
    ]);
    return Selection;
}();
exports.default = Selection;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rpb24uanMiXSwibmFtZXMiOlsiU2VsZWN0aW9uIiwiY29uc3RydWN0b3IiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJnZXRTdGFydFBvc2l0aW9uIiwiZ2V0RW5kUG9zaXRpb24iLCJzZXRTdGFydFBvc2l0aW9uIiwic2V0RW5kUG9zaXRpb24iLCJpc0VxdWFsVG8iLCJzZWxlY3Rpb24iLCJlcXVhbFRvIiwic2VsZWN0aW9uU3RhcnRQb3NpdGlvbiIsInNlbGVjdGlvbkVuZFBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbnNFcXVhbCIsImVuZFBvc2l0aW9uc0VxdWFsIiwiaXNEaWZmZXJlbnRUbyIsImRpZmZlcmVudFRvIiwiZnJvbU5vdGhpbmciLCJmcm9tRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsImZyb21TdGFydFBvc2l0aW9uQW5kRW5kUG9zaXRpb24iXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVTLFNBQVMsaUJBQWYsUUFBUTthQUFGLFNBQVMsQ0FDaEIsYUFBYSxFQUFFLFdBQVc7OEJBRG5CLFNBQVM7UUFFMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVzs7aUJBSGIsU0FBUzs7WUFNNUIsR0FBZ0IsR0FBaEIsZ0JBQWdCO21CQUFoQixRQUFRLENBQVIsZ0JBQWdCLEdBQUcsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQzNCLENBQUM7OztZQUVELEdBQWMsR0FBZCxjQUFjO21CQUFkLFFBQVEsQ0FBUixjQUFjLEdBQUcsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ3pCLENBQUM7OztZQUVELEdBQWdCLEdBQWhCLGdCQUFnQjttQkFBaEIsUUFBUSxDQUFSLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWE7WUFDcEMsQ0FBQzs7O1lBRUQsR0FBYyxHQUFkLGNBQWM7bUJBQWQsUUFBUSxDQUFSLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXO1lBQ2hDLENBQUM7OztZQUVELEdBQVMsR0FBVCxTQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3BCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSztnQkFFbkIsRUFBRSxFQUFFLFNBQVMsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsR0FBSyxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsSUFDbkQsb0JBQW9CLEdBQUcsU0FBUyxDQUFDLGNBQWMsSUFDL0MsbUJBQW1CLEdBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxzQkFBc0IsRUFDcEUsaUJBQWlCLEdBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxvQkFBb0I7b0JBRXBFLE9BQU8sR0FBSSxtQkFBbUIsSUFBSSxpQkFBaUI7Z0JBQ3JELENBQUM7Z0JBRUQsTUFBTSxDQUFDLE9BQU87WUFDaEIsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDeEIsR0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FDbEMsV0FBVyxJQUFJLE9BQU87Z0JBRTVCLE1BQU0sQ0FBQyxXQUFXO1lBQ3BCLENBQUM7Ozs7WUFFTSxHQUFXLEdBQVgsV0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUMsYUFBYSxHQUFHLENBQUMsRUFDakIsV0FBVyxHQUFHLENBQUMsRUFDZixTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsV0FBVztnQkFFMUQsTUFBTSxDQUFDLFNBQVM7WUFDbEIsQ0FBQzs7O1lBRU0sR0FBYyxHQUFkLGNBQWM7bUJBQXJCLFFBQVEsQ0FBRCxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2pDLEdBQUssQ0FBRyxjQUFjLEdBQW1CLFVBQVUsQ0FBM0MsY0FBYyxFQUFFLFlBQVksR0FBSyxVQUFVLENBQTNCLFlBQVksRUFDOUIsYUFBYSxHQUFHLGNBQWMsRUFDOUIsV0FBVyxHQUFHLFlBQVksRUFDMUIsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFdBQVc7Z0JBRTFELE1BQU0sQ0FBQyxTQUFTO1lBRWxCLENBQUM7OztZQUVNLEdBQStCLEdBQS9CLCtCQUErQjttQkFBdEMsUUFBUSxDQUFELCtCQUErQixDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQztnQkFDbEUsR0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxXQUFXO2dCQUUxRCxNQUFNLENBQUMsU0FBUztZQUNsQixDQUFDOzs7V0FsRWtCLFNBQVM7O2tCQUFULFNBQVMifQ==
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgICB0aGlzLmVuZFBvc2l0aW9uID0gZW5kUG9zaXRpb247XG4gIH1cblxuICBnZXRTdGFydFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UG9zaXRpb247XG4gIH1cblxuICBnZXRFbmRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lbmRQb3NpdGlvbjtcbiAgfVxuXG4gIHNldFN0YXJ0UG9zaXRpb24oc3RhcnRQb3NpdGlvbikge1xuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gIH1cblxuICBzZXRFbmRQb3NpdGlvbihlbmRQb3NpdGlvbikge1xuICAgIHRoaXMuZW5kUG9zaXRpb24gPSBlbmRQb3NpdGlvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzZWxlY3Rpb24pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKHNlbGVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRTdGFydFBvc2l0aW9uKCksXG4gICAgICAgICAgICBzZWxlY3Rpb25FbmRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRFbmRQb3NpdGlvbigpLFxuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbnNFcXVhbCA9ICh0aGlzLnN0YXJ0UG9zaXRpb24gPT09IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgICAgZW5kUG9zaXRpb25zRXF1YWwgPSAodGhpcy5lbmRQb3NpdGlvbiA9PT0gc2VsZWN0aW9uRW5kUG9zaXRpb24pO1xuXG4gICAgICBlcXVhbFRvID0gKHN0YXJ0UG9zaXRpb25zRXF1YWwgJiYgZW5kUG9zaXRpb25zRXF1YWwpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNEaWZmZXJlbnRUbyhzZWxlY3Rpb24pIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8oc2VsZWN0aW9uKSxcbiAgICAgICAgICBkaWZmZXJlbnRUbyA9ICFlcXVhbFRvO1xuXG4gICAgcmV0dXJuIGRpZmZlcmVudFRvO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSAwLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gMCxcbiAgICAgICAgICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQsIC8vL1xuICAgICAgICAgIGVuZFBvc2l0aW9uID0gc2VsZWN0aW9uRW5kLCAvLy9cbiAgICAgICAgICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRQb3NpdGlvbkFuZEVuZFBvc2l0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbihzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gc2VsZWN0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0aW9uIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsImdldEVuZFBvc2l0aW9uIiwic2V0U3RhcnRQb3NpdGlvbiIsInNldEVuZFBvc2l0aW9uIiwiaXNFcXVhbFRvIiwic2VsZWN0aW9uIiwiZXF1YWxUbyIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJzZWxlY3Rpb25FbmRQb3NpdGlvbiIsInN0YXJ0UG9zaXRpb25zRXF1YWwiLCJlbmRQb3NpdGlvbnNFcXVhbCIsImlzRGlmZmVyZW50VG8iLCJkaWZmZXJlbnRUbyIsImZyb21Ob3RoaW5nIiwiZnJvbURPTUVsZW1lbnQiLCJkb21FbGVtZW50Iiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJmcm9tU3RhcnRQb3NpdGlvbkFuZEVuZFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFU0EsU0FBUyxpQkFBZixRQUFRO2FBQUZBLFNBQVMsQ0FDaEJDLGFBQWEsRUFBRUMsV0FBVzs4QkFEbkJGLFNBQVM7UUFFMUIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBLGFBQWE7UUFDbEMsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLFdBQVc7O2lCQUhiRixTQUFTOztZQU01QkcsR0FBZ0IsRUFBaEJBLENBQWdCO21CQUFoQkEsUUFBUSxDQUFSQSxnQkFBZ0IsR0FBRyxDQUFDO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDRixhQUFhO1lBQzNCLENBQUM7OztZQUVERyxHQUFjLEVBQWRBLENBQWM7bUJBQWRBLFFBQVEsQ0FBUkEsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUNGLFdBQVc7WUFDekIsQ0FBQzs7O1lBRURHLEdBQWdCLEVBQWhCQSxDQUFnQjttQkFBaEJBLFFBQVEsQ0FBUkEsZ0JBQWdCLENBQUNKLGFBQWEsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUNBLGFBQWEsR0FBR0EsYUFBYTtZQUNwQyxDQUFDOzs7WUFFREssR0FBYyxFQUFkQSxDQUFjO21CQUFkQSxRQUFRLENBQVJBLGNBQWMsQ0FBQ0osV0FBVyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO1lBQ2hDLENBQUM7OztZQUVESyxHQUFTLEVBQVRBLENBQVM7bUJBQVRBLFFBQVEsQ0FBUkEsU0FBUyxDQUFDQyxTQUFTLEVBQUUsQ0FBQztnQkFDcEIsR0FBRyxDQUFDQyxPQUFPLEdBQUcsS0FBSztnQkFFbkIsRUFBRSxFQUFFRCxTQUFTLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLEdBQUssQ0FBQ0Usc0JBQXNCLEdBQUdGLFNBQVMsQ0FBQ0wsZ0JBQWdCLElBQ25EUSxvQkFBb0IsR0FBR0gsU0FBUyxDQUFDSixjQUFjLElBQy9DUSxtQkFBbUIsR0FBSSxJQUFJLENBQUNYLGFBQWEsS0FBS1Msc0JBQXNCLEVBQ3BFRyxpQkFBaUIsR0FBSSxJQUFJLENBQUNYLFdBQVcsS0FBS1Msb0JBQW9CO29CQUVwRUYsT0FBTyxHQUFJRyxtQkFBbUIsSUFBSUMsaUJBQWlCO2dCQUNyRCxDQUFDO2dCQUVELE1BQU0sQ0FBQ0osT0FBTztZQUNoQixDQUFDOzs7WUFFREssR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsQ0FBQ04sU0FBUyxFQUFFLENBQUM7Z0JBQ3hCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxTQUFTLEdBQ2xDTyxXQUFXLElBQUlOLE9BQU87Z0JBRTVCLE1BQU0sQ0FBQ00sV0FBVztZQUNwQixDQUFDOzs7O1lBRU1DLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFDcEIsR0FBSyxDQUFDZixhQUFhLEdBQUcsQ0FBQyxFQUNqQkMsV0FBVyxHQUFHLENBQUMsRUFDZk0sU0FBUyxHQUFHLEdBQUcsQ0FBQ1IsU0FBUyxDQUFDQyxhQUFhLEVBQUVDLFdBQVc7Z0JBRTFELE1BQU0sQ0FBQ00sU0FBUztZQUNsQixDQUFDOzs7WUFFTVMsR0FBYyxFQUFkQSxDQUFjO21CQUFyQixRQUFRLENBQURBLGNBQWMsQ0FBQ0MsVUFBVSxFQUFFLENBQUM7Z0JBQ2pDLEdBQUssQ0FBR0MsY0FBYyxHQUFtQkQsVUFBVSxDQUEzQ0MsY0FBYyxFQUFFQyxZQUFZLEdBQUtGLFVBQVUsQ0FBM0JFLFlBQVksRUFDOUJuQixhQUFhLEdBQUdrQixjQUFjLEVBQzlCakIsV0FBVyxHQUFHa0IsWUFBWSxFQUMxQlosU0FBUyxHQUFHLEdBQUcsQ0FBQ1IsU0FBUyxDQUFDQyxhQUFhLEVBQUVDLFdBQVc7Z0JBRTFELE1BQU0sQ0FBQ00sU0FBUztZQUVsQixDQUFDOzs7WUFFTWEsR0FBK0IsRUFBL0JBLENBQStCO21CQUF0QyxRQUFRLENBQURBLCtCQUErQixDQUFDcEIsYUFBYSxFQUFFQyxXQUFXLEVBQUUsQ0FBQztnQkFDbEUsR0FBSyxDQUFDTSxTQUFTLEdBQUcsR0FBRyxDQUFDUixTQUFTLENBQUNDLGFBQWEsRUFBRUMsV0FBVztnQkFFMUQsTUFBTSxDQUFDTSxTQUFTO1lBQ2xCLENBQUM7OztXQWxFa0JSLFNBQVM7O2tCQUFUQSxTQUFTIn0=
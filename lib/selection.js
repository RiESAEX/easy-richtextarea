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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgICB0aGlzLmVuZFBvc2l0aW9uID0gZW5kUG9zaXRpb247XG4gIH1cblxuICBnZXRTdGFydFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UG9zaXRpb247XG4gIH1cblxuICBnZXRFbmRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lbmRQb3NpdGlvbjtcbiAgfVxuXG4gIHNldFN0YXJ0UG9zaXRpb24oc3RhcnRQb3NpdGlvbikge1xuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gIH1cblxuICBzZXRFbmRQb3NpdGlvbihlbmRQb3NpdGlvbikge1xuICAgIHRoaXMuZW5kUG9zaXRpb24gPSBlbmRQb3NpdGlvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzZWxlY3Rpb24pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKHNlbGVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRTdGFydFBvc2l0aW9uKCksXG4gICAgICAgICAgICBzZWxlY3Rpb25FbmRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRFbmRQb3NpdGlvbigpLFxuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbnNFcXVhbCA9ICh0aGlzLnN0YXJ0UG9zaXRpb24gPT09IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgICAgZW5kUG9zaXRpb25zRXF1YWwgPSAodGhpcy5lbmRQb3NpdGlvbiA9PT0gc2VsZWN0aW9uRW5kUG9zaXRpb24pO1xuXG4gICAgICBlcXVhbFRvID0gKHN0YXJ0UG9zaXRpb25zRXF1YWwgJiYgZW5kUG9zaXRpb25zRXF1YWwpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNEaWZmZXJlbnRUbyhzZWxlY3Rpb24pIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8oc2VsZWN0aW9uKSxcbiAgICAgICAgICBkaWZmZXJlbnRUbyA9ICFlcXVhbFRvO1xuXG4gICAgcmV0dXJuIGRpZmZlcmVudFRvO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSAwLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gMCxcbiAgICAgICAgICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQsIC8vL1xuICAgICAgICAgIGVuZFBvc2l0aW9uID0gc2VsZWN0aW9uRW5kLCAvLy9cbiAgICAgICAgICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRQb3NpdGlvbkFuZEVuZFBvc2l0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbihzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gc2VsZWN0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0aW9uIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsImdldEVuZFBvc2l0aW9uIiwic2V0U3RhcnRQb3NpdGlvbiIsInNldEVuZFBvc2l0aW9uIiwiaXNFcXVhbFRvIiwic2VsZWN0aW9uIiwiZXF1YWxUbyIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJzZWxlY3Rpb25FbmRQb3NpdGlvbiIsInN0YXJ0UG9zaXRpb25zRXF1YWwiLCJlbmRQb3NpdGlvbnNFcXVhbCIsImlzRGlmZmVyZW50VG8iLCJkaWZmZXJlbnRUbyIsImZyb21Ob3RoaW5nIiwiZnJvbURPTUVsZW1lbnQiLCJkb21FbGVtZW50Iiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJmcm9tU3RhcnRQb3NpdGlvbkFuZEVuZFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVFLElBQUEsQUFBTUEsU0FBUyxpQkNGM0IsQURFWTthQUFNQSxTQUFTLENBQ2hCQyxhQUFhLEVBQUVDLFdBQVc7O1FBQ3BDLElBQUksQ0FBQ0QsYUFBYSxHQUFHQSxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLFdBQVcsQ0FBQzs7OztZQUdqQ0MsR0FBZ0IsRUFBaEJBLGtCQUFnQjtZRVJsQixPRlFFQSxTQUFBQSxnQkFBZ0IsR0FBRztnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWEsQ0FBQzthQUMzQjs7O1lBRURHLEdBQWMsRUFBZEEsZ0JBQWM7WUVaaEIsT0ZZRUEsU0FBQUEsY0FBYyxHQUFHO2dCQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXLENBQUM7YUFDekI7OztZQUVERyxHQUFnQixFQUFoQkEsa0JBQWdCO1lFaEJsQixPRmdCRUEsU0FBQUEsZ0JBQWdCLENBQUNKLGFBQWEsRUFBRTtnQkFDOUIsSUFBSSxDQUFDQSxhQUFhLEdBQUdBLGFBQWEsQ0FBQzthQUNwQzs7O1lBRURLLEdBQWMsRUFBZEEsZ0JBQWM7WUVwQmhCLE9Gb0JFQSxTQUFBQSxjQUFjLENBQUNKLFdBQVcsRUFBRTtnQkFDMUIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQzthQUNoQzs7O1lBRURLLEdBQVMsRUFBVEEsV0FBUztZRXhCWCxPRndCRUEsU0FBQUEsU0FBUyxDQUFDQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUlDLE9BQU8sR0FBRyxLQUFLLEFBQUM7Z0JBRXBCLElBQUlELFNBQVMsS0FBSyxJQUFJLEVBQUU7b0JBQ3RCLElBQU1FLHNCQUFzQixHQUFHRixTQUFTLENBQUNMLGdCQUFnQixFQUFFLEVBQ3JEUSxvQkFBb0IsR0FBR0gsU0FBUyxDQUFDSixjQUFjLEVBQUUsRUFDakRRLG1CQUFtQixHQUFJLElBQUksQ0FBQ1gsYUFBYSxLQUFLUyxzQkFBc0IsQUFBQyxFQUNyRUcsaUJBQWlCLEdBQUksSUFBSSxDQUFDWCxXQUFXLEtBQUtTLG9CQUFvQixBQUFDLEFBQUM7b0JBRXRFRixPQUFPLEdBQUlHLG1CQUFtQixJQUFJQyxpQkFBaUIsQUFBQyxDQUFDO2lCQUN0RDtnQkFFRCxPQUFPSixPQUFPLENBQUM7YUFDaEI7OztZQUVESyxHQUFhLEVBQWJBLGVBQWE7WUV2Q2YsT0Z1Q0VBLFNBQUFBLGFBQWEsQ0FBQ04sU0FBUyxFQUFFO2dCQUN2QixJQUFNQyxPQUFPLEdBQUcsSUFBSSxDQUFDRixTQUFTLENBQUNDLFNBQVMsQ0FBQyxFQUNuQ08sV0FBVyxHQUFHLENBQUNOLE9BQU8sQUFBQztnQkFFN0IsT0FBT00sV0FBVyxDQUFDO2FBQ3BCOzs7O1lBRU1DLEdBQVcsRUFBWEEsYUFBVztZRTlDcEIsT0Y4Q0UsU0FBT0EsV0FBVyxHQUFHO2dCQUNuQixJQUFNZixhQUFhLEdBQUcsQ0FBQyxFQUNqQkMsV0FBVyxHQUFHLENBQUMsRUFDZk0sU0FBUyxHQUFHLElBQUlSLFNBQVMsQ0FBQ0MsYUFBYSxFQUFFQyxXQUFXLENBQUMsQUFBQztnQkFFNUQsT0FBT00sU0FBUyxDQUFDO2FBQ2xCOzs7WUFFTVMsR0FBYyxFQUFkQSxnQkFBYztZRXREdkIsT0ZzREUsU0FBT0EsY0FBYyxDQUFDQyxVQUFVLEVBQUU7Z0JBQ2hDLElBQVFDLGNBQWMsR0FBbUJELFVBQVUsQ0FBM0NDLGNBQWMsRUFBRUMsWUFBWSxHQUFLRixVQUFVLENBQTNCRSxZQUFZLEVBQzlCbkIsYUFBYSxHQUFHa0IsY0FBYyxFQUM5QmpCLFdBQVcsR0FBR2tCLFlBQVksRUFDMUJaLFNBQVMsR0FBRyxJQUFJUixTQUFTLENBQUNDLGFBQWEsRUFBRUMsV0FBVyxDQUFDLEFBQUM7Z0JBRTVELE9BQU9NLFNBQVMsQ0FBQzthQUVsQjs7O1lBRU1hLEdBQStCLEVBQS9CQSxpQ0FBK0I7WUVoRXhDLE9GZ0VFLFNBQU9BLCtCQUErQixDQUFDcEIsYUFBYSxFQUFFQyxXQUFXLEVBQUU7Z0JBQ2pFLElBQU1NLFNBQVMsR0FBRyxJQUFJUixTQUFTLENBQUNDLGFBQWEsRUFBRUMsV0FBVyxDQUFDLEFBQUM7Z0JBRTVELE9BQU9NLFNBQVMsQ0FBQzthQUNsQjs7OztDQUNGLEVBQUE7a0JBbkVvQlIsU0FBUyJ9
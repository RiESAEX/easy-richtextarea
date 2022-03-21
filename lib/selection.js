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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgICB0aGlzLmVuZFBvc2l0aW9uID0gZW5kUG9zaXRpb247XG4gIH1cblxuICBnZXRTdGFydFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UG9zaXRpb247XG4gIH1cblxuICBnZXRFbmRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lbmRQb3NpdGlvbjtcbiAgfVxuXG4gIHNldFN0YXJ0UG9zaXRpb24oc3RhcnRQb3NpdGlvbikge1xuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gIH1cblxuICBzZXRFbmRQb3NpdGlvbihlbmRQb3NpdGlvbikge1xuICAgIHRoaXMuZW5kUG9zaXRpb24gPSBlbmRQb3NpdGlvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzZWxlY3Rpb24pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKHNlbGVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRTdGFydFBvc2l0aW9uKCksXG4gICAgICAgICAgICBzZWxlY3Rpb25FbmRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRFbmRQb3NpdGlvbigpLFxuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbnNFcXVhbCA9ICh0aGlzLnN0YXJ0UG9zaXRpb24gPT09IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgICAgZW5kUG9zaXRpb25zRXF1YWwgPSAodGhpcy5lbmRQb3NpdGlvbiA9PT0gc2VsZWN0aW9uRW5kUG9zaXRpb24pO1xuXG4gICAgICBlcXVhbFRvID0gKHN0YXJ0UG9zaXRpb25zRXF1YWwgJiYgZW5kUG9zaXRpb25zRXF1YWwpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNEaWZmZXJlbnRUbyhzZWxlY3Rpb24pIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8oc2VsZWN0aW9uKSxcbiAgICAgICAgICBkaWZmZXJlbnRUbyA9ICFlcXVhbFRvO1xuXG4gICAgcmV0dXJuIGRpZmZlcmVudFRvO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSAwLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gMCxcbiAgICAgICAgICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQsIC8vL1xuICAgICAgICAgIGVuZFBvc2l0aW9uID0gc2VsZWN0aW9uRW5kLCAvLy9cbiAgICAgICAgICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRQb3NpdGlvbkFuZEVuZFBvc2l0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbihzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gc2VsZWN0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0aW9uIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsImdldEVuZFBvc2l0aW9uIiwic2V0U3RhcnRQb3NpdGlvbiIsInNldEVuZFBvc2l0aW9uIiwiaXNFcXVhbFRvIiwic2VsZWN0aW9uIiwiZXF1YWxUbyIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJzZWxlY3Rpb25FbmRQb3NpdGlvbiIsInN0YXJ0UG9zaXRpb25zRXF1YWwiLCJlbmRQb3NpdGlvbnNFcXVhbCIsImlzRGlmZmVyZW50VG8iLCJkaWZmZXJlbnRUbyIsImZyb21Ob3RoaW5nIiwiZnJvbURPTUVsZW1lbnQiLCJkb21FbGVtZW50Iiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJmcm9tU3RhcnRQb3NpdGlvbkFuZEVuZFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBOzs7Ozs7Ozs7OERBQUE7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7OztBQUVlLElBQUEsQUFBTUEsU0FBUyxpQkNGM0IsQURFWTthQUFNQSxTQUFTLENBQ2hCQyxhQUFhLEVBQUVDLFdBQVc7d0NBSHhDO1FBSUksSUFBSSxDQUFDRCxhQUFhLEdBQUdBLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVyxDQUFDOzs7O1lBR2pDQyxHQUFnQixFQUFoQkEsa0JBQWdCO1lFUmxCLE9GUUVBLFNBQUFBLGdCQUFnQixHQUFHO2dCQUNqQixPQUFPLElBQUksQ0FBQ0YsYUFBYSxDQUFDO2FBQzNCOzs7WUFFREcsR0FBYyxFQUFkQSxnQkFBYztZRVpoQixPRllFQSxTQUFBQSxjQUFjLEdBQUc7Z0JBQ2YsT0FBTyxJQUFJLENBQUNGLFdBQVcsQ0FBQzthQUN6Qjs7O1lBRURHLEdBQWdCLEVBQWhCQSxrQkFBZ0I7WUVoQmxCLE9GZ0JFQSxTQUFBQSxnQkFBZ0IsQ0FBQ0osYUFBYSxFQUFFO2dCQUM5QixJQUFJLENBQUNBLGFBQWEsR0FBR0EsYUFBYSxDQUFDO2FBQ3BDOzs7WUFFREssR0FBYyxFQUFkQSxnQkFBYztZRXBCaEIsT0ZvQkVBLFNBQUFBLGNBQWMsQ0FBQ0osV0FBVyxFQUFFO2dCQUMxQixJQUFJLENBQUNBLFdBQVcsR0FBR0EsV0FBVyxDQUFDO2FBQ2hDOzs7WUFFREssR0FBUyxFQUFUQSxXQUFTO1lFeEJYLE9Gd0JFQSxTQUFBQSxTQUFTLENBQUNDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSUMsT0FBTyxHQUFHLEtBQUssQUFBQztnQkFFcEIsSUFBSUQsU0FBUyxLQUFLLElBQUksRUFBRTtvQkFDdEIsSUFBTUUsc0JBQXNCLEdBQUdGLFNBQVMsQ0FBQ0wsZ0JBQWdCLEVBQUUsRUFDckRRLG9CQUFvQixHQUFHSCxTQUFTLENBQUNKLGNBQWMsRUFBRSxFQUNqRFEsbUJBQW1CLEdBQUksSUFBSSxDQUFDWCxhQUFhLEtBQUtTLHNCQUFzQixBQUFDLEVBQ3JFRyxpQkFBaUIsR0FBSSxJQUFJLENBQUNYLFdBQVcsS0FBS1Msb0JBQW9CLEFBQUMsQUFBQztvQkFFdEVGLE9BQU8sR0FBSUcsbUJBQW1CLElBQUlDLGlCQUFpQixBQUFDLENBQUM7aUJBQ3REO2dCQUVELE9BQU9KLE9BQU8sQ0FBQzthQUNoQjs7O1lBRURLLEdBQWEsRUFBYkEsZUFBYTtZRXZDZixPRnVDRUEsU0FBQUEsYUFBYSxDQUFDTixTQUFTLEVBQUU7Z0JBQ3ZCLElBQU1DLE9BQU8sR0FBRyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLEVBQ25DTyxXQUFXLEdBQUcsQ0FBQ04sT0FBTyxBQUFDO2dCQUU3QixPQUFPTSxXQUFXLENBQUM7YUFDcEI7Ozs7WUFFTUMsR0FBVyxFQUFYQSxhQUFXO1lFOUNwQixPRjhDRSxTQUFPQSxXQUFXLEdBQUc7Z0JBQ25CLElBQU1mLGFBQWEsR0FBRyxDQUFDLEVBQ2pCQyxXQUFXLEdBQUcsQ0FBQyxFQUNmTSxTQUFTLEdBQUcsSUFBSVIsU0FBUyxDQUFDQyxhQUFhLEVBQUVDLFdBQVcsQ0FBQyxBQUFDO2dCQUU1RCxPQUFPTSxTQUFTLENBQUM7YUFDbEI7OztZQUVNUyxHQUFjLEVBQWRBLGdCQUFjO1lFdER2QixPRnNERSxTQUFPQSxjQUFjLENBQUNDLFVBQVUsRUFBRTtnQkFDaEMsSUFBUUMsY0FBYyxHQUFtQkQsVUFBVSxDQUEzQ0MsY0FBYyxFQUFFQyxZQUFZLEdBQUtGLFVBQVUsQ0FBM0JFLFlBQVksRUFDOUJuQixhQUFhLEdBQUdrQixjQUFjLEVBQzlCakIsV0FBVyxHQUFHa0IsWUFBWSxFQUMxQlosU0FBUyxHQUFHLElBQUlSLFNBQVMsQ0FBQ0MsYUFBYSxFQUFFQyxXQUFXLENBQUMsQUFBQztnQkFFNUQsT0FBT00sU0FBUyxDQUFDO2FBRWxCOzs7WUFFTWEsR0FBK0IsRUFBL0JBLGlDQUErQjtZRWhFeEMsT0ZnRUUsU0FBT0EsK0JBQStCLENBQUNwQixhQUFhLEVBQUVDLFdBQVcsRUFBRTtnQkFDakUsSUFBTU0sU0FBUyxHQUFHLElBQUlSLFNBQVMsQ0FBQ0MsYUFBYSxFQUFFQyxXQUFXLENBQUMsQUFBQztnQkFFNUQsT0FBT00sU0FBUyxDQUFDO2FBQ2xCOztNQXBFSDs7Q0FxRUMsRUFBQTtrQkFuRW9CUixTQUFTLEFBRjlCIn0=
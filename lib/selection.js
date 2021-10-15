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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rpb24uanMiXSwibmFtZXMiOlsiU2VsZWN0aW9uIiwiY29uc3RydWN0b3IiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJnZXRTdGFydFBvc2l0aW9uIiwiZ2V0RW5kUG9zaXRpb24iLCJzZXRTdGFydFBvc2l0aW9uIiwic2V0RW5kUG9zaXRpb24iLCJpc0VxdWFsVG8iLCJzZWxlY3Rpb24iLCJlcXVhbFRvIiwic2VsZWN0aW9uU3RhcnRQb3NpdGlvbiIsInNlbGVjdGlvbkVuZFBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbnNFcXVhbCIsImVuZFBvc2l0aW9uc0VxdWFsIiwiaXNEaWZmZXJlbnRUbyIsImRpZmZlcmVudFRvIiwiZnJvbU5vdGhpbmciLCJmcm9tRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsImZyb21TdGFydFBvc2l0aW9uQW5kRW5kUG9zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVTLFNBQVMsaUJBQWYsUUFBUTthQUFGLFNBQVMsQ0FDaEIsYUFBYSxFQUFFLFdBQVc7OEJBRG5CLFNBQVM7UUFFMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVzs7aUJBSGIsU0FBUzs7WUFNNUIsR0FBZ0IsRUFBaEIsQ0FBZ0I7bUJBQWhCLFFBQVEsQ0FBUixnQkFBZ0IsR0FBRyxDQUFDO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFDM0IsQ0FBQzs7O1lBRUQsR0FBYyxFQUFkLENBQWM7bUJBQWQsUUFBUSxDQUFSLGNBQWMsR0FBRyxDQUFDO2dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDekIsQ0FBQzs7O1lBRUQsR0FBZ0IsRUFBaEIsQ0FBZ0I7bUJBQWhCLFFBQVEsQ0FBUixnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhO1lBQ3BDLENBQUM7OztZQUVELEdBQWMsRUFBZCxDQUFjO21CQUFkLFFBQVEsQ0FBUixjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVztZQUNoQyxDQUFDOzs7WUFFRCxHQUFTLEVBQVQsQ0FBUzttQkFBVCxRQUFRLENBQVIsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNwQixHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUs7Z0JBRW5CLEVBQUUsRUFBRSxTQUFTLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLEdBQUssQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLElBQ25ELG9CQUFvQixHQUFHLFNBQVMsQ0FBQyxjQUFjLElBQy9DLG1CQUFtQixHQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssc0JBQXNCLEVBQ3BFLGlCQUFpQixHQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssb0JBQW9CO29CQUVwRSxPQUFPLEdBQUksbUJBQW1CLElBQUksaUJBQWlCO2dCQUNyRCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxPQUFPO1lBQ2hCLENBQUM7OztZQUVELEdBQWEsRUFBYixDQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3hCLEdBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQ2xDLFdBQVcsSUFBSSxPQUFPO2dCQUU1QixNQUFNLENBQUMsV0FBVztZQUNwQixDQUFDOzs7O1lBRU0sR0FBVyxFQUFYLENBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLEdBQUcsQ0FBQztnQkFDcEIsR0FBSyxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQ2pCLFdBQVcsR0FBRyxDQUFDLEVBQ2YsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFdBQVc7Z0JBRTFELE1BQU0sQ0FBQyxTQUFTO1lBQ2xCLENBQUM7OztZQUVNLEdBQWMsRUFBZCxDQUFjO21CQUFyQixRQUFRLENBQUQsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqQyxHQUFLLENBQUcsY0FBYyxHQUFtQixVQUFVLENBQTNDLGNBQWMsRUFBRSxZQUFZLEdBQUssVUFBVSxDQUEzQixZQUFZLEVBQzlCLGFBQWEsR0FBRyxjQUFjLEVBQzlCLFdBQVcsR0FBRyxZQUFZLEVBQzFCLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxXQUFXO2dCQUUxRCxNQUFNLENBQUMsU0FBUztZQUVsQixDQUFDOzs7WUFFTSxHQUErQixFQUEvQixDQUErQjttQkFBdEMsUUFBUSxDQUFELCtCQUErQixDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQztnQkFDbEUsR0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxXQUFXO2dCQUUxRCxNQUFNLENBQUMsU0FBUztZQUNsQixDQUFDOzs7V0FsRWtCLFNBQVM7O2tCQUFULFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHtcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuICAgIHRoaXMuZW5kUG9zaXRpb24gPSBlbmRQb3NpdGlvbjtcbiAgfVxuXG4gIGdldFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRQb3NpdGlvbjtcbiAgfVxuXG4gIGdldEVuZFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmVuZFBvc2l0aW9uO1xuICB9XG5cbiAgc2V0U3RhcnRQb3NpdGlvbihzdGFydFBvc2l0aW9uKSB7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgfVxuXG4gIHNldEVuZFBvc2l0aW9uKGVuZFBvc2l0aW9uKSB7XG4gICAgdGhpcy5lbmRQb3NpdGlvbiA9IGVuZFBvc2l0aW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKHNlbGVjdGlvbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBpZiAoc2VsZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWxlY3Rpb25TdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldFN0YXJ0UG9zaXRpb24oKSxcbiAgICAgICAgICAgIHNlbGVjdGlvbkVuZFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEVuZFBvc2l0aW9uKCksXG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uc0VxdWFsID0gKHRoaXMuc3RhcnRQb3NpdGlvbiA9PT0gc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiksXG4gICAgICAgICAgICBlbmRQb3NpdGlvbnNFcXVhbCA9ICh0aGlzLmVuZFBvc2l0aW9uID09PSBzZWxlY3Rpb25FbmRQb3NpdGlvbik7XG5cbiAgICAgIGVxdWFsVG8gPSAoc3RhcnRQb3NpdGlvbnNFcXVhbCAmJiBlbmRQb3NpdGlvbnNFcXVhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0RpZmZlcmVudFRvKHNlbGVjdGlvbikge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyhzZWxlY3Rpb24pLFxuICAgICAgICAgIGRpZmZlcmVudFRvID0gIWVxdWFsVG87XG5cbiAgICByZXR1cm4gZGlmZmVyZW50VG87XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSAwLFxuICAgICAgICAgIHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb24oc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kIH0gPSBkb21FbGVtZW50LFxuICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBzZWxlY3Rpb25TdGFydCwgLy8vXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBzZWxlY3Rpb25FbmQsIC8vL1xuICAgICAgICAgIHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb24oc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcblxuICB9XG5cbiAgc3RhdGljIGZyb21TdGFydFBvc2l0aW9uQW5kRW5kUG9zaXRpb24oc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH1cbn1cbiJdfQ==
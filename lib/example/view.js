"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _richTextarea = _interopRequireDefault(require("./richTextarea"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var View = function(properties) {
    /*#__PURE__*/ return React.createElement("div", {
        className: "view"
    }, /*#__PURE__*/ React.createElement(_richTextarea.default, {
        onChange: changeHandler,
        onScroll: scrollHandler,
        onFocus: focusHandler,
        onBlur: blurHandler,
        active: true
    }));
};
var _default = View;
exports.default = _default;
function changeHandler(event, element) {
    var contentChanged = element.hasContentChanged(), selectionChanged = element.hasSelectionChanged();
    console.log(contentChanged, selectionChanged);
}
function scrollHandler(event, element) {
    var scrollTop = element.getScrollTop(), scrollLeft = element.getScrollLeft();
    console.log(scrollTop, scrollLeft);
}
function focusHandler(event, element) {
    console.log("focus");
}
function blurHandler(event, element) {
    console.log("blur");
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiUmljaFRleHRhcmVhIiwiVmlldyIsInByb3BlcnRpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsImNoYW5nZUhhbmRsZXIiLCJvblNjcm9sbCIsInNjcm9sbEhhbmRsZXIiLCJvbkZvY3VzIiwiZm9jdXNIYW5kbGVyIiwib25CbHVyIiwiYmx1ckhhbmRsZXIiLCJhY3RpdmUiLCJldmVudCIsImVsZW1lbnQiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwic2VsZWN0aW9uQ2hhbmdlZCIsImhhc1NlbGVjdGlvbkNoYW5nZWQiLCJjb25zb2xlIiwibG9nIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWEsR0FBZ0IsQ0FBaEIsYUFBZ0I7Ozs7OztBQUV6QyxHQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBUCxVQUFVO2tCQUV0QixNQUFNLHNCQUFMLEdBQUc7UUFBQyxTQUFTLEdBQUMsSUFBTTt5Q0FKRSxhQUFnQjtRQUt2QixRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsYUFBYTtRQUN2QixPQUFPLEVBQUUsWUFBWTtRQUNyQixNQUFNLEVBQUUsV0FBVztRQUNuQixNQUFNLEVBQU4sSUFBTTs7O2VBTVQsSUFBSTs7U0FFVixhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3RDLEdBQUssQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixJQUMxQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CO0lBRXBELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGdCQUFnQjtBQUM5QyxDQUFDO1NBRVEsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUN0QyxHQUFLLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQ2hDLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYTtJQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVO0FBQ25DLENBQUM7U0FFUSxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsS0FBTztBQUNyQixDQUFDO1NBRVEsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUNwQyxPQUFPLENBQUMsR0FBRyxFQUFDLElBQU07QUFDcEIsQ0FBQyJ9
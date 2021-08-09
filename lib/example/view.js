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

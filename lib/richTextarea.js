"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _selection = _interopRequireDefault(require("./selection"));
var _eventTypes = require("./eventTypes");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  display: none;\n\n  .active {\n    display: block;\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var defer = function(func) {
    return setTimeout(func, 0);
}; ///
var RichTextarea = /*#__PURE__*/ function(Element) {
    _inherits(RichTextarea, Element);
    function RichTextarea() {
        _classCallCheck(this, RichTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(RichTextarea).apply(this, arguments));
    }
    _createClass(RichTextarea, [
        {
            key: "isActive",
            value: function isActive() {
                var active = this.hasClass("active");
                return active;
            }
        },
        {
            key: "isReadOnly",
            value: function isReadOnly() {
                var domElement = this.getDOMElement(), readOnly = domElement.readOnly;
                return readOnly;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var domElement = this.getDOMElement(), value = domElement.value, content = value; ///
                return content;
            }
        },
        {
            key: "getSelection",
            value: function getSelection() {
                var domElement = this.getDOMElement(), selection = _selection.default.fromDOMElement(domElement);
                return selection;
            }
        },
        {
            key: "setReadOnly",
            value: function setReadOnly(readOnly) {
                var domElement = this.getDOMElement();
                Object.assign(domElement, {
                    readOnly: readOnly
                });
            }
        },
        {
            key: "setContent",
            value: function setContent(content) {
                var value = content, previousContent = content, domElement = this.getDOMElement();
                Object.assign(domElement, {
                    value: value
                });
                this.setPreviousContent(previousContent);
            }
        },
        {
            key: "setSelection",
            value: function setSelection(selection) {
                var selectionStartPosition = selection.getStartPosition(), selectionEndPosition = selection.getEndPosition(), selectionStart = selectionStartPosition, selectionEnd = selectionEndPosition, previousSelection = selection, domElement = this.getDOMElement();
                Object.assign(domElement, {
                    selectionStart: selectionStart,
                    selectionEnd: selectionEnd
                });
                this.setPreviousSelection(previousSelection);
            }
        },
        {
            key: "isMouseDown",
            value: function isMouseDown() {
                var state = this.getState(), mouseDown = state.mouseDown;
                return mouseDown;
            }
        },
        {
            key: "hasChanged",
            value: function hasChanged() {
                var contentChanged = this.hasContentChanged(), selectionChanged = this.hasSelectionChanged(), changed = contentChanged || selectionChanged;
                return changed;
            }
        },
        {
            key: "hasContentChanged",
            value: function hasContentChanged() {
                var content = this.getContent(), previousContent = this.getPreviousContent(), contentDifferentToPreviousContent = content !== previousContent, contentChanged = contentDifferentToPreviousContent; ///
                return contentChanged;
            }
        },
        {
            key: "hasSelectionChanged",
            value: function hasSelectionChanged() {
                var selection = this.getSelection(), previousSelection = this.getPreviousSelection(), selectionDifferentToPreviousSelection = selection.isDifferentTo(previousSelection), selectionChanged = selectionDifferentToPreviousSelection; ///
                return selectionChanged;
            }
        },
        {
            key: "activate",
            value: function activate() {
                var mouseDown = false;
                this.setMouseDown(mouseDown);
                _easy.window.on(_eventTypes.MOUSEUP_CONTEXTMENU_BLUR_EVENT_TYPE, this.mouseUpHandler, this); ///
                this.on(_eventTypes.MOUSEDOWN_EVENT_TYPE, this.mouseDownHandler, this);
                this.on(_eventTypes.MOUSEMOVE_EVENT_TYPE, this.mouseMoveHandler, this);
                this.on(_eventTypes.KEYDOWN_EVENT_TYPE, this.keyDownHandler, this);
                this.on(_eventTypes.INPUT_EVENT_TYPE, this.inputHandler, this);
                this.on(_eventTypes.SCROLL_EVENT_TYPE, this.scrollHandler, this);
                this.on(_eventTypes.FOCUS_EVENT_TYPE, this.focusHandler, this);
                this.on(_eventTypes.BLUR_EVENT_TYPE, this.blurHandler, this);
                this.addClass("active");
            }
        },
        {
            key: "deactivate",
            value: function deactivate() {
                var mouseDown = false;
                this.setMouseDown(mouseDown);
                _easy.window.off(_eventTypes.MOUSEUP_CONTEXTMENU_BLUR_EVENT_TYPE, this.mouseUpHandler, this); ///
                this.off(_eventTypes.MOUSEDOWN_EVENT_TYPE, this.mouseDownHandler, this);
                this.off(_eventTypes.MOUSEMOVE_EVENT_TYPE, this.mouseMoveHandler, this);
                this.off(_eventTypes.KEYDOWN_EVENT_TYPE, this.keyDownHandler, this);
                this.off(_eventTypes.INPUT_EVENT_TYPE, this.inputHandler, this);
                this.off(_eventTypes.SCROLL_EVENT_TYPE, this.scrollHandler, this);
                this.off(_eventTypes.FOCUS_EVENT_TYPE, this.focusHandler, this);
                this.off(_eventTypes.BLUR_EVENT_TYPE, this.blurHandler, this);
                this.removeClass("active");
            }
        },
        {
            key: "onBlur",
            value: function onBlur(blurHandler, element) {
                var eventType = _eventTypes.BLUR_EVENT_TYPE, handler = blurHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offBlur",
            value: function offBlur(blurHandler, element) {
                var eventType = _eventTypes.BLUR_EVENT_TYPE, handler = blurHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onFocus",
            value: function onFocus(blurHandler, element) {
                var eventType = _eventTypes.FOCUS_EVENT_TYPE, handler = blurHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offFocus",
            value: function offFocus(blurHandler, element) {
                var eventType = _eventTypes.FOCUS_EVENT_TYPE, handler = blurHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onScroll",
            value: function onScroll(scrollHandler, element) {
                var eventType = _eventTypes.SCROLL_EVENT_TYPE, handler = scrollHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offScroll",
            value: function offScroll(scrollHandler, element) {
                var eventType = _eventTypes.SCROLL_EVENT_TYPE, handler = scrollHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onChange",
            value: function onChange(changeHandler, element) {
                var eventType = _eventTypes.CHANGE_EVENT_TYPE, handler = changeHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offChange",
            value: function offChange(changeHandler, element) {
                var eventType = _eventTypes.CHANGE_EVENT_TYPE, handler = changeHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "mouseUpHandler",
            value: function mouseUpHandler(event, element) {
                var mouseDown = false;
                this.setMouseDown(mouseDown);
            }
        },
        {
            key: "mouseDownHandler",
            value: function mouseDownHandler(event, element) {
                var _this = this;
                var forced = false, mouseDown = true, eventType = _eventTypes.CHANGE_EVENT_TYPE;
                this.setMouseDown(mouseDown);
                defer(function() {
                    return _this.intermediateHandler(event, element, eventType, forced);
                });
            }
        },
        {
            key: "mouseMoveHandler",
            value: function mouseMoveHandler(event, element) {
                var forced = false, mouseDown = this.isMouseDown(), eventTYpe = _eventTypes.CHANGE_EVENT_TYPE;
                if (mouseDown) {
                    this.intermediateHandler(event, element, eventTYpe, forced);
                }
            }
        },
        {
            key: "keyDownHandler",
            value: function keyDownHandler(event, element) {
                var _this = this;
                var forced = false, eventType = _eventTypes.CHANGE_EVENT_TYPE;
                defer(function() {
                    return _this.intermediateHandler(event, element, eventType, forced);
                });
            }
        },
        {
            key: "inputHandler",
            value: function inputHandler(event, element) {
                var forced = false, eventType = _eventTypes.CHANGE_EVENT_TYPE;
                this.intermediateHandler(event, element, eventType, forced);
            }
        },
        {
            key: "scrollHandler",
            value: function scrollHandler(event, element) {
                var eventType = _eventTypes.SCROLL_EVENT_TYPE;
                this.callHandlers(eventType, event, element);
            }
        },
        {
            key: "focusHandler",
            value: function focusHandler(event, element) {
                var _this = this;
                var forced = true, eventType = _eventTypes.FOCUS_EVENT_TYPE;
                defer(function() {
                    return _this.intermediateHandler(event, element, eventType, forced);
                });
            }
        },
        {
            key: "blurHandler",
            value: function blurHandler(event, element) {
                var forced = true, eventType = _eventTypes.BLUR_EVENT_TYPE;
                this.intermediateHandler(event, element, eventType, forced);
            }
        },
        {
            key: "intermediateHandler",
            value: function intermediateHandler(event, element, eventType, forced) {
                var changed = this.hasChanged();
                if (changed || forced) {
                    this.callHandlers(eventType, event, element);
                }
                var content = this.getContent(), selection = this.getSelection(), previousContent = content, previousSelection = selection; ///
                this.setPreviousContent(previousContent);
                this.setPreviousSelection(previousSelection);
            }
        },
        {
            key: "callHandlers",
            value: function callHandlers(eventType) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _this = this;
                var eventListeners = this.findEventListeners(eventType);
                eventListeners.forEach(function(eventListener) {
                    var handler = eventListener.handler, handlerElement = eventListener.element, element = _this; ///
                    if (handler !== _this.blurHandler && handler !== _this.focusHandler && handler !== _this.scrollHandler) {
                        var _handler;
                        (_handler = handler).call.apply(_handler, [
                            handlerElement
                        ].concat(_toConsumableArray(remainingArguments), [
                            element
                        ]));
                    }
                });
            }
        },
        {
            key: "getPreviousContent",
            value: function getPreviousContent() {
                var state = this.getState(), previousContent = state.previousContent;
                return previousContent;
            }
        },
        {
            key: "getPreviousSelection",
            value: function getPreviousSelection() {
                var state = this.getState(), previousSelection = state.previousSelection;
                return previousSelection;
            }
        },
        {
            key: "setMouseDown",
            value: function setMouseDown(mouseDown) {
                this.updateState({
                    mouseDown: mouseDown
                });
            }
        },
        {
            key: "setPreviousContent",
            value: function setPreviousContent(previousContent) {
                this.updateState({
                    previousContent: previousContent
                });
            }
        },
        {
            key: "setPreviousSelection",
            value: function setPreviousSelection(previousSelection) {
                this.updateState({
                    previousSelection: previousSelection
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var mouseDown = false, previousContent = null, previousSelection = null;
                this.setState({
                    mouseDown: mouseDown,
                    previousContent: previousContent,
                    previousSelection: previousSelection
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, active = _properties.active, onChange = _properties.onChange, onScroll = _properties.onScroll, onFocus = _properties.onFocus, onBlur = _properties.onBlur, changeHandler = onChange, scrollHandler = onScroll, focusHandler = onFocus, blurHandler = onBlur; ///
                changeHandler && this.onChange(changeHandler, this);
                scrollHandler && this.onScroll(scrollHandler, this);
                focusHandler && this.onFocus(focusHandler, this);
                blurHandler && this.onBlur(blurHandler, this);
                if (active) {
                    this.activate();
                }
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, onChange = _properties.onChange, onScroll = _properties.onScroll, onFocus = _properties.onFocus, onBlur = _properties.onBlur, changeHandler = onChange, scrollHandler = onScroll, focusHandler = onFocus, blurHandler = onBlur; ///
                changeHandler && this.offChange(changeHandler, this);
                scrollHandler && this.offScroll(scrollHandler, this);
                focusHandler && this.offFocus(focusHandler, this);
                blurHandler && this.offBlur(blurHandler, this);
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ]);
    return RichTextarea;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(RichTextarea, "tagName", "textarea");
_defineProperty(RichTextarea, "defaultProperties", {
    className: "rich"
});
_defineProperty(RichTextarea, "ignoredProperties", [
    "onChange",
    "onScroll",
    "onFocus",
    "onBlur",
    "active"
]);
var _default = (0, _easyWithStyle).default(RichTextarea)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IHsgd2luZG93LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuXHJcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSBcIi4vc2VsZWN0aW9uXCJcclxuXHJcbmltcG9ydCB7IEJMVVJfRVZFTlRfVFlQRSxcclxuICAgICAgICAgSU5QVVRfRVZFTlRfVFlQRSxcclxuICAgICAgICAgRk9DVVNfRVZFTlRfVFlQRSxcclxuICAgICAgICAgQ0hBTkdFX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIFNDUk9MTF9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBLRVlET1dOX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIE1PVVNFRE9XTl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBNT1VTRU1PVkVfRVZFTlRfVFlQRSxcclxuICAgICAgICAgTU9VU0VVUF9DT05URVhUTUVOVV9CTFVSX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XHJcblxyXG5jb25zdCBkZWZlciA9IChmdW5jKSA9PiBzZXRUaW1lb3V0KGZ1bmMsIDApOyAvLy9cclxuXHJcbmNsYXNzIFJpY2hUZXh0YXJlYSBleHRlbmRzIEVsZW1lbnQge1xyXG4gIGlzQWN0aXZlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgaXNSZWFkT25seSgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgcmVhZE9ubHkgfSA9IGRvbUVsZW1lbnQ7XHJcbiAgICBcclxuICAgIHJldHVybiByZWFkT25seTsgXHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50KCkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxyXG4gICAgICAgICAgeyB2YWx1ZSB9ID0gZG9tRWxlbWVudCxcclxuICAgICAgICAgIGNvbnRlbnQgPSB2YWx1ZTsgIC8vL1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0aW9uKCkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gU2VsZWN0aW9uLmZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3Rpb247XHJcbiAgfVxyXG5cclxuICBzZXRSZWFkT25seShyZWFkT25seSkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xyXG4gICAgICByZWFkT25seVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gY29udGVudCwgIC8vL1xyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gY29udGVudCwgIC8vL1xyXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xyXG4gICAgICB2YWx1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGlvbihzZWxlY3Rpb24pIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0U3RhcnRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kUG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0RW5kUG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kUG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uLCAgLy8vXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHNlbGVjdGlvblN0YXJ0LFxyXG4gICAgICBzZWxlY3Rpb25FbmRcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgaXNNb3VzZURvd24oKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgIHsgbW91c2VEb3duIH0gPSBzdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gbW91c2VEb3duO1xyXG4gIH1cclxuXHJcbiAgaGFzQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuaGFzU2VsZWN0aW9uQ2hhbmdlZCgpLFxyXG4gICAgICAgICAgY2hhbmdlZCA9IChjb250ZW50Q2hhbmdlZCB8fCBzZWxlY3Rpb25DaGFuZ2VkKTtcclxuXHJcbiAgICByZXR1cm4gY2hhbmdlZDtcclxuICB9XHJcblxyXG4gIGhhc0NvbnRlbnRDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gdGhpcy5nZXRQcmV2aW91c0NvbnRlbnQoKSxcclxuICAgICAgICAgIGNvbnRlbnREaWZmZXJlbnRUb1ByZXZpb3VzQ29udGVudCA9IChjb250ZW50ICE9PSBwcmV2aW91c0NvbnRlbnQpLFxyXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSBjb250ZW50RGlmZmVyZW50VG9QcmV2aW91c0NvbnRlbnQ7IC8vL1xyXG5cclxuICAgIHJldHVybiBjb250ZW50Q2hhbmdlZDtcclxuICB9XHJcblxyXG4gIGhhc1NlbGVjdGlvbkNoYW5nZWQoKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSB0aGlzLmdldFByZXZpb3VzU2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25EaWZmZXJlbnRUb1ByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uLmlzRGlmZmVyZW50VG8ocHJldmlvdXNTZWxlY3Rpb24pLFxyXG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHNlbGVjdGlvbkRpZmZlcmVudFRvUHJldmlvdXNTZWxlY3Rpb247IC8vL1xyXG5cclxuICAgIHJldHVybiBzZWxlY3Rpb25DaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoKSB7XHJcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNldE1vdXNlRG93bihtb3VzZURvd24pO1xyXG5cclxuICAgIHdpbmRvdy5vbihNT1VTRVVQX0NPTlRFWFRNRU5VX0JMVVJfRVZFTlRfVFlQRSwgdGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7IC8vL1xyXG5cclxuICAgIHRoaXMub24oTU9VU0VET1dOX0VWRU5UX1RZUEUsIHRoaXMubW91c2VEb3duSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihNT1VTRU1PVkVfRVZFTlRfVFlQRSwgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9uKEtFWURPV05fRVZFTlRfVFlQRSwgdGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihJTlBVVF9FVkVOVF9UWVBFLCB0aGlzLmlucHV0SGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihTQ1JPTExfRVZFTlRfVFlQRSwgdGhpcy5zY3JvbGxIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9uKEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9uKEJMVVJfRVZFTlRfVFlQRSwgdGhpcy5ibHVySGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIGRlYWN0aXZhdGUoKSB7XHJcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNldE1vdXNlRG93bihtb3VzZURvd24pO1xyXG5cclxuICAgIHdpbmRvdy5vZmYoTU9VU0VVUF9DT05URVhUTUVOVV9CTFVSX0VWRU5UX1RZUEUsIHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpOyAgLy8vXHJcblxyXG4gICAgdGhpcy5vZmYoTU9VU0VET1dOX0VWRU5UX1RZUEUsIHRoaXMubW91c2VEb3duSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoS0VZRE9XTl9FVkVOVF9UWVBFLCB0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9mZihJTlBVVF9FVkVOVF9UWVBFLCB0aGlzLmlucHV0SGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoU0NST0xMX0VWRU5UX1RZUEUsIHRoaXMuc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoRk9DVVNfRVZFTlRfVFlQRSwgdGhpcy5mb2N1c0hhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKEJMVVJfRVZFTlRfVFlQRSwgdGhpcy5ibHVySGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cihibHVySGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGJsdXJIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvZmZCbHVyKGJsdXJIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBCTFVSX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gYmx1ckhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoYmx1ckhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gYmx1ckhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9mZkZvY3VzKGJsdXJIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBGT0NVU19FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGJsdXJIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBzY3JvbGxIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvZmZTY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gU0NST0xMX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gc2Nyb2xsSGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gY2hhbmdlSGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGNoYW5nZUhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG1vdXNlVXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNldE1vdXNlRG93bihtb3VzZURvd24pO1xyXG4gIH07XHJcblxyXG4gIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgbW91c2VEb3duID0gdHJ1ZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuc2V0TW91c2VEb3duKG1vdXNlRG93bik7XHJcblxyXG4gICAgZGVmZXIoKCkgPT4gdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIGZvcmNlZCkpO1xyXG4gIH1cclxuXHJcbiAgbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9yY2VkID0gZmFsc2UsXHJcbiAgICAgICAgICBtb3VzZURvd24gPSB0aGlzLmlzTW91c2VEb3duKCksXHJcbiAgICAgICAgICBldmVudFRZcGUgPSBDSEFOR0VfRVZFTlRfVFlQRTtcclxuXHJcbiAgICBpZiAobW91c2VEb3duKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUWXBlLCBmb3JjZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5RG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgZGVmZXIoKCkgPT4gdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIGZvcmNlZCkpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSBmYWxzZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gU0NST0xMX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IHRydWUsXHJcbiAgICAgICAgICBldmVudFR5cGUgPSBGT0NVU19FVkVOVF9UWVBFO1xyXG5cclxuICAgIGRlZmVyKCgpID0+IHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpKTtcclxuICB9XHJcblxyXG4gIGJsdXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSB0cnVlLFxyXG4gICAgICAgICAgZXZlbnRUeXBlID0gQkxVUl9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpIHtcclxuICAgIGNvbnN0IGNoYW5nZWQgPSB0aGlzLmhhc0NoYW5nZWQoKTtcclxuXHJcbiAgICBpZiAoY2hhbmdlZCB8fCBmb3JjZWQpIHtcclxuICAgICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuICAgIHRoaXMuc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XHJcblxyXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xyXG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQ6IGhhbmRsZXJFbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxyXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpczsgLy8vXHJcblxyXG4gICAgICBpZiAoKGhhbmRsZXIgIT09IHRoaXMuYmx1ckhhbmRsZXIpICYmIChoYW5kbGVyICE9PSB0aGlzLmZvY3VzSGFuZGxlcikgJiYgKGhhbmRsZXIgIT09IHRoaXMuc2Nyb2xsSGFuZGxlcikpIHtcclxuICAgICAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNDb250ZW50KCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IHByZXZpb3VzQ29udGVudCB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzQ29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzU2VsZWN0aW9uKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IHByZXZpb3VzU2VsZWN0aW9uIH0gPSBzdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNTZWxlY3Rpb247XHJcbiAgfVxyXG5cclxuICBzZXRNb3VzZURvd24obW91c2VEb3duKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgbW91c2VEb3duXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c0NvbnRlbnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IG51bGwsXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vdXNlRG93bixcclxuICAgICAgcHJldmlvdXNDb250ZW50LFxyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZlLCBvbkNoYW5nZSwgb25TY3JvbGwsIG9uRm9jdXMsIG9uQmx1ciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xyXG4gICAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gb25TY3JvbGwsIC8vL1xyXG4gICAgICAgICAgICBmb2N1c0hhbmRsZXIgPSBvbkZvY3VzLCAvLy9cclxuICAgICAgICAgICAgYmx1ckhhbmRsZXIgPSBvbkJsdXI7IC8vL1xyXG5cclxuICAgIGNoYW5nZUhhbmRsZXIgJiYgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICAgIHNjcm9sbEhhbmRsZXIgJiYgdGhpcy5vblNjcm9sbChzY3JvbGxIYW5kbGVyLCB0aGlzKTtcclxuICAgIGZvY3VzSGFuZGxlciAmJiB0aGlzLm9uRm9jdXMoZm9jdXNIYW5kbGVyLCB0aGlzKTtcclxuICAgIGJsdXJIYW5kbGVyICYmIHRoaXMub25CbHVyKGJsdXJIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbGxVbm1vdW50KCkge1xyXG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb25TY3JvbGwsIG9uRm9jdXMsIG9uQmx1ciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cclxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSBvblNjcm9sbCwgLy8vXHJcbiAgICAgICAgICBmb2N1c0hhbmRsZXIgPSBvbkZvY3VzLCAvLy9cclxuICAgICAgICAgIGJsdXJIYW5kbGVyID0gb25CbHVyOyAvLy9cclxuXHJcbiAgICBjaGFuZ2VIYW5kbGVyICYmIHRoaXMub2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIHRoaXMpO1xyXG4gICAgc2Nyb2xsSGFuZGxlciAmJiB0aGlzLm9mZlNjcm9sbChzY3JvbGxIYW5kbGVyLCB0aGlzKTtcclxuICAgIGZvY3VzSGFuZGxlciAmJiB0aGlzLm9mZkZvY3VzKGZvY3VzSGFuZGxlciwgdGhpcyk7XHJcbiAgICBibHVySGFuZGxlciAmJiB0aGlzLm9mZkJsdXIoYmx1ckhhbmRsZXIsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwidGV4dGFyZWFcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInJpY2hcIlxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcclxuICAgIFwib25DaGFuZ2VcIixcclxuICAgIFwib25TY3JvbGxcIixcclxuICAgIFwib25Gb2N1c1wiLFxyXG4gICAgXCJvbkJsdXJcIixcclxuICAgIFwiYWN0aXZlXCJcclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUmljaFRleHRhcmVhKWBcclxuXHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG5gXHJcbiJdLCJuYW1lcyI6WyJkZWZlciIsImZ1bmMiLCJzZXRUaW1lb3V0IiwiUmljaFRleHRhcmVhIiwiaXNBY3RpdmUiLCJhY3RpdmUiLCJoYXNDbGFzcyIsImlzUmVhZE9ubHkiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInJlYWRPbmx5IiwiZ2V0Q29udGVudCIsInZhbHVlIiwiY29udGVudCIsImdldFNlbGVjdGlvbiIsInNlbGVjdGlvbiIsImZyb21ET01FbGVtZW50Iiwic2V0UmVhZE9ubHkiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRDb250ZW50IiwicHJldmlvdXNDb250ZW50Iiwic2V0UHJldmlvdXNDb250ZW50Iiwic2V0U2VsZWN0aW9uIiwic2VsZWN0aW9uU3RhcnRQb3NpdGlvbiIsImdldFN0YXJ0UG9zaXRpb24iLCJzZWxlY3Rpb25FbmRQb3NpdGlvbiIsImdldEVuZFBvc2l0aW9uIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJwcmV2aW91c1NlbGVjdGlvbiIsInNldFByZXZpb3VzU2VsZWN0aW9uIiwiaXNNb3VzZURvd24iLCJzdGF0ZSIsImdldFN0YXRlIiwibW91c2VEb3duIiwiaGFzQ2hhbmdlZCIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiaGFzU2VsZWN0aW9uQ2hhbmdlZCIsImNoYW5nZWQiLCJnZXRQcmV2aW91c0NvbnRlbnQiLCJjb250ZW50RGlmZmVyZW50VG9QcmV2aW91c0NvbnRlbnQiLCJnZXRQcmV2aW91c1NlbGVjdGlvbiIsInNlbGVjdGlvbkRpZmZlcmVudFRvUHJldmlvdXNTZWxlY3Rpb24iLCJpc0RpZmZlcmVudFRvIiwiYWN0aXZhdGUiLCJzZXRNb3VzZURvd24iLCJvbiIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJrZXlEb3duSGFuZGxlciIsImlucHV0SGFuZGxlciIsInNjcm9sbEhhbmRsZXIiLCJmb2N1c0hhbmRsZXIiLCJibHVySGFuZGxlciIsImFkZENsYXNzIiwiZGVhY3RpdmF0ZSIsIm9mZiIsInJlbW92ZUNsYXNzIiwib25CbHVyIiwiZWxlbWVudCIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmQmx1ciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkZvY3VzIiwib2ZmRm9jdXMiLCJvblNjcm9sbCIsIm9mZlNjcm9sbCIsIm9uQ2hhbmdlIiwiY2hhbmdlSGFuZGxlciIsIm9mZkNoYW5nZSIsImV2ZW50IiwiZm9yY2VkIiwiaW50ZXJtZWRpYXRlSGFuZGxlciIsImV2ZW50VFlwZSIsImNhbGxIYW5kbGVycyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyRWxlbWVudCIsImNhbGwiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwid2lsbFVubW91bnQiLCJpbml0aWFsaXNlIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFUCxHQUFNLENBQU4sS0FBTTtBQUVoQixHQUFhLENBQWIsVUFBYTtBQVVpQixHQUFjLENBQWQsV0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW9ZM0IsQ0FRdkM7Ozs7Ozs7QUExWUEsR0FBSyxDQUFDQSxLQUFLLEdBQUcsUUFBUSxDQUFQQyxJQUFJO0lBQUtDLE1BQU0sQ0FBTkEsVUFBVSxDQUFDRCxJQUFJLEVBQUUsQ0FBQztFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUUxQ0UsWUFBWSxpQkFBbEIsUUFBUTtjQUFGQSxZQUFZO2FBQVpBLFlBQVk7OEJBQVpBLFlBQVk7Z0VBQVpBLFlBQVk7O2lCQUFaQSxZQUFZOztZQUNoQkMsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQVE7Z0JBRXJDLE1BQU0sQ0FBQ0QsTUFBTTtZQUNmLENBQUM7OztZQUVERSxHQUFVLEVBQVZBLENBQVU7bUJBQVZB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
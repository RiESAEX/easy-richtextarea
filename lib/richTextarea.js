"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _selection = _interopRequireDefault(require("./selection"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
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
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var BLUR_EVENT_TYPE = _easy.eventTypes.BLUR_EVENT_TYPE, INPUT_EVENT_TYPE = _easy.eventTypes.INPUT_EVENT_TYPE, FOCUS_EVENT_TYPE = _easy.eventTypes.FOCUS_EVENT_TYPE, CHANGE_EVENT_TYPE = _easy.eventTypes.CHANGE_EVENT_TYPE, SCROLL_EVENT_TYPE = _easy.eventTypes.SCROLL_EVENT_TYPE, KEYDOWN_EVENT_TYPE = _easy.eventTypes.KEYDOWN_EVENT_TYPE, MOUSEUP_EVENT_TYPE = _easy.eventTypes.MOUSEUP_EVENT_TYPE, MOUSEDOWN_EVENT_TYPE = _easy.eventTypes.MOUSEDOWN_EVENT_TYPE, MOUSEMOVE_EVENT_TYPE = _easy.eventTypes.MOUSEMOVE_EVENT_TYPE, CONTEXTMENU_EVENT_TYPE = _easy.eventTypes.CONTEXTMENU_EVENT_TYPE;
var defer = function(func) {
    return setTimeout(func, 0);
}; ///
var RichTextarea = /*#__PURE__*/ function(Element) {
    _inherits(RichTextarea, Element);
    var _super = _createSuper(RichTextarea);
    function RichTextarea() {
        _classCallCheck(this, RichTextarea);
        return _super.apply(this, arguments);
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
                _easy.window.on("".concat(BLUR_EVENT_TYPE, " ").concat(MOUSEUP_EVENT_TYPE, " ").concat(CONTEXTMENU_EVENT_TYPE), this.mouseUpHandler, this); ///
                this.on(MOUSEDOWN_EVENT_TYPE, this.mouseDownHandler, this);
                this.on(MOUSEMOVE_EVENT_TYPE, this.mouseMoveHandler, this);
                this.on(KEYDOWN_EVENT_TYPE, this.keyDownHandler, this);
                this.on(INPUT_EVENT_TYPE, this.inputHandler, this);
                this.on(SCROLL_EVENT_TYPE, this.scrollHandler, this);
                this.on(FOCUS_EVENT_TYPE, this.focusHandler, this);
                this.on(BLUR_EVENT_TYPE, this.blurHandler, this);
                this.addClass("active");
            }
        },
        {
            key: "deactivate",
            value: function deactivate() {
                var mouseDown = false;
                this.setMouseDown(mouseDown);
                _easy.window.off("".concat(BLUR_EVENT_TYPE, " ").concat(MOUSEUP_EVENT_TYPE, " ").concat(CONTEXTMENU_EVENT_TYPE), this.mouseUpHandler, this); ///
                this.off(MOUSEDOWN_EVENT_TYPE, this.mouseDownHandler, this);
                this.off(MOUSEMOVE_EVENT_TYPE, this.mouseMoveHandler, this);
                this.off(KEYDOWN_EVENT_TYPE, this.keyDownHandler, this);
                this.off(INPUT_EVENT_TYPE, this.inputHandler, this);
                this.off(SCROLL_EVENT_TYPE, this.scrollHandler, this);
                this.off(FOCUS_EVENT_TYPE, this.focusHandler, this);
                this.off(BLUR_EVENT_TYPE, this.blurHandler, this);
                this.removeClass("active");
            }
        },
        {
            key: "onBlur",
            value: function onBlur(blurHandler, element) {
                var eventType = BLUR_EVENT_TYPE, handler = blurHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offBlur",
            value: function offBlur(blurHandler, element) {
                var eventType = BLUR_EVENT_TYPE, handler = blurHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onFocus",
            value: function onFocus(blurHandler, element) {
                var eventType = FOCUS_EVENT_TYPE, handler = blurHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offFocus",
            value: function offFocus(blurHandler, element) {
                var eventType = FOCUS_EVENT_TYPE, handler = blurHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onScroll",
            value: function onScroll(scrollHandler, element) {
                var eventType = SCROLL_EVENT_TYPE, handler = scrollHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offScroll",
            value: function offScroll(scrollHandler, element) {
                var eventType = SCROLL_EVENT_TYPE, handler = scrollHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onChange",
            value: function onChange(changeHandler, element) {
                var eventType = CHANGE_EVENT_TYPE, handler = changeHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offChange",
            value: function offChange(changeHandler, element) {
                var eventType = CHANGE_EVENT_TYPE, handler = changeHandler; ///
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
                var forced = false, mouseDown = true, eventType = CHANGE_EVENT_TYPE;
                this.setMouseDown(mouseDown);
                defer(function() {
                    return _this.intermediateHandler(event, element, eventType, forced);
                });
            }
        },
        {
            key: "mouseMoveHandler",
            value: function mouseMoveHandler(event, element) {
                var forced = false, mouseDown = this.isMouseDown(), eventTYpe = CHANGE_EVENT_TYPE;
                if (mouseDown) {
                    this.intermediateHandler(event, element, eventTYpe, forced);
                }
            }
        },
        {
            key: "keyDownHandler",
            value: function keyDownHandler(event, element) {
                var _this = this;
                var forced = false, eventType = CHANGE_EVENT_TYPE;
                defer(function() {
                    return _this.intermediateHandler(event, element, eventType, forced);
                });
            }
        },
        {
            key: "inputHandler",
            value: function inputHandler(event, element) {
                var forced = false, eventType = CHANGE_EVENT_TYPE;
                this.intermediateHandler(event, element, eventType, forced);
            }
        },
        {
            key: "scrollHandler",
            value: function scrollHandler(event, element) {
                var eventType = SCROLL_EVENT_TYPE;
                this.callHandlers(eventType, event, element);
            }
        },
        {
            key: "focusHandler",
            value: function focusHandler(event, element) {
                var _this = this;
                var forced = true, eventType = FOCUS_EVENT_TYPE;
                defer(function() {
                    return _this.intermediateHandler(event, element, eventType, forced);
                });
            }
        },
        {
            key: "blurHandler",
            value: function blurHandler(event, element) {
                var forced = true, eventType = BLUR_EVENT_TYPE;
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
exports.default = RichTextarea;
_defineProperty(RichTextarea, "tagName", "textarea");
_defineProperty(RichTextarea, "ignoredProperties", [
    "onChange",
    "onScroll",
    "onFocus",
    "onBlur",
    "active"
]);
_defineProperty(RichTextarea, "defaultProperties", {
    className: "rich"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQsIGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tIFwiLi9zZWxlY3Rpb25cIlxyXG5cclxuY29uc3QgeyBCTFVSX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIElOUFVUX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIENIQU5HRV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICAgS0VZRE9XTl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBNT1VTRVVQX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIE1PVVNFRE9XTl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBNT1VTRU1PVkVfRVZFTlRfVFlQRSxcclxuICAgICAgICAgQ09OVEVYVE1FTlVfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcclxuXHJcbmNvbnN0IGRlZmVyID0gKGZ1bmMpID0+IHNldFRpbWVvdXQoZnVuYywgMCk7IC8vL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmljaFRleHRhcmVhIGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgaXNBY3RpdmUoKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmhhc0NsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIHJldHVybiBhY3RpdmU7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KCkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxyXG4gICAgICAgICAgeyByZWFkT25seSB9ID0gZG9tRWxlbWVudDtcclxuICAgIFxyXG4gICAgcmV0dXJuIHJlYWRPbmx5OyBcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHZhbHVlIH0gPSBkb21FbGVtZW50LFxyXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSBTZWxlY3Rpb24uZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcclxuICB9XHJcblxyXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHJlYWRPbmx5XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQoY29udGVudCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0aW9uKHNlbGVjdGlvbikge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRTdGFydFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25FbmRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRFbmRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydFBvc2l0aW9uLCAgLy8vXHJcbiAgICAgICAgICBzZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb24sICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgc2VsZWN0aW9uU3RhcnQsXHJcbiAgICAgIHNlbGVjdGlvbkVuZFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBpc01vdXNlRG93bigpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBtb3VzZURvd24gfSA9IHN0YXRlO1xyXG5cclxuICAgIHJldHVybiBtb3VzZURvd247XHJcbiAgfVxyXG5cclxuICBoYXNDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgY29udGVudENoYW5nZWQgPSB0aGlzLmhhc0NvbnRlbnRDaGFuZ2VkKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdGhpcy5oYXNTZWxlY3Rpb25DaGFuZ2VkKCksXHJcbiAgICAgICAgICBjaGFuZ2VkID0gKGNvbnRlbnRDaGFuZ2VkIHx8IHNlbGVjdGlvbkNoYW5nZWQpO1xyXG5cclxuICAgIHJldHVybiBjaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgaGFzQ29udGVudENoYW5nZWQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSB0aGlzLmdldFByZXZpb3VzQ29udGVudCgpLFxyXG4gICAgICAgICAgY29udGVudERpZmZlcmVudFRvUHJldmlvdXNDb250ZW50ID0gKGNvbnRlbnQgIT09IHByZXZpb3VzQ29udGVudCksXHJcbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IGNvbnRlbnREaWZmZXJlbnRUb1ByZXZpb3VzQ29udGVudDsgLy8vXHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRDaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0aW9uQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMuZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkRpZmZlcmVudFRvUHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb24uaXNEaWZmZXJlbnRUbyhwcmV2aW91c1NlbGVjdGlvbiksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gc2VsZWN0aW9uRGlmZmVyZW50VG9QcmV2aW91c1NlbGVjdGlvbjsgLy8vXHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGlvbkNoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2V0TW91c2VEb3duKG1vdXNlRG93bik7XHJcblxyXG4gICAgd2luZG93Lm9uKGAke0JMVVJfRVZFTlRfVFlQRX0gJHtNT1VTRVVQX0VWRU5UX1RZUEV9ICR7Q09OVEVYVE1FTlVfRVZFTlRfVFlQRX1gLCB0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTsgLy8vXHJcblxyXG4gICAgdGhpcy5vbihNT1VTRURPV05fRVZFTlRfVFlQRSwgdGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9uKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oS0VZRE9XTl9FVkVOVF9UWVBFLCB0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9uKElOUFVUX0VWRU5UX1RZUEUsIHRoaXMuaW5wdXRIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9uKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oRk9DVVNfRVZFTlRfVFlQRSwgdGhpcy5mb2N1c0hhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2V0TW91c2VEb3duKG1vdXNlRG93bik7XHJcblxyXG4gICAgd2luZG93Lm9mZihgJHtCTFVSX0VWRU5UX1RZUEV9ICR7TU9VU0VVUF9FVkVOVF9UWVBFfSAke0NPTlRFWFRNRU5VX0VWRU5UX1RZUEV9YCwgdGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7IC8vL1xyXG5cclxuICAgIHRoaXMub2ZmKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKEtFWURPV05fRVZFTlRfVFlQRSwgdGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9mZihCTFVSX0VWRU5UX1RZUEUsIHRoaXMuYmx1ckhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoYmx1ckhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IEJMVVJfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBibHVySGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb2ZmQmx1cihibHVySGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGJsdXJIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGJsdXJIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBGT0NVU19FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGJsdXJIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvZmZGb2N1cyhibHVySGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gRk9DVVNfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBibHVySGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gU0NST0xMX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gc2Nyb2xsSGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb2ZmU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNDUk9MTF9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IHNjcm9sbEhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGNoYW5nZUhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBDSEFOR0VfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBjaGFuZ2VIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRNb3VzZURvd24obW91c2VEb3duKTtcclxuICB9O1xyXG5cclxuICBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSBmYWxzZSxcclxuICAgICAgICAgIG1vdXNlRG93biA9IHRydWUsXHJcbiAgICAgICAgICBldmVudFR5cGUgPSBDSEFOR0VfRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLnNldE1vdXNlRG93bihtb3VzZURvd24pO1xyXG5cclxuICAgIGRlZmVyKCgpID0+IHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpKTtcclxuICB9XHJcblxyXG4gIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgbW91c2VEb3duID0gdGhpcy5pc01vdXNlRG93bigpLFxyXG4gICAgICAgICAgZXZlbnRUWXBlID0gQ0hBTkdFX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgaWYgKG1vdXNlRG93bikge1xyXG4gICAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VFlwZSwgZm9yY2VkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGtleURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSBmYWxzZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIGRlZmVyKCgpID0+IHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpKTtcclxuICB9XHJcblxyXG4gIGlucHV0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9yY2VkID0gZmFsc2UsXHJcbiAgICAgICAgICBldmVudFR5cGUgPSBDSEFOR0VfRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNDUk9MTF9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSB0cnVlLFxyXG4gICAgICAgICAgZXZlbnRUeXBlID0gRk9DVVNfRVZFTlRfVFlQRTtcclxuXHJcbiAgICBkZWZlcigoKSA9PiB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKSk7XHJcbiAgfVxyXG5cclxuICBibHVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9yY2VkID0gdHJ1ZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IEJMVVJfRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKTtcclxuICB9XHJcblxyXG4gIGludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKSB7XHJcbiAgICBjb25zdCBjaGFuZ2VkID0gdGhpcy5oYXNDaGFuZ2VkKCk7XHJcblxyXG4gICAgaWYgKGNoYW5nZWQgfHwgZm9yY2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGNhbGxIYW5kbGVycyhldmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xyXG5cclxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcclxuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50OiBoYW5kbGVyRWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xyXG5cclxuICAgICAgaWYgKChoYW5kbGVyICE9PSB0aGlzLmJsdXJIYW5kbGVyKSAmJiAoaGFuZGxlciAhPT0gdGhpcy5mb2N1c0hhbmRsZXIpICYmIChoYW5kbGVyICE9PSB0aGlzLnNjcm9sbEhhbmRsZXIpKSB7XHJcbiAgICAgICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzQ29udGVudCgpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBwcmV2aW91c0NvbnRlbnQgfSA9IHN0YXRlO1xyXG5cclxuICAgIHJldHVybiBwcmV2aW91c0NvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c1NlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBwcmV2aW91c1NlbGVjdGlvbiB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzU2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0TW91c2VEb3duKG1vdXNlRG93bikge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIG1vdXNlRG93blxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNDb250ZW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2UsXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSBudWxsLFxyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtb3VzZURvd24sXHJcbiAgICAgIHByZXZpb3VzQ29udGVudCxcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZSwgb25DaGFuZ2UsIG9uU2Nyb2xsLCBvbkZvY3VzLCBvbkJsdXIgfSA9IHRoaXMucHJvcGVydGllcyxcclxuICAgICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cclxuICAgICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IG9uU2Nyb2xsLCAvLy9cclxuICAgICAgICAgICAgZm9jdXNIYW5kbGVyID0gb25Gb2N1cywgLy8vXHJcbiAgICAgICAgICAgIGJsdXJIYW5kbGVyID0gb25CbHVyOyAvLy9cclxuXHJcbiAgICBjaGFuZ2VIYW5kbGVyICYmIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgdGhpcyk7XHJcbiAgICBzY3JvbGxIYW5kbGVyICYmIHRoaXMub25TY3JvbGwoc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcbiAgICBmb2N1c0hhbmRsZXIgJiYgdGhpcy5vbkZvY3VzKGZvY3VzSGFuZGxlciwgdGhpcyk7XHJcbiAgICBibHVySGFuZGxlciAmJiB0aGlzLm9uQmx1cihibHVySGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aWxsVW5tb3VudCgpIHtcclxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIG9uU2Nyb2xsLCBvbkZvY3VzLCBvbkJsdXIgfSA9IHRoaXMucHJvcGVydGllcyxcclxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXHJcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gb25TY3JvbGwsIC8vL1xyXG4gICAgICAgICAgZm9jdXNIYW5kbGVyID0gb25Gb2N1cywgLy8vXHJcbiAgICAgICAgICBibHVySGFuZGxlciA9IG9uQmx1cjsgLy8vXHJcblxyXG4gICAgY2hhbmdlSGFuZGxlciAmJiB0aGlzLm9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICAgIHNjcm9sbEhhbmRsZXIgJiYgdGhpcy5vZmZTY3JvbGwoc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcbiAgICBmb2N1c0hhbmRsZXIgJiYgdGhpcy5vZmZGb2N1cyhmb2N1c0hhbmRsZXIsIHRoaXMpO1xyXG4gICAgYmx1ckhhbmRsZXIgJiYgdGhpcy5vZmZCbHVyKGJsdXJIYW5kbGVyLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XHJcblxyXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcclxuICAgIFwib25DaGFuZ2VcIixcclxuICAgIFwib25TY3JvbGxcIixcclxuICAgIFwib25Gb2N1c1wiLFxyXG4gICAgXCJvbkJsdXJcIixcclxuICAgIFwiYWN0aXZlXCJcclxuICBdO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwicmljaFwiXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiQkxVUl9FVkVOVF9UWVBFIiwiZXZlbnRUeXBlcyIsIklOUFVUX0VWRU5UX1RZUEUiLCJGT0NVU19FVkVOVF9UWVBFIiwiQ0hBTkdFX0VWRU5UX1RZUEUiLCJTQ1JPTExfRVZFTlRfVFlQRSIsIktFWURPV05fRVZFTlRfVFlQRSIsIk1PVVNFVVBfRVZFTlRfVFlQRSIsIk1PVVNFRE9XTl9FVkVOVF9UWVBFIiwiTU9VU0VNT1ZFX0VWRU5UX1RZUEUiLCJDT05URVhUTUVOVV9FVkVOVF9UWVBFIiwiZGVmZXIiLCJmdW5jIiwic2V0VGltZW91dCIsIlJpY2hUZXh0YXJlYSIsImlzQWN0aXZlIiwiYWN0aXZlIiwiaGFzQ2xhc3MiLCJpc1JlYWRPbmx5IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJyZWFkT25seSIsImdldENvbnRlbnQiLCJ2YWx1ZSIsImNvbnRlbnQiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb24iLCJTZWxlY3Rpb24iLCJmcm9tRE9NRWxlbWVudCIsInNldFJlYWRPbmx5IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0Q29udGVudCIsInByZXZpb3VzQ29udGVudCIsInNldFByZXZpb3VzQ29udGVudCIsInNldFNlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJnZXRTdGFydFBvc2l0aW9uIiwic2VsZWN0aW9uRW5kUG9zaXRpb24iLCJnZXRFbmRQb3NpdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwicHJldmlvdXNTZWxlY3Rpb24iLCJzZXRQcmV2aW91c1NlbGVjdGlvbiIsImlzTW91c2VEb3duIiwic3RhdGUiLCJnZXRTdGF0ZSIsIm1vdXNlRG93biIsImhhc0NoYW5nZWQiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwic2VsZWN0aW9uQ2hhbmdlZCIsImhhc1NlbGVjdGlvbkNoYW5nZWQiLCJjaGFuZ2VkIiwiZ2V0UHJldmlvdXNDb250ZW50IiwiY29udGVudERpZmZlcmVudFRvUHJldmlvdXNDb250ZW50IiwiZ2V0UHJldmlvdXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25EaWZmZXJlbnRUb1ByZXZpb3VzU2VsZWN0aW9uIiwiaXNEaWZmZXJlbnRUbyIsImFjdGl2YXRlIiwic2V0TW91c2VEb3duIiwid2luZG93Iiwib24iLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwia2V5RG93bkhhbmRsZXIiLCJpbnB1dEhhbmRsZXIiLCJzY3JvbGxIYW5kbGVyIiwiZm9jdXNIYW5kbGVyIiwiYmx1ckhhbmRsZXIiLCJhZGRDbGFzcyIsImRlYWN0aXZhdGUiLCJvZmYiLCJyZW1vdmVDbGFzcyIsIm9uQmx1ciIsImVsZW1lbnQiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZkJsdXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsIm9mZkZvY3VzIiwib25TY3JvbGwiLCJvZmZTY3JvbGwiLCJvbkNoYW5nZSIsImNoYW5nZUhhbmRsZXIiLCJvZmZDaGFuZ2UiLCJldmVudCIsImZvcmNlZCIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJldmVudFRZcGUiLCJjYWxsSGFuZGxlcnMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImZvckVhY2giLCJldmVudExpc3RlbmVyIiwiaGFuZGxlckVsZW1lbnQiLCJjYWxsIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50IiwicHJvcGVydGllcyIsIndpbGxVbm1vdW50IiwiaW5pdGlhbGlzZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUUrQixJQUFBLEtBQU0sV0FBTixNQUFNLENBQUE7QUFFNUIsSUFBQSxVQUFhLGtDQUFiLGFBQWEsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQVFBLGVBQWUsR0FTYUMsS0FBVSxZQVR0Q0QsZUFBZSxFQUNkRSxnQkFBZ0IsR0FRV0QsS0FBVSxZQVJyQ0MsZ0JBQWdCLEVBQ2hCQyxnQkFBZ0IsR0FPV0YsS0FBVSxZQVByQ0UsZ0JBQWdCLEVBQ2hCQyxpQkFBaUIsR0FNVUgsS0FBVSxZQU5yQ0csaUJBQWlCLEVBQ2pCQyxpQkFBaUIsR0FLVUosS0FBVSxZQUxyQ0ksaUJBQWlCLEVBQ2pCQyxrQkFBa0IsR0FJU0wsS0FB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
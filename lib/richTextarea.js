"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
require("./keys");
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IHsgd2luZG93LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuXHJcbmltcG9ydCBcIi4va2V5c1wiO1xyXG5cclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tIFwiLi9zZWxlY3Rpb25cIlxyXG5cclxuaW1wb3J0IHsgQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBJTlBVVF9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBGT0NVU19FVkVOVF9UWVBFLFxyXG4gICAgICAgICBDSEFOR0VfRVZFTlRfVFlQRSxcclxuICAgICAgICAgU0NST0xMX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIEtFWURPV05fRVZFTlRfVFlQRSxcclxuICAgICAgICAgTU9VU0VET1dOX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIE1PVVNFTU9WRV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBNT1VTRVVQX0NPTlRFWFRNRU5VX0JMVVJfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcclxuXHJcbmNvbnN0IGRlZmVyID0gKGZ1bmMpID0+IHNldFRpbWVvdXQoZnVuYywgMCk7IC8vL1xyXG5cclxuY2xhc3MgUmljaFRleHRhcmVhIGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgaXNBY3RpdmUoKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmhhc0NsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIHJldHVybiBhY3RpdmU7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KCkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxyXG4gICAgICAgICAgeyByZWFkT25seSB9ID0gZG9tRWxlbWVudDtcclxuICAgIFxyXG4gICAgcmV0dXJuIHJlYWRPbmx5OyBcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHZhbHVlIH0gPSBkb21FbGVtZW50LFxyXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSBTZWxlY3Rpb24uZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcclxuICB9XHJcblxyXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHJlYWRPbmx5XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQoY29udGVudCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0aW9uKHNlbGVjdGlvbikge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRTdGFydFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25FbmRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRFbmRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydFBvc2l0aW9uLCAgLy8vXHJcbiAgICAgICAgICBzZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb24sICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgc2VsZWN0aW9uU3RhcnQsXHJcbiAgICAgIHNlbGVjdGlvbkVuZFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBpc01vdXNlRG93bigpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBtb3VzZURvd24gfSA9IHN0YXRlO1xyXG5cclxuICAgIHJldHVybiBtb3VzZURvd247XHJcbiAgfVxyXG5cclxuICBoYXNDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgY29udGVudENoYW5nZWQgPSB0aGlzLmhhc0NvbnRlbnRDaGFuZ2VkKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdGhpcy5oYXNTZWxlY3Rpb25DaGFuZ2VkKCksXHJcbiAgICAgICAgICBjaGFuZ2VkID0gKGNvbnRlbnRDaGFuZ2VkIHx8IHNlbGVjdGlvbkNoYW5nZWQpO1xyXG5cclxuICAgIHJldHVybiBjaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgaGFzQ29udGVudENoYW5nZWQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSB0aGlzLmdldFByZXZpb3VzQ29udGVudCgpLFxyXG4gICAgICAgICAgY29udGVudERpZmZlcmVudFRvUHJldmlvdXNDb250ZW50ID0gKGNvbnRlbnQgIT09IHByZXZpb3VzQ29udGVudCksXHJcbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IGNvbnRlbnREaWZmZXJlbnRUb1ByZXZpb3VzQ29udGVudDsgLy8vXHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRDaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0aW9uQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMuZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkRpZmZlcmVudFRvUHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb24uaXNEaWZmZXJlbnRUbyhwcmV2aW91c1NlbGVjdGlvbiksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gc2VsZWN0aW9uRGlmZmVyZW50VG9QcmV2aW91c1NlbGVjdGlvbjsgLy8vXHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGlvbkNoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2V0TW91c2VEb3duKG1vdXNlRG93bik7XHJcblxyXG4gICAgd2luZG93Lm9uKE1PVVNFVVBfQ09OVEVYVE1FTlVfQkxVUl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTsgLy8vXHJcblxyXG4gICAgdGhpcy5vbihNT1VTRURPV05fRVZFTlRfVFlQRSwgdGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9uKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oS0VZRE9XTl9FVkVOVF9UWVBFLCB0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9uKElOUFVUX0VWRU5UX1RZUEUsIHRoaXMuaW5wdXRIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9uKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oRk9DVVNfRVZFTlRfVFlQRSwgdGhpcy5mb2N1c0hhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2V0TW91c2VEb3duKG1vdXNlRG93bik7XHJcblxyXG4gICAgd2luZG93Lm9mZihNT1VTRVVQX0NPTlRFWFRNRU5VX0JMVVJfRVZFTlRfVFlQRSwgdGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7ICAvLy9cclxuXHJcbiAgICB0aGlzLm9mZihNT1VTRURPV05fRVZFTlRfVFlQRSwgdGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9mZihNT1VTRU1PVkVfRVZFTlRfVFlQRSwgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9mZihLRVlET1dOX0VWRU5UX1RZUEUsIHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKElOUFVUX0VWRU5UX1RZUEUsIHRoaXMuaW5wdXRIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9mZihTQ1JPTExfRVZFTlRfVFlQRSwgdGhpcy5zY3JvbGxIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9mZihGT0NVU19FVkVOVF9UWVBFLCB0aGlzLmZvY3VzSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKGJsdXJIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBCTFVSX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gYmx1ckhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9mZkJsdXIoYmx1ckhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IEJMVVJfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBibHVySGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cyhibHVySGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gRk9DVVNfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBibHVySGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb2ZmRm9jdXMoYmx1ckhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gYmx1ckhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNDUk9MTF9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IHNjcm9sbEhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9mZlNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBzY3JvbGxIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBDSEFOR0VfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBjaGFuZ2VIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gY2hhbmdlSGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgbW91c2VVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2V0TW91c2VEb3duKG1vdXNlRG93bik7XHJcbiAgfTtcclxuXHJcbiAgbW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9yY2VkID0gZmFsc2UsXHJcbiAgICAgICAgICBtb3VzZURvd24gPSB0cnVlLFxyXG4gICAgICAgICAgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgdGhpcy5zZXRNb3VzZURvd24obW91c2VEb3duKTtcclxuXHJcbiAgICBkZWZlcigoKSA9PiB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKSk7XHJcbiAgfVxyXG5cclxuICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSBmYWxzZSxcclxuICAgICAgICAgIG1vdXNlRG93biA9IHRoaXMuaXNNb3VzZURvd24oKSxcclxuICAgICAgICAgIGV2ZW50VFlwZSA9IENIQU5HRV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIGlmIChtb3VzZURvd24pIHtcclxuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFRZcGUsIGZvcmNlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBrZXlEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9yY2VkID0gZmFsc2UsXHJcbiAgICAgICAgICBldmVudFR5cGUgPSBDSEFOR0VfRVZFTlRfVFlQRTtcclxuXHJcbiAgICBkZWZlcigoKSA9PiB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIGZvcmNlZCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBTQ1JPTExfRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLmNhbGxIYW5kbGVycyhldmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGZvY3VzSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9yY2VkID0gdHJ1ZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IEZPQ1VTX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgZGVmZXIoKCkgPT4gdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIGZvcmNlZCkpO1xyXG4gIH1cclxuXHJcbiAgYmx1ckhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IHRydWUsXHJcbiAgICAgICAgICBldmVudFR5cGUgPSBCTFVSX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIGZvcmNlZCk7XHJcbiAgfVxyXG5cclxuICBpbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIGZvcmNlZCkge1xyXG4gICAgY29uc3QgY2hhbmdlZCA9IHRoaXMuaGFzQ2hhbmdlZCgpO1xyXG5cclxuICAgIGlmIChjaGFuZ2VkIHx8IGZvcmNlZCkge1xyXG4gICAgICB0aGlzLmNhbGxIYW5kbGVycyhldmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gY29udGVudCwgIC8vL1xyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb247ICAvLy9cclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpO1xyXG4gICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBjYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcclxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcclxuXHJcbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudDogaGFuZGxlckVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cclxuXHJcbiAgICAgIGlmICgoaGFuZGxlciAhPT0gdGhpcy5ibHVySGFuZGxlcikgJiYgKGhhbmRsZXIgIT09IHRoaXMuZm9jdXNIYW5kbGVyKSAmJiAoaGFuZGxlciAhPT0gdGhpcy5zY3JvbGxIYW5kbGVyKSkge1xyXG4gICAgICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgIHsgcHJldmlvdXNDb250ZW50IH0gPSBzdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgIHsgcHJldmlvdXNTZWxlY3Rpb24gfSA9IHN0YXRlO1xyXG5cclxuICAgIHJldHVybiBwcmV2aW91c1NlbGVjdGlvbjtcclxuICB9XHJcblxyXG4gIHNldE1vdXNlRG93bihtb3VzZURvd24pIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBtb3VzZURvd25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzQ29udGVudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gbnVsbCxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbW91c2VEb3duLFxyXG4gICAgICBwcmV2aW91c0NvbnRlbnQsXHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBhY3RpdmUsIG9uQ2hhbmdlLCBvblNjcm9sbCwgb25Gb2N1cywgb25CbHVyIH0gPSB0aGlzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXHJcbiAgICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSBvblNjcm9sbCwgLy8vXHJcbiAgICAgICAgICAgIGZvY3VzSGFuZGxlciA9IG9uRm9jdXMsIC8vL1xyXG4gICAgICAgICAgICBibHVySGFuZGxlciA9IG9uQmx1cjsgLy8vXHJcblxyXG4gICAgY2hhbmdlSGFuZGxlciAmJiB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIHRoaXMpO1xyXG4gICAgc2Nyb2xsSGFuZGxlciAmJiB0aGlzLm9uU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG4gICAgZm9jdXNIYW5kbGVyICYmIHRoaXMub25Gb2N1cyhmb2N1c0hhbmRsZXIsIHRoaXMpO1xyXG4gICAgYmx1ckhhbmRsZXIgJiYgdGhpcy5vbkJsdXIoYmx1ckhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2lsbFVubW91bnQoKSB7XHJcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBvblNjcm9sbCwgb25Gb2N1cywgb25CbHVyIH0gPSB0aGlzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xyXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IG9uU2Nyb2xsLCAvLy9cclxuICAgICAgICAgIGZvY3VzSGFuZGxlciA9IG9uRm9jdXMsIC8vL1xyXG4gICAgICAgICAgYmx1ckhhbmRsZXIgPSBvbkJsdXI7IC8vL1xyXG5cclxuICAgIGNoYW5nZUhhbmRsZXIgJiYgdGhpcy5vZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgdGhpcyk7XHJcbiAgICBzY3JvbGxIYW5kbGVyICYmIHRoaXMub2ZmU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG4gICAgZm9jdXNIYW5kbGVyICYmIHRoaXMub2ZmRm9jdXMoZm9jdXNIYW5kbGVyLCB0aGlzKTtcclxuICAgIGJsdXJIYW5kbGVyICYmIHRoaXMub2ZmQmx1cihibHVySGFuZGxlciwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0ZXh0YXJlYVwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwicmljaFwiXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xyXG4gICAgXCJvbkNoYW5nZVwiLFxyXG4gICAgXCJvblNjcm9sbFwiLFxyXG4gICAgXCJvbkZvY3VzXCIsXHJcbiAgICBcIm9uQmx1clwiLFxyXG4gICAgXCJhY3RpdmVcIlxyXG4gIF07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShSaWNoVGV4dGFyZWEpYFxyXG5cclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbmBcclxuIl0sIm5hbWVzIjpbImRlZmVyIiwiZnVuYyIsInNldFRpbWVvdXQiLCJSaWNoVGV4dGFyZWEiLCJpc0FjdGl2ZSIsImFjdGl2ZSIsImhhc0NsYXNzIiwiaXNSZWFkT25seSIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwicmVhZE9ubHkiLCJnZXRDb250ZW50IiwidmFsdWUiLCJjb250ZW50IiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0aW9uIiwiZnJvbURPTUVsZW1lbnQiLCJzZXRSZWFkT25seSIsIk9iamVjdCIsImFzc2lnbiIsInNldENvbnRlbnQiLCJwcmV2aW91c0NvbnRlbnQiLCJzZXRQcmV2aW91c0NvbnRlbnQiLCJzZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsInNlbGVjdGlvbkVuZFBvc2l0aW9uIiwiZ2V0RW5kUG9zaXRpb24iLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInByZXZpb3VzU2VsZWN0aW9uIiwic2V0UHJldmlvdXNTZWxlY3Rpb24iLCJpc01vdXNlRG93biIsInN0YXRlIiwiZ2V0U3RhdGUiLCJtb3VzZURvd24iLCJoYXNDaGFuZ2VkIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsInNlbGVjdGlvbkNoYW5nZWQiLCJoYXNTZWxlY3Rpb25DaGFuZ2VkIiwiY2hhbmdlZCIsImdldFByZXZpb3VzQ29udGVudCIsImNvbnRlbnREaWZmZXJlbnRUb1ByZXZpb3VzQ29udGVudCIsImdldFByZXZpb3VzU2VsZWN0aW9uIiwic2VsZWN0aW9uRGlmZmVyZW50VG9QcmV2aW91c1NlbGVjdGlvbiIsImlzRGlmZmVyZW50VG8iLCJhY3RpdmF0ZSIsInNldE1vdXNlRG93biIsIm9uIiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsImtleURvd25IYW5kbGVyIiwiaW5wdXRIYW5kbGVyIiwic2Nyb2xsSGFuZGxlciIsImZvY3VzSGFuZGxlciIsImJsdXJIYW5kbGVyIiwiYWRkQ2xhc3MiLCJkZWFjdGl2YXRlIiwib2ZmIiwicmVtb3ZlQ2xhc3MiLCJvbkJsdXIiLCJlbGVtZW50IiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZCbHVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJvZmZGb2N1cyIsIm9uU2Nyb2xsIiwib2ZmU2Nyb2xsIiwib25DaGFuZ2UiLCJjaGFuZ2VIYW5kbGVyIiwib2ZmQ2hhbmdlIiwiZXZlbnQiLCJmb3JjZWQiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwiZXZlbnRUWXBlIiwiY2FsbEhhbmRsZXJzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJmb3JFYWNoIiwiZXZlbnRMaXN0ZW5lciIsImhhbmRsZXJFbGVtZW50IiwiY2FsbCIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsInByb3BlcnRpZXMiLCJ3aWxsVW5tb3VudCIsImluaXRpYWxpc2UiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVQLEdBQU0sQ0FBTixLQUFNOztBQUloQixHQUFhLENBQWIsVUFBYTtBQVVpQixHQUFjLENBQWQsV0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFvWTNCLENBUXZDOzs7Ozs7O0FBMVlBLEdBQUssQ0FBQ0EsS0FBSyxHQUFHLFFBQVEsQ0FBUEMsSUFBSTtJQUFLQyxNQUFNLENBQU5BLFVBQVUsQ0FBQ0QsSUFBSSxFQUFFLENBQUM7RUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFMUNFLFlBQVksaUJBQWxCLFFBQVE7Y0FBRkEsWUFBWTs4QkFBWkEsWUFBWTthQUFaQSxZQUFZOzhCQUFaQSxZQUFZOzs7aUJBQVpBLFlBQVk7O1lBQ2hCQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBUTtnQkFFckMsTUFB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
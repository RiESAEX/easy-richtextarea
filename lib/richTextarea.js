"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
require("./keys");
var _selection = _interopRequireDefault(require("./selection"));
var _eventTypes = require("./eventTypes");
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
exports.default = RichTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IFwiLi9rZXlzXCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcblxyXG5pbXBvcnQgeyBCTFVSX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIElOUFVUX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIENIQU5HRV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICAgS0VZRE9XTl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBNT1VTRURPV05fRVZFTlRfVFlQRSxcclxuICAgICAgICAgTU9VU0VNT1ZFX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIE1PVVNFVVBfQ09OVEVYVE1FTlVfQkxVUl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xyXG5cclxuY29uc3QgZGVmZXIgPSAoZnVuYykgPT4gc2V0VGltZW91dChmdW5jLCAwKTsgLy8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dGFyZWEgZXh0ZW5kcyBFbGVtZW50IHtcclxuICBpc0FjdGl2ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgcmV0dXJuIGFjdGl2ZTtcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHJlYWRPbmx5IH0gPSBkb21FbGVtZW50O1xyXG4gICAgXHJcbiAgICByZXR1cm4gcmVhZE9ubHk7IFxyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgdmFsdWUgfSA9IGRvbUVsZW1lbnQsXHJcbiAgICAgICAgICBjb250ZW50ID0gdmFsdWU7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IFNlbGVjdGlvbi5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgcmVhZE9ubHlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudChjb250ZW50KSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgdmFsdWVcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldFN0YXJ0UG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkVuZFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEVuZFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIHNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZFBvc2l0aW9uLCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbiwgIC8vL1xyXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xyXG4gICAgICBzZWxlY3Rpb25TdGFydCxcclxuICAgICAgc2VsZWN0aW9uRW5kXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGlzTW91c2VEb3duKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IG1vdXNlRG93biB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIG1vdXNlRG93bjtcclxuICB9XHJcblxyXG4gIGhhc0NoYW5nZWQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50Q2hhbmdlZCA9IHRoaXMuaGFzQ29udGVudENoYW5nZWQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmhhc1NlbGVjdGlvbkNoYW5nZWQoKSxcclxuICAgICAgICAgIGNoYW5nZWQgPSAoY29udGVudENoYW5nZWQgfHwgc2VsZWN0aW9uQ2hhbmdlZCk7XHJcblxyXG4gICAgcmV0dXJuIGNoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNDb250ZW50Q2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IHRoaXMuZ2V0UHJldmlvdXNDb250ZW50KCksXHJcbiAgICAgICAgICBjb250ZW50RGlmZmVyZW50VG9QcmV2aW91c0NvbnRlbnQgPSAoY29udGVudCAhPT0gcHJldmlvdXNDb250ZW50KSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gY29udGVudERpZmZlcmVudFRvUHJldmlvdXNDb250ZW50OyAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNTZWxlY3Rpb25DaGFuZ2VkKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5nZXRQcmV2aW91c1NlbGVjdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRGlmZmVyZW50VG9QcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbi5pc0RpZmZlcmVudFRvKHByZXZpb3VzU2VsZWN0aW9uKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSBzZWxlY3Rpb25EaWZmZXJlbnRUb1ByZXZpb3VzU2VsZWN0aW9uOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRNb3VzZURvd24obW91c2VEb3duKTtcclxuXHJcbiAgICB3aW5kb3cub24oTU9VU0VVUF9DT05URVhUTUVOVV9CTFVSX0VWRU5UX1RZUEUsIHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpOyAvLy9cclxuXHJcbiAgICB0aGlzLm9uKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihLRVlET1dOX0VWRU5UX1RZUEUsIHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oU0NST0xMX0VWRU5UX1RZUEUsIHRoaXMuc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihGT0NVU19FVkVOVF9UWVBFLCB0aGlzLmZvY3VzSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihCTFVSX0VWRU5UX1RZUEUsIHRoaXMuYmx1ckhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRNb3VzZURvd24obW91c2VEb3duKTtcclxuXHJcbiAgICB3aW5kb3cub2ZmKE1PVVNFVVBfQ09OVEVYVE1FTlVfQkxVUl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTsgIC8vL1xyXG5cclxuICAgIHRoaXMub2ZmKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKEtFWURPV05fRVZFTlRfVFlQRSwgdGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9mZihCTFVSX0VWRU5UX1RZUEUsIHRoaXMuYmx1ckhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoYmx1ckhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IEJMVVJfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBibHVySGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb2ZmQmx1cihibHVySGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGJsdXJIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGJsdXJIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBGT0NVU19FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGJsdXJIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvZmZGb2N1cyhibHVySGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gRk9DVVNfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBibHVySGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gU0NST0xMX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gc2Nyb2xsSGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb2ZmU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNDUk9MTF9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IHNjcm9sbEhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGNoYW5nZUhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBDSEFOR0VfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBjaGFuZ2VIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRNb3VzZURvd24obW91c2VEb3duKTtcclxuICB9O1xyXG5cclxuICBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSBmYWxzZSxcclxuICAgICAgICAgIG1vdXNlRG93biA9IHRydWUsXHJcbiAgICAgICAgICBldmVudFR5cGUgPSBDSEFOR0VfRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLnNldE1vdXNlRG93bihtb3VzZURvd24pO1xyXG5cclxuICAgIGRlZmVyKCgpID0+IHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpKTtcclxuICB9XHJcblxyXG4gIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgbW91c2VEb3duID0gdGhpcy5pc01vdXNlRG93bigpLFxyXG4gICAgICAgICAgZXZlbnRUWXBlID0gQ0hBTkdFX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgaWYgKG1vdXNlRG93bikge1xyXG4gICAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VFlwZSwgZm9yY2VkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGtleURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSBmYWxzZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIGRlZmVyKCgpID0+IHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpKTtcclxuICB9XHJcblxyXG4gIGlucHV0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9yY2VkID0gZmFsc2UsXHJcbiAgICAgICAgICBldmVudFR5cGUgPSBDSEFOR0VfRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNDUk9MTF9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSB0cnVlLFxyXG4gICAgICAgICAgZXZlbnRUeXBlID0gRk9DVVNfRVZFTlRfVFlQRTtcclxuXHJcbiAgICBkZWZlcigoKSA9PiB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKSk7XHJcbiAgfVxyXG5cclxuICBibHVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9yY2VkID0gdHJ1ZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IEJMVVJfRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKTtcclxuICB9XHJcblxyXG4gIGludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKSB7XHJcbiAgICBjb25zdCBjaGFuZ2VkID0gdGhpcy5oYXNDaGFuZ2VkKCk7XHJcblxyXG4gICAgaWYgKGNoYW5nZWQgfHwgZm9yY2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGNhbGxIYW5kbGVycyhldmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xyXG5cclxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcclxuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50OiBoYW5kbGVyRWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xyXG5cclxuICAgICAgaWYgKChoYW5kbGVyICE9PSB0aGlzLmJsdXJIYW5kbGVyKSAmJiAoaGFuZGxlciAhPT0gdGhpcy5mb2N1c0hhbmRsZXIpICYmIChoYW5kbGVyICE9PSB0aGlzLnNjcm9sbEhhbmRsZXIpKSB7XHJcbiAgICAgICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzQ29udGVudCgpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBwcmV2aW91c0NvbnRlbnQgfSA9IHN0YXRlO1xyXG5cclxuICAgIHJldHVybiBwcmV2aW91c0NvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c1NlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBwcmV2aW91c1NlbGVjdGlvbiB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzU2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0TW91c2VEb3duKG1vdXNlRG93bikge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIG1vdXNlRG93blxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNDb250ZW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2UsXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSBudWxsLFxyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtb3VzZURvd24sXHJcbiAgICAgIHByZXZpb3VzQ29udGVudCxcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZSwgb25DaGFuZ2UsIG9uU2Nyb2xsLCBvbkZvY3VzLCBvbkJsdXIgfSA9IHRoaXMucHJvcGVydGllcyxcclxuICAgICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cclxuICAgICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IG9uU2Nyb2xsLCAvLy9cclxuICAgICAgICAgICAgZm9jdXNIYW5kbGVyID0gb25Gb2N1cywgLy8vXHJcbiAgICAgICAgICAgIGJsdXJIYW5kbGVyID0gb25CbHVyOyAvLy9cclxuXHJcbiAgICBjaGFuZ2VIYW5kbGVyICYmIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgdGhpcyk7XHJcbiAgICBzY3JvbGxIYW5kbGVyICYmIHRoaXMub25TY3JvbGwoc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcbiAgICBmb2N1c0hhbmRsZXIgJiYgdGhpcy5vbkZvY3VzKGZvY3VzSGFuZGxlciwgdGhpcyk7XHJcbiAgICBibHVySGFuZGxlciAmJiB0aGlzLm9uQmx1cihibHVySGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aWxsVW5tb3VudCgpIHtcclxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIG9uU2Nyb2xsLCBvbkZvY3VzLCBvbkJsdXIgfSA9IHRoaXMucHJvcGVydGllcyxcclxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXHJcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gb25TY3JvbGwsIC8vL1xyXG4gICAgICAgICAgZm9jdXNIYW5kbGVyID0gb25Gb2N1cywgLy8vXHJcbiAgICAgICAgICBibHVySGFuZGxlciA9IG9uQmx1cjsgLy8vXHJcblxyXG4gICAgY2hhbmdlSGFuZGxlciAmJiB0aGlzLm9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICAgIHNjcm9sbEhhbmRsZXIgJiYgdGhpcy5vZmZTY3JvbGwoc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcbiAgICBmb2N1c0hhbmRsZXIgJiYgdGhpcy5vZmZGb2N1cyhmb2N1c0hhbmRsZXIsIHRoaXMpO1xyXG4gICAgYmx1ckhhbmRsZXIgJiYgdGhpcy5vZmZCbHVyKGJsdXJIYW5kbGVyLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJyaWNoXCJcclxuICB9O1xyXG5cclxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXHJcbiAgICBcIm9uQ2hhbmdlXCIsXHJcbiAgICBcIm9uU2Nyb2xsXCIsXHJcbiAgICBcIm9uRm9jdXNcIixcclxuICAgIFwib25CbHVyXCIsXHJcbiAgICBcImFjdGl2ZVwiXHJcbiAgXTtcclxufVxyXG4iXSwibmFtZXMiOlsiZGVmZXIiLCJmdW5jIiwic2V0VGltZW91dCIsIlJpY2hUZXh0YXJlYSIsImlzQWN0aXZlIiwiYWN0aXZlIiwiaGFzQ2xhc3MiLCJpc1JlYWRPbmx5IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJyZWFkT25seSIsImdldENvbnRlbnQiLCJ2YWx1ZSIsImNvbnRlbnQiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb24iLCJmcm9tRE9NRWxlbWVudCIsInNldFJlYWRPbmx5IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0Q29udGVudCIsInByZXZpb3VzQ29udGVudCIsInNldFByZXZpb3VzQ29udGVudCIsInNldFNlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJnZXRTdGFydFBvc2l0aW9uIiwic2VsZWN0aW9uRW5kUG9zaXRpb24iLCJnZXRFbmRQb3NpdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwicHJldmlvdXNTZWxlY3Rpb24iLCJzZXRQcmV2aW91c1NlbGVjdGlvbiIsImlzTW91c2VEb3duIiwic3RhdGUiLCJnZXRTdGF0ZSIsIm1vdXNlRG93biIsImhhc0NoYW5nZWQiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwic2VsZWN0aW9uQ2hhbmdlZCIsImhhc1NlbGVjdGlvbkNoYW5nZWQiLCJjaGFuZ2VkIiwiZ2V0UHJldmlvdXNDb250ZW50IiwiY29udGVudERpZmZlcmVudFRvUHJldmlvdXNDb250ZW50IiwiZ2V0UHJldmlvdXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25EaWZmZXJlbnRUb1ByZXZpb3VzU2VsZWN0aW9uIiwiaXNEaWZmZXJlbnRUbyIsImFjdGl2YXRlIiwic2V0TW91c2VEb3duIiwib24iLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwia2V5RG93bkhhbmRsZXIiLCJpbnB1dEhhbmRsZXIiLCJzY3JvbGxIYW5kbGVyIiwiZm9jdXNIYW5kbGVyIiwiYmx1ckhhbmRsZXIiLCJhZGRDbGFzcyIsImRlYWN0aXZhdGUiLCJvZmYiLCJyZW1vdmVDbGFzcyIsIm9uQmx1ciIsImVsZW1lbnQiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZkJsdXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsIm9mZkZvY3VzIiwib25TY3JvbGwiLCJvZmZTY3JvbGwiLCJvbkNoYW5nZSIsImNoYW5nZUhhbmRsZXIiLCJvZmZDaGFuZ2UiLCJldmVudCIsImZvcmNlZCIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJldmVudFRZcGUiLCJjYWxsSGFuZGxlcnMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImZvckVhY2giLCJldmVudExpc3RlbmVyIiwiaGFuZGxlckVsZW1lbnQiLCJjYWxsIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50IiwicHJvcGVydGllcyIsIndpbGxVbm1vdW50IiwiaW5pdGlhbGlzZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVvQixHQUFNLENBQU4sS0FBTTs7QUFJaEIsR0FBYSxDQUFiLFVBQWE7QUFVaUIsR0FBYyxDQUFkLFdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRSxHQUFLLENBQUNBLEtBQUssR0FBRyxRQUFRLENBQVBDLElBQUk7SUFBS0MsTUFBTSxDQUFOQSxVQUFVLENBQUNELElBQUksRUFBRSxDQUFDO0VBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRTNCRSxZQUFZLGlCQUFsQixRQUFROzs7YUFBRkEsWUFBWTs7Ozs7O1lBQy9CQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBUTtnQkFFckMsTUFBTSxDQUFDRCxNQUFNO1lBQ2YsQ0FBQzs7O1lBRURFLEdBQVUsRUFBVkEsQ0FBVTttQkFBVkEsUUFBUSxDQUFSQSxVQUFVLEdBQUcsQ0FBQztnQkFDWixHQUFLLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNDLGFBQWEsSUFDN0JDLFFBQVEsR0FBS0YsVUFBVSxDQUF2QkUsUUFBUTtnQkFFaEIsTUFBTSxDQUFDQSxRQUFRO1lBQ2pCLENBQUM7OztZQUVEQyxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxHQUFHLENBQUM7Z0JBQ1osR0FB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
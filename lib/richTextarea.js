"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
require("./keys");
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
exports.default = RichTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQsIGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IFwiLi9rZXlzXCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcblxyXG5jb25zdCB7IEJMVVJfRVZFTlRfVFlQRSxcclxuICAgICAgICAgSU5QVVRfRVZFTlRfVFlQRSxcclxuICAgICAgICAgRk9DVVNfRVZFTlRfVFlQRSxcclxuICAgICAgICAgQ0hBTkdFX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIFNDUk9MTF9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBLRVlET1dOX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIE1PVVNFVVBfRVZFTlRfVFlQRSxcclxuICAgICAgICAgTU9VU0VET1dOX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIE1PVVNFTU9WRV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBDT05URVhUTUVOVV9FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xyXG5cclxuY29uc3QgZGVmZXIgPSAoZnVuYykgPT4gc2V0VGltZW91dChmdW5jLCAwKTsgLy8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dGFyZWEgZXh0ZW5kcyBFbGVtZW50IHtcclxuICBpc0FjdGl2ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgcmV0dXJuIGFjdGl2ZTtcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHJlYWRPbmx5IH0gPSBkb21FbGVtZW50O1xyXG4gICAgXHJcbiAgICByZXR1cm4gcmVhZE9ubHk7IFxyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgdmFsdWUgfSA9IGRvbUVsZW1lbnQsXHJcbiAgICAgICAgICBjb250ZW50ID0gdmFsdWU7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IFNlbGVjdGlvbi5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgcmVhZE9ubHlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudChjb250ZW50KSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgdmFsdWVcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldFN0YXJ0UG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkVuZFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEVuZFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIHNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZFBvc2l0aW9uLCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbiwgIC8vL1xyXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xyXG4gICAgICBzZWxlY3Rpb25TdGFydCxcclxuICAgICAgc2VsZWN0aW9uRW5kXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGlzTW91c2VEb3duKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IG1vdXNlRG93biB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIG1vdXNlRG93bjtcclxuICB9XHJcblxyXG4gIGhhc0NoYW5nZWQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50Q2hhbmdlZCA9IHRoaXMuaGFzQ29udGVudENoYW5nZWQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmhhc1NlbGVjdGlvbkNoYW5nZWQoKSxcclxuICAgICAgICAgIGNoYW5nZWQgPSAoY29udGVudENoYW5nZWQgfHwgc2VsZWN0aW9uQ2hhbmdlZCk7XHJcblxyXG4gICAgcmV0dXJuIGNoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNDb250ZW50Q2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IHRoaXMuZ2V0UHJldmlvdXNDb250ZW50KCksXHJcbiAgICAgICAgICBjb250ZW50RGlmZmVyZW50VG9QcmV2aW91c0NvbnRlbnQgPSAoY29udGVudCAhPT0gcHJldmlvdXNDb250ZW50KSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gY29udGVudERpZmZlcmVudFRvUHJldmlvdXNDb250ZW50OyAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNTZWxlY3Rpb25DaGFuZ2VkKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5nZXRQcmV2aW91c1NlbGVjdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRGlmZmVyZW50VG9QcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbi5pc0RpZmZlcmVudFRvKHByZXZpb3VzU2VsZWN0aW9uKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSBzZWxlY3Rpb25EaWZmZXJlbnRUb1ByZXZpb3VzU2VsZWN0aW9uOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRNb3VzZURvd24obW91c2VEb3duKTtcclxuXHJcbiAgICB3aW5kb3cub24oYCR7QkxVUl9FVkVOVF9UWVBFfSAke01PVVNFVVBfRVZFTlRfVFlQRX0gJHtDT05URVhUTUVOVV9FVkVOVF9UWVBFfWAsIHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpOyAvLy9cclxuXHJcbiAgICB0aGlzLm9uKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihLRVlET1dOX0VWRU5UX1RZUEUsIHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oU0NST0xMX0VWRU5UX1RZUEUsIHRoaXMuc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihGT0NVU19FVkVOVF9UWVBFLCB0aGlzLmZvY3VzSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihCTFVSX0VWRU5UX1RZUEUsIHRoaXMuYmx1ckhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRNb3VzZURvd24obW91c2VEb3duKTtcclxuXHJcbiAgICB3aW5kb3cub2ZmKGAke0JMVVJfRVZFTlRfVFlQRX0gJHtNT1VTRVVQX0VWRU5UX1RZUEV9ICR7Q09OVEVYVE1FTlVfRVZFTlRfVFlQRX1gLCB0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTsgLy8vXHJcblxyXG4gICAgdGhpcy5vZmYoTU9VU0VET1dOX0VWRU5UX1RZUEUsIHRoaXMubW91c2VEb3duSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoS0VZRE9XTl9FVkVOVF9UWVBFLCB0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9mZihJTlBVVF9FVkVOVF9UWVBFLCB0aGlzLmlucHV0SGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoU0NST0xMX0VWRU5UX1RZUEUsIHRoaXMuc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoRk9DVVNfRVZFTlRfVFlQRSwgdGhpcy5mb2N1c0hhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKEJMVVJfRVZFTlRfVFlQRSwgdGhpcy5ibHVySGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cihibHVySGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGJsdXJIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvZmZCbHVyKGJsdXJIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBCTFVSX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gYmx1ckhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoYmx1ckhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gYmx1ckhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9mZkZvY3VzKGJsdXJIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBGT0NVU19FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGJsdXJIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBzY3JvbGxIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvZmZTY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gU0NST0xMX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gc2Nyb2xsSGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gY2hhbmdlSGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGNoYW5nZUhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG1vdXNlVXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNldE1vdXNlRG93bihtb3VzZURvd24pO1xyXG4gIH07XHJcblxyXG4gIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgbW91c2VEb3duID0gdHJ1ZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuc2V0TW91c2VEb3duKG1vdXNlRG93bik7XHJcblxyXG4gICAgZGVmZXIoKCkgPT4gdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIGZvcmNlZCkpO1xyXG4gIH1cclxuXHJcbiAgbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9yY2VkID0gZmFsc2UsXHJcbiAgICAgICAgICBtb3VzZURvd24gPSB0aGlzLmlzTW91c2VEb3duKCksXHJcbiAgICAgICAgICBldmVudFRZcGUgPSBDSEFOR0VfRVZFTlRfVFlQRTtcclxuXHJcbiAgICBpZiAobW91c2VEb3duKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUWXBlLCBmb3JjZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5RG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgZGVmZXIoKCkgPT4gdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIGZvcmNlZCkpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSBmYWxzZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gU0NST0xMX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IHRydWUsXHJcbiAgICAgICAgICBldmVudFR5cGUgPSBGT0NVU19FVkVOVF9UWVBFO1xyXG5cclxuICAgIGRlZmVyKCgpID0+IHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpKTtcclxuICB9XHJcblxyXG4gIGJsdXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSB0cnVlLFxyXG4gICAgICAgICAgZXZlbnRUeXBlID0gQkxVUl9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpIHtcclxuICAgIGNvbnN0IGNoYW5nZWQgPSB0aGlzLmhhc0NoYW5nZWQoKTtcclxuXHJcbiAgICBpZiAoY2hhbmdlZCB8fCBmb3JjZWQpIHtcclxuICAgICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuICAgIHRoaXMuc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XHJcblxyXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xyXG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQ6IGhhbmRsZXJFbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxyXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpczsgLy8vXHJcblxyXG4gICAgICBpZiAoKGhhbmRsZXIgIT09IHRoaXMuYmx1ckhhbmRsZXIpICYmIChoYW5kbGVyICE9PSB0aGlzLmZvY3VzSGFuZGxlcikgJiYgKGhhbmRsZXIgIT09IHRoaXMuc2Nyb2xsSGFuZGxlcikpIHtcclxuICAgICAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNDb250ZW50KCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IHByZXZpb3VzQ29udGVudCB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzQ29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzU2VsZWN0aW9uKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IHByZXZpb3VzU2VsZWN0aW9uIH0gPSBzdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNTZWxlY3Rpb247XHJcbiAgfVxyXG5cclxuICBzZXRNb3VzZURvd24obW91c2VEb3duKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgbW91c2VEb3duXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c0NvbnRlbnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IG51bGwsXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vdXNlRG93bixcclxuICAgICAgcHJldmlvdXNDb250ZW50LFxyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZlLCBvbkNoYW5nZSwgb25TY3JvbGwsIG9uRm9jdXMsIG9uQmx1ciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xyXG4gICAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gb25TY3JvbGwsIC8vL1xyXG4gICAgICAgICAgICBmb2N1c0hhbmRsZXIgPSBvbkZvY3VzLCAvLy9cclxuICAgICAgICAgICAgYmx1ckhhbmRsZXIgPSBvbkJsdXI7IC8vL1xyXG5cclxuICAgIGNoYW5nZUhhbmRsZXIgJiYgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICAgIHNjcm9sbEhhbmRsZXIgJiYgdGhpcy5vblNjcm9sbChzY3JvbGxIYW5kbGVyLCB0aGlzKTtcclxuICAgIGZvY3VzSGFuZGxlciAmJiB0aGlzLm9uRm9jdXMoZm9jdXNIYW5kbGVyLCB0aGlzKTtcclxuICAgIGJsdXJIYW5kbGVyICYmIHRoaXMub25CbHVyKGJsdXJIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbGxVbm1vdW50KCkge1xyXG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb25TY3JvbGwsIG9uRm9jdXMsIG9uQmx1ciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cclxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSBvblNjcm9sbCwgLy8vXHJcbiAgICAgICAgICBmb2N1c0hhbmRsZXIgPSBvbkZvY3VzLCAvLy9cclxuICAgICAgICAgIGJsdXJIYW5kbGVyID0gb25CbHVyOyAvLy9cclxuXHJcbiAgICBjaGFuZ2VIYW5kbGVyICYmIHRoaXMub2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIHRoaXMpO1xyXG4gICAgc2Nyb2xsSGFuZGxlciAmJiB0aGlzLm9mZlNjcm9sbChzY3JvbGxIYW5kbGVyLCB0aGlzKTtcclxuICAgIGZvY3VzSGFuZGxlciAmJiB0aGlzLm9mZkZvY3VzKGZvY3VzSGFuZGxlciwgdGhpcyk7XHJcbiAgICBibHVySGFuZGxlciAmJiB0aGlzLm9mZkJsdXIoYmx1ckhhbmRsZXIsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwidGV4dGFyZWFcIjtcclxuXHJcbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xyXG4gICAgXCJvbkNoYW5nZVwiLFxyXG4gICAgXCJvblNjcm9sbFwiLFxyXG4gICAgXCJvbkZvY3VzXCIsXHJcbiAgICBcIm9uQmx1clwiLFxyXG4gICAgXCJhY3RpdmVcIlxyXG4gIF07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJyaWNoXCJcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCTFVSX0VWRU5UX1RZUEUiLCJJTlBVVF9FVkVOVF9UWVBFIiwiRk9DVVNfRVZFTlRfVFlQRSIsIkNIQU5HRV9FVkVOVF9UWVBFIiwiU0NST0xMX0VWRU5UX1RZUEUiLCJLRVlET1dOX0VWRU5UX1RZUEUiLCJNT1VTRVVQX0VWRU5UX1RZUEUiLCJNT1VTRURPV05fRVZFTlRfVFlQRSIsIk1PVVNFTU9WRV9FVkVOVF9UWVBFIiwiQ09OVEVYVE1FTlVfRVZFTlRfVFlQRSIsImRlZmVyIiwiZnVuYyIsInNldFRpbWVvdXQiLCJSaWNoVGV4dGFyZWEiLCJpc0FjdGl2ZSIsImFjdGl2ZSIsImhhc0NsYXNzIiwiaXNSZWFkT25seSIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwicmVhZE9ubHkiLCJnZXRDb250ZW50IiwidmFsdWUiLCJjb250ZW50IiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0aW9uIiwiZnJvbURPTUVsZW1lbnQiLCJzZXRSZWFkT25seSIsIk9iamVjdCIsImFzc2lnbiIsInNldENvbnRlbnQiLCJwcmV2aW91c0NvbnRlbnQiLCJzZXRQcmV2aW91c0NvbnRlbnQiLCJzZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsInNlbGVjdGlvbkVuZFBvc2l0aW9uIiwiZ2V0RW5kUG9zaXRpb24iLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInByZXZpb3VzU2VsZWN0aW9uIiwic2V0UHJldmlvdXNTZWxlY3Rpb24iLCJpc01vdXNlRG93biIsInN0YXRlIiwiZ2V0U3RhdGUiLCJtb3VzZURvd24iLCJoYXNDaGFuZ2VkIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsInNlbGVjdGlvbkNoYW5nZWQiLCJoYXNTZWxlY3Rpb25DaGFuZ2VkIiwiY2hhbmdlZCIsImdldFByZXZpb3VzQ29udGVudCIsImNvbnRlbnREaWZmZXJlbnRUb1ByZXZpb3VzQ29udGVudCIsImdldFByZXZpb3VzU2VsZWN0aW9uIiwic2VsZWN0aW9uRGlmZmVyZW50VG9QcmV2aW91c1NlbGVjdGlvbiIsImlzRGlmZmVyZW50VG8iLCJhY3RpdmF0ZSIsInNldE1vdXNlRG93biIsIm9uIiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsImtleURvd25IYW5kbGVyIiwiaW5wdXRIYW5kbGVyIiwic2Nyb2xsSGFuZGxlciIsImZvY3VzSGFuZGxlciIsImJsdXJIYW5kbGVyIiwiYWRkQ2xhc3MiLCJkZWFjdGl2YXRlIiwib2ZmIiwicmVtb3ZlQ2xhc3MiLCJvbkJsdXIiLCJlbGVtZW50IiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZCbHVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJvZmZGb2N1cyIsIm9uU2Nyb2xsIiwib2ZmU2Nyb2xsIiwib25DaGFuZ2UiLCJjaGFuZ2VIYW5kbGVyIiwib2ZmQ2hhbmdlIiwiZXZlbnQiLCJmb3JjZWQiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwiZXZlbnRUWXBlIiwiY2FsbEhhbmRsZXJzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJmb3JFYWNoIiwiZXZlbnRMaXN0ZW5lciIsImhhbmRsZXJFbGVtZW50IiwiY2FsbCIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsInByb3BlcnRpZXMiLCJ3aWxsVW5tb3VudCIsImluaXRpYWxpc2UiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZ0MsR0FBTSxDQUFOLEtBQU07O0FBSTVCLEdBQWEsQ0FBYixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsR0FBSyxDQUFHQSxlQUFlLEdBTnFCLEtBQU0sWUFNMUNBLGVBQWUsRUFDZEMsZ0JBQWdCLEdBUG1CLEtBQU0sWUFPekNBLGdCQUFnQixFQUNoQkMsZ0JBQWdCLEdBUm1CLEtBQU0sWUFRekNBLGdCQUFnQixFQUNoQkMsaUJBQWlCLEdBVGtCLEtBQU0sWUFTekNBLGlCQUFpQixFQUNqQkMsaUJBQWlCLEdBVmtCLEtBQU0sWUFVekNBLGlCQUFpQixFQUNqQkMsa0JBQWtCLEdBWGlCLEtBQU0sWUFXekNBLGtCQUFrQixFQUNsQkMsa0JBQWtCLEdBWmlCLEtB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
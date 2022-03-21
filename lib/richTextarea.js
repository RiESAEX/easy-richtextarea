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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQsIGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IFwiLi9rZXlzXCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcblxyXG5jb25zdCB7IEJMVVJfRVZFTlRfVFlQRSxcclxuICAgICAgICAgSU5QVVRfRVZFTlRfVFlQRSxcclxuICAgICAgICAgRk9DVVNfRVZFTlRfVFlQRSxcclxuICAgICAgICAgQ0hBTkdFX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIFNDUk9MTF9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBLRVlET1dOX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIE1PVVNFVVBfRVZFTlRfVFlQRSxcclxuICAgICAgICAgTU9VU0VET1dOX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIE1PVVNFTU9WRV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBDT05URVhUTUVOVV9FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xyXG5cclxuY29uc3QgZGVmZXIgPSAoZnVuYykgPT4gc2V0VGltZW91dChmdW5jLCAwKTsgLy8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dGFyZWEgZXh0ZW5kcyBFbGVtZW50IHtcclxuICBpc0FjdGl2ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgcmV0dXJuIGFjdGl2ZTtcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHJlYWRPbmx5IH0gPSBkb21FbGVtZW50O1xyXG4gICAgXHJcbiAgICByZXR1cm4gcmVhZE9ubHk7IFxyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgdmFsdWUgfSA9IGRvbUVsZW1lbnQsXHJcbiAgICAgICAgICBjb250ZW50ID0gdmFsdWU7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IFNlbGVjdGlvbi5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgcmVhZE9ubHlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudChjb250ZW50KSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgdmFsdWVcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldFN0YXJ0UG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkVuZFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEVuZFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIHNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZFBvc2l0aW9uLCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbiwgIC8vL1xyXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xyXG4gICAgICBzZWxlY3Rpb25TdGFydCxcclxuICAgICAgc2VsZWN0aW9uRW5kXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGlzTW91c2VEb3duKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IG1vdXNlRG93biB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIG1vdXNlRG93bjtcclxuICB9XHJcblxyXG4gIGhhc0NoYW5nZWQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50Q2hhbmdlZCA9IHRoaXMuaGFzQ29udGVudENoYW5nZWQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmhhc1NlbGVjdGlvbkNoYW5nZWQoKSxcclxuICAgICAgICAgIGNoYW5nZWQgPSAoY29udGVudENoYW5nZWQgfHwgc2VsZWN0aW9uQ2hhbmdlZCk7XHJcblxyXG4gICAgcmV0dXJuIGNoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNDb250ZW50Q2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IHRoaXMuZ2V0UHJldmlvdXNDb250ZW50KCksXHJcbiAgICAgICAgICBjb250ZW50RGlmZmVyZW50VG9QcmV2aW91c0NvbnRlbnQgPSAoY29udGVudCAhPT0gcHJldmlvdXNDb250ZW50KSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gY29udGVudERpZmZlcmVudFRvUHJldmlvdXNDb250ZW50OyAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNTZWxlY3Rpb25DaGFuZ2VkKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5nZXRQcmV2aW91c1NlbGVjdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRGlmZmVyZW50VG9QcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbi5pc0RpZmZlcmVudFRvKHByZXZpb3VzU2VsZWN0aW9uKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSBzZWxlY3Rpb25EaWZmZXJlbnRUb1ByZXZpb3VzU2VsZWN0aW9uOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRNb3VzZURvd24obW91c2VEb3duKTtcclxuXHJcbiAgICB3aW5kb3cub24oYCR7QkxVUl9FVkVOVF9UWVBFfSAke01PVVNFVVBfRVZFTlRfVFlQRX0gJHtDT05URVhUTUVOVV9FVkVOVF9UWVBFfWAsIHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpOyAvLy9cclxuXHJcbiAgICB0aGlzLm9uKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihLRVlET1dOX0VWRU5UX1RZUEUsIHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oU0NST0xMX0VWRU5UX1RZUEUsIHRoaXMuc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihGT0NVU19FVkVOVF9UWVBFLCB0aGlzLmZvY3VzSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihCTFVSX0VWRU5UX1RZUEUsIHRoaXMuYmx1ckhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRNb3VzZURvd24obW91c2VEb3duKTtcclxuXHJcbiAgICB3aW5kb3cub2ZmKGAke0JMVVJfRVZFTlRfVFlQRX0gJHtNT1VTRVVQX0VWRU5UX1RZUEV9ICR7Q09OVEVYVE1FTlVfRVZFTlRfVFlQRX1gLCB0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTsgLy8vXHJcblxyXG4gICAgdGhpcy5vZmYoTU9VU0VET1dOX0VWRU5UX1RZUEUsIHRoaXMubW91c2VEb3duSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoS0VZRE9XTl9FVkVOVF9UWVBFLCB0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9mZihJTlBVVF9FVkVOVF9UWVBFLCB0aGlzLmlucHV0SGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoU0NST0xMX0VWRU5UX1RZUEUsIHRoaXMuc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoRk9DVVNfRVZFTlRfVFlQRSwgdGhpcy5mb2N1c0hhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKEJMVVJfRVZFTlRfVFlQRSwgdGhpcy5ibHVySGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cihibHVySGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGJsdXJIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvZmZCbHVyKGJsdXJIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBCTFVSX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gYmx1ckhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoYmx1ckhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gYmx1ckhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9mZkZvY3VzKGJsdXJIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBGT0NVU19FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGJsdXJIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBzY3JvbGxIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvZmZTY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gU0NST0xMX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gc2Nyb2xsSGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gY2hhbmdlSGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGNoYW5nZUhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG1vdXNlVXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNldE1vdXNlRG93bihtb3VzZURvd24pO1xyXG4gIH07XHJcblxyXG4gIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgbW91c2VEb3duID0gdHJ1ZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuc2V0TW91c2VEb3duKG1vdXNlRG93bik7XHJcblxyXG4gICAgZGVmZXIoKCkgPT4gdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIGZvcmNlZCkpO1xyXG4gIH1cclxuXHJcbiAgbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9yY2VkID0gZmFsc2UsXHJcbiAgICAgICAgICBtb3VzZURvd24gPSB0aGlzLmlzTW91c2VEb3duKCksXHJcbiAgICAgICAgICBldmVudFRZcGUgPSBDSEFOR0VfRVZFTlRfVFlQRTtcclxuXHJcbiAgICBpZiAobW91c2VEb3duKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUWXBlLCBmb3JjZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5RG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgZGVmZXIoKCkgPT4gdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIGZvcmNlZCkpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSBmYWxzZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gU0NST0xMX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0hhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IHRydWUsXHJcbiAgICAgICAgICBldmVudFR5cGUgPSBGT0NVU19FVkVOVF9UWVBFO1xyXG5cclxuICAgIGRlZmVyKCgpID0+IHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpKTtcclxuICB9XHJcblxyXG4gIGJsdXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSB0cnVlLFxyXG4gICAgICAgICAgZXZlbnRUeXBlID0gQkxVUl9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpIHtcclxuICAgIGNvbnN0IGNoYW5nZWQgPSB0aGlzLmhhc0NoYW5nZWQoKTtcclxuXHJcbiAgICBpZiAoY2hhbmdlZCB8fCBmb3JjZWQpIHtcclxuICAgICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuICAgIHRoaXMuc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XHJcblxyXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xyXG4gICAgICBjb25zdCB7IGhhbmRsZXIsIGVsZW1lbnQ6IGhhbmRsZXJFbGVtZW50IH0gPSBldmVudExpc3RlbmVyLFxyXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpczsgLy8vXHJcblxyXG4gICAgICBpZiAoKGhhbmRsZXIgIT09IHRoaXMuYmx1ckhhbmRsZXIpICYmIChoYW5kbGVyICE9PSB0aGlzLmZvY3VzSGFuZGxlcikgJiYgKGhhbmRsZXIgIT09IHRoaXMuc2Nyb2xsSGFuZGxlcikpIHtcclxuICAgICAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNDb250ZW50KCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IHByZXZpb3VzQ29udGVudCB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzQ29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzU2VsZWN0aW9uKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IHByZXZpb3VzU2VsZWN0aW9uIH0gPSBzdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNTZWxlY3Rpb247XHJcbiAgfVxyXG5cclxuICBzZXRNb3VzZURvd24obW91c2VEb3duKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgbW91c2VEb3duXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c0NvbnRlbnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IG51bGwsXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vdXNlRG93bixcclxuICAgICAgcHJldmlvdXNDb250ZW50LFxyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZlLCBvbkNoYW5nZSwgb25TY3JvbGwsIG9uRm9jdXMsIG9uQmx1ciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xyXG4gICAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gb25TY3JvbGwsIC8vL1xyXG4gICAgICAgICAgICBmb2N1c0hhbmRsZXIgPSBvbkZvY3VzLCAvLy9cclxuICAgICAgICAgICAgYmx1ckhhbmRsZXIgPSBvbkJsdXI7IC8vL1xyXG5cclxuICAgIGNoYW5nZUhhbmRsZXIgJiYgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICAgIHNjcm9sbEhhbmRsZXIgJiYgdGhpcy5vblNjcm9sbChzY3JvbGxIYW5kbGVyLCB0aGlzKTtcclxuICAgIGZvY3VzSGFuZGxlciAmJiB0aGlzLm9uRm9jdXMoZm9jdXNIYW5kbGVyLCB0aGlzKTtcclxuICAgIGJsdXJIYW5kbGVyICYmIHRoaXMub25CbHVyKGJsdXJIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbGxVbm1vdW50KCkge1xyXG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb25TY3JvbGwsIG9uRm9jdXMsIG9uQmx1ciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cclxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSBvblNjcm9sbCwgLy8vXHJcbiAgICAgICAgICBmb2N1c0hhbmRsZXIgPSBvbkZvY3VzLCAvLy9cclxuICAgICAgICAgIGJsdXJIYW5kbGVyID0gb25CbHVyOyAvLy9cclxuXHJcbiAgICBjaGFuZ2VIYW5kbGVyICYmIHRoaXMub2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIHRoaXMpO1xyXG4gICAgc2Nyb2xsSGFuZGxlciAmJiB0aGlzLm9mZlNjcm9sbChzY3JvbGxIYW5kbGVyLCB0aGlzKTtcclxuICAgIGZvY3VzSGFuZGxlciAmJiB0aGlzLm9mZkZvY3VzKGZvY3VzSGFuZGxlciwgdGhpcyk7XHJcbiAgICBibHVySGFuZGxlciAmJiB0aGlzLm9mZkJsdXIoYmx1ckhhbmRsZXIsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwidGV4dGFyZWFcIjtcclxuXHJcbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xyXG4gICAgXCJvbkNoYW5nZVwiLFxyXG4gICAgXCJvblNjcm9sbFwiLFxyXG4gICAgXCJvbkZvY3VzXCIsXHJcbiAgICBcIm9uQmx1clwiLFxyXG4gICAgXCJhY3RpdmVcIlxyXG4gIF07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJyaWNoXCJcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCTFVSX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiSU5QVVRfRVZFTlRfVFlQRSIsIkZPQ1VTX0VWRU5UX1RZUEUiLCJDSEFOR0VfRVZFTlRfVFlQRSIsIlNDUk9MTF9FVkVOVF9UWVBFIiwiS0VZRE9XTl9FVkVOVF9UWVBFIiwiTU9VU0VVUF9FVkVOVF9UWVBFIiwiTU9VU0VET1dOX0VWRU5UX1RZUEUiLCJNT1VTRU1PVkVfRVZFTlRfVFlQRSIsIkNPTlRFWFRNRU5VX0VWRU5UX1RZUEUiLCJkZWZlciIsImZ1bmMiLCJzZXRUaW1lb3V0IiwiUmljaFRleHRhcmVhIiwiaXNBY3RpdmUiLCJhY3RpdmUiLCJoYXNDbGFzcyIsImlzUmVhZE9ubHkiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInJlYWRPbmx5IiwiZ2V0Q29udGVudCIsInZhbHVlIiwiY29udGVudCIsImdldFNlbGVjdGlvbiIsInNlbGVjdGlvbiIsIlNlbGVjdGlvbiIsImZyb21ET01FbGVtZW50Iiwic2V0UmVhZE9ubHkiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRDb250ZW50IiwicHJldmlvdXNDb250ZW50Iiwic2V0UHJldmlvdXNDb250ZW50Iiwic2V0U2VsZWN0aW9uIiwic2VsZWN0aW9uU3RhcnRQb3NpdGlvbiIsImdldFN0YXJ0UG9zaXRpb24iLCJzZWxlY3Rpb25FbmRQb3NpdGlvbiIsImdldEVuZFBvc2l0aW9uIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJwcmV2aW91c1NlbGVjdGlvbiIsInNldFByZXZpb3VzU2VsZWN0aW9uIiwiaXNNb3VzZURvd24iLCJzdGF0ZSIsImdldFN0YXRlIiwibW91c2VEb3duIiwiaGFzQ2hhbmdlZCIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiaGFzU2VsZWN0aW9uQ2hhbmdlZCIsImNoYW5nZWQiLCJnZXRQcmV2aW91c0NvbnRlbnQiLCJjb250ZW50RGlmZmVyZW50VG9QcmV2aW91c0NvbnRlbnQiLCJnZXRQcmV2aW91c1NlbGVjdGlvbiIsInNlbGVjdGlvbkRpZmZlcmVudFRvUHJldmlvdXNTZWxlY3Rpb24iLCJpc0RpZmZlcmVudFRvIiwiYWN0aXZhdGUiLCJzZXRNb3VzZURvd24iLCJ3aW5kb3ciLCJvbiIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJrZXlEb3duSGFuZGxlciIsImlucHV0SGFuZGxlciIsInNjcm9sbEhhbmRsZXIiLCJmb2N1c0hhbmRsZXIiLCJibHVySGFuZGxlciIsImFkZENsYXNzIiwiZGVhY3RpdmF0ZSIsIm9mZiIsInJlbW92ZUNsYXNzIiwib25CbHVyIiwiZWxlbWVudCIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmQmx1ciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkZvY3VzIiwib2ZmRm9jdXMiLCJvblNjcm9sbCIsIm9mZlNjcm9sbCIsIm9uQ2hhbmdlIiwiY2hhbmdlSGFuZGxlciIsIm9mZkNoYW5nZSIsImV2ZW50IiwiZm9yY2VkIiwiaW50ZXJtZWRpYXRlSGFuZGxlciIsImV2ZW50VFlwZSIsImNhbGxIYW5kbGVycyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyRWxlbWVudCIsImNhbGwiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwid2lsbFVubW91bnQiLCJpbml0aWFsaXNlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRTRDLElBQUEsS0FBTSxXQUFOLE1BQU0sQ0FBQTtRQUUzQyxRQUFRLENBSmY7QUFNc0IsSUFBQSxVQUFhLGtDQUFiLGFBQWEsRUFBQTs7eURBTm5DO3VFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dGQUFBOzs7Ozs7OztzQ0FBQTs7Ozs7O2lDQUFBOzs7aUVBQUE7O1NBQUE7Ozs7Ozs7OERBQUE7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7Ozs7MkJBQUE7Ozs7Ozs7K0RBQUE7Ozs7Ozs7Ozs7Ozs7c0NBQUE7Ozs7Ozs7Ozs7OztVQUFBOztLQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFRQSxJQUFRQSxlQUFlLEdBU2FDLEtBQVUsWUFUdENE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
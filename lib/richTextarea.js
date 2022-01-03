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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IFwiLi9rZXlzXCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcblxyXG5pbXBvcnQgeyBCTFVSX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIElOUFVUX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIENIQU5HRV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICAgS0VZRE9XTl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBNT1VTRURPV05fRVZFTlRfVFlQRSxcclxuICAgICAgICAgTU9VU0VNT1ZFX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIE1PVVNFVVBfQ09OVEVYVE1FTlVfQkxVUl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xyXG5cclxuY29uc3QgZGVmZXIgPSAoZnVuYykgPT4gc2V0VGltZW91dChmdW5jLCAwKTsgLy8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dGFyZWEgZXh0ZW5kcyBFbGVtZW50IHtcclxuICBpc0FjdGl2ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgcmV0dXJuIGFjdGl2ZTtcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHJlYWRPbmx5IH0gPSBkb21FbGVtZW50O1xyXG4gICAgXHJcbiAgICByZXR1cm4gcmVhZE9ubHk7IFxyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgdmFsdWUgfSA9IGRvbUVsZW1lbnQsXHJcbiAgICAgICAgICBjb250ZW50ID0gdmFsdWU7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IFNlbGVjdGlvbi5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgcmVhZE9ubHlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudChjb250ZW50KSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgdmFsdWVcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldFN0YXJ0UG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkVuZFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEVuZFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIHNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZFBvc2l0aW9uLCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbiwgIC8vL1xyXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xyXG4gICAgICBzZWxlY3Rpb25TdGFydCxcclxuICAgICAgc2VsZWN0aW9uRW5kXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGlzTW91c2VEb3duKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IG1vdXNlRG93biB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIG1vdXNlRG93bjtcclxuICB9XHJcblxyXG4gIGhhc0NoYW5nZWQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50Q2hhbmdlZCA9IHRoaXMuaGFzQ29udGVudENoYW5nZWQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmhhc1NlbGVjdGlvbkNoYW5nZWQoKSxcclxuICAgICAgICAgIGNoYW5nZWQgPSAoY29udGVudENoYW5nZWQgfHwgc2VsZWN0aW9uQ2hhbmdlZCk7XHJcblxyXG4gICAgcmV0dXJuIGNoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNDb250ZW50Q2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IHRoaXMuZ2V0UHJldmlvdXNDb250ZW50KCksXHJcbiAgICAgICAgICBjb250ZW50RGlmZmVyZW50VG9QcmV2aW91c0NvbnRlbnQgPSAoY29udGVudCAhPT0gcHJldmlvdXNDb250ZW50KSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gY29udGVudERpZmZlcmVudFRvUHJldmlvdXNDb250ZW50OyAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNTZWxlY3Rpb25DaGFuZ2VkKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5nZXRQcmV2aW91c1NlbGVjdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRGlmZmVyZW50VG9QcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbi5pc0RpZmZlcmVudFRvKHByZXZpb3VzU2VsZWN0aW9uKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSBzZWxlY3Rpb25EaWZmZXJlbnRUb1ByZXZpb3VzU2VsZWN0aW9uOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRNb3VzZURvd24obW91c2VEb3duKTtcclxuXHJcbiAgICB3aW5kb3cub24oTU9VU0VVUF9DT05URVhUTUVOVV9CTFVSX0VWRU5UX1RZUEUsIHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpOyAvLy9cclxuXHJcbiAgICB0aGlzLm9uKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihLRVlET1dOX0VWRU5UX1RZUEUsIHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub24oU0NST0xMX0VWRU5UX1RZUEUsIHRoaXMuc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihGT0NVU19FVkVOVF9UWVBFLCB0aGlzLmZvY3VzSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vbihCTFVSX0VWRU5UX1RZUEUsIHRoaXMuYmx1ckhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRNb3VzZURvd24obW91c2VEb3duKTtcclxuXHJcbiAgICB3aW5kb3cub2ZmKE1PVVNFVVBfQ09OVEVYVE1FTlVfQkxVUl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTsgIC8vL1xyXG5cclxuICAgIHRoaXMub2ZmKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKEtFWURPV05fRVZFTlRfVFlQRSwgdGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5vZmYoSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMub2ZmKEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLm9mZihCTFVSX0VWRU5UX1RZUEUsIHRoaXMuYmx1ckhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoYmx1ckhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IEJMVVJfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBibHVySGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb2ZmQmx1cihibHVySGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGJsdXJIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGJsdXJIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBGT0NVU19FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGJsdXJIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBvZmZGb2N1cyhibHVySGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gRk9DVVNfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBibHVySGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gU0NST0xMX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBoYW5kbGVyID0gc2Nyb2xsSGFuZGxlcjsgIC8vL1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgb2ZmU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNDUk9MTF9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IHNjcm9sbEhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgaGFuZGxlciA9IGNoYW5nZUhhbmRsZXI7ICAvLy9cclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBDSEFOR0VfRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGhhbmRsZXIgPSBjaGFuZ2VIYW5kbGVyOyAgLy8vXHJcblxyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRNb3VzZURvd24obW91c2VEb3duKTtcclxuICB9O1xyXG5cclxuICBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSBmYWxzZSxcclxuICAgICAgICAgIG1vdXNlRG93biA9IHRydWUsXHJcbiAgICAgICAgICBldmVudFR5cGUgPSBDSEFOR0VfRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLnNldE1vdXNlRG93bihtb3VzZURvd24pO1xyXG5cclxuICAgIGRlZmVyKCgpID0+IHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpKTtcclxuICB9XHJcblxyXG4gIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgbW91c2VEb3duID0gdGhpcy5pc01vdXNlRG93bigpLFxyXG4gICAgICAgICAgZXZlbnRUWXBlID0gQ0hBTkdFX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgaWYgKG1vdXNlRG93bikge1xyXG4gICAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VFlwZSwgZm9yY2VkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGtleURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSBmYWxzZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IENIQU5HRV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIGRlZmVyKCgpID0+IHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlLCBmb3JjZWQpKTtcclxuICB9XHJcblxyXG4gIGlucHV0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9yY2VkID0gZmFsc2UsXHJcbiAgICAgICAgICBldmVudFR5cGUgPSBDSEFOR0VfRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNDUk9MTF9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSB0cnVlLFxyXG4gICAgICAgICAgZXZlbnRUeXBlID0gRk9DVVNfRVZFTlRfVFlQRTtcclxuXHJcbiAgICBkZWZlcigoKSA9PiB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKSk7XHJcbiAgfVxyXG5cclxuICBibHVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xyXG4gICAgY29uc3QgZm9yY2VkID0gdHJ1ZSxcclxuICAgICAgICAgIGV2ZW50VHlwZSA9IEJMVVJfRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKTtcclxuICB9XHJcblxyXG4gIGludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgZm9yY2VkKSB7XHJcbiAgICBjb25zdCBjaGFuZ2VkID0gdGhpcy5oYXNDaGFuZ2VkKCk7XHJcblxyXG4gICAgaWYgKGNoYW5nZWQgfHwgZm9yY2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGNhbGxIYW5kbGVycyhldmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xyXG5cclxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcclxuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50OiBoYW5kbGVyRWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xyXG5cclxuICAgICAgaWYgKChoYW5kbGVyICE9PSB0aGlzLmJsdXJIYW5kbGVyKSAmJiAoaGFuZGxlciAhPT0gdGhpcy5mb2N1c0hhbmRsZXIpICYmIChoYW5kbGVyICE9PSB0aGlzLnNjcm9sbEhhbmRsZXIpKSB7XHJcbiAgICAgICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzQ29udGVudCgpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBwcmV2aW91c0NvbnRlbnQgfSA9IHN0YXRlO1xyXG5cclxuICAgIHJldHVybiBwcmV2aW91c0NvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c1NlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBwcmV2aW91c1NlbGVjdGlvbiB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzU2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0TW91c2VEb3duKG1vdXNlRG93bikge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIG1vdXNlRG93blxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNDb250ZW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2UsXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSBudWxsLFxyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtb3VzZURvd24sXHJcbiAgICAgIHByZXZpb3VzQ29udGVudCxcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZSwgb25DaGFuZ2UsIG9uU2Nyb2xsLCBvbkZvY3VzLCBvbkJsdXIgfSA9IHRoaXMucHJvcGVydGllcyxcclxuICAgICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cclxuICAgICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IG9uU2Nyb2xsLCAvLy9cclxuICAgICAgICAgICAgZm9jdXNIYW5kbGVyID0gb25Gb2N1cywgLy8vXHJcbiAgICAgICAgICAgIGJsdXJIYW5kbGVyID0gb25CbHVyOyAvLy9cclxuXHJcbiAgICBjaGFuZ2VIYW5kbGVyICYmIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgdGhpcyk7XHJcbiAgICBzY3JvbGxIYW5kbGVyICYmIHRoaXMub25TY3JvbGwoc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcbiAgICBmb2N1c0hhbmRsZXIgJiYgdGhpcy5vbkZvY3VzKGZvY3VzSGFuZGxlciwgdGhpcyk7XHJcbiAgICBibHVySGFuZGxlciAmJiB0aGlzLm9uQmx1cihibHVySGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aWxsVW5tb3VudCgpIHtcclxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIG9uU2Nyb2xsLCBvbkZvY3VzLCBvbkJsdXIgfSA9IHRoaXMucHJvcGVydGllcyxcclxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXHJcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gb25TY3JvbGwsIC8vL1xyXG4gICAgICAgICAgZm9jdXNIYW5kbGVyID0gb25Gb2N1cywgLy8vXHJcbiAgICAgICAgICBibHVySGFuZGxlciA9IG9uQmx1cjsgLy8vXHJcblxyXG4gICAgY2hhbmdlSGFuZGxlciAmJiB0aGlzLm9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICAgIHNjcm9sbEhhbmRsZXIgJiYgdGhpcy5vZmZTY3JvbGwoc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcbiAgICBmb2N1c0hhbmRsZXIgJiYgdGhpcy5vZmZGb2N1cyhmb2N1c0hhbmRsZXIsIHRoaXMpO1xyXG4gICAgYmx1ckhhbmRsZXIgJiYgdGhpcy5vZmZCbHVyKGJsdXJIYW5kbGVyLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJyaWNoXCJcclxuICB9O1xyXG5cclxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXHJcbiAgICBcIm9uQ2hhbmdlXCIsXHJcbiAgICBcIm9uU2Nyb2xsXCIsXHJcbiAgICBcIm9uRm9jdXNcIixcclxuICAgIFwib25CbHVyXCIsXHJcbiAgICBcImFjdGl2ZVwiXHJcbiAgXTtcclxufVxyXG4iXSwibmFtZXMiOlsiZGVmZXIiLCJmdW5jIiwic2V0VGltZW91dCIsIlJpY2hUZXh0YXJlYSIsImlzQWN0aXZlIiwiYWN0aXZlIiwiaGFzQ2xhc3MiLCJpc1JlYWRPbmx5IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJyZWFkT25seSIsImdldENvbnRlbnQiLCJ2YWx1ZSIsImNvbnRlbnQiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb24iLCJmcm9tRE9NRWxlbWVudCIsInNldFJlYWRPbmx5IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0Q29udGVudCIsInByZXZpb3VzQ29udGVudCIsInNldFByZXZpb3VzQ29udGVudCIsInNldFNlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJnZXRTdGFydFBvc2l0aW9uIiwic2VsZWN0aW9uRW5kUG9zaXRpb24iLCJnZXRFbmRQb3NpdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwicHJldmlvdXNTZWxlY3Rpb24iLCJzZXRQcmV2aW91c1NlbGVjdGlvbiIsImlzTW91c2VEb3duIiwic3RhdGUiLCJnZXRTdGF0ZSIsIm1vdXNlRG93biIsImhhc0NoYW5nZWQiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwic2VsZWN0aW9uQ2hhbmdlZCIsImhhc1NlbGVjdGlvbkNoYW5nZWQiLCJjaGFuZ2VkIiwiZ2V0UHJldmlvdXNDb250ZW50IiwiY29udGVudERpZmZlcmVudFRvUHJldmlvdXNDb250ZW50IiwiZ2V0UHJldmlvdXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25EaWZmZXJlbnRUb1ByZXZpb3VzU2VsZWN0aW9uIiwiaXNEaWZmZXJlbnRUbyIsImFjdGl2YXRlIiwic2V0TW91c2VEb3duIiwib24iLCJtb3VzZVVwSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwia2V5RG93bkhhbmRsZXIiLCJpbnB1dEhhbmRsZXIiLCJzY3JvbGxIYW5kbGVyIiwiZm9jdXNIYW5kbGVyIiwiYmx1ckhhbmRsZXIiLCJhZGRDbGFzcyIsImRlYWN0aXZhdGUiLCJvZmYiLCJyZW1vdmVDbGFzcyIsIm9uQmx1ciIsImVsZW1lbnQiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZkJsdXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsIm9mZkZvY3VzIiwib25TY3JvbGwiLCJvZmZTY3JvbGwiLCJvbkNoYW5nZSIsImNoYW5nZUhhbmRsZXIiLCJvZmZDaGFuZ2UiLCJldmVudCIsImZvcmNlZCIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJldmVudFRZcGUiLCJjYWxsSGFuZGxlcnMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImZvckVhY2giLCJldmVudExpc3RlbmVyIiwiaGFuZGxlckVsZW1lbnQiLCJjYWxsIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50IiwicHJvcGVydGllcyIsIndpbGxVbm1vdW50IiwiaW5pdGlhbGlzZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVvQixHQUFNLENBQU4sS0FBTTs7QUFJaEIsR0FBYSxDQUFiLFVBQWE7QUFVaUIsR0FBYyxDQUFkLFdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEUsR0FBSyxDQUFDQSxLQUFLLEdBQUcsUUFBUSxDQUFQQyxJQUFJO0lBQUtDLE1BQU0sQ0FBTkEsVUFBVSxDQUFDRCxJQUFJLEVBQUUsQ0FBQztFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUUzQkUsWUFBWSxpQkFBbEIsUUFBUTtjQUFGQSxZQUFZOzhCQUFaQSxZQUFZO2FBQVpBLFlBQVk7OEJBQVpBLFlBQVk7OztpQkFBWkEsWUFBWTs7WUFDL0JDLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFRO2dCQUVyQyxNQUFNLENBQUNELE1BQU07WUFDZixDQUFDOzs7WUFFREUsR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsR0FBRyxDQUFDO2dCQUNaLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxJQUM3QkMsUUFBUSxHQUFLRixVQUFVLENBQXZCRSxRQUFRO2dCQUVoQixNQUFNLENBQUNBLFFBQVE7WUFDakIsQ0FBQzs7O1lBRURDLEdBQVUsRUFBVkEsQ0FB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
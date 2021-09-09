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
var _handler;
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
                var forced = false, mouseDown = true, eventType = _eventTypes.CHANGE_EVENT_TYPE;
                this.setMouseDown(mouseDown);
                defer((function() {
                    return this.intermediateHandler(event, element, eventType, forced);
                }).bind(this));
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
                var forced = false, eventType = _eventTypes.CHANGE_EVENT_TYPE;
                defer((function() {
                    return this.intermediateHandler(event, element, eventType, forced);
                }).bind(this));
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
                var forced = true, eventType = _eventTypes.FOCUS_EVENT_TYPE;
                defer((function() {
                    return this.intermediateHandler(event, element, eventType, forced);
                }).bind(this));
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
                var eventListeners = this.findEventListeners(eventType);
                eventListeners.forEach((function(eventListener) {
                    var handler = eventListener.handler, element = eventListener.element;
                    if (handler !== this.blurHandler && handler !== this.focusHandler && handler !== this.scrollHandler) {
                        (_handler = handler).call.apply(_handler, [
                            element
                        ].concat(_toConsumableArray(remainingArguments)));
                    }
                }).bind(this));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwid2luZG93IiwiRWxlbWVudCIsIlNlbGVjdGlvbiIsIkJMVVJfRVZFTlRfVFlQRSIsIklOUFVUX0VWRU5UX1RZUEUiLCJGT0NVU19FVkVOVF9UWVBFIiwiQ0hBTkdFX0VWRU5UX1RZUEUiLCJTQ1JPTExfRVZFTlRfVFlQRSIsIktFWURPV05fRVZFTlRfVFlQRSIsIk1PVVNFRE9XTl9FVkVOVF9UWVBFIiwiTU9VU0VNT1ZFX0VWRU5UX1RZUEUiLCJNT1VTRVVQX0NPTlRFWFRNRU5VX0JMVVJfRVZFTlRfVFlQRSIsImRlZmVyIiwiZnVuYyIsInNldFRpbWVvdXQiLCJSaWNoVGV4dGFyZWEiLCJpc0FjdGl2ZSIsImFjdGl2ZSIsImhhc0NsYXNzIiwiaXNSZWFkT25seSIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwicmVhZE9ubHkiLCJnZXRDb250ZW50IiwidmFsdWUiLCJjb250ZW50IiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0aW9uIiwiZnJvbURPTUVsZW1lbnQiLCJzZXRSZWFkT25seSIsIk9iamVjdCIsImFzc2lnbiIsInNldENvbnRlbnQiLCJwcmV2aW91c0NvbnRlbnQiLCJzZXRQcmV2aW91c0NvbnRlbnQiLCJzZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsInNlbGVjdGlvbkVuZFBvc2l0aW9uIiwiZ2V0RW5kUG9zaXRpb24iLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInByZXZpb3VzU2VsZWN0aW9uIiwic2V0UHJldmlvdXNTZWxlY3Rpb24iLCJpc01vdXNlRG93biIsInN0YXRlIiwiZ2V0U3RhdGUiLCJtb3VzZURvd24iLCJoYXNDaGFuZ2VkIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsInNlbGVjdGlvbkNoYW5nZWQiLCJoYXNTZWxlY3Rpb25DaGFuZ2VkIiwiY2hhbmdlZCIsImdldFByZXZpb3VzQ29udGVudCIsImNvbnRlbnREaWZmZXJlbnRUb1ByZXZpb3VzQ29udGVudCIsImdldFByZXZpb3VzU2VsZWN0aW9uIiwic2VsZWN0aW9uRGlmZmVyZW50VG9QcmV2aW91c1NlbGVjdGlvbiIsImlzRGlmZmVyZW50VG8iLCJhY3RpdmF0ZSIsInNldE1vdXNlRG93biIsIm9uIiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsImtleURvd25IYW5kbGVyIiwiaW5wdXRIYW5kbGVyIiwic2Nyb2xsSGFuZGxlciIsImZvY3VzSGFuZGxlciIsImJsdXJIYW5kbGVyIiwiYWRkQ2xhc3MiLCJkZWFjdGl2YXRlIiwib2ZmIiwicmVtb3ZlQ2xhc3MiLCJvbkJsdXIiLCJlbGVtZW50IiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZCbHVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJvZmZGb2N1cyIsIm9uU2Nyb2xsIiwib2ZmU2Nyb2xsIiwib25DaGFuZ2UiLCJjaGFuZ2VIYW5kbGVyIiwib2ZmQ2hhbmdlIiwiZXZlbnQiLCJmb3JjZWQiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwiZXZlbnRUWXBlIiwiY2FsbEhhbmRsZXJzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJmb3JFYWNoIiwiZXZlbnRMaXN0ZW5lciIsImNhbGwiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwid2lsbFVubW91bnQiLCJpbml0aWFsaXNlIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFUCxHQUFN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
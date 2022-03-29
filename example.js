(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // node_modules/easy/lib/offset.js
  var require_offset = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Offset = /* @__PURE__ */ function() {
      function Offset2(top, left) {
        _classCallCheck(this, Offset2);
        this.top = top;
        this.left = left;
      }
      _createClass(Offset2, [
        {
          key: "getTop",
          value: function getTop() {
            return this.top;
          }
        },
        {
          key: "getLeft",
          value: function getLeft() {
            return this.left;
          }
        }
      ]);
      return Offset2;
    }();
    exports.default = Offset;
  });

  // node_modules/easy/lib/bounds.js
  var require_bounds = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Bounds = /* @__PURE__ */ function() {
      function Bounds2(top, left, right, bottom) {
        _classCallCheck(this, Bounds2);
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
      }
      _createClass(Bounds2, [
        {
          key: "getTop",
          value: function getTop() {
            return this.top;
          }
        },
        {
          key: "getLeft",
          value: function getLeft() {
            return this.left;
          }
        },
        {
          key: "getRight",
          value: function getRight() {
            return this.right;
          }
        },
        {
          key: "getBottom",
          value: function getBottom() {
            return this.bottom;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            var width = this.right - this.left;
            return width;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            var height = this.bottom - this.top;
            return height;
          }
        },
        {
          key: "setTop",
          value: function setTop(top) {
            this.top = top;
          }
        },
        {
          key: "setLeft",
          value: function setLeft(left) {
            this.left = left;
          }
        },
        {
          key: "setRight",
          value: function setRight(right) {
            this.right = right;
          }
        },
        {
          key: "setBottom",
          value: function setBottom(bottom) {
            this.bottom = bottom;
          }
        },
        {
          key: "shift",
          value: function shift(horizontalOffset, verticalOffset) {
            this.top += verticalOffset;
            this.left += horizontalOffset;
            this.right += horizontalOffset;
            this.bottom += verticalOffset;
          }
        },
        {
          key: "isOverlappingMouse",
          value: function isOverlappingMouse(mouseTop, mouseLeft) {
            return this.top <= mouseTop && this.left <= mouseLeft && this.right > mouseLeft && this.bottom > mouseTop;
          }
        },
        {
          key: "areOverlapping",
          value: function areOverlapping(bounds) {
            return this.top < bounds.bottom && this.left < bounds.right && this.right > bounds.left && this.bottom > bounds.top;
          }
        }
      ], [
        {
          key: "fromBoundingClientRect",
          value: function fromBoundingClientRect(boundingClientRect) {
            var windowScrollTop = window.pageYOffset, windowScrollLeft = window.pageXOffset, top = boundingClientRect.top + windowScrollTop, left = boundingClientRect.left + windowScrollLeft, right = boundingClientRect.right + windowScrollLeft, bottom = boundingClientRect.bottom + windowScrollTop, bounds = new Bounds2(top, left, right, bottom);
            return bounds;
          }
        },
        {
          key: "fromTopLeftWidthAndHeight",
          value: function fromTopLeftWidthAndHeight(top, left, width, height) {
            var bottom = top + height, right = left + width, bounds = new Bounds2(top, left, right, bottom);
            return bounds;
          }
        }
      ]);
      return Bounds2;
    }();
    exports.default = Bounds;
  });

  // node_modules/easy/lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.IGNORED_PROPERTIES = exports.DEFAULT_PROPERTIES = exports.SVG_NAMESPACE_URI = exports.EMPTY_STRING = exports.ABOUT_BLANK = exports.CLASS_NAME = exports.UNDEFINED = exports.HTML_FOR = exports.WILDCARD = exports.FUNCTION = exports.DISABLED = exports.BOOLEAN = exports.DISPLAY = exports.STRING = exports.OBJECT = exports.HEIGHT = exports.BLOCK = exports.WIDTH = exports.CLASS = exports.SPACE = exports.NONE = exports.BODY = exports.FOR = void 0;
    var FOR = "for";
    exports.FOR = FOR;
    var BODY = "body";
    exports.BODY = BODY;
    var NONE = "none";
    exports.NONE = NONE;
    var SPACE = " ";
    exports.SPACE = SPACE;
    var CLASS = "class";
    exports.CLASS = CLASS;
    var WIDTH = "width";
    exports.WIDTH = WIDTH;
    var BLOCK = "block";
    exports.BLOCK = BLOCK;
    var HEIGHT = "height";
    exports.HEIGHT = HEIGHT;
    var OBJECT = "object";
    exports.OBJECT = OBJECT;
    var STRING = "string";
    exports.STRING = STRING;
    var DISPLAY = "display";
    exports.DISPLAY = DISPLAY;
    var BOOLEAN = "boolean";
    exports.BOOLEAN = BOOLEAN;
    var DISABLED = "disabled";
    exports.DISABLED = DISABLED;
    var FUNCTION = "function";
    exports.FUNCTION = FUNCTION;
    var WILDCARD = "*";
    exports.WILDCARD = WILDCARD;
    var HTML_FOR = "htmlFor";
    exports.HTML_FOR = HTML_FOR;
    var UNDEFINED = "undefined";
    exports.UNDEFINED = UNDEFINED;
    var CLASS_NAME = "className";
    exports.CLASS_NAME = CLASS_NAME;
    var ABOUT_BLANK = "about:blank";
    exports.ABOUT_BLANK = ABOUT_BLANK;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var SVG_NAMESPACE_URI = "http://www.w3.org/2000/svg";
    exports.SVG_NAMESPACE_URI = SVG_NAMESPACE_URI;
    var DEFAULT_PROPERTIES = "defaultProperties";
    exports.DEFAULT_PROPERTIES = DEFAULT_PROPERTIES;
    var IGNORED_PROPERTIES = "ignoredProperties";
    exports.IGNORED_PROPERTIES = IGNORED_PROPERTIES;
  });

  // node_modules/easy/lib/utilities/object.js
  var require_object = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.combine = combine;
    exports.prune = prune;
    var _constants = require_constants();
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      }
      return target;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function combine(target) {
      var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      target = _objectSpread({}, target);
      var names = Object.keys(source);
      names.forEach(function(name) {
        var targetValue = target[name], sourceValue = source[name], targetHasOwnProperty = target.hasOwnProperty(name);
        target[name] = targetHasOwnProperty ? combineValues(targetValue, sourceValue) : sourceValue;
      });
      return target;
    }
    function prune(target) {
      var names = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      target = _objectSpread({}, target);
      names.forEach(function(name) {
        var targetHasOwnProperty = target.hasOwnProperty(name);
        if (targetHasOwnProperty) {
          delete target[name];
        }
      });
      return target;
    }
    function combineValues(targetValue, sourceValue) {
      var targetValueBoolean = isValueBoolean(targetValue), sourceValueBoolean = isValueBoolean(sourceValue), combinedValue = targetValueBoolean && sourceValueBoolean ? targetValue : "".concat(targetValue, " ").concat(sourceValue);
      return combinedValue;
    }
    function isValueBoolean(value) {
      var valueBoolean = (typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.BOOLEAN;
      return valueBoolean;
    }
  });

  // node_modules/easy/lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.first = first;
    exports.push = push;
    exports.augment = augment;
    exports.flatten = flatten;
    exports.guarantee = guarantee;
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function first(array) {
      return array[0];
    }
    function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function augment(array1, array2, test) {
      array1 = _toConsumableArray(array1);
      array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          array1.push(element);
        }
      });
      return array1;
    }
    function flatten(array1) {
      return array1.reduce(function(array, element) {
        array = array.concat(element);
        return array;
      }, []);
    }
    function guarantee(arrayOrElement) {
      arrayOrElement = arrayOrElement || [];
      return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
      ];
    }
  });

  // node_modules/easy/lib/utilities/name.js
  var require_name = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isSVGTagName = isSVGTagName;
    exports.isSVGAttributeName = isSVGAttributeName;
    exports.isHTMLAttributeName = isHTMLAttributeName;
    function isSVGTagName(tagName) {
      return svgTagNames.includes(tagName);
    }
    function isSVGAttributeName(attributeName) {
      return svgAttributeNames.includes(attributeName);
    }
    function isHTMLAttributeName(attributeName) {
      return htmlAttributeNames.includes(attributeName);
    }
    var svgTagNames = [
      "altGlyph",
      "animate",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "animation",
      "audio",
      "circle",
      "clipPath",
      "color-profile",
      "cursor",
      "defs",
      "desc",
      "discard",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "font",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-uri",
      "foreignObject",
      "g",
      "glyph",
      "glyphRef",
      "handler",
      "hatch",
      "hatchpath",
      "hkern",
      "image",
      "line",
      "linearGradient",
      "listener",
      "marker",
      "mask",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "metadata",
      "missing-glyph",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "prefetch",
      "radialGradient",
      "rect",
      "script",
      "set",
      "solidcolor",
      "stop",
      "style",
      "svg",
      "switch",
      "symbol",
      "tbreak",
      "text",
      "textArea",
      "textPath",
      "title",
      "tref",
      "tspan",
      "unknown",
      "use",
      "video",
      "view",
      "vkern"
    ];
    var svgAttributeNames = [
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "alphabetic",
      "amplitude",
      "arabic-form",
      "ascent",
      "attributeName",
      "attributeType",
      "azimuth",
      "bandwidth",
      "baseFrequency",
      "baseProfile",
      "baseline-shift",
      "bbox",
      "begin",
      "bias",
      "by",
      "calcMode",
      "cap-height",
      "clip",
      "className",
      "clip-path",
      "clip-rule",
      "clipPathUnits",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "contentScriptType",
      "contentStyleType",
      "crossorigin",
      "cursor",
      "cx",
      "cy",
      "d",
      "defaultAction",
      "descent",
      "diffuseConstant",
      "direction",
      "display",
      "divisor",
      "dominant-baseline",
      "download",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "editable",
      "elevation",
      "enable-background",
      "end",
      "event",
      "exponent",
      "externalResourcesRequired",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterRes",
      "filterUnits",
      "flood-color",
      "flood-opacity",
      "focusHighlight",
      "focusable",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "format",
      "fr",
      "from",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "handler",
      "hanging",
      "hatchContentUnits",
      "hatchUnits",
      "height",
      "horiz-adv-x",
      "horiz-origin-x",
      "horiz-origin-y",
      "href",
      "hreflang",
      "id",
      "ideographic",
      "image-rendering",
      "in",
      "in2",
      "initialVisibility",
      "intercept",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kernelMatrix",
      "kernelUnitLength",
      "kerning",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "letter-spacing",
      "lighting-color",
      "limitingConeAngle",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "mask",
      "maskContentUnits",
      "maskUnits",
      "mathematical",
      "max",
      "media",
      "mediaCharacterEncoding",
      "mediaContentEncodings",
      "mediaSize",
      "mediaTime",
      "method",
      "min",
      "mode",
      "name",
      "nav-down",
      "nav-down-left",
      "nav-down-right",
      "nav-left",
      "nav-next",
      "nav-prev",
      "nav-right",
      "nav-up",
      "nav-up-left",
      "nav-up-right",
      "numOctaves",
      "observer",
      "offset",
      "opacity",
      "operator",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "overlay",
      "overline-position",
      "overline-thickness",
      "panose-1",
      "path",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "phase",
      "pitch",
      "playbackOrder",
      "playbackorder",
      "pointer-events",
      "points",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "propagate",
      "r",
      "radius",
      "refX",
      "refY",
      "rendering-intent",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "requiredFonts",
      "requiredFormats",
      "restart",
      "result",
      "rotate",
      "rx",
      "ry",
      "scale",
      "seed",
      "shape-rendering",
      "side",
      "slope",
      "snapshotTime",
      "spacing",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "src",
      "startOffset",
      "stdDeviation",
      "stemh",
      "stemv",
      "stitchTiles",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "string",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "style",
      "surfaceScale",
      "syncBehavior",
      "syncBehaviorDefault",
      "syncMaster",
      "syncTolerance",
      "syncToleranceDefault",
      "systemLanguage",
      "tableValues",
      "target",
      "targetX",
      "targetY",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textLength",
      "timelineBegin",
      "timelinebegin",
      "title",
      "to",
      "transform",
      "transformBehavior",
      "type",
      "u1",
      "u2",
      "underline-position",
      "underline-thickness",
      "unicode",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "values",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "viewBox",
      "viewTarget",
      "visibility",
      "width",
      "widths",
      "word-spacing",
      "writing-mode",
      "x",
      "x-height",
      "x1",
      "x2",
      "xChannelSelector",
      "y",
      "y1",
      "y2",
      "yChannelSelector",
      "z",
      "zoomAndPan"
    ];
    var htmlAttributeNames = [
      "accept",
      "acceptCharset",
      "accessKey",
      "action",
      "allow",
      "allowFullScreen",
      "allowTransparency",
      "alt",
      "async",
      "autoComplete",
      "autoFocus",
      "autoPlay",
      "capture",
      "cellPadding",
      "cellSpacing",
      "challenge",
      "charSet",
      "checked",
      "cite",
      "classID",
      "className",
      "colSpan",
      "cols",
      "content",
      "contentEditable",
      "contextMenu",
      "controls",
      "coords",
      "crossOrigin",
      "data",
      "dateTime",
      "default",
      "defer",
      "dir",
      "disabled",
      "download",
      "draggable",
      "encType",
      "form",
      "formAction",
      "formEncType",
      "formMethod",
      "formNoValidate",
      "formTarget",
      "frameBorder",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hrefLang",
      "htmlFor",
      "httpEquiv",
      "icon",
      "id",
      "inputMode",
      "integrity",
      "is",
      "keyParams",
      "keyType",
      "kind",
      "label",
      "lang",
      "list",
      "loop",
      "low",
      "manifest",
      "marginHeight",
      "marginWidth",
      "max",
      "maxLength",
      "media",
      "mediaGroup",
      "method",
      "min",
      "minLength",
      "multiple",
      "muted",
      "name",
      "noValidate",
      "nonce",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "poster",
      "preload",
      "profile",
      "radioGroup",
      "readOnly",
      "rel",
      "required",
      "reversed",
      "role",
      "rowSpan",
      "rows",
      "sandbox",
      "scope",
      "scoped",
      "scrolling",
      "seamless",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "spellCheck",
      "src",
      "srcDoc",
      "srcLang",
      "srcSet",
      "start",
      "step",
      "style",
      "summary",
      "tabIndex",
      "target",
      "title",
      "type",
      "useMap",
      "value",
      "width",
      "wmode",
      "wrap"
    ];
  });

  // node_modules/easy/lib/utilities/dom.js
  var require_dom = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.elementsFromDOMElements = elementsFromDOMElements;
    exports.ascendantDOMNodesFromDOMNode = ascendantDOMNodesFromDOMNode;
    exports.descendantDOMNodesFromDOMNode = descendantDOMNodesFromDOMNode;
    exports.filterDOMNodesBySelector = filterDOMNodesBySelector;
    exports.domNodeMatchesSelector = domNodeMatchesSelector;
    exports.filterDOMNodes = filterDOMNodes;
    var _array = require_array();
    var _constants = require_constants();
    function elementsFromDOMElements(domElements) {
      var domElementsWithElements = filterDOMNodes(domElements, function(domElement) {
        return domElement.__element__ !== void 0;
      }), elements = domElementsWithElements.map(function(domElement) {
        return domElement.__element__;
      });
      return elements;
    }
    function ascendantDOMNodesFromDOMNode(domNode, height) {
      var ascendantDOMNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (height > 0) {
        var parentDOMNode = domNode.parentElement;
        if (parentDOMNode !== null) {
          ascendantDOMNodes.push(parentDOMNode);
          height--;
          ascendantDOMNodesFromDOMNode(parentDOMNode, height, ascendantDOMNodes);
        }
      }
      return ascendantDOMNodes;
    }
    function descendantDOMNodesFromDOMNode(domNode, depth) {
      var descendantDOMNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (depth > 0) {
        var childDOMNodes = domNode.childNodes;
        (0, _array).push(descendantDOMNodes, childDOMNodes);
        depth--;
        childDOMNodes.forEach(function(childDOMNode) {
          return descendantDOMNodesFromDOMNode(childDOMNode, depth, descendantDOMNodes);
        });
      }
      return descendantDOMNodes;
    }
    function filterDOMNodesBySelector(domNodes, selector) {
      var filteredDOMNodes = filterDOMNodes(domNodes, function(domNode) {
        return domNodeMatchesSelector(domNode, selector);
      });
      return filteredDOMNodes;
    }
    function domNodeMatchesSelector(domNode, selector) {
      var domNodeType = domNode.nodeType;
      switch (domNodeType) {
        case Node.ELEMENT_NODE: {
          var domElement = domNode;
          return domElement.matches(selector);
        }
        case Node.TEXT_NODE: {
          if (selector === _constants.WILDCARD) {
            return true;
          }
        }
      }
      return false;
    }
    function filterDOMNodes(domNodes, test) {
      var filteredDOMNodes = [], domNodesLength = domNodes.length;
      for (var index = 0; index < domNodesLength; index++) {
        var domNode = domNodes[index], result = test(domNode);
        if (result) {
          filteredDOMNodes.push(domNode);
        }
      }
      return filteredDOMNodes;
    }
  });

  // node_modules/easy/lib/mixins/element.js
  var require_element = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _array = require_array();
    var _constants = require_constants();
    var _dom = require_dom();
    function getParentElement() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var parentElement = null;
      var parentDOMElement = this.domElement.parentElement;
      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          var parentDOMElements = [
            parentDOMElement
          ], parentElements = (0, _dom).elementsFromDOMElements(parentDOMElements), firstParentElement = (0, _array).first(parentElements);
          parentElement = firstParentElement || null;
        }
      }
      return parentElement;
    }
    function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var childDOMNodes = this.domElement.childNodes, childDOMElements = (0, _dom).filterDOMNodesBySelector(childDOMNodes, selector), childElements = (0, _dom).elementsFromDOMElements(childDOMElements);
      return childElements;
    }
    function getAscendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD, maximumHeight = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
      var height = maximumHeight, domNode = this.domElement, ascendantDOMNodes = (0, _dom).ascendantDOMNodesFromDOMNode(domNode, height), ascendantDOMElements = (0, _dom).filterDOMNodesBySelector(ascendantDOMNodes, selector), ascendantElements = (0, _dom).elementsFromDOMElements(ascendantDOMElements);
      return ascendantElements;
    }
    function getDescendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD, maximumDepth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
      var depth = maximumDepth, domNode = this.domElement, descendantDOMNodes = (0, _dom).descendantDOMNodesFromDOMNode(domNode, depth), descendantDOMElements = (0, _dom).filterDOMNodesBySelector(descendantDOMNodes, selector), descendantElements = (0, _dom).elementsFromDOMElements(descendantDOMElements);
      return descendantElements;
    }
    function getNextSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var nextSiblingElement = null;
      var nextSiblingDOMNode = this.domElement.nextSibling;
      if (nextSiblingDOMNode !== null && (0, _dom).domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }
      return nextSiblingElement;
    }
    function getPreviousSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var previousSiblingElement = null;
      var previousSiblingDOMNode = this.domElement.previousSibling;
      if (previousSiblingDOMNode !== null && (0, _dom).domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
        previousSiblingElement = previousSiblingDOMNode.__element__ || null;
      }
      return previousSiblingElement;
    }
    var elementMixins = {
      getParentElement,
      getChildElements,
      getAscendantElements,
      getDescendantElements,
      getNextSiblingElement,
      getPreviousSiblingElement
    };
    var _default = elementMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/textElement.js
  var require_textElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _offset = _interopRequireDefault2(require_offset());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _element = _interopRequireDefault2(require_element());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TextElement = /* @__PURE__ */ function() {
      function TextElement2(text) {
        _classCallCheck(this, TextElement2);
        this.domElement = document.createTextNode(text);
        this.domElement.__element__ = this;
      }
      _createClass(TextElement2, [
        {
          key: "getText",
          value: function getText() {
            var nodeValue = this.domElement.nodeValue, text = nodeValue;
            return text;
          }
        },
        {
          key: "setText",
          value: function setText(text) {
            var nodeValue = text;
            this.domElement.nodeValue = nodeValue;
          }
        },
        {
          key: "getOffset",
          value: function getOffset() {
            var top = this.domElement.offsetTop, left = this.domElement.offsetLeft, offset = new _offset.default(top, left);
            return offset;
          }
        },
        {
          key: "getBounds",
          value: function getBounds() {
            var boundingClientRect = this.domElement.getBoundingClientRect(), bounds = _bounds.default.fromBoundingClientRect(boundingClientRect);
            return bounds;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            var clientWidth = this.domElement.clientWidth, width = clientWidth;
            return width;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            var clientHeight = this.domElement.clientHeight, height = clientHeight;
            return height;
          }
        },
        {
          key: "prependTo",
          value: function prependTo(parentElement) {
            parentElement.prepend(this);
          }
        },
        {
          key: "appendTo",
          value: function appendTo(parentElement) {
            parentElement.append(this);
          }
        },
        {
          key: "addTo",
          value: function addTo(parentElement) {
            parentElement.add(this);
          }
        },
        {
          key: "removeFrom",
          value: function removeFrom(parentElement) {
            parentElement.remove(this);
          }
        },
        {
          key: "insertBefore",
          value: function insertBefore(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
          }
        },
        {
          key: "insertAfter",
          value: function insertAfter(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling);
          }
        },
        {
          key: "remove",
          value: function remove() {
            this.domElement.remove();
          }
        }
      ]);
      return TextElement2;
    }();
    Object.assign(TextElement.prototype, _element.default);
    var _default = TextElement;
    exports.default = _default;
  });

  // node_modules/easy/lib/utilities/elements.js
  var require_elements = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeFalseyElements = removeFalseyElements;
    exports.replaceStringsWithTextElements = replaceStringsWithTextElements;
    var _textElement = _interopRequireDefault2(require_textElement());
    var _constants = require_constants();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function removeFalseyElements(elements1) {
      elements1 = elements1.reduce(function(elements, element) {
        if (element) {
          elements.push(element);
        }
        return elements;
      }, []);
      return elements1;
    }
    function replaceStringsWithTextElements(elements) {
      elements = elements.map(function(element) {
        if ((typeof element === "undefined" ? "undefined" : _typeof(element)) === _constants.STRING) {
          var text = element, textElement = new _textElement.default(text);
          element = textElement;
        }
        return element;
      });
      return elements;
    }
  });

  // node_modules/easy/lib/mixins/jsx.js
  var require_jsx = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _object = require_object();
    var _array = require_array();
    var _name = require_name();
    var _elements = require_elements();
    var _constants = require_constants();
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function applyProperties(properties, defaultProperties, ignoredProperties) {
      var _this = this;
      this.properties = (0, _object).combine(properties, defaultProperties);
      properties = (0, _object).prune(this.properties, ignoredProperties);
      var namespaceURI = this.domElement.namespaceURI, svg = namespaceURI === _constants.SVG_NAMESPACE_URI, propertiesKeys = Object.keys(properties), names = propertiesKeys;
      names.forEach(function(name) {
        var value = properties[name], nameHandlerName = isNameHandlerName(name);
        if (nameHandlerName) {
          addHandler(_this, name, value);
        } else {
          var nameAttributeName = isNameAttributeName(name, svg);
          if (nameAttributeName) {
            addAttribute(_this, name, value);
          }
        }
      });
      var childElements = childElementsFromElement(this) || properties.childElements, context = {};
      childElements.forEach(function(childElement) {
        updateContext(childElement, context);
        _this.add(childElement);
      });
      this.context = context;
    }
    function getProperties() {
      return this.properties;
    }
    function getContext() {
      return this.context;
    }
    function assignContext(names, thenDelete) {
      var _this = this;
      var argumentsLength = arguments.length;
      if (argumentsLength === 1) {
        var firstArgument = (0, _array).first(arguments);
        if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.BOOLEAN) {
          names = Object.keys(this.context);
          thenDelete = firstArgument;
        } else {
          thenDelete = true;
        }
      }
      if (argumentsLength === 0) {
        names = Object.keys(this.context);
        thenDelete = true;
      }
      names.forEach(function(name) {
        var value = _this.context[name], propertyName = name, descriptor = {
          value
        };
        Object.defineProperty(_this, propertyName, descriptor);
        if (thenDelete) {
          delete _this.context[name];
        }
      }, []);
    }
    var jsxMixins = {
      applyProperties,
      getProperties,
      getContext,
      assignContext
    };
    var _default = jsxMixins;
    exports.default = _default;
    function childElementsFromElement(element) {
      var childElements = null;
      if (_typeof(element.childElements) === _constants.FUNCTION) {
        childElements = element.childElements.call(element);
        childElements = (0, _array).guarantee(childElements);
        childElements = (0, _elements).removeFalseyElements(childElements);
        childElements = (0, _elements).replaceStringsWithTextElements(childElements);
      }
      return childElements;
    }
    function updateContext(childElement, context) {
      var parentContext = _typeof(childElement.parentContext) === _constants.FUNCTION ? childElement.parentContext() : childElement.context;
      Object.assign(context, parentContext);
    }
    function addHandler(element, name, value) {
      var eventType = name.substr(2).toLowerCase(), handler = value;
      element.on(eventType, handler);
    }
    function addAttribute(element, name, value) {
      if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
      }
      if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
      }
      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
          element.domElement[name][key] = value[key];
        });
      } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.BOOLEAN) {
        if (value) {
          value = name;
          element.addAttribute(name, value);
        }
      } else {
        element.addAttribute(name, value);
      }
    }
    function isNameHandlerName(name) {
      return /^on/.test(name);
    }
    function isNameAttributeName(name, svg) {
      return svg ? (0, _name).isSVGAttributeName(name) : (0, _name).isHTMLAttributeName(name);
    }
  });

  // node_modules/easy/lib/eventTypes.js
  var require_eventTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.CONTEXTMENU_EVENT_TYPE = exports.START_DRAG_EVENT_TYPE = exports.STOP_DRAG_EVENT_TYPE = exports.DRAG_OVER_EVENT_TYPE = exports.MOUSEMOVE_EVENT_TYPE = exports.MOUSEDOWN_EVENT_TYPE = exports.MOUSEOVER_EVENT_TYPE = exports.DBLCLICK_EVENT_TYPE = exports.MOUSEOUT_EVENT_TYPE = exports.DRAG_OUT_EVENT_TYPE = exports.AUXCLICK_EVENT_TYPE = exports.MOUSEUP_EVENT_TYPE = exports.KEYDOWN_EVENT_TYPE = exports.SCROLL_EVENT_TYPE = exports.RESIZE_EVENT_TYPE = exports.CHANGE_EVENT_TYPE = exports.REMOVE_EVENT_TYPE = exports.KEYUP_EVENT_TYPE = exports.CLICK_EVENT_TYPE = exports.FOCUS_EVENT_TYPE = exports.INPUT_EVENT_TYPE = exports.WHEEL_EVENT_TYPE = exports.DROP_EVENT_TYPE = exports.DRAG_EVENT_TYPE = exports.BLUR_EVENT_TYPE = exports.MOVE_EVENT_TYPE = exports.OPEN_EVENT_TYPE = void 0;
    var OPEN_EVENT_TYPE = "open";
    exports.OPEN_EVENT_TYPE = OPEN_EVENT_TYPE;
    var MOVE_EVENT_TYPE = "move";
    exports.MOVE_EVENT_TYPE = MOVE_EVENT_TYPE;
    var BLUR_EVENT_TYPE = "blur";
    exports.BLUR_EVENT_TYPE = BLUR_EVENT_TYPE;
    var DRAG_EVENT_TYPE = "drag";
    exports.DRAG_EVENT_TYPE = DRAG_EVENT_TYPE;
    var DROP_EVENT_TYPE = "drop";
    exports.DROP_EVENT_TYPE = DROP_EVENT_TYPE;
    var WHEEL_EVENT_TYPE = "wheel";
    exports.WHEEL_EVENT_TYPE = WHEEL_EVENT_TYPE;
    var INPUT_EVENT_TYPE = "input";
    exports.INPUT_EVENT_TYPE = INPUT_EVENT_TYPE;
    var FOCUS_EVENT_TYPE = "focus";
    exports.FOCUS_EVENT_TYPE = FOCUS_EVENT_TYPE;
    var CLICK_EVENT_TYPE = "click";
    exports.CLICK_EVENT_TYPE = CLICK_EVENT_TYPE;
    var KEYUP_EVENT_TYPE = "keyup";
    exports.KEYUP_EVENT_TYPE = KEYUP_EVENT_TYPE;
    var REMOVE_EVENT_TYPE = "remove";
    exports.REMOVE_EVENT_TYPE = REMOVE_EVENT_TYPE;
    var CHANGE_EVENT_TYPE = "change";
    exports.CHANGE_EVENT_TYPE = CHANGE_EVENT_TYPE;
    var RESIZE_EVENT_TYPE = "resize";
    exports.RESIZE_EVENT_TYPE = RESIZE_EVENT_TYPE;
    var SCROLL_EVENT_TYPE = "scroll";
    exports.SCROLL_EVENT_TYPE = SCROLL_EVENT_TYPE;
    var KEYDOWN_EVENT_TYPE = "keydown";
    exports.KEYDOWN_EVENT_TYPE = KEYDOWN_EVENT_TYPE;
    var MOUSEUP_EVENT_TYPE = "mouseup";
    exports.MOUSEUP_EVENT_TYPE = MOUSEUP_EVENT_TYPE;
    var AUXCLICK_EVENT_TYPE = "auxclick";
    exports.AUXCLICK_EVENT_TYPE = AUXCLICK_EVENT_TYPE;
    var DRAG_OUT_EVENT_TYPE = "dragout";
    exports.DRAG_OUT_EVENT_TYPE = DRAG_OUT_EVENT_TYPE;
    var MOUSEOUT_EVENT_TYPE = "mouseout";
    exports.MOUSEOUT_EVENT_TYPE = MOUSEOUT_EVENT_TYPE;
    var DBLCLICK_EVENT_TYPE = "dblclick";
    exports.DBLCLICK_EVENT_TYPE = DBLCLICK_EVENT_TYPE;
    var MOUSEOVER_EVENT_TYPE = "mouseover";
    exports.MOUSEOVER_EVENT_TYPE = MOUSEOVER_EVENT_TYPE;
    var MOUSEDOWN_EVENT_TYPE = "mousedown";
    exports.MOUSEDOWN_EVENT_TYPE = MOUSEDOWN_EVENT_TYPE;
    var MOUSEMOVE_EVENT_TYPE = "mousemove";
    exports.MOUSEMOVE_EVENT_TYPE = MOUSEMOVE_EVENT_TYPE;
    var DRAG_OVER_EVENT_TYPE = "dragover";
    exports.DRAG_OVER_EVENT_TYPE = DRAG_OVER_EVENT_TYPE;
    var STOP_DRAG_EVENT_TYPE = "stopdrag";
    exports.STOP_DRAG_EVENT_TYPE = STOP_DRAG_EVENT_TYPE;
    var START_DRAG_EVENT_TYPE = "startdrag";
    exports.START_DRAG_EVENT_TYPE = START_DRAG_EVENT_TYPE;
    var CONTEXTMENU_EVENT_TYPE = "contextmenu";
    exports.CONTEXTMENU_EVENT_TYPE = CONTEXTMENU_EVENT_TYPE;
    var _default = {
      OPEN_EVENT_TYPE,
      MOVE_EVENT_TYPE,
      BLUR_EVENT_TYPE,
      DRAG_EVENT_TYPE,
      DROP_EVENT_TYPE,
      WHEEL_EVENT_TYPE,
      INPUT_EVENT_TYPE,
      FOCUS_EVENT_TYPE,
      CLICK_EVENT_TYPE,
      KEYUP_EVENT_TYPE,
      REMOVE_EVENT_TYPE,
      CHANGE_EVENT_TYPE,
      RESIZE_EVENT_TYPE,
      SCROLL_EVENT_TYPE,
      KEYDOWN_EVENT_TYPE,
      MOUSEUP_EVENT_TYPE,
      AUXCLICK_EVENT_TYPE,
      DRAG_OUT_EVENT_TYPE,
      MOUSEOUT_EVENT_TYPE,
      DBLCLICK_EVENT_TYPE,
      MOUSEOVER_EVENT_TYPE,
      MOUSEDOWN_EVENT_TYPE,
      MOUSEMOVE_EVENT_TYPE,
      DRAG_OVER_EVENT_TYPE,
      STOP_DRAG_EVENT_TYPE,
      START_DRAG_EVENT_TYPE,
      CONTEXTMENU_EVENT_TYPE
    };
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/key.js
  var require_key = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    function onKeyUp(keyUpHandler, element) {
      this.on(_eventTypes.KEYUP_EVENT_TYPE, keyUpHandler, element);
    }
    function offKeyUp(keyUpHandler, element) {
      this.off(_eventTypes.KEYUP_EVENT_TYPE, keyUpHandler, element);
    }
    function onKeyDown(keyDownHandler, element) {
      this.on(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownHandler, element);
    }
    function offKeyDown(keyDownHandler, element) {
      this.off(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownHandler, element);
    }
    var keyMixins = {
      onKeyUp,
      offKeyUp,
      onKeyDown,
      offKeyDown
    };
    var _default = keyMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/click.js
  var require_click = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    function onClick(clickHandler, element) {
      this.on(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
    }
    function offClick(clickHandler, element) {
      this.off(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
    }
    var clickMixins = {
      onClick,
      offClick
    };
    var _default = clickMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/state.js
  var require_state = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function getState() {
      return this.state;
    }
    function setState(state) {
      this.state = state;
    }
    function updateState(state) {
      Object.assign(this.state, state);
    }
    var stateMixins = {
      getState,
      setState,
      updateState
    };
    var _default = stateMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/contentTypes.js
  var require_contentTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TEXT_HTML_CONTENT_TYPE = void 0;
    var TEXT_HTML_CONTENT_TYPE = "text/html";
    exports.TEXT_HTML_CONTENT_TYPE = TEXT_HTML_CONTENT_TYPE;
  });

  // node_modules/easy/lib/mixins/resize.js
  var require_resize = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.onResize = onResize;
    exports.offResize = offResize;
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    var _constants = require_constants();
    var _contentTypes = require_contentTypes();
    function onResize(resizeHandler, element) {
      this.on(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
    }
    function offResize(resizeHandler, element) {
      this.off(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
    }
    function addResizeObject() {
      var _this = this;
      var resizeObject = document.createElement(_constants.OBJECT), style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;", data = _constants.ABOUT_BLANK, type = _contentTypes.TEXT_HTML_CONTENT_TYPE;
      resizeObject.setAttribute("style", style);
      resizeObject.data = data;
      resizeObject.type = type;
      this.__resizeObject__ = resizeObject;
      resizeObject.onload = function() {
        return resizeObjectLoadHandler(_this);
      };
      this.domElement.appendChild(resizeObject);
    }
    function removeResizeObject() {
      var resizeObject = this.__resizeObject__, objectWindow = resizeObject.contentDocument.defaultView;
      objectWindow.removeEventListener(_eventTypes.RESIZE_EVENT_TYPE, resizeEventListener);
      this.domElement.removeChild(resizeObject);
      delete this.__resizeObject__;
    }
    var resizeMixins = {
      onResize,
      offResize,
      addResizeObject,
      removeResizeObject
    };
    var _default = resizeMixins;
    exports.default = _default;
    function resizeObjectLoadHandler(element) {
      var resizeObject = element.__resizeObject__, resizeObjectWindow = resizeObject.contentDocument.defaultView;
      resizeObjectWindow.addEventListener(_eventTypes.RESIZE_EVENT_TYPE, function(event) {
        var resizeEventListeners = element.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE);
        resizeEventListeners.forEach(function(resizeEventListener2) {
          return resizeEventListener2(event);
        });
      });
    }
  });

  // node_modules/easy/lib/mixins/event.js
  var require_event = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    var _eventTypes = require_eventTypes();
    var _resize = require_resize();
    function on(eventTypes, handler) {
      var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
      var _this = this;
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            _this.addResizeObject();
          }
        }
        var eventListener = _this.addEventListener(eventType, handler, element);
        _this.domElement.addEventListener(eventType, eventListener);
      });
    }
    function off(eventTypes, handler) {
      var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
      var _this = this;
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        var eventListener = _this.removeEventListener(eventType, handler, element);
        _this.domElement.removeEventListener(eventType, eventListener);
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            (0, _resize).removeResizeObject(_this);
          }
        }
      });
    }
    function addEventListener(eventType, handler, element) {
      if (this.eventListeners === void 0) {
        this.eventListeners = [];
      }
      var eventListener = this.createEventListener(eventType, handler, element);
      this.eventListeners.push(eventListener);
      return eventListener;
    }
    function removeEventListener(eventType, handler, element) {
      var eventListener = this.findEventListener(eventType, handler, element), index = this.eventListeners.indexOf(eventListener), start = index, deleteCount = 1;
      this.eventListeners.splice(start, deleteCount);
      if (this.eventListeners.length === 0) {
        delete this.eventListeners;
      }
      return eventListener;
    }
    function findEventListener(eventType, handler, element) {
      var eventListener1 = this.eventListeners.find(function(eventListener) {
        if (eventListener.element === element && eventListener.handler === handler && eventListener.eventType === eventType) {
          return true;
        }
      });
      return eventListener1;
    }
    function findEventListeners(eventType) {
      var eventListeners = [];
      if (this.eventListeners !== void 0) {
        this.eventListeners.forEach(function(eventListener) {
          var found = eventListener.eventType === eventType;
          if (found) {
            eventListeners.push(eventListener);
          }
        });
      }
      return eventListeners;
    }
    function createEventListener(eventType, handler, element1) {
      var _this = this;
      var eventListener;
      var handlerElement = element1;
      eventListener = function(event) {
        var element = _this;
        handler.call(handlerElement, event, element);
      };
      Object.assign(eventListener, {
        element: element1,
        handler,
        eventType
      });
      return eventListener;
    }
    var eventMixins = {
      on,
      off,
      addEventListener,
      removeEventListener,
      createEventListener,
      findEventListener,
      findEventListeners
    };
    var _default = eventMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/mouse.js
  var require_mouse = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    function onMouseUp(mouseUpHandler, element) {
      this.on(_eventTypes.MOUSEUP_EVENT_TYPE, mouseUpHandler, element);
    }
    function offMouseUp(mouseUpHandler, element) {
      this.off(_eventTypes.MOUSEUP_EVENT_TYPE, mouseUpHandler, element);
    }
    function onMouseOut(mouseOutHandler, element) {
      this.on(_eventTypes.MOUSEOUT_EVENT_TYPE, mouseOutHandler, element);
    }
    function offMouseOut(mouseOutHandler, element) {
      this.off(_eventTypes.MOUSEOUT_EVENT_TYPE, mouseOutHandler, element);
    }
    function onMouseDown(mouseDownHandler, element) {
      this.on(_eventTypes.MOUSEDOWN_EVENT_TYPE, mouseDownHandler, element);
    }
    function offMouseDown(mouseDownHandler, element) {
      this.off(_eventTypes.MOUSEDOWN_EVENT_TYPE, mouseDownHandler, element);
    }
    function onMouseOver(mouseOverHandler, element) {
      this.on(_eventTypes.MOUSEOVER_EVENT_TYPE, mouseOverHandler, element);
    }
    function offMouseOver(mouseOverHandler, element) {
      this.off(_eventTypes.MOUSEOVER_EVENT_TYPE, mouseOverHandler, element);
    }
    function onMouseMove(mouseMoveHandler, element) {
      this.on(_eventTypes.MOUSEMOVE_EVENT_TYPE, mouseMoveHandler, element);
    }
    function offMouseMove(mouseMoveHandler, element) {
      this.off(_eventTypes.MOUSEMOVE_EVENT_TYPE, mouseMoveHandler, element);
    }
    var mouseMixins = {
      onMouseUp,
      offMouseUp,
      onMouseOut,
      offMouseOut,
      onMouseDown,
      offMouseDown,
      onMouseOver,
      offMouseOver,
      onMouseMove,
      offMouseMove
    };
    var _default = mouseMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/scroll.js
  var require_scroll = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    function onScroll(scrollHandler, element) {
      this.on(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
    }
    function offScroll(scrollHandler, element) {
      this.off(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
    }
    function getScrollTop() {
      return this.domElement.scrollTop;
    }
    function getScrollLeft() {
      return this.domElement.scrollLeft;
    }
    function setScrollTop(scrollTop) {
      this.domElement.scrollTop = scrollTop;
    }
    function setScrollLeft(scrollLeft) {
      this.domElement.scrollLeft = scrollLeft;
    }
    var scrollMixins = {
      onScroll,
      offScroll,
      getScrollTop,
      getScrollLeft,
      setScrollTop,
      setScrollLeft
    };
    var _default = scrollMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/element.js
  var require_element2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _offset = _interopRequireDefault2(require_offset());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _jsx = _interopRequireDefault2(require_jsx());
    var _key = _interopRequireDefault2(require_key());
    var _click = _interopRequireDefault2(require_click());
    var _state = _interopRequireDefault2(require_state());
    var _event = _interopRequireDefault2(require_event());
    var _mouse = _interopRequireDefault2(require_mouse());
    var _resize = _interopRequireDefault2(require_resize());
    var _scroll = _interopRequireDefault2(require_scroll());
    var _element = _interopRequireDefault2(require_element());
    var _object = require_object();
    var _name = require_name();
    var _array = require_array();
    var _constants = require_constants();
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    var Element = /* @__PURE__ */ function() {
      function Element2(selector) {
        _classCallCheck(this, Element2);
        if (selector) {
          this.domElement = document.querySelector(selector);
          this.domElement.__element__ = this;
        }
      }
      _createClass(Element2, [
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.domElement;
          }
        },
        {
          key: "getOffset",
          value: function getOffset() {
            var top = this.domElement.offsetTop, left = this.domElement.offsetLeft, offset = new _offset.default(top, left);
            return offset;
          }
        },
        {
          key: "getBounds",
          value: function getBounds() {
            var boundingClientRect = this.domElement.getBoundingClientRect(), bounds = _bounds.default.fromBoundingClientRect(boundingClientRect);
            return bounds;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            var includeBorder = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
            var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;
            return width;
          }
        },
        {
          key: "setWidth",
          value: function setWidth(width) {
            width = "".concat(width, "px");
            this.style(_constants.WIDTH, width);
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            var includeBorder = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
            var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;
            return height;
          }
        },
        {
          key: "setHeight",
          value: function setHeight(height) {
            height = "".concat(height, "px");
            this.style(_constants.HEIGHT, height);
          }
        },
        {
          key: "hasAttribute",
          value: function hasAttribute(name) {
            return this.domElement.hasAttribute(name);
          }
        },
        {
          key: "getAttribute",
          value: function getAttribute(name) {
            return this.domElement.getAttribute(name);
          }
        },
        {
          key: "setAttribute",
          value: function setAttribute(name, value) {
            this.domElement.setAttribute(name, value);
          }
        },
        {
          key: "clearAttribute",
          value: function clearAttribute(name) {
            this.domElement.removeAttribute(name);
          }
        },
        {
          key: "addAttribute",
          value: function addAttribute(name, value) {
            this.setAttribute(name, value);
          }
        },
        {
          key: "removeAttribute",
          value: function removeAttribute(name) {
            this.clearAttribute(name);
          }
        },
        {
          key: "setClass",
          value: function setClass(className) {
            this.domElement.className = className;
          }
        },
        {
          key: "addClass",
          value: function addClass(className) {
            this.domElement.classList.add(className);
          }
        },
        {
          key: "removeClass",
          value: function removeClass(className) {
            this.domElement.classList.remove(className);
          }
        },
        {
          key: "toggleClass",
          value: function toggleClass(className) {
            this.domElement.classList.toggle(className);
          }
        },
        {
          key: "hasClass",
          value: function hasClass(className) {
            return this.domElement.classList.contains(className);
          }
        },
        {
          key: "clearClasses",
          value: function clearClasses() {
            this.domElement.className = _constants.EMPTY_STRING;
          }
        },
        {
          key: "prependTo",
          value: function prependTo(parentElement) {
            parentElement.prepend(this);
          }
        },
        {
          key: "appendTo",
          value: function appendTo(parentElement) {
            parentElement.append(this);
          }
        },
        {
          key: "addTo",
          value: function addTo(parentElement) {
            parentElement.add(this);
          }
        },
        {
          key: "removeFrom",
          value: function removeFrom(parentElement) {
            parentElement.remove(this);
          }
        },
        {
          key: "insertBefore",
          value: function insertBefore(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
          }
        },
        {
          key: "insertAfter",
          value: function insertAfter(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling);
          }
        },
        {
          key: "prepend",
          value: function prepend(element) {
            var domElement = element.domElement, firstChildDOMElement = this.domElement.firstChild;
            this.domElement.insertBefore(domElement, firstChildDOMElement);
          }
        },
        {
          key: "append",
          value: function append(element) {
            var domElement = element.domElement;
            this.domElement.insertBefore(domElement, null);
          }
        },
        {
          key: "add",
          value: function add(element) {
            this.append(element);
          }
        },
        {
          key: "remove",
          value: function remove(element) {
            if (element) {
              var domElement = element.domElement;
              this.domElement.removeChild(domElement);
            } else {
              this.domElement.remove();
            }
          }
        },
        {
          key: "mount",
          value: function mount(element1) {
            var descendantElements = element1.getDescendantElements(), elements = [
              element1
            ].concat(_toConsumableArray(descendantElements));
            this.add(element1);
            elements.reverse();
            elements.forEach(function(element) {
              return element.didMount && element.didMount();
            });
          }
        },
        {
          key: "unmount",
          value: function unmount(element2) {
            var descendantElements = element2.getDescendantElements(), elements = [
              element2
            ].concat(_toConsumableArray(descendantElements));
            elements.forEach(function(element) {
              return element.willUnmount && element.willUnmount();
            });
            this.remove(element2);
          }
        },
        {
          key: "show",
          value: function show() {
            var displayStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.BLOCK;
            this.display(displayStyle);
          }
        },
        {
          key: "hide",
          value: function hide() {
            this.style(_constants.DISPLAY, _constants.NONE);
          }
        },
        {
          key: "display",
          value: function display1(display) {
            this.style(_constants.DISPLAY, display);
          }
        },
        {
          key: "enable",
          value: function enable() {
            this.clearAttribute(_constants.DISABLED);
          }
        },
        {
          key: "disable",
          value: function disable() {
            this.setAttribute(_constants.DISABLED, _constants.DISABLED);
          }
        },
        {
          key: "isEnabled",
          value: function isEnabled() {
            var disabled = this.isDisabled(), enabled = !disabled;
            return enabled;
          }
        },
        {
          key: "isDisabled",
          value: function isDisabled() {
            var disabled = this.hasAttribute(_constants.DISABLED);
            return disabled;
          }
        },
        {
          key: "isDisplayed",
          value: function isDisplayed() {
            var display = this.css(_constants.DISPLAY), displayed = display !== _constants.NONE;
            return displayed;
          }
        },
        {
          key: "isShowing",
          value: function isShowing() {
            var displayed = this.isDisplayed(), showing = displayed;
            return showing;
          }
        },
        {
          key: "isHidden",
          value: function isHidden() {
            var displayed = this.isDisplayed(), hidden = !displayed;
            return hidden;
          }
        },
        {
          key: "style",
          value: function style(name, value) {
            if (value !== void 0) {
              this.domElement.style[name] = value;
            } else {
              var style1 = this.domElement.style[name];
              return style1;
            }
          }
        },
        {
          key: "html",
          value: function html1(html) {
            if (html === void 0) {
              var innerHTML = this.domElement.innerHTML;
              html = innerHTML;
              return html;
            } else {
              var innerHTML1 = html;
              this.domElement.innerHTML = innerHTML1;
            }
          }
        },
        {
          key: "css",
          value: function css1(css) {
            if (css === void 0) {
              var computedStyle = getComputedStyle(this.domElement), css2 = {};
              for (var index = 0; index < computedStyle.length; index++) {
                var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name);
                css2[name] = value;
              }
              return css2;
            } else if ((typeof css === "undefined" ? "undefined" : _typeof(css)) === _constants.STRING) {
              var name1 = css;
              var computedStyle1 = getComputedStyle(this.domElement), value1 = computedStyle1.getPropertyValue(name1);
              css = value1;
              return css;
            } else {
              var _this = this;
              var names = Object.keys(css);
              names.forEach(function(name2) {
                var value2 = css[name2];
                _this.style(name2, value2);
              });
            }
          }
        },
        {
          key: "blur",
          value: function blur() {
            this.domElement.blur();
          }
        },
        {
          key: "focus",
          value: function focus() {
            this.domElement.focus();
          }
        },
        {
          key: "hasFocus",
          value: function hasFocus() {
            var focus = document.activeElement === this.domElement;
            return focus;
          }
        }
      ], [
        {
          key: "fromClass",
          value: function fromClass(Class, properties) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key1 = 2; _key1 < _len; _key1++) {
              remainingArguments[_key1 - 2] = arguments[_key1];
            }
            var tagName = Class.tagName, element = elementFromTagName.apply(void 0, [
              Class,
              tagName
            ].concat(_toConsumableArray(remainingArguments))), defaultProperties = defaultPropertiesFromClass(Class), ignoredProperties = ignoredPropertiesFromClass(Class);
            element.applyProperties(properties, defaultProperties, ignoredProperties);
            element.initialise && element.initialise();
            return element;
          }
        },
        {
          key: "fromTagName",
          value: function fromTagName(tagName, properties) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
              remainingArguments[_key2 - 2] = arguments[_key2];
            }
            var Class = Element2, element = elementFromTagName.apply(void 0, [
              Class,
              tagName
            ].concat(_toConsumableArray(remainingArguments))), defaultProperties = {}, ignoredProperties = [];
            element.applyProperties(properties, defaultProperties, ignoredProperties);
            element.initialise && element.initialise();
            return element;
          }
        }
      ]);
      return Element2;
    }();
    Object.assign(Element.prototype, _jsx.default);
    Object.assign(Element.prototype, _key.default);
    Object.assign(Element.prototype, _click.default);
    Object.assign(Element.prototype, _state.default);
    Object.assign(Element.prototype, _event.default);
    Object.assign(Element.prototype, _mouse.default);
    Object.assign(Element.prototype, _resize.default);
    Object.assign(Element.prototype, _scroll.default);
    Object.assign(Element.prototype, _element.default);
    var _default = Element;
    exports.default = _default;
    function elementFromTagName(Class, tagName) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key3 = 2; _key3 < _len; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }
      var _bind;
      var selector = null, element = new ((_bind = Function.prototype.bind).call.apply(_bind, [
        Class,
        null,
        selector
      ].concat(_toConsumableArray(remainingArguments))))();
      element.domElement = (0, _name).isSVGTagName(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
      element.domElement.__element__ = element;
      return element;
    }
    function defaultPropertiesFromClass(Class) {
      var defaultProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        defaultProperties = (0, _object).combine(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
      }
      var superClass = Object.getPrototypeOf(Class);
      if (superClass !== null) {
        defaultProperties = defaultPropertiesFromClass(superClass, defaultProperties);
      }
      return defaultProperties;
    }
    function ignoredPropertiesFromClass(Class) {
      var ignoredProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      if (Class.hasOwnProperty(_constants.IGNORED_PROPERTIES)) {
        ignoredProperties = (0, _array).augment(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], function(ignoredProperty) {
          return !ignoredProperties.includes(ignoredProperty);
        });
      }
      var superClass = Object.getPrototypeOf(Class);
      if (superClass !== null) {
        ignoredProperties = ignoredPropertiesFromClass(superClass, ignoredProperties);
      }
      return ignoredProperties;
    }
  });

  // node_modules/easy/lib/react.js
  var require_react = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _array = require_array();
    var _constants = require_constants();
    var _elements = require_elements();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function createElement(firstArgument, properties) {
      for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        childElements[_key - 2] = arguments[_key];
      }
      var element = null;
      if (firstArgument !== void 0) {
        childElements = sanitiseChildElements(childElements);
        properties = Object.assign({
          childElements
        }, properties);
        if (false) {
        } else if (isSubclassOf(firstArgument, _element.default)) {
          var Class = firstArgument;
          element = Class.fromClass(Class, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.STRING) {
          var tagName = firstArgument;
          element = _element.default.fromTagName(tagName, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.FUNCTION) {
          var elementFunction = firstArgument;
          element = elementFunction(properties);
        }
      }
      return element;
    }
    var React2 = {
      createElement
    };
    var _default = React2;
    exports.default = _default;
    function sanitiseChildElements(childElements) {
      childElements = (0, _array).flatten(childElements);
      childElements = (0, _elements).removeFalseyElements(childElements);
      childElements = (0, _elements).replaceStringsWithTextElements(childElements);
      return childElements;
    }
    function isSubclassOf(argument, Class) {
      var subclassOf = false;
      if (argument.name === Class.name) {
        subclassOf = true;
      } else {
        argument = Object.getPrototypeOf(argument);
        if (argument) {
          subclassOf = isSubclassOf(argument, Class);
        }
      }
      return subclassOf;
    }
  });

  // node_modules/easy/lib/element/body.js
  var require_body = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _constants = require_constants();
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
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var Body = /* @__PURE__ */ function(Element) {
      _inherits(Body2, Element);
      var _super = _createSuper(Body2);
      function Body2() {
        var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.BODY;
        _classCallCheck(this, Body2);
        return _super.call(this, selector);
      }
      return Body2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Body, "tagName", "body");
    exports.default = Body;
  });

  // node_modules/easy/lib/element/link.js
  var require_link = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
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
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var Link = /* @__PURE__ */ function(Element) {
      _inherits(Link2, Element);
      var _super = _createSuper(Link2);
      function Link2() {
        _classCallCheck(this, Link2);
        return _super.apply(this, arguments);
      }
      _createClass(Link2, [
        {
          key: "getHRef",
          value: function getHRef() {
            return this.getAttribute("href");
          }
        },
        {
          key: "setHRef",
          value: function setHRef(href) {
            return this.setAttribute("href", href);
          }
        }
      ]);
      return Link2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Link, "tagName", "a");
    exports.default = Link;
  });

  // node_modules/easy/lib/mixins/change.js
  var require_change = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    function onChange(changeHandler, element) {
      this.on(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
    }
    function offChange(changeHandler, element) {
      this.off(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
    }
    var changeMixins = {
      onChange,
      offChange
    };
    var _default = changeMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/inputElement.js
  var require_inputElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _change = _interopRequireDefault2(require_change());
    var _eventTypes = require_eventTypes();
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
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var InputElement = /* @__PURE__ */ function(Element) {
      _inherits(InputElement2, Element);
      var _super = _createSuper(InputElement2);
      function InputElement2() {
        _classCallCheck(this, InputElement2);
        return _super.apply(this, arguments);
      }
      _createClass(InputElement2, [
        {
          key: "onChange",
          value: function onChange(changeHandler, element) {
            this.on(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
          }
        },
        {
          key: "offChange",
          value: function offChange(changeHandler, element) {
            this.off(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
          }
        },
        {
          key: "onResize",
          value: function onResize(resizeHandler, element) {
          }
        },
        {
          key: "offResize",
          value: function offResize(resizeHandler, element) {
          }
        },
        {
          key: "getValue",
          value: function getValue() {
            return this.domElement.value;
          }
        },
        {
          key: "getSelectionStart",
          value: function getSelectionStart() {
            return this.domElement.selectionStart;
          }
        },
        {
          key: "getSelectionEnd",
          value: function getSelectionEnd() {
            return this.domElement.selectionEnd;
          }
        },
        {
          key: "isReadOnly",
          value: function isReadOnly() {
            return this.domElement.readOnly;
          }
        },
        {
          key: "setValue",
          value: function setValue(value) {
            this.domElement.value = value;
          }
        },
        {
          key: "setSelectionStart",
          value: function setSelectionStart(selectionStart) {
            this.domElement.selectionStart = selectionStart;
          }
        },
        {
          key: "setSelectionEnd",
          value: function setSelectionEnd(selectionEnd) {
            this.domElement.selectionEnd = selectionEnd;
          }
        },
        {
          key: "setReadOnly",
          value: function setReadOnly(readOnly) {
            this.domElement.readOnly = readOnly;
          }
        },
        {
          key: "select",
          value: function select() {
            this.domElement.select();
          }
        }
      ]);
      return InputElement2;
    }(_wrapNativeSuper(_element.default));
    Object.assign(InputElement.prototype, _change.default);
    var _default = InputElement;
    exports.default = _default;
  });

  // node_modules/easy/lib/inputElement/input.js
  var require_input = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _inputElement = _interopRequireDefault2(require_inputElement());
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
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var Input = /* @__PURE__ */ function(InputElement) {
      _inherits(Input2, InputElement);
      var _super = _createSuper(Input2);
      function Input2() {
        _classCallCheck(this, Input2);
        return _super.apply(this, arguments);
      }
      return Input2;
    }(_inputElement.default);
    _defineProperty(Input, "tagName", "input");
    exports.default = Input;
  });

  // node_modules/easy/lib/element/button.js
  var require_button = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
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
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var Button = /* @__PURE__ */ function(Element) {
      _inherits(Button2, Element);
      var _super = _createSuper(Button2);
      function Button2() {
        _classCallCheck(this, Button2);
        return _super.apply(this, arguments);
      }
      return Button2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Button, "tagName", "button");
    exports.default = Button;
  });

  // node_modules/easy/lib/element/select.js
  var require_select = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _change = _interopRequireDefault2(require_change());
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
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var Select = /* @__PURE__ */ function(Element) {
      _inherits(Select2, Element);
      var _super = _createSuper(Select2);
      function Select2() {
        _classCallCheck(this, Select2);
        return _super.apply(this, arguments);
      }
      _createClass(Select2, [
        {
          key: "onResize",
          value: function onResize(resizeHandler, element) {
          }
        },
        {
          key: "offResize",
          value: function offResize(resizeHandler, element) {
          }
        },
        {
          key: "getValue",
          value: function getValue() {
            return this.domElement.value;
          }
        },
        {
          key: "setValue",
          value: function setValue(value) {
            this.domElement.value = value;
          }
        }
      ]);
      return Select2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Select, "tagName", "select");
    Object.assign(Select.prototype, _change.default);
    var _default = Select;
    exports.default = _default;
  });

  // node_modules/easy/lib/element/checkbox.js
  var require_checkbox = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _change = _interopRequireDefault2(require_change());
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
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var Checkbox = /* @__PURE__ */ function(Element) {
      _inherits(Checkbox2, Element);
      var _super = _createSuper(Checkbox2);
      function Checkbox2() {
        _classCallCheck(this, Checkbox2);
        return _super.apply(this, arguments);
      }
      _createClass(Checkbox2, [
        {
          key: "isChecked",
          value: function isChecked() {
            return this.domElement.checked;
          }
        },
        {
          key: "check",
          value: function check() {
            var checked = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
            this.domElement.checked = checked;
          }
        }
      ]);
      return Checkbox2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Checkbox, "tagName", "input");
    _defineProperty(Checkbox, "defaultProperties", {
      type: "checkbox"
    });
    Object.assign(Checkbox.prototype, _change.default);
    var _default = Checkbox;
    exports.default = _default;
  });

  // node_modules/easy/lib/inputElement/textarea.js
  var require_textarea = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _inputElement = _interopRequireDefault2(require_inputElement());
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
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var Textarea = /* @__PURE__ */ function(InputElement) {
      _inherits(Textarea2, InputElement);
      var _super = _createSuper(Textarea2);
      function Textarea2() {
        _classCallCheck(this, Textarea2);
        return _super.apply(this, arguments);
      }
      return Textarea2;
    }(_inputElement.default);
    _defineProperty(Textarea, "tagName", "textarea");
    exports.default = Textarea;
  });

  // node_modules/easy/lib/mixins/window.js
  var require_window = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _resize = require_resize();
    var _default = {
      onResize: _resize.onResize,
      offResize: _resize.offResize
    };
    exports.default = _default;
  });

  // node_modules/easy/lib/window.js
  var require_window2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _key = _interopRequireDefault2(require_key());
    var _event = _interopRequireDefault2(require_event());
    var _mouse = _interopRequireDefault2(require_mouse());
    var _click = _interopRequireDefault2(require_click());
    var _window = _interopRequireDefault2(require_window());
    var _constants = require_constants();
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    var Window = /* @__PURE__ */ function() {
      function Window2() {
        _classCallCheck(this, Window2);
        this.domElement = window;
      }
      _createClass(Window2, [
        {
          key: "assign",
          value: function assign() {
            for (var _len = arguments.length, sources = new Array(_len), _key1 = 0; _key1 < _len; _key1++) {
              sources[_key1] = arguments[_key1];
            }
            var _Object;
            var target = this.domElement;
            (_Object = Object).assign.apply(_Object, [
              target
            ].concat(_toConsumableArray(sources)));
          }
        },
        {
          key: "addResizeObject",
          value: function addResizeObject() {
          }
        },
        {
          key: "removeResizeObject",
          value: function removeResizeObject() {
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            return this.domElement.innerWidth;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            return this.domElement.innerHeight;
          }
        },
        {
          key: "getScrollTop",
          value: function getScrollTop() {
            return this.domElement.pageYOffset;
          }
        },
        {
          key: "getScrollLeft",
          value: function getScrollLeft() {
            return this.domElement.pageXOffset;
          }
        }
      ]);
      return Window2;
    }();
    Object.assign(Window.prototype, _key.default);
    Object.assign(Window.prototype, _event.default);
    Object.assign(Window.prototype, _mouse.default);
    Object.assign(Window.prototype, _click.default);
    Object.assign(Window.prototype, _window.default);
    var _default = (typeof window === "undefined" ? "undefined" : _typeof(window)) === _constants.UNDEFINED ? void 0 : new Window();
    exports.default = _default;
  });

  // node_modules/easy/lib/buttons.js
  var require_buttons = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.MIDDLE_MOUSE_BUTTON = exports.RIGHT_MOUSE_BUTTON = exports.LEFT_MOUSE_BUTTON = void 0;
    var LEFT_MOUSE_BUTTON = 0;
    exports.LEFT_MOUSE_BUTTON = LEFT_MOUSE_BUTTON;
    var RIGHT_MOUSE_BUTTON = 2;
    exports.RIGHT_MOUSE_BUTTON = RIGHT_MOUSE_BUTTON;
    var MIDDLE_MOUSE_BUTTON = 1;
    exports.MIDDLE_MOUSE_BUTTON = MIDDLE_MOUSE_BUTTON;
    var _default = {
      LEFT_MOUSE_BUTTON,
      RIGHT_MOUSE_BUTTON,
      MIDDLE_MOUSE_BUTTON
    };
    exports.default = _default;
  });

  // node_modules/easy/lib/document.js
  var require_document = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _key = _interopRequireDefault2(require_key());
    var _click = _interopRequireDefault2(require_click());
    var _event = _interopRequireDefault2(require_event());
    var _mouse = _interopRequireDefault2(require_mouse());
    var _constants = require_constants();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var Document = function Document2() {
      _classCallCheck(this, Document2);
      this.domElement = document;
    };
    var _default = (typeof document === "undefined" ? "undefined" : _typeof(document)) === _constants.UNDEFINED ? void 0 : new Document();
    exports.default = _default;
    Object.assign(Document.prototype, _key.default);
    Object.assign(Document.prototype, _click.default);
    Object.assign(Document.prototype, _event.default);
    Object.assign(Document.prototype, _mouse.default);
  });

  // node_modules/easy/lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "React", {
      enumerable: true,
      get: function() {
        return _react.default;
      }
    });
    Object.defineProperty(exports, "Bounds", {
      enumerable: true,
      get: function() {
        return _bounds.default;
      }
    });
    Object.defineProperty(exports, "Offset", {
      enumerable: true,
      get: function() {
        return _offset.default;
      }
    });
    Object.defineProperty(exports, "Body", {
      enumerable: true,
      get: function() {
        return _body.default;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return _link.default;
      }
    });
    Object.defineProperty(exports, "Input", {
      enumerable: true,
      get: function() {
        return _input.default;
      }
    });
    Object.defineProperty(exports, "Button", {
      enumerable: true,
      get: function() {
        return _button.default;
      }
    });
    Object.defineProperty(exports, "Select", {
      enumerable: true,
      get: function() {
        return _select.default;
      }
    });
    Object.defineProperty(exports, "Element", {
      enumerable: true,
      get: function() {
        return _element.default;
      }
    });
    Object.defineProperty(exports, "Checkbox", {
      enumerable: true,
      get: function() {
        return _checkbox.default;
      }
    });
    Object.defineProperty(exports, "Textarea", {
      enumerable: true,
      get: function() {
        return _textarea.default;
      }
    });
    Object.defineProperty(exports, "TextElement", {
      enumerable: true,
      get: function() {
        return _textElement.default;
      }
    });
    Object.defineProperty(exports, "InputElement", {
      enumerable: true,
      get: function() {
        return _inputElement.default;
      }
    });
    Object.defineProperty(exports, "window", {
      enumerable: true,
      get: function() {
        return _window.default;
      }
    });
    Object.defineProperty(exports, "buttons", {
      enumerable: true,
      get: function() {
        return _buttons.default;
      }
    });
    Object.defineProperty(exports, "document", {
      enumerable: true,
      get: function() {
        return _document.default;
      }
    });
    Object.defineProperty(exports, "eventTypes", {
      enumerable: true,
      get: function() {
        return _eventTypes.default;
      }
    });
    var _react = _interopRequireDefault2(require_react());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _offset = _interopRequireDefault2(require_offset());
    var _body = _interopRequireDefault2(require_body());
    var _link = _interopRequireDefault2(require_link());
    var _input = _interopRequireDefault2(require_input());
    var _button = _interopRequireDefault2(require_button());
    var _select = _interopRequireDefault2(require_select());
    var _element = _interopRequireDefault2(require_element2());
    var _checkbox = _interopRequireDefault2(require_checkbox());
    var _textarea = _interopRequireDefault2(require_textarea());
    var _textElement = _interopRequireDefault2(require_textElement());
    var _inputElement = _interopRequireDefault2(require_inputElement());
    var _window = _interopRequireDefault2(require_window2());
    var _buttons = _interopRequireDefault2(require_buttons());
    var _document = _interopRequireDefault2(require_document());
    var _eventTypes = _interopRequireDefault2(require_eventTypes());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/example/preamble.js
  var require_preamble = __commonJS(() => {
    "use strict";
    var _easy2 = require_lib();
    _easy2.window.assign({
      React: _easy2.React
    });
  });

  // node_modules/with-style/lib/tagNames.js
  var require_tagNames = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var tagNames = [
      "a",
      "abbr",
      "address",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "svg",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr"
    ];
    var _default = tagNames;
    exports.default = _default;
  });

  // node_modules/necessary/lib/levels.js
  var require_levels = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.FATAL_LEVEL = exports.ERROR_LEVEL = exports.WARNING_LEVEL = exports.INFO_LEVEL = exports.DEBUG_LEVEL = exports.TRACE_LEVEL = void 0;
    var TRACE_LEVEL = "trace";
    exports.TRACE_LEVEL = TRACE_LEVEL;
    var DEBUG_LEVEL = "debug";
    exports.DEBUG_LEVEL = DEBUG_LEVEL;
    var INFO_LEVEL = "info";
    exports.INFO_LEVEL = INFO_LEVEL;
    var WARNING_LEVEL = "warning";
    exports.WARNING_LEVEL = WARNING_LEVEL;
    var ERROR_LEVEL = "error";
    exports.ERROR_LEVEL = ERROR_LEVEL;
    var FATAL_LEVEL = "fatal";
    exports.FATAL_LEVEL = FATAL_LEVEL;
    var _default = {
      TRACE_LEVEL,
      DEBUG_LEVEL,
      INFO_LEVEL,
      WARNING_LEVEL,
      ERROR_LEVEL,
      FATAL_LEVEL
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/methods.js
  var require_methods = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.OPTIONS_METHOD = exports.DELETE_METHOD = exports.PATCH_METHOD = exports.POST_METHOD = exports.GET_METHOD = void 0;
    var GET_METHOD = "GET";
    exports.GET_METHOD = GET_METHOD;
    var POST_METHOD = "POST";
    exports.POST_METHOD = POST_METHOD;
    var PATCH_METHOD = "PATCH";
    exports.PATCH_METHOD = PATCH_METHOD;
    var DELETE_METHOD = "DELETE";
    exports.DELETE_METHOD = DELETE_METHOD;
    var OPTIONS_METHOD = "OPTIONS";
    exports.OPTIONS_METHOD = OPTIONS_METHOD;
    var _default = {
      GET_METHOD,
      POST_METHOD,
      PATCH_METHOD,
      DELETE_METHOD,
      OPTIONS_METHOD
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/headers.js
  var require_headers = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.ACCESS_CONTROL_REQUEST_METHOD_HEADER = exports.ACCESS_CONTROL_ALLOW_HEADERS_HEADER = exports.ACCESS_CONTROL_ALLOW_METHODS_HEADER = exports.ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = exports.CONTENT_DISPOSITION_HEADER = exports.TRANSFER_ENCODING_HEADER = exports.CONTENT_LENGTH_HEADER = exports.CACHE_CONTROL_HEADER = exports.AUTHORIZATION_HEADER = exports.CONTENT_TYPE_HEADER = exports.USER_AGENT_HEADER = exports.LOCATION_HEADER = exports.ACCEPT_HEADER = exports.PRAGMA_HEADER = void 0;
    var PRAGMA_HEADER = "pragma";
    exports.PRAGMA_HEADER = PRAGMA_HEADER;
    var ACCEPT_HEADER = "accept";
    exports.ACCEPT_HEADER = ACCEPT_HEADER;
    var LOCATION_HEADER = "location";
    exports.LOCATION_HEADER = LOCATION_HEADER;
    var USER_AGENT_HEADER = "user-agent";
    exports.USER_AGENT_HEADER = USER_AGENT_HEADER;
    var CONTENT_TYPE_HEADER = "content-type";
    exports.CONTENT_TYPE_HEADER = CONTENT_TYPE_HEADER;
    var AUTHORIZATION_HEADER = "authorization";
    exports.AUTHORIZATION_HEADER = AUTHORIZATION_HEADER;
    var CACHE_CONTROL_HEADER = "cache-control";
    exports.CACHE_CONTROL_HEADER = CACHE_CONTROL_HEADER;
    var CONTENT_LENGTH_HEADER = "content-length";
    exports.CONTENT_LENGTH_HEADER = CONTENT_LENGTH_HEADER;
    var TRANSFER_ENCODING_HEADER = "transfer-encoding";
    exports.TRANSFER_ENCODING_HEADER = TRANSFER_ENCODING_HEADER;
    var CONTENT_DISPOSITION_HEADER = "content-disposition";
    exports.CONTENT_DISPOSITION_HEADER = CONTENT_DISPOSITION_HEADER;
    var ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = "access-control-allow-origin";
    exports.ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = ACCESS_CONTROL_ALLOW_ORIGIN_HEADER;
    var ACCESS_CONTROL_ALLOW_METHODS_HEADER = "access-control-allow-methods";
    exports.ACCESS_CONTROL_ALLOW_METHODS_HEADER = ACCESS_CONTROL_ALLOW_METHODS_HEADER;
    var ACCESS_CONTROL_ALLOW_HEADERS_HEADER = "access-control-allow-headers";
    exports.ACCESS_CONTROL_ALLOW_HEADERS_HEADER = ACCESS_CONTROL_ALLOW_HEADERS_HEADER;
    var ACCESS_CONTROL_REQUEST_METHOD_HEADER = "access-control-request-method";
    exports.ACCESS_CONTROL_REQUEST_METHOD_HEADER = ACCESS_CONTROL_REQUEST_METHOD_HEADER;
    var _default = {
      PRAGMA_HEADER,
      ACCEPT_HEADER,
      LOCATION_HEADER,
      USER_AGENT_HEADER,
      CONTENT_TYPE_HEADER,
      AUTHORIZATION_HEADER,
      CACHE_CONTROL_HEADER,
      CONTENT_LENGTH_HEADER,
      TRANSFER_ENCODING_HEADER,
      CONTENT_DISPOSITION_HEADER,
      ACCESS_CONTROL_ALLOW_ORIGIN_HEADER,
      ACCESS_CONTROL_ALLOW_METHODS_HEADER,
      ACCESS_CONTROL_ALLOW_HEADERS_HEADER,
      ACCESS_CONTROL_REQUEST_METHOD_HEADER
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/keyCodes.js
  var require_keyCodes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.ESCAPE_KEYCODE = exports.SHIFT_KEY_CODE = void 0;
    var SHIFT_KEY_CODE = 16;
    exports.SHIFT_KEY_CODE = SHIFT_KEY_CODE;
    var ESCAPE_KEYCODE = 27;
    exports.ESCAPE_KEYCODE = ESCAPE_KEYCODE;
    var _default = {
      SHIFT_KEY_CODE,
      ESCAPE_KEYCODE
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/encodings.js
  var require_encodings = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.BASE64_ENCODING = exports.UTF_8_ENCODING = exports.UTF8_ENCODING = void 0;
    var UTF8_ENCODING = "utf8";
    exports.UTF8_ENCODING = UTF8_ENCODING;
    var UTF_8_ENCODING = "utf-8";
    exports.UTF_8_ENCODING = UTF_8_ENCODING;
    var BASE64_ENCODING = "base64";
    exports.BASE64_ENCODING = BASE64_ENCODING;
    var _default = {
      UTF8_ENCODING,
      UTF_8_ENCODING,
      BASE64_ENCODING
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/characters.js
  var require_characters = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.EXCLAMATION_MARK_CHARACTER = exports.CARRIAGE_RETURN_CHARACTER = exports.FORWARD_SLASH_CHARACTER = exports.GREATER_THAN_CHARACTER = exports.LESS_THAN_CHARACTER = exports.AMPERSAND_CHARACTER = exports.BACKSPACE_CHARACTER = exports.NEW_LINE_CHARACTER = exports.BACKTICK_DELIMITER = exports.WILDCARD_CHARACTER = exports.CTRL_C_CHARACTER = exports.PERIOD_CHARACTER = exports.COLON_CHARACTER = exports.COMMA_CHARACTER = exports.SPACE_CHARACTER = exports.DASH_CHARACTER = exports.BAR_CHARACTER = exports.ETX_CHARACTER = void 0;
    var ETX_CHARACTER = "";
    exports.ETX_CHARACTER = ETX_CHARACTER;
    var BAR_CHARACTER = "|";
    exports.BAR_CHARACTER = BAR_CHARACTER;
    var DASH_CHARACTER = "-";
    exports.DASH_CHARACTER = DASH_CHARACTER;
    var SPACE_CHARACTER = " ";
    exports.SPACE_CHARACTER = SPACE_CHARACTER;
    var COMMA_CHARACTER = ",";
    exports.COMMA_CHARACTER = COMMA_CHARACTER;
    var COLON_CHARACTER = ":";
    exports.COLON_CHARACTER = COLON_CHARACTER;
    var PERIOD_CHARACTER = ".";
    exports.PERIOD_CHARACTER = PERIOD_CHARACTER;
    var CTRL_C_CHARACTER = "^C";
    exports.CTRL_C_CHARACTER = CTRL_C_CHARACTER;
    var WILDCARD_CHARACTER = "*";
    exports.WILDCARD_CHARACTER = WILDCARD_CHARACTER;
    var BACKTICK_DELIMITER = "`";
    exports.BACKTICK_DELIMITER = BACKTICK_DELIMITER;
    var NEW_LINE_CHARACTER = "\n";
    exports.NEW_LINE_CHARACTER = NEW_LINE_CHARACTER;
    var BACKSPACE_CHARACTER = String.fromCharCode(127);
    exports.BACKSPACE_CHARACTER = BACKSPACE_CHARACTER;
    var AMPERSAND_CHARACTER = "&";
    exports.AMPERSAND_CHARACTER = AMPERSAND_CHARACTER;
    var LESS_THAN_CHARACTER = "&lt;";
    exports.LESS_THAN_CHARACTER = LESS_THAN_CHARACTER;
    var GREATER_THAN_CHARACTER = "&gt;";
    exports.GREATER_THAN_CHARACTER = GREATER_THAN_CHARACTER;
    var FORWARD_SLASH_CHARACTER = "/";
    exports.FORWARD_SLASH_CHARACTER = FORWARD_SLASH_CHARACTER;
    var CARRIAGE_RETURN_CHARACTER = "\r";
    exports.CARRIAGE_RETURN_CHARACTER = CARRIAGE_RETURN_CHARACTER;
    var EXCLAMATION_MARK_CHARACTER = "!";
    exports.EXCLAMATION_MARK_CHARACTER = EXCLAMATION_MARK_CHARACTER;
    var _default = {
      ETX_CHARACTER,
      BAR_CHARACTER,
      DASH_CHARACTER,
      SPACE_CHARACTER,
      COMMA_CHARACTER,
      COLON_CHARACTER,
      PERIOD_CHARACTER,
      CTRL_C_CHARACTER,
      WILDCARD_CHARACTER,
      BACKTICK_DELIMITER,
      NEW_LINE_CHARACTER,
      AMPERSAND_CHARACTER,
      BACKSPACE_CHARACTER,
      LESS_THAN_CHARACTER,
      GREATER_THAN_CHARACTER,
      FORWARD_SLASH_CHARACTER,
      CARRIAGE_RETURN_CHARACTER,
      EXCLAMATION_MARK_CHARACTER
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/statusCodes.js
  var require_statusCodes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.INTERNAL_SERVER_ERROR_500_STATUS_CODE = exports.TOO_MANY_REQUESTS_429_STATUS_CODE = exports.REQUEST_TIMEOUT_408_STATUS_CODE = exports.UNAUTHORISED_401_STATUS_CODE = exports.BAD_REQUEST_400_STATUS_CODE = exports.BAD_GATEWAY_502_STATUS_CODE = exports.NO_CONTENT_204_STATUS_CODE = exports.NOT_FOUND_404_STATUS_CODE = exports.FORBIDDEN_403_STATUS_CODE = exports.SEE_OTHER_303_STATUS_CODE = exports.CREATED_201_STATUS_CODE = exports.FOUND_302_STATUS_CODE = exports.OK_200_STATUS_CODE = exports.ZERO_0_STATUS_CODE = void 0;
    var ZERO_0_STATUS_CODE = 0;
    exports.ZERO_0_STATUS_CODE = ZERO_0_STATUS_CODE;
    var OK_200_STATUS_CODE = 200;
    exports.OK_200_STATUS_CODE = OK_200_STATUS_CODE;
    var FOUND_302_STATUS_CODE = 302;
    exports.FOUND_302_STATUS_CODE = FOUND_302_STATUS_CODE;
    var CREATED_201_STATUS_CODE = 201;
    exports.CREATED_201_STATUS_CODE = CREATED_201_STATUS_CODE;
    var SEE_OTHER_303_STATUS_CODE = 303;
    exports.SEE_OTHER_303_STATUS_CODE = SEE_OTHER_303_STATUS_CODE;
    var FORBIDDEN_403_STATUS_CODE = 403;
    exports.FORBIDDEN_403_STATUS_CODE = FORBIDDEN_403_STATUS_CODE;
    var NOT_FOUND_404_STATUS_CODE = 404;
    exports.NOT_FOUND_404_STATUS_CODE = NOT_FOUND_404_STATUS_CODE;
    var NO_CONTENT_204_STATUS_CODE = 204;
    exports.NO_CONTENT_204_STATUS_CODE = NO_CONTENT_204_STATUS_CODE;
    var BAD_GATEWAY_502_STATUS_CODE = 502;
    exports.BAD_GATEWAY_502_STATUS_CODE = BAD_GATEWAY_502_STATUS_CODE;
    var BAD_REQUEST_400_STATUS_CODE = 400;
    exports.BAD_REQUEST_400_STATUS_CODE = BAD_REQUEST_400_STATUS_CODE;
    var UNAUTHORISED_401_STATUS_CODE = 401;
    exports.UNAUTHORISED_401_STATUS_CODE = UNAUTHORISED_401_STATUS_CODE;
    var REQUEST_TIMEOUT_408_STATUS_CODE = 408;
    exports.REQUEST_TIMEOUT_408_STATUS_CODE = REQUEST_TIMEOUT_408_STATUS_CODE;
    var TOO_MANY_REQUESTS_429_STATUS_CODE = 429;
    exports.TOO_MANY_REQUESTS_429_STATUS_CODE = TOO_MANY_REQUESTS_429_STATUS_CODE;
    var INTERNAL_SERVER_ERROR_500_STATUS_CODE = 500;
    exports.INTERNAL_SERVER_ERROR_500_STATUS_CODE = INTERNAL_SERVER_ERROR_500_STATUS_CODE;
    var _default = {
      ZERO_0_STATUS_CODE,
      OK_200_STATUS_CODE,
      FOUND_302_STATUS_CODE,
      CREATED_201_STATUS_CODE,
      SEE_OTHER_303_STATUS_CODE,
      FORBIDDEN_403_STATUS_CODE,
      NOT_FOUND_404_STATUS_CODE,
      NO_CONTENT_204_STATUS_CODE,
      BAD_GATEWAY_502_STATUS_CODE,
      BAD_REQUEST_400_STATUS_CODE,
      UNAUTHORISED_401_STATUS_CODE,
      REQUEST_TIMEOUT_408_STATUS_CODE,
      TOO_MANY_REQUESTS_429_STATUS_CODE,
      INTERNAL_SERVER_ERROR_500_STATUS_CODE
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/contentTypes.js
  var require_contentTypes2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE = exports.APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = exports.TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE = exports.TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE = exports.APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE = exports.APPLICATION_JSON_CONTENT_TYPE = exports.TEXT_PLAIN_CONTENT_TYPE = exports.TEXT_HTML_CONTENT_TYPE = void 0;
    var TEXT_HTML_CONTENT_TYPE = "text/html";
    exports.TEXT_HTML_CONTENT_TYPE = TEXT_HTML_CONTENT_TYPE;
    var TEXT_PLAIN_CONTENT_TYPE = "text/plain";
    exports.TEXT_PLAIN_CONTENT_TYPE = TEXT_PLAIN_CONTENT_TYPE;
    var APPLICATION_JSON_CONTENT_TYPE = "application/json";
    exports.APPLICATION_JSON_CONTENT_TYPE = APPLICATION_JSON_CONTENT_TYPE;
    var APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE = "application/x-www-form-urlencoded";
    exports.APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE = APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE;
    var TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE = "text/html; charset=utf-8";
    exports.TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE = TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;
    var TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE = "text/plain; charset=utf-8";
    exports.TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE = TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE;
    var APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = "application/json; charset=utf-8";
    exports.APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
    var APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE = "application/x-www-form-urlencoded; charset=utf-8";
    exports.APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE = APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE;
    var _default = {
      TEXT_HTML_CONTENT_TYPE,
      TEXT_PLAIN_CONTENT_TYPE,
      APPLICATION_JSON_CONTENT_TYPE,
      APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE,
      TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE,
      TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE,
      APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE,
      APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/statusMessages.js
  var require_statusMessages = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE = exports.TOO_MANY_REQUESTS_429_STATUS_MESSAGE = exports.REQUEST_TIMEOUT_408_STATUS_MESSAGE = exports.UNAUTHORISED_401_STATUS_MESSAGE = exports.BAD_REQUEST_400_STATUS_MESSAGE = exports.BAD_GATEWAY_502_STATUS_MESSAGE = exports.NO_CONTENT_204_STATUS_MESSAGE = exports.NOT_FOUND_404_STATUS_MESSAGE = exports.FORBIDDEN_403_STATUS_MESSAGE = exports.SEE_OTHER_303_STATUS_MESSAGE = exports.CREATED_201_STATUS_MESSAGE = exports.FOUND_302_STATUS_MESSAGE = exports.OK_200_STATUS_MESSAGE = exports.ZERO_0_STATUS_MESSAGE = void 0;
    var ZERO_0_STATUS_MESSAGE = "";
    exports.ZERO_0_STATUS_MESSAGE = ZERO_0_STATUS_MESSAGE;
    var OK_200_STATUS_MESSAGE = "OK";
    exports.OK_200_STATUS_MESSAGE = OK_200_STATUS_MESSAGE;
    var FOUND_302_STATUS_MESSAGE = "Found";
    exports.FOUND_302_STATUS_MESSAGE = FOUND_302_STATUS_MESSAGE;
    var CREATED_201_STATUS_MESSAGE = "Created";
    exports.CREATED_201_STATUS_MESSAGE = CREATED_201_STATUS_MESSAGE;
    var SEE_OTHER_303_STATUS_MESSAGE = "See other";
    exports.SEE_OTHER_303_STATUS_MESSAGE = SEE_OTHER_303_STATUS_MESSAGE;
    var FORBIDDEN_403_STATUS_MESSAGE = "Forbidden";
    exports.FORBIDDEN_403_STATUS_MESSAGE = FORBIDDEN_403_STATUS_MESSAGE;
    var NOT_FOUND_404_STATUS_MESSAGE = "Not found";
    exports.NOT_FOUND_404_STATUS_MESSAGE = NOT_FOUND_404_STATUS_MESSAGE;
    var NO_CONTENT_204_STATUS_MESSAGE = "No content";
    exports.NO_CONTENT_204_STATUS_MESSAGE = NO_CONTENT_204_STATUS_MESSAGE;
    var BAD_GATEWAY_502_STATUS_MESSAGE = "Bad gateway";
    exports.BAD_GATEWAY_502_STATUS_MESSAGE = BAD_GATEWAY_502_STATUS_MESSAGE;
    var BAD_REQUEST_400_STATUS_MESSAGE = "Bad request";
    exports.BAD_REQUEST_400_STATUS_MESSAGE = BAD_REQUEST_400_STATUS_MESSAGE;
    var UNAUTHORISED_401_STATUS_MESSAGE = "Unauthorised";
    exports.UNAUTHORISED_401_STATUS_MESSAGE = UNAUTHORISED_401_STATUS_MESSAGE;
    var REQUEST_TIMEOUT_408_STATUS_MESSAGE = "Request timeout";
    exports.REQUEST_TIMEOUT_408_STATUS_MESSAGE = REQUEST_TIMEOUT_408_STATUS_MESSAGE;
    var TOO_MANY_REQUESTS_429_STATUS_MESSAGE = "Too many requests";
    exports.TOO_MANY_REQUESTS_429_STATUS_MESSAGE = TOO_MANY_REQUESTS_429_STATUS_MESSAGE;
    var INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE = "Internal server error";
    exports.INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE = INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE;
    var _default = {
      ZERO_0_STATUS_MESSAGE,
      OK_200_STATUS_MESSAGE,
      FOUND_302_STATUS_MESSAGE,
      CREATED_201_STATUS_MESSAGE,
      SEE_OTHER_303_STATUS_MESSAGE,
      FORBIDDEN_403_STATUS_MESSAGE,
      NOT_FOUND_404_STATUS_MESSAGE,
      NO_CONTENT_204_STATUS_MESSAGE,
      BAD_GATEWAY_502_STATUS_MESSAGE,
      BAD_REQUEST_400_STATUS_MESSAGE,
      UNAUTHORISED_401_STATUS_MESSAGE,
      REQUEST_TIMEOUT_408_STATUS_MESSAGE,
      TOO_MANY_REQUESTS_429_STATUS_MESSAGE,
      INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.first = first;
    exports.second = second;
    exports.third = third;
    exports.fourth = fourth;
    exports.fifth = fifth;
    exports.fifthLast = fifthLast;
    exports.fourthLast = fourthLast;
    exports.thirdLast = thirdLast;
    exports.secondLast = secondLast;
    exports.firstLast = firstLast;
    exports.last = last;
    exports.head = head;
    exports.tail = tail;
    exports.back = back;
    exports.front = front;
    exports.push = push;
    exports.unshift = unshift;
    exports.concat = concat;
    exports.clear = clear;
    exports.copy = copy;
    exports.merge = merge;
    exports.splice = splice;
    exports.replace = replace;
    exports.filter = filter;
    exports.find = find;
    exports.prune = prune;
    exports.patch = patch;
    exports.augment = augment;
    exports.separate = separate;
    exports.forwardsSome = forwardsSome;
    exports.backwardsSome = backwardsSome;
    exports.forwardsEvery = forwardsEvery;
    exports.backwardsEvery = backwardsEvery;
    exports.forwardsReduce = forwardsReduce;
    exports.backwardsReduce = backwardsReduce;
    exports.forwardsForEach = forwardsForEach;
    exports.backwardsForEach = backwardsForEach;
    exports.default = void 0;
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function first(array) {
      return array[0];
    }
    function second(array) {
      return array[1];
    }
    function third(array) {
      return array[2];
    }
    function fourth(array) {
      return array[3];
    }
    function fifth(array) {
      return array[4];
    }
    function fifthLast(array) {
      return array[array.length - 5];
    }
    function fourthLast(array) {
      return array[array.length - 4];
    }
    function thirdLast(array) {
      return array[array.length - 3];
    }
    function secondLast(array) {
      return array[array.length - 2];
    }
    function firstLast(array) {
      return array[array.length - 1];
    }
    function last(array) {
      return array[array.length - 1];
    }
    function head(array) {
      return array.slice(0, 1);
    }
    function tail(array) {
      return array.slice(1);
    }
    function back(array) {
      return array.slice(array.length - 1);
    }
    function front(array) {
      return array.slice(0, array.length - 1);
    }
    function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function unshift(array1, array2) {
      Array.prototype.unshift.apply(array1, array2);
    }
    function concat(array1, elementOrArray2) {
      var array2 = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
        elementOrArray2
      ];
      push(array1, array2);
    }
    function clear(array) {
      var start = 0;
      return array.splice(start);
    }
    function copy(array1, array2) {
      var start = 0, deleteCount = array2.length;
      splice(array1, start, deleteCount, array2);
    }
    function merge(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function splice(array1, start) {
      var deleteCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity, array2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
      var args = [
        start,
        deleteCount
      ].concat(_toConsumableArray(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
      return deletedItemsArray;
    }
    function replace(array, element1, test) {
      var start;
      var found = array.some(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          start = index;
          return true;
        }
      });
      if (found) {
        var deleteCount = 1;
        array.splice(start, deleteCount, element1);
      }
      return found;
    }
    function filter(array, test) {
      var filteredElements = [];
      backwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          filteredElements.unshift(firstDeletedElement);
        }
      });
      return filteredElements;
    }
    function find(array, test) {
      var elements = [];
      forwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (passed) {
          elements.push(element);
        }
      });
      return elements;
    }
    function prune(array, test) {
      var prunedElement = void 0;
      array.some(function(element, index) {
        var passed = test(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          prunedElement = firstDeletedElement;
          return true;
        }
      });
      return prunedElement;
    }
    function patch(array, element2, test) {
      var found = array.some(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          return true;
        }
      });
      if (found) {
        array.push(element2);
      }
      return found;
    }
    function augment(array1, array2, test) {
      array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          array1.push(element);
        }
      });
    }
    function separate(array, array1, array2, test) {
      array.forEach(function(element, index) {
        var passed = test(element, index);
        passed ? array1.push(element) : array2.push(element);
      });
    }
    function forwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], result = callback(element, index);
        if (result) {
          return true;
        }
      }
      return false;
    }
    function backwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], result = callback(element, index);
        if (result) {
          return true;
        }
      }
      return false;
    }
    function forwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], result = callback(element, index);
        if (!result) {
          return false;
        }
      }
      return true;
    }
    function backwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], result = callback(element, index);
        if (!result) {
          return false;
        }
      }
      return true;
    }
    function forwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      forwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
      });
      return value;
    }
    function backwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      backwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
      });
      return value;
    }
    function forwardsForEach(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index];
        callback(element, index);
      }
    }
    function backwardsForEach(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index];
        callback(element, index);
      }
    }
    var _default = {
      first,
      second,
      third,
      fourth,
      fifth,
      fifthLast,
      fourthLast,
      thirdLast,
      secondLast,
      firstLast,
      last,
      head,
      tail,
      back,
      front,
      push,
      unshift,
      concat,
      clear,
      copy,
      merge,
      splice,
      replace,
      filter,
      find,
      prune,
      patch,
      augment,
      separate,
      forwardsSome,
      backwardsSome,
      forwardsEvery,
      backwardsEvery,
      forwardsReduce,
      backwardsReduce,
      forwardsForEach,
      backwardsForEach
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/constants.js
  var require_constants2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EMPTY_STRING = exports.ENVIRONMENT = exports.DEFAULT = exports.BOOLEAN = exports.NUMBER = exports.STRING = exports.ERROR = exports.DATA = void 0;
    var DATA = "data";
    exports.DATA = DATA;
    var ERROR = "error";
    exports.ERROR = ERROR;
    var STRING = "string";
    exports.STRING = STRING;
    var NUMBER = "number";
    exports.NUMBER = NUMBER;
    var BOOLEAN = "boolean";
    exports.BOOLEAN = BOOLEAN;
    var DEFAULT = "default";
    exports.DEFAULT = DEFAULT;
    var ENVIRONMENT = "ENVIRONMENT";
    exports.ENVIRONMENT = ENVIRONMENT;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
  });

  // node_modules/necessary/lib/utilities/http.js
  var require_http = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.overwrite = overwrite;
    exports.underwrite = underwrite;
    exports.portFromHost = portFromHost;
    exports.secureFromHost = secureFromHost;
    exports.hostnameFromHost = hostnameFromHost;
    exports.queryStringFromQuery = queryStringFromQuery;
    exports.urlFromHostURIAndQuery = urlFromHostURIAndQuery;
    exports.default = void 0;
    var _array = require_array2();
    var _constants = require_constants2();
    var _characters = require_characters();
    function overwrite(headers, name, value) {
      var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName1 = existingNames.find(function(existingName) {
        var existingLowerCaseName = existingName.toLowerCase();
        if (existingLowerCaseName === lowerCaseName) {
          return true;
        }
      }) || null;
      if (existingName1 !== null) {
        headers[existingName1] = value;
      }
    }
    function underwrite(headers, name, value) {
      var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName2 = existingNames.find(function(existingName) {
        var existingLowerCaseName = existingName.toLowerCase();
        if (existingLowerCaseName === lowerCaseName) {
          return true;
        }
      }) || null;
      if (existingName2 === null) {
        headers[name] = value;
      }
    }
    function portFromHost(host) {
      var port;
      var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array).second(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
      if (index === -1) {
        var secure = secureFromHost(host);
        port = secure ? 443 : 80;
      } else {
        var start = index + 1, portString = secondMatch.substring(start);
        port = Number(portString);
      }
      return port;
    }
    function secureFromHost(host) {
      var secure = /^https:\/\//.test(host);
      return secure;
    }
    function hostnameFromHost(host) {
      var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array).second(matches), hostname = secondMatch;
      return hostname;
    }
    function queryStringFromQuery(query) {
      var names = Object.keys(query), namesLength = names.length, lastIndex = namesLength - 1, queryString1 = names.reduce(function(queryString, name, index) {
        var value = query[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString;
      }, _constants.EMPTY_STRING);
      return queryString1;
    }
    function urlFromHostURIAndQuery(host, uri, query) {
      var queryString = queryStringFromQuery(query), url = queryString === _constants.EMPTY_STRING ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
      return url;
    }
    var _default = {
      overwrite,
      underwrite,
      portFromHost,
      secureFromHost,
      hostnameFromHost,
      queryStringFromQuery,
      urlFromHostURIAndQuery
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.get = get;
    exports.post = post;
    exports.request = request;
    exports.default = void 0;
    var _methods = require_methods();
    var _contentTypes = require_contentTypes2();
    var _headers = require_headers();
    var _http = require_http();
    function get(host, uri, query, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
      underwriteAcceptHeader(headers, accept);
      request(host, uri, query, method, headers, content, callback);
    }
    function post(host, uri, query, headers, content, callback) {
      if (callback === void 0) {
        callback = content;
        content = headers;
        headers = {};
      }
      var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      underwriteAcceptHeader(headers, accept);
      underwriteContentTypeHeader(headers, contentType);
      request(host, uri, query, method, headers, content, callback);
    }
    function request(host, uri, query, method, headers, content1, callback) {
      var url = (0, _http).urlFromHostURIAndQuery(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = content1, jsonString = JSON.stringify(json);
        content1 = jsonString;
      }
      xmlHttpRequest.onreadystatechange = function() {
        var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, response = xmlHttpRequest.response, statusCode = status;
        if (readyState == 4) {
          var content = response;
          if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
            try {
              var jsonString2 = content, json2 = JSON.parse(jsonString2);
              content = json2;
            } catch (error) {
              content = null;
            }
          }
          callback(content, statusCode);
        }
      };
      xmlHttpRequest.open(method, url);
      if (accept !== null) {
        xmlHttpRequest.setRequestHeader(_headers.ACCEPT_HEADER, accept);
      }
      if (contentType !== null) {
        xmlHttpRequest.setRequestHeader(_headers.CONTENT_TYPE_HEADER, contentType);
      }
      content1 !== null ? xmlHttpRequest.send(content1) : xmlHttpRequest.send();
    }
    var _default = {
      get,
      post,
      request
    };
    exports.default = _default;
    function underwriteAcceptHeader(headers, accept) {
      var name = _headers.ACCEPT_HEADER, value = accept;
      (0, _http).underwrite(headers, name, value);
    }
    function underwriteContentTypeHeader(headers, contentTYpe) {
      var name = _headers.CONTENT_TYPE_HEADER, value = contentTYpe;
      (0, _http).underwrite(headers, name, value);
    }
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isPathName = isPathName;
    exports.isPathTopmostName = isPathTopmostName;
    exports.isPathRelativePath = isPathRelativePath;
    exports.isPathAbsolutePath = isPathAbsolutePath;
    exports.isTopmostNameInAbsolutePath = isTopmostNameInAbsolutePath;
    exports.combinePaths = combinePaths;
    exports.concatenatePaths = concatenatePaths;
    exports.bottommostNameFromPath = bottommostNameFromPath;
    exports.topmostDirectoryPathFromPath = topmostDirectoryPathFromPath;
    exports.topmostDirectoryNameFromPath = topmostDirectoryNameFromPath;
    exports.pathWithoutBottommostNameFromPath = pathWithoutBottommostNameFromPath;
    exports.pathWithoutTopmostDirectoryNameFromPath = pathWithoutTopmostDirectoryNameFromPath;
    exports.default = void 0;
    var _constants = require_constants2();
    var _array = require_array2();
    function isPathName(path) {
      path = path.replace(/^\//, _constants.EMPTY_STRING).replace(/\/$/, _constants.EMPTY_STRING);
      var pathName = /\//.test(path) === false;
      return pathName;
    }
    function isPathTopmostName(path) {
      var pathName = isPathName(path), pathAbsolutePath = isPathAbsolutePath(path), pathTopmostName = pathName && pathAbsolutePath;
      return pathTopmostName;
    }
    function isPathRelativePath(path) {
      var pathRelativePath = !/^\//.test(path);
      return pathRelativePath;
    }
    function isPathAbsolutePath(path) {
      var pathAbsolutePath = /^\//.test(path);
      return pathAbsolutePath;
    }
    function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
      var regExp = new RegExp("^".concat(topmostName, "(?:\\/.+)?$")), topmostNameInAbsolutePath = regExp.test(absolutePath);
      return topmostNameInAbsolutePath;
    }
    function combinePaths(path, relativePath) {
      var combinedPath = null;
      var pathNames = path.split(/\//), relativePathNames = relativePath.split(/\//);
      var lastPathName, firstRelativePathName = (0, _array).first(relativePathNames);
      if (firstRelativePathName === ".") {
        relativePathNames.shift();
      }
      firstRelativePathName = (0, _array).first(relativePathNames);
      lastPathName = (0, _array).last(pathNames);
      while (firstRelativePathName === ".." && lastPathName !== void 0) {
        relativePathNames.shift();
        pathNames.pop();
        firstRelativePathName = (0, _array).first(relativePathNames);
        lastPathName = (0, _array).last(pathNames);
      }
      if (lastPathName !== void 0) {
        var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
        combinedPath = combinedPathNames.join("/");
      }
      return combinedPath;
    }
    function concatenatePaths(path, relativePath) {
      path = path.replace(/\/$/, _constants.EMPTY_STRING);
      var concatenatedPath = "".concat(path, "/").concat(relativePath);
      return concatenatedPath;
    }
    function bottommostNameFromPath(path) {
      var bottommostName = null;
      var matches = path.match(/^.*\/([^\/]+\/?)$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        bottommostName = secondMatch;
      }
      return bottommostName;
    }
    function topmostDirectoryPathFromPath(path) {
      var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array).second(matches), topmostDirectoryPath = secondMatch;
      return topmostDirectoryPath;
    }
    function topmostDirectoryNameFromPath(path) {
      var topmostDirectoryName = null;
      var matches = path.match(/^([^\/]+)\/.+$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        topmostDirectoryName = secondMatch;
      }
      return topmostDirectoryName;
    }
    function pathWithoutBottommostNameFromPath(path) {
      var pathWithoutBottommostName = null;
      var matches = path.match(/^(.*)\/[^\/]+\/?$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        pathWithoutBottommostName = secondMatch;
      }
      return pathWithoutBottommostName;
    }
    function pathWithoutTopmostDirectoryNameFromPath(path) {
      var pathWithoutTopmostDirectoryName = null;
      var matches = path.match(/^[^\/]+\/(.+)$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        pathWithoutTopmostDirectoryName = secondMatch;
      }
      return pathWithoutTopmostDirectoryName;
    }
    var _default = {
      isPathName,
      isPathTopmostName,
      isPathRelativePath,
      isPathAbsolutePath,
      isTopmostNameInAbsolutePath,
      combinePaths,
      concatenatePaths,
      bottommostNameFromPath,
      topmostDirectoryPathFromPath,
      topmostDirectoryNameFromPath,
      pathWithoutBottommostNameFromPath,
      pathWithoutTopmostDirectoryNameFromPath
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.whilst = whilst;
    exports.forEach = forEach;
    exports.sequence = sequence;
    exports.eventually = eventually;
    exports.repeatedly = repeatedly;
    exports.forwardsForEach = forwardsForEach;
    exports.backwardsForEach = backwardsForEach;
    exports.default = void 0;
    function whilst(operation, done, context) {
      var count = -1;
      function next() {
        count++;
        var index = count, terminate = operation(next, done, context, index);
        if (terminate) {
          done();
        }
      }
      next();
    }
    function forEach(array, operation, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
    function sequence(operations, done, context) {
      var length = operations.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, operation = operations[index];
          operation(next, done, context, index);
        }
      }
      next();
    }
    function eventually(operations, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var length = operations.length;
      var count = 0;
      operations.forEach(function(operation, index) {
        operation(next, done, context, index);
      });
    }
    function repeatedly(operation, length, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var count = 0;
      for (var index = 0; index < length; index++) {
        operation(next, done, context, index);
      }
    }
    function forwardsForEach(array, operation, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
    function backwardsForEach(array, operation, done, context) {
      var length = array.length;
      var count = length;
      function next() {
        count--;
        var terminate = count === -1;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
    var _default = {
      whilst,
      forEach,
      sequence,
      eventually,
      repeatedly,
      forwardsForEach,
      backwardsForEach
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "levels", {
      enumerable: true,
      get: function() {
        return _levels.default;
      }
    });
    Object.defineProperty(exports, "methods", {
      enumerable: true,
      get: function() {
        return _methods.default;
      }
    });
    Object.defineProperty(exports, "headers", {
      enumerable: true,
      get: function() {
        return _headers.default;
      }
    });
    Object.defineProperty(exports, "keyCodes", {
      enumerable: true,
      get: function() {
        return _keyCodes.default;
      }
    });
    Object.defineProperty(exports, "encodings", {
      enumerable: true,
      get: function() {
        return _encodings.default;
      }
    });
    Object.defineProperty(exports, "characters", {
      enumerable: true,
      get: function() {
        return _characters.default;
      }
    });
    Object.defineProperty(exports, "statusCodes", {
      enumerable: true,
      get: function() {
        return _statusCodes.default;
      }
    });
    Object.defineProperty(exports, "contentTypes", {
      enumerable: true,
      get: function() {
        return _contentTypes.default;
      }
    });
    Object.defineProperty(exports, "statusMessages", {
      enumerable: true,
      get: function() {
        return _statusMessages.default;
      }
    });
    Object.defineProperty(exports, "ajaxUtilities", {
      enumerable: true,
      get: function() {
        return _ajax.default;
      }
    });
    Object.defineProperty(exports, "pathUtilities", {
      enumerable: true,
      get: function() {
        return _path.default;
      }
    });
    Object.defineProperty(exports, "httpUtilities", {
      enumerable: true,
      get: function() {
        return _http.default;
      }
    });
    Object.defineProperty(exports, "arrayUtilities", {
      enumerable: true,
      get: function() {
        return _array.default;
      }
    });
    Object.defineProperty(exports, "asynchronousUtilities", {
      enumerable: true,
      get: function() {
        return _asynchronous.default;
      }
    });
    var _levels = _interopRequireDefault2(require_levels());
    var _methods = _interopRequireDefault2(require_methods());
    var _headers = _interopRequireDefault2(require_headers());
    var _keyCodes = _interopRequireDefault2(require_keyCodes());
    var _encodings = _interopRequireDefault2(require_encodings());
    var _characters = _interopRequireDefault2(require_characters());
    var _statusCodes = _interopRequireDefault2(require_statusCodes());
    var _contentTypes = _interopRequireDefault2(require_contentTypes2());
    var _statusMessages = _interopRequireDefault2(require_statusMessages());
    var _ajax = _interopRequireDefault2(require_ajax());
    var _path = _interopRequireDefault2(require_path());
    var _http = _interopRequireDefault2(require_http());
    var _array = _interopRequireDefault2(require_array2());
    var _asynchronous = _interopRequireDefault2(require_asynchronous());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // node_modules/occam-lexers/lib/utilities/content.js
  var require_content = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.sanitiseContent = sanitiseContent;
    var _necessary = require_browser();
    var LESS_THAN_CHARACTER = _necessary.characters.LESS_THAN_CHARACTER;
    var AMPERSAND_CHARACTER = _necessary.characters.AMPERSAND_CHARACTER;
    var GREATER_THAN_CHARACTER = _necessary.characters.GREATER_THAN_CHARACTER;
    function sanitiseContent(content) {
      var sanitisedContent = content.replace(/&/, AMPERSAND_CHARACTER).replace(/</, LESS_THAN_CHARACTER).replace(/>/, GREATER_THAN_CHARACTER);
      return sanitisedContent;
    }
  });

  // node_modules/occam-lexers/lib/types.js
  var require_types = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.middleOfMultiLineCommentType = exports.startOfMultiLineCommentType = exports.endOfMultiLineCommentType = exports.regularExpressionType = exports.singleLineCommentType = exports.endOfLineCommentType = exports.stringLiteralType = exports.whitespaceType = exports.endOfLineType = exports.commentType = exports.nameType = exports.typeType = void 0;
    var typeType = "type";
    exports.typeType = typeType;
    var nameType = "name";
    exports.nameType = nameType;
    var commentType = "comment";
    exports.commentType = commentType;
    var endOfLineType = "end-of-line";
    exports.endOfLineType = endOfLineType;
    var whitespaceType = "whitespace";
    exports.whitespaceType = whitespaceType;
    var stringLiteralType = "string-literal";
    exports.stringLiteralType = stringLiteralType;
    var endOfLineCommentType = "".concat(endOfLineType, " ").concat(commentType);
    exports.endOfLineCommentType = endOfLineCommentType;
    var singleLineCommentType = "single-line ".concat(commentType);
    exports.singleLineCommentType = singleLineCommentType;
    var regularExpressionType = "regular-expression";
    exports.regularExpressionType = regularExpressionType;
    var endOfMultiLineCommentType = "end-of-multi-line ".concat(commentType);
    exports.endOfMultiLineCommentType = endOfMultiLineCommentType;
    var startOfMultiLineCommentType = "start-of-multi-line ".concat(commentType);
    exports.startOfMultiLineCommentType = startOfMultiLineCommentType;
    var middleOfMultiLineCommentType = "middle-of-multi-line ".concat(commentType);
    exports.middleOfMultiLineCommentType = middleOfMultiLineCommentType;
    var _default = {
      typeType,
      nameType,
      commentType,
      endOfLineType,
      whitespaceType,
      stringLiteralType,
      endOfLineCommentType,
      singleLineCommentType,
      regularExpressionType,
      endOfMultiLineCommentType,
      startOfMultiLineCommentType,
      middleOfMultiLineCommentType
    };
    exports.default = _default;
  });

  // node_modules/occam-lexers/lib/token.js
  var require_token = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _content = require_content();
    var _types = require_types();
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    var first = _necessary.arrayUtilities.first;
    var Token = /* @__PURE__ */ function() {
      function Token2(type, content, innerHTML, significant) {
        _classCallCheck(this, Token2);
        this.type = type;
        this.content = content;
        this.innerHTML = innerHTML;
        this.significant = significant;
      }
      _createClass(Token2, [
        {
          key: "getType",
          value: function getType() {
            return this.type;
          }
        },
        {
          key: "getContent",
          value: function getContent() {
            return this.content;
          }
        },
        {
          key: "getInnerHTML",
          value: function getInnerHTML() {
            return this.innerHTML;
          }
        },
        {
          key: "getContentLength",
          value: function getContentLength() {
            var contentLength = this.content.length;
            return contentLength;
          }
        },
        {
          key: "isSignificant",
          value: function isSignificant() {
            return this.significant;
          }
        },
        {
          key: "isCommentToken",
          value: function isCommentToken() {
            var typeIncludesCommentType = this.type.includes(_types.commentType), commentToken = typeIncludesCommentType;
            return commentToken;
          }
        },
        {
          key: "isEndOfLineToken",
          value: function isEndOfLineToken() {
            var typeEndOfLineType = this.type.includes(_types.endOfLineType), endOfLineToken = typeEndOfLineType;
            return endOfLineToken;
          }
        },
        {
          key: "isWhitespaceToken",
          value: function isWhitespaceToken() {
            var typeWhitespaceType = this.type === _types.whitespaceType, whitespaceToken = typeWhitespaceType;
            return whitespaceToken;
          }
        },
        {
          key: "isEqualTo",
          value: function isEqualTo(token) {
            var equalToToken = this === token;
            return equalToToken;
          }
        },
        {
          key: "match",
          value: function match(token) {
            var type = token.getType(), content = token.getContent(), significant = token.isSignificant(), matches = this.type === type && this.content === content && this.significant === significant;
            return matches;
          }
        },
        {
          key: "asHTML",
          value: function asHTML() {
            var className = this.type, html = '<span class="'.concat(className, '">').concat(this.innerHTML, "</span>");
            return html;
          }
        },
        {
          key: "clone",
          value: function clone(Class, startPosition, endPosition, significant) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
              remainingArguments[_key - 4] = arguments[_key];
            }
            var token = null;
            if (startPosition !== endPosition) {
              var content = this.getContent();
              content = content.substring(startPosition, endPosition);
              var type = this.getType(), sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent;
              token = _construct(Class, [
                type,
                content,
                innerHTML,
                significant
              ].concat(_toConsumableArray(remainingArguments)));
            }
            return token;
          }
        }
      ], [
        {
          key: "match",
          value: function match(Class, content, significant) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
              remainingArguments[_key - 3] = arguments[_key];
            }
            var token = null;
            var regularExpression = Class.regularExpression, matches = content.match(regularExpression);
            if (matches !== null) {
              var index = matches.index;
              if (index === 0) {
                var firstMatch = first(matches);
                content = firstMatch;
                var contentLength = content.length;
                if (contentLength > 0) {
                  var type = Class.type, sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent;
                  token = _construct(Class, [
                    type,
                    content,
                    innerHTML,
                    significant
                  ].concat(_toConsumableArray(remainingArguments)));
                }
              }
            }
            return token;
          }
        },
        {
          key: "fromContent",
          value: function fromContent(Class, content, significant) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
              remainingArguments[_key - 3] = arguments[_key];
            }
            var type = Class.type, sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent, token = _construct(Class, [
              type,
              content,
              innerHTML,
              significant
            ].concat(_toConsumableArray(remainingArguments)));
            return token;
          }
        },
        {
          key: "fromContentAndType",
          value: function fromContentAndType(Class, content, type, significant) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
              remainingArguments[_key - 4] = arguments[_key];
            }
            var sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent, token = _construct(Class, [
              type,
              content,
              innerHTML,
              significant
            ].concat(_toConsumableArray(remainingArguments)));
            return token;
          }
        }
      ]);
      return Token2;
    }();
    exports.default = Token;
  });

  // node_modules/occam-lexers/lib/token/significant.js
  var require_significant = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _token = _interopRequireDefault2(require_token());
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
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
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var significant = true;
    var SignificantToken = /* @__PURE__ */ function(Token) {
      _inherits(SignificantToken2, Token);
      var _super = _createSuper(SignificantToken2);
      function SignificantToken2() {
        _classCallCheck(this, SignificantToken2);
        return _super.apply(this, arguments);
      }
      _createClass(SignificantToken2, [
        {
          key: "clone",
          value: function clone(Class, startPosition, endPosition) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
              remainingArguments[_key - 3] = arguments[_key];
            }
            var _instance;
            if (endPosition === void 0) {
              endPosition = startPosition;
              startPosition = Class;
              Class = SignificantToken2;
            }
            var significantToken = (_instance = _get(_getPrototypeOf(SignificantToken2.prototype), "clone", this)).call.apply(_instance, [
              this,
              Class,
              startPosition,
              endPosition,
              significant
            ].concat(_toConsumableArray(remainingArguments)));
            return significantToken;
          }
        }
      ], [
        {
          key: "match",
          value: function match(Class, content) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              remainingArguments[_key - 2] = arguments[_key];
            }
            var _Token;
            if (content === void 0) {
              content = Class;
              Class = SignificantToken2;
            }
            var significantToken = (_Token = _token.default).match.apply(_Token, [
              Class,
              content,
              significant
            ].concat(_toConsumableArray(remainingArguments)));
            return significantToken;
          }
        },
        {
          key: "fromContent",
          value: function fromContent(Class, content) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              remainingArguments[_key - 2] = arguments[_key];
            }
            var _Token;
            if (content === void 0) {
              content = Class;
              Class = SignificantToken2;
            }
            var significantToken = (_Token = _token.default).fromContent.apply(_Token, [
              Class,
              content,
              significant
            ].concat(_toConsumableArray(remainingArguments)));
            return significantToken;
          }
        },
        {
          key: "fromContentAndType",
          value: function fromContentAndType(Class, content, type) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
              remainingArguments[_key - 3] = arguments[_key];
            }
            var _Token;
            if (type === void 0) {
              type = content;
              content = Class;
              Class = SignificantToken2;
            }
            var significantToken = (_Token = _token.default).fromContentAndType.apply(_Token, [
              Class,
              content,
              type,
              significant
            ].concat(_toConsumableArray(remainingArguments)));
            return significantToken;
          }
        }
      ]);
      return SignificantToken2;
    }(_token.default);
    exports.default = SignificantToken;
  });

  // node_modules/occam-lexers/lib/constants.js
  var require_constants3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EMPTY_STRING = exports.U = void 0;
    var U = "u";
    exports.U = U;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
  });

  // node_modules/occam-lexers/lib/rule.js
  var require_rule = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _significant = _interopRequireDefault2(require_significant());
    var _constants = require_constants3();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var first = _necessary.arrayUtilities.first;
    var Rule = /* @__PURE__ */ function() {
      function Rule2(type, regularExpression) {
        _classCallCheck(this, Rule2);
        this.type = type;
        this.regularExpression = regularExpression;
      }
      _createClass(Rule2, [
        {
          key: "getType",
          value: function getType() {
            return this.type;
          }
        },
        {
          key: "getRegularExpression",
          value: function getRegularExpression() {
            return this.regularExpression;
          }
        },
        {
          key: "match",
          value: function match(content) {
            var significantToken = null;
            var matches = content.match(this.regularExpression);
            if (matches !== null) {
              var index = matches.index;
              if (index === 0) {
                var firstMatch = first(matches);
                content = firstMatch;
                var contentLength = content.length;
                if (contentLength > 0) {
                  significantToken = _significant.default.fromContentAndType(content, this.type);
                }
              }
            }
            return significantToken;
          }
        },
        {
          key: "asEntry",
          value: function asEntry() {
            var entry = {}, regularExpressionPattern = "".concat(this.regularExpression);
            entry[this.type] = regularExpressionPattern;
            return entry;
          }
        }
      ], [
        {
          key: "fromToken",
          value: function fromToken(Token) {
            var type = Token.type, regularExpression = Token.regularExpression, rule = new Rule2(type, regularExpression);
            return rule;
          }
        },
        {
          key: "fromEntry",
          value: function fromEntry(entry) {
            var entryKeys = Object.keys(entry), firstEntryKey = first(entryKeys), type = firstEntryKey, regularExpressionPattern = entry[type], rule = Rule2.fromTypeAndRegularExpressionPattern(type, regularExpressionPattern);
            return rule;
          }
        },
        {
          key: "fromTypeAndRegularExpressionPattern",
          value: function fromTypeAndRegularExpressionPattern(type, regularExpressionPattern) {
            var unicode = isUnicode(regularExpressionPattern), flags = unicode ? _constants.U : _constants.EMPTY_STRING, regExp = new RegExp(regularExpressionPattern, flags), regularExpression = regExp, rule = new Rule2(type, regularExpression);
            return rule;
          }
        }
      ]);
      return Rule2;
    }();
    exports.default = Rule;
    function isUnicode(regularExpressionPattern) {
      var unicodeRegularExpression = /u{/, index = regularExpressionPattern.search(unicodeRegularExpression), unicode = index !== -1;
      return unicode;
    }
  });

  // node_modules/occam-lexers/lib/specialSymbols.js
  var require_specialSymbols = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.END_OF_LINE = exports.NO_WHITESPACE = exports.exclamationMark = exports.questionMark = exports.closeBracket = exports.openBracket = exports.verticalBar = exports.terminator = exports.separator = exports.ellipsis = exports.asterisk = exports.wildcard = exports.plus = void 0;
    var plus = "+";
    exports.plus = plus;
    var wildcard = ".";
    exports.wildcard = wildcard;
    var asterisk = "*";
    exports.asterisk = asterisk;
    var ellipsis = "...";
    exports.ellipsis = ellipsis;
    var separator = "::=";
    exports.separator = separator;
    var terminator = ";";
    exports.terminator = terminator;
    var verticalBar = "|";
    exports.verticalBar = verticalBar;
    var openBracket = "(";
    exports.openBracket = openBracket;
    var closeBracket = ")";
    exports.closeBracket = closeBracket;
    var questionMark = "?";
    exports.questionMark = questionMark;
    var exclamationMark = "!";
    exports.exclamationMark = exclamationMark;
    var NO_WHITESPACE = "<NO_WHITESPACE>";
    exports.NO_WHITESPACE = NO_WHITESPACE;
    var END_OF_LINE = "<END_OF_LINE>";
    exports.END_OF_LINE = END_OF_LINE;
    var _default = {
      plus,
      wildcard,
      asterisk,
      ellipsis,
      separator,
      terminator,
      verticalBar,
      openBracket,
      closeBracket,
      questionMark,
      exclamationMark,
      NO_WHITESPACE,
      END_OF_LINE
    };
    exports.default = _default;
  });

  // node_modules/occam-lexers/lib/bnf/entries.js
  var require_entries = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var entries = [
      {
        special: "^(?:::=|\\||\\(|\\)|\\?|\\!|\\*|\\+|\\.\\.\\.|\\.|\u03B5|;|<NO_WHITESPACE>|<END_OF_LINE>)"
      },
      {
        type: "^\\[[^\\]]+\\]"
      },
      {
        name: "^[\\w~]+"
      },
      {
        unassigned: "^[^\\s]+"
      }
    ];
    var _default = entries;
    exports.default = _default;
  });

  // node_modules/occam-lexers/lib/utilities/token.js
  var require_token2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.inCommentFromTokenAndInComment = inCommentFromTokenAndInComment;
    function inCommentFromTokenAndInComment(token, inComment) {
      var tokenCommentToken = token.isCommentToken();
      if (tokenCommentToken) {
        var commentToken = token, commentTokenInCommentPreserving = commentToken.isInCommentPreserving();
        inComment = commentTokenInCommentPreserving;
      }
      return inComment;
    }
  });

  // node_modules/occam-lexers/lib/common/lexer.js
  var require_lexer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule());
    var _constants = require_constants3();
    var _token = require_token2();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var CommonLexer = /* @__PURE__ */ function() {
      function CommonLexer2(rules, InCommentClasses, NotInCommentClasses) {
        _classCallCheck(this, CommonLexer2);
        this.rules = rules;
        this.InCommentClasses = InCommentClasses;
        this.NotInCommentClasses = NotInCommentClasses;
      }
      _createClass(CommonLexer2, [
        {
          key: "getRules",
          value: function getRules() {
            return this.rules;
          }
        },
        {
          key: "getInCommentClasses",
          value: function getInCommentClasses() {
            return this.InCommentClasses;
          }
        },
        {
          key: "getNotInCommentClasses",
          value: function getNotInCommentClasses() {
            return this.NotInCommentClasses;
          }
        },
        {
          key: "tokenise",
          value: function tokenise(content) {
            var inComment = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            var tokens = [];
            while (content !== _constants.EMPTY_STRING) {
              var token = null;
              var Classes = inComment ? this.InCommentClasses : this.NotInCommentClasses;
              Classes.some(function(Class) {
                if (Class !== null) {
                  token = Class.match(content);
                  if (token !== null) {
                    return true;
                  }
                }
              });
              if (token === null) {
                var significantToken = null;
                this.rules.some(function(rule) {
                  significantToken = rule.match(content);
                  if (significantToken !== null) {
                    token = significantToken;
                    return true;
                  }
                });
              }
              if (token === null) {
                throw new Error("The content '".concat(content, "' cannot be tokenised."));
              }
              tokens.push(token);
              inComment = (0, _token).inCommentFromTokenAndInComment(token, inComment);
              var tokenContentLength = token.getContentLength(), start = tokenContentLength;
              content = content.substring(start);
            }
            return tokens;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing(Class) {
            var entries = Class.entries, InCommentClasses = InCommentClassesFromClass(Class), NotInCommentClasses = NotInCommentClassesFromClass(Class), rules = entries.map(function(entry) {
              return _rule.default.fromEntry(entry);
            }), lexer = new Class(rules, InCommentClasses, NotInCommentClasses);
            return lexer;
          }
        },
        {
          key: "fromRules",
          value: function fromRules(Class, rules) {
            var InCommentClasses = InCommentClassesFromClass(Class), NotInCommentClasses = NotInCommentClassesFromClass(Class), lexer = new Class(rules, InCommentClasses, NotInCommentClasses);
            return lexer;
          }
        },
        {
          key: "fromEntries",
          value: function fromEntries(Class, entries) {
            var rules = entries.map(function(entry) {
              return _rule.default.fromEntry(entry);
            }), InCommentClasses = InCommentClassesFromClass(Class), NotInCommentClasses = NotInCommentClassesFromClass(Class), lexer = new Class(rules, InCommentClasses, NotInCommentClasses);
            return lexer;
          }
        }
      ]);
      return CommonLexer2;
    }();
    exports.default = CommonLexer;
    function InCommentClassesFromClass(Class) {
      var EndOfLineCommentToken = Class.EndOfLineCommentToken, EndOfMultiLineCommentToken = Class.EndOfMultiLineCommentToken, MiddleOfMultiLineCommentToken = Class.MiddleOfMultiLineCommentToken, InCommentClasses = [
        EndOfLineCommentToken,
        EndOfMultiLineCommentToken,
        MiddleOfMultiLineCommentToken
      ];
      return InCommentClasses;
    }
    function NotInCommentClassesFromClass(Class) {
      var EndOfLineToken = Class.EndOfLineToken, WhitespaceToken = Class.WhitespaceToken, SingleLineCommentToken = Class.SingleLineCommentToken, RegularExpressionToken = Class.RegularExpressionToken, StartOfMultiLineCommentToken = Class.StartOfMultiLineCommentToken, SinglyQuotedStringLiteralToken = Class.SinglyQuotedStringLiteralToken, DoublyQuotedStringLiteralToken = Class.DoublyQuotedStringLiteralToken, NotInCommentClasses = [
        EndOfLineToken,
        WhitespaceToken,
        StartOfMultiLineCommentToken,
        SingleLineCommentToken,
        RegularExpressionToken,
        SinglyQuotedStringLiteralToken,
        DoublyQuotedStringLiteralToken
      ];
      return NotInCommentClasses;
    }
  });

  // node_modules/occam-lexers/lib/token/nonSignificant.js
  var require_nonSignificant = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _token = _interopRequireDefault2(require_token());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var significant = false;
    var NonSignificantToken = /* @__PURE__ */ function(Token) {
      _inherits(NonSignificantToken2, Token);
      var _super = _createSuper(NonSignificantToken2);
      function NonSignificantToken2() {
        _classCallCheck(this, NonSignificantToken2);
        return _super.apply(this, arguments);
      }
      _createClass(NonSignificantToken2, [
        {
          key: "clone",
          value: function clone(Class, startPosition, endPosition) {
            return _get(_getPrototypeOf(NonSignificantToken2.prototype), "clone", this).call(this, Class, startPosition, endPosition, significant);
          }
        }
      ], [
        {
          key: "match",
          value: function match(Class, content) {
            return _token.default.match(Class, content, significant);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(Class, content) {
            return _token.default.fromContent(Class, content, significant);
          }
        },
        {
          key: "fromContentAndType",
          value: function fromContentAndType(Class, content, type) {
            return _token.default.fromContentAndType(Class, content, type, significant);
          }
        }
      ]);
      return NonSignificantToken2;
    }(_token.default);
    exports.default = NonSignificantToken;
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/whitespace.js
  var require_whitespace = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var WhitespaceToken = /* @__PURE__ */ function(NonSignificantToken) {
      _inherits(WhitespaceToken2, NonSignificantToken);
      var _super = _createSuper(WhitespaceToken2);
      function WhitespaceToken2() {
        _classCallCheck(this, WhitespaceToken2);
        return _super.apply(this, arguments);
      }
      _createClass(WhitespaceToken2, [
        {
          key: "asHTML",
          value: function asHTML() {
            var html = this.innerHTML;
            return html;
          }
        },
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(WhitespaceToken2.prototype), "clone", this).call(this, WhitespaceToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _nonSignificant.default.match(WhitespaceToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _nonSignificant.default.fromContent(WhitespaceToken2, content);
          }
        }
      ]);
      return WhitespaceToken2;
    }(_nonSignificant.default);
    exports.default = WhitespaceToken;
    _defineProperty(WhitespaceToken, "type", _types.whitespaceType);
    _defineProperty(WhitespaceToken, "regularExpression", /^[\t ]+/);
  });

  // node_modules/occam-lexers/lib/token/significant/regularExpression.js
  var require_regularExpression = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _significant = _interopRequireDefault2(require_significant());
    var _types = require_types();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var RegularExpressionToken = /* @__PURE__ */ function(SignificantToken) {
      _inherits(RegularExpressionToken2, SignificantToken);
      var _super = _createSuper(RegularExpressionToken2);
      function RegularExpressionToken2() {
        _classCallCheck(this, RegularExpressionToken2);
        return _super.apply(this, arguments);
      }
      _createClass(RegularExpressionToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(RegularExpressionToken2.prototype), "clone", this).call(this, RegularExpressionToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _significant.default.match(RegularExpressionToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _significant.default.fromContent(RegularExpressionToken2, content);
          }
        }
      ]);
      return RegularExpressionToken2;
    }(_significant.default);
    exports.default = RegularExpressionToken;
    _defineProperty(RegularExpressionToken, "type", _types.regularExpressionType);
    _defineProperty(RegularExpressionToken, "regularExpression", /^\/(?:\\[^\s]|[^\/\r\n])*\//);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/endOfLine.js
  var require_endOfLine = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var EndOfLineNonSignificantToken = /* @__PURE__ */ function(NonSignificantToken) {
      _inherits(EndOfLineNonSignificantToken2, NonSignificantToken);
      var _super = _createSuper(EndOfLineNonSignificantToken2);
      function EndOfLineNonSignificantToken2() {
        _classCallCheck(this, EndOfLineNonSignificantToken2);
        return _super.apply(this, arguments);
      }
      _createClass(EndOfLineNonSignificantToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(EndOfLineNonSignificantToken2.prototype), "clone", this).call(this, EndOfLineNonSignificantToken2, startPosition, endPosition);
          }
        },
        {
          key: "asHTML",
          value: function asHTML() {
            var html = this.innerHTML;
            return html;
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _nonSignificant.default.match(EndOfLineNonSignificantToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _nonSignificant.default.fromContent(EndOfLineNonSignificantToken2, content);
          }
        }
      ]);
      return EndOfLineNonSignificantToken2;
    }(_nonSignificant.default);
    exports.default = EndOfLineNonSignificantToken;
    _defineProperty(EndOfLineNonSignificantToken, "type", _types.endOfLineType);
    _defineProperty(EndOfLineNonSignificantToken, "regularExpression", /^(?:\r\n|\r|\n)/);
  });

  // node_modules/occam-lexers/lib/token/significant/stringLiteral.js
  var require_stringLiteral = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _significant = _interopRequireDefault2(require_significant());
    var _types = require_types();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var StringLiteralToken = /* @__PURE__ */ function(SignificantToken) {
      _inherits(StringLiteralToken2, SignificantToken);
      var _super = _createSuper(StringLiteralToken2);
      function StringLiteralToken2() {
        _classCallCheck(this, StringLiteralToken2);
        return _super.apply(this, arguments);
      }
      _createClass(StringLiteralToken2, [
        {
          key: "clone",
          value: function clone(Class, startPosition, endPosition) {
            return _get(_getPrototypeOf(StringLiteralToken2.prototype), "clone", this).call(this, Class, startPosition, endPosition);
          }
        },
        {
          key: "getString",
          value: function getString() {
            var content = this.getContent(), contentLength = content.length, start = 1, end = contentLength - 1, string = content.substring(start, end);
            return string;
          }
        }
      ], [
        {
          key: "match",
          value: function match(Class, content) {
            return _significant.default.match(Class, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(Class, content) {
            return _significant.default.fromContent(Class, content);
          }
        }
      ]);
      return StringLiteralToken2;
    }(_significant.default);
    exports.default = StringLiteralToken;
    _defineProperty(StringLiteralToken, "type", _types.stringLiteralType);
  });

  // node_modules/occam-lexers/lib/token/significant/stringLiteral/doublyQuoted.js
  var require_doublyQuoted = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _stringLiteral = _interopRequireDefault2(require_stringLiteral());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var DoublyQuotedStringLiteralToken = /* @__PURE__ */ function(StringLiteralToken) {
      _inherits(DoublyQuotedStringLiteralToken2, StringLiteralToken);
      var _super = _createSuper(DoublyQuotedStringLiteralToken2);
      function DoublyQuotedStringLiteralToken2() {
        _classCallCheck(this, DoublyQuotedStringLiteralToken2);
        return _super.apply(this, arguments);
      }
      _createClass(DoublyQuotedStringLiteralToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(DoublyQuotedStringLiteralToken2.prototype), "clone", this).call(this, DoublyQuotedStringLiteralToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _stringLiteral.default.match(DoublyQuotedStringLiteralToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _stringLiteral.default.fromContent(DoublyQuotedStringLiteralToken2, content);
          }
        }
      ]);
      return DoublyQuotedStringLiteralToken2;
    }(_stringLiteral.default);
    exports.default = DoublyQuotedStringLiteralToken;
    _defineProperty(DoublyQuotedStringLiteralToken, "regularExpression", /^"(?:\\[^\s]|[^"\\\r\n])*"/);
  });

  // node_modules/occam-lexers/lib/bnf/lexer.js
  var require_lexer2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _entries = _interopRequireDefault2(require_entries());
    var _lexer = _interopRequireDefault2(require_lexer());
    var _whitespace = _interopRequireDefault2(require_whitespace());
    var _regularExpression = _interopRequireDefault2(require_regularExpression());
    var _endOfLine = _interopRequireDefault2(require_endOfLine());
    var _doublyQuoted = _interopRequireDefault2(require_doublyQuoted());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var BNFLexer = /* @__PURE__ */ function(CommonLexer) {
      _inherits(BNFLexer2, CommonLexer);
      var _super = _createSuper(BNFLexer2);
      function BNFLexer2() {
        _classCallCheck(this, BNFLexer2);
        return _super.apply(this, arguments);
      }
      _createClass(BNFLexer2, [
        {
          key: "tokensFromBNF",
          value: function tokensFromBNF(bnf) {
            var content = bnf, tokens = _get(_getPrototypeOf(BNFLexer2.prototype), "tokenise", this).call(this, content);
            return tokens;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            return _lexer.default.fromNothing(BNFLexer2);
          }
        },
        {
          key: "fromRules",
          value: function fromRules(rules) {
            return _lexer.default.fromRules(BNFLexer2, rules);
          }
        },
        {
          key: "fromEntries",
          value: function fromEntries(entries) {
            return _lexer.default.fromEntries(BNFLexer2, entries);
          }
        }
      ]);
      return BNFLexer2;
    }(_lexer.default);
    exports.default = BNFLexer;
    _defineProperty(BNFLexer, "entries", _entries.default);
    _defineProperty(BNFLexer, "EndOfLineToken", _endOfLine.default);
    _defineProperty(BNFLexer, "WhitespaceToken", _whitespace.default);
    _defineProperty(BNFLexer, "EndOfLineCommentToken", null);
    _defineProperty(BNFLexer, "RegularExpressionToken", _regularExpression.default);
    _defineProperty(BNFLexer, "SingleLineCommentToken", null);
    _defineProperty(BNFLexer, "EndOfMultiLineCommentToken", null);
    _defineProperty(BNFLexer, "StartOfMultiLineCommentToken", null);
    _defineProperty(BNFLexer, "MiddleOfMultiLineCommentToken", null);
    _defineProperty(BNFLexer, "SinglyQuotedStringLiteralToken", null);
    _defineProperty(BNFLexer, "DoublyQuotedStringLiteralToken", _doublyQuoted.default);
  });

  // node_modules/occam-lexers/lib/basic/entries.js
  var require_entries2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var entries = [
      {
        digit: "^\\d+"
      },
      {
        bracket: "^(?:\\(|\\))"
      },
      {
        operator: "^(?:\\+|\\-|\\*|\\/)"
      },
      {
        unassigned: "^[^\\s]+"
      }
    ];
    var _default = entries;
    exports.default = _default;
  });

  // node_modules/occam-lexers/lib/token/significant/stringLiteral/singlyQuoted.js
  var require_singlyQuoted = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _stringLiteral = _interopRequireDefault2(require_stringLiteral());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var SinglyQuotedStringLiteralToken = /* @__PURE__ */ function(StringLiteralToken) {
      _inherits(SinglyQuotedStringLiteralToken2, StringLiteralToken);
      var _super = _createSuper(SinglyQuotedStringLiteralToken2);
      function SinglyQuotedStringLiteralToken2() {
        _classCallCheck(this, SinglyQuotedStringLiteralToken2);
        return _super.apply(this, arguments);
      }
      _createClass(SinglyQuotedStringLiteralToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(SinglyQuotedStringLiteralToken2.prototype), "clone", this).call(this, SinglyQuotedStringLiteralToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _stringLiteral.default.match(SinglyQuotedStringLiteralToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _stringLiteral.default.fromContent(SinglyQuotedStringLiteralToken2, content);
          }
        }
      ]);
      return SinglyQuotedStringLiteralToken2;
    }(_stringLiteral.default);
    exports.default = SinglyQuotedStringLiteralToken;
    _defineProperty(SinglyQuotedStringLiteralToken, "regularExpression", /^'(?:\\[^\s]|[^'\\\r\n])*'/);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/singleLine.js
  var require_singleLine = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var SingleLineCommentToken = /* @__PURE__ */ function(NonSignificantToken) {
      _inherits(SingleLineCommentToken2, NonSignificantToken);
      var _super = _createSuper(SingleLineCommentToken2);
      function SingleLineCommentToken2() {
        _classCallCheck(this, SingleLineCommentToken2);
        return _super.apply(this, arguments);
      }
      _createClass(SingleLineCommentToken2, [
        {
          key: "clone",
          value: function clone(Class, startPosition, endPosition) {
            return _get(_getPrototypeOf(SingleLineCommentToken2.prototype), "clone", this).call(this, Class, startPosition, endPosition);
          }
        },
        {
          key: "isInCommentPreserving",
          value: function isInCommentPreserving() {
            var inCommentPreserving = false;
            return inCommentPreserving;
          }
        }
      ], [
        {
          key: "match",
          value: function match(Class, content) {
            return _nonSignificant.default.match(Class, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(Class, content) {
            return _nonSignificant.default.fromContent(Class, content);
          }
        }
      ]);
      return SingleLineCommentToken2;
    }(_nonSignificant.default);
    exports.default = SingleLineCommentToken;
    _defineProperty(SingleLineCommentToken, "type", _types.singleLineCommentType);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/singleLine/pythonStyle.js
  var require_pythonStyle = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _singleLine = _interopRequireDefault2(require_singleLine());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var PythonStyleSingleLineCommentToken = /* @__PURE__ */ function(SingleLineCommentToken) {
      _inherits(PythonStyleSingleLineCommentToken2, SingleLineCommentToken);
      var _super = _createSuper(PythonStyleSingleLineCommentToken2);
      function PythonStyleSingleLineCommentToken2() {
        _classCallCheck(this, PythonStyleSingleLineCommentToken2);
        return _super.apply(this, arguments);
      }
      _createClass(PythonStyleSingleLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(PythonStyleSingleLineCommentToken2.prototype), "clone", this).call(this, PythonStyleSingleLineCommentToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _singleLine.default.match(PythonStyleSingleLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _singleLine.default.fromContent(PythonStyleSingleLineCommentToken2, content);
          }
        }
      ]);
      return PythonStyleSingleLineCommentToken2;
    }(_singleLine.default);
    exports.default = PythonStyleSingleLineCommentToken;
    _defineProperty(PythonStyleSingleLineCommentToken, "regularExpression", /^#[^\r\n]*/);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/endOfLine.js
  var require_endOfLine2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var EndOfLineCommentNonSignificantToken = /* @__PURE__ */ function(NonSignificantToken) {
      _inherits(EndOfLineCommentNonSignificantToken2, NonSignificantToken);
      var _super = _createSuper(EndOfLineCommentNonSignificantToken2);
      function EndOfLineCommentNonSignificantToken2() {
        _classCallCheck(this, EndOfLineCommentNonSignificantToken2);
        return _super.apply(this, arguments);
      }
      _createClass(EndOfLineCommentNonSignificantToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(EndOfLineCommentNonSignificantToken2.prototype), "clone", this).call(this, EndOfLineCommentNonSignificantToken2, startPosition, endPosition);
          }
        },
        {
          key: "asHTML",
          value: function asHTML() {
            var html = this.innerHTML;
            return html;
          }
        },
        {
          key: "isInCommentPreserving",
          value: function isInCommentPreserving() {
            var inCommentPreserving = true;
            return inCommentPreserving;
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _nonSignificant.default.match(EndOfLineCommentNonSignificantToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _nonSignificant.default.fromContent(EndOfLineCommentNonSignificantToken2, content);
          }
        }
      ]);
      return EndOfLineCommentNonSignificantToken2;
    }(_nonSignificant.default);
    exports.default = EndOfLineCommentNonSignificantToken;
    _defineProperty(EndOfLineCommentNonSignificantToken, "type", _types.endOfLineCommentType);
    _defineProperty(EndOfLineCommentNonSignificantToken, "regularExpression", /^(?:\r\n|\r|\n)/);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/multiLine/endOf.js
  var require_endOf = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var EndOfMultiLineCommentToken = /* @__PURE__ */ function(NonSignificantToken) {
      _inherits(EndOfMultiLineCommentToken2, NonSignificantToken);
      var _super = _createSuper(EndOfMultiLineCommentToken2);
      function EndOfMultiLineCommentToken2() {
        _classCallCheck(this, EndOfMultiLineCommentToken2);
        return _super.apply(this, arguments);
      }
      _createClass(EndOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(Class, startPosition, endPosition) {
            return _get(_getPrototypeOf(EndOfMultiLineCommentToken2.prototype), "clone", this).call(this, Class, startPosition, endPosition);
          }
        },
        {
          key: "isInCommentPreserving",
          value: function isInCommentPreserving() {
            var inCommentPreserving = false;
            return inCommentPreserving;
          }
        }
      ], [
        {
          key: "match",
          value: function match(Class, content) {
            return _nonSignificant.default.match(Class, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(Class, content) {
            return _nonSignificant.default.fromContent(Class, content);
          }
        }
      ]);
      return EndOfMultiLineCommentToken2;
    }(_nonSignificant.default);
    exports.default = EndOfMultiLineCommentToken;
    _defineProperty(EndOfMultiLineCommentToken, "type", _types.endOfMultiLineCommentType);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/multiLine/endOf/pythonStyle.js
  var require_pythonStyle2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _endOf = _interopRequireDefault2(require_endOf());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var PythonStyleEndOfMultiLineCommentToken = /* @__PURE__ */ function(EndOfMultiLineCommentToken) {
      _inherits(PythonStyleEndOfMultiLineCommentToken2, EndOfMultiLineCommentToken);
      var _super = _createSuper(PythonStyleEndOfMultiLineCommentToken2);
      function PythonStyleEndOfMultiLineCommentToken2() {
        _classCallCheck(this, PythonStyleEndOfMultiLineCommentToken2);
        return _super.apply(this, arguments);
      }
      _createClass(PythonStyleEndOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(PythonStyleEndOfMultiLineCommentToken2.prototype), "clone", this).call(this, PythonStyleEndOfMultiLineCommentToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _endOf.default.match(PythonStyleEndOfMultiLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _endOf.default.fromContent(PythonStyleEndOfMultiLineCommentToken2, content);
          }
        }
      ]);
      return PythonStyleEndOfMultiLineCommentToken2;
    }(_endOf.default);
    exports.default = PythonStyleEndOfMultiLineCommentToken;
    _defineProperty(PythonStyleEndOfMultiLineCommentToken, "regularExpression", /^###/);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/multiLine/startOf.js
  var require_startOf = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var StartOfMultiLineCommentToken = /* @__PURE__ */ function(NonSignificantToken) {
      _inherits(StartOfMultiLineCommentToken2, NonSignificantToken);
      var _super = _createSuper(StartOfMultiLineCommentToken2);
      function StartOfMultiLineCommentToken2() {
        _classCallCheck(this, StartOfMultiLineCommentToken2);
        return _super.apply(this, arguments);
      }
      _createClass(StartOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(Class, startPosition, endPosition) {
            return _get(_getPrototypeOf(StartOfMultiLineCommentToken2.prototype), "clone", this).call(this, Class, startPosition, endPosition);
          }
        },
        {
          key: "isInCommentPreserving",
          value: function isInCommentPreserving() {
            var inCommentPreserving = true;
            return inCommentPreserving;
          }
        }
      ], [
        {
          key: "match",
          value: function match(Class, content) {
            return _nonSignificant.default.match(Class, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(Class, content) {
            return _nonSignificant.default.fromContent(Class, content);
          }
        }
      ]);
      return StartOfMultiLineCommentToken2;
    }(_nonSignificant.default);
    exports.default = StartOfMultiLineCommentToken;
    _defineProperty(StartOfMultiLineCommentToken, "type", _types.startOfMultiLineCommentType);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/multiLine/startOf/pythonStyle.js
  var require_pythonStyle3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _startOf = _interopRequireDefault2(require_startOf());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var PythonStyleStartOfMultiLineCommentToken = /* @__PURE__ */ function(StartOfMultiLineCommentToken) {
      _inherits(PythonStyleStartOfMultiLineCommentToken2, StartOfMultiLineCommentToken);
      var _super = _createSuper(PythonStyleStartOfMultiLineCommentToken2);
      function PythonStyleStartOfMultiLineCommentToken2() {
        _classCallCheck(this, PythonStyleStartOfMultiLineCommentToken2);
        return _super.apply(this, arguments);
      }
      _createClass(PythonStyleStartOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(PythonStyleStartOfMultiLineCommentToken2.prototype), "clone", this).call(this, PythonStyleStartOfMultiLineCommentToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _startOf.default.match(PythonStyleStartOfMultiLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _startOf.default.fromContent(PythonStyleStartOfMultiLineCommentToken2, content);
          }
        }
      ]);
      return PythonStyleStartOfMultiLineCommentToken2;
    }(_startOf.default);
    exports.default = PythonStyleStartOfMultiLineCommentToken;
    _defineProperty(PythonStyleStartOfMultiLineCommentToken, "regularExpression", /^###/);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/multiLine/middleOf.js
  var require_middleOf = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var MiddleOfMultiLineCommentToken = /* @__PURE__ */ function(NonSignificantToken) {
      _inherits(MiddleOfMultiLineCommentToken2, NonSignificantToken);
      var _super = _createSuper(MiddleOfMultiLineCommentToken2);
      function MiddleOfMultiLineCommentToken2() {
        _classCallCheck(this, MiddleOfMultiLineCommentToken2);
        return _super.apply(this, arguments);
      }
      _createClass(MiddleOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(Class, startPosition, endPosition) {
            return _get(_getPrototypeOf(MiddleOfMultiLineCommentToken2.prototype), "clone", this).call(this, Class, startPosition, endPosition);
          }
        },
        {
          key: "isInCommentPreserving",
          value: function isInCommentPreserving() {
            var inCommentPreserving = true;
            return inCommentPreserving;
          }
        }
      ], [
        {
          key: "match",
          value: function match(Class, content) {
            return _nonSignificant.default.match(Class, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(Class, content) {
            return _nonSignificant.default.fromContent(Class, content);
          }
        }
      ]);
      return MiddleOfMultiLineCommentToken2;
    }(_nonSignificant.default);
    exports.default = MiddleOfMultiLineCommentToken;
    _defineProperty(MiddleOfMultiLineCommentToken, "type", _types.middleOfMultiLineCommentType);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/multiLine/middleOf/pythonStyle.js
  var require_pythonStyle4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _middleOf = _interopRequireDefault2(require_middleOf());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var PythonStyleMiddleOfMultiLineCommentToken = /* @__PURE__ */ function(MiddleOfMultiLineCommentToken) {
      _inherits(PythonStyleMiddleOfMultiLineCommentToken2, MiddleOfMultiLineCommentToken);
      var _super = _createSuper(PythonStyleMiddleOfMultiLineCommentToken2);
      function PythonStyleMiddleOfMultiLineCommentToken2() {
        _classCallCheck(this, PythonStyleMiddleOfMultiLineCommentToken2);
        return _super.apply(this, arguments);
      }
      _createClass(PythonStyleMiddleOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(PythonStyleMiddleOfMultiLineCommentToken2.prototype), "clone", this).call(this, PythonStyleMiddleOfMultiLineCommentToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _middleOf.default.match(PythonStyleMiddleOfMultiLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _middleOf.default.fromContent(PythonStyleMiddleOfMultiLineCommentToken2, content);
          }
        }
      ]);
      return PythonStyleMiddleOfMultiLineCommentToken2;
    }(_middleOf.default);
    exports.default = PythonStyleMiddleOfMultiLineCommentToken;
    _defineProperty(PythonStyleMiddleOfMultiLineCommentToken, "regularExpression", /^(?:[^\r\n]+?(?=###)|[^\r\n]+)/);
  });

  // node_modules/occam-lexers/lib/basic/lexer.js
  var require_lexer3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _entries = _interopRequireDefault2(require_entries2());
    var _lexer = _interopRequireDefault2(require_lexer());
    var _whitespace = _interopRequireDefault2(require_whitespace());
    var _regularExpression = _interopRequireDefault2(require_regularExpression());
    var _endOfLine = _interopRequireDefault2(require_endOfLine());
    var _singlyQuoted = _interopRequireDefault2(require_singlyQuoted());
    var _doublyQuoted = _interopRequireDefault2(require_doublyQuoted());
    var _pythonStyle = _interopRequireDefault2(require_pythonStyle());
    var _endOfLine1 = _interopRequireDefault2(require_endOfLine2());
    var _pythonStyle1 = _interopRequireDefault2(require_pythonStyle2());
    var _pythonStyle2 = _interopRequireDefault2(require_pythonStyle3());
    var _pythonStyle3 = _interopRequireDefault2(require_pythonStyle4());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var BasicLexer = /* @__PURE__ */ function(CommonLexer) {
      _inherits(BasicLexer2, CommonLexer);
      var _super = _createSuper(BasicLexer2);
      function BasicLexer2() {
        _classCallCheck(this, BasicLexer2);
        return _super.apply(this, arguments);
      }
      _createClass(BasicLexer2, null, [
        {
          key: "fromNothing",
          value: function fromNothing() {
            return _lexer.default.fromNothing(BasicLexer2);
          }
        },
        {
          key: "fromRules",
          value: function fromRules(rules) {
            return _lexer.default.fromRules(BasicLexer2, rules);
          }
        },
        {
          key: "fromEntries",
          value: function fromEntries(entries) {
            return _lexer.default.fromEntries(BasicLexer2, entries);
          }
        }
      ]);
      return BasicLexer2;
    }(_lexer.default);
    exports.default = BasicLexer;
    _defineProperty(BasicLexer, "entries", _entries.default);
    _defineProperty(BasicLexer, "EndOfLineToken", _endOfLine.default);
    _defineProperty(BasicLexer, "WhitespaceToken", _whitespace.default);
    _defineProperty(BasicLexer, "EndOfLineCommentToken", _endOfLine1.default);
    _defineProperty(BasicLexer, "RegularExpressionToken", _regularExpression.default);
    _defineProperty(BasicLexer, "SingleLineCommentToken", _pythonStyle.default);
    _defineProperty(BasicLexer, "EndOfMultiLineCommentToken", _pythonStyle1.default);
    _defineProperty(BasicLexer, "StartOfMultiLineCommentToken", _pythonStyle2.default);
    _defineProperty(BasicLexer, "MiddleOfMultiLineCommentToken", _pythonStyle3.default);
    _defineProperty(BasicLexer, "SinglyQuotedStringLiteralToken", _singlyQuoted.default);
    _defineProperty(BasicLexer, "DoublyQuotedStringLiteralToken", _doublyQuoted.default);
  });

  // node_modules/occam-lexers/lib/token/significant/endOfLine.js
  var require_endOfLine3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _significant = _interopRequireDefault2(require_significant());
    var _types = require_types();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var EndOfLineSignificantToken = /* @__PURE__ */ function(SignificantToken) {
      _inherits(EndOfLineSignificantToken2, SignificantToken);
      var _super = _createSuper(EndOfLineSignificantToken2);
      function EndOfLineSignificantToken2() {
        _classCallCheck(this, EndOfLineSignificantToken2);
        return _super.apply(this, arguments);
      }
      _createClass(EndOfLineSignificantToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(EndOfLineSignificantToken2.prototype), "clone", this).call(this, EndOfLineSignificantToken2, startPosition, endPosition);
          }
        },
        {
          key: "asHTML",
          value: function asHTML() {
            var html = this.innerHTML;
            return html;
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _significant.default.match(EndOfLineSignificantToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _significant.default.fromContent(EndOfLineSignificantToken2, content);
          }
        }
      ]);
      return EndOfLineSignificantToken2;
    }(_significant.default);
    exports.default = EndOfLineSignificantToken;
    _defineProperty(EndOfLineSignificantToken, "type", _types.endOfLineType);
    _defineProperty(EndOfLineSignificantToken, "regularExpression", /^(?:\r\n|\r|\n)/);
  });

  // node_modules/occam-lexers/lib/token/significant/comment/endOfLine.js
  var require_endOfLine4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _significant = _interopRequireDefault2(require_significant());
    var _types = require_types();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var EndOfLineCommentSignificantToken = /* @__PURE__ */ function(SignificantToken) {
      _inherits(EndOfLineCommentSignificantToken2, SignificantToken);
      var _super = _createSuper(EndOfLineCommentSignificantToken2);
      function EndOfLineCommentSignificantToken2() {
        _classCallCheck(this, EndOfLineCommentSignificantToken2);
        return _super.apply(this, arguments);
      }
      _createClass(EndOfLineCommentSignificantToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(EndOfLineCommentSignificantToken2.prototype), "clone", this).call(this, EndOfLineCommentSignificantToken2, startPosition, endPosition);
          }
        },
        {
          key: "asHTML",
          value: function asHTML() {
            var html = this.innerHTML;
            return html;
          }
        },
        {
          key: "isInCommentPreserving",
          value: function isInCommentPreserving() {
            var inCommentPreserving = true;
            return inCommentPreserving;
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _significant.default.match(EndOfLineCommentSignificantToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _significant.default.fromContent(EndOfLineCommentSignificantToken2, content);
          }
        }
      ]);
      return EndOfLineCommentSignificantToken2;
    }(_significant.default);
    exports.default = EndOfLineCommentSignificantToken;
    _defineProperty(EndOfLineCommentSignificantToken, "type", _types.endOfLineCommentType);
    _defineProperty(EndOfLineCommentSignificantToken, "regularExpression", /^(?:\r\n|\r|\n)/);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/singleLine/cStyle.js
  var require_cStyle = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _singleLine = _interopRequireDefault2(require_singleLine());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var CStyleSingleLineCommentToken = /* @__PURE__ */ function(SingleLineCommentToken) {
      _inherits(CStyleSingleLineCommentToken2, SingleLineCommentToken);
      var _super = _createSuper(CStyleSingleLineCommentToken2);
      function CStyleSingleLineCommentToken2() {
        _classCallCheck(this, CStyleSingleLineCommentToken2);
        return _super.apply(this, arguments);
      }
      _createClass(CStyleSingleLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(CStyleSingleLineCommentToken2.prototype), "clone", this).call(this, CStyleSingleLineCommentToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _singleLine.default.match(CStyleSingleLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _singleLine.default.fromContent(CStyleSingleLineCommentToken2, content);
          }
        }
      ]);
      return CStyleSingleLineCommentToken2;
    }(_singleLine.default);
    exports.default = CStyleSingleLineCommentToken;
    _defineProperty(CStyleSingleLineCommentToken, "regularExpression", /^\/\/[^\r\n]*/);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/multiLine/endOf/cStyle.js
  var require_cStyle2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _endOf = _interopRequireDefault2(require_endOf());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var CStyleEndOfMultiLineCommentToken = /* @__PURE__ */ function(EndOfMultiLineCommentToken) {
      _inherits(CStyleEndOfMultiLineCommentToken2, EndOfMultiLineCommentToken);
      var _super = _createSuper(CStyleEndOfMultiLineCommentToken2);
      function CStyleEndOfMultiLineCommentToken2() {
        _classCallCheck(this, CStyleEndOfMultiLineCommentToken2);
        return _super.apply(this, arguments);
      }
      _createClass(CStyleEndOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(CStyleEndOfMultiLineCommentToken2.prototype), "clone", this).call(this, CStyleEndOfMultiLineCommentToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _endOf.default.match(CStyleEndOfMultiLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _endOf.default.fromContent(CStyleEndOfMultiLineCommentToken2, content);
          }
        }
      ]);
      return CStyleEndOfMultiLineCommentToken2;
    }(_endOf.default);
    exports.default = CStyleEndOfMultiLineCommentToken;
    _defineProperty(CStyleEndOfMultiLineCommentToken, "regularExpression", /^\*\//);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/multiLine/startOf/cStyle.js
  var require_cStyle3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _startOf = _interopRequireDefault2(require_startOf());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var CStyleStartOfMultiLineCommentToken = /* @__PURE__ */ function(StartOfMultiLineCommentToken) {
      _inherits(CStyleStartOfMultiLineCommentToken2, StartOfMultiLineCommentToken);
      var _super = _createSuper(CStyleStartOfMultiLineCommentToken2);
      function CStyleStartOfMultiLineCommentToken2() {
        _classCallCheck(this, CStyleStartOfMultiLineCommentToken2);
        return _super.apply(this, arguments);
      }
      _createClass(CStyleStartOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(CStyleStartOfMultiLineCommentToken2.prototype), "clone", this).call(this, CStyleStartOfMultiLineCommentToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _startOf.default.match(CStyleStartOfMultiLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _startOf.default.fromContent(CStyleStartOfMultiLineCommentToken2, content);
          }
        }
      ]);
      return CStyleStartOfMultiLineCommentToken2;
    }(_startOf.default);
    exports.default = CStyleStartOfMultiLineCommentToken;
    _defineProperty(CStyleStartOfMultiLineCommentToken, "regularExpression", /^\/\*/);
  });

  // node_modules/occam-lexers/lib/token/nonSignificant/comment/multiLine/middleOf/cStyle.js
  var require_cStyle4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _middleOf = _interopRequireDefault2(require_middleOf());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var CStyleMiddleOfMultiLineCommentToken = /* @__PURE__ */ function(MiddleOfMultiLineCommentToken) {
      _inherits(CStyleMiddleOfMultiLineCommentToken2, MiddleOfMultiLineCommentToken);
      var _super = _createSuper(CStyleMiddleOfMultiLineCommentToken2);
      function CStyleMiddleOfMultiLineCommentToken2() {
        _classCallCheck(this, CStyleMiddleOfMultiLineCommentToken2);
        return _super.apply(this, arguments);
      }
      _createClass(CStyleMiddleOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(CStyleMiddleOfMultiLineCommentToken2.prototype), "clone", this).call(this, CStyleMiddleOfMultiLineCommentToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _middleOf.default.match(CStyleMiddleOfMultiLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _middleOf.default.fromContent(CStyleMiddleOfMultiLineCommentToken2, content);
          }
        }
      ]);
      return CStyleMiddleOfMultiLineCommentToken2;
    }(_middleOf.default);
    exports.default = CStyleMiddleOfMultiLineCommentToken;
    _defineProperty(CStyleMiddleOfMultiLineCommentToken, "regularExpression", /^(?:[^\r\n]+?(?=\*\/)|[^\r\n]+)/);
  });

  // node_modules/occam-lexers/lib/index.js
  var require_lib2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Rule", {
      enumerable: true,
      get: function() {
        return _rule.default;
      }
    });
    Object.defineProperty(exports, "types", {
      enumerable: true,
      get: function() {
        return _types.default;
      }
    });
    Object.defineProperty(exports, "specialSymbols", {
      enumerable: true,
      get: function() {
        return _specialSymbols.default;
      }
    });
    Object.defineProperty(exports, "BNFLexer", {
      enumerable: true,
      get: function() {
        return _lexer.default;
      }
    });
    Object.defineProperty(exports, "BasicLexer", {
      enumerable: true,
      get: function() {
        return _lexer1.default;
      }
    });
    Object.defineProperty(exports, "CommonLexer", {
      enumerable: true,
      get: function() {
        return _lexer2.default;
      }
    });
    Object.defineProperty(exports, "SignificantToken", {
      enumerable: true,
      get: function() {
        return _significant.default;
      }
    });
    Object.defineProperty(exports, "NonSignificantToken", {
      enumerable: true,
      get: function() {
        return _nonSignificant.default;
      }
    });
    Object.defineProperty(exports, "EndOfLineSignificantToken", {
      enumerable: true,
      get: function() {
        return _endOfLine.default;
      }
    });
    Object.defineProperty(exports, "EndOfLineNonSignificantToken", {
      enumerable: true,
      get: function() {
        return _endOfLine1.default;
      }
    });
    Object.defineProperty(exports, "EndOfLineCommentSignificantToken", {
      enumerable: true,
      get: function() {
        return _endOfLine2.default;
      }
    });
    Object.defineProperty(exports, "EndOfLineCommentNonSignificantToken", {
      enumerable: true,
      get: function() {
        return _endOfLine3.default;
      }
    });
    Object.defineProperty(exports, "WhitespaceToken", {
      enumerable: true,
      get: function() {
        return _whitespace.default;
      }
    });
    Object.defineProperty(exports, "StringLiteralToken", {
      enumerable: true,
      get: function() {
        return _stringLiteral.default;
      }
    });
    Object.defineProperty(exports, "RegularExpressionToken", {
      enumerable: true,
      get: function() {
        return _regularExpression.default;
      }
    });
    Object.defineProperty(exports, "SinglyQuotedStringLiteralToken", {
      enumerable: true,
      get: function() {
        return _singlyQuoted.default;
      }
    });
    Object.defineProperty(exports, "DoublyQuotedStringLiteralToken", {
      enumerable: true,
      get: function() {
        return _doublyQuoted.default;
      }
    });
    Object.defineProperty(exports, "SingleLineCommentToken", {
      enumerable: true,
      get: function() {
        return _singleLine.default;
      }
    });
    Object.defineProperty(exports, "EndOfMultiLineCommentToken", {
      enumerable: true,
      get: function() {
        return _endOf.default;
      }
    });
    Object.defineProperty(exports, "StartOfMultiLineCommentToken", {
      enumerable: true,
      get: function() {
        return _startOf.default;
      }
    });
    Object.defineProperty(exports, "MiddleOfMultiLineCommentToken", {
      enumerable: true,
      get: function() {
        return _middleOf.default;
      }
    });
    Object.defineProperty(exports, "CStyleSingleLineCommentToken", {
      enumerable: true,
      get: function() {
        return _cStyle.default;
      }
    });
    Object.defineProperty(exports, "CStyleEndOfMultiLineCommentToken", {
      enumerable: true,
      get: function() {
        return _cStyle1.default;
      }
    });
    Object.defineProperty(exports, "CStyleStartOfMultiLineCommentToken", {
      enumerable: true,
      get: function() {
        return _cStyle2.default;
      }
    });
    Object.defineProperty(exports, "CStyleMiddleOfMultiLineCommentToken", {
      enumerable: true,
      get: function() {
        return _cStyle3.default;
      }
    });
    Object.defineProperty(exports, "PythonStyleSingleLineCommentToken", {
      enumerable: true,
      get: function() {
        return _pythonStyle.default;
      }
    });
    Object.defineProperty(exports, "PythonStyleEndOfMultiLineCommentToken", {
      enumerable: true,
      get: function() {
        return _pythonStyle1.default;
      }
    });
    Object.defineProperty(exports, "PythonStyleStartOfMultiLineCommentToken", {
      enumerable: true,
      get: function() {
        return _pythonStyle2.default;
      }
    });
    Object.defineProperty(exports, "PythonStyleMiddleOfMultiLineCommentToken", {
      enumerable: true,
      get: function() {
        return _pythonStyle3.default;
      }
    });
    var _rule = _interopRequireDefault2(require_rule());
    var _types = _interopRequireDefault2(require_types());
    var _specialSymbols = _interopRequireDefault2(require_specialSymbols());
    var _lexer = _interopRequireDefault2(require_lexer2());
    var _lexer1 = _interopRequireDefault2(require_lexer3());
    var _lexer2 = _interopRequireDefault2(require_lexer());
    var _significant = _interopRequireDefault2(require_significant());
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _endOfLine = _interopRequireDefault2(require_endOfLine3());
    var _endOfLine1 = _interopRequireDefault2(require_endOfLine());
    var _endOfLine2 = _interopRequireDefault2(require_endOfLine4());
    var _endOfLine3 = _interopRequireDefault2(require_endOfLine2());
    var _whitespace = _interopRequireDefault2(require_whitespace());
    var _stringLiteral = _interopRequireDefault2(require_stringLiteral());
    var _regularExpression = _interopRequireDefault2(require_regularExpression());
    var _singlyQuoted = _interopRequireDefault2(require_singlyQuoted());
    var _doublyQuoted = _interopRequireDefault2(require_doublyQuoted());
    var _singleLine = _interopRequireDefault2(require_singleLine());
    var _endOf = _interopRequireDefault2(require_endOf());
    var _startOf = _interopRequireDefault2(require_startOf());
    var _middleOf = _interopRequireDefault2(require_middleOf());
    var _cStyle = _interopRequireDefault2(require_cStyle());
    var _cStyle1 = _interopRequireDefault2(require_cStyle2());
    var _cStyle2 = _interopRequireDefault2(require_cStyle3());
    var _cStyle3 = _interopRequireDefault2(require_cStyle4());
    var _pythonStyle = _interopRequireDefault2(require_pythonStyle());
    var _pythonStyle1 = _interopRequireDefault2(require_pythonStyle2());
    var _pythonStyle2 = _interopRequireDefault2(require_pythonStyle3());
    var _pythonStyle3 = _interopRequireDefault2(require_pythonStyle4());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // node_modules/with-style/lib/css/entries.js
  var require_entries3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var entries = [
      {
        colour: "^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})"
      },
      {
        keyword: "^(?:!important|@media)"
      },
      {
        percentage: "^(?:[0-9]+|[0-9]*\\.[0-9]+)\\%"
      },
      {
        frequency: "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:hz|khz)"
      },
      {
        fraction: "^[1-9][0-9]*?fr"
      },
      {
        length: "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:px|cm|mm|in|pt|pc)"
      },
      {
        angle: "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:deg|rad|grad)"
      },
      {
        time: "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:s|ms)"
      },
      {
        rems: "^(?:[0-9]+|[0-9]*\\.[0-9]+)rem"
      },
      {
        ems: "^(?:[0-9]+|[0-9]*\\.[0-9]+)em"
      },
      {
        number: "^[0-9]+|[0-9]*\\.[0-9]+"
      },
      {
        special: "^;|::|:|\\.|,|/|\\|=|~=|=|>|\\{|\\}|\\(|\\)|\\[|\\]"
      },
      {
        operator: "^^(?:and|not|only)$"
      },
      {
        identifier: "^[_a-zA-Z0-9-]+"
      },
      {
        "unary-operator": "^\\+|\\-"
      },
      {
        unassigned: "^[^\\s]+"
      }
    ];
    var _default = entries;
    exports.default = _default;
  });

  // node_modules/with-style/lib/css/lexer.js
  var require_lexer4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _entries = _interopRequireDefault2(require_entries3());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var CSSLexer = /* @__PURE__ */ function(CommonLexer) {
      _inherits(CSSLexer2, CommonLexer);
      var _super = _createSuper(CSSLexer2);
      function CSSLexer2() {
        _classCallCheck(this, CSSLexer2);
        return _super.apply(this, arguments);
      }
      _createClass(CSSLexer2, null, [
        {
          key: "fromNothing",
          value: function fromNothing() {
            return _occamLexers.CommonLexer.fromNothing(CSSLexer2);
          }
        },
        {
          key: "fromRules",
          value: function fromRules(rules) {
            return _occamLexers.CommonLexer.fromRules(CSSLexer2, rules);
          }
        },
        {
          key: "fromEntries",
          value: function fromEntries(entries) {
            return _occamLexers.CommonLexer.fromEntries(CSSLexer2, entries);
          }
        }
      ]);
      return CSSLexer2;
    }(_occamLexers.CommonLexer);
    _defineProperty(CSSLexer, "entries", _entries.default);
    _defineProperty(CSSLexer, "EndOfLineToken", _occamLexers.EndOfLineNonSignificantToken);
    _defineProperty(CSSLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
    _defineProperty(CSSLexer, "EndOfLineCommentToken", null);
    _defineProperty(CSSLexer, "RegularExpressionToken", null);
    _defineProperty(CSSLexer, "SingleLineCommentToken", null);
    _defineProperty(CSSLexer, "EndOfMultiLineCommentToken", null);
    _defineProperty(CSSLexer, "StartOfMultiLineCommentToken", null);
    _defineProperty(CSSLexer, "MiddleOfMultiLineCommentToken", null);
    _defineProperty(CSSLexer, "SinglyQuotedStringLiteralToken", null);
    _defineProperty(CSSLexer, "DoublyQuotedStringLiteralToken", _occamLexers.DoublyQuotedStringLiteralToken);
    exports.default = CSSLexer;
  });

  // node_modules/occam-parsers/lib/bnf/bnf.js
  var require_bnf = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var bnf = '\n\n      document                 ::=  ( rule | error )+ ;\n\n      rule                     ::=  name ambiguousModifier? "::=" definitions ";" ;\n\n      name                     ::=  [name] ;\n\n      definitions              ::=  definition ( "|" definition )* ;\n\n      definition               ::=  part+ ;\n \n      part                     ::=  nonTerminalPart quantifier*\n\n                                 |  terminalPart quantifier*\n                              \n                                 |  noWhitespacePart\n\n                                 ;\n\n      nonTerminalPart          ::=  choiceOfParts\n\n                                 |  sequenceOfParts\n\n                                 |  ruleName lookAheadModifier?\n\n                                 ;\n\n      terminalPart             ::=  significantTokenType\n  \n                                 |  regularExpression\n \n                                 |  terminalSymbol\n  \n                                 |  endOfLine\n  \n                                 |  wildcard\n  \n                                 ;\n                              \n      noWhitespacePart         ::=  "<NO_WHITESPACE>" ;                              \n\n      choiceOfParts            ::=  "(" part ( "|" part )+ ")" ;\n\n      sequenceOfParts          ::=  "(" part part+ ")" ;\n\n      ruleName                 ::=  [name] ;\n\n      significantTokenType     ::=  [type] ;\n\n      regularExpression        ::=  [regular-expression] ;\n\n      terminalSymbol           ::=  [string-literal] ;\n\n      endOfLine                ::=  "<END_OF_LINE>" ;\n\n      wildcard                 ::=  "." ;\n\n      quantifier               ::=  optionalQuantifier\n \n                                 |  oneOrMoreQuantifier\n  \n                                 |  zeroOrMoreQuantifier\n  \n                                 ;\n\n      ambiguousModifier        ::=  <NO_WHITESPACE>"!" ;\n\n      lookAheadModifier        ::=  <NO_WHITESPACE>"..." ;\n\n      optionalQuantifier       ::=  <NO_WHITESPACE>"?" ;\n\n      oneOrMoreQuantifier      ::=  <NO_WHITESPACE>"+" ;\n\n      zeroOrMoreQuantifier     ::=  <NO_WHITESPACE>"*" ;\n\n      error                    ::=  . ;\n\n';
    var _default = bnf;
    exports.default = _default;
  });

  // node_modules/occam-parsers/lib/constants.js
  var require_constants4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EMPTY_STRING = void 0;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
  });

  // node_modules/occam-parsers/lib/utilities/string.js
  var require_string = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.paddingFromPaddingLength = paddingFromPaddingLength;
    var _necessary = require_browser();
    var _constants = require_constants4();
    var SPACE_CHARACTER = _necessary.characters.SPACE_CHARACTER;
    function paddingFromPaddingLength(paddingLength) {
      var padding = _constants.EMPTY_STRING;
      for (var position = 0; position < paddingLength; position++) {
        padding += SPACE_CHARACTER;
      }
      return padding;
    }
  });

  // node_modules/occam-parsers/lib/rule.js
  var require_rule2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _constants = require_constants4();
    var _string = require_string();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var exclamationMark = _occamLexers.specialSymbols.exclamationMark;
    var Rule = /* @__PURE__ */ function() {
      function Rule2(name, ambiguous, definitions, NonTerminalNode) {
        _classCallCheck(this, Rule2);
        this.name = name;
        this.ambiguous = ambiguous;
        this.definitions = definitions;
        this.NonTerminalNode = NonTerminalNode;
      }
      _createClass(Rule2, [
        {
          key: "getName",
          value: function getName() {
            return this.name;
          }
        },
        {
          key: "isAmbiguous",
          value: function isAmbiguous() {
            return this.ambiguous;
          }
        },
        {
          key: "getDefinitions",
          value: function getDefinitions() {
            return this.definitions;
          }
        },
        {
          key: "getNonTerminalNode",
          value: function getNonTerminalNode() {
            return this.NonTerminalNode;
          }
        },
        {
          key: "setName",
          value: function setName(name) {
            this.name = name;
          }
        },
        {
          key: "setAmbiguous",
          value: function setAmbiguous(ambiguous) {
            this.ambiguous = ambiguous;
          }
        },
        {
          key: "setDefinitions",
          value: function setDefinitions(definitions) {
            this.definitions = definitions;
          }
        },
        {
          key: "setNonTerminalNode",
          value: function setNonTerminalNode(NonTerminalNode) {
            this.NonTerminalNode = NonTerminalNode;
          }
        },
        {
          key: "addDefinition",
          value: function addDefinition(definition, position) {
            var definitionsIncludesDefinition = this.definitions.includes(definition);
            if (!definitionsIncludesDefinition) {
              if (position === void 0) {
                var definitionsLength = this.definitions.length;
                position = definitionsLength;
              }
              var start = position, deleteCount = 0;
              this.definitions.splice(start, deleteCount, definition);
            }
          }
        },
        {
          key: "removeDefinition",
          value: function removeDefinition(definition) {
            var definitionsIncludesDefinition = this.definitions.includes(definition);
            if (definitionsIncludesDefinition) {
              var definitionIndex = this.definitions.indexOf(definition), start = definitionIndex, deleteCount = 1;
              this.definitions.splice(start, deleteCount);
            }
          }
        },
        {
          key: "replaceDefinition",
          value: function replaceDefinition(oldDefinition, newDefinition) {
            var oldDefinitionIndex = this.definitions.indexOf(oldDefinition);
            if (oldDefinitionIndex > -1) {
              var start = oldDefinitionIndex, deleteCount = 1;
              this.definitions.splice(start, deleteCount, newDefinition);
            }
          }
        },
        {
          key: "parse",
          value: function parse(state, callback) {
            var _this = this;
            var ruleNode = null;
            state.increaseDepth();
            var tooDeep = state.isTooDeep();
            if (tooDeep) {
              throw new Error('The parse tree is too deep at rule "'.concat(this.name, '".'));
            }
            var parsed, definitionNodes;
            this.definitions.some(function(definition) {
              definitionNodes = [];
              parsed = _this.parseDefinition(definition, definitionNodes, state, callback);
              if (parsed) {
                return true;
              }
            });
            if (parsed) {
              var ruleName = this.name, childNodes = definitionNodes, nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);
              ruleNode = nonTerminalNode;
            }
            state.decreaseDepth();
            return ruleNode;
          }
        },
        {
          key: "parseDefinition",
          value: function parseDefinition(definition, nodes, state, callback) {
            var parsed;
            var savedIndex = state.getSavedIndex();
            parsed = definition.parse(nodes, state, callback);
            if (!parsed) {
              state.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString(maximumRuleNameLength) {
            var multiLine = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            var definitionsLength = this.definitions.length;
            multiLine = multiLine && definitionsLength > 1;
            var maximumPadding = (0, _string).paddingFromPaddingLength(maximumRuleNameLength), definitionsString1 = this.definitions.reduce(function(definitionsString, definition) {
              var definitionString = definition.asString();
              if (definitionsString === _constants.EMPTY_STRING) {
                definitionsString = definitionString;
              } else {
                definitionsString = multiLine ? "".concat(definitionsString, "\n\n").concat(maximumPadding, "   | ").concat(definitionString) : "".concat(definitionsString, " | ").concat(definitionString);
              }
              return definitionsString;
            }, _constants.EMPTY_STRING), ruleName = this.name, ruleNameLength = ruleName.length, ambiguousString = this.ambiguous ? exclamationMark : _constants.EMPTY_STRING, ambiguousStringLength = ambiguousString.length, paddingLength = maximumRuleNameLength - ruleNameLength - ambiguousStringLength, padding = (0, _string).paddingFromPaddingLength(paddingLength);
            var semicolonString = multiLine ? "\n\n".concat(maximumPadding, "   ;") : " ;", string = "\n\n".concat(this.name).concat(ambiguousString).concat(padding, " ::= ").concat(definitionsString1).concat(semicolonString);
            return string;
          }
        }
      ], [
        {
          key: "fromRule",
          value: function fromRule(Class, rule) {
            if (rule === void 0) {
              rule = Class;
              Class = Rule2;
            }
            var name = rule.getName(), ambiguous = rule.isAmbiguous(), definitions = rule.getDefinitions(), NonTerminalNode = rule.getNonTerminalNode();
            rule = new Class(name, ambiguous, definitions, NonTerminalNode);
            return rule;
          }
        }
      ]);
      return Rule2;
    }();
    exports.default = Rule;
  });

  // node_modules/occam-parsers/lib/defaults.js
  var require_defaults = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DEFAULT_MAXIMUM_DEPTH = void 0;
    var DEFAULT_MAXIMUM_DEPTH = 99;
    exports.DEFAULT_MAXIMUM_DEPTH = DEFAULT_MAXIMUM_DEPTH;
  });

  // node_modules/occam-parsers/lib/state.js
  var require_state2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _defaults = require_defaults();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var State = /* @__PURE__ */ function() {
      function State2(ruleMap, tokens, index, depth, maximumDepth) {
        _classCallCheck(this, State2);
        this.ruleMap = ruleMap;
        this.tokens = tokens;
        this.index = index;
        this.depth = depth;
        this.maximumDepth = maximumDepth;
      }
      _createClass(State2, [
        {
          key: "getRuleMap",
          value: function getRuleMap() {
            return this.ruleMap;
          }
        },
        {
          key: "getTokens",
          value: function getTokens() {
            return this.tokens;
          }
        },
        {
          key: "getIndex",
          value: function getIndex() {
            return this.index;
          }
        },
        {
          key: "getDepth",
          value: function getDepth() {
            return this.depth;
          }
        },
        {
          key: "getMaximumDepth",
          value: function getMaximumDepth() {
            return this.maximumDepth;
          }
        },
        {
          key: "getSavedIndex",
          value: function getSavedIndex() {
            var savedIndex = this.index;
            return savedIndex;
          }
        },
        {
          key: "getNextToken",
          value: function getNextToken() {
            var nextToken = null;
            var tokensLength = this.tokens.length;
            if (this.index < tokensLength) {
              nextToken = this.tokens[this.index++];
            }
            return nextToken;
          }
        },
        {
          key: "getNextSignificantToken",
          value: function getNextSignificantToken() {
            var nextSignificantToken = null;
            var tokensLength = this.tokens.length;
            while (this.index < tokensLength) {
              var token = this.tokens[this.index++], tokenSignificant = token.isSignificant();
              if (tokenSignificant) {
                var significantToken = token;
                nextSignificantToken = significantToken;
                break;
              }
            }
            return nextSignificantToken;
          }
        },
        {
          key: "isNextTokenWhitespaceToken",
          value: function isNextTokenWhitespaceToken() {
            var nextTokenWhitespaceToken = false;
            var tokensLength = this.tokens.length;
            if (this.index < tokensLength) {
              var nextToken = this.tokens[this.index];
              nextTokenWhitespaceToken = nextToken.isWhitespaceToken();
            }
            return nextTokenWhitespaceToken;
          }
        },
        {
          key: "isTooDeep",
          value: function isTooDeep() {
            var tooDeep = this.depth > this.maximumDepth;
            return tooDeep;
          }
        },
        {
          key: "backtrack",
          value: function backtrack(savedIndex) {
            this.index = savedIndex;
          }
        },
        {
          key: "setIndex",
          value: function setIndex(index) {
            this.index = index;
          }
        },
        {
          key: "increaseDepth",
          value: function increaseDepth() {
            this.depth++;
          }
        },
        {
          key: "decreaseDepth",
          value: function decreaseDepth() {
            this.depth--;
          }
        }
      ], [
        {
          key: "fromTokensAndRuleMap",
          value: function fromTokensAndRuleMap(tokens, ruleMap) {
            var index = 0, depth = 0, maximumDepth = _defaults.DEFAULT_MAXIMUM_DEPTH, state = new State2(ruleMap, tokens, index, depth, maximumDepth);
            return state;
          }
        }
      ]);
      return State2;
    }();
    exports.default = State;
  });

  // node_modules/occam-parsers/lib/utilities/array.js
  var require_array3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.even = even;
    exports.allButFirstAndLast = allButFirstAndLast;
    exports.backwardsSome = exports.forwardsSome = exports.filter = exports.push = exports.last = exports.fourth = exports.third = exports.second = exports.first = void 0;
    var _necessary = require_browser();
    var first = _necessary.arrayUtilities.first;
    var second = _necessary.arrayUtilities.second;
    var third = _necessary.arrayUtilities.third;
    var fourth = _necessary.arrayUtilities.fourth;
    var last = _necessary.arrayUtilities.last;
    var push = _necessary.arrayUtilities.push;
    var filter = _necessary.arrayUtilities.filter;
    var forwardsSome = _necessary.arrayUtilities.forwardsSome;
    var backwardsSome = _necessary.arrayUtilities.backwardsSome;
    exports.first = first;
    exports.second = second;
    exports.third = third;
    exports.fourth = fourth;
    exports.last = last;
    exports.push = push;
    exports.filter = filter;
    exports.forwardsSome = forwardsSome;
    exports.backwardsSome = backwardsSome;
    function even(array) {
      return array.filter(function(entry, index) {
        return isEven(index);
      });
    }
    function allButFirstAndLast(array) {
      array = array.slice();
      array.shift();
      array.pop();
      return array;
    }
    function isEven(index) {
      var even1 = Math.floor(index / 2) === index / 2;
      return even1;
    }
  });

  // node_modules/occam-parsers/lib/parseTree.js
  var require_parseTree = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _array = require_array3();
    var _constants = require_constants4();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var NEW_LINE_CHARACTER = _necessary.characters.NEW_LINE_CHARACTER;
    var SPACE_CHARACTER = _necessary.characters.SPACE_CHARACTER;
    var ParseTree = /* @__PURE__ */ function() {
      function ParseTree2(lines) {
        _classCallCheck(this, ParseTree2);
        this.lines = lines;
      }
      _createClass(ParseTree2, [
        {
          key: "clone",
          value: function clone() {
            var lines = this.lines.slice(), parseTree = new ParseTree2(lines);
            return parseTree;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            var width;
            var linesLength = this.lines.length;
            if (linesLength === 0) {
              width = 0;
            } else {
              var lastLine = (0, _array).last(this.lines), lastLineLength = lastLine.length;
              width = lastLineLength;
            }
            return width;
          }
        },
        {
          key: "getDepth",
          value: function getDepth() {
            var linesLength = this.lines.length, depth = linesLength;
            return depth;
          }
        },
        {
          key: "forEachLine",
          value: function forEachLine(callback) {
            this.lines.forEach(callback);
          }
        },
        {
          key: "appendToTop",
          value: function appendToTop(parseTree) {
            var _this = this;
            parseTree.forEachLine(function(line) {
              _this.lines.unshift(line);
            });
          }
        },
        {
          key: "appendToLeft",
          value: function appendToLeft(parseTree) {
            var _this = this;
            parseTree.forEachLine(function(line, index) {
              _this.lines[index] = line + _this.lines[index];
            });
          }
        },
        {
          key: "appendToRight",
          value: function appendToRight(parseTree) {
            var _this = this;
            parseTree.forEachLine(function(line, index) {
              _this.lines[index] = _this.lines[index] + line;
            });
          }
        },
        {
          key: "appendToBottom",
          value: function appendToBottom(parseTree) {
            var _this = this;
            parseTree.forEachLine(function(line) {
              _this.lines.push(line);
            });
          }
        },
        {
          key: "addTopMargin",
          value: function addTopMargin(topMarginDepth) {
            var width = this.getWidth(), topMarginWidth = width, topMarginString = marginStringFromMarginWidth(topMarginWidth);
            for (var index = 0; index < topMarginDepth; index++) {
              this.lines.unshift(topMarginString);
            }
          }
        },
        {
          key: "addLeftMargin",
          value: function addLeftMargin(leftMarginWidth) {
            var leftMarginString = marginStringFromMarginWidth(leftMarginWidth), linesLength = this.lines.length;
            for (var index = 0; index < linesLength; index++) {
              this.lines[index] = leftMarginString + this.lines[index];
            }
          }
        },
        {
          key: "addRightMargin",
          value: function addRightMargin(rightMarginWidth) {
            var rightMarginString = marginStringFromMarginWidth(rightMarginWidth), linesLength = this.lines.length;
            for (var index = 0; index < linesLength; index++) {
              this.lines[index] = this.lines[index] + rightMarginString;
            }
          }
        },
        {
          key: "addBottomMargin",
          value: function addBottomMargin(bottomMarginDepth) {
            var width = this.getWidth(), bottomMarginWidth = width, bottomMarginString = marginStringFromMarginWidth(bottomMarginWidth);
            for (var index = 0; index < bottomMarginDepth; index++) {
              this.lines.push(bottomMarginString);
            }
          }
        },
        {
          key: "popLine",
          value: function popLine() {
            return this.lines.pop();
          }
        },
        {
          key: "shiftLine",
          value: function shiftLine() {
            return this.lines.shift();
          }
        },
        {
          key: "pushLine",
          value: function pushLine(line) {
            this.lines.push(line);
          }
        },
        {
          key: "unshiftLine",
          value: function unshiftLine(line) {
            this.lines.unshift(line);
          }
        },
        {
          key: "asString",
          value: function asString() {
            var string1 = this.lines.reduce(function(string, line) {
              string += line + NEW_LINE_CHARACTER;
              return string;
            }, _constants.EMPTY_STRING);
            return string1;
          }
        }
      ]);
      return ParseTree2;
    }();
    exports.default = ParseTree;
    function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
      spaceCharacter = spaceCharacter || SPACE_CHARACTER;
      var marginString = _constants.EMPTY_STRING;
      for (var index = 0; index < marginWidth; index++) {
        marginString += spaceCharacter;
      }
      return marginString;
    }
  });

  // node_modules/occam-parsers/lib/parseTree/verticalBranch.js
  var require_verticalBranch = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _parseTree = _interopRequireDefault2(require_parseTree());
    var _constants = require_constants4();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var BAR_CHARACTER = _necessary.characters.BAR_CHARACTER;
    var VerticalBranchParseTree = /* @__PURE__ */ function(ParseTree) {
      _inherits(VerticalBranchParseTree2, ParseTree);
      var _super = _createSuper(VerticalBranchParseTree2);
      function VerticalBranchParseTree2(lines, verticalBranchPosition) {
        _classCallCheck(this, VerticalBranchParseTree2);
        var _this;
        _this = _super.call(this, lines);
        _this.verticalBranchPosition = verticalBranchPosition;
        return _this;
      }
      _createClass(VerticalBranchParseTree2, [
        {
          key: "getVerticalBranchPosition",
          value: function getVerticalBranchPosition() {
            return this.verticalBranchPosition;
          }
        },
        {
          key: "addLeftMargin",
          value: function addLeftMargin(leftMarginWidth) {
            _get(_getPrototypeOf(VerticalBranchParseTree2.prototype), "addLeftMargin", this).call(this, leftMarginWidth);
            this.verticalBranchPosition += leftMarginWidth;
          }
        }
      ], [
        {
          key: "fromWidth",
          value: function fromWidth(width) {
            var string = BAR_CHARACTER, verticalBranchPosition = 0, verticalBranchParseTree = VerticalBranchParseTree2.fromStringAndVerticalBranchPosition(VerticalBranchParseTree2, string, verticalBranchPosition), leftMarginWidth = Math.floor(width / 2), rightMarginWidth = width - leftMarginWidth - 1;
            verticalBranchParseTree.addLeftMargin(leftMarginWidth);
            verticalBranchParseTree.addRightMargin(rightMarginWidth);
            return verticalBranchParseTree;
          }
        },
        {
          key: "fromDepthAndVerticalBranchPosition",
          value: function fromDepthAndVerticalBranchPosition(Class, depth, verticalBranchPosition) {
            var lines = linesFromDepth(depth), args = [
              null,
              lines,
              verticalBranchPosition
            ], verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args))();
            return verticalBranchParseTree;
          }
        },
        {
          key: "fromStringAndVerticalBranchPosition",
          value: function fromStringAndVerticalBranchPosition(Class, string, verticalBranchPosition) {
            if (verticalBranchPosition === void 0) {
              verticalBranchPosition = string;
              string = Class;
              Class = _parseTree.default;
            }
            var line = string, lines = [
              line
            ], args = [
              null,
              lines,
              verticalBranchPosition
            ], verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args))();
            return verticalBranchParseTree;
          }
        }
      ]);
      return VerticalBranchParseTree2;
    }(_parseTree.default);
    exports.default = VerticalBranchParseTree;
    function linesFromDepth(depth) {
      var lines = [];
      var index = 0;
      while (index < depth) {
        lines[index++] = _constants.EMPTY_STRING;
      }
      return lines;
    }
  });

  // node_modules/occam-parsers/lib/parseTree/ruleName.js
  var require_ruleName = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var RuleNameParseTree = /* @__PURE__ */ function(VerticalBranchParseTree) {
      _inherits(RuleNameParseTree2, VerticalBranchParseTree);
      var _super = _createSuper(RuleNameParseTree2);
      function RuleNameParseTree2() {
        _classCallCheck(this, RuleNameParseTree2);
        return _super.apply(this, arguments);
      }
      _createClass(RuleNameParseTree2, null, [
        {
          key: "fromNonTerminalNodeAndTokens",
          value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
            var ruleName = nonTerminalNode.getRuleName(), tokenIndexes = tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens), string = "".concat(ruleName).concat(tokenIndexes), stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), ruleNameParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(RuleNameParseTree2, string, verticalBranchPosition);
            ruleNameParseTree.appendToTop(verticalBranchParseTree);
            return ruleNameParseTree;
          }
        }
      ]);
      return RuleNameParseTree2;
    }(_verticalBranch.default);
    exports.default = RuleNameParseTree;
    function tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
      var firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), tokenIndexes = firstSignificantTokenIndex !== lastSignificantTokenIndex ? "(".concat(firstSignificantTokenIndex, "-").concat(lastSignificantTokenIndex, ")") : "(".concat(firstSignificantTokenIndex, ")");
      return tokenIndexes;
    }
  });

  // node_modules/occam-parsers/lib/parseTree/horizontalBranch.js
  var require_horizontalBranch = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _parseTree = _interopRequireDefault2(require_parseTree());
    var _constants = require_constants4();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var DASH_CHARACTER = _necessary.characters.DASH_CHARACTER;
    var HorizontalBranchParseTree = /* @__PURE__ */ function(ParseTree) {
      _inherits(HorizontalBranchParseTree2, ParseTree);
      var _super = _createSuper(HorizontalBranchParseTree2);
      function HorizontalBranchParseTree2() {
        _classCallCheck(this, HorizontalBranchParseTree2);
        return _super.apply(this, arguments);
      }
      _createClass(HorizontalBranchParseTree2, null, [
        {
          key: "fromWidth",
          value: function fromWidth(width) {
            var string = stringFromCharactersWidth(width, DASH_CHARACTER), line = string, lines = [
              line
            ], horizontalBranchParseTree = new HorizontalBranchParseTree2(lines);
            return horizontalBranchParseTree;
          }
        }
      ]);
      return HorizontalBranchParseTree2;
    }(_parseTree.default);
    exports.default = HorizontalBranchParseTree;
    function stringFromCharactersWidth(charactersWidth, character) {
      var string = _constants.EMPTY_STRING;
      for (var index = 0; index < charactersWidth; index++) {
        string += character;
      }
      return string;
    }
  });

  // node_modules/occam-parsers/lib/parseTree/childNodes.js
  var require_childNodes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
    var _horizontalBranch = _interopRequireDefault2(require_horizontalBranch());
    var _array = require_array3();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var ChildNodesParseTree = /* @__PURE__ */ function(VerticalBranchParseTree) {
      _inherits(ChildNodesParseTree2, VerticalBranchParseTree);
      var _super = _createSuper(ChildNodesParseTree2);
      function ChildNodesParseTree2() {
        _classCallCheck(this, ChildNodesParseTree2);
        return _super.apply(this, arguments);
      }
      _createClass(ChildNodesParseTree2, null, [
        {
          key: "fromChildNodesAndTokens",
          value: function fromChildNodesAndTokens(childNodes, tokens) {
            var childNodesParseTree;
            var childNodeParseTrees1 = childNodes.reduce(function(childNodeParseTrees, childNode) {
              var childNodeParseTree = childNode.asParseTree(tokens);
              childNodeParseTrees.push(childNodeParseTree);
              return childNodeParseTrees;
            }, []), childNodeParseTreesLength = childNodeParseTrees1.length;
            if (childNodeParseTreesLength === 1) {
              var firstChildNodeParseTree = (0, _array).first(childNodeParseTrees1);
              childNodesParseTree = firstChildNodeParseTree;
            } else {
              var firstVerticalBranchPosition = void 0, lastVerticalBranchPosition = 0, childNodeParseTreesWidth = 0, childNodeParseTreesDepth = 0;
              childNodeParseTrees1.forEach(function(childNodeParseTree, index) {
                var childNodeParseTreeWidth = childNodeParseTree.getWidth(), childNodeParseTreeDepth = childNodeParseTree.getDepth();
                if (index === 0) {
                  var firstChildNodeParseTree2 = childNodeParseTree, firstChildNodeParseTreeVerticalBranchPosition = firstChildNodeParseTree2.getVerticalBranchPosition();
                  firstVerticalBranchPosition = firstChildNodeParseTreeVerticalBranchPosition;
                }
                if (index === childNodeParseTreesLength - 1) {
                  var lastChildNodeParseTree = childNodeParseTree, lastChildNodeParseTreeVerticalBranchPosition = lastChildNodeParseTree.getVerticalBranchPosition();
                  lastVerticalBranchPosition += lastChildNodeParseTreeVerticalBranchPosition;
                }
                if (index < childNodeParseTreesLength - 1) {
                  lastVerticalBranchPosition += childNodeParseTreeWidth;
                  lastVerticalBranchPosition += 1;
                  childNodeParseTreesWidth += 1;
                }
                childNodeParseTreesWidth += childNodeParseTreeWidth;
                childNodeParseTreesDepth = Math.max(childNodeParseTreesDepth, childNodeParseTreeDepth);
              });
              var width = lastVerticalBranchPosition - firstVerticalBranchPosition + 1, verticalBranchParseTree = _verticalBranch.default.fromWidth(width), horizontalBranchParseTree = _horizontalBranch.default.fromWidth(width), leftMarginWidth = firstVerticalBranchPosition, rightMarginWidth1 = childNodeParseTreesWidth - width - leftMarginWidth;
              verticalBranchParseTree.addLeftMargin(leftMarginWidth);
              verticalBranchParseTree.addRightMargin(rightMarginWidth1);
              horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
              horizontalBranchParseTree.addRightMargin(rightMarginWidth1);
              var verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition();
              childNodesParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(ChildNodesParseTree2, childNodeParseTreesDepth, verticalBranchPosition);
              childNodeParseTrees1.forEach(function(childNodeParseTree, index) {
                var childNodeParseTreeDepth = childNodeParseTree.getDepth(), clonedChildNodeParseTree = childNodeParseTree.clone();
                if (index < childNodeParseTreesLength - 1) {
                  var rightMarginWidth = 1;
                  clonedChildNodeParseTree.addRightMargin(rightMarginWidth);
                }
                if (childNodeParseTreeDepth < childNodeParseTreesDepth) {
                  var bottomMarginDepth = childNodeParseTreesDepth - childNodeParseTreeDepth;
                  clonedChildNodeParseTree.addBottomMargin(bottomMarginDepth);
                }
                childNodesParseTree.appendToRight(clonedChildNodeParseTree);
              });
              childNodesParseTree.appendToTop(horizontalBranchParseTree);
              childNodesParseTree.appendToTop(verticalBranchParseTree);
            }
            return childNodesParseTree;
          }
        }
      ]);
      return ChildNodesParseTree2;
    }(_verticalBranch.default);
    exports.default = ChildNodesParseTree;
  });

  // node_modules/occam-parsers/lib/parseTree/nonTerminalNode.js
  var require_nonTerminalNode = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _ruleName = _interopRequireDefault2(require_ruleName());
    var _childNodes = _interopRequireDefault2(require_childNodes());
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var NonTerminalNodeParseTree = /* @__PURE__ */ function(VerticalBranchParseTree) {
      _inherits(NonTerminalNodeParseTree2, VerticalBranchParseTree);
      var _super = _createSuper(NonTerminalNodeParseTree2);
      function NonTerminalNodeParseTree2() {
        _classCallCheck(this, NonTerminalNodeParseTree2);
        return _super.apply(this, arguments);
      }
      _createClass(NonTerminalNodeParseTree2, null, [
        {
          key: "fromNonTerminalNodeAndTokens",
          value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
            var childNodes = nonTerminalNode.getChildNodes(), ruleNameParseTree = _ruleName.default.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens), childNodesParseTree = _childNodes.default.fromChildNodesAndTokens(childNodes, tokens);
            var ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();
            var childNodesParseTreeVerticalBranchPosition = childNodesParseTree.getVerticalBranchPosition(), verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition - childNodesParseTreeVerticalBranchPosition;
            var leftMarginWidth = void 0;
            if (false) {
            } else if (verticalBranchPositionsDifference < 0) {
              leftMarginWidth = -verticalBranchPositionsDifference;
              ruleNameParseTree.addLeftMargin(leftMarginWidth);
            } else if (verticalBranchPositionsDifference > 0) {
              leftMarginWidth = +verticalBranchPositionsDifference;
              childNodesParseTree.addLeftMargin(leftMarginWidth);
            }
            var ruleNameParseTreeWidth = ruleNameParseTree.getWidth(), childNodesParseTreeWidth = childNodesParseTree.getWidth(), widthsDifference = ruleNameParseTreeWidth - childNodesParseTreeWidth;
            var rightMarginWidth = void 0;
            if (false) {
            } else if (widthsDifference < 0) {
              rightMarginWidth = -widthsDifference;
              ruleNameParseTree.addRightMargin(rightMarginWidth);
            } else if (widthsDifference > 0) {
              rightMarginWidth = +widthsDifference;
              childNodesParseTree.addRightMargin(rightMarginWidth);
            }
            ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();
            var ruleNameParseTreeDepth = ruleNameParseTree.getDepth(), nonTerminalNodeParseTreeDepth = ruleNameParseTreeDepth, verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, nonTerminalNodeParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(NonTerminalNodeParseTree2, nonTerminalNodeParseTreeDepth, verticalBranchPosition);
            nonTerminalNodeParseTree.appendToRight(ruleNameParseTree);
            nonTerminalNodeParseTree.appendToBottom(childNodesParseTree);
            return nonTerminalNodeParseTree;
          }
        }
      ]);
      return NonTerminalNodeParseTree2;
    }(_verticalBranch.default);
    exports.default = NonTerminalNodeParseTree;
  });

  // node_modules/occam-parsers/lib/node/nonTerminal.js
  var require_nonTerminal = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminalNode = _interopRequireDefault2(require_nonTerminalNode());
    var _array = require_array3();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var NonTerminalNode = /* @__PURE__ */ function() {
      function NonTerminalNode2(ruleName, childNodes) {
        _classCallCheck(this, NonTerminalNode2);
        this.ruleName = ruleName;
        this.childNodes = childNodes;
      }
      _createClass(NonTerminalNode2, [
        {
          key: "isTerminalNode",
          value: function isTerminalNode() {
            var terminalNode = false;
            return terminalNode;
          }
        },
        {
          key: "isNonTerminalNode",
          value: function isNonTerminalNode() {
            var nonTerminalNode = true;
            return nonTerminalNode;
          }
        },
        {
          key: "getRuleName",
          value: function getRuleName() {
            return this.ruleName;
          }
        },
        {
          key: "getChildNodes",
          value: function getChildNodes() {
            return this.childNodes;
          }
        },
        {
          key: "getFirstSignificantToken",
          value: function getFirstSignificantToken() {
            var firstSignificantToken = null;
            (0, _array).forwardsSome(this.childNodes, function(childNode) {
              firstSignificantToken = childNode.getFirstSignificantToken();
              if (firstSignificantToken !== null) {
                return true;
              }
            });
            return firstSignificantToken;
          }
        },
        {
          key: "getLastSignificantToken",
          value: function getLastSignificantToken() {
            var lastSignificantToken = null;
            (0, _array).backwardsSome(this.childNodes, function(childNode) {
              lastSignificantToken = childNode.getLastSignificantToken();
              if (lastSignificantToken !== null) {
                return true;
              }
            });
            return lastSignificantToken;
          }
        },
        {
          key: "setRuleName",
          value: function setRuleName(ruleName) {
            this.ruleName = ruleName;
          }
        },
        {
          key: "setChildNodes",
          value: function setChildNodes(childNodes) {
            this.childNodes = childNodes;
          }
        },
        {
          key: "asParseTree",
          value: function asParseTree(tokens) {
            var nonTerminalNode = this, nonTerminalNodeParseTree = _nonTerminalNode.default.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens), parseTree = nonTerminalNodeParseTree;
            return parseTree;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
            if (childNodes === void 0) {
              childNodes = ruleName;
              ruleName = Class;
              Class = NonTerminalNode2;
            }
            var childNodesLength = childNodes.length;
            if (childNodesLength === 0) {
              throw new Error("There are no child nodes at rule '".concat(ruleName, "'."));
            }
            var nonTerminalNode = new Class(ruleName, childNodes);
            return nonTerminalNode;
          }
        }
      ]);
      return NonTerminalNode2;
    }();
    exports.default = NonTerminalNode;
  });

  // node_modules/occam-parsers/lib/node/bnf/name.js
  var require_name2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _array = require_array3();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var NameBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(NameBNFNode2, NonTerminalNode);
      var _super = _createSuper(NameBNFNode2);
      function NameBNFNode2() {
        _classCallCheck(this, NameBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(NameBNFNode2, [
        {
          key: "getName",
          value: function getName() {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), name = terminalNodeContent;
            return name;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(NameBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return NameBNFNode2;
    }(_nonTerminal.default);
    exports.default = NameBNFNode;
  });

  // node_modules/occam-parsers/lib/utilities/part.js
  var require_part = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isPartRuleNamePartWithLookAhead = isPartRuleNamePartWithLookAhead;
    function isPartRuleNamePartWithLookAhead(part) {
      var partRuleNamePartWithLookAhead = false;
      var partRuleNamePart = isPartRuleNamePart(part);
      if (partRuleNamePart) {
        var ruleNamePart = part, lookAhead = ruleNamePart.isLookAhead();
        if (lookAhead) {
          partRuleNamePartWithLookAhead = true;
        }
      }
      return partRuleNamePartWithLookAhead;
    }
    function isPartRuleNamePart(part) {
      var partRuleNamePart = false;
      var partTerminalPart = part.isTerminalPart(), partNonTerminalPart = !partTerminalPart;
      if (partNonTerminalPart) {
        var nonTerminalPart = part, nonTerminalPartRuleNamePart = nonTerminalPart.isRuleNamePart();
        partRuleNamePart = nonTerminalPartRuleNamePart;
      }
      return partRuleNamePart;
    }
  });

  // node_modules/occam-parsers/lib/utilities/lookAhead.js
  var require_lookAhead = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseParts = parseParts;
    var _array = require_array3();
    var _part = require_part();
    function parseParts(parts, nodes, index, state, callback) {
      var parsed;
      var partsLength = parts.length;
      if (index === partsLength) {
        parsed = callback !== null ? callback() : true;
      } else {
        var part = parts[index];
        parsed = parsePartOfParts(part, parts, nodes, index, state, callback);
      }
      return parsed;
    }
    function parsePartOfParts(part, parts, nodes, index, state, callback) {
      var parsed;
      if (callback !== null) {
        var partsNodes = [];
        index++;
        parsed = part.parse(nodes, state, function() {
          return parseParts(parts, partsNodes, index, state, callback);
        });
        if (parsed) {
          (0, _array).push(nodes, partsNodes);
        }
      } else {
        var partRuleNamePartWithLookAhead = (0, _part).isPartRuleNamePartWithLookAhead(part);
        if (partRuleNamePartWithLookAhead) {
          var ruleNamePart = part, partsNodes1 = [];
          index++;
          parsed = ruleNamePart.parse(nodes, state, function() {
            return parseParts(parts, partsNodes1, index, state, callback);
          });
          if (parsed) {
            (0, _array).push(nodes, partsNodes1);
          }
        } else {
          parsed = part.parse(nodes, state, callback);
          if (parsed) {
            index++;
            parsed = parseParts(parts, nodes, index, state, callback);
          }
        }
      }
      return parsed;
    }
  });

  // node_modules/occam-parsers/lib/definition.js
  var require_definition = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _array = require_array3();
    var _lookAhead = require_lookAhead();
    var _constants = require_constants4();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Definition = /* @__PURE__ */ function() {
      function Definition2(parts) {
        _classCallCheck(this, Definition2);
        this.parts = parts;
      }
      _createClass(Definition2, [
        {
          key: "getParts",
          value: function getParts() {
            return this.parts;
          }
        },
        {
          key: "getFirstPart",
          value: function getFirstPart() {
            var firstPart = (0, _array).first(this.parts);
            return firstPart;
          }
        },
        {
          key: "getPartsLength",
          value: function getPartsLength() {
            var partsLength = this.parts.length;
            return partsLength;
          }
        },
        {
          key: "addPart",
          value: function addPart(part) {
            this.parts.push(part);
          }
        },
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            var index = 0;
            parsed = (0, _lookAhead).parseParts(this.parts, nodes, index, state, callback);
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var partsString1 = this.parts.reduce(function(partsString, part) {
              var partString = part.asString();
              if (partsString === _constants.EMPTY_STRING) {
                partsString = partString;
              } else {
                partsString = "".concat(partsString, " ").concat(partString);
              }
              return partsString;
            }, _constants.EMPTY_STRING), string = partsString1;
            return string;
          }
        }
      ]);
      return Definition2;
    }();
    exports.default = Definition;
  });

  // node_modules/occam-parsers/lib/part/terminal.js
  var require_terminal = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    var TerminalPart = /* @__PURE__ */ function() {
      function TerminalPart2() {
        _classCallCheck(this, TerminalPart2);
      }
      _createClass(TerminalPart2, [
        {
          key: "isNonTerminalPart",
          value: function isNonTerminalPart() {
            var nonTerminalPart = false;
            return nonTerminalPart;
          }
        },
        {
          key: "isTerminalPart",
          value: function isTerminalPart() {
            var terminalPart = true;
            return terminalPart;
          }
        },
        {
          key: "isNoWhitespacePart",
          value: function isNoWhitespacePart() {
            var noWhitespacePart = false;
            return noWhitespacePart;
          }
        },
        {
          key: "clone",
          value: function clone(Part) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              remainingArguments[_key - 1] = arguments[_key];
            }
            return _construct(Part, _toConsumableArray(remainingArguments));
          }
        }
      ]);
      return TerminalPart2;
    }();
    exports.default = TerminalPart;
  });

  // node_modules/occam-parsers/lib/parseTree/terminalNode.js
  var require_terminalNode = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var TerminalNodeParseTree = /* @__PURE__ */ function(VerticalBranchParseTree) {
      _inherits(TerminalNodeParseTree2, VerticalBranchParseTree);
      var _super = _createSuper(TerminalNodeParseTree2);
      function TerminalNodeParseTree2() {
        _classCallCheck(this, TerminalNodeParseTree2);
        return _super.apply(this, arguments);
      }
      _createClass(TerminalNodeParseTree2, null, [
        {
          key: "fromTerminalNodeAndTokens",
          value: function fromTerminalNodeAndTokens(terminalNode, tokens) {
            var significantToken = terminalNode.getSignificantToken(), content = terminalNode.getContent(), type = significantToken.getType(), tokenIndex = tokens.indexOf(significantToken), string = "".concat(content, "[").concat(type, "](").concat(tokenIndex, ")"), stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(TerminalNodeParseTree2, string, verticalBranchPosition);
            terminalNodeParseTree.appendToTop(verticalBranchParseTree);
            return terminalNodeParseTree;
          }
        }
      ]);
      return TerminalNodeParseTree2;
    }(_verticalBranch.default);
    exports.default = TerminalNodeParseTree;
  });

  // node_modules/occam-parsers/lib/node/terminal.js
  var require_terminal2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _terminalNode = _interopRequireDefault2(require_terminalNode());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TerminalNode = /* @__PURE__ */ function() {
      function TerminalNode2(significantToken) {
        _classCallCheck(this, TerminalNode2);
        this.significantToken = significantToken;
      }
      _createClass(TerminalNode2, [
        {
          key: "getSignificantToken",
          value: function getSignificantToken() {
            return this.significantToken;
          }
        },
        {
          key: "getFirstSignificantToken",
          value: function getFirstSignificantToken() {
            var firstSignificantToken = this.significantToken;
            return firstSignificantToken;
          }
        },
        {
          key: "getLastSignificantToken",
          value: function getLastSignificantToken() {
            var lastSignificantToken = this.significantToken;
            return lastSignificantToken;
          }
        },
        {
          key: "isNoWhitespaceNode",
          value: function isNoWhitespaceNode() {
            var noWhitespaceNode = false;
            return noWhitespaceNode;
          }
        },
        {
          key: "isTerminalNode",
          value: function isTerminalNode() {
            var terminalNode = true;
            return terminalNode;
          }
        },
        {
          key: "isNonTerminalNode",
          value: function isNonTerminalNode() {
            var nonTerminalNode = false;
            return nonTerminalNode;
          }
        },
        {
          key: "getType",
          value: function getType() {
            return this.significantToken.getType();
          }
        },
        {
          key: "getContent",
          value: function getContent() {
            return this.significantToken.getContent();
          }
        },
        {
          key: "setSignificantToken",
          value: function setSignificantToken(significantToken) {
            this.significantToken = significantToken;
          }
        },
        {
          key: "asParseTree",
          value: function asParseTree(tokens) {
            var terminalNode = this, terminalNodeParseTree = _terminalNode.default.fromTerminalNodeAndTokens(terminalNode, tokens), parseTree = terminalNodeParseTree;
            return parseTree;
          }
        }
      ], [
        {
          key: "fromSignificantToken",
          value: function fromSignificantToken(Class, significantToken) {
            if (significantToken === void 0) {
              significantToken = Class;
              Class = TerminalNode2;
            }
            var terminalNode = new Class(significantToken);
            return terminalNode;
          }
        }
      ]);
      return TerminalNode2;
    }();
    exports.default = TerminalNode;
  });

  // node_modules/occam-parsers/lib/part/terminal/significantTokenType.js
  var require_significantTokenType = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _terminal = _interopRequireDefault2(require_terminal());
    var _terminal1 = _interopRequireDefault2(require_terminal2());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var SignificantTokenTypePart = /* @__PURE__ */ function(TerminalPart) {
      _inherits(SignificantTokenTypePart2, TerminalPart);
      var _super = _createSuper(SignificantTokenTypePart2);
      function SignificantTokenTypePart2(significantTokenType) {
        _classCallCheck(this, SignificantTokenTypePart2);
        var _this;
        _this = _super.call(this);
        _this.significantTokenType = significantTokenType;
        return _this;
      }
      _createClass(SignificantTokenTypePart2, [
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            var terminalNode = null;
            var savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken;
            if (significantToken !== null) {
              var significantTokenType = significantToken.getType();
              if (significantTokenType === this.significantTokenType) {
                terminalNode = _terminal1.default.fromSignificantToken(significantToken);
              }
            }
            parsed = terminalNode !== null;
            if (parsed) {
              nodes.push(terminalNode);
              if (callback !== null) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            if (!parsed) {
              state.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var string = "[".concat(this.significantTokenType, "]");
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(SignificantTokenTypePart2.prototype), "clone", this).call(this, SignificantTokenTypePart2, this.significantTokenType);
          }
        }
      ]);
      return SignificantTokenTypePart2;
    }(_terminal.default);
    exports.default = SignificantTokenTypePart;
  });

  // node_modules/occam-parsers/lib/definition/name.js
  var require_name3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType());
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var nameType = _occamLexers.types.nameType;
    var NameDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(NameDefinition2, Definition);
      var _super = _createSuper(NameDefinition2);
      function NameDefinition2() {
        _classCallCheck(this, NameDefinition2);
        var nameSignificantTokenType = nameType, nameSignificantTokenTypePart = new _significantTokenType.default(nameSignificantTokenType), parts = [
          nameSignificantTokenTypePart
        ];
        return _super.call(this, parts);
      }
      return NameDefinition2;
    }(_definition.default);
    exports.default = NameDefinition;
  });

  // node_modules/occam-parsers/lib/ruleNames.js
  var require_ruleNames = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SignificantTokenTypeRuleName = exports.ZeroOrMoreQuantifierRuleName = exports.OneOrMoreQuantifierRuleName = exports.OptionalQuantifierRuleName = exports.RegularExpressionRuleName = exports.AmbiguousModifierRuleName = exports.LookAheadModifierRuleName = exports.NoWhitespacePartRuleName = exports.SequenceOfPartsRuleName = exports.NonTerminalPartRuleName = exports.TerminalSymbolRuleName = exports.ChoiceOfPartsRuleName = exports.TerminalPartRuleName = exports.DefinitionsRuleName = exports.QuantifierRuleName = exports.DefinitionRuleName = exports.EndOfLineRuleName = exports.WildcardRuleName = exports.DocumentRuleName = exports.RuleNameRuleName = exports.ErrorRuleName = exports.RuleRuleName = exports.PartRuleName = exports.NameRuleName = void 0;
    var NameRuleName = "name";
    exports.NameRuleName = NameRuleName;
    var PartRuleName = "part";
    exports.PartRuleName = PartRuleName;
    var RuleRuleName = "rule";
    exports.RuleRuleName = RuleRuleName;
    var ErrorRuleName = "error";
    exports.ErrorRuleName = ErrorRuleName;
    var RuleNameRuleName = "ruleName";
    exports.RuleNameRuleName = RuleNameRuleName;
    var DocumentRuleName = "document";
    exports.DocumentRuleName = DocumentRuleName;
    var WildcardRuleName = "wildcard";
    exports.WildcardRuleName = WildcardRuleName;
    var EndOfLineRuleName = "endOfLine";
    exports.EndOfLineRuleName = EndOfLineRuleName;
    var DefinitionRuleName = "definition";
    exports.DefinitionRuleName = DefinitionRuleName;
    var QuantifierRuleName = "quantifier";
    exports.QuantifierRuleName = QuantifierRuleName;
    var DefinitionsRuleName = "definitions";
    exports.DefinitionsRuleName = DefinitionsRuleName;
    var TerminalPartRuleName = "terminalPart";
    exports.TerminalPartRuleName = TerminalPartRuleName;
    var ChoiceOfPartsRuleName = "choiceOfParts";
    exports.ChoiceOfPartsRuleName = ChoiceOfPartsRuleName;
    var TerminalSymbolRuleName = "terminalSymbol";
    exports.TerminalSymbolRuleName = TerminalSymbolRuleName;
    var NonTerminalPartRuleName = "nonTerminalPart";
    exports.NonTerminalPartRuleName = NonTerminalPartRuleName;
    var SequenceOfPartsRuleName = "sequenceOfParts";
    exports.SequenceOfPartsRuleName = SequenceOfPartsRuleName;
    var NoWhitespacePartRuleName = "noWhitespacePart";
    exports.NoWhitespacePartRuleName = NoWhitespacePartRuleName;
    var LookAheadModifierRuleName = "lookAheadModifier";
    exports.LookAheadModifierRuleName = LookAheadModifierRuleName;
    var AmbiguousModifierRuleName = "AmbiguousModifier";
    exports.AmbiguousModifierRuleName = AmbiguousModifierRuleName;
    var RegularExpressionRuleName = "regularExpression";
    exports.RegularExpressionRuleName = RegularExpressionRuleName;
    var OptionalQuantifierRuleName = "optionalQuantifier";
    exports.OptionalQuantifierRuleName = OptionalQuantifierRuleName;
    var OneOrMoreQuantifierRuleName = "oneOrMoreQuantifier";
    exports.OneOrMoreQuantifierRuleName = OneOrMoreQuantifierRuleName;
    var ZeroOrMoreQuantifierRuleName = "zeroOrMoreQuantifier";
    exports.ZeroOrMoreQuantifierRuleName = ZeroOrMoreQuantifierRuleName;
    var SignificantTokenTypeRuleName = "significantTokenType";
    exports.SignificantTokenTypeRuleName = SignificantTokenTypeRuleName;
  });

  // node_modules/occam-parsers/lib/rule/name.js
  var require_name4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _name = _interopRequireDefault2(require_name2());
    var _name1 = _interopRequireDefault2(require_name3());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var NameRule = /* @__PURE__ */ function(Rule) {
      _inherits(NameRule2, Rule);
      var _super = _createSuper(NameRule2);
      function NameRule2() {
        _classCallCheck(this, NameRule2);
        var nameDefinition = new _name1.default(), name = _ruleNames.NameRuleName, ambiguous = false, definitions = [
          nameDefinition
        ], Node2 = _name.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return NameRule2;
    }(_rule.default);
    exports.default = NameRule;
  });

  // node_modules/occam-parsers/lib/part/nonTerminal.js
  var require_nonTerminal2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    var NonTerminalPart = /* @__PURE__ */ function() {
      function NonTerminalPart2(type) {
        _classCallCheck(this, NonTerminalPart2);
        this.type = type;
      }
      _createClass(NonTerminalPart2, [
        {
          key: "getType",
          value: function getType() {
            return this.type;
          }
        },
        {
          key: "isNonTerminalPart",
          value: function isNonTerminalPart() {
            var nonTerminalPart = true;
            return nonTerminalPart;
          }
        },
        {
          key: "isTerminalPart",
          value: function isTerminalPart() {
            var terminalPart = false;
            return terminalPart;
          }
        },
        {
          key: "isRuleNamePart",
          value: function isRuleNamePart() {
            var ruleNamePart = false;
            return ruleNamePart;
          }
        },
        {
          key: "clone",
          value: function clone(Part) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              remainingArguments[_key - 1] = arguments[_key];
            }
            return _construct(Part, _toConsumableArray(remainingArguments));
          }
        }
      ]);
      return NonTerminalPart2;
    }();
    exports.default = NonTerminalPart;
  });

  // node_modules/occam-parsers/lib/partTypes.js
  var require_partTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.SequenceOfPartsPartType = exports.ZeroOrMorePartsPartType = exports.OneOrMorePartsPartType = exports.ChoiceOfPartsPartType = exports.OptionalPartPartType = exports.RuleNamePartType = void 0;
    var RuleNamePartType = "ruleNamePart";
    exports.RuleNamePartType = RuleNamePartType;
    var OptionalPartPartType = "optionalPart";
    exports.OptionalPartPartType = OptionalPartPartType;
    var ChoiceOfPartsPartType = "choiceOfParts";
    exports.ChoiceOfPartsPartType = ChoiceOfPartsPartType;
    var OneOrMorePartsPartType = "oneOrMoreParts";
    exports.OneOrMorePartsPartType = OneOrMorePartsPartType;
    var ZeroOrMorePartsPartType = "zeroOrMoreParts";
    exports.ZeroOrMorePartsPartType = ZeroOrMorePartsPartType;
    var SequenceOfPartsPartType = "sequenceOfParts";
    exports.SequenceOfPartsPartType = SequenceOfPartsPartType;
    var _default = {
      RuleNamePartType,
      OptionalPartPartType,
      ChoiceOfPartsPartType,
      OneOrMorePartsPartType,
      ZeroOrMorePartsPartType,
      SequenceOfPartsPartType
    };
    exports.default = _default;
  });

  // node_modules/occam-parsers/lib/part/nonTerminal/optionalPart.js
  var require_optionalPart = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal2());
    var _array = require_array3();
    var _partTypes = require_partTypes();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var questionMark = _occamLexers.specialSymbols.questionMark;
    var OptionalPartPart = /* @__PURE__ */ function(NonTerminalPart) {
      _inherits(OptionalPartPart2, NonTerminalPart);
      var _super = _createSuper(OptionalPartPart2);
      function OptionalPartPart2(part) {
        _classCallCheck(this, OptionalPartPart2);
        var _this;
        var type = _partTypes.OptionalPartPartType;
        _this = _super.call(this, type);
        _this.part = part;
        return _this;
      }
      _createClass(OptionalPartPart2, [
        {
          key: "getPart",
          value: function getPart() {
            return this.part;
          }
        },
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            var part = this.getPart(), partNodes = [], savedIndex = state.getSavedIndex();
            parsed = parsePart(part, partNodes, state, callback);
            if (parsed) {
              (0, _array).push(nodes, partNodes);
            }
            if (!parsed) {
              state.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var operatorString = questionMark, partString = this.part.asString(), string = "".concat(partString).concat(operatorString);
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(OptionalPartPart2.prototype), "clone", this).call(this, OptionalPartPart2, this.part);
          }
        }
      ]);
      return OptionalPartPart2;
    }(_nonTerminal.default);
    exports.default = OptionalPartPart;
    function parsePart(part, nodes, state, callback) {
      var parsed;
      if (callback !== null) {
        parsed = callback();
        if (!parsed) {
          parsed = part.parse(nodes, state, callback);
        }
      } else {
        part.parse(nodes, state, callback);
        parsed = true;
      }
      return parsed;
    }
  });

  // node_modules/occam-parsers/lib/part/nonTerminal/collectionOfParts.js
  var require_collectionOfParts = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal2());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var CollectionOfPartsPart = /* @__PURE__ */ function(NonTerminalPart) {
      _inherits(CollectionOfPartsPart2, NonTerminalPart);
      var _super = _createSuper(CollectionOfPartsPart2);
      function CollectionOfPartsPart2(type, part) {
        _classCallCheck(this, CollectionOfPartsPart2);
        var _this;
        _this = _super.call(this, type);
        _this.part = part;
        return _this;
      }
      _createClass(CollectionOfPartsPart2, [
        {
          key: "getPart",
          value: function getPart() {
            return this.part;
          }
        },
        {
          key: "asString",
          value: function asString(operatorString) {
            var partString = this.part.asString(), string = "".concat(partString).concat(operatorString);
            return string;
          }
        },
        {
          key: "clone",
          value: function clone(Part) {
            return _get(_getPrototypeOf(CollectionOfPartsPart2.prototype), "clone", this).call(this, Part, this.part);
          }
        }
      ]);
      return CollectionOfPartsPart2;
    }(_nonTerminal.default);
    exports.default = CollectionOfPartsPart;
  });

  // node_modules/occam-parsers/lib/part/nonTerminal/oneOrMoreParts.js
  var require_oneOrMoreParts = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _collectionOfParts = _interopRequireDefault2(require_collectionOfParts());
    var _array = require_array3();
    var _partTypes = require_partTypes();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var plus = _occamLexers.specialSymbols.plus;
    var OneOrMorePartsPart = /* @__PURE__ */ function(CollectionOfPartsPart) {
      _inherits(OneOrMorePartsPart2, CollectionOfPartsPart);
      var _super = _createSuper(OneOrMorePartsPart2);
      function OneOrMorePartsPart2(part) {
        _classCallCheck(this, OneOrMorePartsPart2);
        var type = _partTypes.OneOrMorePartsPartType;
        return _super.call(this, type, part);
      }
      _createClass(OneOrMorePartsPart2, [
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            var part = this.getPart(), partNodes = [], savedIndex = state.getSavedIndex();
            parsed = parsePart(part, partNodes, state, callback);
            if (parsed) {
              (0, _array).push(nodes, partNodes);
            }
            if (!parsed) {
              state.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var operatorString = plus, string = _get(_getPrototypeOf(OneOrMorePartsPart2.prototype), "asString", this).call(this, operatorString);
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(OneOrMorePartsPart2.prototype), "clone", this).call(this, OneOrMorePartsPart2);
          }
        }
      ]);
      return OneOrMorePartsPart2;
    }(_collectionOfParts.default);
    exports.default = OneOrMorePartsPart;
    function parsePart(part, nodes, state, callback) {
      var parsed1;
      if (callback !== null) {
        parsed1 = part.parse(nodes, state, function() {
          var parsed = callback();
          if (!parsed) {
            parsed = parsePart(part, nodes, state, callback);
          }
          return parsed;
        });
      } else {
        parsed1 = part.parse(nodes, state, callback);
        if (parsed1) {
          parsePart(part, nodes, state, callback);
        }
      }
      return parsed1;
    }
  });

  // node_modules/occam-parsers/lib/part/nonTerminal/zeroOrMoreParts.js
  var require_zeroOrMoreParts = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _collectionOfParts = _interopRequireDefault2(require_collectionOfParts());
    var _array = require_array3();
    var _partTypes = require_partTypes();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var asterisk = _occamLexers.specialSymbols.asterisk;
    var ZeroOrMorePartsPart = /* @__PURE__ */ function(CollectionOfPartsPart) {
      _inherits(ZeroOrMorePartsPart2, CollectionOfPartsPart);
      var _super = _createSuper(ZeroOrMorePartsPart2);
      function ZeroOrMorePartsPart2(part) {
        _classCallCheck(this, ZeroOrMorePartsPart2);
        var type = _partTypes.ZeroOrMorePartsPartType;
        return _super.call(this, type, part);
      }
      _createClass(ZeroOrMorePartsPart2, [
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            var part = this.getPart(), partNodes = [], savedIndex = state.getSavedIndex();
            parsed = parsePart(part, partNodes, state, callback);
            if (parsed) {
              (0, _array).push(nodes, partNodes);
            }
            if (!parsed) {
              state.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var operatorString = asterisk, string = _get(_getPrototypeOf(ZeroOrMorePartsPart2.prototype), "asString", this).call(this, operatorString);
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(ZeroOrMorePartsPart2.prototype), "clone", this).call(this, ZeroOrMorePartsPart2);
          }
        }
      ]);
      return ZeroOrMorePartsPart2;
    }(_collectionOfParts.default);
    exports.default = ZeroOrMorePartsPart;
    function parsePart(part, nodes, state, callback) {
      var parsed;
      if (callback !== null) {
        parsed = callback();
        if (!parsed) {
          parsed = part.parse(nodes, state, function() {
            return parsePart(part, nodes, state, callback);
          });
        }
      } else {
        parsed = part.parse(nodes, state, callback);
        if (parsed) {
          parsePart(part, nodes, state, callback);
        }
        parsed = true;
      }
      return parsed;
    }
  });

  // node_modules/occam-parsers/lib/utilities/bnf.js
  var require_bnf2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isNodeChoiceNode = isNodeChoiceNode;
    exports.isNodeRuleNameNode = isNodeRuleNameNode;
    exports.isNodeQuantifierNode = isNodeQuantifierNode;
    exports.isNodeLookAheadModifierNode = isNodeLookAheadModifierNode;
    exports.ruleNameFromQuantifierNode = ruleNameFromQuantifierNode;
    var _array = require_array3();
    var _ruleNames = require_ruleNames();
    function isNodeChoiceNode(node) {
      var nodeNoChoiceNode = false;
      var nodeTerminalNode = node.isTerminalNode();
      if (nodeTerminalNode) {
        var terminalNode = node, terminalNodeContent = terminalNode.getContent();
        nodeNoChoiceNode = terminalNodeContent === "|";
      }
      return nodeNoChoiceNode;
    }
    function isNodeRuleNameNode(node) {
      var nodeRuleNameNode = false;
      var nodeTerminalNode = node.isTerminalNode(), nodeNonTerminalNode = !nodeTerminalNode;
      if (nodeNonTerminalNode) {
        var nonTerminalNode = node, nonTerminalNodeRuleName = nonTerminalNode.getRuleName();
        nodeRuleNameNode = nonTerminalNodeRuleName === _ruleNames.RuleNameRuleName;
      }
      return nodeRuleNameNode;
    }
    function isNodeQuantifierNode(node) {
      var nodeQuantifierNode = false;
      var nodeNonTerminalNode = node.isNonTerminalNode();
      if (nodeNonTerminalNode) {
        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName(), ruleNameQuantifierRuleName = ruleName === _ruleNames.QuantifierRuleName;
        nodeQuantifierNode = ruleNameQuantifierRuleName;
      }
      return nodeQuantifierNode;
    }
    function isNodeLookAheadModifierNode(node) {
      var nodeLookAheadModifierNode = false;
      var nodeNonTerminalNode = node.isNonTerminalNode();
      if (nodeNonTerminalNode) {
        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName(), ruleNameLookAheadModifierRuleName = ruleName === _ruleNames.LookAheadModifierRuleName;
        nodeLookAheadModifierNode = ruleNameLookAheadModifierRuleName;
      }
      return nodeLookAheadModifierNode;
    }
    function ruleNameFromQuantifierNode(quantifierNode) {
      var nonTerminalNode;
      nonTerminalNode = quantifierNode;
      var childNodes = nonTerminalNode.getChildNodes(), firstChildNode = (0, _array).first(childNodes);
      nonTerminalNode = firstChildNode;
      var ruleName = nonTerminalNode.getRuleName();
      return ruleName;
    }
  });

  // node_modules/occam-parsers/lib/node/bnf/part.js
  var require_part2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _optionalPart = _interopRequireDefault2(require_optionalPart());
    var _oneOrMoreParts = _interopRequireDefault2(require_oneOrMoreParts());
    var _zeroOrMoreParts = _interopRequireDefault2(require_zeroOrMoreParts());
    var _array = require_array3();
    var _bnf = require_bnf2();
    var _ruleNames = require_ruleNames();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var PartBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(PartBNFNode2, NonTerminalNode);
      var _super = _createSuper(PartBNFNode2);
      function PartBNFNode2() {
        _classCallCheck(this, PartBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(PartBNFNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = partFromNodes(nodes);
            return part;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(PartBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return PartBNFNode2;
    }(_nonTerminal.default);
    exports.default = PartBNFNode;
    function partFromNodes(nodes) {
      var part = null;
      var nodesLength = nodes.length;
      if (nodesLength === 1) {
        var node = nodes.pop(), lookAhead = false;
        part = node.generatePart(lookAhead);
      } else {
        var lastNodeQuantifierNode = isLastNodeQuantifierNode(nodes);
        if (lastNodeQuantifierNode) {
          var node1 = nodes.pop(), quantifierNode = node1;
          part = partFromNodes(nodes);
          var ruleName = (0, _bnf).ruleNameFromQuantifierNode(quantifierNode), collectionOfPartsPart = collectionOfPartsPartFromPartAndRuleName(part, ruleName);
          part = collectionOfPartsPart;
        } else {
          nodes.shift();
          part = partFromNodes(nodes);
        }
      }
      return part;
    }
    function isLastNodeQuantifierNode(nodes) {
      var lastNode = (0, _array).last(nodes), lastNodeQuantifierNode = (0, _bnf).isNodeQuantifierNode(lastNode);
      return lastNodeQuantifierNode;
    }
    function collectionOfPartsPartFromPartAndRuleName(part, ruleName) {
      var collectionOfPartsPart;
      switch (ruleName) {
        case _ruleNames.OptionalQuantifierRuleName:
          var optionalPartPart = new _optionalPart.default(part);
          collectionOfPartsPart = optionalPartPart;
          break;
        case _ruleNames.OneOrMoreQuantifierRuleName:
          var oneOrMorePartsPart = new _oneOrMoreParts.default(part);
          collectionOfPartsPart = oneOrMorePartsPart;
          break;
        case _ruleNames.ZeroOrMoreQuantifierRuleName:
          var zeroOrMorePartsPart = new _zeroOrMoreParts.default(part);
          collectionOfPartsPart = zeroOrMorePartsPart;
          break;
      }
      return collectionOfPartsPart;
    }
  });

  // node_modules/occam-parsers/lib/part/nonTerminal/ruleName.js
  var require_ruleName2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal2());
    var _constants = require_constants4();
    var _partTypes = require_partTypes();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var ellipsis = _occamLexers.specialSymbols.ellipsis;
    var RuleNamePart = /* @__PURE__ */ function(NonTerminalPart) {
      _inherits(RuleNamePart2, NonTerminalPart);
      var _super = _createSuper(RuleNamePart2);
      function RuleNamePart2(ruleName) {
        var lookAhead = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        _classCallCheck(this, RuleNamePart2);
        var _this;
        var type = _partTypes.RuleNamePartType;
        _this = _super.call(this, type);
        _this.ruleName = ruleName;
        _this.lookAhead = lookAhead;
        return _this;
      }
      _createClass(RuleNamePart2, [
        {
          key: "getRuleName",
          value: function getRuleName() {
            return this.ruleName;
          }
        },
        {
          key: "isLookAhead",
          value: function isLookAhead() {
            return this.lookAhead;
          }
        },
        {
          key: "isRuleNamePart",
          value: function isRuleNamePart() {
            var ruleNamePart = true;
            return ruleNamePart;
          }
        },
        {
          key: "setLookAhead",
          value: function setLookAhead(lookAhead) {
            this.lookAhead = lookAhead;
          }
        },
        {
          key: "findRule",
          value: function findRule(state) {
            var ruleMap = state.getRuleMap(), rule = ruleMap[this.ruleName] || null;
            return rule;
          }
        },
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            var rule = this.findRule(state);
            if (rule === null) {
              parsed = false;
            } else {
              var ruleNode = rule.parse(state, callback);
              parsed = ruleNode !== null;
              if (parsed) {
                nodes.push(ruleNode);
              }
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var lookAheadString = this.lookAhead ? ellipsis : _constants.EMPTY_STRING, string = "".concat(this.ruleName).concat(lookAheadString);
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(RuleNamePart2.prototype), "clone", this).call(this, RuleNamePart2, this.ruleName, this.lookAhead);
          }
        }
      ]);
      return RuleNamePart2;
    }(_nonTerminal.default);
    exports.default = RuleNamePart;
  });

  // node_modules/occam-parsers/lib/definition/ruleName.js
  var require_ruleName3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var RuleNameDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(RuleNameDefinition2, Definition);
      var _super = _createSuper(RuleNameDefinition2);
      function RuleNameDefinition2(ruleName) {
        _classCallCheck(this, RuleNameDefinition2);
        var ruleNameRuleNamePart = new _ruleName.default(ruleName), parts = [
          ruleNameRuleNamePart
        ];
        return _super.call(this, parts);
      }
      return RuleNameDefinition2;
    }(_definition.default);
    exports.default = RuleNameDefinition;
  });

  // node_modules/occam-parsers/lib/definition/partRule/terminal.js
  var require_terminal3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _zeroOrMoreParts = _interopRequireDefault2(require_zeroOrMoreParts());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var TerminalPartRuleDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(TerminalPartRuleDefinition2, Definition);
      var _super = _createSuper(TerminalPartRuleDefinition2);
      function TerminalPartRuleDefinition2() {
        _classCallCheck(this, TerminalPartRuleDefinition2);
        var quantifierRuleName = _ruleNames.QuantifierRuleName, terminalPartRuleName = _ruleNames.TerminalPartRuleName, quantifierRuleNamePart = new _ruleName.default(quantifierRuleName), terminalPartRuleNamePart = new _ruleName.default(terminalPartRuleName), zeroOrMoreQuantifierRuleNamePartsPart = new _zeroOrMoreParts.default(quantifierRuleNamePart), parts = [
          terminalPartRuleNamePart,
          zeroOrMoreQuantifierRuleNamePartsPart
        ];
        return _super.call(this, parts);
      }
      return TerminalPartRuleDefinition2;
    }(_definition.default);
    exports.default = TerminalPartRuleDefinition;
  });

  // node_modules/occam-parsers/lib/definition/partRule/nonTerminal.js
  var require_nonTerminal3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _zeroOrMoreParts = _interopRequireDefault2(require_zeroOrMoreParts());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var NonTerminalPartRuleDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(NonTerminalPartRuleDefinition2, Definition);
      var _super = _createSuper(NonTerminalPartRuleDefinition2);
      function NonTerminalPartRuleDefinition2() {
        _classCallCheck(this, NonTerminalPartRuleDefinition2);
        var quantifierRuleName = _ruleNames.QuantifierRuleName, nonTerminalPartRuleName = _ruleNames.NonTerminalPartRuleName, quantifierRuleNamePart = new _ruleName.default(quantifierRuleName), nonTerminalPartRuleNamePart = new _ruleName.default(nonTerminalPartRuleName), zeroOrMoreQuantifierRuleNamePartsPart = new _zeroOrMoreParts.default(quantifierRuleNamePart), parts = [
          nonTerminalPartRuleNamePart,
          zeroOrMoreQuantifierRuleNamePartsPart
        ];
        return _super.call(this, parts);
      }
      return NonTerminalPartRuleDefinition2;
    }(_definition.default);
    exports.default = NonTerminalPartRuleDefinition;
  });

  // node_modules/occam-parsers/lib/rule/part.js
  var require_part3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _part = _interopRequireDefault2(require_part2());
    var _ruleName = _interopRequireDefault2(require_ruleName3());
    var _terminal = _interopRequireDefault2(require_terminal3());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal3());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var PartRule = /* @__PURE__ */ function(Rule) {
      _inherits(PartRule2, Rule);
      var _super = _createSuper(PartRule2);
      function PartRule2() {
        _classCallCheck(this, PartRule2);
        var name = _ruleNames.PartRuleName, terminalPartRuleDefinition = new _terminal.default(), nonTerminalPartRuleDefinition = new _nonTerminal.default(), noWhitespacePartRuleNameDefinition = new _ruleName.default(_ruleNames.NoWhitespacePartRuleName), ambiguous = false, definitions = [
          nonTerminalPartRuleDefinition,
          terminalPartRuleDefinition,
          noWhitespacePartRuleNameDefinition
        ], Node2 = _part.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return PartRule2;
    }(_rule.default);
    exports.default = PartRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/rule.js
  var require_rule3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _array = require_array3();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var RuleBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(RuleBNFNode2, NonTerminalNode);
      var _super = _createSuper(RuleBNFNode2);
      function RuleBNFNode2() {
        _classCallCheck(this, RuleBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(RuleBNFNode2, [
        {
          key: "generateRule",
          value: function generateRule(Rule) {
            var name = this.getName(), ambiguous = this.isAmbiguous(), definitions = this.generateDefinitions(), Node2 = _nonTerminal.default, rule = new Rule(name, ambiguous, definitions, Node2);
            return rule;
          }
        },
        {
          key: "isAmbiguous",
          value: function isAmbiguous() {
            var childNodes = this.getChildNodes(), secondChildNode = (0, _array).second(childNodes), secondChildNodeTerminalNode = secondChildNode.isTerminalNode(), ambiguous = !secondChildNodeTerminalNode;
            return ambiguous;
          }
        },
        {
          key: "getName",
          value: function getName() {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), nameBNFNode = firstChildNode, name = nameBNFNode.getName();
            return name;
          }
        },
        {
          key: "generateDefinitions",
          value: function generateDefinitions() {
            var childNodes = this.getChildNodes(), childNodesLength = childNodes.length, thirdChildNode = (0, _array).third(childNodes), fourthChildNode = (0, _array).fourth(childNodes), definitionsBNFNode = childNodesLength === 4 ? thirdChildNode : fourthChildNode, definitions = definitionsBNFNode.generateDefinitions();
            return definitions;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(RuleBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return RuleBNFNode2;
    }(_nonTerminal.default);
    exports.default = RuleBNFNode;
  });

  // node_modules/occam-parsers/lib/part/terminal/terminalSymbol.js
  var require_terminalSymbol = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _terminal = _interopRequireDefault2(require_terminal());
    var _terminal1 = _interopRequireDefault2(require_terminal2());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var TerminalSymbolPart = /* @__PURE__ */ function(TerminalPart) {
      _inherits(TerminalSymbolPart2, TerminalPart);
      var _super = _createSuper(TerminalSymbolPart2);
      function TerminalSymbolPart2(content) {
        _classCallCheck(this, TerminalSymbolPart2);
        var _this;
        _this = _super.call(this);
        _this.content = content;
        return _this;
      }
      _createClass(TerminalSymbolPart2, [
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            var terminalNode = null;
            var savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken;
            if (significantToken !== null) {
              var content = significantToken.getContent();
              if (content === this.content) {
                terminalNode = _terminal1.default.fromSignificantToken(significantToken);
              }
            }
            parsed = terminalNode !== null;
            if (parsed) {
              nodes.push(terminalNode);
              if (callback !== null) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            if (!parsed) {
              state.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var content = this.content.replace(/\\/, "\\\\"), string = '"'.concat(content, '"');
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(TerminalSymbolPart2.prototype), "clone", this).call(this, TerminalSymbolPart2, this.content);
          }
        }
      ]);
      return TerminalSymbolPart2;
    }(_terminal.default);
    exports.default = TerminalSymbolPart;
  });

  // node_modules/occam-parsers/lib/definition/rule.js
  var require_rule4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _optionalPart = _interopRequireDefault2(require_optionalPart());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var separator = _occamLexers.specialSymbols.separator;
    var terminator = _occamLexers.specialSymbols.terminator;
    var RuleDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(RuleDefinition2, Definition);
      var _super = _createSuper(RuleDefinition2);
      function RuleDefinition2() {
        _classCallCheck(this, RuleDefinition2);
        var separatorTerminalSymbolContent = separator, terminatorTerminalSymbolContent = terminator, nameRuleName = _ruleNames.NameRuleName, definitionsRuleName = _ruleNames.DefinitionsRuleName, ambiguousModifierRuleName = _ruleNames.AmbiguousModifierRuleName, ambiguousModifierRuleNamePart = new _ruleName.default(ambiguousModifierRuleName), nameRuleNamePart = new _ruleName.default(nameRuleName), optionalAmbiguousRuleNamePartPart = new _optionalPart.default(ambiguousModifierRuleNamePart), separatorTerminalSymbolPart = new _terminalSymbol.default(separatorTerminalSymbolContent), definitionsRuleNamePart = new _ruleName.default(definitionsRuleName), terminatorTerminalSymbolPart = new _terminalSymbol.default(terminatorTerminalSymbolContent), parts = [
          nameRuleNamePart,
          optionalAmbiguousRuleNamePartPart,
          separatorTerminalSymbolPart,
          definitionsRuleNamePart,
          terminatorTerminalSymbolPart
        ];
        return _super.call(this, parts);
      }
      return RuleDefinition2;
    }(_definition.default);
    exports.default = RuleDefinition;
  });

  // node_modules/occam-parsers/lib/rule/rule.js
  var require_rule5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _rule1 = _interopRequireDefault2(require_rule3());
    var _rule2 = _interopRequireDefault2(require_rule4());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var RuleRule = /* @__PURE__ */ function(Rule) {
      _inherits(RuleRule2, Rule);
      var _super = _createSuper(RuleRule2);
      function RuleRule2() {
        _classCallCheck(this, RuleRule2);
        var ruleDefinition = new _rule2.default(), name = _ruleNames.RuleRuleName, ambiguous = false, definitions = [
          ruleDefinition
        ], Node2 = _rule1.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return RuleRule2;
    }(_rule.default);
    exports.default = RuleRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/error.js
  var require_error = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var ErrorBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(ErrorBNFNode2, NonTerminalNode);
      var _super = _createSuper(ErrorBNFNode2);
      function ErrorBNFNode2() {
        _classCallCheck(this, ErrorBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(ErrorBNFNode2, null, [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(ErrorBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return ErrorBNFNode2;
    }(_nonTerminal.default);
    exports.default = ErrorBNFNode;
  });

  // node_modules/occam-parsers/lib/part/terminal/wildcard.js
  var require_wildcard = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _terminal = _interopRequireDefault2(require_terminal());
    var _terminal1 = _interopRequireDefault2(require_terminal2());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var wildcard = _occamLexers.specialSymbols.wildcard;
    var WildcardPart = /* @__PURE__ */ function(TerminalPart) {
      _inherits(WildcardPart2, TerminalPart);
      var _super = _createSuper(WildcardPart2);
      function WildcardPart2() {
        _classCallCheck(this, WildcardPart2);
        return _super.apply(this, arguments);
      }
      _createClass(WildcardPart2, [
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            var terminalNode = null;
            var savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken;
            if (significantToken !== null) {
              terminalNode = _terminal1.default.fromSignificantToken(significantToken);
            }
            parsed = terminalNode !== null;
            if (parsed) {
              nodes.push(terminalNode);
              if (callback !== null) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            if (!parsed) {
              state.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var string = wildcard;
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(WildcardPart2.prototype), "clone", this).call(this, WildcardPart2);
          }
        }
      ]);
      return WildcardPart2;
    }(_terminal.default);
    exports.default = WildcardPart;
  });

  // node_modules/occam-parsers/lib/definition/error.js
  var require_error2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _wildcard = _interopRequireDefault2(require_wildcard());
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var ErrorDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(ErrorDefinition2, Definition);
      var _super = _createSuper(ErrorDefinition2);
      function ErrorDefinition2() {
        _classCallCheck(this, ErrorDefinition2);
        var wildcardPart = new _wildcard.default(), parts = [
          wildcardPart
        ];
        return _super.call(this, parts);
      }
      return ErrorDefinition2;
    }(_definition.default);
    exports.default = ErrorDefinition;
  });

  // node_modules/occam-parsers/lib/rule/error.js
  var require_error3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _error = _interopRequireDefault2(require_error());
    var _error1 = _interopRequireDefault2(require_error2());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var ErrorRule = /* @__PURE__ */ function(Rule) {
      _inherits(ErrorRule2, Rule);
      var _super = _createSuper(ErrorRule2);
      function ErrorRule2() {
        _classCallCheck(this, ErrorRule2);
        var errorDefinition = new _error1.default(), name = _ruleNames.ErrorRuleName, ambiguous = false, definitions = [
          errorDefinition
        ], Node2 = _error.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return ErrorRule2;
    }(_rule.default);
    exports.default = ErrorRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/document.js
  var require_document2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _ruleNames = require_ruleNames();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var DocumentBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(DocumentBNFNode2, NonTerminalNode);
      var _super = _createSuper(DocumentBNFNode2);
      function DocumentBNFNode2() {
        _classCallCheck(this, DocumentBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(DocumentBNFNode2, [
        {
          key: "generateRules",
          value: function generateRules(Rule) {
            var childNodes = this.getChildNodes(), ruleNodes1 = childNodes.reduce(function(ruleNodes, childNode) {
              var childNodeNonTerminalNode = childNode.isNonTerminalNode();
              if (childNodeNonTerminalNode) {
                var nonTerminalNode = childNode, ruleName = childNode.getRuleName(), ruleNameRuleRuleName = ruleName === _ruleNames.RuleRuleName, nonTerminalNodeRuleNode = ruleNameRuleRuleName;
                if (nonTerminalNodeRuleNode) {
                  var ruleNode = nonTerminalNode;
                  ruleNodes.push(ruleNode);
                }
              }
              return ruleNodes;
            }, []), rules = ruleNodes1.map(function(ruleNode) {
              var rule = ruleNode.generateRule(Rule);
              return rule;
            });
            return rules;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(DocumentBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return DocumentBNFNode2;
    }(_nonTerminal.default);
    exports.default = DocumentBNFNode;
  });

  // node_modules/occam-parsers/lib/part/nonTerminal/choiceOfParts.js
  var require_choiceOfParts = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal2());
    var _partTypes = require_partTypes();
    var _array = require_array3();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var ChoiceOfPartsPart = /* @__PURE__ */ function(NonTerminalPart) {
      _inherits(ChoiceOfPartsPart2, NonTerminalPart);
      var _super = _createSuper(ChoiceOfPartsPart2);
      function ChoiceOfPartsPart2(parts) {
        _classCallCheck(this, ChoiceOfPartsPart2);
        var _this;
        var type = _partTypes.ChoiceOfPartsPartType;
        _this = _super.call(this, type);
        _this.parts = parts;
        return _this;
      }
      _createClass(ChoiceOfPartsPart2, [
        {
          key: "getParts",
          value: function getParts() {
            return this.parts;
          }
        },
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            this.parts.some(function(part) {
              parsed = part.parse(nodes, state, callback);
              if (parsed) {
                return true;
              }
            });
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var partsString1 = this.parts.reduce(function(partsString, part) {
              var partString = part.asString();
              if (partsString === null) {
                partsString = partString;
              } else {
                partsString = "".concat(partsString, " | ").concat(partString);
              }
              return partsString;
            }, null), string = "( ".concat(partsString1, " )");
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(ChoiceOfPartsPart2.prototype), "clone", this).call(this, ChoiceOfPartsPart2, this.parts);
          }
        }
      ], [
        {
          key: "fromNodes",
          value: function fromNodes(nodes) {
            var allButFirstAndLastNodes = (0, _array).allButFirstAndLast(nodes);
            nodes = allButFirstAndLastNodes;
            var evenNodes = (0, _array).even(nodes);
            nodes = evenNodes;
            var lookAhead = false, parts = nodes.map(function(node) {
              var part = node.generatePart(lookAhead);
              return part;
            }), choiceOfPartsPart = new ChoiceOfPartsPart2(parts);
            return choiceOfPartsPart;
          }
        }
      ]);
      return ChoiceOfPartsPart2;
    }(_nonTerminal.default);
    exports.default = ChoiceOfPartsPart;
  });

  // node_modules/occam-parsers/lib/definition/document.js
  var require_document3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _choiceOfParts = _interopRequireDefault2(require_choiceOfParts());
    var _oneOrMoreParts = _interopRequireDefault2(require_oneOrMoreParts());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var DocumentDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(DocumentDefinition2, Definition);
      var _super = _createSuper(DocumentDefinition2);
      function DocumentDefinition2() {
        _classCallCheck(this, DocumentDefinition2);
        var ruleRuleName = _ruleNames.RuleRuleName, errorRuleName = _ruleNames.ErrorRuleName, ruleRuleNamePart = new _ruleName.default(ruleRuleName), errorRuleNamePart = new _ruleName.default(errorRuleName), ruleRuleNameAndErrorRuleNameParts = [
          ruleRuleNamePart,
          errorRuleNamePart
        ], choiceOfRuleRuleNameAndErrorRuleNamePartsPart = new _choiceOfParts.default(ruleRuleNameAndErrorRuleNameParts), oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = new _oneOrMoreParts.default(choiceOfRuleRuleNameAndErrorRuleNamePartsPart), parts = [
          oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
        ];
        return _super.call(this, parts);
      }
      return DocumentDefinition2;
    }(_definition.default);
    exports.default = DocumentDefinition;
  });

  // node_modules/occam-parsers/lib/rule/document.js
  var require_document4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _document = _interopRequireDefault2(require_document2());
    var _document1 = _interopRequireDefault2(require_document3());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var DocumentRule = /* @__PURE__ */ function(Rule) {
      _inherits(DocumentRule2, Rule);
      var _super = _createSuper(DocumentRule2);
      function DocumentRule2() {
        _classCallCheck(this, DocumentRule2);
        var documentDefinition = new _document1.default(), name = _ruleNames.DocumentRuleName, ambiguous = false, definitions = [
          documentDefinition
        ], Node2 = _document.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return DocumentRule2;
    }(_rule.default);
    exports.default = DocumentRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/ruleName.js
  var require_ruleName4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _array = require_array3();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var RuleNameBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(RuleNameBNFNode2, NonTerminalNode);
      var _super = _createSuper(RuleNameBNFNode2);
      function RuleNameBNFNode2() {
        _classCallCheck(this, RuleNameBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(RuleNameBNFNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var ruleName = this.getRuleName(), ruleNamePart = new _ruleName.default(ruleName, lookAhead);
            return ruleNamePart;
          }
        },
        {
          key: "getRuleName",
          value: function getRuleName() {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), ruleName = terminalNodeContent;
            return ruleName;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(RuleNameBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return RuleNameBNFNode2;
    }(_nonTerminal.default);
    exports.default = RuleNameBNFNode;
  });

  // node_modules/occam-parsers/lib/rule/ruleName.js
  var require_ruleName5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _name = _interopRequireDefault2(require_name3());
    var _ruleName = _interopRequireDefault2(require_ruleName4());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var RuleNameRule = /* @__PURE__ */ function(Rule) {
      _inherits(RuleNameRule2, Rule);
      var _super = _createSuper(RuleNameRule2);
      function RuleNameRule2() {
        _classCallCheck(this, RuleNameRule2);
        var nameDefinition = new _name.default(), name = _ruleNames.RuleNameRuleName, ambiguous = false, definitions = [
          nameDefinition
        ], Node2 = _ruleName.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return RuleNameRule2;
    }(_rule.default);
    exports.default = RuleNameRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/wildcard.js
  var require_wildcard2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _wildcard = _interopRequireDefault2(require_wildcard());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var WildcardBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(WildcardBNFNode2, NonTerminalNode);
      var _super = _createSuper(WildcardBNFNode2);
      function WildcardBNFNode2() {
        _classCallCheck(this, WildcardBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(WildcardBNFNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var wildcardPart = new _wildcard.default();
            return wildcardPart;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(WildcardBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return WildcardBNFNode2;
    }(_nonTerminal.default);
    exports.default = WildcardBNFNode;
  });

  // node_modules/occam-parsers/lib/definition/terminalSymbol.js
  var require_terminalSymbol2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var TerminalSymbolDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(TerminalSymbolDefinition2, Definition);
      var _super = _createSuper(TerminalSymbolDefinition2);
      function TerminalSymbolDefinition2(content) {
        _classCallCheck(this, TerminalSymbolDefinition2);
        var terminalSymbolPart = new _terminalSymbol.default(content), parts = [
          terminalSymbolPart
        ];
        return _super.call(this, parts);
      }
      return TerminalSymbolDefinition2;
    }(_definition.default);
    exports.default = TerminalSymbolDefinition;
  });

  // node_modules/occam-parsers/lib/rule/wildcard.js
  var require_wildcard3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _wildcard = _interopRequireDefault2(require_wildcard2());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol2());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var wildcard = _occamLexers.specialSymbols.wildcard;
    var WildcardRule = /* @__PURE__ */ function(Rule) {
      _inherits(WildcardRule2, Rule);
      var _super = _createSuper(WildcardRule2);
      function WildcardRule2() {
        _classCallCheck(this, WildcardRule2);
        var wildcardTerminalSymbolContent = wildcard, wildcardTerminalSymbolDefinition = new _terminalSymbol.default(wildcardTerminalSymbolContent), name = _ruleNames.WildcardRuleName, ambiguous = false, definitions = [
          wildcardTerminalSymbolDefinition
        ], Node2 = _wildcard.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return WildcardRule2;
    }(_rule.default);
    exports.default = WildcardRule;
  });

  // node_modules/occam-parsers/lib/parseTree/endOfLineNode.js
  var require_endOfLineNode = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;
    var EndOfLineNodeParseTree = /* @__PURE__ */ function(VerticalBranchParseTree) {
      _inherits(EndOfLineNodeParseTree2, VerticalBranchParseTree);
      var _super = _createSuper(EndOfLineNodeParseTree2);
      function EndOfLineNodeParseTree2() {
        _classCallCheck(this, EndOfLineNodeParseTree2);
        return _super.apply(this, arguments);
      }
      _createClass(EndOfLineNodeParseTree2, null, [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var string = END_OF_LINE, stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(EndOfLineNodeParseTree2, string, verticalBranchPosition);
            terminalNodeParseTree.appendToTop(verticalBranchParseTree);
            var endOfLineNodeParseTree = terminalNodeParseTree;
            return endOfLineNodeParseTree;
          }
        }
      ]);
      return EndOfLineNodeParseTree2;
    }(_verticalBranch.default);
    exports.default = EndOfLineNodeParseTree;
  });

  // node_modules/occam-parsers/lib/node/terminal/endOfLine.js
  var require_endOfLine5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _terminal = _interopRequireDefault2(require_terminal2());
    var _endOfLineNode = _interopRequireDefault2(require_endOfLineNode());
    var _constants = require_constants4();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var EndOfLineBNFNode = /* @__PURE__ */ function(TerminalNode) {
      _inherits(EndOfLineBNFNode2, TerminalNode);
      var _super = _createSuper(EndOfLineBNFNode2);
      function EndOfLineBNFNode2() {
        _classCallCheck(this, EndOfLineBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(EndOfLineBNFNode2, [
        {
          key: "getContent",
          value: function getContent() {
            var content = _constants.EMPTY_STRING;
            return content;
          }
        },
        {
          key: "asParseTree",
          value: function asParseTree(tokens) {
            var endOfLineNodeParseTree = _endOfLineNode.default.fromNothing(), parseTree = endOfLineNodeParseTree;
            return parseTree;
          }
        }
      ], [
        {
          key: "fromSignificantToken",
          value: function fromSignificantToken(significantToken) {
            return _terminal.default.fromSignificantToken(EndOfLineBNFNode2, significantToken);
          }
        }
      ]);
      return EndOfLineBNFNode2;
    }(_terminal.default);
    exports.default = EndOfLineBNFNode;
  });

  // node_modules/occam-parsers/lib/part/terminal/endOfLine.js
  var require_endOfLine6 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _terminal = _interopRequireDefault2(require_terminal());
    var _endOfLine = _interopRequireDefault2(require_endOfLine5());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;
    var EndOfLinePart = /* @__PURE__ */ function(TerminalPart) {
      _inherits(EndOfLinePart2, TerminalPart);
      var _super = _createSuper(EndOfLinePart2);
      function EndOfLinePart2() {
        _classCallCheck(this, EndOfLinePart2);
        return _super.apply(this, arguments);
      }
      _createClass(EndOfLinePart2, [
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            var endOfLineBNFNode = null;
            var savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken;
            if (significantToken !== null) {
              var significantTokenEndOfLineToken = significantToken.isEndOfLineToken();
              if (significantTokenEndOfLineToken) {
                endOfLineBNFNode = _endOfLine.default.fromSignificantToken(significantToken);
              }
            }
            parsed = endOfLineBNFNode !== null;
            if (parsed) {
              nodes.push(endOfLineBNFNode);
              if (callback !== null) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            if (!parsed) {
              state.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var string = END_OF_LINE;
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(EndOfLinePart2.prototype), "clone", this).call(this, EndOfLinePart2);
          }
        }
      ]);
      return EndOfLinePart2;
    }(_terminal.default);
    exports.default = EndOfLinePart;
  });

  // node_modules/occam-parsers/lib/node/bnf/endOfLine.js
  var require_endOfLine7 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _endOfLine = _interopRequireDefault2(require_endOfLine6());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var EndOfLineBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(EndOfLineBNFNode2, NonTerminalNode);
      var _super = _createSuper(EndOfLineBNFNode2);
      function EndOfLineBNFNode2() {
        _classCallCheck(this, EndOfLineBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(EndOfLineBNFNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var endOfLinePart = new _endOfLine.default();
            return endOfLinePart;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(EndOfLineBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return EndOfLineBNFNode2;
    }(_nonTerminal.default);
    exports.default = EndOfLineBNFNode;
  });

  // node_modules/occam-parsers/lib/rule/endOfLine.js
  var require_endOfLine8 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _endOfLine = _interopRequireDefault2(require_endOfLine7());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol2());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;
    var EndOfLineRule = /* @__PURE__ */ function(Rule) {
      _inherits(EndOfLineRule2, Rule);
      var _super = _createSuper(EndOfLineRule2);
      function EndOfLineRule2() {
        _classCallCheck(this, EndOfLineRule2);
        var endOfLineTerminalSymbolContent = END_OF_LINE, endOfLineTerminalSymbolDefinition = new _terminalSymbol.default(endOfLineTerminalSymbolContent), name = _ruleNames.EndOfLineRuleName, ambiguous = false, definitions = [
          endOfLineTerminalSymbolDefinition
        ], Node2 = _endOfLine.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return EndOfLineRule2;
    }(_rule.default);
    exports.default = EndOfLineRule;
  });

  // node_modules/occam-parsers/lib/rule/quantifier.js
  var require_quantifier = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _part = _interopRequireDefault2(require_part2());
    var _ruleName = _interopRequireDefault2(require_ruleName3());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var QuantifierRule = /* @__PURE__ */ function(Rule) {
      _inherits(QuantifierRule2, Rule);
      var _super = _createSuper(QuantifierRule2);
      function QuantifierRule2() {
        _classCallCheck(this, QuantifierRule2);
        var name = _ruleNames.QuantifierRuleName, optionalQuantifierRuleName = _ruleNames.OptionalQuantifierRuleName, oneOrMoreQuantifierRuleName = _ruleNames.OneOrMoreQuantifierRuleName, zeroOrMoreQuantifierRuleName = _ruleNames.ZeroOrMoreQuantifierRuleName, optionalQuantifierRuleNameDefinition = new _ruleName.default(optionalQuantifierRuleName), oneOrMoreQuantifierRuleNameDefinition = new _ruleName.default(oneOrMoreQuantifierRuleName), zeroOrMoreQuantifierRuleNameDefinition = new _ruleName.default(zeroOrMoreQuantifierRuleName), ambiguous = false, definitions = [
          optionalQuantifierRuleNameDefinition,
          oneOrMoreQuantifierRuleNameDefinition,
          zeroOrMoreQuantifierRuleNameDefinition
        ], Node2 = _part.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return QuantifierRule2;
    }(_rule.default);
    exports.default = QuantifierRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/definition.js
  var require_definition2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var DefinitionBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(DefinitionBNFNode2, NonTerminalNode);
      var _super = _createSuper(DefinitionBNFNode2);
      function DefinitionBNFNode2() {
        _classCallCheck(this, DefinitionBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(DefinitionBNFNode2, [
        {
          key: "generateDefinition",
          value: function generateDefinition() {
            var childNodes = this.getChildNodes(), partNodes = childNodes, lookAhead = false, parts = partNodes.map(function(partNode) {
              var part = partNode.generatePart(lookAhead);
              return part;
            }), definition = new _definition.default(parts);
            return definition;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(DefinitionBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return DefinitionBNFNode2;
    }(_nonTerminal.default);
    exports.default = DefinitionBNFNode;
  });

  // node_modules/occam-parsers/lib/definition/definition.js
  var require_definition3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _oneOrMoreParts = _interopRequireDefault2(require_oneOrMoreParts());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var DefinitionDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(DefinitionDefinition2, Definition);
      var _super = _createSuper(DefinitionDefinition2);
      function DefinitionDefinition2() {
        _classCallCheck(this, DefinitionDefinition2);
        var partRuleName = _ruleNames.PartRuleName, partRuleNamePart = new _ruleName.default(partRuleName), oneOrMoreRuleNamePartsPart = new _oneOrMoreParts.default(partRuleNamePart), parts = [
          oneOrMoreRuleNamePartsPart
        ];
        return _super.call(this, parts);
      }
      return DefinitionDefinition2;
    }(_definition.default);
    exports.default = DefinitionDefinition;
  });

  // node_modules/occam-parsers/lib/rule/definition.js
  var require_definition4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _definition = _interopRequireDefault2(require_definition2());
    var _definition1 = _interopRequireDefault2(require_definition3());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var DefinitionRule = /* @__PURE__ */ function(Rule) {
      _inherits(DefinitionRule2, Rule);
      var _super = _createSuper(DefinitionRule2);
      function DefinitionRule2() {
        _classCallCheck(this, DefinitionRule2);
        var name = _ruleNames.DefinitionRuleName, definitionDefinition = new _definition1.default(), ambiguous = false, definitions = [
          definitionDefinition
        ], Node2 = _definition.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return DefinitionRule2;
    }(_rule.default);
    exports.default = DefinitionRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/definitions.js
  var require_definitions = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _array = require_array3();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var DefinitionsBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(DefinitionsBNFNode2, NonTerminalNode);
      var _super = _createSuper(DefinitionsBNFNode2);
      function DefinitionsBNFNode2() {
        _classCallCheck(this, DefinitionsBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(DefinitionsBNFNode2, [
        {
          key: "generateDefinitions",
          value: function generateDefinitions() {
            var childNodes = this.getChildNodes(), evenChildNodes = (0, _array).even(childNodes), definitionBNFNodes = evenChildNodes, definitions = definitionBNFNodes.map(function(definitionBNFNode) {
              var definition = definitionBNFNode.generateDefinition();
              return definition;
            });
            return definitions;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(DefinitionsBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return DefinitionsBNFNode2;
    }(_nonTerminal.default);
    exports.default = DefinitionsBNFNode;
  });

  // node_modules/occam-parsers/lib/part/nonTerminal/sequenceOfParts.js
  var require_sequenceOfParts = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal2());
    var _array = require_array3();
    var _lookAhead = require_lookAhead();
    var _partTypes = require_partTypes();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var SequenceOfPartsPart = /* @__PURE__ */ function(NonTerminalPart) {
      _inherits(SequenceOfPartsPart2, NonTerminalPart);
      var _super = _createSuper(SequenceOfPartsPart2);
      function SequenceOfPartsPart2(parts) {
        _classCallCheck(this, SequenceOfPartsPart2);
        var _this;
        var type = _partTypes.SequenceOfPartsPartType;
        _this = _super.call(this, type);
        _this.parts = parts;
        return _this;
      }
      _createClass(SequenceOfPartsPart2, [
        {
          key: "getParts",
          value: function getParts() {
            return this.parts;
          }
        },
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            var savedIndex = state.getSavedIndex(), partsNodes = [], index = 0;
            parsed = (0, _lookAhead).parseParts(this.parts, partsNodes, index, state, callback);
            if (parsed) {
              (0, _array).push(nodes, partsNodes);
            }
            if (!parsed) {
              state.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var partsString1 = this.parts.reduce(function(partsString, part) {
              var partString = part.asString();
              if (partsString === null) {
                partsString = partString;
              } else {
                partsString = "".concat(partsString, " ").concat(partString);
              }
              return partsString;
            }, null), string = "( ".concat(partsString1, " )");
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(SequenceOfPartsPart2.prototype), "clone", this).call(this, SequenceOfPartsPart2, this.parts);
          }
        }
      ], [
        {
          key: "fromNodes",
          value: function fromNodes(nodes) {
            var allButFirstAndLastNodes = (0, _array).allButFirstAndLast(nodes);
            nodes = allButFirstAndLastNodes;
            var lookAhead = false, parts = nodes.map(function(node) {
              var part = node.generatePart(lookAhead);
              return part;
            }), sequenceOfPartsPart = new SequenceOfPartsPart2(parts);
            return sequenceOfPartsPart;
          }
        }
      ]);
      return SequenceOfPartsPart2;
    }(_nonTerminal.default);
    exports.default = SequenceOfPartsPart;
  });

  // node_modules/occam-parsers/lib/definition/definitions.js
  var require_definitions2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    var _zeroOrMoreParts = _interopRequireDefault2(require_zeroOrMoreParts());
    var _sequenceOfParts = _interopRequireDefault2(require_sequenceOfParts());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var verticalBar = _occamLexers.specialSymbols.verticalBar;
    var DefinitionsDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(DefinitionsDefinition2, Definition);
      var _super = _createSuper(DefinitionsDefinition2);
      function DefinitionsDefinition2() {
        _classCallCheck(this, DefinitionsDefinition2);
        var definitionRuleName = _ruleNames.DefinitionRuleName, verticalBarTerminalSymbolContent = verticalBar, definitionRuleNamePart = new _ruleName.default(definitionRuleName), verticalBarTerminalSymbolPart = new _terminalSymbol.default(verticalBarTerminalSymbolContent), verticalBarTerminalSymbolThenDefinitionRuleNameParts = [
          verticalBarTerminalSymbolPart,
          definitionRuleNamePart
        ], sequenceOfPartsPart = new _sequenceOfParts.default(verticalBarTerminalSymbolThenDefinitionRuleNameParts), zeroOrMoreSequenceOfPartsPart = new _zeroOrMoreParts.default(sequenceOfPartsPart), parts = [
          definitionRuleNamePart,
          zeroOrMoreSequenceOfPartsPart
        ];
        return _super.call(this, parts);
      }
      return DefinitionsDefinition2;
    }(_definition.default);
    exports.default = DefinitionsDefinition;
  });

  // node_modules/occam-parsers/lib/rule/definitions.js
  var require_definitions3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _definitions = _interopRequireDefault2(require_definitions());
    var _definitions1 = _interopRequireDefault2(require_definitions2());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var DefinitionsRule = /* @__PURE__ */ function(Rule) {
      _inherits(DefinitionsRule2, Rule);
      var _super = _createSuper(DefinitionsRule2);
      function DefinitionsRule2() {
        _classCallCheck(this, DefinitionsRule2);
        var definitionsDefinition = new _definitions1.default(), name = _ruleNames.DefinitionsRuleName, ambiguous = false, definitions = [
          definitionsDefinition
        ], Node2 = _definitions.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return DefinitionsRule2;
    }(_rule.default);
    exports.default = DefinitionsRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/part/terminal.js
  var require_terminal4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _array = require_array3();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var TerminalPartBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(TerminalPartBNFNode2, NonTerminalNode);
      var _super = _createSuper(TerminalPartBNFNode2);
      function TerminalPartBNFNode2() {
        _classCallCheck(this, TerminalPartBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(TerminalPartBNFNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), node = firstChildNode, part = node.generatePart(lookAhead);
            return part;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(TerminalPartBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return TerminalPartBNFNode2;
    }(_nonTerminal.default);
    exports.default = TerminalPartBNFNode;
  });

  // node_modules/occam-parsers/lib/rule/terminalPart.js
  var require_terminalPart = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _terminal = _interopRequireDefault2(require_terminal4());
    var _ruleName = _interopRequireDefault2(require_ruleName3());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var TerminalPartRule = /* @__PURE__ */ function(Rule) {
      _inherits(TerminalPartRule2, Rule);
      var _super = _createSuper(TerminalPartRule2);
      function TerminalPartRule2() {
        _classCallCheck(this, TerminalPartRule2);
        var name = _ruleNames.TerminalPartRuleName, wildcardRuleName = _ruleNames.WildcardRuleName, endOfLineRuleName = _ruleNames.EndOfLineRuleName, terminalSymbolRuleName = _ruleNames.TerminalSymbolRuleName, regularExpressionRuleName = _ruleNames.RegularExpressionRuleName, significantTokenTypeRuleName = _ruleNames.SignificantTokenTypeRuleName, wildcardRuleNameDefinition = new _ruleName.default(wildcardRuleName), endOfLineRuleNameDefinition = new _ruleName.default(endOfLineRuleName), terminalSymbolRuleNameDefinition = new _ruleName.default(terminalSymbolRuleName), regularExpressionRuleNameDefinition = new _ruleName.default(regularExpressionRuleName), significantTokenTypeRuleNameDefinition = new _ruleName.default(significantTokenTypeRuleName), ambiguous = false, definitions = [
          significantTokenTypeRuleNameDefinition,
          regularExpressionRuleNameDefinition,
          terminalSymbolRuleNameDefinition,
          endOfLineRuleNameDefinition,
          wildcardRuleNameDefinition
        ], Node2 = _terminal.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return TerminalPartRule2;
    }(_rule.default);
    exports.default = TerminalPartRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/choiceOfParts.js
  var require_choiceOfParts2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _choiceOfParts = _interopRequireDefault2(require_choiceOfParts());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var ChoiceOfPartsBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(ChoiceOfPartsBNFNode2, NonTerminalNode);
      var _super = _createSuper(ChoiceOfPartsBNFNode2);
      function ChoiceOfPartsBNFNode2() {
        _classCallCheck(this, ChoiceOfPartsBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(ChoiceOfPartsBNFNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = _choiceOfParts.default.fromNodes(nodes);
            return part;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(ChoiceOfPartsBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return ChoiceOfPartsBNFNode2;
    }(_nonTerminal.default);
    exports.default = ChoiceOfPartsBNFNode;
  });

  // node_modules/occam-parsers/lib/definition/choiceOfParts.js
  var require_choiceOfParts3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _oneOrMoreParts = _interopRequireDefault2(require_oneOrMoreParts());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    var _sequenceOfParts = _interopRequireDefault2(require_sequenceOfParts());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var verticalBar = _occamLexers.specialSymbols.verticalBar;
    var openBracket = _occamLexers.specialSymbols.openBracket;
    var closeBracket = _occamLexers.specialSymbols.closeBracket;
    var ChoiceOfPartsDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(ChoiceOfPartsDefinition2, Definition);
      var _super = _createSuper(ChoiceOfPartsDefinition2);
      function ChoiceOfPartsDefinition2() {
        _classCallCheck(this, ChoiceOfPartsDefinition2);
        var partRuleName = _ruleNames.PartRuleName, verticalBarTerminalSymbolContent = verticalBar, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partRuleNamePart = new _ruleName.default(partRuleName), verticalBarTerminalSymbolPart = new _terminalSymbol.default(verticalBarTerminalSymbolContent), openBracketTerminalSymbolPart = new _terminalSymbol.default(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = new _terminalSymbol.default(closeBracketTerminalSymbolContent), verticalBarTerminalSymbolThenPartRuleNameParts = [
          verticalBarTerminalSymbolPart,
          partRuleNamePart
        ], sequenceOfPartsPart = new _sequenceOfParts.default(verticalBarTerminalSymbolThenPartRuleNameParts), oneOrMoreSequenceOfPartsPart = new _oneOrMoreParts.default(sequenceOfPartsPart), parts = [
          openBracketTerminalSymbolPart,
          partRuleNamePart,
          oneOrMoreSequenceOfPartsPart,
          closeBracketTerminalSymbolPart
        ];
        return _super.call(this, parts);
      }
      return ChoiceOfPartsDefinition2;
    }(_definition.default);
    exports.default = ChoiceOfPartsDefinition;
  });

  // node_modules/occam-parsers/lib/rule/choiceOfParts.js
  var require_choiceOfParts4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _choiceOfParts = _interopRequireDefault2(require_choiceOfParts2());
    var _choiceOfParts1 = _interopRequireDefault2(require_choiceOfParts3());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var ChoiceOfPartsRule = /* @__PURE__ */ function(Rule) {
      _inherits(ChoiceOfPartsRule2, Rule);
      var _super = _createSuper(ChoiceOfPartsRule2);
      function ChoiceOfPartsRule2() {
        _classCallCheck(this, ChoiceOfPartsRule2);
        var name = _ruleNames.ChoiceOfPartsRuleName, choiceOfPartsDefinition = new _choiceOfParts1.default(), ambiguous = false, definitions = [
          choiceOfPartsDefinition
        ], Node2 = _choiceOfParts.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return ChoiceOfPartsRule2;
    }(_rule.default);
    exports.default = ChoiceOfPartsRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/terminalSymbol.js
  var require_terminalSymbol3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    var _array = require_array3();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var TerminalSymbolBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(TerminalSymbolBNFNode2, NonTerminalNode);
      var _super = _createSuper(TerminalSymbolBNFNode2);
      function TerminalSymbolBNFNode2() {
        _classCallCheck(this, TerminalSymbolBNFNode2);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "regularExpression", /^"((?:\\.|[^"\\])*)"$/);
        return _this;
      }
      _createClass(TerminalSymbolBNFNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var content = this.getContent(), terminalSymbolPart = new _terminalSymbol.default(content);
            return terminalSymbolPart;
          }
        },
        {
          key: "getContent",
          value: function getContent() {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = (0, _array).second(matches), content = secondMatch.replace(/\\\\/g, "\\").replace(/\\"/g, '"');
            return content;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(TerminalSymbolBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return TerminalSymbolBNFNode2;
    }(_nonTerminal.default);
    exports.default = TerminalSymbolBNFNode;
  });

  // node_modules/occam-parsers/lib/definition/significantTokenType.js
  var require_significantTokenType2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType());
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var SignificantTokenTypeDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(SignificantTokenTypeDefinition2, Definition);
      var _super = _createSuper(SignificantTokenTypeDefinition2);
      function SignificantTokenTypeDefinition2(significantTokenType) {
        _classCallCheck(this, SignificantTokenTypeDefinition2);
        var significantTokenTypePart = new _significantTokenType.default(significantTokenType), parts = [
          significantTokenTypePart
        ];
        return _super.call(this, parts);
      }
      return SignificantTokenTypeDefinition2;
    }(_definition.default);
    exports.default = SignificantTokenTypeDefinition;
  });

  // node_modules/occam-parsers/lib/rule/terminalSymbol.js
  var require_terminalSymbol4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol3());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType2());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var stringLiteralType = _occamLexers.types.stringLiteralType;
    var TerminalSymbolRule = /* @__PURE__ */ function(Rule) {
      _inherits(TerminalSymbolRule2, Rule);
      var _super = _createSuper(TerminalSymbolRule2);
      function TerminalSymbolRule2() {
        _classCallCheck(this, TerminalSymbolRule2);
        var stringLiteralSignificantTokenType = stringLiteralType, stringLiteralSignificantTokenTypeDefinition = new _significantTokenType.default(stringLiteralSignificantTokenType), name = _ruleNames.TerminalSymbolRuleName, ambiguous = false, definitions = [
          stringLiteralSignificantTokenTypeDefinition
        ], Node2 = _terminalSymbol.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return TerminalSymbolRule2;
    }(_rule.default);
    exports.default = TerminalSymbolRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/part/nonTerminal.js
  var require_nonTerminal4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var NonTerminalPartBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(NonTerminalPartBNFNode2, NonTerminalNode);
      var _super = _createSuper(NonTerminalPartBNFNode2);
      function NonTerminalPartBNFNode2() {
        _classCallCheck(this, NonTerminalPartBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(NonTerminalPartBNFNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = partFromNodes(nodes, lookAhead);
            return part;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(NonTerminalPartBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return NonTerminalPartBNFNode2;
    }(_nonTerminal.default);
    exports.default = NonTerminalPartBNFNode;
    function partFromNodes(nodes, lookAhead) {
      var part = null;
      var nodesLength = nodes.length;
      if (nodesLength === 1) {
        var node = nodes.pop();
        part = node.generatePart(lookAhead);
      } else {
        nodes.pop();
        lookAhead = true;
        part = partFromNodes(nodes, lookAhead);
      }
      return part;
    }
  });

  // node_modules/occam-parsers/lib/definition/partRule/nonTerminal/ruleName.js
  var require_ruleName6 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _optionalPart = _interopRequireDefault2(require_optionalPart());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var RuleNameNonTerminalPartRuleDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(RuleNameNonTerminalPartRuleDefinition2, Definition);
      var _super = _createSuper(RuleNameNonTerminalPartRuleDefinition2);
      function RuleNameNonTerminalPartRuleDefinition2() {
        _classCallCheck(this, RuleNameNonTerminalPartRuleDefinition2);
        var ruleNameRuleName = _ruleNames.RuleNameRuleName, lookAheadModifierRuleName = _ruleNames.LookAheadModifierRuleName, ruleNameRuleNamePart = new _ruleName.default(ruleNameRuleName), lookAheadModifierRuleNamePart = new _ruleName.default(lookAheadModifierRuleName), optionalLookAheadRuleNamePartPart = new _optionalPart.default(lookAheadModifierRuleNamePart), parts = [
          ruleNameRuleNamePart,
          optionalLookAheadRuleNamePartPart
        ];
        return _super.call(this, parts);
      }
      return RuleNameNonTerminalPartRuleDefinition2;
    }(_definition.default);
    exports.default = RuleNameNonTerminalPartRuleDefinition;
  });

  // node_modules/occam-parsers/lib/rule/nonTerminalPart.js
  var require_nonTerminalPart = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _ruleName = _interopRequireDefault2(require_ruleName3());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal4());
    var _ruleName1 = _interopRequireDefault2(require_ruleName6());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var NonTerminalPartRule = /* @__PURE__ */ function(Rule) {
      _inherits(NonTerminalPartRule2, Rule);
      var _super = _createSuper(NonTerminalPartRule2);
      function NonTerminalPartRule2() {
        _classCallCheck(this, NonTerminalPartRule2);
        var name = _ruleNames.NonTerminalPartRuleName, choiceOfPartsRuleName = _ruleNames.ChoiceOfPartsRuleName, sequenceOfPartsRuleName = _ruleNames.SequenceOfPartsRuleName, choiceOfPartsRuleNameDefinition = new _ruleName.default(choiceOfPartsRuleName), sequenceOfPartsRuleNameDefinition = new _ruleName.default(sequenceOfPartsRuleName), ruleNameNonTerminalPartRuleDefinition = new _ruleName1.default(), ambiguous = false, definitions = [
          choiceOfPartsRuleNameDefinition,
          sequenceOfPartsRuleNameDefinition,
          ruleNameNonTerminalPartRuleDefinition
        ], Node2 = _nonTerminal.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return NonTerminalPartRule2;
    }(_rule.default);
    exports.default = NonTerminalPartRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/sequenceOfParts.js
  var require_sequenceOfParts2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _sequenceOfParts = _interopRequireDefault2(require_sequenceOfParts());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var SequenceOfPartsBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(SequenceOfPartsBNFNode2, NonTerminalNode);
      var _super = _createSuper(SequenceOfPartsBNFNode2);
      function SequenceOfPartsBNFNode2() {
        _classCallCheck(this, SequenceOfPartsBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(SequenceOfPartsBNFNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = _sequenceOfParts.default.fromNodes(nodes);
            return part;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(SequenceOfPartsBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return SequenceOfPartsBNFNode2;
    }(_nonTerminal.default);
    exports.default = SequenceOfPartsBNFNode;
  });

  // node_modules/occam-parsers/lib/definition/sequenceOfParts.js
  var require_sequenceOfParts3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    var _oneOrMoreParts = _interopRequireDefault2(require_oneOrMoreParts());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var openBracket = _occamLexers.specialSymbols.openBracket;
    var closeBracket = _occamLexers.specialSymbols.closeBracket;
    var SequenceOfPartsDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(SequenceOfPartsDefinition2, Definition);
      var _super = _createSuper(SequenceOfPartsDefinition2);
      function SequenceOfPartsDefinition2() {
        _classCallCheck(this, SequenceOfPartsDefinition2);
        var partRuleName = _ruleNames.PartRuleName, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partRuleNamePart = new _ruleName.default(partRuleName), openBracketTerminalSymbolPart = new _terminalSymbol.default(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = new _terminalSymbol.default(closeBracketTerminalSymbolContent), oneOrMorePartRuleNamePartsPart = new _oneOrMoreParts.default(partRuleNamePart), parts = [
          openBracketTerminalSymbolPart,
          partRuleNamePart,
          oneOrMorePartRuleNamePartsPart,
          closeBracketTerminalSymbolPart
        ];
        return _super.call(this, parts);
      }
      return SequenceOfPartsDefinition2;
    }(_definition.default);
    exports.default = SequenceOfPartsDefinition;
  });

  // node_modules/occam-parsers/lib/rule/sequenceOfParts.js
  var require_sequenceOfParts4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _sequenceOfParts = _interopRequireDefault2(require_sequenceOfParts2());
    var _sequenceOfParts1 = _interopRequireDefault2(require_sequenceOfParts3());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var SequenceOfPartsRule = /* @__PURE__ */ function(Rule) {
      _inherits(SequenceOfPartsRule2, Rule);
      var _super = _createSuper(SequenceOfPartsRule2);
      function SequenceOfPartsRule2() {
        _classCallCheck(this, SequenceOfPartsRule2);
        var name = _ruleNames.SequenceOfPartsRuleName, sequenceOfPartsDefinition = new _sequenceOfParts1.default(), ambiguous = false, definitions = [
          sequenceOfPartsDefinition
        ], Node2 = _sequenceOfParts.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return SequenceOfPartsRule2;
    }(_rule.default);
    exports.default = SequenceOfPartsRule;
  });

  // node_modules/occam-parsers/lib/parseTree/noWhitespaceNode.js
  var require_noWhitespaceNode = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;
    var NoWhitespaceNodeParseTree = /* @__PURE__ */ function(VerticalBranchParseTree) {
      _inherits(NoWhitespaceNodeParseTree2, VerticalBranchParseTree);
      var _super = _createSuper(NoWhitespaceNodeParseTree2);
      function NoWhitespaceNodeParseTree2() {
        _classCallCheck(this, NoWhitespaceNodeParseTree2);
        return _super.apply(this, arguments);
      }
      _createClass(NoWhitespaceNodeParseTree2, null, [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var string = NO_WHITESPACE, stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(NoWhitespaceNodeParseTree2, string, verticalBranchPosition);
            terminalNodeParseTree.appendToTop(verticalBranchParseTree);
            var noWhitespaceNodeParseTree = terminalNodeParseTree;
            return noWhitespaceNodeParseTree;
          }
        }
      ]);
      return NoWhitespaceNodeParseTree2;
    }(_verticalBranch.default);
    exports.default = NoWhitespaceNodeParseTree;
  });

  // node_modules/occam-parsers/lib/node/terminal/noWhitespace.js
  var require_noWhitespace = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _terminal = _interopRequireDefault2(require_terminal2());
    var _noWhitespaceNode = _interopRequireDefault2(require_noWhitespaceNode());
    var _constants = require_constants4();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var NoWhitespaceNode = /* @__PURE__ */ function(TerminalNode) {
      _inherits(NoWhitespaceNode2, TerminalNode);
      var _super = _createSuper(NoWhitespaceNode2);
      function NoWhitespaceNode2() {
        _classCallCheck(this, NoWhitespaceNode2);
        return _super.apply(this, arguments);
      }
      _createClass(NoWhitespaceNode2, [
        {
          key: "getType",
          value: function getType() {
            var type = null;
            return type;
          }
        },
        {
          key: "getContent",
          value: function getContent() {
            var content = _constants.EMPTY_STRING;
            return content;
          }
        },
        {
          key: "isNoWhitespaceNode",
          value: function isNoWhitespaceNode() {
            var noWhitespaceNode = true;
            return noWhitespaceNode;
          }
        },
        {
          key: "asParseTree",
          value: function asParseTree(tokens) {
            var noWhitespaceNodeParseTree = _noWhitespaceNode.default.fromNothing(), parseTree = noWhitespaceNodeParseTree;
            return parseTree;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var significantToken = null, noWhitespaceNode = _terminal.default.fromSignificantToken(NoWhitespaceNode2, significantToken);
            return noWhitespaceNode;
          }
        }
      ]);
      return NoWhitespaceNode2;
    }(_terminal.default);
    exports.default = NoWhitespaceNode;
  });

  // node_modules/occam-parsers/lib/part/terminal/noWhitespace.js
  var require_noWhitespace2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _terminal = _interopRequireDefault2(require_terminal());
    var _noWhitespace = _interopRequireDefault2(require_noWhitespace());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;
    var NoWhitespacePart = /* @__PURE__ */ function(TerminalPart) {
      _inherits(NoWhitespacePart2, TerminalPart);
      var _super = _createSuper(NoWhitespacePart2);
      function NoWhitespacePart2() {
        _classCallCheck(this, NoWhitespacePart2);
        return _super.apply(this, arguments);
      }
      _createClass(NoWhitespacePart2, [
        {
          key: "isNoWhitespacePart",
          value: function isNoWhitespacePart() {
            var noWhitespacePart = true;
            return noWhitespacePart;
          }
        },
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            var noWhitespaceNode = null;
            var savedIndex = state.getSavedIndex(), nextTokenWhitespaceToken = state.isNextTokenWhitespaceToken();
            if (!nextTokenWhitespaceToken) {
              noWhitespaceNode = _noWhitespace.default.fromNothing();
            }
            parsed = noWhitespaceNode !== null;
            if (parsed) {
              nodes.push(noWhitespaceNode);
              if (callback !== null) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            if (!parsed) {
              state.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var string = NO_WHITESPACE;
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(NoWhitespacePart2.prototype), "clone", this).call(this, NoWhitespacePart2);
          }
        }
      ]);
      return NoWhitespacePart2;
    }(_terminal.default);
    exports.default = NoWhitespacePart;
  });

  // node_modules/occam-parsers/lib/node/bnf/noWhitespacePart.js
  var require_noWhitespacePart = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _noWhitespace = _interopRequireDefault2(require_noWhitespace2());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var NoWhitespacePartBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(NoWhitespacePartBNFNode2, NonTerminalNode);
      var _super = _createSuper(NoWhitespacePartBNFNode2);
      function NoWhitespacePartBNFNode2() {
        _classCallCheck(this, NoWhitespacePartBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(NoWhitespacePartBNFNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var noWhitespacePart = new _noWhitespace.default();
            return noWhitespacePart;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(NoWhitespacePartBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return NoWhitespacePartBNFNode2;
    }(_nonTerminal.default);
    exports.default = NoWhitespacePartBNFNode;
  });

  // node_modules/occam-parsers/lib/definition/noWhitespacePart.js
  var require_noWhitespacePart2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;
    var NoWhitespacePartDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(NoWhitespacePartDefinition2, Definition);
      var _super = _createSuper(NoWhitespacePartDefinition2);
      function NoWhitespacePartDefinition2() {
        _classCallCheck(this, NoWhitespacePartDefinition2);
        var content = NO_WHITESPACE, terminalSymbolPart = new _terminalSymbol.default(content), parts = [
          terminalSymbolPart
        ];
        return _super.call(this, parts);
      }
      return NoWhitespacePartDefinition2;
    }(_definition.default);
    exports.default = NoWhitespacePartDefinition;
  });

  // node_modules/occam-parsers/lib/rule/noWhitespacePart.js
  var require_noWhitespacePart3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _noWhitespacePart = _interopRequireDefault2(require_noWhitespacePart());
    var _noWhitespacePart1 = _interopRequireDefault2(require_noWhitespacePart2());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var NoWhitespacePartRule = /* @__PURE__ */ function(Rule) {
      _inherits(NoWhitespacePartRule2, Rule);
      var _super = _createSuper(NoWhitespacePartRule2);
      function NoWhitespacePartRule2() {
        _classCallCheck(this, NoWhitespacePartRule2);
        var noWhitespacePartDefinition = new _noWhitespacePart1.default(), name = _ruleNames.NoWhitespacePartRuleName, ambiguous = false, definitions = [
          noWhitespacePartDefinition
        ], Node2 = _noWhitespacePart.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return NoWhitespacePartRule2;
    }(_rule.default);
    exports.default = NoWhitespacePartRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/modifier.js
  var require_modifier = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var ModifierBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(ModifierBNFNode2, NonTerminalNode);
      var _super = _createSuper(ModifierBNFNode2);
      function ModifierBNFNode2() {
        _classCallCheck(this, ModifierBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(ModifierBNFNode2, null, [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(ModifierBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return ModifierBNFNode2;
    }(_nonTerminal.default);
    exports.default = ModifierBNFNode;
  });

  // node_modules/occam-parsers/lib/definition/lookAheadModifierRule.js
  var require_lookAheadModifierRule = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _noWhitespace = _interopRequireDefault2(require_noWhitespace2());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var ellipsis = _occamLexers.specialSymbols.ellipsis;
    var LookAheadModifierRuleDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(LookAheadModifierRuleDefinition2, Definition);
      var _super = _createSuper(LookAheadModifierRuleDefinition2);
      function LookAheadModifierRuleDefinition2() {
        _classCallCheck(this, LookAheadModifierRuleDefinition2);
        var content = ellipsis, noWhitespacePart = new _noWhitespace.default(), terminalSymbolPart = new _terminalSymbol.default(content), parts = [
          noWhitespacePart,
          terminalSymbolPart
        ];
        return _super.call(this, parts);
      }
      return LookAheadModifierRuleDefinition2;
    }(_definition.default);
    exports.default = LookAheadModifierRuleDefinition;
  });

  // node_modules/occam-parsers/lib/rule/lookAheadModifier.js
  var require_lookAheadModifier = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _modifier = _interopRequireDefault2(require_modifier());
    var _lookAheadModifierRule = _interopRequireDefault2(require_lookAheadModifierRule());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var LookAheadModifierRule = /* @__PURE__ */ function(Rule) {
      _inherits(LookAheadModifierRule2, Rule);
      var _super = _createSuper(LookAheadModifierRule2);
      function LookAheadModifierRule2() {
        _classCallCheck(this, LookAheadModifierRule2);
        var name = _ruleNames.LookAheadModifierRuleName, lookAheadModifierRuleDefinition = new _lookAheadModifierRule.default(), ambiguous = false, definitions = [
          lookAheadModifierRuleDefinition
        ], Node2 = _modifier.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return LookAheadModifierRule2;
    }(_rule.default);
    exports.default = LookAheadModifierRule;
  });

  // node_modules/occam-parsers/lib/definition/ambiguousModifierRule.js
  var require_ambiguousModifierRule = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _noWhitespace = _interopRequireDefault2(require_noWhitespace2());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var exclamationMark = _occamLexers.specialSymbols.exclamationMark;
    var AmbiguousModifierRuleDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(AmbiguousModifierRuleDefinition2, Definition);
      var _super = _createSuper(AmbiguousModifierRuleDefinition2);
      function AmbiguousModifierRuleDefinition2() {
        _classCallCheck(this, AmbiguousModifierRuleDefinition2);
        var content = exclamationMark, noWhitespacePart = new _noWhitespace.default(), terminalSymbolPart = new _terminalSymbol.default(content), parts = [
          noWhitespacePart,
          terminalSymbolPart
        ];
        return _super.call(this, parts);
      }
      return AmbiguousModifierRuleDefinition2;
    }(_definition.default);
    exports.default = AmbiguousModifierRuleDefinition;
  });

  // node_modules/occam-parsers/lib/rule/ambiguousModifier.js
  var require_ambiguousModifier = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _modifier = _interopRequireDefault2(require_modifier());
    var _ambiguousModifierRule = _interopRequireDefault2(require_ambiguousModifierRule());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var AmbiguousModifierRule = /* @__PURE__ */ function(Rule) {
      _inherits(AmbiguousModifierRule2, Rule);
      var _super = _createSuper(AmbiguousModifierRule2);
      function AmbiguousModifierRule2() {
        _classCallCheck(this, AmbiguousModifierRule2);
        var name = _ruleNames.AmbiguousModifierRuleName, ambiguousModifierRuleDefinition = new _ambiguousModifierRule.default(), ambiguous = false, definitions = [
          ambiguousModifierRuleDefinition
        ], Node2 = _modifier.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return AmbiguousModifierRule2;
    }(_rule.default);
    exports.default = AmbiguousModifierRule;
  });

  // node_modules/occam-parsers/lib/part/terminal/regularExpression.js
  var require_regularExpression2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _terminal = _interopRequireDefault2(require_terminal());
    var _terminal1 = _interopRequireDefault2(require_terminal2());
    var _array = require_array3();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var RegularExpressionPart = /* @__PURE__ */ function(TerminalPart) {
      _inherits(RegularExpressionPart2, TerminalPart);
      var _super = _createSuper(RegularExpressionPart2);
      function RegularExpressionPart2(regularExpression) {
        _classCallCheck(this, RegularExpressionPart2);
        var _this;
        _this = _super.call(this);
        _this.regularExpression = regularExpression;
        return _this;
      }
      _createClass(RegularExpressionPart2, [
        {
          key: "parse",
          value: function parse(nodes, state, callback) {
            var parsed;
            var terminalNode = null;
            var savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken;
            if (significantToken !== null) {
              var content = significantToken.getContent(), matches = content.match(this.regularExpression);
              if (matches !== null) {
                var firstMatch = (0, _array).first(matches);
                if (firstMatch === content) {
                  terminalNode = _terminal1.default.fromSignificantToken(significantToken);
                }
              }
            }
            parsed = terminalNode !== null;
            if (parsed) {
              nodes.push(terminalNode);
              if (callback !== null) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            if (!parsed) {
              state.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var regularExpressionString = this.regularExpression.toString(), string = regularExpressionString;
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(RegularExpressionPart2.prototype), "clone", this).call(this, RegularExpressionPart2, this.regularExpression);
          }
        }
      ]);
      return RegularExpressionPart2;
    }(_terminal.default);
    exports.default = RegularExpressionPart;
  });

  // node_modules/occam-parsers/lib/node/bnf/regularExpression.js
  var require_regularExpression3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _regularExpression = _interopRequireDefault2(require_regularExpression2());
    var _array = require_array3();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var RegularExpressionBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(RegularExpressionBNFNode2, NonTerminalNode);
      var _super = _createSuper(RegularExpressionBNFNode2);
      function RegularExpressionBNFNode2() {
        _classCallCheck(this, RegularExpressionBNFNode2);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "regularExpression", /^\/((?:\\.|[^\/])*)\/$/);
        return _this;
      }
      _createClass(RegularExpressionBNFNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var regularExpression = this.getRegularExpression(), regularExpressionPart = new _regularExpression.default(regularExpression);
            return regularExpressionPart;
          }
        },
        {
          key: "getRegularExpression",
          value: function getRegularExpression() {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = (0, _array).second(matches), pattern = secondMatch, regularExpression = new RegExp(pattern);
            return regularExpression;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(RegularExpressionBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return RegularExpressionBNFNode2;
    }(_nonTerminal.default);
    exports.default = RegularExpressionBNFNode;
  });

  // node_modules/occam-parsers/lib/rule/regularExpression.js
  var require_regularExpression4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _regularExpression = _interopRequireDefault2(require_regularExpression3());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType2());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var regularExpressionType = _occamLexers.types.regularExpressionType;
    var RegularExpressionRule = /* @__PURE__ */ function(Rule) {
      _inherits(RegularExpressionRule2, Rule);
      var _super = _createSuper(RegularExpressionRule2);
      function RegularExpressionRule2() {
        _classCallCheck(this, RegularExpressionRule2);
        var regularExpressionSignificantTokenType = regularExpressionType, regularExpressionSignificantTokenTypeDefinition = new _significantTokenType.default(regularExpressionSignificantTokenType), name = _ruleNames.RegularExpressionRuleName, ambiguous = false, definitions = [
          regularExpressionSignificantTokenTypeDefinition
        ], Node2 = _regularExpression.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return RegularExpressionRule2;
    }(_rule.default);
    exports.default = RegularExpressionRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/quantifier.js
  var require_quantifier2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var QuantifierBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(QuantifierBNFNode2, NonTerminalNode);
      var _super = _createSuper(QuantifierBNFNode2);
      function QuantifierBNFNode2() {
        _classCallCheck(this, QuantifierBNFNode2);
        return _super.apply(this, arguments);
      }
      _createClass(QuantifierBNFNode2, null, [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(QuantifierBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return QuantifierBNFNode2;
    }(_nonTerminal.default);
    exports.default = QuantifierBNFNode;
  });

  // node_modules/occam-parsers/lib/definition/quantifierRule.js
  var require_quantifierRule = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _noWhitespace = _interopRequireDefault2(require_noWhitespace2());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var QuantifierRuleDefinition = /* @__PURE__ */ function(Definition) {
      _inherits(QuantifierRuleDefinition2, Definition);
      var _super = _createSuper(QuantifierRuleDefinition2);
      function QuantifierRuleDefinition2(terminalSymbolContent) {
        _classCallCheck(this, QuantifierRuleDefinition2);
        var content = terminalSymbolContent, noWhitespacePart = new _noWhitespace.default(), terminalSymbolPart = new _terminalSymbol.default(content), parts = [
          noWhitespacePart,
          terminalSymbolPart
        ];
        return _super.call(this, parts);
      }
      return QuantifierRuleDefinition2;
    }(_definition.default);
    exports.default = QuantifierRuleDefinition;
  });

  // node_modules/occam-parsers/lib/rule/optionalQuantifier.js
  var require_optionalQuantifier = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _quantifier = _interopRequireDefault2(require_quantifier2());
    var _quantifierRule = _interopRequireDefault2(require_quantifierRule());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var questionMark = _occamLexers.specialSymbols.questionMark;
    var OptionalQuantifierRule = /* @__PURE__ */ function(Rule) {
      _inherits(OptionalQuantifierRule2, Rule);
      var _super = _createSuper(OptionalQuantifierRule2);
      function OptionalQuantifierRule2() {
        _classCallCheck(this, OptionalQuantifierRule2);
        var name = _ruleNames.OptionalQuantifierRuleName, optionalQuantifierTerminalSymbolContent = questionMark, optionalQuantifierRuleDefinition = new _quantifierRule.default(optionalQuantifierTerminalSymbolContent), ambiguous = false, definitions = [
          optionalQuantifierRuleDefinition
        ], Node2 = _quantifier.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return OptionalQuantifierRule2;
    }(_rule.default);
    exports.default = OptionalQuantifierRule;
  });

  // node_modules/occam-parsers/lib/rule/oneOrMoreQuantifier.js
  var require_oneOrMoreQuantifier = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _quantifier = _interopRequireDefault2(require_quantifier2());
    var _quantifierRule = _interopRequireDefault2(require_quantifierRule());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var plus = _occamLexers.specialSymbols.plus;
    var OneOrMoreQuantifierRule = /* @__PURE__ */ function(Rule) {
      _inherits(OneOrMoreQuantifierRule2, Rule);
      var _super = _createSuper(OneOrMoreQuantifierRule2);
      function OneOrMoreQuantifierRule2() {
        _classCallCheck(this, OneOrMoreQuantifierRule2);
        var name = _ruleNames.OneOrMoreQuantifierRuleName, oneOrMoreQuantifierTerminalSymbolContent = plus, oneOrMoreQuantifierRuleDefinition = new _quantifierRule.default(oneOrMoreQuantifierTerminalSymbolContent), ambiguous = false, definitions = [
          oneOrMoreQuantifierRuleDefinition
        ], Node2 = _quantifier.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return OneOrMoreQuantifierRule2;
    }(_rule.default);
    exports.default = OneOrMoreQuantifierRule;
  });

  // node_modules/occam-parsers/lib/rule/zeroOrMoreQuantifier.js
  var require_zeroOrMoreQuantifier = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _quantifier = _interopRequireDefault2(require_quantifier2());
    var _quantifierRule = _interopRequireDefault2(require_quantifierRule());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var asterisk = _occamLexers.specialSymbols.asterisk;
    var ZeroOrMoreQuantifierRule = /* @__PURE__ */ function(Rule) {
      _inherits(ZeroOrMoreQuantifierRule2, Rule);
      var _super = _createSuper(ZeroOrMoreQuantifierRule2);
      function ZeroOrMoreQuantifierRule2() {
        _classCallCheck(this, ZeroOrMoreQuantifierRule2);
        var name = _ruleNames.ZeroOrMoreQuantifierRuleName, zeroOrMoreQuantifierTerminalSymbolContent = asterisk, zeroOrMoreQuantifierRuleDefinition = new _quantifierRule.default(zeroOrMoreQuantifierTerminalSymbolContent), ambiguous = false, definitions = [
          zeroOrMoreQuantifierRuleDefinition
        ], Node2 = _quantifier.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return ZeroOrMoreQuantifierRule2;
    }(_rule.default);
    exports.default = ZeroOrMoreQuantifierRule;
  });

  // node_modules/occam-parsers/lib/node/bnf/significantTokenType.js
  var require_significantTokenType3 = __commonJS((exports, module) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType());
    var _array = require_array3();
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var SignificantTokenTypeBNFNode = /* @__PURE__ */ function(NonTerminalNode) {
      _inherits(SignificantTokenTypeBNFNode2, NonTerminalNode);
      var _super = _createSuper(SignificantTokenTypeBNFNode2);
      function SignificantTokenTypeBNFNode2() {
        _classCallCheck(this, SignificantTokenTypeBNFNode2);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "regularExpression", /^\[([^\]]+)]$/);
        return _this;
      }
      _createClass(SignificantTokenTypeBNFNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var significantTokenType = this.getSignificantTokenType(), significantTokenTypePart = new _significantTokenType.default(significantTokenType);
            return significantTokenTypePart;
          }
        },
        {
          key: "getSignificantTokenType",
          value: function getSignificantTokenType() {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = (0, _array).second(matches), significantTokenType = secondMatch;
            return significantTokenType;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(SignificantTokenTypeBNFNode2, ruleName, childNodes);
          }
        }
      ]);
      return SignificantTokenTypeBNFNode2;
    }(_nonTerminal.default);
    exports.default = SignificantTokenTypeBNFNode;
    module.exports = SignificantTokenTypeBNFNode;
  });

  // node_modules/occam-parsers/lib/rule/significantTokenType.js
  var require_significantTokenType4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType3());
    var _significantTokenType1 = _interopRequireDefault2(require_significantTokenType2());
    var _ruleNames = require_ruleNames();
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
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var typeType = _occamLexers.types.typeType;
    var SignificantTokenTypeRule = /* @__PURE__ */ function(Rule) {
      _inherits(SignificantTokenTypeRule2, Rule);
      var _super = _createSuper(SignificantTokenTypeRule2);
      function SignificantTokenTypeRule2() {
        _classCallCheck(this, SignificantTokenTypeRule2);
        var typeSignificantTokenType = typeType, typeSignificantTokenTypeDefinition = new _significantTokenType1.default(typeSignificantTokenType), name = _ruleNames.SignificantTokenTypeRuleName, ambiguous = false, definitions = [
          typeSignificantTokenTypeDefinition
        ], Node2 = _significantTokenType.default;
        return _super.call(this, name, ambiguous, definitions, Node2);
      }
      return SignificantTokenTypeRule2;
    }(_rule.default);
    exports.default = SignificantTokenTypeRule;
  });

  // node_modules/occam-parsers/lib/utilities/rules.js
  var require_rules = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ruleMapFromRules = ruleMapFromRules;
    exports.startRuleFromRules = startRuleFromRules;
    var _array = require_array3();
    function ruleMapFromRules(rules) {
      var ruleMap = {};
      rules.forEach(function(rule) {
        var ruleName = rule.getName();
        ruleMap[ruleName] = rule;
      });
      return ruleMap;
    }
    function startRuleFromRules(rules) {
      var firstRule = (0, _array).first(rules), startRule = firstRule;
      return startRule;
    }
  });

  // node_modules/occam-parsers/lib/bnf/parser.js
  var require_parser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _bnf = _interopRequireDefault2(require_bnf());
    var _rule = _interopRequireDefault2(require_rule2());
    var _state = _interopRequireDefault2(require_state2());
    var _name = _interopRequireDefault2(require_name4());
    var _part = _interopRequireDefault2(require_part3());
    var _rule1 = _interopRequireDefault2(require_rule5());
    var _error = _interopRequireDefault2(require_error3());
    var _document = _interopRequireDefault2(require_document4());
    var _ruleName = _interopRequireDefault2(require_ruleName5());
    var _wildcard = _interopRequireDefault2(require_wildcard3());
    var _endOfLine = _interopRequireDefault2(require_endOfLine8());
    var _quantifier = _interopRequireDefault2(require_quantifier());
    var _definition = _interopRequireDefault2(require_definition4());
    var _definitions = _interopRequireDefault2(require_definitions3());
    var _terminalPart = _interopRequireDefault2(require_terminalPart());
    var _choiceOfParts = _interopRequireDefault2(require_choiceOfParts4());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol4());
    var _nonTerminalPart = _interopRequireDefault2(require_nonTerminalPart());
    var _sequenceOfParts = _interopRequireDefault2(require_sequenceOfParts4());
    var _noWhitespacePart = _interopRequireDefault2(require_noWhitespacePart3());
    var _lookAheadModifier = _interopRequireDefault2(require_lookAheadModifier());
    var _ambiguousModifier = _interopRequireDefault2(require_ambiguousModifier());
    var _regularExpression = _interopRequireDefault2(require_regularExpression4());
    var _optionalQuantifier = _interopRequireDefault2(require_optionalQuantifier());
    var _oneOrMoreQuantifier = _interopRequireDefault2(require_oneOrMoreQuantifier());
    var _zeroOrMoreQuantifier = _interopRequireDefault2(require_zeroOrMoreQuantifier());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType4());
    var _rules = require_rules();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var BNFParser = /* @__PURE__ */ function() {
      function BNFParser2(startRule, ruleMap) {
        _classCallCheck(this, BNFParser2);
        this.startRule = startRule;
        this.ruleMap = ruleMap;
      }
      _createClass(BNFParser2, [
        {
          key: "getStartRule",
          value: function getStartRule() {
            return this.startRule;
          }
        },
        {
          key: "getRuleMap",
          value: function getRuleMap() {
            return this.ruleMap;
          }
        },
        {
          key: "parse",
          value: function parse(tokens) {
            var rule = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startRule;
            var state = _state.default.fromTokensAndRuleMap(tokens, this.ruleMap), callback = null, ruleNode = rule.parse(state, callback), node = ruleNode;
            return node;
          }
        },
        {
          key: "rulesFromTokens",
          value: function rulesFromTokens(tokens) {
            var rules;
            var node = this.parse(tokens);
            if (node === null) {
              throw new Error("There is no node.");
            }
            rules = node.generateRules(_rule.default);
            var rulesLength = rules.length;
            if (rulesLength === 0) {
              throw new Error("There are no rules.");
            }
            return rules;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var nameRule = new _name.default(), partRule = new _part.default(), ruleRule = new _rule1.default(), errorRule = new _error.default(), documentRule = new _document.default(), ruleNameRule = new _ruleName.default(), wildcardRule = new _wildcard.default(), endOfLineRule = new _endOfLine.default(), quantifierRule = new _quantifier.default(), definitionRule = new _definition.default(), definitionsRule = new _definitions.default(), terminalPartRule = new _terminalPart.default(), choiceOfPartsRule = new _choiceOfParts.default(), terminalSymbolRule = new _terminalSymbol.default(), nonTerminalPartRule = new _nonTerminalPart.default(), sequenceOfPartsRule = new _sequenceOfParts.default(), noWhitespacePartRule = new _noWhitespacePart.default(), regularExpressionRule = new _regularExpression.default(), lookAheadModifierRule = new _lookAheadModifier.default(), ambiguousModifierRule = new _ambiguousModifier.default(), optionalQuantifierRule = new _optionalQuantifier.default(), oneOrMoreQuantifierRule = new _oneOrMoreQuantifier.default(), zeroOrMoreQuantifierRule = new _zeroOrMoreQuantifier.default(), significantTokenTypeRule = new _significantTokenType.default();
            var rules = [
              documentRule,
              ruleRule,
              nameRule,
              definitionsRule,
              definitionRule,
              partRule,
              nonTerminalPartRule,
              terminalPartRule,
              noWhitespacePartRule,
              sequenceOfPartsRule,
              choiceOfPartsRule,
              ruleNameRule,
              significantTokenTypeRule,
              regularExpressionRule,
              terminalSymbolRule,
              endOfLineRule,
              wildcardRule,
              quantifierRule,
              ambiguousModifierRule,
              lookAheadModifierRule,
              optionalQuantifierRule,
              oneOrMoreQuantifierRule,
              zeroOrMoreQuantifierRule,
              errorRule
            ];
            var startRule = (0, _rules).startRuleFromRules(rules), ruleMap = (0, _rules).ruleMapFromRules(rules), bnfParser = new BNFParser2(startRule, ruleMap);
            return bnfParser;
          }
        }
      ]);
      return BNFParser2;
    }();
    exports.default = BNFParser;
    _defineProperty(BNFParser, "bnf", _bnf.default);
  });

  // node_modules/occam-parsers/lib/basic/bnf.js
  var require_bnf3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var bnf = '\n\n  expression   ::= expression_ operator expression expression~*\n\n                 | expression_\n\n                 ;\n\n  operator     ::= "+"\n\n                 | "-"\n\n                 | "/"\n\n                 | "*"\n\n                 ;\n\n  term         ::= /\\d+/ ;\n\n  expression_  ::= "(" expression ")"\n\n                 | term\n\n                 ;\n\n  expression~  ::= operator expression ;\n  \n';
    var _default = bnf;
    exports.default = _default;
  });

  // node_modules/occam-parsers/lib/utilities/parser.js
  var require_parser2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.rulesFromBNF = rulesFromBNF;
    exports.parserFromRules = parserFromRules;
    var _occamLexers = require_lib2();
    var _parser = _interopRequireDefault2(require_parser());
    var _rules = require_rules();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var bnfLexer = _occamLexers.BNFLexer.fromNothing();
    var bnfParser = _parser.default.fromNothing();
    function rulesFromBNF(bnf) {
      var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens);
      return rules;
    }
    function parserFromRules(Class, rules) {
      var startRule = (0, _rules).startRuleFromRules(rules), ruleMap = (0, _rules).ruleMapFromRules(rules), parser = new Class(startRule, ruleMap);
      return parser;
    }
  });

  // node_modules/occam-parsers/lib/common/parser.js
  var require_parser3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _state = _interopRequireDefault2(require_state2());
    var _parser = require_parser2();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var CommonParser = /* @__PURE__ */ function() {
      function CommonParser2(startRule, ruleMap) {
        _classCallCheck(this, CommonParser2);
        this.startRule = startRule;
        this.ruleMap = ruleMap;
      }
      _createClass(CommonParser2, [
        {
          key: "getStartRule",
          value: function getStartRule() {
            return this.startRule;
          }
        },
        {
          key: "getRuleMap",
          value: function getRuleMap() {
            return this.ruleMap;
          }
        },
        {
          key: "parse",
          value: function parse(tokens) {
            var rule = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startRule;
            var state = _state.default.fromTokensAndRuleMap(tokens, this.ruleMap), callback = null, ruleNode = rule.parse(state, callback), node = ruleNode;
            return node;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing(Class) {
            var bnf = Class.bnf, rules = (0, _parser).rulesFromBNF(bnf), parser = (0, _parser).parserFromRules(Class, rules);
            return parser;
          }
        },
        {
          key: "fromBNF",
          value: function fromBNF(Class, bnf) {
            var rules = (0, _parser).rulesFromBNF(bnf), parser = (0, _parser).parserFromRules(Class, rules);
            return parser;
          }
        },
        {
          key: "fromRules",
          value: function fromRules(Class, rules) {
            var parser = (0, _parser).parserFromRules(Class, rules);
            return parser;
          }
        }
      ]);
      return CommonParser2;
    }();
    exports.default = CommonParser;
  });

  // node_modules/occam-parsers/lib/basic/parser.js
  var require_parser4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _bnf = _interopRequireDefault2(require_bnf3());
    var _parser = _interopRequireDefault2(require_parser3());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var BasicParser = /* @__PURE__ */ function(CommonParser) {
      _inherits(BasicParser2, CommonParser);
      var _super = _createSuper(BasicParser2);
      function BasicParser2() {
        _classCallCheck(this, BasicParser2);
        return _super.apply(this, arguments);
      }
      _createClass(BasicParser2, null, [
        {
          key: "fromNothing",
          value: function fromNothing() {
            return _parser.default.fromNothing(BasicParser2);
          }
        },
        {
          key: "fromBNF",
          value: function fromBNF(bnf) {
            return _parser.default.fromBNF(BasicParser2, bnf);
          }
        },
        {
          key: "fromRules",
          value: function fromRules(rules) {
            return _parser.default.fromRules(BasicParser2, rules);
          }
        }
      ]);
      return BasicParser2;
    }(_parser.default);
    exports.default = BasicParser;
    _defineProperty(BasicParser, "bnf", _bnf.default);
  });

  // node_modules/occam-parsers/lib/parts.js
  var require_parts = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _wildcard = _interopRequireDefault2(require_wildcard());
    var _endOfLine = _interopRequireDefault2(require_endOfLine6());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    var _regularExpression = _interopRequireDefault2(require_regularExpression2());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _optionalPart = _interopRequireDefault2(require_optionalPart());
    var _zeroOrMoreParts = _interopRequireDefault2(require_zeroOrMoreParts());
    var _oneOrMoreParts = _interopRequireDefault2(require_oneOrMoreParts());
    var _sequenceOfParts = _interopRequireDefault2(require_sequenceOfParts());
    var _choiceOfParts = _interopRequireDefault2(require_choiceOfParts());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _default = {
      WildcardPart: _wildcard.default,
      EndOfLinePart: _endOfLine.default,
      TerminalSymbolPart: _terminalSymbol.default,
      RegularExpressionPart: _regularExpression.default,
      SignificantTokenTypePart: _significantTokenType.default,
      RuleNamePart: _ruleName.default,
      OptionalPartPart: _optionalPart.default,
      ZeroOrMorePartsPart: _zeroOrMoreParts.default,
      OneOrMorePartsPart: _oneOrMoreParts.default,
      SequenceOfPartsPart: _sequenceOfParts.default,
      ChoiceOfPartsPart: _choiceOfParts.default
    };
    exports.default = _default;
  });

  // node_modules/occam-parsers/lib/index.js
  var require_lib3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "BNFParser", {
      enumerable: true,
      get: function() {
        return _parser.default;
      }
    });
    Object.defineProperty(exports, "BasicParser", {
      enumerable: true,
      get: function() {
        return _parser1.default;
      }
    });
    Object.defineProperty(exports, "CommonParser", {
      enumerable: true,
      get: function() {
        return _parser2.default;
      }
    });
    Object.defineProperty(exports, "Rule", {
      enumerable: true,
      get: function() {
        return _rule.default;
      }
    });
    Object.defineProperty(exports, "Parts", {
      enumerable: true,
      get: function() {
        return _parts.default;
      }
    });
    Object.defineProperty(exports, "partTypes", {
      enumerable: true,
      get: function() {
        return _partTypes.default;
      }
    });
    Object.defineProperty(exports, "Definition", {
      enumerable: true,
      get: function() {
        return _definition.default;
      }
    });
    Object.defineProperty(exports, "TerminalNode", {
      enumerable: true,
      get: function() {
        return _terminal.default;
      }
    });
    Object.defineProperty(exports, "NonTerminalNode", {
      enumerable: true,
      get: function() {
        return _nonTerminal.default;
      }
    });
    var _parser = _interopRequireDefault2(require_parser());
    var _parser1 = _interopRequireDefault2(require_parser4());
    var _parser2 = _interopRequireDefault2(require_parser3());
    var _rule = _interopRequireDefault2(require_rule2());
    var _parts = _interopRequireDefault2(require_parts());
    var _partTypes = _interopRequireDefault2(require_partTypes());
    var _definition = _interopRequireDefault2(require_definition());
    var _terminal = _interopRequireDefault2(require_terminal2());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // node_modules/with-style/lib/css/bnf.js
  var require_bnf4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var bnf = '\n\n\n\n    stylesheet                 ::= ( media | ruleSet | declaration | error )+ ;\n\n\n\n\n\n    media                      ::= "@media" mediaQueries "{" ( ruleSet | declaration )* "}" ;\n                                                              \n                                                              \n    mediaQueries               ::=  mediaQuery ( "," mediaQuery )* ;\n                                                              \n                                                              \n    mediaQuery                 ::=  "not"? ( "only"? mediaType "and" )? mediaExpression ( "and" mediaExpression )* ;\n\n\n    mediaType                  ::=  "all" | "print" | "screen" | "speech" ;\n                                                              \n                                                              \n    mediaExpression            ::=  "(" [identifier] ( ":" expression )? ")" ;\n\n\n\n\n\n    ruleSet                    ::=  selectors "{" declaration* "}" ;\n    \n    \n    selectors                  ::=  selector ( "," selector )* ;\n\n\n    selector                   ::=  ( class | pseudoClass | pseudoElement | attribute )+ ;\n\n\n\n\n\n    declaration                ::=  property ":" expression ( "," expression )* priority? ";" ;\n\n\n    class                      ::=  "."<NO_WHITESPACE>[identifier] parenthesisedSelector? ;\n\n\n    pseudoClass                ::=  ":"<NO_WHITESPACE>[identifier] parenthesisedSelector? ;\n\n\n    pseudoElement              ::=  "::"<NO_WHITESPACE>[identifier] parenthesisedSelector? ;\n\n\n    parenthesisedSelector      ::=  <NO_WHITESPACE>"(" selector <NO_WHITESPACE>")" ;\n\n\n    attribute                  ::=  "["\n\n                                       [identifier]\n\n                                       (\n\n                                         ( "=" | "~=" | "|=" )\n\n                                         ( [identifier] | [string-literal] )\n\n                                       )?\n\n                                    "]"\n\n                                 ;\n\n\n    property                   ::=  [identifier] ;\n\n\n    expression                 ::=  term ( ","? term )* ;\n\n\n    priority                   ::=  "!important" ;\n\n\n\n\n\n    term                       ::=  [unary-operator]?\n                                                       \n                                      (\n                                                       \n                                        ( [percentage] | [frequency] | [fraction] | [length] | [angle] | [rems] | [ems] | [time] | [number] )\n                                                       \n                                        |\n                                                       \n                                        uri\n                                                       \n                                        |\n                                                       \n                                        function\n                                                       \n                                        |\n                                                       \n                                        [string-literal]+\n                                                       \n                                        |\n                                                       \n                                        [identifier]\n                                                       \n                                        |\n                                                       \n                                        [colour]\n                                                       \n                                      )\n                                                       \n                                   ;\n\n\n    uri                        ::=  "url"<NO_WHITESPACE>"(" [string-literal] ")" ;\n\n\n    function                   ::=  [identifier]<NO_WHITESPACE>"(" expression ")" ;\n\n\n\n\n\n    error                      ::=  . ;\n\n\n\n';
    var _default = bnf;
    exports.default = _default;
  });

  // node_modules/with-style/lib/css/parser.js
  var require_parser5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamParsers = require_lib3();
    var _bnf = _interopRequireDefault2(require_bnf4());
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var CSSParser = /* @__PURE__ */ function(CommonParser) {
      _inherits(CSSParser2, CommonParser);
      var _super = _createSuper(CSSParser2);
      function CSSParser2() {
        _classCallCheck(this, CSSParser2);
        return _super.apply(this, arguments);
      }
      _createClass(CSSParser2, null, [
        {
          key: "fromNothing",
          value: function fromNothing() {
            return _occamParsers.CommonParser.fromNothing(CSSParser2);
          }
        },
        {
          key: "fromBNF",
          value: function fromBNF(bnf) {
            return _occamParsers.CommonParser.fromBNF(CSSParser2, bnf);
          }
        },
        {
          key: "fromRules",
          value: function fromRules(rules) {
            return _occamParsers.CommonParser.fromRules(CSSParser2, rules);
          }
        }
      ]);
      return CSSParser2;
    }(_occamParsers.CommonParser);
    _defineProperty(CSSParser, "bnf", _bnf.default);
    exports.default = CSSParser;
  });

  // node_modules/occam-dom/lib/utilities/array.js
  var require_array4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.trim = trim;
    exports.includes = includes;
    exports.fifth = exports.fourth = exports.third = exports.second = exports.push = exports.clear = void 0;
    var _necessary = require_browser();
    var clear = _necessary.arrayUtilities.clear;
    var push = _necessary.arrayUtilities.push;
    var second = _necessary.arrayUtilities.second;
    var third = _necessary.arrayUtilities.third;
    var fourth = _necessary.arrayUtilities.fourth;
    var fifth = _necessary.arrayUtilities.fifth;
    exports.clear = clear;
    exports.push = push;
    exports.second = second;
    exports.third = third;
    exports.fourth = fourth;
    exports.fifth = fifth;
    function trim(array, startIndex, endIndex) {
      var start, deleteCount;
      if (endIndex !== Infinity) {
        start = endIndex + 1;
        array.splice(start);
      }
      start = 0;
      deleteCount = startIndex;
      array.splice(start, deleteCount);
    }
    function includes(array) {
      for (var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        elements[_key - 1] = arguments[_key];
      }
      return elements.some(function(element) {
        return array.includes(element);
      });
    }
  });

  // node_modules/occam-dom/lib/spread.js
  var require_spread = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _array = require_array4();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var EXCLAMATION_MARK_CHARACTER = _necessary.characters.EXCLAMATION_MARK_CHARACTER;
    var Spread = /* @__PURE__ */ function() {
      function Spread2(startIndex, endIndex, unique) {
        _classCallCheck(this, Spread2);
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.unique = unique;
      }
      _createClass(Spread2, [
        {
          key: "adjustNodes",
          value: function adjustNodes(nodes) {
            if (this.unique) {
              var nodesLength = nodes.length;
              if (nodesLength > 1) {
                (0, _array).clear(nodes);
              }
            } else {
              (0, _array).trim(nodes, this.startIndex, this.endIndex);
            }
          }
        }
      ], [
        {
          key: "fromSpreadExpression",
          value: function fromSpreadExpression(spreadExpression) {
            var startIndex = 0, endIndex = Infinity, unique = false;
            if (spreadExpression !== null) {
              if (spreadExpression === EXCLAMATION_MARK_CHARACTER) {
                unique = true;
              } else {
                var regExp = /\[(\d+)?(\.\.\.)?(\d+)?]/, matches = spreadExpression.match(regExp), secondMatch = (0, _array).second(matches), thirdMatch = (0, _array).third(matches), fourthMatch = (0, _array).fourth(matches);
                if (secondMatch !== void 0) {
                  startIndex = parseInt(secondMatch);
                  if (thirdMatch === void 0) {
                    endIndex = startIndex;
                  }
                }
                if (fourthMatch !== void 0) {
                  endIndex = parseInt(fourthMatch);
                  if (thirdMatch === void 0) {
                    startIndex = endIndex;
                  }
                }
              }
            }
            var spread = new Spread2(startIndex, endIndex, unique);
            return spread;
          }
        }
      ]);
      return Spread2;
    }();
    exports.default = Spread;
  });

  // node_modules/occam-dom/lib/query.js
  var require_query = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _spread = _interopRequireDefault2(require_spread());
    var _array = require_array4();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var WILDCARD_CHARACTER = _necessary.characters.WILDCARD_CHARACTER;
    var Query = /* @__PURE__ */ function() {
      function Query2(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes) {
        _classCallCheck(this, Query2);
        this.ruleNames = ruleNames;
        this.types = types;
        this.spread = spread;
        this.subQuery = subQuery;
        this.maximumDepth = maximumDepth;
        this.infiniteDescent = infiniteDescent;
        this.intermediateNodes = intermediateNodes;
      }
      _createClass(Query2, [
        {
          key: "execute",
          value: function execute(node) {
            var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, maximumDepth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.maximumDepth;
            var nodes = [];
            this.clear();
            this.find(node, depth, maximumDepth);
            this.apply(nodes, depth, maximumDepth);
            return nodes;
          }
        },
        {
          key: "clear",
          value: function clear() {
            (0, _array).clear(this.intermediateNodes);
          }
        },
        {
          key: "find",
          value: function find(node, depth, maximumDepth) {
            if (depth > maximumDepth) {
              return;
            }
            var nodeTerminalNode = node.isTerminalNode(), nodeNonTerminalNode = !nodeTerminalNode;
            var found;
            if (nodeTerminalNode) {
              var terminalNode = node, type = terminalNode.getType();
              found = (0, _array).includes(this.types, type, WILDCARD_CHARACTER);
            }
            if (nodeNonTerminalNode) {
              var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName();
              found = (0, _array).includes(this.ruleNames, ruleName, WILDCARD_CHARACTER);
            }
            if (found) {
              var intermediateNode = node;
              this.intermediateNodes.push(intermediateNode);
            }
            if (this.infiniteDescent) {
              if (nodeNonTerminalNode) {
                var _this = this;
                depth++;
                var nonTerminalNode1 = node, childNodes = nonTerminalNode1.getChildNodes();
                childNodes.forEach(function(childNode) {
                  return _this.find(childNode, depth, maximumDepth);
                });
              }
            }
          }
        },
        {
          key: "apply",
          value: function apply(nodes, depth, maximumDepth) {
            this.spread.adjustNodes(this.intermediateNodes);
            if (this.subQuery === null) {
              (0, _array).push(nodes, this.intermediateNodes);
            } else {
              var _this = this;
              this.intermediateNodes.forEach(function(intermediateNode) {
                var intermediateNodeNonTerminalNode = intermediateNode.isNonTerminalNode();
                if (intermediateNodeNonTerminalNode) {
                  var _this1 = _this;
                  depth++;
                  var nonTerminalNode = intermediateNode, childNodes = nonTerminalNode.getChildNodes();
                  _this.subQuery.clear();
                  childNodes.forEach(function(childNode) {
                    return _this1.subQuery.find(childNode, depth, maximumDepth);
                  });
                  _this.subQuery.apply(nodes, depth, maximumDepth);
                }
              });
            }
          }
        }
      ], [
        {
          key: "fromSubExpressionAndTypes",
          value: function fromSubExpressionAndTypes(subExpresion, types) {
            var query = null;
            if (subExpresion !== null) {
              var typesLength = types.length;
              if (typesLength === 0) {
                var expression = subExpresion;
                query = Query2.fromExpression(expression);
              }
            }
            return query;
          }
        },
        {
          key: "fromExpression",
          value: function fromExpression(expression) {
            var maximumDepth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
            var regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/, matches = expression.match(regExp), secondMatch = (0, _array).second(matches), thirdMatch = (0, _array).third(matches), fourthMatch = (0, _array).fourth(matches), fifthMatch = (0, _array).fifth(matches), selectors = thirdMatch.split("|"), subExpression = fifthMatch || null, spreadExpression = fourthMatch || null, types = typesFromSelectors(selectors), ruleNames = ruleNamesFromSelectorsAndTypes(selectors, types), spread = _spread.default.fromSpreadExpression(spreadExpression), subQuery = Query2.fromSubExpressionAndTypes(subExpression, types), infiniteDescent = secondMatch === "/", intermediateNodes = [], query = new Query2(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes);
            return query;
          }
        }
      ]);
      return Query2;
    }();
    exports.default = Query;
    function typesFromSelectors(selectors) {
      var types = [];
      selectors.forEach(function(selector) {
        var selectorTypeSelector = isSelectorTypeSelector(selector);
        if (selectorTypeSelector) {
          var type = selector.substring(1);
          types.push(type);
        }
      });
      return types;
    }
    function isSelectorTypeSelector(selector) {
      return /^@/.test(selector);
    }
    function ruleNamesFromSelectors(selectors) {
      return selectors.filter(isSelectorRuleNameSelector);
    }
    function isSelectorRuleNameSelector(selector) {
      return /^[^@]/.test(selector);
    }
    function ruleNamesFromSelectorsAndTypes(selectors, types) {
      var ruleNames = [];
      var typesLength = types.length;
      if (typesLength === 0) {
        ruleNames = ruleNamesFromSelectors(selectors);
      }
      return ruleNames;
    }
  });

  // node_modules/occam-dom/lib/utilities/query.js
  var require_query2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.queryByClass = queryByClass;
    exports.queryByClasses = queryByClasses;
    exports.queryByExpression = queryByExpression;
    exports.default = void 0;
    var _query = _interopRequireDefault2(require_query());
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function queryByClass(node, Class) {
      var nodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (_instanceof(node, Class)) {
        nodes.push(node);
      }
      var nodeNonTerminalNode = node.isNonTerminalNode();
      if (nodeNonTerminalNode) {
        var childNodes = node.getChildNodes();
        childNodes.forEach(function(childNode) {
          return queryByClass(childNode, Class, nodes);
        });
      }
      return nodes;
    }
    function queryByClasses(node, Classes) {
      var nodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      Classes.some(function(Class) {
        if (_instanceof(node, Class)) {
          nodes.push(node);
          return true;
        }
      });
      var nodeNonTerminalNode = node.isNonTerminalNode();
      if (nodeNonTerminalNode) {
        var childNodes = node.getChildNodes();
        childNodes.forEach(function(childNode) {
          return queryByClasses(childNode, Classes, nodes);
        });
      }
      return nodes;
    }
    function queryByExpression(node, expression, maximumDepth) {
      var query = _query.default.fromExpression(expression, maximumDepth), nodes = query.execute(node);
      return nodes;
    }
    var _default = {
      queryByClass,
      queryByClasses,
      queryByExpression
    };
    exports.default = _default;
  });

  // node_modules/occam-dom/lib/index.js
  var require_lib4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Query", {
      enumerable: true,
      get: function() {
        return _query.default;
      }
    });
    Object.defineProperty(exports, "queryUtilities", {
      enumerable: true,
      get: function() {
        return _query1.default;
      }
    });
    var _query = _interopRequireDefault2(require_query());
    var _query1 = _interopRequireDefault2(require_query2());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // node_modules/with-style/lib/constants.js
  var require_constants5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CLASS_NAME_LENGTH = exports.EMPTY_STRING = exports.FOUR_SPACES = exports.TWO_SPACES = exports.CHARACTERS = exports.STYLE = exports.HEAD = void 0;
    var HEAD = "head";
    exports.HEAD = HEAD;
    var STYLE = "style";
    exports.STYLE = STYLE;
    var CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    exports.CHARACTERS = CHARACTERS;
    var TWO_SPACES = "  ";
    exports.TWO_SPACES = TWO_SPACES;
    var FOUR_SPACES = "    ";
    exports.FOUR_SPACES = FOUR_SPACES;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var CLASS_NAME_LENGTH = 6;
    exports.CLASS_NAME_LENGTH = CLASS_NAME_LENGTH;
  });

  // node_modules/with-style/lib/utilities/content.js
  var require_content2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.contentFromQueryNodeAndTokens = contentFromQueryNodeAndTokens;
    var _necessary = require_browser();
    var _constants = require_constants5();
    var first = _necessary.arrayUtilities.first;
    function contentFromQueryNodeAndTokens(query, node, tokens) {
      var nodes = query.execute(node), firstNode = first(nodes);
      node = firstNode;
      var content = contentFromNodeAndTokens(node, tokens);
      return content;
    }
    function contentFromNodeAndTokens(node, tokens) {
      var firstSignificantToken = node.getFirstSignificantToken(), lastSignificantToken = node.getLastSignificantToken(), firstToken = firstSignificantToken, lastToken = lastSignificantToken, firstTokenIndex = tokens.indexOf(firstToken), lastTokenIndex = tokens.indexOf(lastToken);
      var content = _constants.EMPTY_STRING;
      for (var index = firstTokenIndex; index <= lastTokenIndex; index++) {
        var token = tokens[index], tokenContent = token.getContent();
        content += tokenContent;
      }
      return content;
    }
  });

  // node_modules/with-style/lib/style/declaration.js
  var require_declaration = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamDom = require_lib4();
    var _content = require_content2();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var propertyQuery = _occamDom.Query.fromExpression("/*/property");
    var expressionQuery = _occamDom.Query.fromExpression("/*/expression");
    var Declaration = /* @__PURE__ */ function() {
      function Declaration2(property, expression) {
        _classCallCheck(this, Declaration2);
        this.property = property;
        this.expression = expression;
      }
      _createClass(Declaration2, [
        {
          key: "getProperty",
          value: function getProperty() {
            return this.property;
          }
        },
        {
          key: "getExpression",
          value: function getExpression() {
            return this.expression;
          }
        },
        {
          key: "checkMatches",
          value: function checkMatches(declarations) {
            var _this = this;
            var matches = declarations.some(function(declaration) {
              var property = declaration.getProperty(), propertiesMatch = property === _this.property;
              if (propertiesMatch) {
                return true;
              }
            });
            return matches;
          }
        },
        {
          key: "asCSS",
          value: function asCSS(indent, last) {
            var css = last ? "".concat(indent).concat(this.property, ": ").concat(this.expression, ";") : "".concat(indent).concat(this.property, ": ").concat(this.expression, ";\n");
            return css;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node, tokens) {
            var propertyContent = (0, _content).contentFromQueryNodeAndTokens(propertyQuery, node, tokens), expressionContent = (0, _content).contentFromQueryNodeAndTokens(expressionQuery, node, tokens), property = propertyContent, expression = expressionContent, declaration = new Declaration2(property, expression);
            return declaration;
          }
        }
      ]);
      return Declaration2;
    }();
    exports.default = Declaration;
  });

  // node_modules/with-style/lib/style/declarations.js
  var require_declarations = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamDom = require_lib4();
    var _declaration = _interopRequireDefault2(require_declaration());
    var _constants = require_constants5();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var declarationQuery = _occamDom.Query.fromExpression("/*/declaration");
    var Declarations = /* @__PURE__ */ function() {
      function Declarations2(array) {
        _classCallCheck(this, Declarations2);
        this.array = array;
      }
      _createClass(Declarations2, [
        {
          key: "forwardsForEach",
          value: function forwardsForEach(callback) {
            var length = this.array.length, firstIndex = 0, lastIndex = length - 1;
            for (var index = firstIndex; index <= lastIndex; index++) {
              var declaration = this.array[index];
              callback(declaration, index);
            }
          }
        },
        {
          key: "backwardsForEach",
          value: function backwardsForEach(callback) {
            var length = this.array.length, firstIndex = 0, lastIndex = length - 1;
            for (var index = lastIndex; index >= firstIndex; index--) {
              var declaration = this.array[index];
              callback(declaration, index);
            }
          }
        },
        {
          key: "unshift",
          value: function unshift(declarations) {
            var _this = this;
            declarations.backwardsForEach(function(declaration) {
              var matches = declaration.checkMatches(_this.array);
              if (!matches) {
                _this.array.unshift(declaration);
              }
            });
          }
        },
        {
          key: "asCSS",
          value: function asCSS(className, indent) {
            if (indent === void 0) {
              indent = className;
              className = null;
            }
            var css = _constants.EMPTY_STRING;
            var length = this.array.length;
            if (length > 0) {
              var lastIndex = length - 1, declarationsCSS1 = this.array.reduce(function(declarationsCSS, declaration, index) {
                var last = index === lastIndex, declarationCSS = declaration.asCSS(indent, last);
                declarationsCSS += declarationCSS;
                return declarationsCSS;
              }, _constants.EMPTY_STRING);
              if (className === null) {
                css = declarationsCSS1;
              } else {
                css = ".".concat(className, " {\n").concat(declarationsCSS1, "\n}\n\n");
              }
            }
            return css;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node1, tokens) {
            var declarationNodes = declarationQuery.execute(node1), array = declarationNodes.map(function(declarationNode) {
              var node = declarationNode, declaration = _declaration.default.fromNodeAndTokens(node, tokens);
              return declaration;
            }), declarations = new Declarations2(array);
            return declarations;
          }
        }
      ]);
      return Declarations2;
    }();
    exports.default = Declarations;
  });

  // node_modules/with-style/lib/style/ruleSet.js
  var require_ruleSet = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamDom = require_lib4();
    var _declarations = _interopRequireDefault2(require_declarations());
    var _constants = require_constants5();
    var _content = require_content2();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var selectorsQuery = _occamDom.Query.fromExpression("//selectors");
    var RuleSet = /* @__PURE__ */ function() {
      function RuleSet2(selectors, declarations) {
        _classCallCheck(this, RuleSet2);
        this.selectors = selectors;
        this.declarations = declarations;
      }
      _createClass(RuleSet2, [
        {
          key: "getSelectors",
          value: function getSelectors() {
            return this.selectors;
          }
        },
        {
          key: "getDeclarations",
          value: function getDeclarations() {
            return this.declarations;
          }
        },
        {
          key: "unshift",
          value: function unshift(ruleSet) {
            var declarations = ruleSet.getDeclarations();
            this.declarations.unshift(declarations);
          }
        },
        {
          key: "findMatchingRuleSet",
          value: function findMatchingRuleSet(ruleSets) {
            var _this = this;
            var matchingRuleSet = ruleSets.find(function(ruleSet) {
              var selectors = ruleSet.getSelectors(), selectorsMatch = selectors === _this.selectors, ruleSetsMatch = selectorsMatch;
              if (ruleSetsMatch) {
                return true;
              }
            }) || null;
            return matchingRuleSet;
          }
        },
        {
          key: "asCSS",
          value: function asCSS(className, indent) {
            var css = _constants.EMPTY_STRING;
            var declarationsCSS = this.declarations.asCSS("  ".concat(indent));
            if (declarationsCSS !== _constants.EMPTY_STRING) {
              css = "".concat(indent, ".").concat(className).concat(this.selectors, " {\n").concat(declarationsCSS, "\n").concat(indent, "}\n\n");
            }
            return css;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node, tokens) {
            var selectors = selectorsFromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), media = new RuleSet2(selectors, declarations);
            return media;
          }
        }
      ]);
      return RuleSet2;
    }();
    exports.default = RuleSet;
    function selectorsFromNodeAndTokens(node, tokens) {
      var selectorsNodeContent = (0, _content).contentFromQueryNodeAndTokens(selectorsQuery, node, tokens), selectors = "".concat(selectorsNodeContent);
      return selectors;
    }
  });

  // node_modules/with-style/lib/style/ruleSets.js
  var require_ruleSets = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamDom = require_lib4();
    var _ruleSet = _interopRequireDefault2(require_ruleSet());
    var _constants = require_constants5();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ruleSetQuery = _occamDom.Query.fromExpression("/*/ruleSet");
    var RuleSets = /* @__PURE__ */ function() {
      function RuleSets2(array) {
        _classCallCheck(this, RuleSets2);
        this.array = array;
      }
      _createClass(RuleSets2, [
        {
          key: "unshift",
          value: function unshift(ruleSets) {
            var _this = this;
            ruleSets.forEach(function(ruleSet) {
              var matchingRuleSet = ruleSet.findMatchingRuleSet(_this.array);
              matchingRuleSet === null ? _this.array.unshift(ruleSet) : matchingRuleSet.unshift(ruleSet);
            });
          }
        },
        {
          key: "forEach",
          value: function forEach(callback) {
            this.array.forEach(callback);
          }
        },
        {
          key: "asCSS",
          value: function asCSS(className, indent) {
            var css1 = this.array.reduce(function(css, ruleSet) {
              var ruleSetCSS = ruleSet.asCSS(className, indent);
              css += ruleSetCSS;
              return css;
            }, _constants.EMPTY_STRING);
            return css1;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node1, tokens) {
            var ruleSetNodes = ruleSetQuery.execute(node1), array = ruleSetNodes.map(function(ruleSetNode) {
              var node = ruleSetNode, ruleSet = _ruleSet.default.fromNodeAndTokens(node, tokens);
              return ruleSet;
            }), ruleSets = new RuleSets2(array);
            return ruleSets;
          }
        }
      ]);
      return RuleSets2;
    }();
    exports.default = RuleSets;
  });

  // node_modules/with-style/lib/style/media.js
  var require_media = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamDom = require_lib4();
    var _ruleSets = _interopRequireDefault2(require_ruleSets());
    var _declarations = _interopRequireDefault2(require_declarations());
    var _constants = require_constants5();
    var _content = require_content2();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var mediaQueriesQuery = _occamDom.Query.fromExpression("/media/mediaQueries");
    var Media = /* @__PURE__ */ function() {
      function Media2(mediaQueries, declarations, ruleSets) {
        _classCallCheck(this, Media2);
        this.mediaQueries = mediaQueries;
        this.declarations = declarations;
        this.ruleSets = ruleSets;
      }
      _createClass(Media2, [
        {
          key: "getMediaQueries",
          value: function getMediaQueries() {
            return this.mediaQueries;
          }
        },
        {
          key: "getDeclarations",
          value: function getDeclarations() {
            return this.declarations;
          }
        },
        {
          key: "getRuleSets",
          value: function getRuleSets() {
            return this.ruleSets;
          }
        },
        {
          key: "asCSS",
          value: function asCSS(className) {
            var css = "";
            var ruleSetsCSS = this.ruleSets.asCSS(className, _constants.TWO_SPACES), declarationsCSS = this.declarations.asCSS(className, _constants.FOUR_SPACES);
            if (ruleSetsCSS !== null || declarationsCSS !== null) {
              css = "@media ".concat(this.mediaQueries, " {\n").concat(declarationsCSS).concat(ruleSetsCSS, "\n}\n\n");
            }
            return css;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node, tokens) {
            var mediaQueries = mediaQueriesFromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), media = new Media2(mediaQueries, declarations, ruleSets);
            return media;
          }
        }
      ]);
      return Media2;
    }();
    exports.default = Media;
    function mediaQueriesFromNodeAndTokens(node, tokens) {
      var mediaQueriesNodeContent = (0, _content).contentFromQueryNodeAndTokens(mediaQueriesQuery, node, tokens), mediaQueries = "".concat(mediaQueriesNodeContent);
      return mediaQueries;
    }
  });

  // node_modules/with-style/lib/style/medias.js
  var require_medias = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamDom = require_lib4();
    var _media = _interopRequireDefault2(require_media());
    var _constants = require_constants5();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var mediaQuery = _occamDom.Query.fromExpression("/stylesheet/media");
    var Medias = /* @__PURE__ */ function() {
      function Medias2(array) {
        _classCallCheck(this, Medias2);
        this.array = array;
      }
      _createClass(Medias2, [
        {
          key: "unshift",
          value: function unshift(medias) {
            var _this = this;
            medias.forEach(function(media) {
              _this.array.unshift(media);
            });
          }
        },
        {
          key: "forEach",
          value: function forEach(callback) {
            this.array.forEach(callback);
          }
        },
        {
          key: "asCSS",
          value: function asCSS(className) {
            var css1 = this.array.reduce(function(css, media) {
              var mediaCSS = media.asCSS(className);
              css += mediaCSS;
              return css;
            }, _constants.EMPTY_STRING);
            return css1;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node1, tokens) {
            var mediaNodes = mediaQuery.execute(node1), array = mediaNodes.map(function(mediaNode) {
              var node = mediaNode, media = _media.default.fromNodeAndTokens(node, tokens);
              return media;
            }), medias = new Medias2(array);
            return medias;
          }
        }
      ]);
      return Medias2;
    }();
    exports.default = Medias;
  });

  // node_modules/with-style/lib/style.js
  var require_style = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _medias = _interopRequireDefault2(require_medias());
    var _ruleSets = _interopRequireDefault2(require_ruleSets());
    var _declarations = _interopRequireDefault2(require_declarations());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Style = /* @__PURE__ */ function() {
      function Style2(declarations, ruleSets, medias) {
        _classCallCheck(this, Style2);
        this.declarations = declarations;
        this.ruleSets = ruleSets;
        this.medias = medias;
      }
      _createClass(Style2, [
        {
          key: "getDeclarations",
          value: function getDeclarations() {
            return this.declarations;
          }
        },
        {
          key: "getRuleSets",
          value: function getRuleSets() {
            return this.ruleSets;
          }
        },
        {
          key: "getMedias",
          value: function getMedias() {
            return this.medias;
          }
        },
        {
          key: "extends",
          value: function _extends(superStyle) {
            var declarations = superStyle.getDeclarations(), ruleSets = superStyle.getRuleSets(), medias = superStyle.getMedias();
            this.unshift(declarations, ruleSets, medias);
          }
        },
        {
          key: "unshift",
          value: function unshift(declarations, ruleSets, medias) {
            this.declarations.unshift(declarations);
            this.ruleSets.unshift(ruleSets);
            this.medias.unshift(medias);
          }
        },
        {
          key: "asCSS",
          value: function asCSS(className) {
            var declarationsCSS = this.declarations.asCSS(className, "  "), ruleSetsCSS = this.ruleSets.asCSS(className, ""), mediasCSS = this.medias.asCSS(className), css = "".concat(declarationsCSS).concat(ruleSetsCSS).concat(mediasCSS);
            return css;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node, tokens) {
            var declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), medias = _medias.default.fromNodeAndTokens(node, tokens), style = new Style2(declarations, ruleSets, medias);
            return style;
          }
        }
      ]);
      return Style2;
    }();
    exports.default = Style;
  });

  // node_modules/with-style/lib/utilities/styles.js
  var require_styles = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _style = _interopRequireDefault2(require_style());
    var _lexer = _interopRequireDefault2(require_lexer4());
    var _parser = _interopRequireDefault2(require_parser5());
    var _constants = require_constants5();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var cssLexer = _lexer.default.fromNothing();
    var cssParser = _parser.default.fromNothing();
    if (!globalThis.styleMap) {
      globalThis.styleMap = {};
    }
    var styleMap = globalThis.styleMap;
    function renderStyle(style) {
      var headDOMElement = document.querySelector(_constants.HEAD), styleDOMElement = document.createElement(_constants.STYLE), innerHTML = "\n        \n".concat(style);
      Object.assign(styleDOMElement, {
        innerHTML
      });
      headDOMElement.appendChild(styleDOMElement);
    }
    function renderStyles2() {
      var stylesCSS = retrieveStylesCSS(), style = stylesCSS;
      renderStyle(style);
    }
    function generateStyle(args, className) {
      var superStyle = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var strings = args.shift(), content1 = strings.reduce(function(content, string, index) {
        var arg = args[index];
        content = arg !== void 0 ? "".concat(content).concat(string).concat(arg) : "".concat(content).concat(string);
        return content;
      }, _constants.EMPTY_STRING), tokens = cssLexer.tokenise(content1), node = cssParser.parse(tokens), style = _style.default.fromNodeAndTokens(node, tokens);
      if (superStyle !== null) {
        style.extends(superStyle);
      }
      styleMap[className] = style;
    }
    function retrieveStyle(className) {
      var style = styleMap[className] || null;
      return style;
    }
    var _default = {
      renderStyle,
      renderStyles: renderStyles2,
      generateStyle,
      retrieveStyle
    };
    exports.default = _default;
    function retrieveStylesCSS() {
      var classNames = Object.keys(styleMap), stylesCSS1 = classNames.reduce(function(stylesCSS, className) {
        var style = retrieveStyle(className), styleCSS = style.asCSS(className);
        stylesCSS += styleCSS;
        return stylesCSS;
      }, _constants.EMPTY_STRING);
      return stylesCSS1;
    }
  });

  // node_modules/with-style/lib/utilities/className.js
  var require_className = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.generateClassName = generateClassName;
    exports.retrieveClassName = retrieveClassName;
    exports.default = void 0;
    var _constants = require_constants5();
    var length = _constants.CLASS_NAME_LENGTH;
    var characters = _constants.CHARACTERS;
    var charactersLength = characters.length;
    var classNames = [];
    function generateClassName() {
      var className = _constants.EMPTY_STRING;
      for (var count = 0; count < length; count++) {
        var index = Math.floor(Math.random() * charactersLength), character = characters[index];
        className += character;
      }
      var classNamesIncludesClassName = classNames.includes(className);
      if (!classNamesIncludesClassName) {
        classNames.push(className);
      } else {
        className = generateClassName();
      }
      return className;
    }
    function retrieveClassName(element) {
      var className = (element.reactFunction || element.reactComponent.constructor).className;
      return className;
    }
    var _default = {
      generateClassName,
      retrieveClassName
    };
    exports.default = _default;
  });

  // node_modules/with-style/lib/index.js
  var require_lib5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "tagNames", {
      enumerable: true,
      get: function() {
        return _tagNames.default;
      }
    });
    Object.defineProperty(exports, "CSSLexer", {
      enumerable: true,
      get: function() {
        return _lexer.default;
      }
    });
    Object.defineProperty(exports, "CSSParser", {
      enumerable: true,
      get: function() {
        return _parser.default;
      }
    });
    Object.defineProperty(exports, "stylesUtilities", {
      enumerable: true,
      get: function() {
        return _styles.default;
      }
    });
    Object.defineProperty(exports, "classNameUtilities", {
      enumerable: true,
      get: function() {
        return _className.default;
      }
    });
    var _tagNames = _interopRequireDefault2(require_tagNames());
    var _lexer = _interopRequireDefault2(require_lexer4());
    var _parser = _interopRequireDefault2(require_parser5());
    var _styles = _interopRequireDefault2(require_styles());
    var _className = _interopRequireDefault2(require_className());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // node_modules/easy-with-style/lib/utilities/class.js
  var require_class = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isClass = isClass;
    var _easy2 = require_lib();
    function isClass(argument) {
      return isSubclassOf(argument, _easy2.Element);
    }
    function isSubclassOf(argument, Class) {
      var subclass = false;
      if (argument.name === Class.name) {
        subclass = true;
      } else {
        argument = Object.getPrototypeOf(argument);
        if (argument !== null) {
          subclass = isSubclassOf(argument, Class);
        }
      }
      return subclass;
    }
  });

  // node_modules/easy-with-style/lib/constants.js
  var require_constants6 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CLASS_NAME = void 0;
    var CLASS_NAME = "className";
    exports.CLASS_NAME = CLASS_NAME;
  });

  // node_modules/easy-with-style/lib/withStyle.js
  var require_withStyle = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easy2 = require_lib();
    var _withStyle = require_lib5();
    var _class = require_class();
    var _constants = require_constants6();
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
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
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      }
      return target;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
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
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var generateClassName = _withStyle.classNameUtilities.generateClassName;
    var renderStyle = _withStyle.stylesUtilities.renderStyle;
    var renderStyles2 = _withStyle.stylesUtilities.renderStyles;
    var generateStyle = _withStyle.stylesUtilities.generateStyle;
    var retrieveStyle = _withStyle.stylesUtilities.retrieveStyle;
    function withStyle(ClassOrFunction) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        var _className = ClassOrFunction.className, className = _className === void 0 ? null : _className;
        var superStyle = retrieveStyle(className);
        className = generateClassName();
        generateStyle(args, className, superStyle);
        var ClassOrFunctionClass = (0, _class).isClass(ClassOrFunction);
        if (ClassOrFunctionClass) {
          var Class1 = ClassOrFunction;
          ClassOrFunction = /* @__PURE__ */ function(Class) {
            _inherits(_class1, Class);
            var _super = _createSuper(_class1);
            function _class1() {
              _classCallCheck(this, _class1);
              return _super.apply(this, arguments);
            }
            _createClass(_class1, null, [
              {
                key: "fromClass",
                value: function fromClass(_Class, properties) {
                  for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    remainingArguments[_key - 2] = arguments[_key];
                  }
                  var _$_Class;
                  properties = appendClassNameToProperties(className, properties);
                  return (_$_Class = Class1).fromClass.apply(_$_Class, [
                    _Class,
                    properties
                  ].concat(_toConsumableArray(remainingArguments)));
                }
              }
            ]);
            return _class1;
          }(Class1);
        } else {
          var Function2 = ClassOrFunction;
          ClassOrFunction = function(properties) {
            properties = appendClassNameToProperties(className, properties);
            return Function2(properties);
          };
        }
        Object.assign(ClassOrFunction, {
          className
        });
        return ClassOrFunction;
      };
    }
    Object.assign(withStyle, {
      renderStyle,
      renderStyles: renderStyles2
    });
    var _default = withStyle;
    exports.default = _default;
    _withStyle.tagNames.forEach(function(tagName) {
      Object.defineProperty(withStyle, tagName, {
        get: function() {
          return function() {
            var args = Array.prototype.slice.call(arguments), className = generateClassName();
            generateStyle(args, className);
            var Function2 = function(properties) {
              properties = appendClassNameToProperties(className, properties);
              return _easy2.React.createElement(tagName, properties);
            };
            Object.assign(Function2, {
              className
            });
            return Function2;
          };
        }
      });
    });
    function appendClassNameToProperties(className, properties) {
      properties = properties.hasOwnProperty(_constants.CLASS_NAME) ? properties : _objectSpread({}, properties, {
        className
      });
      return properties;
    }
  });

  // node_modules/easy-with-style/lib/index.js
  var require_lib6 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _withStyle = _interopRequireDefault2(require_withStyle());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _default = _withStyle.default;
    exports.default = _default;
  });

  // lib/selection.js
  var require_selection = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Selection = /* @__PURE__ */ function() {
      function Selection2(startPosition, endPosition) {
        _classCallCheck(this, Selection2);
        this.startPosition = startPosition;
        this.endPosition = endPosition;
      }
      _createClass(Selection2, [
        {
          key: "getStartPosition",
          value: function getStartPosition() {
            return this.startPosition;
          }
        },
        {
          key: "getEndPosition",
          value: function getEndPosition() {
            return this.endPosition;
          }
        },
        {
          key: "setStartPosition",
          value: function setStartPosition(startPosition) {
            this.startPosition = startPosition;
          }
        },
        {
          key: "setEndPosition",
          value: function setEndPosition(endPosition) {
            this.endPosition = endPosition;
          }
        },
        {
          key: "isEqualTo",
          value: function isEqualTo(selection) {
            var equalTo = false;
            if (selection !== null) {
              var selectionStartPosition = selection.getStartPosition(), selectionEndPosition = selection.getEndPosition(), startPositionsEqual = this.startPosition === selectionStartPosition, endPositionsEqual = this.endPosition === selectionEndPosition;
              equalTo = startPositionsEqual && endPositionsEqual;
            }
            return equalTo;
          }
        },
        {
          key: "isDifferentTo",
          value: function isDifferentTo(selection) {
            var equalTo = this.isEqualTo(selection), differentTo = !equalTo;
            return differentTo;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var startPosition = 0, endPosition = 0, selection = new Selection2(startPosition, endPosition);
            return selection;
          }
        },
        {
          key: "fromDOMElement",
          value: function fromDOMElement(domElement) {
            var selectionStart = domElement.selectionStart, selectionEnd = domElement.selectionEnd, startPosition = selectionStart, endPosition = selectionEnd, selection = new Selection2(startPosition, endPosition);
            return selection;
          }
        },
        {
          key: "fromStartPositionAndEndPosition",
          value: function fromStartPositionAndEndPosition(startPosition, endPosition) {
            var selection = new Selection2(startPosition, endPosition);
            return selection;
          }
        }
      ]);
      return Selection2;
    }();
    exports.default = Selection;
  });

  // lib/richTextarea.js
  var require_richTextarea = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easy2 = require_lib();
    var _selection = _interopRequireDefault2(require_selection());
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
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
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
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
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
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
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
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
    var BLUR_EVENT_TYPE = _easy2.eventTypes.BLUR_EVENT_TYPE;
    var INPUT_EVENT_TYPE = _easy2.eventTypes.INPUT_EVENT_TYPE;
    var FOCUS_EVENT_TYPE = _easy2.eventTypes.FOCUS_EVENT_TYPE;
    var CHANGE_EVENT_TYPE = _easy2.eventTypes.CHANGE_EVENT_TYPE;
    var SCROLL_EVENT_TYPE = _easy2.eventTypes.SCROLL_EVENT_TYPE;
    var KEYDOWN_EVENT_TYPE = _easy2.eventTypes.KEYDOWN_EVENT_TYPE;
    var MOUSEUP_EVENT_TYPE = _easy2.eventTypes.MOUSEUP_EVENT_TYPE;
    var MOUSEDOWN_EVENT_TYPE = _easy2.eventTypes.MOUSEDOWN_EVENT_TYPE;
    var MOUSEMOVE_EVENT_TYPE = _easy2.eventTypes.MOUSEMOVE_EVENT_TYPE;
    var CONTEXTMENU_EVENT_TYPE = _easy2.eventTypes.CONTEXTMENU_EVENT_TYPE;
    var defer = function(func) {
      return setTimeout(func, 0);
    };
    var RichTextarea = /* @__PURE__ */ function(Element) {
      _inherits(RichTextarea2, Element);
      var _super = _createSuper(RichTextarea2);
      function RichTextarea2() {
        _classCallCheck(this, RichTextarea2);
        return _super.apply(this, arguments);
      }
      _createClass(RichTextarea2, [
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
            var domElement = this.getDOMElement(), value = domElement.value, content = value;
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
              readOnly
            });
          }
        },
        {
          key: "setContent",
          value: function setContent(content) {
            var value = content, previousContent = content, domElement = this.getDOMElement();
            Object.assign(domElement, {
              value
            });
            this.setPreviousContent(previousContent);
          }
        },
        {
          key: "setSelection",
          value: function setSelection(selection) {
            var selectionStartPosition = selection.getStartPosition(), selectionEndPosition = selection.getEndPosition(), selectionStart = selectionStartPosition, selectionEnd = selectionEndPosition, previousSelection = selection, domElement = this.getDOMElement();
            Object.assign(domElement, {
              selectionStart,
              selectionEnd
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
            var content = this.getContent(), previousContent = this.getPreviousContent(), contentDifferentToPreviousContent = content !== previousContent, contentChanged = contentDifferentToPreviousContent;
            return contentChanged;
          }
        },
        {
          key: "hasSelectionChanged",
          value: function hasSelectionChanged() {
            var selection = this.getSelection(), previousSelection = this.getPreviousSelection(), selectionDifferentToPreviousSelection = selection.isDifferentTo(previousSelection), selectionChanged = selectionDifferentToPreviousSelection;
            return selectionChanged;
          }
        },
        {
          key: "activate",
          value: function activate() {
            var mouseDown = false;
            this.setMouseDown(mouseDown);
            _easy2.window.on("".concat(BLUR_EVENT_TYPE, " ").concat(MOUSEUP_EVENT_TYPE, " ").concat(CONTEXTMENU_EVENT_TYPE), this.mouseUpHandler, this);
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
            _easy2.window.off("".concat(BLUR_EVENT_TYPE, " ").concat(MOUSEUP_EVENT_TYPE, " ").concat(CONTEXTMENU_EVENT_TYPE), this.mouseUpHandler, this);
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
            var eventType = BLUR_EVENT_TYPE, handler = blurHandler;
            this.addEventListener(eventType, handler, element);
          }
        },
        {
          key: "offBlur",
          value: function offBlur(blurHandler, element) {
            var eventType = BLUR_EVENT_TYPE, handler = blurHandler;
            this.removeEventListener(eventType, handler, element);
          }
        },
        {
          key: "onFocus",
          value: function onFocus(blurHandler, element) {
            var eventType = FOCUS_EVENT_TYPE, handler = blurHandler;
            this.addEventListener(eventType, handler, element);
          }
        },
        {
          key: "offFocus",
          value: function offFocus(blurHandler, element) {
            var eventType = FOCUS_EVENT_TYPE, handler = blurHandler;
            this.removeEventListener(eventType, handler, element);
          }
        },
        {
          key: "onScroll",
          value: function onScroll(scrollHandler, element) {
            var eventType = SCROLL_EVENT_TYPE, handler = scrollHandler;
            this.addEventListener(eventType, handler, element);
          }
        },
        {
          key: "offScroll",
          value: function offScroll(scrollHandler, element) {
            var eventType = SCROLL_EVENT_TYPE, handler = scrollHandler;
            this.removeEventListener(eventType, handler, element);
          }
        },
        {
          key: "onChange",
          value: function onChange(changeHandler, element) {
            var eventType = CHANGE_EVENT_TYPE, handler = changeHandler;
            this.addEventListener(eventType, handler, element);
          }
        },
        {
          key: "offChange",
          value: function offChange(changeHandler, element) {
            var eventType = CHANGE_EVENT_TYPE, handler = changeHandler;
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
            var content = this.getContent(), selection = this.getSelection(), previousContent = content, previousSelection = selection;
            this.setPreviousContent(previousContent);
            this.setPreviousSelection(previousSelection);
          }
        },
        {
          key: "callHandlers",
          value: function callHandlers(eventType) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              remainingArguments[_key - 1] = arguments[_key];
            }
            var _this = this;
            var eventListeners = this.findEventListeners(eventType);
            eventListeners.forEach(function(eventListener) {
              var handler = eventListener.handler, handlerElement = eventListener.element, element = _this;
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
              mouseDown
            });
          }
        },
        {
          key: "setPreviousContent",
          value: function setPreviousContent(previousContent) {
            this.updateState({
              previousContent
            });
          }
        },
        {
          key: "setPreviousSelection",
          value: function setPreviousSelection(previousSelection) {
            this.updateState({
              previousSelection
            });
          }
        },
        {
          key: "setInitialState",
          value: function setInitialState() {
            var mouseDown = false, previousContent = null, previousSelection = null;
            this.setState({
              mouseDown,
              previousContent,
              previousSelection
            });
          }
        },
        {
          key: "didMount",
          value: function didMount() {
            var _properties = this.properties, active = _properties.active, onChange = _properties.onChange, onScroll = _properties.onScroll, onFocus = _properties.onFocus, onBlur = _properties.onBlur, changeHandler = onChange, scrollHandler = onScroll, focusHandler = onFocus, blurHandler = onBlur;
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
            var _properties = this.properties, onChange = _properties.onChange, onScroll = _properties.onScroll, onFocus = _properties.onFocus, onBlur = _properties.onBlur, changeHandler = onChange, scrollHandler = onScroll, focusHandler = onFocus, blurHandler = onBlur;
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
      return RichTextarea2;
    }(_wrapNativeSuper(_easy2.Element));
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
  });

  // lib/browser.js
  var require_browser2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Selection", {
      enumerable: true,
      get: function() {
        return _selection.default;
      }
    });
    Object.defineProperty(exports, "RichTextarea", {
      enumerable: true,
      get: function() {
        return _richTextarea.default;
      }
    });
    var _selection = _interopRequireDefault2(require_selection());
    var _richTextarea = _interopRequireDefault2(require_richTextarea());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/example/richTextarea.js
  var require_richTextarea2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _browser = require_browser2();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
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
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  border: 1px solid black;\n  width: 32rem;\n  height: 32rem;\n  padding: 0.25rem;\n  font-size: 1.2rem;\n  font-family: monospace;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var _default = (0, _easyWithStyle2).default(_browser.RichTextarea)(_templateObject());
    exports.default = _default;
  });

  // lib/example/view.js
  var require_view = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _richTextarea = _interopRequireDefault2(require_richTextarea2());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var View = function(properties) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "view"
      }, /* @__PURE__ */ React.createElement(_richTextarea.default, {
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
  });

  // lib/example.js
  "use strict";
  require_preamble();
  var _easyWithStyle = _interopRequireDefault(require_lib6());
  var _easy = require_lib();
  var _view = _interopRequireDefault(require_view());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var renderStyles = _easyWithStyle.default.renderStyles;
  var body = new _easy.Body();
  renderStyles();
  body.mount(/* @__PURE__ */ React.createElement(_view.default, null));
})();

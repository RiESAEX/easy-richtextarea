"use strict";

import withStyle from "easy-with-style";  ///

import { window, Element } from "easy";

import "./keys";

import Selection from "./selection"

import { BLUR_EVENT_TYPE,
         INPUT_EVENT_TYPE,
         FOCUS_EVENT_TYPE,
         CHANGE_EVENT_TYPE,
         SCROLL_EVENT_TYPE,
         KEYDOWN_EVENT_TYPE,
         MOUSEDOWN_EVENT_TYPE,
         MOUSEMOVE_EVENT_TYPE,
         MOUSEUP_CONTEXTMENU_BLUR_EVENT_TYPE } from "./eventTypes";

const defer = (func) => setTimeout(func, 0); ///

class RichTextarea extends Element {
  isActive() {
    const active = this.hasClass("active");

    return active;
  }

  isReadOnly() {
    const domElement = this.getDOMElement(),
          { readOnly } = domElement;
    
    return readOnly; 
  }

  getContent() {
    const domElement = this.getDOMElement(),
          { value } = domElement,
          content = value;  ///

    return content;
  }

  getSelection() {
    const domElement = this.getDOMElement(),
          selection = Selection.fromDOMElement(domElement);

    return selection;
  }

  setReadOnly(readOnly) {
    const domElement = this.getDOMElement();

    Object.assign(domElement, {
      readOnly
    });
  }

  setContent(content) {
    const value = content,  ///
          previousContent = content,  ///
          domElement = this.getDOMElement();

    Object.assign(domElement, {
      value
    });

    this.setPreviousContent(previousContent);
  }

  setSelection(selection) {
    const selectionStartPosition = selection.getStartPosition(),
          selectionEndPosition = selection.getEndPosition(),
          selectionStart = selectionStartPosition,  ///
          selectionEnd = selectionEndPosition,  ///
          previousSelection = selection,  ///
          domElement = this.getDOMElement();

    Object.assign(domElement, {
      selectionStart,
      selectionEnd
    });

    this.setPreviousSelection(previousSelection);
  }

  isMouseDown() {
    const state = this.getState(),
          { mouseDown } = state;

    return mouseDown;
  }

  hasChanged() {
    const contentChanged = this.hasContentChanged(),
          selectionChanged = this.hasSelectionChanged(),
          changed = (contentChanged || selectionChanged);

    return changed;
  }

  hasContentChanged() {
    const content = this.getContent(),
          previousContent = this.getPreviousContent(),
          contentDifferentToPreviousContent = (content !== previousContent),
          contentChanged = contentDifferentToPreviousContent; ///

    return contentChanged;
  }

  hasSelectionChanged() {
    const selection = this.getSelection(),
          previousSelection = this.getPreviousSelection(),
          selectionDifferentToPreviousSelection = selection.isDifferentTo(previousSelection),
          selectionChanged = selectionDifferentToPreviousSelection; ///

    return selectionChanged;
  }

  activate() {
    const mouseDown = false;

    this.setMouseDown(mouseDown);

    window.on(MOUSEUP_CONTEXTMENU_BLUR_EVENT_TYPE, this.mouseUpHandler, this); ///

    this.on(MOUSEDOWN_EVENT_TYPE, this.mouseDownHandler, this);

    this.on(MOUSEMOVE_EVENT_TYPE, this.mouseMoveHandler, this);

    this.on(KEYDOWN_EVENT_TYPE, this.keyDownHandler, this);

    this.on(INPUT_EVENT_TYPE, this.inputHandler, this);

    this.on(SCROLL_EVENT_TYPE, this.scrollHandler, this);

    this.on(FOCUS_EVENT_TYPE, this.focusHandler, this);

    this.on(BLUR_EVENT_TYPE, this.blurHandler, this);

    this.addClass("active");
  }

  deactivate() {
    const mouseDown = false;

    this.setMouseDown(mouseDown);

    window.off(MOUSEUP_CONTEXTMENU_BLUR_EVENT_TYPE, this.mouseUpHandler, this);  ///

    this.off(MOUSEDOWN_EVENT_TYPE, this.mouseDownHandler, this);

    this.off(MOUSEMOVE_EVENT_TYPE, this.mouseMoveHandler, this);

    this.off(KEYDOWN_EVENT_TYPE, this.keyDownHandler, this);

    this.off(INPUT_EVENT_TYPE, this.inputHandler, this);

    this.off(SCROLL_EVENT_TYPE, this.scrollHandler, this);

    this.off(FOCUS_EVENT_TYPE, this.focusHandler, this);

    this.off(BLUR_EVENT_TYPE, this.blurHandler, this);

    this.removeClass("active");
  }

  onBlur(blurHandler, element) {
    const eventType = BLUR_EVENT_TYPE,
          handler = blurHandler;  ///

    this.addEventListener(eventType, handler, element);
  }

  offBlur(blurHandler, element) {
    const eventType = BLUR_EVENT_TYPE,
          handler = blurHandler;  ///

    this.removeEventListener(eventType, handler, element);
  }

  onFocus(blurHandler, element) {
    const eventType = FOCUS_EVENT_TYPE,
          handler = blurHandler;  ///

    this.addEventListener(eventType, handler, element);
  }

  offFocus(blurHandler, element) {
    const eventType = FOCUS_EVENT_TYPE,
          handler = blurHandler;  ///

    this.removeEventListener(eventType, handler, element);
  }

  onScroll(scrollHandler, element) {
    const eventType = SCROLL_EVENT_TYPE,
          handler = scrollHandler;  ///

    this.addEventListener(eventType, handler, element);
  }

  offScroll(scrollHandler, element) {
    const eventType = SCROLL_EVENT_TYPE,
          handler = scrollHandler;  ///

    this.removeEventListener(eventType, handler, element);
  }

  onChange(changeHandler, element) {
    const eventType = CHANGE_EVENT_TYPE,
          handler = changeHandler;  ///

    this.addEventListener(eventType, handler, element);
  }

  offChange(changeHandler, element) {
    const eventType = CHANGE_EVENT_TYPE,
          handler = changeHandler;  ///

    this.removeEventListener(eventType, handler, element);
  }

  mouseUpHandler(event, element) {
    const mouseDown = false;

    this.setMouseDown(mouseDown);
  };

  mouseDownHandler(event, element) {
    const forced = false,
          mouseDown = true,
          eventType = CHANGE_EVENT_TYPE;

    this.setMouseDown(mouseDown);

    defer(() => this.intermediateHandler(event, element, eventType, forced));
  }

  mouseMoveHandler(event, element) {
    const forced = false,
          mouseDown = this.isMouseDown(),
          eventTYpe = CHANGE_EVENT_TYPE;

    if (mouseDown) {
      this.intermediateHandler(event, element, eventTYpe, forced);
    }
  }

  keyDownHandler(event, element) {
    const forced = false,
          eventType = CHANGE_EVENT_TYPE;

    defer(() => this.intermediateHandler(event, element, eventType, forced));
  }

  inputHandler(event, element) {
    const forced = false,
          eventType = CHANGE_EVENT_TYPE;

    this.intermediateHandler(event, element, eventType, forced);
  }

  scrollHandler(event, element) {
    const eventType = SCROLL_EVENT_TYPE;

    this.callHandlers(eventType, event, element);
  }

  focusHandler(event, element) {
    const forced = true,
          eventType = FOCUS_EVENT_TYPE;

    defer(() => this.intermediateHandler(event, element, eventType, forced));
  }

  blurHandler(event, element) {
    const forced = true,
          eventType = BLUR_EVENT_TYPE;

    this.intermediateHandler(event, element, eventType, forced);
  }

  intermediateHandler(event, element, eventType, forced) {
    const changed = this.hasChanged();

    if (changed || forced) {
      this.callHandlers(eventType, event, element);
    }

    const content = this.getContent(),
          selection = this.getSelection(),
          previousContent = content,  ///
          previousSelection = selection;  ///

    this.setPreviousContent(previousContent);
    this.setPreviousSelection(previousSelection);
  }

  callHandlers(eventType, ...remainingArguments) {
    const eventListeners = this.findEventListeners(eventType);

    eventListeners.forEach((eventListener) => {
      const { handler, element: handlerElement } = eventListener,
            element = this; ///

      if ((handler !== this.blurHandler) && (handler !== this.focusHandler) && (handler !== this.scrollHandler)) {
        handler.call(handlerElement, ...remainingArguments, element);
      }
    });
  }

  getPreviousContent() {
    const state = this.getState(),
          { previousContent } = state;

    return previousContent;
  }

  getPreviousSelection() {
    const state = this.getState(),
          { previousSelection } = state;

    return previousSelection;
  }

  setMouseDown(mouseDown) {
    this.updateState({
      mouseDown
    });
  }

  setPreviousContent(previousContent) {
    this.updateState({
      previousContent
    });
  }

  setPreviousSelection(previousSelection) {
    this.updateState({
      previousSelection
    });
  }

  setInitialState() {
    const mouseDown = false,
          previousContent = null,
          previousSelection = null;

    this.setState({
      mouseDown,
      previousContent,
      previousSelection
    });
  }

  didMount() {
    const { active, onChange, onScroll, onFocus, onBlur } = this.properties,
            changeHandler = onChange, ///
            scrollHandler = onScroll, ///
            focusHandler = onFocus, ///
            blurHandler = onBlur; ///

    changeHandler && this.onChange(changeHandler, this);
    scrollHandler && this.onScroll(scrollHandler, this);
    focusHandler && this.onFocus(focusHandler, this);
    blurHandler && this.onBlur(blurHandler, this);

    if (active) {
      this.activate();
    }
  }

  willUnmount() {
    const { onChange, onScroll, onFocus, onBlur } = this.properties,
          changeHandler = onChange, ///
          scrollHandler = onScroll, ///
          focusHandler = onFocus, ///
          blurHandler = onBlur; ///

    changeHandler && this.offChange(changeHandler, this);
    scrollHandler && this.offScroll(scrollHandler, this);
    focusHandler && this.offFocus(focusHandler, this);
    blurHandler && this.offBlur(blurHandler, this);
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "textarea";

  static defaultProperties = {
    className: "rich"
  };

  static ignoredProperties = [
    "onChange",
    "onScroll",
    "onFocus",
    "onBlur",
    "active"
  ];
}

export default withStyle(RichTextarea)`

  display: none;

  .active {
    display: block;
  }

`

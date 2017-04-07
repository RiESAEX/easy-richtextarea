'use strict';

require('setimmediate');

const defer = setImmediate; ///

const easy = require('easy');

const Selection = require('./selection');

const { window, InputElement } = easy;

class RichTextarea extends InputElement {
  constructor(selector, changeHandler, scrollHandler, focusHandler, blurHandler) {
    super(selector);

    this.changeHandler = changeHandler;
    this.scrollHandler = scrollHandler;
    this.focusHandler = focusHandler;
    this.blurHandler = blurHandler;

    const content = this.getContent(),
          selection = this.getSelection(),
          previousContent = content,  ///
          previousSelection = selection;  ///

    this.setPreviousContent(previousContent);
    this.setPreviousSelection(previousSelection);
  }

  activate() {
    this.setMouseDown();

    window.on('mouseup contextmenu blur', this.mouseUpHandler, this);

    this.on('mousedown', this.mouseDownHandler, this);

    this.on('mousemove', this.mouseMoveHandler, this);

    this.on('keydown', this.keyDownHandler, this);

    this.on('input', this.inputHandler, this);

    if (this.scrollHandler !== undefined) {
      this.on('scroll', this.scrollHandler, intermediateScrollHandler.bind(this));
    }

    if (this.focusHandler !== undefined) {
      this.on('focus', this.focusHandler, intermediateFocusHandler.bind(this));
    }

    if (this.blurHandler !== undefined) {
      this.on('blur', this.blurHandler, intermediateBlurHandler.bind(this));
    }

    this.addClass('active');
  }

  deactivate() {
    this.setMouseDown();

    window.off('mouseup contextmenu blur', this.mouseUpHandler);

    this.off('mousedown', this.mouseDownHandler);

    this.off('mousemove', this.mouseMoveHandler);

    this.off('keydown', this.keyDownHandler);

    this.off('input', this.inputHandler);

    if (this.scrollHandler !== undefined) {
      this.off('scroll', this.scrollHandler);
    }

    if (this.focusHandler !== undefined) {
      this.off('focus', this.focusHandler);
    }

    if (this.blurHandler !== undefined) {
      this.off('blur', this.blurHandler);
    }

    this.removeClass('active');
  }

  isActive() {
    const active = this.hasClass('active');

    return active;
  }

  getContent() {
    const value = this.getValue(),
          content = value;  ///

    return content;
  }

  getSelection() {
    const selectionStart = this.getSelectionStart(),
          selectionEnd = this.getSelectionEnd(),
          startPosition = selectionStart, ///
          endPosition = selectionEnd, ///
          selection = new Selection(startPosition, endPosition);

    return selection;
  }

  setContent(content) {
    const value = content,  ///
          previousContent = content;  ///

    this.setValue(value);

    this.setPreviousContent(previousContent);
  }

  setSelection(selection) {
    const selectionStartPosition = selection.getStartPosition(),
          selectionEndPosition = selection.getEndPosition(),
          selectionStart = selectionStartPosition,  ///
          selectionEnd = selectionEndPosition,  ///
          previousSelection = selection;  ///

    this.setSelectionStart(selectionStart);
    this.setSelectionEnd(selectionEnd);

    this.setPreviousSelection(previousSelection);
  }

  isMouseDown() {
    const mouseDown = this.fromState('mouseDown');

    return mouseDown;
  }

  getPreviousContent() {
    const previousContent = this.fromState('previousContent');

    return previousContent;
  }

  getPreviousSelection() {
    const previousSelection = this.fromState('previousSelection');

    return previousSelection;
  }

  setMouseDown(mouseDown) {
    this.updateState({
      mouseDown: mouseDown
    });
  }

  setPreviousContent(previousContent) {
    this.updateState({
      previousContent: previousContent
    });
  }

  setPreviousSelection(previousSelection) {
    this.updateState({
      previousSelection: previousSelection
    });
  }

  fromState(name) {
    let state = this.getState();

    state = state || {};  ///

    const value = state[name];

    return value;
  }

  updateState(update) {
    let state = this.getState();

    state = state || {};  ///

    state = Object.assign(state, update);

    this.setState(state);
  }

  mouseUpHandler() {
    const mouseDown = false;

    this.setMouseDown(mouseDown);
  };

  mouseDownHandler() {
    const mouseDown = true;

    this.setMouseDown(mouseDown);
  }

  mouseMoveHandler() {
    const mouseDown = this.isMouseDown();

    if (mouseDown) {
      this.possibleChangeHandler();
    }
  }

  keyDownHandler() {
    defer(function() {
      this.possibleChangeHandler();
    }.bind(this));
  }

  inputHandler() {
    const active = this.isActive();

    if (active) {
      this.possibleChangeHandler();
    }
  }

  possibleChangeHandler() {
    const active = this.isActive();

    if (active) {
      const content = this.getContent(),
            selection = this.getSelection();

      let previousContent = this.getPreviousContent(),
          previousSelection = this.getPreviousSelection();

      const contentDifferentToPreviousContent = (content !== previousContent),
            selectionDifferentToPreviousSelection = selection.isDifferentTo(previousSelection),
            contentChanged = contentDifferentToPreviousContent, ///
            selectionChanged = selectionDifferentToPreviousSelection, ///
            changed = contentChanged || selectionChanged;

      if (changed) {
        const targetElement = this; ///

        this.changeHandler(content, selection, contentChanged, selectionChanged, targetElement);
      }

      previousContent = content;  ///
      previousSelection = selection;  ///

      this.setPreviousContent(previousContent);
      this.setPreviousSelection(previousSelection);
    }
  }

  static fromProperties(properties) {
    const { onScroll, onFocus, onBlur } = properties,
          scrollHandler = onScroll, ///
          focusHandler = onFocus, ///
          blurHandler = onBlur; ///

    return InputElement.fromProperties(RichTextarea, properties, scrollHandler, focusHandler, blurHandler);
  }
}

Object.assign(RichTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'rich'
  },
  ignoredProperties: [
    'onScroll',
    'onFocus',
    'onBlur'
  ]
});

module.exports = RichTextarea;

function intermediateScrollHandler(scrollHandler) {
  const active = this.isActive();

  if (active) {
    const scrollTop = this.getScrollTop(),
          scrollLeft = this.getScrollLeft(),
          preventDefault = scrollHandler(scrollTop, scrollLeft);

    return preventDefault;
  }
}

function intermediateFocusHandler(focusHandler) {
  defer(function() {
    const active = this.isActive();

    if (active) {
      const content = this.getContent(),
            selection = this.getSelection(),
            preventDefault = focusHandler(content, selection);

      return preventDefault;
    }
  }.bind(this));
}

function intermediateBlurHandler(blurHandler) {
  const active = this.isActive();

  if (active) {
    const preventDefault = blurHandler();

    return preventDefault;
  }
}

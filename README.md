# Easy RichTextarea

A textarea element that handles and hands off events well.

This element enshrines the concept of being active, that is being both visible *and* hogging the user input. Hogging the user input means that several event handlers are registered to handle user input events when the element is activated. These handlers are then unregistered when the element is deactivated. Using it will take some of the headache out of having multiple textareas in one application because only the active rich textarea will invoke its handlers. It also provides better event handling. For example, the change handler will be invoked whenever the content or selection changes, no matter how often, rather then just, say, when the focus is lost.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. So although Easy elements will continue to work standalone, their use with Juxtapose is recommended.

### Related projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy Navigation](https://github.com/djalbat/easy-navigation) A responsive accordion and associated navigation.
- [Easy File System](https://github.com/djalbat/easy-file-system) A file system explorer and a rubbish bin.
- [Easy Drag and Drop](https://github.com/djalbat/easy-drag-and-drop) Drag and drop functionality for Easy elements.

## Installation

You can install Easy RichTextarea with [npm](https://www.npmjs.com/):

    npm install easy-richtextarea

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-richtextarea.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding`src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

The `RichTextarea` element is typically created with several handlers:

```
import { RichTextarea } from "easy-richtextarea";

const richTextarea =

        <RichTextarea onChange={changeHandler}
                      onScroll={scrollHandler}
                      onFocus={focusHandler}
                      onBlur={blurHandler}
        />

      ;

function changeHandler(event, element) {
  const contentChanged = element.hasContentChanged(),
        selectionChanged = element.hasSelectionChanged();

  console.log(contentChanged, selectionChanged)
}

function scrollHandler(event, element) {
  const scrollTop = element.getScrollTop(),
        scrollLeft = element.getScrollLeft();

  console.log(scrollTop, scrollLeft)
}

function focusHandler(event, element) {
  console.log("focus")
}

function blurHandler(event, element) {
  console.log("blur")
}
```

Activating and deactivating the element couldn't be simpler:

```
richTextarea.activate();

richTextarea.deactivate();
```
Or you can just set the `active` attribute directly initially:
```
<RichTextarea ... active />
```

## Focus and selection

It is important to note that being active and having the focus are not the same thing for a rich textarea element. The former is a concept defined here, the latter is a native property of the underlying DOM element. This is worth mentioning because the concepts of being active and being focused are often used interchangeably elsewhere.

Also, note that the `getSelection()` method will always return a selection even when the underlying DOM element has none. This is because the native `startPosition` and `endPosition` properties of the DOM element, on which the `getSelection()` method ultimately relies, always return values regardless of the presence or otherwise of a selection. If there is no selection, they will both return zero. A textarea element does not always have a selection, however. This can occur before it receives the focus, or if the selection is cleared programmatically by way of the native `removeAllRanges()` method. Despite this, there currently appears to be no reliable way to discern when the underlying selection is present, and so the `getSelection()` method will always return a selection object.

Some good news is that the selection is unaffected by focus. Bear in mind, however, that a selection is not updated until the tick after a DOM element in question receives the focus. For this reason, the rich textarea element will defer the handing off of a focus event for a tick so as to be able to provide the updated selection as one of the arguments to its focus handler.

## Styles

There is a small amount of default styling. The rich textarea element has a class name, however, allowing you to override this with CSS. Or a better way is to use [Easy with Style](https://github.com/djalbat/easy-with-style). For example:

```
import withStyle from "easy-with-style";

export default (RichTextarea)`

  ...

  .active {

    ...

  }

`;
```

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com

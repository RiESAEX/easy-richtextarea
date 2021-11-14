"use strict";

import { document } from "easy";

const SHIFT_KEY = "Shift";
const CONTROL_KEY = "Control";

let shiftKeyDown = false,
    controlKeyDown = false;

document.onKeyUp(keyUpHandler);

document.onKeyDown(keyDownHandler);

const callback = (event, element) => {
        event.preventDefault();
      },
      capturedKeys = [ SHIFT_KEY, CONTROL_KEY, "s" ];

function keyUpHandler(event, element) {
  const { key } = event;

  switch (key) {
    case SHIFT_KEY:
      shiftKeyDown = false;

      break;

    case CONTROL_KEY:
      controlKeyDown = false;

      break;
  }
}

function keyDownHandler(event, element) {
  const { key } = event;

  switch (key) {
    case SHIFT_KEY:
      shiftKeyDown = true;

      break;

    case CONTROL_KEY:
      controlKeyDown = true;

      break;

    default: {
      const lowerCaseKey = key.toLowerCase(),
            captured = capturedKeys.every((capturedKey) => {
              let captured = false;

              switch (capturedKey) {
                case SHIFT_KEY:
                  if (shiftKeyDown) {
                    captured = true;
                  }

                  break;

                case CONTROL_KEY:
                  if (controlKeyDown) {
                    captured = true;
                  }

                  break;

                default: {
                  const lowerCaseCapturedKey = capturedKey.toLowerCase();

                  if (lowerCaseCapturedKey === lowerCaseKey) {
                    captured = true;
                  }
                }
              }

              return captured;
            });

      if (captured) {
        callback(event, element);
      }
    }
  }
}

# is-printable-key-event

Detect whether a DOM KeyboardEvent key event is printable; that is, typed by a user. This is useful for custom input components that need ignore control keys such as `Alt` and only be triggered when 'regular', printable keys are pressed such as `a` or `€`.

## Introduction

Detecting whether a DOM UI event key is printable has become more complicated since `KeyboardEvent.keyCode` was deprecated (see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode), as you can no longer simply specify the ranges of printable key codes (an approach chosen by https://github.com/mynamesleon/is-printable-keycode).

Instead, we rely on the W3C UI Events KeyboardEvent specification to determine whether a keyboard event is caused by a printable key press. A printable key here is defined by the W3C spec as a "key string", i.e. a "character typed by the user". To do this, we check the event's key attribute against a list of known non-printable keys (called "named key attribute values"). If the key is not in this list, we determine it to be printable.

## Usage

```js
import isPrintableKeyEvent from "is-printable-key-event";

element.addEventListener("keydown", function (event) {
  if (isPrintableKeyEvent(event) === false) {
    return; // ignore key down
  }

  // do something with input
});

```

## References

https://www.aarongreenlee.com/blog/list-of-non-printable-keys-for-keyboard-events-when-using-event-key/
https://www.w3.org/TR/uievents-key/

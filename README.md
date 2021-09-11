# banana-speak

#text-Area tag
The <textarea> tag defines a multi-line text input control.

The <textarea> element is often used in a form, to collect user inputs like comments or reviews.

A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).

The size of a text area is specified by the <cols> and <rows> attributes (or with CSS).

The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the text area will be submitted).

The id attribute is needed to associate the text area with a label.

Tip: Always add the <label> tag for best accessibility practices!

#label tag
Proper use of labels with the elements above will benefit:

Screen reader users (will read out loud the label, when the user is focused on the element)
Users who have difficulty clicking on very small regions (such as checkboxes) - because when a user clicks the text within the <label> element, it toggles the input (this increases the hit area).
Tips and Notes
Tip: The for attribute of <label> must be equal to the id attribute of the related element to bind them together. A label can also be bound to an element by placing the element inside the <label> element.

#callback function
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

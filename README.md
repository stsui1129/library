Library Project
---
In this project, I created a small library app where users can store book information through a form.

Issues encountered:

Had an issue where my inputted book appears very briefly on the page and then disappears. I put a console.log of the library in before the renderBook(book) line, and it showed three books in the library but only two books if I put it at the end, which meant something was reloading the page so the book was no longer in the library. This problem was caused by the default property of the button clearing the form and reloading the page, which was fixed by using event.preventDefault().



Things to work on:

Read status coding could be cleaner, this.info not working, and CSS.

https://stsui1129.github.io/library/


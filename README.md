library
Not relevant to this problem
But you need to check your 'read' status on your books
The form will return true/false
but in your two sample books you state 'read'
on lines 3/4

issue:
So the problem is that something is reloading the page
The code itself is working, but the submit button is reloading everything
I put a console.log of the library in before the renderBook(book) line, and it showed three books in the library, and as you mentioned it appears very briefly on the page
but then everything reloads and the book is no longer in the library
meaning the program is resetting
OK
@BubbleTearju The problem is that the buttons are inside of the form tag
So the default response is for the page to reload
Move the form tag in front of the buttons
The problem is the form now doesn't disappear :smile:
WAIT
I remember something about this
something like 'prevent default'

const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", (event) => {
    addBookToLibrary()
    toggleModal()
  event.preventDefault()

});

you'll also need to clear the values in there, since we're preventing it from doing so using that preventdefault



so whenever the page is reloaded, the library becomes empty and then two books are put in, and then they're rendered
So a page reload will only ever show two books



Yes, the submit button has a default property as part of html
which is to clear the form
and reload the page

It seems like any button will do the reset
[9:36 PM]
submit: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.
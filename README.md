# colorGame_using_JavaScript
An implementation of fadeout, fadein, checking user input, etc in JS

A simple javaScript program using functions to control flow:
  querySelecter is used to fetch the dom elements
  addEventListener is used to add events to dom elements when clicked
  
There are two options:
1. Easy 3-choices

2. Hard 6-choices

Now the execution of program:
  
  1. generateColor() is called which generates either 3 or 6 .square type boxes wit random color to all
      - in this one sqaure is selected at random to be the correct box and its color(R,G.B) value is taken and assigned to a dom element in header
      
  2. Now eventListener is assigned to all the squares created
  
  3. On click; eventListener is triggered and evaluate() is called
  
      evaluate has two option -  if the selected color matches the correct color set earlier; then turn all boxes color to the correct color and call reset() to initialize the game
                              -  if wrong color is selected; change back ground color to none and set a dom element to try again 

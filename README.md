## CSC220-Assignments
assignments from Advanced Programming Techniques class

## Assignment 1

Visualize the data defined in the attached data.js document.

A possibility for the user to chose from the three data sets (e.g. drop-down list, list of links, etc.)

After selecting a data set, its data series should be visualized in form of a bar chart, showing the labels for each data point

If there is already a data set active, it has to be replaced with the newly selected data set

The title of the selected data set should appear somewhere

When moving over a bar with the mouse, that bar should highlight in a different color (or other effect) and the value of the data point should be displayed above the bar (but the highlighting and data label should disappear when the mouse leaves the bar)

## Assignment 2
Re-implement bar chart based on Canvas (including hover effect)

Add the ability to switch between bar chart and line chart

Add a vertical scale and value labels to both chart types (major and minor steps)

For line chart only:
Highlight points and show data values of the data point that is closest to the mouse
Following the mouse's Y position, a dotted line should be drawn so that one has a horizontal guide

Use object-oriented approach

## Assignment 3
Use GameEngine (derive from it), to set up a game loop canvas

Implement your own drop-down list in Canvas:

Create your own objects for Selector and Option

Input: override the onMouseClick method and do your own hit-testing on your Selector object(s)

Output: override the draw method and call your Selector's draw function

Selector has to have a setPosition(x, y) method, so that you can instantiate multiple selectors on the same canvas

## Assignment 4
Use object-oriented approach to design a system that draws different shapes (circle, square, triangle) and allows you to drag and layer the shapes

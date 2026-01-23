# Components Documentation

This folder contains all of the components that the sketch-project has. This document is up-to-date as of 13/12/2025.

## Canvas.jsx

A component that allows the user to draw within a specified window on the web page.

### Props

- width: An integer describing the width of the canvas (default set to window.innerWidth)
- height: An integer describing the height of the canvas (default set to window.innerHeight)
- stroke: A string describing the color of the tool used to draw (default set to 'black')
- stroke_width: An integer describing the thickness of the tool used to draw (default set to 0.5)

### State

- tool: A string that represents the tool the user is operating on the canvas with (default is pencil)
- lines: An array of objects that represents a line/stroke done on the canvas component. A line is defined by a tool and an array of points representing coordinates within the canvas components

## Toolbar.jsx

A component that hosts a slew of features for the canvas component.

### Props

- n.a

### State

## Button.jsx

A component that behaves as a button, containing information about levels or topics (beginner, intermediate, advanced, etc). Meant to be mapped.

### Props

- id: A string describing what the button is, either a level or topic button
- title: A string describing the topic/level
- handleClick: A function that handles the button behaviour
- children: The prop responsible for the elements residing inside the button

## ContentRenderer.jsx

A component that renders content for the study page. Conditionally renders the content with the help of a switch.

### Props

- content: An array of objects describing the content of the page

## HeaderBar.jsx

A component that is placed at the top of every page. Hosts easy navigation.

### Props

- isLoggedIn: A boolean that describes if the user is logged in

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

## ButtonContainer.jsx

A component that behaves as a button, containing information about levels or topics (beginner, intermediate, advanced, etc). Meant to be mapped.

### Props

- index: Self-explanatory
- useCase: A string describing what the button is, either a level or topic button
- title: A string describing the topic/level
- proficency?: A string describing the level of proficiency the topics of the learning material is aimed towards
- hours?: An integer estimating the hours required before the user can comfortably handle the topics
- info: A string of some surface level info
- icon: An image/icon of the button container

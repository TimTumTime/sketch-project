# Components Documentation

This folder contains all of the components that the sketch-project has. This document is up-to-date as of 13/12/2025.

## Canvas.jsx

A component that allows the user to draw within a specified window on the web page.

### Props

- width: The width of the canvas (default set to window.innerWidth)
- height: The height of the canvas (default set to window.innerHeight)
- stroke: The color of the tool used to draw (default set to 'black')
- stroke_width: The thickness of the tool used to draw (default set to 0.5)

### State

- tool: A string that represents the tool the user is operating on the canvas with (default is pencil)
- lines: An array of objects that represents a line/stroke done on the canvas component. A line is defined by a tool and an array of points representing coordinates within the canvas components

## Level.jsx

A component that acts an entry point for learning material of a certain proficiency or level (beginner, intermediate, advanced, etc). Behaves like a button whilst displaying information about the proficiency within a container. Is meant to be mapped to an array.

### Props

- index: Self-explanatory
- proficency: The level of proficiency the topics of the learning material is aimed towards
- hours: An estimate of the hours required before the user can comfortably handle the topics
- info: Some surface level infor about the proficiency
- icon: An image/icon of the level

## LearningPage.jsx

A component that acts as a static web page to provide study. Behaves like a normal web page on a static website, however, the data is populated with props.

### Props

- title: Self-explanatory
- paragraphs: An array of strings containing the learning material
- images: An array of images containing reference images

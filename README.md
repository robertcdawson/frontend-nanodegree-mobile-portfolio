# Website Performance Optimization portfolio project

The goal of this project is to optimize the performance of a sample website, applying best practices, such as inlining and minification, while also achieving at least 60fps for animations.

## Instructions

1. Clone this repository.
1. Run a local server.

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit [localhost:8080](http://localhost:8080).
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and run it through PageSpeed Insights.

## Optimizations

### In-page Optimizations

* Added small inline JavaScript code
* Added async attribute to loaded scripts
* Inlined stylesheet
* Minified HTML

### CSS Optimizations

* Removed inline styles within body
* Concatenated CSS
* Minified CSS

### JavaScript Optimizations

* Added and tested 'use strict' declaration within all functions
* Reduced frame rate of pizza resizing below 60fps
* Created variables to cache values within conditionals (e.g. "randomPizzas", "movingPizzas", "itemsLength")
* Added comments (in main_unminified.js) to explain changes
* Minified JavaScript

### Asset Optimizations

* Optimized image filesizes
* Deduced dimensions of images resized inline to match inline dimensions
* Added inline width and height attributes

### UI Optimizations

* Removed ugly light red content background
* Increased content width from 45em to 60em to improve readability of pizza information

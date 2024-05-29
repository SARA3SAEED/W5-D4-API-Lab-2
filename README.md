# Image API:

This repository contains a simple web application that allows users to manage images through a mock API. The application enables users to add new images, display all images, and delete images both from the DOM and the API.

## Features

1. **Add Image to API**: Users can input an image name and URL, and submit these to the API, where they will be stored.
2. **Display All Images**: All stored images are fetched from the API and displayed in the DOM.
3. **Delete Image**: Each displayed image has a delete button that allows users to remove the image from both the DOM and the API.

## How It Works

### 1. Adding an Image

Users can add a new image by providing its name and URL. The data is sent to the API via a POST request and stored.

### 2. Displaying Images

All images stored in the API are fetched and displayed in the DOM. Each image is shown with its name and URL.

### 3. Deleting an Image

Each image has a delete button. When clicked, the image is removed from both the DOM and the API via a DELETE request.

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- MockAPI (https://mockapi.io/)


## Demo Live:
- You can view the live demo of this project [here](https://sara3saeed.github.io/W5-D4-API-Lab-2/).

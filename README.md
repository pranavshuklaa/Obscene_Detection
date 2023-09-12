# Obscene Detection Chrome Extension

## Introduction

This Google Chrome extension was developed during the regional level hackathon of Kavach All India Hackathon to address the need for an obscene content detection system. The primary goal of this extension is to analyze images on web pages for objectionable material and notify the user if such content is found.

## Project Overview

### Situation

The project was initiated in response to the growing concern about objectionable content on the internet. The need for a tool to automatically detect and alert users to such content led to the development of this Chrome extension.

### Task

Our task was to create a Google Chrome extension capable of the following:

- Extract the URL of the active tab in the browser.
- Download images from the webpage associated with the active tab.
- Screen these images for obscene material using an image processing model.
- Identify and notify the user if any offensive images were detected.

### Implementation

To achieve our goals, we followed a multi-step process:

1. **Background Script (`background.js`):**
   - The background script listens for messages from the content script.
   - When a message is received requesting the active tab's URL, it queries Chrome's tab API to obtain the URL.

2. **Content Script (`content.js`):**
   - The content script is executed within the context of the active webpage.
   - It sends a message to `background.js` to request the active tab's URL.
   - Upon receiving the URL, it makes a POST request to a local server (`http://localhost:9000/extract_images`) with the URL as a parameter.
   - The server processes the webpage using Beautiful Soup, a web scraping library, to extract all image URLs present on the page.
   - These image URLs are downloaded and then sent to an image processing model.
   - The model classifies each image as obscene or not.

3. **Result and Notification:**
   - If the image processing model identifies any offensive images, the extension notifies the user.
   - Additionally, during the hackathon, we had plans to send notifications to appropriate authorities if obscene content was detected.

## TEAM 
1. Ishaan Chandak
2. Pranav Shukla
3. Dhruvanshu Joshi
4. Soham Mulye
5. Dishie Vinchi
6. Om Doiphode


## Installation and Usage

To use this extension:

1. Clone this repository to your local machine.
2. Install the extension in Google Chrome:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode."
   - Click "Load unpacked" and select the directory where you cloned this repository.
3. Use the extension by opening a webpage and clicking on the extension icon in the Chrome toolbar.

## Contributing

If you'd like to contribute to this project, feel free to submit pull requests or open issues on the GitHub repository.

## Acknowledgments

This project was developed during the regional level hackathon of Kavach All India Hackathon and was a collaborative effort by the team members.

## License

This project is licensed under the [MIT License](LICENSE).

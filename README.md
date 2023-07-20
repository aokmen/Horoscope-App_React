# Horoscope Web React Application

<h3>visit: https://horoscope-app-react-02.netlify.app/</h3>
<div align="center"> <img alt="alt_text" src="./horoscope.gif"/> </div>

## Description:
This project is a Horoscope web application that provides information about different zodiac signs, including their descriptions and associated images. Users can explore the horoscope details for each zodiac sign and learn more about their characteristics and traits.

## Features

### Navbar Component (Navbar.js)
- The Navbar component displays the application logo and navigation links.
- It includes links to different sections, such as Horoscope, Daily, Tarot, Article, and Contact.

### Header Component (Header.js)
- The Header component presents a text with a captivating animation, "Who Are You?"
- The text has an underline and a flickering effect, creating a visually appealing header.

### Main Component (Main.js)
- The Main component serves as the main content container of the application.
- It imports the Card component and passes the data array to display information about each zodiac sign.

### Card Component (Card.js)
- The Card component receives data about each zodiac sign and renders their details.
- It displays the title, date range, and an image representing the zodiac sign.
- When hovering over the card, the image opacity increases, providing an interactive user experience.
- A description paragraph is revealed when hovering over the card, showing the characteristics of the zodiac sign.

### Styling
- SCSS (Sass) is used for styling, providing a maintainable and organized stylesheet.
- Variables are used to manage colors and other reusable styles.
- The layout is designed to be responsive, adapting to different screen sizes.

### Data
- The project uses the 'data' array to store information about each zodiac sign.
- The array includes details such as title, date range, description, and an image URL for each sign.

### Background
- The application has a visually appealing background with a gradient color scheme.

### Fonts
- Custom fonts from Google Fonts, "Almendra Display" and "Rubik Distressed," are imported for a unique text style.

### Button Styling
- A separate SCSS file is used to style buttons in different sizes (small and large).
- The buttons have rounded corners, color variations, and proper margins.

### Responsive Design
- The application is designed to be responsive, ensuring a consistent user experience across various devices and screen sizes.

## Getting Started
To run this application, follow these steps:
1. Clone the repository.
2. Install the required dependencies using npm or yarn.
3. Start the development server with the appropriate command.
4. Open the application in your web browser.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request for any changes.

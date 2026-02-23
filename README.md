# Weather App

A simple Electron desktop application that displays the current weather temperature for a specified city.

## Features

- Clean, minimal UI with custom styling
- Real-time weather data from OpenWeatherMap API
- Compact window design (214x228px)
- Frameless window with custom appearance

## Prerequisites

- Node.js and npm installed on your system
- An OpenWeatherMap API key (get one at [openweathermap.org](https://openweathermap.org/api))

## Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install electron --save-dev
   ```

## Configuration

Before running the app, you need to add your OpenWeatherMap API key:

1. Open `script.js`
2. Replace the `apiKey` value with your own API key:
   ```javascript
   const apiKey = "your-api-key-here";
   ```
3. Optionally, change the default city by modifying the `defaultCity` variable:
   ```javascript
   const defaultCity = "YourCity";
   ```

## Running the App

Start the application with:
```bash
npm start
```

## Usage

The app will automatically fetch and display the weather for the default city when it launches. The temperature is shown in Celsius.

## Project Structure

- `main.js` - Electron main process (window creation)
- `index.html` - Application UI structure
- `styles.css` - Styling and animations
- `script.js` - Weather API integration and data fetching
- `package.json` - Project configuration and dependencies

## Notes

- The app window is non-resizable and frameless
- Requires an active internet connection to fetch weather data
- Weather data is fetched from OpenWeatherMap API

## Preview

<img width="231" height="248" alt="image" src="https://github.com/user-attachments/assets/553d16d5-6579-4563-afc8-9dedb1f46ac5" />

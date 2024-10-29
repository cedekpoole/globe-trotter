# 🌍 GlobeTrotter

GlobeTrotter is a React-based Single Page Application (SPA) for travel enthusiasts to record, manage, and review notes on cities they’ve visited around the world. It features interactive map-based city selection, location tracking, and a streamlined city notes management system, all wrapped up with a simple login/logout flow.

## 🌐 Live Demo

Explore GlobeTrotter live: [globe-trotter-dot-com.netlify.app](https://globe-trotter-dot-com.netlify.app/)

## 🚀 Features

- **Map-Based Interaction**: Explore a world map, click on cities, and add notes on your experiences there.
- **City Management**: Easily add and delete cities from your visited list. Each city can include personalized notes for reference.
- **Authentication**: Basic authentication (mocked) allows login and logout, with route protection.
- **Geolocation**: Quickly find and zoom to your current location.
- **Dynamic Data Storage**: City data is saved to and fetched from JSONBin.io.

## 🛠️ Tech Stack

This app leverages a modern tech stack for a smooth and interactive experience:

- **React** for the UI
- **React Router** for routing and route protection
- **useContext & useReducer** for state management
- **React Leaflet** for map integration
- **Tailwind CSS** for styling
- **Geolocation API** to detect the user’s current location
- **JSONBin.io** for external data storage (city details)

## 🔑 Key Features in Detail

### Authentication & Protected Routes

- **Login**: Access the main application only after logging in.
- **Protected Route**: The main application is accessible only if authenticated.
- **Logout**: Redirects users back to the homepage, clearing session data.

### Map & City Interaction

- **Interactive Map**: Powered by React Leaflet, allowing users to search and select cities.
- **City Form**: Add personal notes and details for each city.
- **City List Management**: Add and delete cities from your "visited" list with ease.

### Geolocation

- **Find My Location**: Automatically locates your current position and zooms into it on the map.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project.
2. Create a feature branch (git checkout -b feature-name).
3. Commit your changes (git commit -m 'Add feature').
4. Push to the branch (git push origin feature-name).
5. Open a Pull Request.

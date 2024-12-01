# Movie Search App

A simple React application that allows you to search for movies using The Movie Database (TMDB) API.

## Features

- List trending movies
- List popular movies
- Search movies by title
- Display movie details including poster, title, release date and overview

## Prerequisites

- Node.js installed on your machine
- TMDB API key (see instructions below)

## How to get a TMDB API key

1. Go to [The Movie Database website](https://www.themoviedb.org/)
2. Create an account or sign in if you already have one
3. Go to your profile settings
4. Click on "API" in the left sidebar
5. Click on "Create" or "Request an API key"
6. Fill out the form with your application details
   - Choose "Developer" as API type
   - Provide the required information about your application
7. Once approved, you will receive your API key
8. Copy your API key and paste it in the `.env` file

## Installation

1. Clone this repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add your TMDB API key:
```
VITE_API_URL=https://api.themoviedb.org/3
VITE_API_KEY=your_api_key_here
```

4. Start the development server

```bash
npm start
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Technologies Used

- React.js
- Vite
- Tanstack Router
- Tailwind
- TMDB API

## License

This project is licensed under the MIT License.

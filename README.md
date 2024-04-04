# Recipe Book App

This is a Recipe Book application built using React.js. It allows users to browse and view different recipes fetched from the Spoonacular Recipe API.

## Features

- Browse a list of recipes on the homepage.
- View detailed information about each recipe, including its name, ingredients, instructions, and an image.
- Error handling for invalid API responses or network errors.
- Responsive design for optimal viewing on various devices.

## Requirements

- Node.js installed on your machine
- Spoonacular API key (Sign up [here](https://spoonacular.com/food-api))

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/arshad286/recipe-book.git
   ```

2. Navigate to the project directory:

   ```bash
   cd recipe-book
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Spoonacular API key:

   ```plaintext
   REACT_APP_SPOONACULAR_API_KEY=your-api-key
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and go to `http://localhost:3000` to view the app.

## Technologies Used

- React.js
- React Router
- Axios
- CSS

## Credits

- [Spoonacular API](https://spoonacular.com/food-api) for providing recipe data.

## Deployment

The app is deployed to [Netlify](https://www.netlify.com/). You can view the deployed version [here](https://recipebook2.netlify.app/).


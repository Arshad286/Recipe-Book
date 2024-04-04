// RecipeList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/random', {
          params: {
            number: 10,
            apiKey: 'b8a2f5f045c845ba8f484074e10160ce',
          },
        });
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  if (recipes.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  // Custom component to render HTML content with applied styles
  const RenderHtmlWithStyles = ({ htmlContent }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-item">
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p><RenderHtmlWithStyles htmlContent={recipe.summary} /></p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;

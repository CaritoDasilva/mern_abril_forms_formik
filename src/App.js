import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Recipe from './components/Recipe';
import RecipeForm from './components/RecipeForm';

function App() {
  const [recipes, setRecipes] = useState([{
    title: 'Pan',
    ingredients: ['agua', 'harina', 'levadura', 'sal', 'aceite'],
    cookTime: '1hr',
    serves: '4',
    steps: 'Se deja reposar la levadura, se le agrega sal con agua tibia, la harina y mete al horno'

  },
  {
    title: 'Arepa',
    ingredients: ['Harina de maíz precocido', 'agua', 'sal'],
    cookTime: '30mins',
    serves: '4',
    steps: 'Se mezclan todos los ingredientes y se hornean por 45 minutos'
  },
  {
    title: 'Pasta con salsa pesto',
    ingredients: ['albahaca', 'pasta', 'tomate', 'ajo'],
    cookTime: '45mins',
    serves: '4',
    steps: 'Se cocinan los spaguettis. Se pone en la licuadora el ajo y la albahaca. Se sirve calentito <3'
  }
  ])

  return (
    <div className="App">
      <div className="recipes-list-container">
        {recipes.length > 0 ? recipes.map((recipe, index) => {
          return (<Recipe key={index} recipe={recipe} />)

        }) : 'No hay recetas creadas'}

      </div>
      <RecipeForm recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Recipe from './components/Recipe';
import RecipeForm from './components/RecipeForm';
import MyContext from './context/MyContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    <MyContext.Provider value={{ recipes: recipes, user: 'Carito Da Silva', setRecipes: setRecipes }}>

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/new-recipe">Agrega nueva receta</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/new-recipe">
              <RecipeForm />
            </Route>
            <Route path="/">
              <div className="recipes-list-container">
                {recipes.length > 0 ? recipes.map((recipe, index) => {
                  return (<Recipe key={index} recipe={recipe} />)

                }) : 'No hay recetas creadas'}

              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </MyContext.Provider>

  );
}

export default App;

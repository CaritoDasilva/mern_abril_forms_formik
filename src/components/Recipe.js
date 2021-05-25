import React from 'react';

const Recipe = (props) => {
    const { recipe } = props;
    const { title, ingredients, serves, cookTime, steps } = recipe;

    return (
        <div className="recipes-container">
            <h1>Título: {title}</h1>
            <h3>Ingredientes:</h3>
            <ul>
                {ingredients.length > 0 ? ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                )) : 'No hay ingredientes'}
            </ul>
            <h3>Porciones:</h3>
            <p>{serves}</p>
            <h3>Tiempo de cocción:</h3>
            <p>{cookTime}</p>
            <h3>Pasos:</h3>
            <p>{steps}</p>
        </div>
    )
}

export default Recipe;
import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const RecipeForm = (props) => {
    const { recipes, setRecipes } = props;
    useEffect(() => {
        console.log("🚀 ~ file: RecipeForm.js ~ line 6 ~ RecipeForm ~ props", props)

    }, [props])

    const recipeFormData = {
        title: '',
        ingredients: '',
        cookTime: '',
        serves: '',
        steps: ''
    }

    const SignupSchema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Título de receta debe tener mínimo 2 caracteres')
            .required('Este campo es obligatorio'),
        cookTime: Yup.string()
            .min(2, 'Tiempo de cocción no puede tener menos de un caracter')
            .required('Este campo es obligatorio'),
        serves: Yup.string()
            .min(1, 'Este campo no puede tener menos de un caracter')
            .required('Este campo es obligatorio'),
        steps: Yup.string()
            .min(5, 'Los pasos a seguir no pueden tener menos de 5 caracteres')
            .required('Este campo es obligatorio'),
        ingredients: Yup.string()
            .required('Este campo es obligatorio')

    })

    const onSubmitForm = (values) => {
        let arrIngredients = values.ingredients.split(',');
        let newRecipe = { ...values, ingredients: arrIngredients };
        let newRecipesList = [...recipes, newRecipe];
        setRecipes(newRecipesList);
    }

    return (
        <div className="recipes-form-container">
            <h1>Agregar nueva receta:</h1>
            <Formik initialValues={recipeFormData}
                validationSchema={SignupSchema}
                onSubmit={onSubmitForm}>
                {({ errors, values }) => (
                    (
                        <Form>
                            <label htmlFor="title">Título</label>
                            <Field name="title" values={values.title} />
                            {errors.title && (
                                <div className="error-msg">{errors.title}</div>
                            )}
                            <label htmlFor="cookTime">Tiempo de cocción:</label>
                            <Field name="cookTime" values={values.cookTime} />
                            {errors.cookTime && (
                                <div className="error-msg">{errors.cookTime}</div>
                            )}
                            <label htmlFor="serves">Porciones:</label>
                            <Field name="serves" values={values.serves} />
                            {errors.serves && (
                                <div className="error-msg">{errors.serves}</div>
                            )}
                            <label htmlFor="serves">Pasos a seguir:</label>
                            <Field as="textarea" name="steps" values={values.steps} />
                            {errors.steps && (
                                <div className="error-msg">{errors.steps}</div>
                            )}
                            <label htmlFor="ingredients">Ingredientes:</label>
                            <Field as="textarea" name="ingredients" values={values.ingredients} />
                            {errors.ingredients && (
                                <div className="error-msg">{errors.ingredients}</div>
                            )}
                            <button type="submit">Submit</button>
                        </Form>
                    )
                )}
            </Formik>
        </div>
    )
}

export default RecipeForm;
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import Form from './components/Form';
import Recipes from './components/Recipes'

function App({ favorites, setFavorites }) {
  const [recipes, setRecipes] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  console.log(favorites);
  // console.log(recipes)
  useEffect(() => {    
    if(localStorage.getItem('recipes')){
      setRecipes(JSON.parse(localStorage.getItem('recipes')));
    }else setRecipes([])
  }, [])

  useEffect(() => {
    const recipeStr = JSON.stringify(recipes)
    localStorage.setItem('recipes', recipeStr)
  }, [recipes])


  return (
    <AppWrapper>
      <Title>Recipe Search</Title>
      <Form 
        recipes={recipes}
        setRecipes={setRecipes}
        favorites={favorites}
        setFavorites={setFavorites}
        />
      <Recipes recipes={recipes}/>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: sans-serif;
  height: 60px;
  background: darkblue;
  color: white;
`;

// const FormWrapper = styled.form`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 50px;

//   input {
//     padding: 3px;
//     font-size: 16px;
//   }
// `;

export default App;

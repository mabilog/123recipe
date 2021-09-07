import { useState, useEffect } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Favorites from './components/Favorites';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';
import Sidebar from './components/Sidebar'

function App() {
  const [favorites, setFavorites] = useState([]);
  const [recipeId, setRecipeId] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {    
    if(localStorage.getItem('recipes'))
      setRecipes(JSON.parse(localStorage.getItem('recipes')));
    else setRecipes([])

    if(localStorage.getItem('favorites')) 
      setFavorites(JSON.parse(localStorage.getItem('favorites')))
    else setFavorites([])
    
    setRecipeId([])
  }, [])

  useEffect(() => {
    const recipeStr = JSON.stringify(recipes)
    localStorage.setItem('recipes', recipeStr)
  }, [recipes])
   
  const addFavorite = (recipe) => {
    const newFavorites = (favorites.includes(recipe)) ? [...favorites] : [...favorites, recipe]
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  const removeFavorite = (recipe) => {
    const newFavorites = favorites.filter(favorite => favorite !== recipe)
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }
  
  return (
    <AppWrapper>
      <Router>
        <Sidebar 
          recipes={recipes}
          setRecipes={setRecipes}
          query={query}
          setQuery={setQuery}
          />
        <MainComponent>

          <Switch>
            <Route path={`/recipes/`} exact render={() =>  
              <Recipes 
                recipes={recipes}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                setRecipeId={setRecipeId}
                />}/>
            <Route path={'/recipe/:id'} component={() => 
              <Recipe 
                addFavorite={addFavorite}
                recipeId={recipeId}
                />
              }/> 
            <Route path={'/saved/'} component={() => 
              <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
                removeFavorite={removeFavorite}
                setRecipeId={setRecipeId}
                />
            }/>
          </Switch>
          
        </MainComponent>
      </Router>
        
        
       
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  font-family: sans-serif;
`;

const MainComponent = styled.div`
  position: relative;
  top: 0;
  width: calc(100vw - 260px);
  left: 240px;
  z-index: 99;
`
export default App;

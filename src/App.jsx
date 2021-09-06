import { useState, useEffect } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Favorites from './components/Favorites';
// import Navbar from './components/Navbar';
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
  
  useEffect(() => console.log(recipeId), [recipeId])
  
  // const toggleFavorite = (recipe) => {
  //   console.log(recipe)
  //   const newFavorites = (favorites.includes(recipe)) 
  //     ? favorites.filter(favorite => favorite !== recipe) 
  //     :  [...favorites, recipe]

  //     setFavorites(newFavorites)
  //     localStorage.setItem('favorites', JSON.stringify(newFavorites))
    
  //   // favorites.filter(favorite => favorite.id !== recipe.id)
  // }

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
  
  console.log(recipeId)
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
          {/* <Home/> */}
          {/* <Navbar 
            favorites={favorites} 
            // setFavorites={setFavorites}
            recipes={recipes}
            setRecipes={setRecipes}
            query={query}
            setQuery={setQuery}
            /> */}

          <Switch>
            <Route path={`/recipes/${query}`} exact render={() =>  
              <Recipes 
                recipes={recipes}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                setRecipeId={setRecipeId}
                // toggleFavorite={toggleFavorite}
                />}/>
            <Route path={'/recipe/:id'} component={() => 
              <Recipe 
                // favorites={favorites}
                // setFavorites={setFavorites}
                addFavorite={addFavorite}
                recipeId={recipeId}
                // removeFavorite={removeFavorite}
                // toggleFavorite={toggleFavorite}
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
          
          {/* <Favorites 
            favorites={favorites}
            setFavorites={setFavorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            setRecipeId={setRecipeId}
            /> */}
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
  /* min-height: 100vh; */
  height: auto;
  top: 0;
  width: calc(100vw - 240px);
  left: 240px;
  overflow: auto;
`
export default App;

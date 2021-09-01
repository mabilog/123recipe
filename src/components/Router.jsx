import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import App from '../App';
import Recipe from './Recipe';
import Recipes from './Recipes';
import Navbar from './Navbar'
import Favorites from './Favorites'

const Router = () => {
  const [favorites, setFavorites] = useState('this is a test');
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
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
    <BRouter>
      <Navbar 
        favorites={favorites} 
        setFavorites={setFavorites}
        recipes={recipes}
        setRecipes={setRecipes}
        query={query}
        setQuery={setQuery}
        />
      <Favorites favorites={favorites} setFavorites={setFavorites} />
      <Switch>
        <Route path="/" exact 
          render={() => 
            <App 
              favorites={favorites} 
              setFavorites={setFavorites} 
              />}/>
        <Route path={`/recipes/${query}`} render={() => 
         <Recipes 
          recipes={recipes}
          />}/>
        <Route path="/recipe/:id" component={Recipe}/>
      </Switch>
    </BRouter>
  )
}

const BRouter = styled(BrowserRouter)`
  display: flex;
  flex-wrap: row;
`;

export default Router

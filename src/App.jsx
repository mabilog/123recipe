import { useState, useEffect } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Favorites from './components/Favorites';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';

function App() {
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
    <AppWrapper>
      <Router>
        <Navbar 
          favorites={favorites} 
          setFavorites={setFavorites}
          recipes={recipes}
          setRecipes={setRecipes}
          query={query}
          setQuery={setQuery}
          />

        <Switch>
          <Route path={`/recipes/${query}`} exact render={() =>  <Recipes recipes={recipes}/>}/>
          <Route path='/recipe/:id' component={Recipe}/>
        </Switch>
      </Router>
      
       <Favorites 
          favorites={favorites}
          setFavorites={setFavorites}
          />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
`;

export default App;

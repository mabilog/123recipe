import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from '../App';
import Recipe from './Recipe';
const Router = () => {
  const [favorites, setFavorites] = useState('this is a test');

  return (
    <BrowserRouter>
      <Switch>
        {/* 
        <Route path="/" exact component={App}/> 
        <Route path="/recipe/:id" component={Recipe}/>
        */}
        <Route path="/" exact 
          render={() => 
            <App 
              favorites={favorites} 
              setFavorites={setFavorites} 
              />}/>
        <Route path="/recipe/:id" component={Recipe}/>

        {/* <Route path="/recipe/:id" 
          render={() => 
          <Recipe 
            favorites={favorites} 
            setFavorites={setFavorites} 
            />}/> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Router

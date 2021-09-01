import { useState, useEffect } from 'react';

import styled from 'styled-components';
import Recipes from './components/Recipes'

function App({ favorites, setFavorites, recipes }) {

  return (
    <AppWrapper>
      <Recipes recipes={recipes}/>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  position: relative;
`;

export default App;

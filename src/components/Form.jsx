import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

import SearchIcon from '@material-ui/icons/Search';

const Form = ({ setRecipes, recipes, query, setQuery }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const history = useHistory();

  // console.log(useHistory())
  const getRecipe = (e) => {
      e.preventDefault();
      fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${query}`)
      .then(res => res.json())
      .then(data => {
        setRecipes(data)
        // console.log(recipes)
        // console.log(data)
      })
      .then(() => history.push(`/recipes/${query}`))
      .catch(err => console.log('Something went wrong ' + err))

      // history.push(`/recipes/${query}`)
    }

  const setSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value)
  }
  return (
     <FormWrapper onSubmit={getRecipe}>
       <input type="text" name="recipeName" onChange={setSearch}/>
       <SearchIcon className="searchIcon"/>
     </FormWrapper>

  )
}

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 50px;

  input {
    /* padding: 3px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid black;
    width: 100%; */

    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
    outline: none;
    border: none;
    padding-left: 50px;
    font-size: 18px;
    color: white;
    background: #1d1b31;
  }
  
  .searchIcon{
    position: absolute;
    left: 15px;
    z-index: 99;
    color: white;
  }
`;

// const SearchBtn = styled.button`
//   position: relative;
//   background: none;
//   border: none;
//   /* right: 30px; */
//   cursor: pointer;
// `


export default Form

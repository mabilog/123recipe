import React from 'react'
import styled from 'styled-components'

const Form = () => {
  return (
     <FormWrapper>
       <input type="text" />
       {/* <button>Search</button> */}
     </FormWrapper>
  )
}

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;

  input {
    padding: 3px;
    font-size: 16px;
  }
`;
export default Form

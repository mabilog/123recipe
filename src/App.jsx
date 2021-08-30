import styled from 'styled-components';
import Form from './components/Form';

function App() {
  return (
    <AppWrapper>
      <Title>Recipe Search</Title>
      <Form/>
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


export default App;

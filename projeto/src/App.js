import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
`
class App extends React.Component {

  state = {
    name: '',
    email: ''
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <FormContainer>
        <h2>Inscreva-se no nosso curso</h2>
        <input 
        type='text'
        name='name'
        placeholder='Nome completo'
        onChange={this.handleInputChange}
      />
        <input 
          type='email'
          name='email'
          placeholder='Email'
          onChange={this.handleInputChange}
        />
        <button>Enviar</button>
      </FormContainer>
    );
  }
}

export default App;

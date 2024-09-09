import React from 'react';
import CustomInput from './customInput';

function App() {
  // Function to handle button click
  const Submit = () => {
    console.log('Submit button clicked');
  };

  return (
    <div style={
      {
        width: '300px',
        margin: '50px auto',
        marginTop: '100px',
        borderRadius: '10px',
        textAlign: 'center',
        backgroundColor: 'blue',
        height:'250px' }}>
      <h1>Login</h1>
      <CustomInput type="text" placeholder="Username" />
      <CustomInput type="password" placeholder="Password" />
      <CustomInput type="button" onClick={Submit} />
    </div>
  );
}

export default App;

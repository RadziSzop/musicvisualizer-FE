import { useState } from 'react';
import reactLogo from './assets/react.svg';

import { Route, Routes } from 'react-router-dom';
import { Start } from './pages/Start';
import { StyledAppContainer } from './components/StyledAppContainer';

function App() {
  return (
    <StyledAppContainer>
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </StyledAppContainer>
  );
}

export default App;

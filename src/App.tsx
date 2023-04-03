import { Link, Route, Routes } from 'react-router-dom';
import { Start } from './pages/Start';
import { StyledAppContainer } from './components/StyledAppContainer';
import { Settings } from './pages/Settings';
import { useState } from 'react';
import { visualizationOptions, visualizationType } from './types/settings';
export interface waveOptions {
  type: visualizationType;
  options: visualizationOptions;
}
function App() {
  const [settings, setSettings] = useState<waveOptions[]>([]);

  return (
    <StyledAppContainer>
      <div style={{ position: 'fixed', top: '0px' }}>
        <Link to="/">Home</Link>

        <Link to="/settings">Settings</Link>
      </div>
      <Routes>
        <Route path="/" element={<Start setSettings={setSettings} settings={settings} />} />
        <Route path="/settings" element={<Settings setSettings={setSettings} settings={settings} />} />
      </Routes>
    </StyledAppContainer>
  );
}

export default App;

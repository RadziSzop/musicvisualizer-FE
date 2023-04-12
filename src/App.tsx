import { Route, Routes } from 'react-router-dom';
import { Start } from './pages/Start';
import { StyledAppContainer } from './components/StyledAppContainer';
import { Settings } from './pages/Settings';
import { createContext, useEffect, useState } from 'react';
import { visualizationOptions, visualizationType } from './types/settings';
import { NavMenu } from './components/NavMenu/NavMenu';
import { VisualizationContextValue } from './types/context';
import { Toaster } from 'react-hot-toast';
import { configureAxios } from './utils/utils';
export interface waveOptions {
  type: visualizationType;
  options: visualizationOptions;
}
export const VisualizationContext = createContext<VisualizationContextValue | null>(null);
function App() {
  const [settings, setSettings] = useState<waveOptions[]>([]);
  const [submitedFile, setSubmitedFile] = useState<File | undefined>();
  const [visualizationSettings, setVisualizationSettings] = useState({
    width: 1920,
    height: 1080,
    background: '#242424',
  });
  useEffect(() => {
    configureAxios();
  }, []);
  return (
    <StyledAppContainer>
      <VisualizationContext.Provider value={{ visualizationSettings, setVisualizationSettings }}>
        <Toaster position="top-center" />
        <NavMenu setSubmitedFile={setSubmitedFile} submitedFile={submitedFile} />
        <Routes>
          <Route
            path="/"
            element={<Start setSubmitedFile={setSubmitedFile} submitedFile={submitedFile} settings={settings} />}
          />
          <Route path="/settings" element={<Settings setSettings={setSettings} settings={settings} />} />
        </Routes>
      </VisualizationContext.Provider>
    </StyledAppContainer>
  );
}

export default App;

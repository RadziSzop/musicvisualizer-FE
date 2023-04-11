import { AnimatePresence } from 'framer-motion';
import { waveOptions } from '../../App';
import { visualizationOptions, visualizationType } from '../../types/settings';
import { ArcsSettings } from '../settings/ArcsSettings';
import { CirclesSettings } from '../settings/CirclesSettings';
import { CubesSettings } from '../settings/CubesSettings';
import { FlowerSettings } from '../settings/FlowerSettings';
import { GlobSettings } from '../settings/GlobSettings';
import { LinesSettings } from '../settings/LinesSettings';
import { ShineSettings } from '../settings/ShineSettings';
import { SquareSettings } from '../settings/SquareSettings';
import { TurntableSettings } from '../settings/TurntableSettings';
import { WaveSettings } from '../settings/WaveSettings';

import { StyledVisualizationSettingsContainer } from './StyledVisualizationSettings';

interface Props {
  selectedType: visualizationType | undefined;
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
  currentSettings: visualizationOptions;
  setCurrentSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}

export const VisualizationSettings = ({ selectedType, setSettings, currentSettings, setCurrentSettings }: Props) => {
  return (
    <StyledVisualizationSettingsContainer>
      <AnimatePresence>
        {selectedType === 'Arcs' && (
          <ArcsSettings
            currentSettings={currentSettings}
            setCurrentSettings={setCurrentSettings}
            setSettings={setSettings}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedType === 'Circles' && (
          <CirclesSettings
            currentSettings={currentSettings}
            setCurrentSettings={setCurrentSettings}
            setSettings={setSettings}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedType === 'Cubes' && (
          <CubesSettings
            currentSettings={currentSettings}
            setCurrentSettings={setCurrentSettings}
            setSettings={setSettings}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedType === 'Flower' && (
          <FlowerSettings
            currentSettings={currentSettings}
            setCurrentSettings={setCurrentSettings}
            setSettings={setSettings}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedType === 'Glob' && (
          <GlobSettings
            currentSettings={currentSettings}
            setCurrentSettings={setCurrentSettings}
            setSettings={setSettings}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedType === 'Lines' && (
          <LinesSettings
            currentSettings={currentSettings}
            setCurrentSettings={setCurrentSettings}
            setSettings={setSettings}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedType === 'Shine' && (
          <ShineSettings
            currentSettings={currentSettings}
            setCurrentSettings={setCurrentSettings}
            setSettings={setSettings}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedType === 'Square' && (
          <SquareSettings
            currentSettings={currentSettings}
            setCurrentSettings={setCurrentSettings}
            setSettings={setSettings}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedType === 'Turntable' && (
          <TurntableSettings
            currentSettings={currentSettings}
            setCurrentSettings={setCurrentSettings}
            setSettings={setSettings}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedType === 'Wave' && (
          <WaveSettings
            currentSettings={currentSettings}
            setCurrentSettings={setCurrentSettings}
            setSettings={setSettings}
          />
        )}
      </AnimatePresence>
    </StyledVisualizationSettingsContainer>
  );
  // if (selectedType === 'Arcs') {
  // }
  // if (selectedType === 'Circles') {
  //   return <CirclesSettings settings={settings} setSettings={setSettings} />;
  // }
  // if (selectedType === 'Cubes') {
  //   return <CubesSettings settings={settings} setSettings={setSettings} />;
  // }
};

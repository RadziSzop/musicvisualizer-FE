import { useState } from 'react';
import { VisualizationSelect } from '../components/VisualizationSelect/VisualizationSelect';
import { VisualizationSettings } from '../components/VisualizationSettings/VisualizationSettings';
import { visualizationType, visualizationOptions } from '../types/settings';
import { waveOptions } from '../App';
import { LayoutGroup } from 'framer-motion';
import { VisualizationSavedSettings } from '../components/VisualizationSavedSettings/VisualizationSavedSettings';
interface Props {
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
}
export const Settings = ({ setSettings, settings }: Props) => {
  const [selectedType, setSelectedType] = useState<visualizationType | 'general'>('Arcs');
  const [currentSettings, setCurrentSettings] = useState<visualizationOptions>({});

  return (
    <>
      <LayoutGroup>
        <VisualizationSavedSettings
          setSelectedType={setSelectedType}
          settings={settings}
          setSettings={setSettings}
          setCurrentSettings={setCurrentSettings}
        />
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <VisualizationSelect setSelectedType={setSelectedType} selectedType={selectedType} />
          <VisualizationSettings
            selectedType={selectedType}
            setSettings={setSettings}
            currentSettings={currentSettings}
            setCurrentSettings={setCurrentSettings}
          />
        </div>
      </LayoutGroup>
    </>
  );
};

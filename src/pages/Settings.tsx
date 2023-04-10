import { Wave } from '@foobar404/wave';
import { useState } from 'react';
import { VisualizationSelect } from '../components/VisualizationSelect/VisualizationSelect';
import { VisualizationSettings } from '../components/VisualizationSettings/VisualizationSettings';
import { visualizationType, visualizationOptions } from '../types/settings';
import { waveOptions } from '../App';
import { LayoutGroup, motion } from 'framer-motion';
interface Props {
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
}
export const Settings = ({ setSettings, settings }: Props) => {
  const [selectedType, setSelectedType] = useState<visualizationType>('Arcs');
  return (
    <motion.div style={{ display: 'flex', flexDirection: 'column' }}>
      <LayoutGroup>
        <VisualizationSelect type="Arcs" setSelectedType={setSelectedType} selectedType={selectedType} />

        <VisualizationSettings selectedType={selectedType} settings={settings} setSettings={setSettings} />
      </LayoutGroup>
    </motion.div>
  );
};

import { Wave } from '@foobar404/wave';
import { useState } from 'react';
import { VisualizationSelect } from '../components/VisualizationSelect/VisualizationSelect';
import { VisualizationSettings } from '../components/VisualizationSettings/VisualizationSettings';
import { visualizationType, visualizationOptions } from '../types/settings';
import { waveOptions } from '../App';
interface Props {
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
}
export const Settings = ({ setSettings, settings }: Props) => {
  const [selectedType, setSelectedType] = useState<visualizationType>();
  console.log(selectedType);
  return (
    <div>
      <VisualizationSelect type="Arcs" setSelectedType={setSelectedType} selectedType={selectedType} />
      <VisualizationSelect type="Circles" setSelectedType={setSelectedType} selectedType={selectedType} />
      <VisualizationSettings selectedType={selectedType} settings={settings} setSettings={setSettings} />
    </div>
  );
};

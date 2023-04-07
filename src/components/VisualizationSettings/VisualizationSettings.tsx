import { waveOptions } from '../../App';
import { visualizationOptions, visualizationType } from '../../types/settings';
import { ArcsSettings } from '../settings/ArcsSettings';
import { CirclesSettings } from '../settings/CirclesSettings';
import { CubesSettings } from '../settings/CubesSettings';

interface Props {
  selectedType: visualizationType | undefined;
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
}
export const VisualizationSettings = ({ selectedType, setSettings, settings }: Props) => {
  if (selectedType === 'Arcs') {
    return <ArcsSettings settings={settings} setSettings={setSettings} />;
  }
  if (selectedType === 'Circles') {
    return <CirclesSettings settings={settings} setSettings={setSettings} />;
  }
  if (selectedType === 'Cubes') {
    return <CubesSettings settings={settings} setSettings={setSettings} />;
  }

  return <div>test</div>;
};

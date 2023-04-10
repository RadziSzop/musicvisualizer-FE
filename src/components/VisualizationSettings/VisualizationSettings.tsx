import { waveOptions } from '../../App';
import { visualizationOptions, visualizationType } from '../../types/settings';
import { ArcsSettings } from '../settings/ArcsSettings';
import { CirclesSettings } from '../settings/CirclesSettings';
import { CubesSettings } from '../settings/CubesSettings';
import { StyledVisualizationSettingsContainer } from './StyledVisualizationSettings';

interface Props {
  selectedType: visualizationType | undefined;
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
}
export const VisualizationSettings = ({ selectedType, setSettings, settings }: Props) => {
  return (
    <StyledVisualizationSettingsContainer>
      <ArcsSettings settings={settings} setSettings={setSettings} />
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

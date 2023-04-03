import { waveOptions } from '../../App';
import { visualizationOptions, visualizationType } from '../../types/settings';
import { ArcsSettings } from '../settings/ArcsSettings';

interface Props {
  selectedType: visualizationType | undefined;
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
}
export const VisualizationSettings = ({ selectedType, setSettings, settings }: Props) => {
  if (selectedType === 'Arcs') {
    // const settings: IArcsOptions = {};
    return (
      <>
        <ArcsSettings settings={settings} setSettings={setSettings} />
      </>
    );
  }
  return <div>test</div>;
};

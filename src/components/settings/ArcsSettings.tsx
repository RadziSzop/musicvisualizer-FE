import { IArcsOptions } from '@foobar404/wave';
import { useState } from 'react';
import { visualizationOptions } from '../../types/settings';
import { CountInput } from '../inputs/CountInput/CountInput';
import { DiameterInput } from '../inputs/DiameterInput/DiameterInput';
import { FrequencyBandInput } from '../inputs/FrequencyBandInput';
import { GlowInput } from '../inputs/GlowInput';
import { LineWidthInput } from '../inputs/LineWidthInput';
import { RoundedInput } from '../inputs/RoundedInput';
import { LineColorInput } from '../inputs/LineColorInput';
import { waveOptions } from '../../App';

interface Props {
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
}
export const ArcsSettings = ({ setSettings, settings }: Props) => {
  const [arcsSettings, setArcsSettings] = useState<IArcsOptions>({});
  console.log(arcsSettings);

  return (
    <div>
      <hr />
      <CountInput settings={arcsSettings} setSettings={setArcsSettings} />
      <hr />
      <DiameterInput settings={arcsSettings} setSettings={setArcsSettings} />
      <hr />
      <FrequencyBandInput settings={arcsSettings} setSettings={setArcsSettings} />
      <hr />
      <LineWidthInput settings={arcsSettings} setSettings={setArcsSettings} />
      <hr />
      <LineColorInput settings={arcsSettings} setSettings={setArcsSettings} />
      <hr />
      <GlowInput settings={arcsSettings} setSettings={setArcsSettings} />
      <hr />
      <RoundedInput settings={arcsSettings} setSettings={setArcsSettings} />
      <input
        type="button"
        value="Save"
        onClick={() => {
          setSettings((prevState) => {
            return [...prevState, { type: 'Arcs', options: arcsSettings }];
          });
          setArcsSettings({});
        }}
      />
    </div>
  );
};

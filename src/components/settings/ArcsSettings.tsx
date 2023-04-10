import { useState } from 'react';
import { FrequencyBandInput } from '../inputs/FrequencyBandInput';
import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { PositionInput } from '../inputs/PositionInput/PositionInput';
import { IArcsOptions } from '@foobar404/wave';
import { NumberInput } from '../inputs/NumberInput/NumberInput';
import { BooleanInput } from '../inputs/BooleanInput/BooleanInput';
import { ColorInput } from '../inputs/ColorInput/ColorInput';
import { motion } from 'framer-motion';
interface Props {
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
}

export const ArcsSettings = ({ setSettings, settings }: Props) => {
  const [arcsSettings, setArcsSettings] = useState<IArcsOptions>({});
  console.log(arcsSettings);

  return (
    <>
      <ColorInput field="count" setWaveOption={setArcsSettings} waveOption={arcsSettings} header="Color Test" />
      <NumberInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="diameter" header="Diameter" />
      {/* <NumberInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="count" header="Count" />
      <hr />
      <NumberInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="diameter" header="Diameter" />
      <hr />
      <FrequencyBandInput waveOption={arcsSettings} setWaveOption={setArcsSettings} />
      <hr />
      <NumberInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="lineWidth" header="Line Width" />
      <hr />
      <LineColorInput waveOption={arcsSettings} setWaveOption={setArcsSettings} />
      <hr />
      <GlowInput waveOption={arcsSettings} setWaveOption={setArcsSettings} />
      <hr />
      <BooleanInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="rounded" header="Rounded" />
      <hr />
      <PositionInput waveOption={arcsSettings} setWaveOption={setArcsSettings} />
      <input
        type="button"
        value="Save"
        onClick={() => {
          setSettings((prevState) => {
            return [...prevState, { type: 'Arcs', options: arcsSettings }];
          });
          setArcsSettings({});
        }}
      /> */}
    </>
  );
};

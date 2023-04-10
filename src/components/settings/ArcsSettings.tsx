import { useState } from 'react';
import { FrequencyBandInput } from '../inputs/FrequencyBandInput/FrequencyBandInput';
import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { PositionInput } from '../inputs/PositionInput/PositionInput';
import { IArcsOptions } from '@foobar404/wave';
import { NumberInput } from '../inputs/NumberInput/NumberInput';
import { BooleanInput } from '../inputs/BooleanInput/BooleanInput';
import { ColorInput } from '../inputs/ColorInput/ColorInput';
import { LayoutGroup, motion } from 'framer-motion';
interface Props {
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
}

export const ArcsSettings = ({ setSettings, settings }: Props) => {
  const [arcsSettings, setArcsSettings] = useState<IArcsOptions>({});
  console.log(arcsSettings);

  return (
    <>
      {/* {/* <NumberInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="count" header="Count" /> */}

      <NumberInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="diameter" header="Diameter" />

      <FrequencyBandInput waveOption={arcsSettings} setWaveOption={setArcsSettings} />

      <ColorInput field="count" setWaveOption={setArcsSettings} waveOption={arcsSettings} header="Color Test" />
      <NumberInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="lineWidth" header="Line Width" />

      {/* <LineColorInput waveOption={arcsSettings} setWaveOption={setArcsSettings} /> */}

      {/* <GlowInput waveOption={arcsSettings} setWaveOption={setArcsSettings} /> */}

      <BooleanInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="rounded" header="Rounded" />

      <PositionInput waveOption={arcsSettings} setWaveOption={setArcsSettings} />
    </>
  );
};

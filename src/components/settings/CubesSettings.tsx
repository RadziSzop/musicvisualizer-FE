import { useState } from 'react';

import { FrequencyBandInput } from '../inputs/FrequencyBandInput';
import { GlowInput } from '../inputs/GlowInput';
import { LineColorInput } from '../inputs/LineColorInput';
import { waveOptions } from '../../App';
import { ICubesOptions } from '@foobar404/wave';
import { FillColorInput } from '../inputs/FillColorInput';
import { PositionInput } from '../inputs/PositionInput/PositionInput';
import { NumberInput } from '../inputs/NumberInput/NumberInput';
interface Props {
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
}

export const CubesSettings = ({ setSettings, settings }: Props) => {
  const [cubesOptions, setCubesOptions] = useState<ICubesOptions>({});
  console.log(cubesOptions);

  return (
    <>
      <hr />
      <NumberInput waveOption={cubesOptions} setWaveOption={setCubesOptions} field="count" header="Count" />
      <hr />
      <FrequencyBandInput waveOption={cubesOptions} setWaveOption={setCubesOptions} />
      <hr />
      <NumberInput
        waveOption={cubesOptions}
        setWaveOption={setCubesOptions}
        field="lineWidth"
        header="Line Width"
      />{' '}
      <hr />
      <LineColorInput waveOption={cubesOptions} setWaveOption={setCubesOptions} />
      <hr />
      <GlowInput waveOption={cubesOptions} setWaveOption={setCubesOptions} />
      <hr />
      <FillColorInput waveOption={cubesOptions} setWaveOption={setCubesOptions} />
      <hr />
      <PositionInput waveOption={cubesOptions} setWaveOption={setCubesOptions} />
      <NumberInput waveOption={cubesOptions} setWaveOption={setCubesOptions} field={'cubeHeight'} />
      <input
        type="button"
        value="Save"
        onClick={() => {
          setSettings((prevState) => {
            return [...prevState, { type: 'Circles', options: cubesOptions }];
          });
          setCubesOptions({});
        }}
      />
    </>
  );
};

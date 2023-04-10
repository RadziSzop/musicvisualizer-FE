import { useState } from 'react';
import { FrequencyBandInput } from '../inputs/FrequencyBandInput/FrequencyBandInput';
import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { ICirclesOptions } from '@foobar404/wave';
import { NumberInput } from '../inputs/NumberInput/NumberInput';
interface Props {
  settings: waveOptions[];
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
}

export const CirclesSettings = ({ setSettings, settings }: Props) => {
  const [circlesSettings, setCirclesSettings] = useState<ICirclesOptions>({});

  return (
    <>
      <hr />
      <NumberInput waveOption={circlesSettings} setWaveOption={setCirclesSettings} field="count" header="Count" />
      <hr />
      <NumberInput waveOption={circlesSettings} setWaveOption={setCirclesSettings} field="diameter" header="Diameter" />
      <hr />
      <FrequencyBandInput waveOption={circlesSettings} setWaveOption={setCirclesSettings} />
      <hr />
      <NumberInput
        waveOption={circlesSettings}
        setWaveOption={setCirclesSettings}
        field="lineWidth"
        header="Line Width"
      />
      <hr />
      {/* <LineColorInput waveOption={circlesSettings} setWaveOption={setCirclesSettings} /> */}
      <hr />
      <GlowInput waveOption={circlesSettings} setWaveOption={setCirclesSettings} />
      <hr />
      {/* <FillColorInput waveOption={circlesSettings} setWaveOption={setCirclesSettings} /> */}
      <input
        type="button"
        value="Save"
        onClick={() => {
          setSettings((prevState) => {
            return [...prevState, { type: 'Circles', options: circlesSettings }];
          });
          setCirclesSettings({});
        }}
      />
    </>
  );
};

import { FrequencyBandInput } from '../inputs/FrequencyBandInput/FrequencyBandInput';
import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { ICubesOptions } from '@foobar404/wave';
import { NumberInput } from '../inputs/NumberInput/NumberInput';
import { ColorInput } from '../inputs/ColorInput/ColorInput';
import { SaveButton } from '../inputs/SaveButton/SaveButton';
import { visualizationOptions } from '../../types/settings';
import { BooleanInput } from '../inputs/BooleanInput/BooleanInput';
import { PositionInput } from '../inputs/PositionInput/PositionInput';
import { motion } from 'framer-motion';
interface Props {
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
  currentSettings: visualizationOptions;
  setCurrentSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}

export const CubesSettings = ({ setSettings, currentSettings, setCurrentSettings }: Props) => {
  const cubesOptions = currentSettings as ICubesOptions;
  const setCubesOptions = setCurrentSettings as React.Dispatch<React.SetStateAction<ICubesOptions>>;
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.5 },
      }}
    >
      <FrequencyBandInput waveOption={cubesOptions} setWaveOption={setCubesOptions} />
      <NumberInput waveOption={cubesOptions} setWaveOption={setCubesOptions} field="count" header="Count" />
      <NumberInput waveOption={cubesOptions} setWaveOption={setCubesOptions} field="cubeHeight" header="Cube Height" />
      <ColorInput field="fillColor" setWaveOption={setCubesOptions} waveOption={cubesOptions} header="Fill Color" />
      {/* GLOW */}
      <ColorInput field="lineColor" setWaveOption={setCubesOptions} waveOption={cubesOptions} header="Line Color" />
      <NumberInput waveOption={cubesOptions} setWaveOption={setCubesOptions} field="gap" header="Gap" />
      <NumberInput waveOption={cubesOptions} setWaveOption={setCubesOptions} field="lineWidth" header="Line Width" />
      <BooleanInput waveOption={cubesOptions} setWaveOption={setCubesOptions} field="mirroredX" header="Mirrored X" />
      <BooleanInput waveOption={cubesOptions} setWaveOption={setCubesOptions} field="mirroredY" header="Mirrored Y" />
      <NumberInput waveOption={cubesOptions} setWaveOption={setCubesOptions} field="radius" header="Radius" />
      <PositionInput waveOption={cubesOptions} setWaveOption={setCubesOptions} />
      <SaveButton clearSettings={setCubesOptions} setSettings={setSettings} type="Cubes" waveSettings={cubesOptions} />
    </motion.div>
  );
};

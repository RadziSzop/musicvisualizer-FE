import { FrequencyBandInput } from '../inputs/FrequencyBandInput/FrequencyBandInput';
// import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { IWaveOptions } from '@foobar404/wave';
import { NumberInput } from '../inputs/NumberInput/NumberInput';
import { BooleanInput } from '../inputs/BooleanInput/BooleanInput';
import { ColorInput } from '../inputs/ColorInput/ColorInput';
import { SaveButton } from '../inputs/SaveButton/SaveButton';
import { visualizationOptions } from '../../types/settings';
import { PositionInput } from '../inputs/PositionInput/PositionInput';
import { motion } from 'framer-motion';
interface Props {
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
  currentSettings: visualizationOptions;
  setCurrentSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}

export const WaveSettings = ({ setSettings, currentSettings, setCurrentSettings }: Props) => {
  const waveSettings = currentSettings as IWaveOptions;
  const setWaveSettings = setCurrentSettings as React.Dispatch<React.SetStateAction<IWaveOptions>>;
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.5 },
      }}
    >
      <FrequencyBandInput waveOption={waveSettings} setWaveOption={setWaveSettings} />
      <NumberInput waveOption={waveSettings} setWaveOption={setWaveSettings} field="count" header="Count" />
      <ColorInput field="fillColor" setWaveOption={setWaveSettings} waveOption={waveSettings} header="Fill Color" />
      <ColorInput field="lineColor" setWaveOption={setWaveSettings} waveOption={waveSettings} header="Line Color" />
      {/* GLOW */}
      <NumberInput waveOption={waveSettings} setWaveOption={setWaveSettings} field="lineWidth" header="Line Width" />
      <BooleanInput waveOption={waveSettings} setWaveOption={setWaveSettings} field="rounded" header="Rounded" />
      <BooleanInput waveOption={waveSettings} setWaveOption={setWaveSettings} field="mirroredX" header="Mirrored X" />
      <BooleanInput waveOption={waveSettings} setWaveOption={setWaveSettings} field="mirroredY" header="Mirrored Y" />
      <PositionInput waveOption={waveSettings} setWaveOption={setWaveSettings} />
      <SaveButton clearSettings={setWaveSettings} setSettings={setSettings} type="Wave" waveSettings={waveSettings} />
    </motion.div>
  );
};

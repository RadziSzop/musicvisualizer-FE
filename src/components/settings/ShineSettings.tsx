import { FrequencyBandInput } from '../inputs/FrequencyBandInput/FrequencyBandInput';
import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { IShineOptions } from '@foobar404/wave';
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

export const ShineSettings = ({ setSettings, currentSettings, setCurrentSettings }: Props) => {
  const shineSettings = currentSettings as IShineOptions;
  const setShineSettings = setCurrentSettings as React.Dispatch<React.SetStateAction<IShineOptions>>;
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.5 },
      }}
    >
      <FrequencyBandInput waveOption={shineSettings} setWaveOption={setShineSettings} />
      <NumberInput waveOption={shineSettings} setWaveOption={setShineSettings} field="count" header="Count" />
      <ColorInput field="lineColor" setWaveOption={setShineSettings} waveOption={shineSettings} header="Line Color" />
      {/* GLOW */}
      <NumberInput waveOption={shineSettings} setWaveOption={setShineSettings} field="lineWidth" header="Line Width" />
      <BooleanInput waveOption={shineSettings} setWaveOption={setShineSettings} field="rounded" header="Rounded" />
      <BooleanInput waveOption={shineSettings} setWaveOption={setShineSettings} field="offset" header="Offset" />
      <NumberInput waveOption={shineSettings} setWaveOption={setShineSettings} field="rotate" header="Rotate" />
      <PositionInput waveOption={shineSettings} setWaveOption={setShineSettings} />
      <SaveButton
        clearSettings={setShineSettings}
        setSettings={setSettings}
        type="Shine"
        waveSettings={shineSettings}
      />
    </motion.div>
  );
};

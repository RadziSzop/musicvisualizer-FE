import { FrequencyBandInput } from '../inputs/FrequencyBandInput/FrequencyBandInput';
import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { IArcsOptions } from '@foobar404/wave';
import { NumberInput } from '../inputs/NumberInput/NumberInput';
import { BooleanInput } from '../inputs/BooleanInput/BooleanInput';
import { ColorInput } from '../inputs/ColorInput/ColorInput';
import { SaveButton } from '../inputs/SaveButton/SaveButton';
import { visualizationOptions } from '../../types/settings';
import { motion } from 'framer-motion';
interface Props {
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
  currentSettings: visualizationOptions;
  setCurrentSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}

export const ArcsSettings = ({ setSettings, currentSettings, setCurrentSettings }: Props) => {
  const arcsSettings = currentSettings as IArcsOptions;
  const setArcsSettings = setCurrentSettings as React.Dispatch<React.SetStateAction<IArcsOptions>>;
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.5 },
      }}
    >
      <FrequencyBandInput waveOption={arcsSettings} setWaveOption={setArcsSettings} />
      <NumberInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="count" header="Count" />
      <NumberInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="diameter" header="Diameter" />
      <ColorInput field="fillColor" setWaveOption={setArcsSettings} waveOption={arcsSettings} header="Fill Color" />
      {/* GLOW */}
      <NumberInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="lineWidth" header="Line Width" />
      <BooleanInput waveOption={arcsSettings} setWaveOption={setArcsSettings} field="rounded" header="Rounded" />
      <SaveButton clearSettings={setArcsSettings} setSettings={setSettings} type="Arcs" waveSettings={arcsSettings} />
    </motion.div>
  );
};

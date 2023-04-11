import { FrequencyBandInput } from '../inputs/FrequencyBandInput/FrequencyBandInput';
import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { ICirclesOptions } from '@foobar404/wave';
import { NumberInput } from '../inputs/NumberInput/NumberInput';
import { ColorInput } from '../inputs/ColorInput/ColorInput';
import { SaveButton } from '../inputs/SaveButton/SaveButton';
import { visualizationOptions } from '../../types/settings';
import { AnimatePresence, motion } from 'framer-motion';
interface Props {
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
  currentSettings: visualizationOptions;
  setCurrentSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}

export const CirclesSettings = ({ setSettings, currentSettings, setCurrentSettings }: Props) => {
  const circleSettings = currentSettings as ICirclesOptions;
  const setCircleSettings = setCurrentSettings as React.Dispatch<React.SetStateAction<ICirclesOptions>>;
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.5 },
      }}
    >
      <FrequencyBandInput waveOption={circleSettings} setWaveOption={setCircleSettings} />
      <NumberInput waveOption={circleSettings} setWaveOption={setCircleSettings} field="count" header="Count" />
      <NumberInput waveOption={circleSettings} setWaveOption={setCircleSettings} field="diameter" header="Diameter" />
      <ColorInput field="fillColor" setWaveOption={setCircleSettings} waveOption={circleSettings} header="Fill Color" />
      {/* GLOW */}
      <ColorInput field="lineColor" setWaveOption={setCircleSettings} waveOption={circleSettings} header="Line Color" />
      <NumberInput
        waveOption={circleSettings}
        setWaveOption={setCircleSettings}
        field="lineWidth"
        header="Line Width"
      />
      <SaveButton
        clearSettings={setCircleSettings}
        setSettings={setSettings}
        type="Circles"
        waveSettings={circleSettings}
      />
    </motion.div>
  );
};

import { FrequencyBandInput } from '../inputs/FrequencyBandInput/FrequencyBandInput';
// import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { ITurntableOptions } from '@foobar404/wave';
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

export const TurntableSettings = ({ setSettings, currentSettings, setCurrentSettings }: Props) => {
  const turntableSettings = currentSettings as ITurntableOptions;
  const setTurntableSettings = setCurrentSettings as React.Dispatch<React.SetStateAction<ITurntableOptions>>;
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.5 },
      }}
    >
      <FrequencyBandInput waveOption={turntableSettings} setWaveOption={setTurntableSettings} />
      <NumberInput waveOption={turntableSettings} setWaveOption={setTurntableSettings} field="count" header="Count" />
      <NumberInput
        waveOption={turntableSettings}
        setWaveOption={setTurntableSettings}
        field="cubeHeight"
        header="Cube Height"
      />
      <NumberInput
        waveOption={turntableSettings}
        setWaveOption={setTurntableSettings}
        field="diameter"
        header="Diameter"
      />
      <ColorInput
        field="fillColor"
        setWaveOption={setTurntableSettings}
        waveOption={turntableSettings}
        header="Fill Color"
      />
      <ColorInput
        field="lineColor"
        setWaveOption={setTurntableSettings}
        waveOption={turntableSettings}
        header="Line Color"
      />
      {/* GLOW */}
      <NumberInput
        waveOption={turntableSettings}
        setWaveOption={setTurntableSettings}
        field="lineWidth"
        header="Line Width"
      />
      <NumberInput waveOption={turntableSettings} setWaveOption={setTurntableSettings} field="gap" header="Gap" />
      <NumberInput waveOption={turntableSettings} setWaveOption={setTurntableSettings} field="rotate" header="Rotate" />
      <BooleanInput
        waveOption={turntableSettings}
        setWaveOption={setTurntableSettings}
        field="rounded"
        header="Rounded"
      />
      <PositionInput waveOption={turntableSettings} setWaveOption={setTurntableSettings} />
      <SaveButton
        clearSettings={setTurntableSettings}
        setSettings={setSettings}
        type="Turntable"
        waveSettings={turntableSettings}
      />
    </motion.div>
  );
};

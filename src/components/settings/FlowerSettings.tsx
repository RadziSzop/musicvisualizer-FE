import { FrequencyBandInput } from '../inputs/FrequencyBandInput/FrequencyBandInput';
// import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { IFlowerOptions } from '@foobar404/wave';
import { NumberInput } from '../inputs/NumberInput/NumberInput';
import { BooleanInput } from '../inputs/BooleanInput/BooleanInput';
import { ColorInput } from '../inputs/ColorInput/ColorInput';
import { SaveButton } from '../inputs/SaveButton/SaveButton';
import { visualizationOptions } from '../../types/settings';
import { motion } from 'framer-motion';
import { StyledSettingsContainer } from './StyledSettingsContainer';
interface Props {
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
  currentSettings: visualizationOptions;
  setCurrentSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}

export const FlowerSettings = ({ setSettings, currentSettings, setCurrentSettings }: Props) => {
  const flowerSettigns = currentSettings as IFlowerOptions;
  const setFlowerSettigns = setCurrentSettings as React.Dispatch<React.SetStateAction<IFlowerOptions>>;
  return (
    <StyledSettingsContainer
      as={motion.div}
      animate={{
        opacity: 1,
      }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.5 },
      }}
    >
      <FrequencyBandInput waveOption={flowerSettigns} setWaveOption={setFlowerSettigns} />
      <NumberInput waveOption={flowerSettigns} setWaveOption={setFlowerSettigns} field="count" header="Count" />
      <NumberInput waveOption={flowerSettigns} setWaveOption={setFlowerSettigns} field="diameter" header="Diameter" />
      <ColorInput field="fillColor" setWaveOption={setFlowerSettigns} waveOption={flowerSettigns} header="Fill Color" />
      <ColorInput field="lineColor" setWaveOption={setFlowerSettigns} waveOption={flowerSettigns} header="Line Color" />
      {/* GLOW */}
      <NumberInput
        waveOption={flowerSettigns}
        setWaveOption={setFlowerSettigns}
        field="lineWidth"
        header="Line Width"
      />
      <BooleanInput waveOption={flowerSettigns} setWaveOption={setFlowerSettigns} field="rounded" header="Rounded" />
      <NumberInput waveOption={flowerSettigns} setWaveOption={setFlowerSettigns} field="rotate" header="Rotate" />
      <SaveButton
        clearSettings={setFlowerSettigns}
        setSettings={setSettings}
        type="Flower"
        waveSettings={flowerSettigns}
      />
    </StyledSettingsContainer>
  );
};

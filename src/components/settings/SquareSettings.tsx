import { FrequencyBandInput } from '../inputs/FrequencyBandInput/FrequencyBandInput';
// import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { ISquareOptions } from '@foobar404/wave';
import { NumberInput } from '../inputs/NumberInput/NumberInput';
import { BooleanInput } from '../inputs/BooleanInput/BooleanInput';
import { ColorInput } from '../inputs/ColorInput/ColorInput';
import { SaveButton } from '../inputs/SaveButton/SaveButton';
import { visualizationOptions } from '../../types/settings';
import { PositionInput } from '../inputs/PositionInput/PositionInput';
import { motion } from 'framer-motion';
import { StyledSettingsContainer } from './StyledSettingsContainer';
interface Props {
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
  currentSettings: visualizationOptions;
  setCurrentSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}

export const SquareSettings = ({ setSettings, currentSettings, setCurrentSettings }: Props) => {
  const squareSettings = currentSettings as ISquareOptions;
  const setSquareSettings = setCurrentSettings as React.Dispatch<React.SetStateAction<ISquareOptions>>;
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
      <FrequencyBandInput waveOption={squareSettings} setWaveOption={setSquareSettings} />
      <NumberInput waveOption={squareSettings} setWaveOption={setSquareSettings} field="count" header="Count" />
      <ColorInput field="lineColor" setWaveOption={setSquareSettings} waveOption={squareSettings} header="Line Color" />
      {/* GLOW */}
      <NumberInput
        waveOption={squareSettings}
        setWaveOption={setSquareSettings}
        field="lineWidth"
        header="Line Width"
      />
      <BooleanInput waveOption={squareSettings} setWaveOption={setSquareSettings} field="rounded" header="Rounded" />
      <PositionInput waveOption={squareSettings} setWaveOption={setSquareSettings} />
      <SaveButton
        clearSettings={setSquareSettings}
        setSettings={setSettings}
        type="Square"
        waveSettings={squareSettings}
      />
    </StyledSettingsContainer>
  );
};

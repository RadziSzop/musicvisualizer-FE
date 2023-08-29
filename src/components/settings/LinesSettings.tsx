import { FrequencyBandInput } from '../inputs/FrequencyBandInput/FrequencyBandInput';
// import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { ILinesOptions } from '@foobar404/wave';
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

export const LinesSettings = ({ setSettings, currentSettings, setCurrentSettings }: Props) => {
  const linesSettings = currentSettings as ILinesOptions;
  const setLinesSettings = setCurrentSettings as React.Dispatch<React.SetStateAction<ILinesOptions>>;
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
      <FrequencyBandInput waveOption={linesSettings} setWaveOption={setLinesSettings} />
      <NumberInput waveOption={linesSettings} setWaveOption={setLinesSettings} field="count" header="Count" />
      <ColorInput field="lineColor" setWaveOption={setLinesSettings} waveOption={linesSettings} header="Line Color" />
      {/* GLOW */}
      <NumberInput waveOption={linesSettings} setWaveOption={setLinesSettings} field="lineWidth" header="Line Width" />
      <BooleanInput waveOption={linesSettings} setWaveOption={setLinesSettings} field="rounded" header="Rounded" />
      <BooleanInput waveOption={linesSettings} setWaveOption={setLinesSettings} field="mirroredX" header="Mirrored X" />
      <BooleanInput waveOption={linesSettings} setWaveOption={setLinesSettings} field="mirroredY" header="Mirrored Y" />
      <PositionInput waveOption={linesSettings} setWaveOption={setLinesSettings} />

      <SaveButton
        clearSettings={setLinesSettings}
        setSettings={setSettings}
        type="Lines"
        waveSettings={linesSettings}
      />
    </StyledSettingsContainer>
  );
};

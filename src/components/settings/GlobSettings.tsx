import { FrequencyBandInput } from '../inputs/FrequencyBandInput/FrequencyBandInput';
// import { GlowInput } from '../inputs/GlowInput';
import { waveOptions } from '../../App';
import { IGlobOptions } from '@foobar404/wave';
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

export const GlobSettings = ({ setSettings, currentSettings, setCurrentSettings }: Props) => {
  const globSettings = currentSettings as IGlobOptions;
  const setGlobSettings = setCurrentSettings as React.Dispatch<React.SetStateAction<IGlobOptions>>;
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
      <FrequencyBandInput waveOption={globSettings} setWaveOption={setGlobSettings} />
      <NumberInput waveOption={globSettings} setWaveOption={setGlobSettings} field="count" header="Count" />
      <NumberInput waveOption={globSettings} setWaveOption={setGlobSettings} field="diameter" header="Diameter" />
      <ColorInput field="fillColor" setWaveOption={setGlobSettings} waveOption={globSettings} header="Fill Color" />
      <ColorInput field="lineColor" setWaveOption={setGlobSettings} waveOption={globSettings} header="Line Color" />
      {/* GLOW */}
      <NumberInput waveOption={globSettings} setWaveOption={setGlobSettings} field="lineWidth" header="Line Width" />
      <BooleanInput waveOption={globSettings} setWaveOption={setGlobSettings} field="rounded" header="Rounded" />
      <BooleanInput waveOption={globSettings} setWaveOption={setGlobSettings} field="mirroredX" header="Mirrored X" />
      <SaveButton clearSettings={setGlobSettings} setSettings={setSettings} type="Glob" waveSettings={globSettings} />
    </StyledSettingsContainer>
  );
};

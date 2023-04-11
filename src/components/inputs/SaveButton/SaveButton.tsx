import { motion } from 'framer-motion';
import { waveOptions } from '../../../App';
import { visualizationOptions, visualizationType } from '../../../types/settings';
import { StyledSaveButton } from './StyledSaveButton';

interface Props {
  setSettings: React.Dispatch<React.SetStateAction<waveOptions[]>>;
  waveSettings: visualizationOptions;
  clearSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
  type: visualizationType;
}

export const SaveButton = ({ setSettings, clearSettings, type, waveSettings }: Props) => {
  return (
    <StyledSaveButton
      as={motion.input}
      type="button"
      value="Save"
      onClick={() => {
        setSettings((prevState) => {
          return [...prevState, { type: type, options: waveSettings }];
        });
        clearSettings({});
      }}
    />
  );
};

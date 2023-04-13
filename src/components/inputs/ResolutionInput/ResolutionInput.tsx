import {
  StyledResolutionInputHeader,
  StyledResolutionInputOptionContainer,
  StyledResolutionInputContainer,
} from './StyledResolutionInput';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
interface Props {
  settings: { width: number; height: number; background: string };
  setSettings: Dispatch<SetStateAction<{ width: number; height: number; background: string }>>;
}

export const ResolutionInput = ({ setSettings, settings }: Props) => {
  return (
    <motion.div layout>
      <StyledResolutionInputHeader as={motion.h3} layout>
        Output/Visualizer Resolution
      </StyledResolutionInputHeader>
      <StyledResolutionInputContainer>
        <StyledResolutionInputOptionContainer
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          isSelected={settings.width === 1920}
          onClick={() => {
            setSettings((prevState) => ({ ...prevState, height: 1080, width: 1920 }));
          }}
        >
          1920x1080
        </StyledResolutionInputOptionContainer>
        <StyledResolutionInputOptionContainer
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          isSelected={settings.width === 1280}
          onClick={() => {
            setSettings((prevState) => ({ ...prevState, height: 720, width: 1280 }));
          }}
        >
          1280x720
        </StyledResolutionInputOptionContainer>
      </StyledResolutionInputContainer>
    </motion.div>
  );
};

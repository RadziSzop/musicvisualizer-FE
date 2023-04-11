import {
  StyledFrequencyHeader,
  StyledFrequencyOptionContainer,
  StyledFrequencySelectContainer,
} from './StyledFrequencyBandInput';
import { visualizationOptions } from '../../../types/settings';
import { motion } from 'framer-motion';
interface Props {
  waveOption: visualizationOptions;
  setWaveOption: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}
export const FrequencyBandInput = ({ setWaveOption, waveOption }: Props) => {
  return (
    <motion.div layout>
      <StyledFrequencyHeader as={motion.h3} layout>
        Frequency Band
      </StyledFrequencyHeader>
      <StyledFrequencySelectContainer>
        <StyledFrequencyOptionContainer
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          isSelected={waveOption.frequencyBand === 'highs'}
          onClick={() => {
            setWaveOption((prevState) => ({ ...prevState, frequencyBand: 'highs' }));
          }}
        >
          Highs
        </StyledFrequencyOptionContainer>
        <StyledFrequencyOptionContainer
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          isSelected={waveOption.frequencyBand === 'mids'}
          onClick={() => {
            setWaveOption((prevState) => ({ ...prevState, frequencyBand: 'mids' }));
          }}
        >
          Mids
        </StyledFrequencyOptionContainer>
        <StyledFrequencyOptionContainer
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          isSelected={waveOption.frequencyBand === 'lows'}
          onClick={() => {
            setWaveOption((prevState) => ({ ...prevState, frequencyBand: 'lows' }));
          }}
        >
          Lows
        </StyledFrequencyOptionContainer>
        <StyledFrequencyOptionContainer
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
          isSelected={waveOption.frequencyBand === 'base'}
          onClick={() => {
            setWaveOption((prevState) => ({ ...prevState, frequencyBand: 'base' }));
          }}
        >
          Base
        </StyledFrequencyOptionContainer>
      </StyledFrequencySelectContainer>
    </motion.div>
  );
};

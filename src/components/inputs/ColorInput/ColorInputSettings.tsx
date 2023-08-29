import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { visualizationOptions } from '../../../types/settings';
import { GradientInput } from './Inputs/GradientInput';
import { ImageInput } from './Inputs/ImageInput';
import { SimpleColorInput } from './Inputs/SimpleColorInput';
import { ColorInputButtonGroupContainer } from './StyledColorInput';
interface Props<T extends visualizationOptions> {
  setWaveOption: Dispatch<SetStateAction<T>>;
  waveOption: T;
  field: keyof T;
  isEnabled: boolean;
  setSelectedType: Dispatch<SetStateAction<number | null>>;
  selectedType: number | null;
}
const formVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      height: { duration: 0.5, delay: 0 },
      delay: 0.2,
      duration: 0.3,
    },
  },
};
export const ColorInputSettings = <T extends visualizationOptions>({
  field,
  setWaveOption,
  waveOption,
  isEnabled,
  selectedType,
  setSelectedType,
}: Props<T>) => {
  return (
    <>
      {isEnabled === true && (
        <motion.div variants={formVariants} initial="hidden" animate="visible">
          <ColorInputButtonGroupContainer as={motion.div}>
            <motion.input
              type="button"
              animate={selectedType === 0 ? { scale: 1.2, backgroundColor: '#3f3f3f' } : { scale: 1 }}
              onClick={() => {
                setSelectedType(0);
                setWaveOption((prevState) => {
                  return { ...prevState, [field]: '#000000' };
                });
              }}
              value={'Color'}
            />

            <motion.input
              type="button"
              animate={selectedType === 1 ? { scale: 1.2, backgroundColor: '#3f3f3f' } : { scale: 1 }}
              onClick={() => {
                setSelectedType(1);
                setWaveOption((prevState) => {
                  return { ...prevState, [field]: { gradient: ['#0be9f9', '#6d17ee'], rotate: 0 } };
                });
              }}
              value={'Gradient'}
            />

            <motion.input
              type="button"
              animate={selectedType === 2 ? { scale: 1.2, backgroundColor: '#3f3f3f' } : { scale: 1 }}
              onClick={() => {
                setSelectedType(2);
              }}
              value={'Image'}
            />
          </ColorInputButtonGroupContainer>
          <AnimatePresence>
            {selectedType === 0 && (
              <SimpleColorInput field={field} setWaveOption={setWaveOption} waveOption={waveOption} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {selectedType === 1 && (
              <GradientInput field={field} setWaveOption={setWaveOption} waveOption={waveOption} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {selectedType === 2 && <ImageInput field={field} setWaveOption={setWaveOption} waveOption={waveOption} />}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};

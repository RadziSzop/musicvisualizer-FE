import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import { visualizationOptions } from '../../../types/settings';
import { Gradient } from './Inputs/Gradient';
import { ColorInputButtonGroupContainer, ColorPicker } from './StyledColorInput';
interface Props<T extends visualizationOptions> {
  setWaveOption: Dispatch<SetStateAction<T>>;
  waveOption: T;
  field: keyof T;
  isEnabled: boolean;
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
}: Props<T>) => {
  const [selectedType, setSelectedType] = useState(4);
  return (
    <>
      {isEnabled === true && (
        <motion.div variants={formVariants} initial="hidden" animate="visible">
          {/* <motion.div> */}
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
              <ColorPicker
                height={'60px'}
                width={'240px'}
                as={motion.input}
                type="color"
                value={typeof waveOption[field] === 'string' ? String(waveOption[field]) : '#000000'}
                onChange={(e) => {
                  setWaveOption((prevState) => {
                    const newState = {
                      ...prevState,
                      [field]: e.target.value,
                    } as T;
                    return newState;
                  });
                }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {selectedType === 1 && <Gradient field={field} setWaveOption={setWaveOption} waveOption={waveOption} />}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};

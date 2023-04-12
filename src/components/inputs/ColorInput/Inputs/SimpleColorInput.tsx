import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { visualizationOptions } from '../../../../types/settings';
import { ColorPicker } from '../StyledColorInput';
interface Props<T extends visualizationOptions> {
  setWaveOption: Dispatch<SetStateAction<T>>;
  waveOption: T;
  field: keyof T;
}
export const SimpleColorInput = <T extends visualizationOptions>({ waveOption, setWaveOption, field }: Props<T>) => {
  return (
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
  );
};

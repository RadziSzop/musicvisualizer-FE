import { Dispatch, SetStateAction, useState } from 'react';
import { ColorInputButtonGroupContainer, ColorInputContainer, ColorPicker } from './StyledColorInput';
import { AnimatePresence, motion } from 'framer-motion';
import { visualizationOptions } from '../../../types/settings';
import { Switch } from '../../Switch/Switch';
import { ColorInputSettings } from './ColorInputSettings';

// type FillOption =
//   | string
//   | {
//       gradient: string[];
//       rotate?: number;
//     }
//   | {
//       image: string;
//     };
interface Props<T extends visualizationOptions> {
  waveOption: T;
  setWaveOption: Dispatch<SetStateAction<T>>;
  field: keyof T;
  defaultColor?: string;
  header?: string;
}
export const ColorInput = <T extends visualizationOptions>({
  waveOption,
  setWaveOption,
  field,
  defaultColor = '#000000',
  header,
}: Props<T>) => {
  console.log(waveOption);
  return (
    <ColorInputContainer as={motion.div} layout>
      {header && <motion.h3>{header}</motion.h3>}
      <Switch
        isOn={waveOption[field] !== undefined}
        changeState={() => {
          setWaveOption((prevState) => {
            const newState = {
              ...prevState,
              [field]: prevState[field] === undefined ? defaultColor : undefined,
            } as T;
            if (newState[field] === undefined) {
              // setSelectedType(4);
              delete newState[field];
            }
            return newState;
          });
        }}
      />

      <ColorInputSettings
        isEnabled={waveOption[field] !== undefined}
        waveOption={waveOption}
        setWaveOption={setWaveOption}
        field={field}
      />
    </ColorInputContainer>
  );
};

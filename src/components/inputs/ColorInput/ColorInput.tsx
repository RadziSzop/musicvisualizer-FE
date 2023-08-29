import { Dispatch, SetStateAction, useState } from 'react';
import { ColorInputContainer, StyledColorInputHeader } from './StyledColorInput';
import { motion } from 'framer-motion';
import { visualizationOptions } from '../../../types/settings';
import { Switch } from '../../Switch/Switch';
import { ColorInputSettings } from './ColorInputSettings';

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
  const [selectedType, setSelectedType] = useState<null | number>(null);

  return (
    <ColorInputContainer as={motion.div}>
      {header && (
        <StyledColorInputHeader as={motion.h3} layout>
          {header}
        </StyledColorInputHeader>
      )}
      <Switch
        isOn={waveOption[field] !== undefined}
        changeState={() => {
          setSelectedType(null);
          setWaveOption((prevState) => {
            const newState = {
              ...prevState,
              [field]: prevState[field] === undefined ? defaultColor : undefined,
            } as T;
            if (newState[field] === undefined) {
              delete newState[field];
            }
            return newState;
          });
        }}
      />

      <ColorInputSettings
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        isEnabled={waveOption[field] !== undefined}
        waveOption={waveOption}
        setWaveOption={setWaveOption}
        field={field}
      />
    </ColorInputContainer>
  );
};

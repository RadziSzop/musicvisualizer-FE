import { Dispatch, SetStateAction } from 'react';
import { visualizationOptions } from '../../../types/settings';
import { Switch } from '../../Switch/Switch';
import { StyledBooleanInputContainer, StyledBooleanInputHeader } from './StyledBooleanInput';
import { motion } from 'framer-motion';
interface Props<T extends visualizationOptions | { width: number; height: number; background: string }> {
  waveOption: T;
  setWaveOption: Dispatch<SetStateAction<T>>;
  field: keyof T;
  header?: string;
}

export const BooleanInput = <T extends visualizationOptions | { width: number; height: number; background: string }>({
  waveOption,
  setWaveOption,
  field,
  header,
}: Props<T>) => {
  return (
    <motion.div>
      {header && (
        <StyledBooleanInputHeader as={motion.h3} layout>
          {header}
        </StyledBooleanInputHeader>
      )}
      <StyledBooleanInputContainer>
        <Switch
          isOn={waveOption[field] !== undefined}
          changeState={() => {
            setWaveOption((prevState) => {
              const newState = {
                ...prevState,
                [field]: prevState[field] === undefined ? true : undefined,
              } as T;
              if (newState[field] === undefined) {
                delete newState[field];
              }
              return newState;
            });
          }}
        />
      </StyledBooleanInputContainer>
    </motion.div>
  );
};

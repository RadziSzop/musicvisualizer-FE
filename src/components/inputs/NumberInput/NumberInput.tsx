import { LayoutGroup, motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { visualizationOptions } from '../../../types/settings';
import { Switch } from '../../Switch/Switch';
import { StyledInput, StyledInputContainer } from './StyledNumberInput';
interface Props<T extends visualizationOptions> {
  waveOption: T;
  setWaveOption: Dispatch<SetStateAction<T>>;
  field: keyof T;
  defaultValue?: number;
  maxValue?: number;
  header?: string;
}

export const NumberInput = <T extends visualizationOptions>({
  waveOption,
  setWaveOption,
  field,
  defaultValue = 10,
  maxValue = 100,
  header,
}: Props<T>) => {
  const handleChange = (newValue: number) => {
    setWaveOption((prevState) => {
      const newState = { ...prevState, [field]: Math.abs(newValue < maxValue ? newValue : maxValue) } as T;
      return newState;
    });
  };

  return (
    <motion.div
      layout
      transition={{
        layout: { duration: 0.3 },
      }}
    >
      {header && <h3>{header}</h3>}
      <StyledInputContainer>
        <Switch
          isOn={waveOption[field] !== undefined}
          changeState={() => {
            setWaveOption((prevState) => {
              const newState = {
                ...prevState,
                [field]: prevState[field] === undefined ? defaultValue : undefined,
              } as T;
              if (newState[field] === undefined) {
                delete newState[field];
              }
              return newState;
            });
          }}
        />
        <StyledInput
          as={motion.input}
          type={'text'}
          min={1}
          step={1}
          disabled={waveOption[field] === undefined}
          value={waveOption[field] === undefined ? '' : String(waveOption[field])}
          onChange={(e) => {
            const newValue = e.target.value.replace(/[^\d]+/g, '');
            handleChange(Number(newValue));
          }}
        />
      </StyledInputContainer>
    </motion.div>
  );
};

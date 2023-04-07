import { Dispatch, SetStateAction } from 'react';
import { visualizationOptions } from '../../../types/settings';
import { Switch } from '../../Switch/Switch';
import { StyledInputContainer } from '../StyledInputs';

interface Props<T extends visualizationOptions> {
  waveOption: T;
  setWaveOption: Dispatch<SetStateAction<T>>;
  field: keyof T;
  header?: string;
}

export const BooleanInput = <T extends visualizationOptions>({
  waveOption,
  setWaveOption,
  field,
  header,
}: Props<T>) => {
  return (
    <>
      {header && <h3>{header}</h3>}
      <StyledInputContainer>
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
      </StyledInputContainer>
    </>
  );
};

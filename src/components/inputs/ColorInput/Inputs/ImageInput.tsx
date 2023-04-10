import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { visualizationOptions } from '../../../../types/settings';
import { StyledTextInput } from '../StyledColorInput';
interface Props<T extends visualizationOptions> {
  setWaveOption: Dispatch<SetStateAction<T>>;
  waveOption: T;
  field: keyof T;
}

type FillOption =
  | string
  | {
      gradient: string[];
      rotate?: number;
    }
  | {
      image: string;
    };
export const ImageInput = <T extends visualizationOptions>({ waveOption, setWaveOption, field }: Props<T>) => {
  return (
    <StyledTextInput
      type="text"
      placeholder="Url to Image"
      value={
        typeof (waveOption[field] as FillOption) !== 'string' &&
        Object.hasOwn(
          waveOption[field] as
            | {
                gradient: string[];
                rotate?: number;
              }
            | {
                image: string;
              },
          'image',
        )
          ? (waveOption[field] as { image: string }).image
          : ''
      }
      onChange={(e) => {
        setWaveOption((prevState) => {
          return {
            ...prevState,
            [field]: {
              image: e.target.value,
            },
          };
        });
      }}
    />
  );
};

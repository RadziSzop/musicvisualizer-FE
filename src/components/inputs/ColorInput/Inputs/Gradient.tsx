import { Dispatch, SetStateAction } from 'react';
import { visualizationOptions } from '../../../../types/settings';
import { ColorInputGradient, ColorPicker } from '../StyledColorInput';
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
export const Gradient = <T extends visualizationOptions>({ waveOption, setWaveOption, field }: Props<T>) => {
  return (
    <ColorInputGradient
      backgroundColor={(waveOption[field] as { gradient: string[] }).gradient
        .map((color) => {
          return color + ',';
        })
        .join('')}
      rotation={String((waveOption[field] as { rotate: number }).rotate)}
    />
  );
};

// typeof waveOption[field] === 'object' &&
// Object.prototype.hasOwnProperty.call(waveOption[field] as FillOption, 'gradient')
//   ? String(((waveOption[field]) as FillOption))
//   : '#000000'

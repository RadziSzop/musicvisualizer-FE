import {
  IArcsOptions,
  IFlowerOptions,
  IGlobOptions,
  ILinesOptions,
  IShineOptions,
  ISquareOptions,
  ITurntableOptions,
  IWaveOptions,
} from '@foobar404/wave';

import { Switch } from '../Switch/Switch';
import { visualizationOptions } from '../../types/settings';
interface Props {
  settings:
    | IArcsOptions
    | IFlowerOptions
    | IGlobOptions
    | ILinesOptions
    | IShineOptions
    | ISquareOptions
    | ITurntableOptions
    | IWaveOptions;
  setSettings: React.Dispatch<
    React.SetStateAction<
      | IArcsOptions
      | IFlowerOptions
      | IGlobOptions
      | ILinesOptions
      | IShineOptions
      | ISquareOptions
      | ITurntableOptions
      | IWaveOptions
    >
  >;
}
export const RoundedInput = ({ setSettings, settings }: Props) => {
  return (
    <>
      <h3>Rounded</h3>

      <Switch
        isOn={!settings.rounded}
        changeState={() => {
          setSettings((prevState) => {
            console.log(settings.rounded);

            const newState: visualizationOptions = {
              ...prevState,
              rounded: !prevState.rounded,
            };
            return newState;
          });
        }}
      />
    </>
  );
};

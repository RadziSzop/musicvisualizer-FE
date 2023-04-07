import {
  IArcsOptions,
  ICirclesOptions,
  ICubesOptions,
  IFlowerOptions,
  IGlobOptions,
  ILinesOptions,
  IShineOptions,
  ISquareOptions,
  ITurntableOptions,
  IWaveOptions,
} from '@foobar404/wave';
import { visualizationOptions } from '../../types/settings';
import { Switch } from '../Switch/Switch';
import { StyledInputContainer } from './StyledInputs';
interface Props {
  waveOption:
    | IArcsOptions
    | ICirclesOptions
    | ICubesOptions
    | IFlowerOptions
    | IGlobOptions
    | ITurntableOptions
    | IWaveOptions;
  setWaveOption: React.Dispatch<
    React.SetStateAction<
      IArcsOptions | ICirclesOptions | ICubesOptions | IFlowerOptions | IGlobOptions | ITurntableOptions | IWaveOptions
    >
  >;
}
export const FillColorInput = ({ setWaveOption, waveOption }: Props) => {
  if (typeof waveOption.fillColor === 'string' || waveOption.fillColor === undefined) {
    return (
      <>
        <h3>Line Color</h3>
        <StyledInputContainer>
          <Switch
            isOn={waveOption.fillColor !== undefined}
            changeState={() => {
              setWaveOption((prevState) => {
                const newState:
                  | IArcsOptions
                  | ICirclesOptions
                  | ICubesOptions
                  | IFlowerOptions
                  | IGlobOptions
                  | ITurntableOptions
                  | IWaveOptions = {
                  ...prevState,
                  fillColor: prevState.fillColor === undefined ? '#000000' : undefined,
                };
                return newState;
              });
            }}
          />
          <input
            type={'color'}
            disabled={waveOption.fillColor === undefined}
            value={waveOption.fillColor === undefined ? '#000000' : (waveOption.fillColor as string)}
            onChange={(e) => {
              setWaveOption((prevState) => {
                const newState:
                  | IArcsOptions
                  | ICirclesOptions
                  | ICubesOptions
                  | IFlowerOptions
                  | IGlobOptions
                  | ITurntableOptions
                  | IWaveOptions = {
                  ...prevState,
                  fillColor: e.target.value,
                };
                return newState;
              });
            }}
          />
        </StyledInputContainer>
      </>
    );
  } else {
    return <>Test</>;
  }
};

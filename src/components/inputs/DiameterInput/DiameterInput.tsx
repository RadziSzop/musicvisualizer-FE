import {
  IArcsOptions,
  ICirclesOptions,
  IFlowerOptions,
  IGlobOptions,
  IShineOptions,
  ISquareOptions,
  ITurntableOptions,
} from '@foobar404/wave';
import { visualizationOptions } from '../../../types/settings';
import { StyledDiameterInput, StyledDiameterInputContainer } from './StyledDiameterInput';
import { Switch } from '../../Switch/Switch';
interface Props {
  settings:
    | IArcsOptions
    | ICirclesOptions
    | IFlowerOptions
    | IGlobOptions
    | IShineOptions
    | ISquareOptions
    | ITurntableOptions;
  setSettings: React.Dispatch<
    React.SetStateAction<
      | IArcsOptions
      | ICirclesOptions
      | IFlowerOptions
      | IGlobOptions
      | IShineOptions
      | ISquareOptions
      | ITurntableOptions
    >
  >;
}
export const DiameterInput = ({ setSettings, settings }: Props) => {
  return (
    <>
      <h3>Diameter</h3>
      <StyledDiameterInputContainer>
        <Switch
          isOn={settings.diameter !== undefined}
          changeState={() => {
            setSettings((prevState) => {
              const newState:
                | IArcsOptions
                | ICirclesOptions
                | IFlowerOptions
                | IGlobOptions
                | IShineOptions
                | ISquareOptions
                | ITurntableOptions = {
                ...prevState,
                diameter: prevState.diameter === undefined ? 10 : undefined,
              };
              return newState;
            });
          }}
        />
        <StyledDiameterInput
          type={'text'}
          min={1}
          step={1}
          value={settings.diameter || ''}
          disabled={settings.diameter === undefined}
          onChange={(e) => {
            const newValue = e.target.value.replace(/[^\d]+/g, '');
            setSettings((prevState) => {
              const newState: visualizationOptions = { ...prevState, diameter: Number(newValue) };
              return newState;
            });
          }}
        />
      </StyledDiameterInputContainer>
    </>
  );
};

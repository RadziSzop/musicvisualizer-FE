import { visualizationOptions } from '../../../types/settings';
import { Switch } from '../../Switch/Switch';
import { StyledCountInput, StyledCountInputContainer } from './StyledCountInput';
interface Props {
  settings: visualizationOptions;
  setSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}
export const CountInput = ({ setSettings, settings }: Props) => {
  return (
    <>
      <h3>Count</h3>
      <StyledCountInputContainer>
        <Switch
          isOn={settings.count !== undefined}
          changeState={() => {
            setSettings((prevState) => {
              const newState: visualizationOptions = {
                ...prevState,
              };
              if (newState.count === undefined) {
                newState.count = 10;
              } else {
                delete newState.count;
              }
              return newState;
            });
          }}
        />
        <StyledCountInput
          type={'text'}
          min={1}
          step={1}
          disabled={settings.count === undefined}
          value={settings.count || ''}
          onChange={(e) => {
            const newValue = e.target.value.replace(/[^\d]+/g, '');
            setSettings((prevState) => {
              const newState: visualizationOptions = { ...prevState, count: Number(newValue) };
              return newState;
            });
          }}
        />
      </StyledCountInputContainer>
    </>
  );
};

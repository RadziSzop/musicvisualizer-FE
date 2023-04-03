import { visualizationOptions } from '../../types/settings';
import { Switch } from '../Switch/Switch';
import { StyledInput, StyledInputContainer } from './StyledInputs';
interface Props {
  settings: visualizationOptions;
  setSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}
export const LineWidthInput = ({ setSettings, settings }: Props) => {
  return (
    <>
      <h3>Line Width</h3>
      <StyledInputContainer>
        <Switch
          isOn={settings.lineWidth !== undefined}
          changeState={() => {
            setSettings((prevState) => {
              const newState: visualizationOptions = {
                ...prevState,
                lineWidth: prevState.lineWidth === undefined ? 10 : undefined,
              };
              return newState;
            });
          }}
        />
        <StyledInput
          type={'text'}
          min={1}
          step={1}
          disabled={settings.lineWidth === undefined}
          value={settings.lineWidth || ''}
          onChange={(e) => {
            const newValue = e.target.value.replace(/[^\d]+/g, '');
            setSettings((prevState) => {
              const newState: visualizationOptions = { ...prevState, lineWidth: Number(newValue) };
              return newState;
            });
          }}
        />
      </StyledInputContainer>
    </>
  );
};

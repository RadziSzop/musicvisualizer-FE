import { visualizationOptions } from '../../types/settings';
import { Switch } from '../Switch/Switch';
import { StyledInputContainer } from './StyledInputs';
interface Props {
  settings: visualizationOptions;
  setSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}
export const LineColorInput = ({ setSettings, settings }: Props) => {
  if (typeof settings.lineColor === 'string' || settings.lineColor === undefined) {
    return (
      <>
        <h3>Line Color</h3>
        <StyledInputContainer>
          <Switch
            isOn={settings.lineColor !== undefined}
            changeState={() => {
              setSettings((prevState) => {
                const newState: visualizationOptions = {
                  ...prevState,
                  lineColor: prevState.lineColor === undefined ? '#000000' : undefined,
                };
                return newState;
              });
            }}
          />
          <input
            type={'color'}
            disabled={settings.lineColor === undefined}
            value={settings.lineColor === undefined ? '#000000' : (settings.lineColor as string)}
            onChange={(e) => {
              setSettings((prevState) => {
                const newState: visualizationOptions = {
                  ...prevState,
                  lineColor: e.target.value,
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

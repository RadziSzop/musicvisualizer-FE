import { visualizationOptions } from '../../types/settings';
import { Switch } from '../Switch/Switch';
import { StyledInputContainer } from './StyledInputs';
interface Props {
  waveOption: visualizationOptions;
  setWaveOption: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}
export const LineColorInput = ({ setWaveOption, waveOption }: Props) => {
  if (typeof waveOption.lineColor === 'string' || waveOption.lineColor === undefined) {
    return (
      <>
        <h3>Line Color</h3>
        <StyledInputContainer>
          <Switch
            isOn={waveOption.lineColor !== undefined}
            changeState={() => {
              setWaveOption((prevState) => {
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
            disabled={waveOption.lineColor === undefined}
            value={waveOption.lineColor === undefined ? '#000000' : (waveOption.lineColor as string)}
            onChange={(e) => {
              setWaveOption((prevState) => {
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

import { visualizationOptions } from '../../types/settings';
import { StyledFrequencyOptionContainer, StyledFrequencySelectContainer } from './StyledFrequencyBandInput';
interface Props {
  settings: visualizationOptions;
  setSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}
export const FrequencyBandInput = ({ setSettings, settings }: Props) => {
  return (
    <>
      <h3>Line Width</h3>
      <StyledFrequencySelectContainer>
        <StyledFrequencyOptionContainer
          isSelected={settings.frequencyBand === 'highs'}
          onClick={() => {
            setSettings((prevState) => ({ ...prevState, frequencyBand: 'highs' }));
          }}
        >
          Highs
        </StyledFrequencyOptionContainer>
        <StyledFrequencyOptionContainer
          isSelected={settings.frequencyBand === 'mids'}
          onClick={() => {
            setSettings((prevState) => ({ ...prevState, frequencyBand: 'mids' }));
          }}
        >
          Mids
        </StyledFrequencyOptionContainer>
        <StyledFrequencyOptionContainer
          isSelected={settings.frequencyBand === 'lows'}
          onClick={() => {
            setSettings((prevState) => ({ ...prevState, frequencyBand: 'lows' }));
          }}
        >
          Lows
        </StyledFrequencyOptionContainer>
        <StyledFrequencyOptionContainer
          isSelected={settings.frequencyBand === 'base'}
          onClick={() => {
            setSettings((prevState) => ({ ...prevState, frequencyBand: 'base' }));
          }}
        >
          Base
        </StyledFrequencyOptionContainer>
      </StyledFrequencySelectContainer>
    </>
  );
};

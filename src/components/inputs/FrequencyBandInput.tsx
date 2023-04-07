import { StyledFrequencyOptionContainer, StyledFrequencySelectContainer } from './StyledFrequencyBandInput';
import { visualizationOptions } from '../../types/settings';
interface Props {
  waveOption: visualizationOptions;
  setWaveOption: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}
export const FrequencyBandInput = ({ setWaveOption, waveOption }: Props) => {
  return (
    <>
      <h3>Line Width</h3>
      <StyledFrequencySelectContainer>
        <StyledFrequencyOptionContainer
          isSelected={waveOption.frequencyBand === 'highs'}
          onClick={() => {
            setWaveOption((prevState) => ({ ...prevState, frequencyBand: 'highs' }));
          }}
        >
          Highs
        </StyledFrequencyOptionContainer>
        <StyledFrequencyOptionContainer
          isSelected={waveOption.frequencyBand === 'mids'}
          onClick={() => {
            setWaveOption((prevState) => ({ ...prevState, frequencyBand: 'mids' }));
          }}
        >
          Mids
        </StyledFrequencyOptionContainer>
        <StyledFrequencyOptionContainer
          isSelected={waveOption.frequencyBand === 'lows'}
          onClick={() => {
            setWaveOption((prevState) => ({ ...prevState, frequencyBand: 'lows' }));
          }}
        >
          Lows
        </StyledFrequencyOptionContainer>
        <StyledFrequencyOptionContainer
          isSelected={waveOption.frequencyBand === 'base'}
          onClick={() => {
            setWaveOption((prevState) => ({ ...prevState, frequencyBand: 'base' }));
          }}
        >
          Base
        </StyledFrequencyOptionContainer>
      </StyledFrequencySelectContainer>
    </>
  );
};

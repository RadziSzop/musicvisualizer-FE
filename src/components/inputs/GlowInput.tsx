import { visualizationOptions } from '../../types/settings';
interface Props {
  waveOption: visualizationOptions;
  setWaveOption: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}
export const GlowInput = ({ setWaveOption, waveOption }: Props) => {
  return (
    <>
      <input
        type={'text'}
        min={1}
        step={1}
        value={waveOption.glow?.strength}
        onChange={(e) => {
          const newValue = e.target.value.replace(/[^\d]+/g, '');
          setWaveOption((prevState) => {
            const newState: visualizationOptions = {
              ...prevState,
              glow: { strength: Number(newValue), color: prevState.glow?.color || '#aaaaaa' },
            };
            return newState;
          });
        }}
      />
      <input
        type={'color'}
        value={waveOption.glow?.color}
        onChange={(e) => {
          setWaveOption((prevState) => {
            const newState: visualizationOptions = {
              ...prevState,
              glow: { strength: prevState.glow?.strength || 10, color: e.target.value },
            };
            return newState;
          });
        }}
      />
    </>
  );
};

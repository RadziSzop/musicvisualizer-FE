import { visualizationOptions } from '../../types/settings';
interface Props {
  settings: visualizationOptions;
  setSettings: React.Dispatch<React.SetStateAction<visualizationOptions>>;
}
export const GlowInput = ({ setSettings, settings }: Props) => {
  return (
    <>
      <input
        type={'text'}
        min={1}
        step={1}
        value={settings.glow?.strength}
        onChange={(e) => {
          const newValue = e.target.value.replace(/[^\d]+/g, '');
          setSettings((prevState) => {
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
        value={settings.glow?.color}
        onChange={(e) => {
          setSettings((prevState) => {
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

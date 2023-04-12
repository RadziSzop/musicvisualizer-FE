import { useContext } from 'react';
import { StyledVisualizer, StyledVisualizerContainer } from './StyledVisualizer';
import { VisualizationContext } from '../../App';

interface Props {
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
}
export const Visualizer = ({ canvasRef }: Props) => {
  const settingsContext = useContext(VisualizationContext);

  const { visualizationSettings } = settingsContext || {
    visualizationSettings: {
      height: 720,
      width: 1280,
    },
  };
  return (
    <StyledVisualizerContainer>
      <StyledVisualizer height={visualizationSettings.height} width={visualizationSettings.width} ref={canvasRef} />
    </StyledVisualizerContainer>
  );
};

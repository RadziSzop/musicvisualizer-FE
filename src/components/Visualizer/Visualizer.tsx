import { useEffect, useState } from 'react';
import { StyledVisualizer } from './StyledVisualizer';

interface Props {
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
  canvasSize: {
    height: number;
    width: number;
  };
  setCanvasSize: React.Dispatch<
    React.SetStateAction<{
      height: number;
      width: number;
    }>
  >;
}
export const Visualizer = ({ canvasRef, canvasSize, setCanvasSize }: Props) => {
  return <StyledVisualizer height={canvasSize.height} width={canvasSize.width} ref={canvasRef} />;
  //   return <StyledVisualizer height="1000px" width="1000px" ref={canvasRef} />;
};

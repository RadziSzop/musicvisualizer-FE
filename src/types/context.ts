export interface VisualizationContextValue {
  visualizationSettings: { width: number; height: number; background: string };
  setVisualizationSettings: React.Dispatch<React.SetStateAction<{ width: number; height: number; background: string }>>;
}
